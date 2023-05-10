# properties

### Available Operations

* [analyticsdataPropertiesBatchRunPivotReports](#analyticsdatapropertiesbatchrunpivotreports) - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesBatchRunReports](#analyticsdatapropertiesbatchrunreports) - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesCheckCompatibility](#analyticsdatapropertiescheckcompatibility) - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* [analyticsdataPropertiesGetMetadata](#analyticsdatapropertiesgetmetadata) - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* [analyticsdataPropertiesRunPivotReport](#analyticsdatapropertiesrunpivotreport) - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* [analyticsdataPropertiesRunRealtimeReport](#analyticsdatapropertiesrunrealtimereport) - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* [analyticsdataPropertiesRunReport](#analyticsdatapropertiesrunreport) - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

## analyticsdataPropertiesBatchRunPivotReports

Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchRunPivotReportsRequest = new BatchRunPivotReportsRequest();
    $request->batchRunPivotReportsRequest->requests = [
        new RunPivotReportRequest(),
        new RunPivotReportRequest(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->property = 'minus';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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

## analyticsdataPropertiesBatchRunReports

Returns multiple reports in a batch. All reports must be for the same GA4 Property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRunReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunReportRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\RunReportRequestMetricAggregationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotSelection;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunReportsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunReportsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesBatchRunReportsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesBatchRunReportsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchRunReportsRequest = new BatchRunReportsRequest();
    $request->batchRunReportsRequest->requests = [
        new RunReportRequest(),
        new RunReportRequest(),
    ];
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->property = 'perferendis';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new AnalyticsdataPropertiesBatchRunReportsSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesBatchRunReportsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesBatchRunReports($request, $requestSecurity);

    if ($response->batchRunReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsdataPropertiesCheckCompatibility

This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesCheckCompatibilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CheckCompatibilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckCompatibilityRequestCompatibilityFilterEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesCheckCompatibilitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesCheckCompatibilitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesCheckCompatibilitySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesCheckCompatibilityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->checkCompatibilityRequest = new CheckCompatibilityRequest();
    $request->checkCompatibilityRequest->compatibilityFilter = CheckCompatibilityRequestCompatibilityFilterEnum::COMPATIBILITY_UNSPECIFIED;
    $request->checkCompatibilityRequest->dimensionFilter = new FilterExpression();
    $request->checkCompatibilityRequest->dimensionFilter->andGroup = new FilterExpressionList();
    $request->checkCompatibilityRequest->dimensionFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->checkCompatibilityRequest->dimensionFilter->filter = new Filter();
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter = new BetweenFilter();
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->fromValue->doubleValue = 8700.88;
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->fromValue->int64Value = 'maiores';
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->toValue->doubleValue = 4736.08;
    $request->checkCompatibilityRequest->dimensionFilter->filter->betweenFilter->toValue->int64Value = 'quod';
    $request->checkCompatibilityRequest->dimensionFilter->filter->fieldName = 'quod';
    $request->checkCompatibilityRequest->dimensionFilter->filter->inListFilter = new InListFilter();
    $request->checkCompatibilityRequest->dimensionFilter->filter->inListFilter->caseSensitive = false;
    $request->checkCompatibilityRequest->dimensionFilter->filter->inListFilter->values = [
        'totam',
        'porro',
    ];
    $request->checkCompatibilityRequest->dimensionFilter->filter->numericFilter = new NumericFilter();
    $request->checkCompatibilityRequest->dimensionFilter->filter->numericFilter->operation = NumericFilterOperationEnum::GREATER_THAN;
    $request->checkCompatibilityRequest->dimensionFilter->filter->numericFilter->value = new NumericValue();
    $request->checkCompatibilityRequest->dimensionFilter->filter->numericFilter->value->doubleValue = 1182.74;
    $request->checkCompatibilityRequest->dimensionFilter->filter->numericFilter->value->int64Value = 'nam';
    $request->checkCompatibilityRequest->dimensionFilter->filter->stringFilter = new StringFilter();
    $request->checkCompatibilityRequest->dimensionFilter->filter->stringFilter->caseSensitive = false;
    $request->checkCompatibilityRequest->dimensionFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::CONTAINS;
    $request->checkCompatibilityRequest->dimensionFilter->filter->stringFilter->value = 'occaecati';
    $request->checkCompatibilityRequest->dimensionFilter->notExpression = new FilterExpression();
    $request->checkCompatibilityRequest->dimensionFilter->orGroup = new FilterExpressionList();
    $request->checkCompatibilityRequest->dimensionFilter->orGroup->expressions = [
        new FilterExpression(),
    ];
    $request->checkCompatibilityRequest->dimensions = [
        new Dimension(),
        new Dimension(),
        new Dimension(),
    ];
    $request->checkCompatibilityRequest->metricFilter = new FilterExpression();
    $request->checkCompatibilityRequest->metricFilter->andGroup = new FilterExpressionList();
    $request->checkCompatibilityRequest->metricFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->checkCompatibilityRequest->metricFilter->filter = new Filter();
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter = new BetweenFilter();
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->fromValue->doubleValue = 7586.16;
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->fromValue->int64Value = 'totam';
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->toValue->doubleValue = 1059.07;
    $request->checkCompatibilityRequest->metricFilter->filter->betweenFilter->toValue->int64Value = 'commodi';
    $request->checkCompatibilityRequest->metricFilter->filter->fieldName = 'molestiae';
    $request->checkCompatibilityRequest->metricFilter->filter->inListFilter = new InListFilter();
    $request->checkCompatibilityRequest->metricFilter->filter->inListFilter->caseSensitive = false;
    $request->checkCompatibilityRequest->metricFilter->filter->inListFilter->values = [
        'qui',
        'impedit',
    ];
    $request->checkCompatibilityRequest->metricFilter->filter->numericFilter = new NumericFilter();
    $request->checkCompatibilityRequest->metricFilter->filter->numericFilter->operation = NumericFilterOperationEnum::GREATER_THAN;
    $request->checkCompatibilityRequest->metricFilter->filter->numericFilter->value = new NumericValue();
    $request->checkCompatibilityRequest->metricFilter->filter->numericFilter->value->doubleValue = 4561.5;
    $request->checkCompatibilityRequest->metricFilter->filter->numericFilter->value->int64Value = 'ipsum';
    $request->checkCompatibilityRequest->metricFilter->filter->stringFilter = new StringFilter();
    $request->checkCompatibilityRequest->metricFilter->filter->stringFilter->caseSensitive = false;
    $request->checkCompatibilityRequest->metricFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::ENDS_WITH;
    $request->checkCompatibilityRequest->metricFilter->filter->stringFilter->value = 'aspernatur';
    $request->checkCompatibilityRequest->metricFilter->notExpression = new FilterExpression();
    $request->checkCompatibilityRequest->metricFilter->orGroup = new FilterExpressionList();
    $request->checkCompatibilityRequest->metricFilter->orGroup->expressions = [
        new FilterExpression(),
    ];
    $request->checkCompatibilityRequest->metrics = [
        new Metric(),
        new Metric(),
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->property = 'hic';
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new AnalyticsdataPropertiesCheckCompatibilitySecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesCheckCompatibilitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesCheckCompatibility($request, $requestSecurity);

    if ($response->checkCompatibilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsdataPropertiesGetMetadata

Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesGetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesGetMetadataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesGetMetadataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesGetMetadataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesGetMetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->name = 'Lela Orn';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new AnalyticsdataPropertiesGetMetadataSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesGetMetadataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesGetMetadata($request, $requestSecurity);

    if ($response->metadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsdataPropertiesRunPivotReport

Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunPivotReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
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
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunPivotReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunPivotReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunPivotReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesRunPivotReportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runPivotReportRequest = new RunPivotReportRequest();
    $request->runPivotReportRequest->cohortSpec = new CohortSpec();
    $request->runPivotReportRequest->cohortSpec->cohortReportSettings = new CohortReportSettings();
    $request->runPivotReportRequest->cohortSpec->cohortReportSettings->accumulate = false;
    $request->runPivotReportRequest->cohortSpec->cohorts = [
        new Cohort(),
        new Cohort(),
    ];
    $request->runPivotReportRequest->cohortSpec->cohortsRange = new CohortsRange();
    $request->runPivotReportRequest->cohortSpec->cohortsRange->endOffset = 607831;
    $request->runPivotReportRequest->cohortSpec->cohortsRange->granularity = CohortsRangeGranularityEnum::DAILY;
    $request->runPivotReportRequest->cohortSpec->cohortsRange->startOffset = 325047;
    $request->runPivotReportRequest->currencyCode = 'excepturi';
    $request->runPivotReportRequest->dateRanges = [
        new DateRange(),
    ];
    $request->runPivotReportRequest->dimensionFilter = new FilterExpression();
    $request->runPivotReportRequest->dimensionFilter->andGroup = new FilterExpressionList();
    $request->runPivotReportRequest->dimensionFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runPivotReportRequest->dimensionFilter->filter = new Filter();
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter = new BetweenFilter();
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->fromValue->doubleValue = 6342.74;
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->fromValue->int64Value = 'doloribus';
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->toValue->doubleValue = 9589.5;
    $request->runPivotReportRequest->dimensionFilter->filter->betweenFilter->toValue->int64Value = 'architecto';
    $request->runPivotReportRequest->dimensionFilter->filter->fieldName = 'mollitia';
    $request->runPivotReportRequest->dimensionFilter->filter->inListFilter = new InListFilter();
    $request->runPivotReportRequest->dimensionFilter->filter->inListFilter->caseSensitive = false;
    $request->runPivotReportRequest->dimensionFilter->filter->inListFilter->values = [
        'culpa',
    ];
    $request->runPivotReportRequest->dimensionFilter->filter->numericFilter = new NumericFilter();
    $request->runPivotReportRequest->dimensionFilter->filter->numericFilter->operation = NumericFilterOperationEnum::OPERATION_UNSPECIFIED;
    $request->runPivotReportRequest->dimensionFilter->filter->numericFilter->value = new NumericValue();
    $request->runPivotReportRequest->dimensionFilter->filter->numericFilter->value->doubleValue = 9953;
    $request->runPivotReportRequest->dimensionFilter->filter->numericFilter->value->int64Value = 'mollitia';
    $request->runPivotReportRequest->dimensionFilter->filter->stringFilter = new StringFilter();
    $request->runPivotReportRequest->dimensionFilter->filter->stringFilter->caseSensitive = false;
    $request->runPivotReportRequest->dimensionFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::CONTAINS;
    $request->runPivotReportRequest->dimensionFilter->filter->stringFilter->value = 'numquam';
    $request->runPivotReportRequest->dimensionFilter->notExpression = new FilterExpression();
    $request->runPivotReportRequest->dimensionFilter->orGroup = new FilterExpressionList();
    $request->runPivotReportRequest->dimensionFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runPivotReportRequest->dimensions = [
        new Dimension(),
        new Dimension(),
    ];
    $request->runPivotReportRequest->keepEmptyRows = false;
    $request->runPivotReportRequest->metricFilter = new FilterExpression();
    $request->runPivotReportRequest->metricFilter->andGroup = new FilterExpressionList();
    $request->runPivotReportRequest->metricFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runPivotReportRequest->metricFilter->filter = new Filter();
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter = new BetweenFilter();
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->fromValue->doubleValue = 2444.25;
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->fromValue->int64Value = 'error';
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->toValue->doubleValue = 1589.69;
    $request->runPivotReportRequest->metricFilter->filter->betweenFilter->toValue->int64Value = 'quis';
    $request->runPivotReportRequest->metricFilter->filter->fieldName = 'vitae';
    $request->runPivotReportRequest->metricFilter->filter->inListFilter = new InListFilter();
    $request->runPivotReportRequest->metricFilter->filter->inListFilter->caseSensitive = false;
    $request->runPivotReportRequest->metricFilter->filter->inListFilter->values = [
        'animi',
        'enim',
        'odit',
    ];
    $request->runPivotReportRequest->metricFilter->filter->numericFilter = new NumericFilter();
    $request->runPivotReportRequest->metricFilter->filter->numericFilter->operation = NumericFilterOperationEnum::GREATER_THAN;
    $request->runPivotReportRequest->metricFilter->filter->numericFilter->value = new NumericValue();
    $request->runPivotReportRequest->metricFilter->filter->numericFilter->value->doubleValue = 1965.82;
    $request->runPivotReportRequest->metricFilter->filter->numericFilter->value->int64Value = 'tenetur';
    $request->runPivotReportRequest->metricFilter->filter->stringFilter = new StringFilter();
    $request->runPivotReportRequest->metricFilter->filter->stringFilter->caseSensitive = false;
    $request->runPivotReportRequest->metricFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::BEGINS_WITH;
    $request->runPivotReportRequest->metricFilter->filter->stringFilter->value = 'id';
    $request->runPivotReportRequest->metricFilter->notExpression = new FilterExpression();
    $request->runPivotReportRequest->metricFilter->orGroup = new FilterExpressionList();
    $request->runPivotReportRequest->metricFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runPivotReportRequest->metrics = [
        new Metric(),
    ];
    $request->runPivotReportRequest->pivots = [
        new Pivot(),
    ];
    $request->runPivotReportRequest->property = 'error';
    $request->runPivotReportRequest->returnPropertyQuota = false;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->property = 'nihil';
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AnalyticsdataPropertiesRunPivotReportSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesRunPivotReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesRunPivotReport($request, $requestSecurity);

    if ($response->runPivotReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsdataPropertiesRunRealtimeReport

Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunRealtimeReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunRealtimeReportRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\RunRealtimeReportRequestMetricAggregationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MinuteRange;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotSelection;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunRealtimeReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunRealtimeReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunRealtimeReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesRunRealtimeReportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runRealtimeReportRequest = new RunRealtimeReportRequest();
    $request->runRealtimeReportRequest->dimensionFilter = new FilterExpression();
    $request->runRealtimeReportRequest->dimensionFilter->andGroup = new FilterExpressionList();
    $request->runRealtimeReportRequest->dimensionFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runRealtimeReportRequest->dimensionFilter->filter = new Filter();
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter = new BetweenFilter();
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->fromValue->doubleValue = 7392.64;
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->fromValue->int64Value = 'perferendis';
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->toValue->doubleValue = 391.87;
    $request->runRealtimeReportRequest->dimensionFilter->filter->betweenFilter->toValue->int64Value = 'reprehenderit';
    $request->runRealtimeReportRequest->dimensionFilter->filter->fieldName = 'ut';
    $request->runRealtimeReportRequest->dimensionFilter->filter->inListFilter = new InListFilter();
    $request->runRealtimeReportRequest->dimensionFilter->filter->inListFilter->caseSensitive = false;
    $request->runRealtimeReportRequest->dimensionFilter->filter->inListFilter->values = [
        'dicta',
        'corporis',
        'dolore',
        'iusto',
    ];
    $request->runRealtimeReportRequest->dimensionFilter->filter->numericFilter = new NumericFilter();
    $request->runRealtimeReportRequest->dimensionFilter->filter->numericFilter->operation = NumericFilterOperationEnum::OPERATION_UNSPECIFIED;
    $request->runRealtimeReportRequest->dimensionFilter->filter->numericFilter->value = new NumericValue();
    $request->runRealtimeReportRequest->dimensionFilter->filter->numericFilter->value->doubleValue = 6886.61;
    $request->runRealtimeReportRequest->dimensionFilter->filter->numericFilter->value->int64Value = 'enim';
    $request->runRealtimeReportRequest->dimensionFilter->filter->stringFilter = new StringFilter();
    $request->runRealtimeReportRequest->dimensionFilter->filter->stringFilter->caseSensitive = false;
    $request->runRealtimeReportRequest->dimensionFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::PARTIAL_REGEXP;
    $request->runRealtimeReportRequest->dimensionFilter->filter->stringFilter->value = 'commodi';
    $request->runRealtimeReportRequest->dimensionFilter->notExpression = new FilterExpression();
    $request->runRealtimeReportRequest->dimensionFilter->orGroup = new FilterExpressionList();
    $request->runRealtimeReportRequest->dimensionFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runRealtimeReportRequest->dimensions = [
        new Dimension(),
    ];
    $request->runRealtimeReportRequest->limit = 'ipsum';
    $request->runRealtimeReportRequest->metricAggregations = [
        RunRealtimeReportRequestMetricAggregationsEnum::MINIMUM,
        RunRealtimeReportRequestMetricAggregationsEnum::MINIMUM,
        RunRealtimeReportRequestMetricAggregationsEnum::COUNT,
    ];
    $request->runRealtimeReportRequest->metricFilter = new FilterExpression();
    $request->runRealtimeReportRequest->metricFilter->andGroup = new FilterExpressionList();
    $request->runRealtimeReportRequest->metricFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runRealtimeReportRequest->metricFilter->filter = new Filter();
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter = new BetweenFilter();
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->fromValue->doubleValue = 5089.69;
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->fromValue->int64Value = 'rem';
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->toValue->doubleValue = 9167.23;
    $request->runRealtimeReportRequest->metricFilter->filter->betweenFilter->toValue->int64Value = 'quasi';
    $request->runRealtimeReportRequest->metricFilter->filter->fieldName = 'repudiandae';
    $request->runRealtimeReportRequest->metricFilter->filter->inListFilter = new InListFilter();
    $request->runRealtimeReportRequest->metricFilter->filter->inListFilter->caseSensitive = false;
    $request->runRealtimeReportRequest->metricFilter->filter->inListFilter->values = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->runRealtimeReportRequest->metricFilter->filter->numericFilter = new NumericFilter();
    $request->runRealtimeReportRequest->metricFilter->filter->numericFilter->operation = NumericFilterOperationEnum::EQUAL;
    $request->runRealtimeReportRequest->metricFilter->filter->numericFilter->value = new NumericValue();
    $request->runRealtimeReportRequest->metricFilter->filter->numericFilter->value->doubleValue = 93.56;
    $request->runRealtimeReportRequest->metricFilter->filter->numericFilter->value->int64Value = 'est';
    $request->runRealtimeReportRequest->metricFilter->filter->stringFilter = new StringFilter();
    $request->runRealtimeReportRequest->metricFilter->filter->stringFilter->caseSensitive = false;
    $request->runRealtimeReportRequest->metricFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::FULL_REGEXP;
    $request->runRealtimeReportRequest->metricFilter->filter->stringFilter->value = 'explicabo';
    $request->runRealtimeReportRequest->metricFilter->notExpression = new FilterExpression();
    $request->runRealtimeReportRequest->metricFilter->orGroup = new FilterExpressionList();
    $request->runRealtimeReportRequest->metricFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runRealtimeReportRequest->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->runRealtimeReportRequest->minuteRanges = [
        new MinuteRange(),
        new MinuteRange(),
        new MinuteRange(),
        new MinuteRange(),
    ];
    $request->runRealtimeReportRequest->orderBys = [
        new OrderBy(),
        new OrderBy(),
    ];
    $request->runRealtimeReportRequest->returnPropertyQuota = false;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->property = 'magni';
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new AnalyticsdataPropertiesRunRealtimeReportSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesRunRealtimeReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesRunRealtimeReport($request, $requestSecurity);

    if ($response->runRealtimeReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsdataPropertiesRunReport

Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunReportRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\RunReportRequestMetricAggregationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\DimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\PivotSelection;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsdataPropertiesRunReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsdataPropertiesRunReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runReportRequest = new RunReportRequest();
    $request->runReportRequest->cohortSpec = new CohortSpec();
    $request->runReportRequest->cohortSpec->cohortReportSettings = new CohortReportSettings();
    $request->runReportRequest->cohortSpec->cohortReportSettings->accumulate = false;
    $request->runReportRequest->cohortSpec->cohorts = [
        new Cohort(),
        new Cohort(),
        new Cohort(),
    ];
    $request->runReportRequest->cohortSpec->cohortsRange = new CohortsRange();
    $request->runReportRequest->cohortSpec->cohortsRange->endOffset = 569618;
    $request->runReportRequest->cohortSpec->cohortsRange->granularity = CohortsRangeGranularityEnum::DAILY;
    $request->runReportRequest->cohortSpec->cohortsRange->startOffset = 703737;
    $request->runReportRequest->currencyCode = 'tempore';
    $request->runReportRequest->dateRanges = [
        new DateRange(),
        new DateRange(),
    ];
    $request->runReportRequest->dimensionFilter = new FilterExpression();
    $request->runReportRequest->dimensionFilter->andGroup = new FilterExpressionList();
    $request->runReportRequest->dimensionFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runReportRequest->dimensionFilter->filter = new Filter();
    $request->runReportRequest->dimensionFilter->filter->betweenFilter = new BetweenFilter();
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->fromValue->doubleValue = 4332.88;
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->fromValue->int64Value = 'non';
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->toValue->doubleValue = 7561.07;
    $request->runReportRequest->dimensionFilter->filter->betweenFilter->toValue->int64Value = 'sint';
    $request->runReportRequest->dimensionFilter->filter->fieldName = 'aliquid';
    $request->runReportRequest->dimensionFilter->filter->inListFilter = new InListFilter();
    $request->runReportRequest->dimensionFilter->filter->inListFilter->caseSensitive = false;
    $request->runReportRequest->dimensionFilter->filter->inListFilter->values = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->runReportRequest->dimensionFilter->filter->numericFilter = new NumericFilter();
    $request->runReportRequest->dimensionFilter->filter->numericFilter->operation = NumericFilterOperationEnum::EQUAL;
    $request->runReportRequest->dimensionFilter->filter->numericFilter->value = new NumericValue();
    $request->runReportRequest->dimensionFilter->filter->numericFilter->value->doubleValue = 8915.55;
    $request->runReportRequest->dimensionFilter->filter->numericFilter->value->int64Value = 'a';
    $request->runReportRequest->dimensionFilter->filter->stringFilter = new StringFilter();
    $request->runReportRequest->dimensionFilter->filter->stringFilter->caseSensitive = false;
    $request->runReportRequest->dimensionFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::CONTAINS;
    $request->runReportRequest->dimensionFilter->filter->stringFilter->value = 'in';
    $request->runReportRequest->dimensionFilter->notExpression = new FilterExpression();
    $request->runReportRequest->dimensionFilter->orGroup = new FilterExpressionList();
    $request->runReportRequest->dimensionFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runReportRequest->dimensions = [
        new Dimension(),
        new Dimension(),
        new Dimension(),
        new Dimension(),
    ];
    $request->runReportRequest->keepEmptyRows = false;
    $request->runReportRequest->limit = 'maiores';
    $request->runReportRequest->metricAggregations = [
        RunReportRequestMetricAggregationsEnum::METRIC_AGGREGATION_UNSPECIFIED,
        RunReportRequestMetricAggregationsEnum::TOTAL,
        RunReportRequestMetricAggregationsEnum::MAXIMUM,
    ];
    $request->runReportRequest->metricFilter = new FilterExpression();
    $request->runReportRequest->metricFilter->andGroup = new FilterExpressionList();
    $request->runReportRequest->metricFilter->andGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runReportRequest->metricFilter->filter = new Filter();
    $request->runReportRequest->metricFilter->filter->betweenFilter = new BetweenFilter();
    $request->runReportRequest->metricFilter->filter->betweenFilter->fromValue = new NumericValue();
    $request->runReportRequest->metricFilter->filter->betweenFilter->fromValue->doubleValue = 4118.2;
    $request->runReportRequest->metricFilter->filter->betweenFilter->fromValue->int64Value = 'aliquid';
    $request->runReportRequest->metricFilter->filter->betweenFilter->toValue = new NumericValue();
    $request->runReportRequest->metricFilter->filter->betweenFilter->toValue->doubleValue = 6754.39;
    $request->runReportRequest->metricFilter->filter->betweenFilter->toValue->int64Value = 'accusamus';
    $request->runReportRequest->metricFilter->filter->fieldName = 'non';
    $request->runReportRequest->metricFilter->filter->inListFilter = new InListFilter();
    $request->runReportRequest->metricFilter->filter->inListFilter->caseSensitive = false;
    $request->runReportRequest->metricFilter->filter->inListFilter->values = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->runReportRequest->metricFilter->filter->numericFilter = new NumericFilter();
    $request->runReportRequest->metricFilter->filter->numericFilter->operation = NumericFilterOperationEnum::GREATER_THAN;
    $request->runReportRequest->metricFilter->filter->numericFilter->value = new NumericValue();
    $request->runReportRequest->metricFilter->filter->numericFilter->value->doubleValue = 5884.65;
    $request->runReportRequest->metricFilter->filter->numericFilter->value->int64Value = 'nam';
    $request->runReportRequest->metricFilter->filter->stringFilter = new StringFilter();
    $request->runReportRequest->metricFilter->filter->stringFilter->caseSensitive = false;
    $request->runReportRequest->metricFilter->filter->stringFilter->matchType = StringFilterMatchTypeEnum::CONTAINS;
    $request->runReportRequest->metricFilter->filter->stringFilter->value = 'blanditiis';
    $request->runReportRequest->metricFilter->notExpression = new FilterExpression();
    $request->runReportRequest->metricFilter->orGroup = new FilterExpressionList();
    $request->runReportRequest->metricFilter->orGroup->expressions = [
        new FilterExpression(),
        new FilterExpression(),
        new FilterExpression(),
    ];
    $request->runReportRequest->metrics = [
        new Metric(),
        new Metric(),
        new Metric(),
        new Metric(),
    ];
    $request->runReportRequest->offset = 'amet';
    $request->runReportRequest->orderBys = [
        new OrderBy(),
        new OrderBy(),
        new OrderBy(),
    ];
    $request->runReportRequest->property = 'nisi';
    $request->runReportRequest->returnPropertyQuota = false;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->property = 'magnam';
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new AnalyticsdataPropertiesRunReportSecurity();
    $requestSecurity->option1 = new AnalyticsdataPropertiesRunReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsdataPropertiesRunReport($request, $requestSecurity);

    if ($response->runReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
