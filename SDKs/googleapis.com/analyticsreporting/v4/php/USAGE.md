<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingReportsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\CohortGroup;
use \OpenAPI\OpenAPI\Models\Shared\Cohort;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\CohortTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilterClause;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionFilterClauseOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\MetricFilterClause;
use \OpenAPI\OpenAPI\Models\Shared\MetricFilter;
use \OpenAPI\OpenAPI\Models\Shared\MetricFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricFilterClauseOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\MetricFormattingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\OrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderBySortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\Pivot;
use \OpenAPI\OpenAPI\Models\Shared\ReportRequestSamplingLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Segment;
use \OpenAPI\OpenAPI\Models\Shared\DynamicSegment;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SegmentFilter;
use \OpenAPI\OpenAPI\Models\Shared\SequenceSegment;
use \OpenAPI\OpenAPI\Models\Shared\SegmentSequenceStep;
use \OpenAPI\OpenAPI\Models\Shared\SegmentSequenceStepMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrFiltersForSegment;
use \OpenAPI\OpenAPI\Models\Shared\SegmentFilterClause;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\SegmentDimensionFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentMetricFilter;
use \OpenAPI\OpenAPI\Models\Shared\SegmentMetricFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentMetricFilterScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SimpleSegment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingReportsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingReportsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsreportingReportsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsreportingReportsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getReportsRequest = new GetReportsRequest();
    $request->getReportsRequest->reportRequests = [
        new ReportRequest(),
        new ReportRequest(),
        new ReportRequest(),
    ];
    $request->getReportsRequest->useResourceQuotas = false;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new AnalyticsreportingReportsBatchGetSecurity();
    $requestSecurity->option1 = new AnalyticsreportingReportsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->analyticsreportingReportsBatchGet($request, $requestSecurity);

    if ($response->getReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->