# locations

### Available Operations

* [businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries](#businessprofileperformancelocationsfetchmultidailymetricstimeseries) -  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsGetDailyMetricsTimeSeries](#businessprofileperformancelocationsgetdailymetricstimeseries) -  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList](#businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist) - Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

## businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries

 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->dailyMetrics = [
        BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum::BUSINESS_FOOD_MENU_CLICKS,
        BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum::BUSINESS_FOOD_ORDERS,
    ];
    $request->dailyRangeEndDateDay = 71036;
    $request->dailyRangeEndDateMonth = 337396;
    $request->dailyRangeEndDateYear = 87129;
    $request->dailyRangeStartDateDay = 648172;
    $request->dailyRangeStartDateMonth = 20218;
    $request->dailyRangeStartDateYear = 368241;
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->location = 'quo';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'maiores';

    $response = $sdk->locations->businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries($request);

    if ($response->fetchMultiDailyMetricsTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## businessprofileperformanceLocationsGetDailyMetricsTimeSeries

 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->dailyMetric = BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum::BUSINESS_DIRECTION_REQUESTS;
    $request->dailyRangeEndDateDay = 780529;
    $request->dailyRangeEndDateMonth = 678880;
    $request->dailyRangeEndDateYear = 118274;
    $request->dailyRangeStartDateDay = 720633;
    $request->dailyRangeStartDateMonth = 639921;
    $request->dailyRangeStartDateYear = 582020;
    $request->dailySubEntityTypeDayOfWeek = BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum::MONDAY;
    $request->dailySubEntityTypeTimeOfDayHours = 537373;
    $request->dailySubEntityTypeTimeOfDayMinutes = 944669;
    $request->dailySubEntityTypeTimeOfDayNanos = 758616;
    $request->dailySubEntityTypeTimeOfDaySeconds = 521848;
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->name = 'Pauline Dibbert';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'aspernatur';

    $response = $sdk->locations->businessprofileperformanceLocationsGetDailyMetricsTimeSeries($request);

    if ($response->getDailyMetricsTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList

Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->monthlyRangeEndMonthDay = 616934;
    $request->monthlyRangeEndMonthMonth = 386489;
    $request->monthlyRangeEndMonthYear = 943749;
    $request->monthlyRangeStartMonthDay = 902599;
    $request->monthlyRangeStartMonthMonth = 681820;
    $request->monthlyRangeStartMonthYear = 449950;
    $request->oauthToken = 'corporis';
    $request->pageSize = 613064;
    $request->pageToken = 'iure';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'ipsa';

    $response = $sdk->locations->businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList($request);

    if ($response->listSearchKeywordImpressionsMonthlyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
