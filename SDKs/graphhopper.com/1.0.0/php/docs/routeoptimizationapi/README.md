# routeOptimizationAPI

## Overview


## Quickstart

The Route Optimization API can be used to solve [traveling salesman](https://en.wikipedia.org/wiki/Travelling_salesman_problem) or [vehicle routing problems](https://en.wikipedia.org/wiki/Vehicle_routing_problem).
Solve your first problem by following these steps. If you already have a GraphHopper account, start with step 2.

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)
3. Download [simple traveling salesman problem](https://gist.github.com/oblonski/fb2f2be534c3ebe7bebaa72151194182) and save it in a local folder
4. Open your command line, go to that local folder and use cURL ([What is cURL?](https://de.wikipedia.org/wiki/CURL)) as follows:

   ```
   curl -X POST -H "Content-Type: application/json"   "https://graphhopper.com/api/1/vrp?key=YOUR_CREATED_API_KEY" --data "@tsp.json"
   ```

Alternatively, you can use our Editor to explore that API:

1. Login to your GraphHopper account
2. Go to **Editor**
3. Click the **Optimize** button to solve your first problem
4. Analyze the solution on the **Map** or as raw **JSON Output**

If you have successfully solved the first problem, we recommend this tutorial - [Getting Started with the Optimization API](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/).
It shows and describes the essential elements to model your vehicle routing problem.

To explore the full specification, we recommend that you either use our [route editor](https://www.graphhopper.com/blog/2015/07/21/graphhoppers-new-route-optimization-editor/),
which you can find in our [dashboard](https://graphhopper.com/dashboard/),
or use a REST client such as Insomnia or Postman, as described [here](https://docs.graphhopper.com/#section/Explore-our-APIs/Insomnia).

## Tutorials

We provide [a number of tutorials](https://www.graphhopper.com/tutorial/) illustrating how to use the Route Optimization API and
how to model your vehicle routing problems:

- [Getting Start with the Optimization API - Traveling Salesman Problem](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/)
- [How to solve a traveling salesman problem with a week-planning horizon?](https://www.graphhopper.com/blog/2020/07/15/how-to-solve-a-traveling-salesman-problem-with-a-week-planning-horizon-and-driver-shifts/)
- [How to schedule technicians with skills and multiple dependencies between tasks?](https://www.graphhopper.com/blog/2016/06/03/how-to-route-technicians-with-skills-and-multiple-dependencies-between-tasks/)
- [What is the difference between the min. of completion time and min. transport time?](https://www.graphhopper.com/blog/2016/06/20/what-is-the-difference-between-the-minimization-of-completion-time-and-minimizing-transport-time/)
- [How to model multiple delivery routes with a single vehicle?](https://www.graphhopper.com/blog/2016/07/21/how-to-model-multiple-delivery-routes-with-a-single-vehicle/)


### Available Operations

* [asyncVRP](#asyncvrp) - POST route optimization problem (batch mode)
* [getSolution](#getsolution) - GET the solution (batch mode)
* [solveVRP](#solvevrp) - POST route optimization problem

## asyncVRP


To solve a vehicle routing problem, perform the following steps:

1.) Make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
```

It returns a job id (job_id).

2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

We recommend to query the solution every 500ms until it returns 'status=finished'.

**Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\Algorithm;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmObjectiveEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmProblemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\Routing;
use \OpenAPI\OpenAPI\Models\Shared\RoutingCurbsideStrictnessEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutingNetworkDataProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutingSnapPreventionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrix;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixData;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixDataInfo;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Objective;
use \OpenAPI\OpenAPI\Models\Shared\ObjectiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectiveValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressCurbsideEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Shipment;
use \OpenAPI\OpenAPI\Models\Shared\Stop;
use \OpenAPI\OpenAPI\Models\Shared\VehicleType;
use \OpenAPI\OpenAPI\Models\Shared\VehicleTypeNetworkDataProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleTypeProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\Vehicle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Request();
    $request->algorithm = new Algorithm();
    $request->algorithm->objective = AlgorithmObjectiveEnum::COMPLETION_TIME;
    $request->algorithm->problemType = AlgorithmProblemTypeEnum::MIN_MAX;
    $request->configuration = new Configuration();
    $request->configuration->routing = new Routing();
    $request->configuration->routing->calcPoints = false;
    $request->configuration->routing->considerTraffic = false;
    $request->configuration->routing->curbsideStrictness = RoutingCurbsideStrictnessEnum::STRICT;
    $request->configuration->routing->failFast = false;
    $request->configuration->routing->networkDataProvider = RoutingNetworkDataProviderEnum::OPENSTREETMAP;
    $request->configuration->routing->returnSnappedWaypoints = false;
    $request->configuration->routing->snapPreventions = [
        RoutingSnapPreventionsEnum::FERRY,
        RoutingSnapPreventionsEnum::FERRY,
        RoutingSnapPreventionsEnum::BRIDGE,
        RoutingSnapPreventionsEnum::FORD,
    ];
    $request->costMatrices = [
        new CostMatrix(),
        new CostMatrix(),
        new CostMatrix(),
        new CostMatrix(),
    ];
    $request->objectives = [
        new Objective(),
    ];
    $request->relations = [
        new JobRelation(),
        new GroupRelation(),
        new JobRelation(),
    ];
    $request->services = [
        new Service(),
    ];
    $request->shipments = [
        new Shipment(),
        new Shipment(),
    ];
    $request->vehicleTypes = [
        new VehicleType(),
        new VehicleType(),
    ];
    $request->vehicles = [
        new Vehicle(),
        new Vehicle(),
        new Vehicle(),
        new Vehicle(),
    ];

    $response = $sdk->routeOptimizationAPI->asyncVRP($request);

    if ($response->jobId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSolution


Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSolutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSolutionRequest();
    $request->jobId = 'dicta';

    $response = $sdk->routeOptimizationAPI->getSolution($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## solveVRP


To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).

To solve a new vehicle routing problem, make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp?key=<your_key>
```

It returns the solution to this problem in the JSON response.

Please note that this URL is very well suited to solve minor problems.
Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Request;
use \OpenAPI\OpenAPI\Models\Shared\Algorithm;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmObjectiveEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmProblemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\Routing;
use \OpenAPI\OpenAPI\Models\Shared\RoutingCurbsideStrictnessEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutingNetworkDataProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoutingSnapPreventionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrix;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixData;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixDataInfo;
use \OpenAPI\OpenAPI\Models\Shared\CostMatrixTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Objective;
use \OpenAPI\OpenAPI\Models\Shared\ObjectiveTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectiveValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressCurbsideEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Shipment;
use \OpenAPI\OpenAPI\Models\Shared\Stop;
use \OpenAPI\OpenAPI\Models\Shared\VehicleType;
use \OpenAPI\OpenAPI\Models\Shared\VehicleTypeNetworkDataProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleTypeProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\Vehicle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Request();
    $request->algorithm = new Algorithm();
    $request->algorithm->objective = AlgorithmObjectiveEnum::TRANSPORT_TIME;
    $request->algorithm->problemType = AlgorithmProblemTypeEnum::MIN;
    $request->configuration = new Configuration();
    $request->configuration->routing = new Routing();
    $request->configuration->routing->calcPoints = false;
    $request->configuration->routing->considerTraffic = false;
    $request->configuration->routing->curbsideStrictness = RoutingCurbsideStrictnessEnum::SOFT;
    $request->configuration->routing->failFast = false;
    $request->configuration->routing->networkDataProvider = RoutingNetworkDataProviderEnum::OPENSTREETMAP;
    $request->configuration->routing->returnSnappedWaypoints = false;
    $request->configuration->routing->snapPreventions = [
        RoutingSnapPreventionsEnum::TRUNK,
        RoutingSnapPreventionsEnum::FERRY,
        RoutingSnapPreventionsEnum::BRIDGE,
    ];
    $request->costMatrices = [
        new CostMatrix(),
        new CostMatrix(),
        new CostMatrix(),
        new CostMatrix(),
    ];
    $request->objectives = [
        new Objective(),
    ];
    $request->relations = [
        new GroupRelation(),
    ];
    $request->services = [
        new Service(),
        new Service(),
        new Service(),
    ];
    $request->shipments = [
        new Shipment(),
        new Shipment(),
        new Shipment(),
    ];
    $request->vehicleTypes = [
        new VehicleType(),
        new VehicleType(),
        new VehicleType(),
        new VehicleType(),
    ];
    $request->vehicles = [
        new Vehicle(),
        new Vehicle(),
    ];

    $response = $sdk->routeOptimizationAPI->solveVRP($request);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
