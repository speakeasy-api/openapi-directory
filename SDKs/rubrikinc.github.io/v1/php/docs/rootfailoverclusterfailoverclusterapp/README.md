# rootFailoverClusterFailoverClusterApp

## Overview

Failover cluster apps.

### Available Operations

* [bulkDeleteFailoverClusterApp](#bulkdeletefailoverclusterapp) - Delete failover cluster applications
* [createFailoverClusterApp](#createfailoverclusterapp) - Create a failover cluster app
* [deleteFailoverClusterApp](#deletefailoverclusterapp) - Delete a failover cluster app
* [getFailoverClusterApp](#getfailoverclusterapp) - Get details of a failover cluster app
* [queryFailoverClusterApp](#queryfailoverclusterapp) - Get a summary of all failover cluster apps
* [updateFailoverClusterApp](#updatefailoverclusterapp) - Update a failover cluster app

## bulkDeleteFailoverClusterApp

Delete failover cluster applications from Rubrik cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkDeleteFailoverClusterAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteFailoverClusterAppRequest();
    $request->ids = [
        'optio',
        'alias',
        'quidem',
    ];
    $request->preserveSnapshots = false;

    $response = $sdk->rootFailoverClusterFailoverClusterApp->bulkDeleteFailoverClusterApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFailoverClusterApp

Create a failover cluster app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterAppConfig;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterAppSource;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterNodeOrder;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FailoverClusterAppConfig();
    $request->configuredSlaDomainId = 'nesciunt';
    $request->failoverClusterAppSource = new FailoverClusterAppSource();
    $request->failoverClusterAppSource->nodeOrders = [
        new FailoverClusterNodeOrder(),
        new FailoverClusterNodeOrder(),
    ];
    $request->failoverClusterAppSource->virtualIps = [
        'consequuntur',
        'veniam',
        'debitis',
        'officia',
    ];
    $request->failoverClusterId = 'sint';
    $request->failoverClusterType = FailoverClusterTypeEnum::WINDOWS;
    $request->name = 'Essie Ferry';

    $response = $sdk->rootFailoverClusterFailoverClusterApp->createFailoverClusterApp($request);

    if ($response->failoverClusterAppSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFailoverClusterApp

Delete a failover cluster app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFailoverClusterAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFailoverClusterAppRequest();
    $request->id = '56c11f6c-37a5-4126-a438-35bbc05a23a4';
    $request->preserveSnapshots = false;

    $response = $sdk->rootFailoverClusterFailoverClusterApp->deleteFailoverClusterApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFailoverClusterApp

Get details of a failover cluster app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetFailoverClusterAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFailoverClusterAppRequest();
    $request->id = '5cefc5fd-e10a-40ce-a169-e510019c6dc5';

    $response = $sdk->rootFailoverClusterFailoverClusterApp->getFailoverClusterApp($request);

    if ($response->failoverClusterAppDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryFailoverClusterApp

Get a summary of all failover cluster apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterAppOperatingSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterAppSLAAssignmentEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterAppSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryFailoverClusterAppSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryFailoverClusterAppRequest();
    $request->limit = 923456;
    $request->name = 'Danielle Kunde';
    $request->offset = 486272;
    $request->operatingSystemType = QueryFailoverClusterAppOperatingSystemTypeEnum::SUN_OS;
    $request->primaryClusterId = 'provident';
    $request->slaAssignment = QueryFailoverClusterAppSLAAssignmentEnum::UNASSIGNED;
    $request->sortBy = QueryFailoverClusterAppSortByEnum::NAME;
    $request->sortOrder = QueryFailoverClusterAppSortOrderEnum::DESC;

    $response = $sdk->rootFailoverClusterFailoverClusterApp->queryFailoverClusterApp($request);

    if ($response->failoverClusterAppSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFailoverClusterApp

Update the failover cluster app with specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFailoverClusterAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterAppConfig;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterAppSource;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterNodeOrder;
use \OpenAPI\OpenAPI\Models\Shared\FailoverClusterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFailoverClusterAppRequest();
    $request->failoverClusterAppConfig = new FailoverClusterAppConfig();
    $request->failoverClusterAppConfig->configuredSlaDomainId = 'facilis';
    $request->failoverClusterAppConfig->failoverClusterAppSource = new FailoverClusterAppSource();
    $request->failoverClusterAppConfig->failoverClusterAppSource->nodeOrders = [
        new FailoverClusterNodeOrder(),
        new FailoverClusterNodeOrder(),
        new FailoverClusterNodeOrder(),
    ];
    $request->failoverClusterAppConfig->failoverClusterAppSource->virtualIps = [
        'laboriosam',
        'unde',
        'modi',
        'perspiciatis',
    ];
    $request->failoverClusterAppConfig->failoverClusterId = 'hic';
    $request->failoverClusterAppConfig->failoverClusterType = FailoverClusterTypeEnum::UNIX_LIKE;
    $request->failoverClusterAppConfig->name = 'Juana Reichel';
    $request->id = 'cae6c3d5-db3a-4deb-95da-ea4c506a8aa9';

    $response = $sdk->rootFailoverClusterFailoverClusterApp->updateFailoverClusterApp($request);

    if ($response->failoverClusterAppSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
