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