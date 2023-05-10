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