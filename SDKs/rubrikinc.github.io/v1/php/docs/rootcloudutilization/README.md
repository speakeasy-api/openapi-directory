# rootCloudUtilization

## Overview

Cloud utilization.

### Available Operations

* [doCloudOutForecast](#docloudoutforecast) - Forecast of the cloud utilization for CloudOut

## doCloudOutForecast

Forecast of the cloud storage and compute utilization on cloud archival location according to the SLA Domain parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\CloudOutForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\ForecastConsolidationFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForecastGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudOutForecastSlaParameters;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedUiConfigAttributes;
use \OpenAPI\OpenAPI\Models\Shared\SlaTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalSpecV2;
use \OpenAPI\OpenAPI\Models\Shared\ArchivalTieringSpec;
use \OpenAPI\OpenAPI\Models\Shared\CloudStorageColdTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlaFrequencyV2;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyConfig;
use \OpenAPI\OpenAPI\Models\Shared\MonthlyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SlaDayOfMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuarterlyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SlaDayOfQuarterEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlaMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SlaDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\YearlyConfig;
use \OpenAPI\OpenAPI\Models\Shared\SlaDayOfYearEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudOutForecastRequest();
    $request->consolidationFilter = ForecastConsolidationFilterEnum::FORECAST_WITH_AND_WITHOUT_CONSOLIDATION;
    $request->forecastPeriodInGranularityUnit = 345352;
    $request->granularity = ForecastGranularityEnum::YEAR;
    $request->slaParameters = new CloudOutForecastSlaParameters();
    $request->slaParameters->advancedUiConfig = [
        new AdvancedUiConfigAttributes(),
        new AdvancedUiConfigAttributes(),
        new AdvancedUiConfigAttributes(),
        new AdvancedUiConfigAttributes(),
    ];
    $request->slaParameters->archivalSpecs = new ArchivalSpecV2();
    $request->slaParameters->archivalSpecs->archivalThreshold = 608253;
    $request->slaParameters->archivalSpecs->archivalTieringSpec = new ArchivalTieringSpec();
    $request->slaParameters->archivalSpecs->archivalTieringSpec->coldStorageClass = CloudStorageColdTierEnum::GLACIER_DEEP_ARCHIVE;
    $request->slaParameters->archivalSpecs->archivalTieringSpec->isInstantTieringEnabled = false;
    $request->slaParameters->archivalSpecs->archivalTieringSpec->minAccessibleDurationInSeconds = 596656;
    $request->slaParameters->archivalSpecs->archivalTieringSpec->shouldTierExistingSnapshots = false;
    $request->slaParameters->archivalSpecs->isPassthroughSupported = false;
    $request->slaParameters->archivalSpecs->locationId = 'voluptatem';
    $request->slaParameters->archivalSpecs->locationName = 'porro';
    $request->slaParameters->archivalSpecs->polarisManagedId = 'consequuntur';
    $request->slaParameters->frequencies = new SlaFrequencyV2();
    $request->slaParameters->frequencies->daily = new FrequencyConfig();
    $request->slaParameters->frequencies->daily->frequency = 500026;
    $request->slaParameters->frequencies->daily->retention = 621479;
    $request->slaParameters->frequencies->hourly = new FrequencyConfig();
    $request->slaParameters->frequencies->hourly->frequency = 50370;
    $request->slaParameters->frequencies->hourly->retention = 577229;
    $request->slaParameters->frequencies->minute = new FrequencyConfig();
    $request->slaParameters->frequencies->minute->frequency = 699098;
    $request->slaParameters->frequencies->minute->retention = 237893;
    $request->slaParameters->frequencies->monthly = new MonthlyConfig();
    $request->slaParameters->frequencies->monthly->dayOfMonth = SlaDayOfMonthEnum::LAST_DAY;
    $request->slaParameters->frequencies->monthly->frequency = 934214;
    $request->slaParameters->frequencies->monthly->retention = 267262;
    $request->slaParameters->frequencies->quarterly = new QuarterlyConfig();
    $request->slaParameters->frequencies->quarterly->dayOfQuarter = SlaDayOfQuarterEnum::LAST_DAY;
    $request->slaParameters->frequencies->quarterly->firstQuarterStartMonth = SlaMonthEnum::SEPTEMBER;
    $request->slaParameters->frequencies->quarterly->frequency = 535633;
    $request->slaParameters->frequencies->quarterly->retention = 864282;
    $request->slaParameters->frequencies->weekly = new WeeklyConfig();
    $request->slaParameters->frequencies->weekly->dayOfWeek = SlaDayOfWeekEnum::FRIDAY;
    $request->slaParameters->frequencies->weekly->frequency = 750844;
    $request->slaParameters->frequencies->weekly->retention = 730122;
    $request->slaParameters->frequencies->yearly = new YearlyConfig();
    $request->slaParameters->frequencies->yearly->dayOfYear = SlaDayOfYearEnum::LAST_DAY;
    $request->slaParameters->frequencies->yearly->frequency = 311945;
    $request->slaParameters->frequencies->yearly->retention = 554242;
    $request->slaParameters->frequencies->yearly->yearStartMonth = SlaMonthEnum::MAY;
    $request->slaParameters->maxLocalRetentionLimit = 212390;

    $response = $sdk->rootCloudUtilization->doCloudOutForecast($request);

    if ($response->cloudOutForecastSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
