# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunPivotReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRunPivotReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunPivotReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\CohortSpec;
use \OpenAPI\OpenAPI\Models\Shared\CohortReportSettings;
use \OpenAPI\OpenAPI\Models\Shared\Cohort;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\CohortsRange;
use \OpenAPI\OpenAPI\Models\Shared\CohortsRangeGranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\FilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\BetweenFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumericValue;
use \OpenAPI\OpenAPI\Models\Shared\InListFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumericFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumericFilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\StringFilter;
use \OpenAPI\OpenAPI\Models\Shared\StringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionExpression;
use \OpenAPI\OpenAPI\Models\Shared\ConcatenateExpression;
use \OpenAPI\OpenAPI\Models\Shared\CaseExpression;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\Pivot;
use \OpenAPI\OpenAPI\Models\Shared\PivotMetricAggregationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotSelection;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesBatchRunPivotReportsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchRunPivotReportsRequest = new BatchRunPivotReportsRequest();
    $request->batchRunPivotReportsRequest->requests = [
        new RunPivotReportRequest(),
        new RunPivotReportRequest(),
        new RunPivotReportRequest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->property = 'vel';
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new AnalyticsdataPropertiesBatchRunPivotReportsSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesBatchRunPivotReports($request, $requestSecurity);

    if ($response->batchRunPivotReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [properties](docs/properties/README.md)

* [analyticsdataPropertiesBatchRunPivotReports](docs/properties/README.md#analyticsdatapropertiesbatchrunpivotreports) - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesBatchRunReports](docs/properties/README.md#analyticsdatapropertiesbatchrunreports) - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesCheckCompatibility](docs/properties/README.md#analyticsdatapropertiescheckcompatibility) - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* [analyticsdataPropertiesGetMetadata](docs/properties/README.md#analyticsdatapropertiesgetmetadata) - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* [analyticsdataPropertiesRunPivotReport](docs/properties/README.md#analyticsdatapropertiesrunpivotreport) - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* [analyticsdataPropertiesRunRealtimeReport](docs/properties/README.md#analyticsdatapropertiesrunrealtimereport) - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* [analyticsdataPropertiesRunReport](docs/properties/README.md#analyticsdatapropertiesrunreport) - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
