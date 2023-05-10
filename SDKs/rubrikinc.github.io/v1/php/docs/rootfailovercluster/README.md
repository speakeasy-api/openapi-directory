# rootFailoverCluster

## Overview

Failover clusters.

### Available Operations

* [bulkDeleteFailoverCluster](#bulkdeletefailovercluster) - Delete the provided failover clusters
* [createFailoverCluster](#createfailovercluster) - Create a failover cluster
* [deleteFailoverCluster](#deletefailovercluster) - Delete a failover cluster
* [getFailoverCluster](#getfailovercluster) - Get details of a failover cluster
* [queryFailoverCluster](#queryfailovercluster) - Get a summary of all failover clusters
* [updateFailoverCluster](#updatefailovercluster) - Update a failover cluster

## bulkDeleteFailoverCluster

Delete the provided failover clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkDeleteFailoverClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteFailoverClusterRequest();
    $request->ids = [
        'eaque',
    ];
    $request->preserveSnapshots = false;

    $response = $sdk->rootFailoverCluster->bulkDeleteFailoverCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFailoverCluster

Create a failover cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FailoverClusterConfig();
    $request->configuredSlaDomainId = 'saepe';
    $request->hostIds = [
        'mollitia',
        'nulla',
        'officia',
        'sed',
    ];
    $request->name = 'Mary Vandervort II';

    $response = $sdk->rootFailoverCluster->createFailoverCluster($request);

    if ($response->failoverClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFailoverCluster

Delete a failover cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFailoverClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFailoverClusterRequest();
    $request->id = '22eb2164-cf9a-4b83-a6c7-23ffda9e06be';
    $request->preserveSnapshots = false;

    $response = $sdk->rootFailoverCluster->deleteFailoverCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverCluster

Get details of a failover cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailoverClusterRequest();
    $request->id = 'e4825c1f-c0e1-415c-80bf-f918544ec42d';

    $response = $sdk->rootFailoverCluster->getFailoverCluster($request);

    if ($response->failoverClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryFailoverCluster

Get a summary of all failover clusters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryFailoverClusterRequest();
    $request->limit = 876840;
    $request->name = 'Edmund Sawayn';
    $request->offset = 969168;
    $request->operatingSystemType = QueryFailoverClusterOperatingSystemTypeEnum::ANY;
    $request->primaryClusterId = 'sint';
    $request->slaAssignment = QueryFailoverClusterSLAAssignmentEnum::DIRECT;
    $request->sortBy = QueryFailoverClusterSortByEnum::NAME;
    $request->sortOrder = QueryFailoverClusterSortOrderEnum::ASC;

    $response = $sdk->rootFailoverCluster->queryFailoverCluster($request);

    if ($response->failoverClusterSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFailoverCluster

Update failover cluster with specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFailoverClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFailoverClusterRequest();
    $request->failoverClusterConfig = new FailoverClusterConfig();
    $request->failoverClusterConfig->configuredSlaDomainId = 'iure';
    $request->failoverClusterConfig->hostIds = [
        'nesciunt',
        'debitis',
    ];
    $request->failoverClusterConfig->name = 'Dawn Herzog';
    $request->id = 'a7b408f0-5e3d-448f-9af3-13a1f5fd9425';

    $response = $sdk->rootFailoverCluster->updateFailoverCluster($request);

    if ($response->failoverClusterDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
