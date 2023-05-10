# clusterAPI

## Overview


### Introduction

![Cluster Example](./img/cluster-solution.jpg)

It solves the “capacity clustering problem” by assigning a set of customers to a given number of distinct groups (called clusters).
The API “clusters” by minimizing the total distance from each individual customer to its designated group median.
It can also consider minimum and maximum capacity restrictions for each group.

Clustering can be used in many practical applications.
For example, it can help to plan territories, i.e. territory optimization for field teams with large territories for field workers,
or to solve large vehicle routing problems (VRP).


### Available Operations

* [asyncClusteringProblem](#asyncclusteringproblem) - Batch Cluster Endpoint
* [getClusterSolution](#getclustersolution) - GET Batch Solution Endpoint
* [solveClusteringProblem](#solveclusteringproblem) - POST Cluster Endpoint

## asyncClusteringProblem


Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
long running problems only. The work flow is asynchronous:

- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigurationClustering;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigurationRouting;
use \OpenAPI\OpenAPI\Models\Shared\ClusterCustomer;
use \OpenAPI\OpenAPI\Models\Shared\ClusterCustomerAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClusterRequest();
    $request->configuration = new ClusterConfiguration();
    $request->configuration->clustering = new ClusterConfigurationClustering();
    $request->configuration->clustering->maxQuantity = 50;
    $request->configuration->clustering->minQuantity = 30;
    $request->configuration->clustering->numClusters = 10;
    $request->configuration->responseType = 'json';
    $request->configuration->routing = new ClusterConfigurationRouting();
    $request->configuration->routing->costPerMeter = 7151.9;
    $request->configuration->routing->costPerSecond = 1;
    $request->configuration->routing->profile = 'car';
    $request->customers = [
        new ClusterCustomer(),
        new ClusterCustomer(),
        new ClusterCustomer(),
        new ClusterCustomer(),
    ];

    $response = $sdk->clusterAPI->asyncClusteringProblem($request);

    if ($response->jobId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClusterSolution

This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
You can fetch it with the job_id, you have been sent.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClusterSolutionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClusterSolutionRequest();
    $request->jobId = 'unde';

    $response = $sdk->clusterAPI->getClusterSolution($request);

    if ($response->clusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## solveClusteringProblem


The Cluster endpoint is used with a POST request towards
`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
Please note that for problems that take longer than 10 seconds a bad request error is returned.
In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigurationClustering;
use \OpenAPI\OpenAPI\Models\Shared\ClusterConfigurationRouting;
use \OpenAPI\OpenAPI\Models\Shared\ClusterCustomer;
use \OpenAPI\OpenAPI\Models\Shared\ClusterCustomerAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClusterRequest();
    $request->configuration = new ClusterConfiguration();
    $request->configuration->clustering = new ClusterConfigurationClustering();
    $request->configuration->clustering->maxQuantity = 50;
    $request->configuration->clustering->minQuantity = 30;
    $request->configuration->clustering->numClusters = 10;
    $request->configuration->responseType = 'json';
    $request->configuration->routing = new ClusterConfigurationRouting();
    $request->configuration->routing->costPerMeter = 8579.46;
    $request->configuration->routing->costPerSecond = 1;
    $request->configuration->routing->profile = 'car';
    $request->customers = [
        new ClusterCustomer(),
        new ClusterCustomer(),
        new ClusterCustomer(),
    ];

    $response = $sdk->clusterAPI->solveClusteringProblem($request);

    if ($response->clusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
