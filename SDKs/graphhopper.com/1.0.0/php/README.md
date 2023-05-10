# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->configuration->routing->costPerMeter = 5488.14;
    $request->configuration->routing->costPerSecond = 1;
    $request->configuration->routing->profile = 'car';
    $request->customers = [
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [clusterAPI](docs/clusterapi/README.md)

* [asyncClusteringProblem](docs/clusterapi/README.md#asyncclusteringproblem) - Batch Cluster Endpoint
* [getClusterSolution](docs/clusterapi/README.md#getclustersolution) - GET Batch Solution Endpoint
* [solveClusteringProblem](docs/clusterapi/README.md#solveclusteringproblem) - POST Cluster Endpoint

### [geocodingAPI](docs/geocodingapi/README.md)

* [getGeocode](docs/geocodingapi/README.md#getgeocode) - Geocoding Endpoint

### [isochroneAPI](docs/isochroneapi/README.md)

* [getIsochrone](docs/isochroneapi/README.md#getisochrone) - Isochrone Endpoint

### [mapMatchingAPI](docs/mapmatchingapi/README.md)

* [postGPX](docs/mapmatchingapi/README.md#postgpx) - Map-match a GPX file

### [matrixAPI](docs/matrixapi/README.md)

* [calculateMatrix](docs/matrixapi/README.md#calculatematrix) - Batch Matrix Endpoint
* [getMatrix](docs/matrixapi/README.md#getmatrix) - GET Matrix Endpoint
* [getMatrixSolution](docs/matrixapi/README.md#getmatrixsolution) - GET Batch Matrix Endpoint
* [postMatrix](docs/matrixapi/README.md#postmatrix) - POST Matrix Endpoint

### [routeOptimizationAPI](docs/routeoptimizationapi/README.md)

* [asyncVRP](docs/routeoptimizationapi/README.md#asyncvrp) - POST route optimization problem (batch mode)
* [getSolution](docs/routeoptimizationapi/README.md#getsolution) - GET the solution (batch mode)
* [solveVRP](docs/routeoptimizationapi/README.md#solvevrp) - POST route optimization problem

### [routingAPI](docs/routingapi/README.md)

* [getRoute](docs/routingapi/README.md#getroute) - GET Route Endpoint
* [getRouteInfo](docs/routingapi/README.md#getrouteinfo) - Coverage information
* [postRoute](docs/routingapi/README.md#postroute) - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
