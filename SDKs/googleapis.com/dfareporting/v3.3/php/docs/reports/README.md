# reports

### Available Operations

* [dfareportingReportsCompatibleFieldsQuery](#dfareportingreportscompatiblefieldsquery) - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* [dfareportingReportsDelete](#dfareportingreportsdelete) - Deletes a report by its ID.
* [dfareportingReportsFilesGet](#dfareportingreportsfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingReportsFilesList](#dfareportingreportsfileslist) - Lists files for a report.
* [dfareportingReportsGet](#dfareportingreportsget) - Retrieves a report by its ID.
* [dfareportingReportsInsert](#dfareportingreportsinsert) - Creates a report.
* [dfareportingReportsList](#dfareportingreportslist) - Retrieves list of reports.
* [dfareportingReportsPatch](#dfareportingreportspatch) - Updates an existing report. This method supports patch semantics.
* [dfareportingReportsRun](#dfareportingreportsrun) - Runs a report.
* [dfareportingReportsUpdate](#dfareportingreportsupdate) - Updates a report.

## dfareportingReportsCompatibleFieldsQuery

Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsCompatibleFieldsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Report;
use \OpenAPI\OpenAPI\Models\Shared\ReportCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Activities;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRichMediaEvents;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeRelativeDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimension;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimensionSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteriaDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDelivery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDeliveryEmailOwnerDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRepeatsOnWeekDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRunsOnDayOfMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsCompatibleFieldsQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsCompatibleFieldsQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->report = new Report();
    $request->report->accountId = 'maiores';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'aut';
    $request->report->criteria->activities->metricNames = [
        'vitae',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'adipisci';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-05-07');
    $request->report->criteria->dateRange->kind = 'tempore';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST24_MONTHS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-12');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'reprehenderit',
        'consequuntur',
        'accusantium',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-01-26');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'facilis';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-21');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'dolorum',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'nisi',
        'dolore',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'officiis';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'minus';
    $request->report->fileName = 'tempora';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-03-11');
    $request->report->floodlightCriteria->dateRange->kind = 'quibusdam';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-02');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'eaque';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'hic';
    $request->report->floodlightCriteria->floodlightConfigId->id = '41240d44-87ac-4693-b94c-3b9d2488d795';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'officia';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'incidunt';
    $request->report->floodlightCriteria->metricNames = [
        'asperiores',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'dolore';
    $request->report->kind = 'accusantium';
    $request->report->lastModifiedTime = 'corporis';
    $request->report->name = 'Katie Mohr';
    $request->report->ownerProfileId = 'iste';
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-24');
    $request->report->pathToConversionCriteria->dateRange->kind = 'inventore';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-28');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'dolore';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'ullam';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '0819d7c3-b1b4-4184-8060-e00310d023dc';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'error';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'beatae';
    $request->report->pathToConversionCriteria->metricNames = [
        'veniam',
        'animi',
        'delectus',
        'pariatur',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 660701;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 413436;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 776874;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 307309;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 300779;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'numquam';
    $request->report->reachCriteria->activities->metricNames = [
        'id',
        'itaque',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'assumenda';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-11-03');
    $request->report->reachCriteria->dateRange->kind = 'eos';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-01');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'consequuntur',
        'delectus',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'quos',
        'excepturi',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 431712;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2021-02-06');
    $request->report->schedule->repeats = 'ad';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::SATURDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-27');
    $request->report->subAccountId = 'sed';
    $request->report->type = ReportTypeEnum::FLOODLIGHT;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nesciunt';
    $request->fields = 'aliquam';
    $request->key = 'consectetur';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->profileId = 'suscipit';
    $request->quotaUser = 'quae';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DfareportingReportsCompatibleFieldsQuerySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsCompatibleFieldsQuery($request, $requestSecurity);

    if ($response->compatibleFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsDelete

Deletes a report by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'excepturi';
    $request->key = 'ab';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->profileId = 'numquam';
    $request->quotaUser = 'voluptate';
    $request->reportId = 'odio';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DfareportingReportsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsFilesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'et';
    $request->fields = 'iste';
    $request->fileId = 'aut';
    $request->key = 'occaecati';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'error';
    $request->quotaUser = 'inventore';
    $request->reportId = 'ipsa';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DfareportingReportsFilesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsFilesGet($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsFilesList

Lists files for a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsFilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsFilesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'ad';
    $request->key = 'omnis';
    $request->maxResults = 652069;
    $request->oauthToken = 'placeat';
    $request->pageToken = 'nihil';
    $request->prettyPrint = false;
    $request->profileId = 'ducimus';
    $request->quotaUser = 'eaque';
    $request->reportId = 'aliquid';
    $request->sortField = DfareportingReportsFilesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingReportsFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new DfareportingReportsFilesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsFilesList($request, $requestSecurity);

    if ($response->fileList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsGet

Retrieves a report by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'quis';
    $request->key = 'unde';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'qui';
    $request->quotaUser = 'aliquid';
    $request->reportId = 'doloremque';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new DfareportingReportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsGet($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsInsert

Creates a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Report;
use \OpenAPI\OpenAPI\Models\Shared\ReportCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Activities;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRichMediaEvents;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeRelativeDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimension;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimensionSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteriaDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDelivery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDeliveryEmailOwnerDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRepeatsOnWeekDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRunsOnDayOfMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->report = new Report();
    $request->report->accountId = 'beatae';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'ex';
    $request->report->criteria->activities->metricNames = [
        'harum',
        'cum',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'quia';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-20');
    $request->report->criteria->dateRange->kind = 'molestias';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_QUARTER;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-03-24');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'nulla',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-18');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'suscipit';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_QUARTER;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-12');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'recusandae',
        'aliquid',
        'impedit',
        'reiciendis',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'perspiciatis',
        'delectus',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'ipsam';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'dolorum';
    $request->report->fileName = 'officia';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-06-03');
    $request->report->floodlightCriteria->dateRange->kind = 'officia';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-02');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'adipisci';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'inventore';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'bf7ba1cc-9771-46c8-82cc-9e0c7d9d323f';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'quae';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'est';
    $request->report->floodlightCriteria->metricNames = [
        'sequi',
        'officiis',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'occaecati';
    $request->report->kind = 'optio';
    $request->report->lastModifiedTime = 'asperiores';
    $request->report->name = 'Vicky Lynch';
    $request->report->ownerProfileId = 'soluta';
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-02-12');
    $request->report->pathToConversionCriteria->dateRange->kind = 'maiores';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-20');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'numquam';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'culpa';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '47facf11-6cdd-4544-8a75-62873c7dd9ef';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'est';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'labore';
    $request->report->pathToConversionCriteria->metricNames = [
        'at',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 421228;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 183895;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 231807;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 411416;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 134597;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'delectus';
    $request->report->reachCriteria->activities->metricNames = [
        'et',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'voluptatum';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-24');
    $request->report->reachCriteria->dateRange->kind = 'doloremque';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST24_MONTHS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-01');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'magni',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'earum',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 629030;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-04-19');
    $request->report->schedule->repeats = 'commodi';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::SATURDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-11-06');
    $request->report->subAccountId = 'veniam';
    $request->report->type = ReportTypeEnum::STANDARD;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'perspiciatis';
    $request->key = 'illum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'non';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new DfareportingReportsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsInsert($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsList

Retrieves list of reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsListScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'fugit';
    $request->key = 'labore';
    $request->maxResults = 207045;
    $request->oauthToken = 'cum';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'error';
    $request->quotaUser = 'ratione';
    $request->scope = DfareportingReportsListScopeEnum::MINE;
    $request->sortField = DfareportingReportsListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingReportsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DfareportingReportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsList($request, $requestSecurity);

    if ($response->reportList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsPatch

Updates an existing report. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Report;
use \OpenAPI\OpenAPI\Models\Shared\ReportCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Activities;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRichMediaEvents;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeRelativeDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimension;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimensionSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteriaDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDelivery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDeliveryEmailOwnerDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRepeatsOnWeekDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRunsOnDayOfMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->report = new Report();
    $request->report->accountId = 'excepturi';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'iure';
    $request->report->criteria->activities->metricNames = [
        'corporis',
        'alias',
        'asperiores',
        'quibusdam',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'alias';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-20');
    $request->report->criteria->dateRange->kind = 'voluptatum';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-22');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'similique',
        'magni',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-06');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'aut';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-04');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'quaerat',
        'aliquam',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'nisi',
        'labore',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'cum';
    $request->report->delivery->recipients = [
        new Recipient(),
    ];
    $request->report->etag = 'repellendus';
    $request->report->fileName = 'voluptatem';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-27');
    $request->report->floodlightCriteria->dateRange->kind = 'totam';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-06');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'rerum';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'architecto';
    $request->report->floodlightCriteria->floodlightConfigId->id = '7afee74b-6feb-4945-bc7e-daf39d16fbf7';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'nisi';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'assumenda';
    $request->report->floodlightCriteria->metricNames = [
        'eum',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'quidem';
    $request->report->kind = 'sequi';
    $request->report->lastModifiedTime = 'doloremque';
    $request->report->name = 'Mr. Raquel Feil';
    $request->report->ownerProfileId = 'quidem';
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-20');
    $request->report->pathToConversionCriteria->dateRange->kind = 'et';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-02-16');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'corporis';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'nemo';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'b4313553-ccf1-4c20-8c4a-dcc9904c5195';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'cum';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'suscipit';
    $request->report->pathToConversionCriteria->metricNames = [
        'praesentium',
        'optio',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 974132;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 649791;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 462579;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 535550;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 952764;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'voluptates';
    $request->report->reachCriteria->activities->metricNames = [
        'facere',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'libero';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->report->reachCriteria->dateRange->kind = 'beatae';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-06');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'harum',
        'quidem',
        'tempora',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'harum',
        'quidem',
        'inventore',
        'iste',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 975054;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-12-07');
    $request->report->schedule->repeats = 'neque';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::WEDNESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-08');
    $request->report->subAccountId = 'impedit';
    $request->report->type = ReportTypeEnum::STANDARD;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'quia';
    $request->key = 'odio';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->profileId = 'eveniet';
    $request->quotaUser = 'vitae';
    $request->reportId = 'quos';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DfareportingReportsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsPatch($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsRun

Runs a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsRunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->fields = 'illo';
    $request->key = 'illo';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'fugit';
    $request->reportId = 'optio';
    $request->synchronous = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DfareportingReportsRunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsRun($request, $requestSecurity);

    if ($response->file !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingReportsUpdate

Updates a report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Report;
use \OpenAPI\OpenAPI\Models\Shared\ReportCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Activities;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRichMediaEvents;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\DateRangeRelativeDateRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimension;
use \OpenAPI\OpenAPI\Models\Shared\SortedDimensionSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportCrossDimensionReachCriteriaDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportDelivery;
use \OpenAPI\OpenAPI\Models\Shared\ReportDeliveryEmailOwnerDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportFloodlightCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathToConversionCriteriaReportProperties;
use \OpenAPI\OpenAPI\Models\Shared\ReportReachCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ReportSchedule;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRepeatsOnWeekDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportScheduleRunsOnDayOfMonthEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingReportsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingReportsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->report = new Report();
    $request->report->accountId = 'tenetur';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'repellendus';
    $request->report->criteria->activities->metricNames = [
        'alias',
        'rerum',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'fuga';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-10');
    $request->report->criteria->dateRange->kind = 'eveniet';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST24_MONTHS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-02');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'quaerat',
        'itaque',
        'itaque',
        'animi',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-11');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'nemo';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-25');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'aliquam',
        'optio',
        'laudantium',
        'quas',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'voluptates',
        'labore',
        'hic',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'nihil';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'tenetur';
    $request->report->fileName = 'fugiat';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-04');
    $request->report->floodlightCriteria->dateRange->kind = 'molestiae';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-31');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'dicta';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'possimus';
    $request->report->floodlightCriteria->floodlightConfigId->id = '2ffaa58d-cef2-434c-955b-9bdf2190abd9';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'expedita';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'quisquam';
    $request->report->floodlightCriteria->metricNames = [
        'magni',
        'dignissimos',
        'aspernatur',
        'ullam',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'impedit';
    $request->report->kind = 'magni';
    $request->report->lastModifiedTime = 'suscipit';
    $request->report->name = 'Sabrina Schamberger Sr.';
    $request->report->ownerProfileId = 'totam';
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-10-27');
    $request->report->pathToConversionCriteria->dateRange->kind = 'excepturi';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-21');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'corrupti';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'voluptates';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '45c8addf-ac75-4450-8430-c6632b4391fd';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'sapiente';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'vitae';
    $request->report->pathToConversionCriteria->metricNames = [
        'adipisci',
        'itaque',
        'unde',
        'beatae',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 559668;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 981494;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 451727;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 727122;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 798710;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'error';
    $request->report->reachCriteria->activities->metricNames = [
        'incidunt',
        'autem',
        'alias',
        'est',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'dignissimos';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-08-30');
    $request->report->reachCriteria->dateRange->kind = 'saepe';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-11');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'a',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'repudiandae',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 966221;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-08-12');
    $request->report->schedule->repeats = 'neque';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-11');
    $request->report->subAccountId = 'delectus';
    $request->report->type = ReportTypeEnum::STANDARD;
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ducimus';
    $request->fields = 'dolorem';
    $request->key = 'sapiente';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->profileId = 'facere';
    $request->quotaUser = 'veniam';
    $request->reportId = 'eligendi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DfareportingReportsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->dfareportingReportsUpdate($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
