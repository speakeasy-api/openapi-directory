# quality

### Available Operations

* [qualityGetDailyDataQualityForSite](#qualitygetdailydataqualityforsite) - Get Site DailyQuality
* [qualityGetOverallDataQualityForSites](#qualitygetoveralldataqualityforsites) - Get Site OverallQuality

## qualityGetDailyDataQualityForSite

Get Site DailyQuality

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QualityGetDailyDataQualityForSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QualityGetDailyDataQualityForSiteRequest();
    $request->endDate = 'unde';
    $request->siteId = 'nulla';
    $request->startDate = 'corrupti';
    $request->version = 'illum';

    $response = $sdk->quality->qualityGetDailyDataQualityForSite($request);

    if ($response->dailyQualityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## qualityGetOverallDataQualityForSites

Get Site OverallQuality

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QualityGetOverallDataQualityForSitesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QualityGetOverallDataQualityForSitesRequest();
    $request->endDate = 'vel';
    $request->sites = 'error';
    $request->startDate = 'deserunt';
    $request->version = 'suscipit';

    $response = $sdk->quality->qualityGetOverallDataQualityForSites($request);

    if ($response->overallQualityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
