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
    $request->queryInput->metadata->dataRange->customEndDate->day = 592845;
    $request->queryInput->metadata->dataRange->customEndDate->month = 715190;
    $request->queryInput->metadata->dataRange->customEndDate->year = 844266;
    $request->queryInput->metadata->dataRange->customStartDate = new Date();
    $request->queryInput->metadata->dataRange->customStartDate->day = 602763;
    $request->queryInput->metadata->dataRange->customStartDate->month = 857946;
    $request->queryInput->metadata->dataRange->customStartDate->year = 544883;
    $request->queryInput->metadata->dataRange->range = DataRangeRangeEnum::ALL_TIME;
    $request->queryInput->metadata->format = QueryMetadataFormatEnum::CSV;
    $request->queryInput->metadata->sendNotification = false;
    $request->queryInput->metadata->shareEmailAddress = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->queryInput->metadata->title = 'Mrs.';
    $request->queryInput->params = new Parameters();
    $request->queryInput->params->filters = [
        new FilterPair(),
        new FilterPair(),
        new FilterPair(),
        new FilterPair(),
    ];
    $request->queryInput->params->groupBys = [
        'delectus',
    ];
    $request->queryInput->params->metrics = [
        'suscipit',
        'molestiae',
    ];
    $request->queryInput->params->options = new Options();
    $request->queryInput->params->options->includeOnlyTargetedUserLists = false;
    $request->queryInput->params->options->pathQueryOptions = new PathQueryOptions();
    $request->queryInput->params->options->pathQueryOptions->channelGrouping = new ChannelGrouping();
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->fallbackName = 'minus';
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->name = 'Ken Kshlerin';
    $request->queryInput->params->options->pathQueryOptions->channelGrouping->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->queryInput->params->options->pathQueryOptions->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->queryInput->params->type = ParametersTypeEnum::REPORT_TYPE_UNSPECIFIED;
    $request->queryInput->schedule = new QuerySchedule();
    $request->queryInput->schedule->endDate = new Date();
    $request->queryInput->schedule->endDate->day = 337396;
    $request->queryInput->schedule->endDate->month = 87129;
    $request->queryInput->schedule->endDate->year = 648172;
    $request->queryInput->schedule->frequency = QueryScheduleFrequencyEnum::FREQUENCY_UNSPECIFIED;
    $request->queryInput->schedule->nextRunTimezoneCode = 'ipsam';
    $request->queryInput->schedule->startDate = new Date();
    $request->queryInput->schedule->startDate->day = 832620;
    $request->queryInput->schedule->startDate->month = 957156;
    $request->queryInput->schedule->startDate->year = 778157;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->fields = 'maiores';
    $request->key = 'molestiae';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [queries](docs/queries/README.md)

* [doubleclickbidmanagerQueriesCreate](docs/queries/README.md#doubleclickbidmanagerqueriescreate) - Creates a query.
* [doubleclickbidmanagerQueriesDelete](docs/queries/README.md#doubleclickbidmanagerqueriesdelete) - Deletes a query as well as the associated reports.
* [doubleclickbidmanagerQueriesGet](docs/queries/README.md#doubleclickbidmanagerqueriesget) - Retrieves a query.
* [doubleclickbidmanagerQueriesList](docs/queries/README.md#doubleclickbidmanagerquerieslist) - Lists queries created by the current user.
* [doubleclickbidmanagerQueriesReportsGet](docs/queries/README.md#doubleclickbidmanagerqueriesreportsget) - Retrieves a report.
* [doubleclickbidmanagerQueriesReportsList](docs/queries/README.md#doubleclickbidmanagerqueriesreportslist) - Lists reports associated with a query.
* [doubleclickbidmanagerQueriesRun](docs/queries/README.md#doubleclickbidmanagerqueriesrun) - Runs a stored query to generate a report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
