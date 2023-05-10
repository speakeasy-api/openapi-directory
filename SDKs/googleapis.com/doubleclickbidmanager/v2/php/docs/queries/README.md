# queries

### Available Operations

* [doubleclickbidmanagerQueriesCreate](#doubleclickbidmanagerqueriescreate) - Creates a query.
* [doubleclickbidmanagerQueriesDelete](#doubleclickbidmanagerqueriesdelete) - Deletes a query as well as the associated reports.
* [doubleclickbidmanagerQueriesGet](#doubleclickbidmanagerqueriesget) - Retrieves a query.
* [doubleclickbidmanagerQueriesList](#doubleclickbidmanagerquerieslist) - Lists queries created by the current user.
* [doubleclickbidmanagerQueriesReportsGet](#doubleclickbidmanagerqueriesreportsget) - Retrieves a report.
* [doubleclickbidmanagerQueriesReportsList](#doubleclickbidmanagerqueriesreportslist) - Lists reports associated with a query.
* [doubleclickbidmanagerQueriesRun](#doubleclickbidmanagerqueriesrun) - Runs a stored query to generate a report.

## doubleclickbidmanagerQueriesCreate

Creates a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadata;
use \OpenAPI\OpenAPI\Models\Shared\DataRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\DataRangeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryMetadataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\Parameters;
use \OpenAPI\OpenAPI\Models\Shared\FilterPair;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptionsFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathQueryOptionsFilterMatchEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParametersTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuerySchedule;
use \OpenAPI\OpenAPI\Models\Shared\QueryScheduleFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryInput = new QueryInput();
    $request->queryInput->metadata = new QueryMetadata();
    $request->queryInput->metadata->dataRange = new DataRange();
    $request->queryInput->metadata->dataRange->customEndDate = new Date();
    $request->queryInput->metadata->dataRange->customEndDate->day = 678880;
    $request->queryInput->metadata->dataRange->customEndDate->month = 118274;
    $request->queryInput->metadata->dataRange->customEndDate->year = 720633;
    $request->queryInput->metadata->dataRange->customStartDate = new Date();
    $request->queryInput->metadata->dataRange->customStartDate->day = 639921;
    $request->queryInput->metadata->dataRange->customStartDate->month = 582020;
    $request->queryInput->metadata->dataRange->customStartDate->year = 143353;
    $request->queryInput->metadata->dataRange->range = DataRangeRangeEnum::PREVIOUS_QUARTER;
    $request->queryInput->metadata->format = QueryMetadataFormatEnum::XLSX;
    $request->queryInput->metadata->sendNotification = false;
    $request->queryInput->metadata->shareEmailAddress = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->queryInput->metadata->title = 'Mrs.';
    $request->queryInput->params = new Parameters();
    $request->queryInput->params->filters = [
        new FilterPair(),
    ];
    $request->queryInput->params->groupBys = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->queryInput->params->metrics = [
        'perferendis',
    ];
    $request->queryInput->params->options = new Options();
    $request->queryInput->params->options->includeOnlyTargetedUserLists = false;
    $request->queryInput->params->options->pathQueryOptions = new PathQueryOptions();
    $request->queryInput->params->options->pathQueryOptions->channelGrouping = new ChannelGrouping();
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->fallbackName = 'ad';
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->name = 'Louis Moore';
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->queryInput->params->options->pathQueryOptions->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->queryInput->params->type = ParametersTypeEnum::FULL_PATH;
    $request->queryInput->schedule = new QuerySchedule();
    $request->queryInput->schedule->endDate = new Date();
    $request->queryInput->schedule->endDate->day = 681820;
    $request->queryInput->schedule->endDate->month = 449950;
    $request->queryInput->schedule->endDate->year = 359508;
    $request->queryInput->schedule->frequency = QueryScheduleFrequencyEnum::SEMI_MONTHLY;
    $request->queryInput->schedule->nextRunTimezoneCode = 'iure';
    $request->queryInput->schedule->startDate = new Date();
    $request->queryInput->schedule->startDate->day = 902349;
    $request->queryInput->schedule->startDate->month = 697631;
    $request->queryInput->schedule->startDate->year = 99280;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DoubleclickbidmanagerQueriesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesCreate($request, $requestSecurity);

    if ($response->query !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesDelete

Deletes a query as well as the associated reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->queryId = 'iure';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DoubleclickbidmanagerQueriesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesGet

Retrieves a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->queryId = 'occaecati';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new DoubleclickbidmanagerQueriesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesGet($request, $requestSecurity);

    if ($response->query !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesList

Lists queries created by the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->orderBy = 'animi';
    $request->pageSize = 317202;
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new DoubleclickbidmanagerQueriesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesList($request, $requestSecurity);

    if ($response->listQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesReportsGet

Retrieves a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesReportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->queryId = 'laborum';
    $request->quotaUser = 'quasi';
    $request->reportId = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DoubleclickbidmanagerQueriesReportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesReportsGet($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesReportsList

Lists reports associated with a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesReportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->orderBy = 'perferendis';
    $request->pageSize = 39187;
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->queryId = 'ut';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new DoubleclickbidmanagerQueriesReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesReportsList($request, $requestSecurity);

    if ($response->listReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## doubleclickbidmanagerQueriesRun

Runs a stored query to generate a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\DataRangeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclickbidmanagerQueriesRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclickbidmanagerQueriesRunRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runQueryRequest = new RunQueryRequest();
    $request->runQueryRequest->dataRange = new DataRange();
    $request->runQueryRequest->dataRange->customEndDate = new Date();
    $request->runQueryRequest->dataRange->customEndDate->day = 480894;
    $request->runQueryRequest->dataRange->customEndDate->month = 118727;
    $request->runQueryRequest->dataRange->customEndDate->year = 688661;
    $request->runQueryRequest->dataRange->customStartDate = new Date();
    $request->runQueryRequest->dataRange->customStartDate->day = 317983;
    $request->runQueryRequest->dataRange->customStartDate->month = 880476;
    $request->runQueryRequest->dataRange->customStartDate->year = 414263;
    $request->runQueryRequest->dataRange->range = DataRangeRangeEnum::LAST14_DAYS;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'molestias';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->queryId = 'modi';
    $request->quotaUser = 'praesentium';
    $request->synchronous = false;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new DoubleclickbidmanagerQueriesRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->queries->doubleclickbidmanagerQueriesRun($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
