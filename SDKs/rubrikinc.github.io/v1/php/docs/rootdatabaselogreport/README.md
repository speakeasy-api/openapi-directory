# rootDatabaseLogReport

## Overview

Database log backup report.

### Available Operations

* [queryLogReport](#querylogreport) - Get the database log backup delay information
* [queryReportProperties](#queryreportproperties) - Get the database log backup report properties
* [updateReportProperties](#updatereportproperties) - Update the database log backup report properties

## queryLogReport

Get the database log backup delay information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogReportSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLogReportSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryLogReportRequest();
    $request->databaseType = 'veniam';
    $request->effectiveSlaDomainId = 'eos';
    $request->limit = 970079;
    $request->location = 'earum';
    $request->logBackupDelay = 444121;
    $request->name = 'Maurice Zulauf';
    $request->offset = 467119;
    $request->sortBy = QueryLogReportSortByEnum::LOG_BACKUP_FREQUENCY;
    $request->sortOrder = QueryLogReportSortOrderEnum::ASC;

    $response = $sdk->rootDatabaseLogReport->queryLogReport($request);

    if ($response->dbLogReportSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryReportProperties

Get the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootDatabaseLogReport->queryReportProperties();

    if ($response->dbLogReportProperties !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReportProperties

Update the properties for the database (SQL and Oracle) log backup delay email notification creation. The properties are logDelayThresholdInMin and logDelayNotificationFrequencyInMin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\DbLogReportPropertiesUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DbLogReportPropertiesUpdate();
    $request->enableDelayNotification = false;
    $request->logDelayNotificationFrequencyInMin = 290248;
    $request->logDelayThresholdInMin = 828841;

    $response = $sdk->rootDatabaseLogReport->updateReportProperties($request);

    if ($response->dbLogReportProperties !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
