# vitals

### Available Operations

* [playdeveloperreportingVitalsErrorsIssuesSearch](#playdeveloperreportingvitalserrorsissuessearch) - Searches all error issues in which reports have been grouped.
* [playdeveloperreportingVitalsErrorsReportsSearch](#playdeveloperreportingvitalserrorsreportssearch) - Searches all error reports received for an app.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateGet](#playdeveloperreportingvitalsstuckbackgroundwakelockrateget) - Describes the properties of the metric set.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery](#playdeveloperreportingvitalsstuckbackgroundwakelockratequery) - Queries the metrics in the metric set.

## playdeveloperreportingVitalsErrorsIssuesSearch

Searches all error issues in which reports have been grouped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsErrorsIssuesSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingVitalsErrorsIssuesSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->filter = 'ipsam';
    $request->intervalEndTimeDay = 832620;
    $request->intervalEndTimeHours = 957156;
    $request->intervalEndTimeMinutes = 778157;
    $request->intervalEndTimeMonth = 140350;
    $request->intervalEndTimeNanos = 870013;
    $request->intervalEndTimeSeconds = 870088;
    $request->intervalEndTimeTimeZoneId = 'maiores';
    $request->intervalEndTimeTimeZoneVersion = 'molestiae';
    $request->intervalEndTimeUtcOffset = 'quod';
    $request->intervalEndTimeYear = 800911;
    $request->intervalStartTimeDay = 461479;
    $request->intervalStartTimeHours = 520478;
    $request->intervalStartTimeMinutes = 780529;
    $request->intervalStartTimeMonth = 678880;
    $request->intervalStartTimeNanos = 118274;
    $request->intervalStartTimeSeconds = 720633;
    $request->intervalStartTimeTimeZoneId = 'officia';
    $request->intervalStartTimeTimeZoneVersion = 'occaecati';
    $request->intervalStartTimeUtcOffset = 'fugit';
    $request->intervalStartTimeYear = 537373;
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vitals->playdeveloperreportingVitalsErrorsIssuesSearch($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1SearchErrorIssuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playdeveloperreportingVitalsErrorsReportsSearch

Searches all error reports received for an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsErrorsReportsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsErrorsReportsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingVitalsErrorsReportsSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->filter = 'aspernatur';
    $request->intervalEndTimeDay = 18789;
    $request->intervalEndTimeHours = 324141;
    $request->intervalEndTimeMinutes = 617636;
    $request->intervalEndTimeMonth = 149675;
    $request->intervalEndTimeNanos = 612096;
    $request->intervalEndTimeSeconds = 222321;
    $request->intervalEndTimeTimeZoneId = 'natus';
    $request->intervalEndTimeTimeZoneVersion = 'laboriosam';
    $request->intervalEndTimeUtcOffset = 'hic';
    $request->intervalEndTimeYear = 902599;
    $request->intervalStartTimeDay = 681820;
    $request->intervalStartTimeHours = 449950;
    $request->intervalStartTimeMinutes = 359508;
    $request->intervalStartTimeMonth = 613064;
    $request->intervalStartTimeNanos = 437032;
    $request->intervalStartTimeSeconds = 902349;
    $request->intervalStartTimeTimeZoneId = 'quidem';
    $request->intervalStartTimeTimeZoneVersion = 'architecto';
    $request->intervalStartTimeUtcOffset = 'ipsa';
    $request->intervalStartTimeYear = 969810;
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 670638;
    $request->pageToken = 'dolores';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new PlaydeveloperreportingVitalsErrorsReportsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vitals->playdeveloperreportingVitalsErrorsReportsSearch($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1SearchErrorReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playdeveloperreportingVitalsStuckbackgroundwakelockrateGet

Describes the properties of the metric set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->name = 'Cecilia Yundt MD';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vitals->playdeveloperreportingVitalsStuckbackgroundwakelockrateGet($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery

Queries the metrics in the metric set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GooglePlayDeveloperReportingV1beta1TimelineSpec;
use \OpenAPI\OpenAPI\Models\Shared\GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDateTime;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeTimeZone;
use \OpenAPI\OpenAPI\Models\Shared\GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestUserCohortEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest = new GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->dimensions = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->filter = 'molestiae';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->metrics = [
        'error',
    ];
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->pageSize = 158969;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->pageToken = 'quis';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec = new GooglePlayDeveloperReportingV1beta1TimelineSpec();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->aggregationPeriod = GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum::AGGREGATION_PERIOD_UNSPECIFIED;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime = new GoogleTypeDateTime();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->day = 674752;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->hours = 656330;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->minutes = 317202;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->month = 138183;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->nanos = 778346;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->seconds = 196582;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->timeZone = new GoogleTypeTimeZone();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->timeZone->id = 'f5ad019d-a1ff-4e78-b097-b0074f15471b';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->timeZone->version = 'enim';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->utcOffset = 'accusamus';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->endTime->year = 414263;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime = new GoogleTypeDateTime();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->day = 918236;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->hours = 64147;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->minutes = 216822;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->month = 692472;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->nanos = 565189;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->seconds = 566602;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->timeZone = new GoogleTypeTimeZone();
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->timeZone->id = 'd488e1e9-1e45-40ad-aabd-44269802d502';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->timeZone->version = 'dolorum';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->utcOffset = 'excepturi';
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->timelineSpec->startTime->year = 270008;
    $request->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest->userCohort = GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestUserCohortEnum::OS_BETA;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'eum';
    $request->key = 'non';
    $request->name = 'Sergio Hyatt';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->vitals->playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery($request, $requestSecurity);

    if ($response->googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
