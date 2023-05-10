# rootConfigHistory

## Overview

Configuration update history.

### Available Operations

* [queryConfigurationHistoryUpdates](#queryconfigurationhistoryupdates) - View a list of filtered configuration updates
* [retrieveConfigurationValues](#retrieveconfigurationvalues) - View a list of configurations and their values on a given date

## queryConfigurationHistoryUpdates

View a list of cluster configuration options that have updated within a specified time window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryConfigurationHistoryUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryConfigurationHistoryUpdatesSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryConfigurationHistoryUpdatesRequest();
    $request->afterTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-27T03:09:40.338Z');
    $request->apiUser = 'quidem';
    $request->beforeTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T21:06:22.424Z');
    $request->limit = 211455;
    $request->name = 'Melissa Mayer';
    $request->namespace = 'repudiandae';
    $request->nodeId = 'cum';
    $request->offset = 120120;
    $request->source = QueryConfigurationHistoryUpdatesSourceEnum::INIT;

    $response = $sdk->rootConfigHistory->queryConfigurationHistoryUpdates($request);

    if ($response->configurationUpdateSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveConfigurationValues

View a list of configurations and their values on a given date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveConfigurationValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveConfigurationValuesRequest();
    $request->limit = 334474;
    $request->name = 'Mr. Todd Reilly';
    $request->namespace = 'nobis';
    $request->nodeId = 'ipsa';
    $request->offset = 497357;
    $request->onDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T07:34:57.107Z');

    $response = $sdk->rootConfigHistory->retrieveConfigurationValues($request);

    if ($response->configurationSummaryListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
