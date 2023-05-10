# queries

### Available Operations

* [doubleclickbidmanagerQueriesCreatequery](#doubleclickbidmanagerqueriescreatequery) - Creates a query.
* [doubleclickbidmanagerQueriesDeletequery](#doubleclickbidmanagerqueriesdeletequery) - Deletes a stored query as well as the associated stored reports.
* [doubleclickbidmanagerQueriesGetquery](#doubleclickbidmanagerqueriesgetquery) - Retrieves a stored query.
* [doubleclickbidmanagerQueriesListqueries](#doubleclickbidmanagerquerieslistqueries) - Retrieves stored queries.
* [doubleclickbidmanagerQueriesRunquery](#doubleclickbidmanagerqueriesrunquery) - Runs a stored query to generate a report.

## doubleclickbidmanagerQueriesCreatequery

Creates a query.

### Example Usage

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
    $request->query->kind = 'dicta';
    $request->query->metadata = new QueryMetadata();
    $request->query->metadata->dataRange = QueryMetadataDataRangeEnum::LAST90_DAYS;
    $request->query->metadata->format = QueryMetadataFormatEnum::EXCEL_CSV;
    $request->query->metadata->googleCloudStoragePathForLatestReport = 'occaecati';
    $request->query->metadata->googleDrivePathForLatestReport = 'fugit';
    $request->query->metadata->latestReportRunTimeMs = 'deleniti';
    $request->query->metadata->locale = 'hic';
    $request->query->metadata->reportCount = 758616;
    $request->query->metadata->running = false;
    $request->query->metadata->sendNotification = false;
    $request->query->metadata->shareEmailAddress = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->query->metadata->title = 'Mrs.';
    $request->query->params = new Parameters();
    $request->query->params->filters = [
        new FilterPair(),
    ];
    $request->query->params->groupBys = [
        ParametersGroupBysEnum::FILTER_PLATFORM,
        ParametersGroupBysEnum::FILTER_TRUEVIEW_DMA_NAME,
        ParametersGroupBysEnum::FILTER_NIELSEN_DEVICE_ID,
        ParametersGroupBysEnum::FILTER_DATA_PROVIDER_NAME,
    ];
    $request->query->params->includeInviteData = false;
    $request->query->params->metrics = [
        ParametersMetricsEnum::METRIC_MEDIA_COST_PARTNER,
    ];
    $request->query->params->options = new Options();
    $request->query->params->options->includeOnlyTargetedUserLists = false;
    $request->query->params->options->pathQueryOptions = new PathQueryOptions();
    $request->query->params->options->pathQueryOptions->channelGrouping = new ChannelGrouping();
    $request->query->params->options->pathQueryOptions->channelGrouping->fallbackName = 'ad';
    $request->query->params->options->pathQueryOptions->channelGrouping->name = 'Louis Moore';
    $request->query->params->options->pathQueryOptions->channelGrouping->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->query->params->options->pathQueryOptions->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->query->params->type = ParametersTypeEnum::TYPE_REACH_AUDIENCE;
    $request->query->queryId = 'fuga';
    $request->query->reportDataEndTimeMs = 'in';
    $request->query->reportDataStartTimeMs = 'corporis';
    $request->query->schedule = new QuerySchedule();
    $request->query->schedule->endTimeMs = 'iste';
    $request->query->schedule->frequency = QueryScheduleFrequencyEnum::SEMI_MONTHLY;
    $request->query->schedule->nextRunMinuteOfDay = 902349;
    $request->query->schedule->nextRunTimezoneCode = 'quidem';
    $request->query->schedule->startTimeMs = 'architecto';
    $request->query->timezoneCode = 'ipsa';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->asynchronous = false;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

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

## doubleclickbidmanagerQueriesDeletequery

Deletes a stored query as well as the associated stored reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesDeletequeryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesDeletequerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesDeletequeryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'excepturi';
    $request->key = 'accusantium';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->queryId = 'culpa';
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new DoubleclickbidmanagerQueriesDeletequerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesDeletequery($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesGetquery

Retrieves a stored query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesGetqueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesGetquerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesGetqueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'repellat';
    $request->key = 'mollitia';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->queryId = 'numquam';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DoubleclickbidmanagerQueriesGetquerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesGetquery($request, $requestSecurity);

    if ($response->query !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesListqueries

Retrieves stored queries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesListqueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesListqueriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesListqueriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'vitae';
    $request->key = 'laborum';
    $request->oauthToken = 'animi';
    $request->pageSize = 317202;
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new DoubleclickbidmanagerQueriesListqueriesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesListqueries($request, $requestSecurity);

    if ($response->listQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesRunquery

Runs a stored query to generate a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesRunqueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequestDataRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesRunquerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesRunqueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runQueryRequest = new RunQueryRequest();
    $request->runQueryRequest->dataRange = RunQueryRequestDataRangeEnum::LAST30_DAYS;
    $request->runQueryRequest->reportDataEndTimeMs = 'possimus';
    $request->runQueryRequest->reportDataStartTimeMs = 'aut';
    $request->runQueryRequest->timezoneCode = 'quasi';
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->asynchronous = false;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->queryId = 'vero';
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DoubleclickbidmanagerQueriesRunquerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesRunquery($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
