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
    $request->report->accountId = 'aspernatur';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'maxime';
    $request->report->criteria->activities->metricNames = [
        'accusantium',
        'corporis',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'laboriosam';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-02-06');
    $request->report->criteria->dateRange->kind = 'vel';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-17');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'fugit',
        'inventore',
        'odit',
        'labore',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-25');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'aut';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-19');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'ipsum',
        'cum',
        'et',
        'harum',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'illo',
        'atque',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'incidunt';
    $request->report->delivery->recipients = [
        new Recipient(),
    ];
    $request->report->etag = 'nisi';
    $request->report->fileName = 'quae';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-22');
    $request->report->floodlightCriteria->dateRange->kind = 'nesciunt';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YESTERDAY;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-07');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'velit';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'repellendus';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'c901f5af-d2a6-4c44-846a-e9d89253c896';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'consequuntur';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'quaerat';
    $request->report->floodlightCriteria->metricNames = [
        'excepturi',
        'eum',
        'rerum',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'ad';
    $request->report->kind = 'et';
    $request->report->lastModifiedTime = 'eveniet';
    $request->report->name = 'Eileen Hegmann';
    $request->report->ownerProfileId = 'dolorem';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'nesciunt';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'aliquam';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Ms. Cristina Hoppe';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-02-15');
    $request->report->pathAttributionCriteria->dateRange->kind = 'quaerat';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-27');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'voluptate';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'odio';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '25e62190-9e91-4044-a5de-59ac7706670c';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'delectus';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'optio';
    $request->report->pathAttributionCriteria->metricNames = [
        'quis',
        'unde',
        'consectetur',
        'qui',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'enim';
    $request->report->pathCriteria->customChannelGrouping->kind = 'explicabo';
    $request->report->pathCriteria->customChannelGrouping->name = 'Teresa VonRueden';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-02');
    $request->report->pathCriteria->dateRange->kind = 'quia';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-11-15');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'facere';
    $request->report->pathCriteria->floodlightConfigId->etag = 'provident';
    $request->report->pathCriteria->floodlightConfigId->id = '9a2d3356-70e9-43ee-acf5-9f358aaeacae';
    $request->report->pathCriteria->floodlightConfigId->kind = 'ratione';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathCriteria->floodlightConfigId->value = 'neque';
    $request->report->pathCriteria->metricNames = [
        'adipisci',
        'inventore',
        'tempore',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
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
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-08-15');
    $request->report->pathToConversionCriteria->dateRange->kind = 'molestias';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-02');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'ex';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'maxime';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '802cc9e0-c7d9-4d32-bf1a-a63ed9cf1c85';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'commodi';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'quo';
    $request->report->pathToConversionCriteria->metricNames = [
        'id',
        'quaerat',
        'inventore',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 981656;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 140765;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 256928;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 365273;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 255559;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'aliquam';
    $request->report->reachCriteria->activities->metricNames = [
        'voluptatibus',
        'dolorum',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'repellat';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-03');
    $request->report->reachCriteria->dateRange->kind = 'autem';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-07-19');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'numquam',
        'officia',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'nemo',
        'nisi',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 161618;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-01-13');
    $request->report->schedule->repeats = 'dolorem';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::WEDNESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-12-31');
    $request->report->schedule->timezone = 'doloribus';
    $request->report->subAccountId = 'labore';
    $request->report->type = ReportTypeEnum::REACH;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'qui';
    $request->key = 'consectetur';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->profileId = 'aspernatur';
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'nesciunt';

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
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'nesciunt';
    $request->key = 'doloremque';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->profileId = 'tenetur';
    $request->quotaUser = 'sequi';
    $request->reportId = 'temporibus';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'sit';

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
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->fields = 'id';
    $request->fileId = 'exercitationem';
    $request->key = 'commodi';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->profileId = 'delectus';
    $request->quotaUser = 'quidem';
    $request->reportId = 'rem';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'suscipit';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nam';
    $request->fields = 'libero';
    $request->key = 'perspiciatis';
    $request->maxResults = 846990;
    $request->oauthToken = 'dolor';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'non';
    $request->quotaUser = 'deleniti';
    $request->reportId = 'dolor';
    $request->sortField = DfareportingReportsFilesListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingReportsFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'aperiam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'sed';
    $request->key = 'error';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->profileId = 'facere';
    $request->quotaUser = 'est';
    $request->reportId = 'soluta';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'perferendis';

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
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'ipsum';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'accusamus';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Mrs. Rhonda Donnelly';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-20');
    $request->report->pathAttributionCriteria->dateRange->kind = 'soluta';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-06');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'ullam';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'ullam';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '3ccf1c20-4c4a-4dcc-9904-c5195b8648ce';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'voluptatibus';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'quam';
    $request->report->pathAttributionCriteria->metricNames = [
        'a',
        'ab',
        'voluptates',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
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
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'nesciunt';
    $request->report->pathCriteria->customChannelGrouping->kind = 'libero';
    $request->report->pathCriteria->customChannelGrouping->name = 'Christopher Brekke V';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-13');
    $request->report->pathCriteria->dateRange->kind = 'harum';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-17');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'quidem';
    $request->report->pathCriteria->floodlightConfigId->etag = 'inventore';
    $request->report->pathCriteria->floodlightConfigId->id = '9f713d95-a416-49c1-b872-71e18ea9e451';
    $request->report->pathCriteria->floodlightConfigId->kind = 'illo';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'quisquam';
    $request->report->pathCriteria->metricNames = [
        'optio',
    ];
    $request->report->pathCriteria->pathFilters = [
        new PathFilter(),
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
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-10-24');
    $request->report->pathToConversionCriteria->dateRange->kind = 'alias';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-26');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'quam';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'molestias';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'ed29a9d4-eea8-4565-8c2d-4f4c88be4f27';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'quas';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'fugiat';
    $request->report->pathToConversionCriteria->metricNames = [
        'autem',
        'ea',
        'molestiae',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 289208;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 419686;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 808834;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 360352;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 120665;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'dolores';
    $request->report->reachCriteria->activities->metricNames = [
        'repellat',
        'id',
        'fuga',
        'ad',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'temporibus';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-04-05');
    $request->report->reachCriteria->dateRange->kind = 'repellat';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-10');
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
        'veniam',
        'tempore',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'facilis',
        'assumenda',
        'repellat',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 138496;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-05-18');
    $request->report->schedule->repeats = 'alias';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::SATURDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::WEDNESDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-06-04');
    $request->report->schedule->timezone = 'eligendi';
    $request->report->subAccountId = 'magni';
    $request->report->type = ReportTypeEnum::CROSS_DIMENSION_REACH;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'impedit';
    $request->key = 'magni';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'ipsam';
    $request->quotaUser = 'error';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'debitis';

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
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'corrupti';
    $request->key = 'numquam';
    $request->maxResults = 4068;
    $request->oauthToken = 'quod';
    $request->pageToken = 'nisi';
    $request->prettyPrint = false;
    $request->profileId = 'excepturi';
    $request->quotaUser = 'eveniet';
    $request->scope = DfareportingReportsListScopeEnum::MINE;
    $request->sortField = DfareportingReportsListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingReportsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'modi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->report = new Report();
    $request->report->accountId = 'cumque';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'animi';
    $request->report->criteria->activities->metricNames = [
        'possimus',
        'maiores',
        'est',
        'optio',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'nostrum';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-08');
    $request->report->criteria->dateRange->kind = 'ipsa';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::TODAY;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-18');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'commodi',
        'amet',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-28');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'dolor';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-16');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'vitae',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'adipisci',
        'itaque',
        'unde',
        'beatae',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'quas';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'voluptate';
    $request->report->fileName = 'libero';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-18');
    $request->report->floodlightCriteria->dateRange->kind = 'at';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::QUARTER_TO_DATE;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-31');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'dignissimos';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'debitis';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'ceb26d10-f1ef-4263-9c7c-0f0f873f9d5c';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'aspernatur';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'doloribus';
    $request->report->floodlightCriteria->metricNames = [
        'non',
        'repudiandae',
        'quae',
        'tempore',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'deserunt';
    $request->report->kind = 'non';
    $request->report->lastModifiedTime = 'officia';
    $request->report->name = 'Lori Hermiston';
    $request->report->ownerProfileId = 'amet';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'consequuntur';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'ullam';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Julie Bergstrom';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-07-25');
    $request->report->pathAttributionCriteria->dateRange->kind = 'recusandae';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_QUARTER;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-08-28');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'tempora';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'voluptatum';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = 'be09e41a-7a21-45ca-92a4-ba9d59988192';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'placeat';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'assumenda';
    $request->report->pathAttributionCriteria->metricNames = [
        'eligendi',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'eligendi';
    $request->report->pathCriteria->customChannelGrouping->kind = 'ullam';
    $request->report->pathCriteria->customChannelGrouping->name = 'Meghan Koelpin';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-02-12');
    $request->report->pathCriteria->dateRange->kind = 'vero';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-05-25');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'excepturi';
    $request->report->pathCriteria->floodlightConfigId->etag = 'consequatur';
    $request->report->pathCriteria->floodlightConfigId->id = 'bac384e2-3967-403f-ac31-c50824d189a3';
    $request->report->pathCriteria->floodlightConfigId->kind = 'eum';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'iure';
    $request->report->pathCriteria->metricNames = [
        'sunt',
        'facere',
        'dolores',
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
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-15');
    $request->report->pathToConversionCriteria->dateRange->kind = 'est';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-11');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'voluptatum';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'doloribus';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'e46e6177-db9d-4b3b-b0ff-bb6970ee770e';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'neque';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'alias';
    $request->report->pathToConversionCriteria->metricNames = [
        'iusto',
        'debitis',
        'voluptatibus',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 802472;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 179531;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 41289;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 425065;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 930866;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'vitae';
    $request->report->reachCriteria->activities->metricNames = [
        'sit',
        'quibusdam',
        'dolorem',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'blanditiis';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-03');
    $request->report->reachCriteria->dateRange->kind = 'modi';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST365_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-25');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'perspiciatis',
        'corrupti',
        'ea',
        'sequi',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'nobis',
        'est',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 521333;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-03-13');
    $request->report->schedule->repeats = 'adipisci';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::SATURDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-07');
    $request->report->schedule->timezone = 'harum';
    $request->report->subAccountId = 'culpa';
    $request->report->type = ReportTypeEnum::PATH_ATTRIBUTION;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'quam';
    $request->key = 'placeat';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->profileId = 'rem';
    $request->quotaUser = 'a';
    $request->reportId = 'illo';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'est';

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
    $request->accessToken = 'magni';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'assumenda';
    $request->fields = 'libero';
    $request->key = 'quia';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->profileId = 'sapiente';
    $request->quotaUser = 'consequuntur';
    $request->reportId = 'expedita';
    $request->synchronous = false;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'eius';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->report = new Report();
    $request->report->accountId = 'neque';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'vero';
    $request->report->criteria->activities->metricNames = [
        'amet',
        'minima',
        'ea',
        'fugiat',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'officiis';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-25');
    $request->report->criteria->dateRange->kind = 'tempore';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-30');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
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
        'beatae',
        'natus',
        'aliquid',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-31');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'id';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST60_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-22');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'labore',
        'facilis',
        'ducimus',
        'natus',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'saepe',
        'nesciunt',
        'non',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'praesentium';
    $request->report->delivery->recipients = [
        new Recipient(),
    ];
    $request->report->etag = 'eligendi';
    $request->report->fileName = 'eos';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-14');
    $request->report->floodlightCriteria->dateRange->kind = 'omnis';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST30_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-22');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'ab';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'in';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'cb12c5ba-825f-4e22-8d5c-ba6fbfec932a';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'a';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'voluptatum';
    $request->report->floodlightCriteria->metricNames = [
        'adipisci',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'ea';
    $request->report->kind = 'veniam';
    $request->report->lastModifiedTime = 'nam';
    $request->report->name = 'Merle Schroeder';
    $request->report->ownerProfileId = 'odit';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'at';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'ea';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Patrick Jast';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-08-06');
    $request->report->pathAttributionCriteria->dateRange->kind = 'quibusdam';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST24_MONTHS;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-17');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'recusandae';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'placeat';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '60e60758-94d6-41c1-8cd9-0227e37c0d97';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'voluptate';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'et';
    $request->report->pathAttributionCriteria->metricNames = [
        'exercitationem',
        'eius',
        'iste',
    ];
    $request->report->pathAttributionCriteria->pathFilters = [
        new PathFilter(),
    ];
    $request->report->pathCriteria = new ReportPathCriteria();
    $request->report->pathCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'quidem';
    $request->report->pathCriteria->customChannelGrouping->kind = 'officiis';
    $request->report->pathCriteria->customChannelGrouping->name = 'Miss Julio Heathcote Jr.';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-12');
    $request->report->pathCriteria->dateRange->kind = 'ratione';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'voluptas';
    $request->report->pathCriteria->floodlightConfigId->etag = 'natus';
    $request->report->pathCriteria->floodlightConfigId->id = '815aae99-fcde-49e7-a9c9-d4f2d8a44640';
    $request->report->pathCriteria->floodlightConfigId->kind = 'quisquam';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'commodi';
    $request->report->pathCriteria->metricNames = [
        'illum',
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
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-03-14');
    $request->report->pathToConversionCriteria->dateRange->kind = 'dolorem';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST60_DAYS;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-30');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'in';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'at';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'c0d8da56-1220-426a-b8f2-77485c1976af';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'error';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'aut';
    $request->report->pathToConversionCriteria->metricNames = [
        'culpa',
        'reprehenderit',
        'est',
        'aut',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 602133;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 944880;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 802426;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 258045;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 283848;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'facilis';
    $request->report->reachCriteria->activities->metricNames = [
        'quam',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'ullam';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-10');
    $request->report->reachCriteria->dateRange->kind = 'officiis';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-07-29');
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
        'quibusdam',
        'aut',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'rerum',
        'cumque',
        'delectus',
        'repellendus',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 778520;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-04-20');
    $request->report->schedule->repeats = 'dolor';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::THURSDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-09');
    $request->report->schedule->timezone = 'consectetur';
    $request->report->subAccountId = 'tempore';
    $request->report->type = ReportTypeEnum::PATH;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'facilis';
    $request->key = 'nostrum';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'laborum';
    $request->quotaUser = 'voluptates';
    $request->reportId = 'recusandae';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'earum';

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
