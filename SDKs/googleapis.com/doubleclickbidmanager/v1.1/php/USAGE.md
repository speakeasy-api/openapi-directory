<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesCreatequeryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadata;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadataDataRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Parameters;
use \OpenAPI\OpenAPI\Models\Shared\FilterPair;
use \OpenAPI\OpenAPI\Models\Shared\FilterPairTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParametersGroupBysEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParametersMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptionsFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptionsFilterFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptionsFilterMatchEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParametersTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuerySchedule;
use \OpenAPI\OpenAPI\Models\Shared\QueryScheduleFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesCreatequerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesCreatequeryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->query = new Query();
    $request->query->kind = 'provident';
    $request->query->metadata = new QueryMetadata();
    $request->query->metadata->dataRange = QueryMetadataDataRangeEnum::LAST90_DAYS;
    $request->query->metadata->format = QueryMetadataFormatEnum::XLSX;
    $request->query->metadata->googleCloudStoragePathForLatestReport = 'unde';
    $request->query->metadata->googleDrivePathForLatestReport = 'nulla';
    $request->query->metadata->latestReportRunTimeMs = 'corrupti';
    $request->query->metadata->locale = 'illum';
    $request->query->metadata->reportCount = 423655;
    $request->query->metadata->running = false;
    $request->query->metadata->sendNotification = false;
    $request->query->metadata->shareEmailAddress = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->query->metadata->title = 'Mrs.';
    $request->query->params = new Parameters();
    $request->query->params->filters = [
        new FilterPair(),
        new FilterPair(),
        new FilterPair(),
        new FilterPair(),
    ];
    $request->query->params->groupBys = [
        ParametersGroupBysEnum::FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE,
    ];
    $request->query->params->includeInviteData = false;
    $request->query->params->metrics = [
        ParametersMetricsEnum::METRIC_FEE18_USD,
        ParametersMetricsEnum::METRIC_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER,
    ];
    $request->query->params->options = new Options();
    $request->query->params->options->includeOnlyTargetedUserLists = false;
    $request->query->params->options->pathQueryOptions = new PathQueryOptions();
    $request->query->params->options->pathQueryOptions->channelGrouping = new ChannelGrouping();
    $request->query->params->options->pathQueryOptions->channelGrouping->fallbackName = 'minus';
    $request->query->params->options->pathQueryOptions->channelGrouping->name = 'Ken Kshlerin';
    $request->query->params->options->pathQueryOptions->channelGrouping->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->query->params->options->pathQueryOptions->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->query->params->type = ParametersTypeEnum::TYPE_INVENTORY_AVAILABILITY;
    $request->query->queryId = 'quis';
    $request->query->reportDataEndTimeMs = 'veritatis';
    $request->query->reportDataStartTimeMs = 'deserunt';
    $request->query->schedule = new QuerySchedule();
    $request->query->schedule->endTimeMs = 'perferendis';
    $request->query->schedule->frequency = QueryScheduleFrequencyEnum::WEEKLY;
    $request->query->schedule->nextRunMinuteOfDay = 832620;
    $request->query->schedule->nextRunTimezoneCode = 'sapiente';
    $request->query->schedule->startTimeMs = 'quo';
    $request->query->timezoneCode = 'odit';
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->asynchronous = false;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new DoubleclickbidmanagerQueriesCreatequerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesCreatequery($request, $requestSecurity);

    if ($response->query !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->