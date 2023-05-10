# threeForBackEndOptional

## Overview

# Introduction
The methods are required to have an admin authentication.

# How to get admin credentials
Please create admin credentials in [Datahub](https://userdatahub.com) and use method v1/Auth/Login (1. User management)

# Scheme
![Admin statistics integration](https://website-cliparts-datamotion.s3.us-east-2.amazonaws.com/Dev.portal/admin+statistics+integration.png)

### Available Operations

* [rootV1ScoringsConsolidated](#rootv1scoringsconsolidated) - /v1/Scorings/consolidated
* [rootV1ScoringsConsolidatedDaily](#rootv1scoringsconsolidateddaily) - /v1/Scorings/consolidated/daily
* [rootV1StatisticsConsolidated](#rootv1statisticsconsolidated) - /v1/Statistics/consolidated
* [rootV1StatisticsConsolidatedDaily](#rootv1statisticsconsolidateddaily) - /v1/Statistics/consolidated/daily

## rootV1ScoringsConsolidated

/v1/Scorings/consolidated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1ScoringsConsolidatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1ScoringsConsolidatedRequest();
    $request->appId = 'nulla';
    $request->companyId = 'corrupti';
    $request->deviceToken = 'illum';
    $request->endDate = '2021-01-18T01:04:22.840Z';
    $request->instanceId = 'vel';
    $request->startDate = '2021-01-17T01:04:22.840Z';
    $request->tag = 'error';

    $response = $sdk->threeForBackEndOptional->rootV1ScoringsConsolidated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rootV1ScoringsConsolidatedDaily

/v1/Scorings/consolidated/daily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1ScoringsConsolidatedDailyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1ScoringsConsolidatedDailyRequest();
    $request->appId = 'deserunt';
    $request->companyId = 'suscipit';
    $request->deviceToken = 'iure';
    $request->endDate = '2021-01-18T01:04:22.840Z';
    $request->instanceId = 'magnam';
    $request->startDate = '2021-01-17T01:04:22.840Z';
    $request->tag = 'debitis';

    $response = $sdk->threeForBackEndOptional->rootV1ScoringsConsolidatedDaily($request);

    if ($response->rootV1ScoringsConsolidatedDaily200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rootV1StatisticsConsolidated

/v1/Statistics/consolidated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1StatisticsConsolidatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1StatisticsConsolidatedRequest();
    $request->appId = 'ipsa';
    $request->companyId = 'delectus';
    $request->deviceToken = 'tempora';
    $request->endDate = '2021-03-18';
    $request->instanceId = 'suscipit';
    $request->startDate = '2021-01-18';
    $request->tag = 'molestiae';

    $response = $sdk->threeForBackEndOptional->rootV1StatisticsConsolidated($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rootV1StatisticsConsolidatedDaily

/v1/Statistics/consolidated/daily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RootV1StatisticsConsolidatedDailyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RootV1StatisticsConsolidatedDailyRequest();
    $request->appId = 'minus';
    $request->companyId = 'placeat';
    $request->deviceToken = 'voluptatum';
    $request->endDate = '2021-01-18';
    $request->instanceId = 'iusto';
    $request->startDate = '2021-01-17';
    $request->tag = 'excepturi';

    $response = $sdk->threeForBackEndOptional->rootV1StatisticsConsolidatedDaily($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
