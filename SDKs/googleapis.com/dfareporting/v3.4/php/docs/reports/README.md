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
use \OpenAPI\OpenAPI\Models\Shared\ReportPathAttributionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGroupingRule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathCriteria;
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
    $request->report->accountId = 'quidem';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'fugiat';
    $request->report->criteria->activities->metricNames = [
        'modi',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'blanditiis';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-07-15');
    $request->report->criteria->dateRange->kind = 'unde';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-08-17');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'maxime',
        'dolore',
        'accusantium',
        'corporis',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-24');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'tenetur';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-09');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'pariatur',
        'fugit',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'odit',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'perspiciatis';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'ullam';
    $request->report->fileName = 'aut';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-19');
    $request->report->floodlightCriteria->dateRange->kind = 'fugiat';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_QUARTER;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-10');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'harum';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'magnam';
    $request->report->floodlightCriteria->floodlightConfigId->id = '1844060e-0031-40d0-a3dc-901f5afd2a6c';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'aliquam';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'praesentium';
    $request->report->floodlightCriteria->metricNames = [
        'iure',
        'id',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'molestias';
    $request->report->kind = 'assumenda';
    $request->report->lastModifiedTime = 'praesentium';
    $request->report->name = 'Jesse Hartmann';
    $request->report->ownerProfileId = 'quos';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'ea';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'consequuntur';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Jon Lueilwitz';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-15');
    $request->report->pathAttributionCriteria->dateRange->kind = 'et';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-05');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'sed';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'fugiat';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '3c343d61-778a-4f49-9247-725e621909e9';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'inventore';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'dolore';
    $request->report->pathAttributionCriteria->metricNames = [
        'id',
        'ullam',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'ad';
    $request->report->pathCriteria->customChannelGrouping->kind = 'omnis';
    $request->report->pathCriteria->customChannelGrouping->name = 'Simon Kozey III';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-21');
    $request->report->pathCriteria->dateRange->kind = 'quisquam';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST60_DAYS;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-28');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'quis';
    $request->report->pathCriteria->floodlightConfigId->etag = 'unde';
    $request->report->pathCriteria->floodlightConfigId->id = '32605251-e66b-4b42-a897-d99a2d335670';
    $request->report->pathCriteria->floodlightConfigId->kind = 'accusamus';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'velit';
    $request->report->pathCriteria->metricNames = [
        'recusandae',
        'aliquid',
        'impedit',
        'reiciendis',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
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
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-08-23');
    $request->report->pathToConversionCriteria->dateRange->kind = 'officia';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-06-03');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'officia';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'officiis';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '323a31bf-7ba1-4cc9-b716-c802cc9e0c7d';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'iste';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'neque';
    $request->report->pathToConversionCriteria->metricNames = [
        'consectetur',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 64723;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 657186;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 669734;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 420927;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 194514;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'nulla';
    $request->report->reachCriteria->activities->metricNames = [
        'optio',
        'asperiores',
        'et',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'quas';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-03');
    $request->report->reachCriteria->dateRange->kind = 'soluta';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST365_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-04');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'maiores',
        'odit',
        'numquam',
        'nemo',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'culpa',
        'aliquam',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 479139;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2020-12-19');
    $request->report->schedule->repeats = 'maxime';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-12-14');
    $request->report->subAccountId = 'ut';
    $request->report->type = ReportTypeEnum::PATH_TO_CONVERSION;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'nemo';
    $request->key = 'nisi';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'placeat';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'accusamus';
    $request->key = 'repellat';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'doloribus';
    $request->quotaUser = 'labore';
    $request->reportId = 'adipisci';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'impedit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'aspernatur';
    $request->fileId = 'consequatur';
    $request->key = 'delectus';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->profileId = 'et';
    $request->quotaUser = 'dolor';
    $request->reportId = 'voluptatum';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'nesciunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'temporibus';
    $request->key = 'cum';
    $request->maxResults = 22479;
    $request->oauthToken = 'magni';
    $request->pageToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->profileId = 'earum';
    $request->quotaUser = 'similique';
    $request->reportId = 'id';
    $request->sortField = DfareportingReportsFilesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingReportsFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'delectus';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'veniam';
    $request->key = 'consequuntur';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->profileId = 'nam';
    $request->quotaUser = 'libero';
    $request->reportId = 'perspiciatis';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'dolor';

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
use \OpenAPI\OpenAPI\Models\Shared\ReportPathAttributionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGroupingRule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathCriteria;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->report = new Report();
    $request->report->accountId = 'non';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'dolor';
    $request->report->criteria->activities->metricNames = [
        'ducimus',
        'molestias',
        'aperiam',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'labore';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-07');
    $request->report->criteria->dateRange->kind = 'sed';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-08');
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
        'perferendis',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-05');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'iure';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST60_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-31');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'alias',
        'non',
        'porro',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'libero',
        'quasi',
        'quidem',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'exercitationem';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'similique';
    $request->report->fileName = 'magni';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-06');
    $request->report->floodlightCriteria->dateRange->kind = 'aut';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-04');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'odio';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'quaerat';
    $request->report->floodlightCriteria->floodlightConfigId->id = '4664eb1d-0338-48b0-91bb-17afee74b6fe';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'quidem';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'labore';
    $request->report->floodlightCriteria->metricNames = [
        'voluptate',
        'quod',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'recusandae';
    $request->report->kind = 'illum';
    $request->report->lastModifiedTime = 'laborum';
    $request->report->name = 'Vincent Medhurst III';
    $request->report->ownerProfileId = 'tenetur';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'asperiores';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'odio';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Ms. Darla Shanahan';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-16');
    $request->report->pathAttributionCriteria->dateRange->kind = 'dolor';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-15');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'dolor';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'quidem';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '93e34316-cf55-4b43-9355-3ccf1c204c4a';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'illum';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'minus';
    $request->report->pathAttributionCriteria->metricNames = [
        'occaecati',
        'voluptatem',
        'labore',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'illo';
    $request->report->pathCriteria->customChannelGrouping->kind = 'provident';
    $request->report->pathCriteria->customChannelGrouping->name = 'Karla Lindgren';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-05-03');
    $request->report->pathCriteria->dateRange->kind = 'voluptatibus';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-19');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'ab';
    $request->report->pathCriteria->floodlightConfigId->etag = 'voluptates';
    $request->report->pathCriteria->floodlightConfigId->id = '2d3b901e-0952-4bbb-8cbb-19f713d95a41';
    $request->report->pathCriteria->floodlightConfigId->kind = 'nisi';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'impedit';
    $request->report->pathCriteria->metricNames = [
        'nesciunt',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
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
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-30');
    $request->report->pathToConversionCriteria->dateRange->kind = 'quos';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-21');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'debitis';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'non';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '5118c2cc-57fb-4d60-b1a7-8ed29a9d4eea';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'totam';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'nisi';
    $request->report->pathToConversionCriteria->metricNames = [
        'atque',
        'optio',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 870838;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 265125;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 961870;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 306682;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 759241;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'quas';
    $request->report->reachCriteria->activities->metricNames = [
        'voluptates',
        'labore',
        'hic',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'nihil';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-02-07');
    $request->report->reachCriteria->dateRange->kind = 'fugiat';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-04');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'autem',
        'placeat',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'dicta',
        'possimus',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 171088;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2020-01-02');
    $request->report->schedule->repeats = 'id';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::WEDNESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-01-05');
    $request->report->subAccountId = 'sed';
    $request->report->type = ReportTypeEnum::REACH;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'nostrum';
    $request->key = 'veniam';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'natus';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'repellat';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'id';
    $request->key = 'nobis';
    $request->maxResults = 873802;
    $request->oauthToken = 'excepturi';
    $request->pageToken = 'expedita';
    $request->prettyPrint = false;
    $request->profileId = 'harum';
    $request->quotaUser = 'quisquam';
    $request->scope = DfareportingReportsListScopeEnum::MINE;
    $request->sortField = DfareportingReportsListSortFieldEnum::ID;
    $request->sortOrder = DfareportingReportsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'ullam';

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
use \OpenAPI\OpenAPI\Models\Shared\ReportPathAttributionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGroupingRule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathCriteria;
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
    $request->report->accountId = 'impedit';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'suscipit';
    $request->report->criteria->activities->metricNames = [
        'error',
        'quisquam',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'ipsa';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-25');
    $request->report->criteria->dateRange->kind = 'consequatur';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-30');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'eveniet',
        'tenetur',
        'vel',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-15');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'enim';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST365_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-09-07');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'est',
        'optio',
        'voluptate',
        'nostrum',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'enim',
        'ipsa',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'quaerat';
    $request->report->delivery->recipients = [
        new Recipient(),
    ];
    $request->report->etag = 'aperiam';
    $request->report->fileName = 'optio';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-10');
    $request->report->floodlightCriteria->dateRange->kind = 'quia';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-12');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'sapiente';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'temporibus';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'f01c3e91-e8f7-4bc6-9d46-0a77eceb26d1';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'accusantium';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'et';
    $request->report->floodlightCriteria->metricNames = [
        'delectus',
        'qui',
        'laboriosam',
        'neque',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'quisquam';
    $request->report->kind = 'nihil';
    $request->report->lastModifiedTime = 'quisquam';
    $request->report->name = 'Marta Armstrong';
    $request->report->ownerProfileId = 'ducimus';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'sapiente';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'error';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Leo Roob';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-02');
    $request->report->pathAttributionCriteria->dateRange->kind = 'repudiandae';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YESTERDAY;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-11');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'non';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'officia';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '4253c302-5711-4f42-87e7-dc548be09e41';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'fuga';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'culpa';
    $request->report->pathAttributionCriteria->metricNames = [
        'inventore',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'officia';
    $request->report->pathCriteria->customChannelGrouping->kind = 'et';
    $request->report->pathCriteria->customChannelGrouping->name = 'Hattie Green';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-11-18');
    $request->report->pathCriteria->dateRange->kind = 'provident';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-11-23');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'perspiciatis';
    $request->report->pathCriteria->floodlightConfigId->etag = 'fugit';
    $request->report->pathCriteria->floodlightConfigId->id = 'cfd0c77c-53e7-4e7d-8ee6-e8b90bac384e';
    $request->report->pathCriteria->floodlightConfigId->kind = 'qui';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathCriteria->floodlightConfigId->value = 'sint';
    $request->report->pathCriteria->metricNames = [
        'in',
        'ipsa',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
    ];
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
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-22');
    $request->report->pathToConversionCriteria->dateRange->kind = 'veniam';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::TODAY;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-20');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'dolore';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'possimus';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '189a36a6-b2d2-47eb-b07a-a60c8fe46e61';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'voluptate';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'fugiat';
    $request->report->pathToConversionCriteria->metricNames = [
        'iste',
        'pariatur',
        'nobis',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 718150;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 492633;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 50859;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 975909;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 976700;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'facilis';
    $request->report->reachCriteria->activities->metricNames = [
        'occaecati',
        'ducimus',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'repudiandae';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-07-16');
    $request->report->reachCriteria->dateRange->kind = 'nihil';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::TODAY;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-21');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'iusto',
        'debitis',
        'voluptatibus',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'maxime',
        'eos',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 41289;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-01-26');
    $request->report->schedule->repeats = 'suscipit';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-14');
    $request->report->subAccountId = 'aut';
    $request->report->type = ReportTypeEnum::CROSS_DIMENSION_REACH;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->profileId = 'est';
    $request->quotaUser = 'ipsum';
    $request->reportId = 'temporibus';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'corrupti';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'est';
    $request->key = 'totam';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->profileId = 'maxime';
    $request->quotaUser = 'adipisci';
    $request->reportId = 'delectus';
    $request->synchronous = false;
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'autem';

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
use \OpenAPI\OpenAPI\Models\Shared\ReportPathAttributionCriteria;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGrouping;
use \OpenAPI\OpenAPI\Models\Shared\ChannelGroupingRule;
use \OpenAPI\OpenAPI\Models\Shared\DisjunctiveMatchStatement;
use \OpenAPI\OpenAPI\Models\Shared\EventFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\PathReportDimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\PathFilterPathMatchPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportPathCriteria;
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
    $request->report->accountId = 'ad';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'ut';
    $request->report->criteria->activities->metricNames = [
        'harum',
        'culpa',
        'reiciendis',
        'natus',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'officia';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-11');
    $request->report->criteria->dateRange->kind = 'sint';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_QUARTER;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-09');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'magni',
        'rem',
        'assumenda',
        'libero',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-02-18');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'consequuntur';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-18');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'vero',
        'quibusdam',
        'amet',
        'minima',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'fugiat',
        'esse',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'sunt';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'tempore';
    $request->report->fileName = 'dolores';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-06-09');
    $request->report->floodlightCriteria->dateRange->kind = 'occaecati';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-20');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'veniam';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'quis';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'af69a1c4-b79a-4e33-a81c-23c39a7c0e17';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'optio';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'quasi';
    $request->report->floodlightCriteria->metricNames = [
        'impedit',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'nam';
    $request->report->kind = 'culpa';
    $request->report->lastModifiedTime = 'laudantium';
    $request->report->name = 'Stacy Will Sr.';
    $request->report->ownerProfileId = 'quo';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'enim';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'optio';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Carlton Jakubowski';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-08-19');
    $request->report->pathAttributionCriteria->dateRange->kind = 'perspiciatis';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::MONTH_TO_DATE;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-25');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'aliquid';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'voluptatum';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '13d65bfe-cec2-4dd6-916f-7fc7dda70ec6';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'sit';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'laboriosam';
    $request->report->pathAttributionCriteria->metricNames = [
        'reprehenderit',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'natus';
    $request->report->pathCriteria->customChannelGrouping->kind = 'numquam';
    $request->report->pathCriteria->customChannelGrouping->name = 'Milton Bogisich I';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-04-21');
    $request->report->pathCriteria->dateRange->kind = 'aut';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-10');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'neque';
    $request->report->pathCriteria->floodlightConfigId->etag = 'nihil';
    $request->report->pathCriteria->floodlightConfigId->id = 'c0d977f1-a549-41ab-a975-1b106d23e03e';
    $request->report->pathCriteria->floodlightConfigId->kind = 'voluptas';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'laudantium';
    $request->report->pathCriteria->metricNames = [
        'veniam',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathToConversionCriteria = new ReportPathToConversionCriteria();
    $request->report->pathToConversionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->conversionDimensions = [
        new SortedDimension(),
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
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->report->pathToConversionCriteria->dateRange->kind = 'repellendus';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-03-03');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'in';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'odit';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '9c9d4f2d-8a44-4640-8a60-db73a2f93f46';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'in';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'quisquam';
    $request->report->pathToConversionCriteria->metricNames = [
        'possimus',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 818599;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 681766;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 327811;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 375389;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 88563;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'sed';
    $request->report->reachCriteria->activities->metricNames = [
        'quia',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'laborum';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-11-19');
    $request->report->reachCriteria->dateRange->kind = 'asperiores';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::MONTH_TO_DATE;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-20');
    $request->report->reachCriteria->dimensionFilters = [
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
        'quo',
        'et',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'in',
        'voluptas',
        'similique',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 949400;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2021-12-30');
    $request->report->schedule->repeats = 'aut';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::WEDNESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-02-10');
    $request->report->subAccountId = 'maxime';
    $request->report->type = ReportTypeEnum::REACH;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'dolores';
    $request->key = 'quam';
    $request->oauthToken = 'eius';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'neque';
    $request->reportId = 'ipsa';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'ullam';

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
