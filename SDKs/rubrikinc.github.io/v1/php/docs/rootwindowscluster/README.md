# rootWindowsCluster

## Overview

Windows clusters.

### Available Operations

* [getWindowsCluster](#getwindowscluster) - Get detailed information for a Windows cluster
* [queryWindowsCluster](#querywindowscluster) - Get summary information for Windows clusters

## getWindowsCluster

Returns a detailed view of a Windows server failover cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetWindowsClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWindowsClusterRequest();
    $request->id = '4f721184-0772-4f32-a3b4-9dbe0f23b7b6';

    $response = $sdk->rootWindowsCluster->getWindowsCluster($request);

    if ($response->windowsClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryWindowsCluster

Returns a list of summary information for Windows server failover clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryWindowsClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryWindowsClusterSnappableStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryWindowsClusterRequest();
    $request->isAgentless = false;
    $request->primaryClusterId = 'fugiat';
    $request->snappableStatus = QueryWindowsClusterSnappableStatusEnum::PROTECTABLE;

    $response = $sdk->rootWindowsCluster->queryWindowsCluster($request);

    if ($response->windowsClusterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
