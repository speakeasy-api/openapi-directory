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
use \OpenAPI\OpenAPI\Models\Shared\UvarFilter;
use \OpenAPI\OpenAPI\Models\Shared\UvarFilterMatchEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->report = new Report();
    $request->report->accountId = 'omnis';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'qui';
    $request->report->criteria->activities->metricNames = [
        'velit',
        'amet',
        'ipsam',
        'suscipit',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'ipsa';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-02-16');
    $request->report->criteria->dateRange->kind = 'velit';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-24');
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
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'perspiciatis',
        'delectus',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-21');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'dolorum';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-01-01');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'ratione',
        'consequuntur',
        'neque',
        'deserunt',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'inventore',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'maiores';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'rerum';
    $request->report->fileName = 'laborum';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-08-15');
    $request->report->floodlightCriteria->dateRange->kind = 'molestias';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-02');
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
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'deleniti';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'accusantium';
    $request->report->floodlightCriteria->floodlightConfigId->id = '2cc9e0c7-d9d3-423f-9aa6-3ed9cf1c856b';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'quo';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'id';
    $request->report->floodlightCriteria->metricNames = [
        'inventore',
        'accusamus',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'odit';
    $request->report->kind = 'numquam';
    $request->report->lastModifiedTime = 'nemo';
    $request->report->name = 'Kristi Haag';
    $request->report->ownerProfileId = 'dolorum';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'repellat';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'veritatis';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Tonya Rosenbaum';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-16');
    $request->report->pathAttributionCriteria->dateRange->kind = 'numquam';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST7_DAYS;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-19');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'consequuntur';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'praesentium';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '73c7dd9e-faf4-43dc-a236-20f3138f30df';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'sequi';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'cum';
    $request->report->pathAttributionCriteria->metricNames = [
        'magni',
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
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'similique';
    $request->report->pathCriteria->customChannelGrouping->kind = 'id';
    $request->report->pathCriteria->customChannelGrouping->name = 'Lucy Heaney';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-11-06');
    $request->report->pathCriteria->dateRange->kind = 'veniam';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-11-02');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'perspiciatis';
    $request->report->pathCriteria->floodlightConfigId->etag = 'illum';
    $request->report->pathCriteria->floodlightConfigId->id = '38383879-0243-4b29-bdab-30e917f50fda';
    $request->report->pathCriteria->floodlightConfigId->kind = 'alias';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathCriteria->floodlightConfigId->value = 'porro';
    $request->report->pathCriteria->metricNames = [
        'libero',
        'quasi',
        'quidem',
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
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-04');
    $request->report->pathToConversionCriteria->dateRange->kind = 'cum';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::TODAY;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-06-12');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'non';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'libero';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'b744664e-b1d0-4338-8b0d-1bb17afee74b';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'voluptas';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'repudiandae';
    $request->report->pathToConversionCriteria->metricNames = [
        'occaecati',
        'labore',
        'ipsam',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 800407;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 468707;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 924505;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 849045;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 673493;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'consectetur';
    $request->report->reachCriteria->activities->metricNames = [
        'possimus',
        'illo',
        'autem',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'rerum';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-07-17');
    $request->report->reachCriteria->dateRange->kind = 'nisi';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-18');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'sequi',
        'doloremque',
        'dolor',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'consectetur',
        'aperiam',
        'sed',
        'dolor',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 692918;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-07-25');
    $request->report->schedule->repeats = 'accusamus';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::MONDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-08');
    $request->report->schedule->timezone = 'placeat';
    $request->report->subAccountId = 'sapiente';
    $request->report->type = ReportTypeEnum::PATH_TO_CONVERSION;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'sequi';
    $request->key = 'ab';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'ullam';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'porro';

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
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'fugit';
    $request->key = 'consequatur';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->profileId = 'placeat';
    $request->quotaUser = 'labore';
    $request->reportId = 'culpa';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'quod';

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
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'labore';
    $request->fileId = 'maxime';
    $request->key = 'ad';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->profileId = 'provident';
    $request->quotaUser = 'exercitationem';
    $request->reportId = 'cum';
    $request->uploadType = 'atque';
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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'voluptatibus';
    $request->key = 'mollitia';
    $request->maxResults = 462579;
    $request->oauthToken = 'deleniti';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->profileId = 'ab';
    $request->quotaUser = 'voluptates';
    $request->reportId = 'eos';
    $request->sortField = DfareportingReportsFilesListSortFieldEnum::LAST_MODIFIED_TIME;
    $request->sortOrder = DfareportingReportsFilesListSortOrderEnum::ASCENDING;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'error';

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
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'sint';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->profileId = 'distinctio';
    $request->quotaUser = 'harum';
    $request->reportId = 'quidem';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'minus';

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
use \OpenAPI\OpenAPI\Models\Shared\UvarFilter;
use \OpenAPI\OpenAPI\Models\Shared\UvarFilterMatchEnum;
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
    $request->report->accountId = 'quidem';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'iste';
    $request->report->criteria->activities->metricNames = [
        'odio',
        'ab',
        'neque',
        'pariatur',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'enim';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-01');
    $request->report->criteria->dateRange->kind = 'sunt';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-06-16');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'in',
        'quia',
        'odio',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-30');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'quos';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-21');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'illo',
        'illo',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'quisquam',
        'fugit',
        'optio',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::ATTACHMENT;
    $request->report->delivery->message = 'minima';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'tenetur';
    $request->report->fileName = 'libero';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-30');
    $request->report->floodlightCriteria->dateRange->kind = 'rerum';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YESTERDAY;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-26');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
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
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'quibusdam';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'eos';
    $request->report->floodlightCriteria->floodlightConfigId->id = '9a9d4eea-8565-48c2-94f4-c88be4f278fd';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'unde';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'ea';
    $request->report->floodlightCriteria->metricNames = [
        'accusamus',
        'labore',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'placeat';
    $request->report->kind = 'corporis';
    $request->report->lastModifiedTime = 'dicta';
    $request->report->name = 'Ernest Wolf';
    $request->report->ownerProfileId = 'fuga';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'corrupti';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'temporibus';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Pat Zieme';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-02-24');
    $request->report->pathAttributionCriteria->dateRange->kind = 'nostrum';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-06');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'assumenda';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'repellat';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '2190abd9-bbcc-4272-9ec2-659ce0280840';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'quod';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'excepturi';
    $request->report->pathAttributionCriteria->metricNames = [
        'tenetur',
        'vel',
        'corrupti',
        'voluptates',
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
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'cumque';
    $request->report->pathCriteria->customChannelGrouping->kind = 'blanditiis';
    $request->report->pathCriteria->customChannelGrouping->name = 'Taylor Schuster';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-28');
    $request->report->pathCriteria->dateRange->kind = 'incidunt';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-12-11');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'nesciunt';
    $request->report->pathCriteria->floodlightConfigId->etag = 'aperiam';
    $request->report->pathCriteria->floodlightConfigId->id = 'c6632b43-91fd-4f01-83e9-1e8f7bc69d46';
    $request->report->pathCriteria->floodlightConfigId->kind = 'alias';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'iusto';
    $request->report->pathCriteria->metricNames = [
        'debitis',
        'quo',
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
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-19');
    $request->report->pathToConversionCriteria->dateRange->kind = 'a';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YESTERDAY;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-02-07');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'qui';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'laboriosam';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '31c7c0f0-f873-4f9d-9c25-fd3e0b4a4a42';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'ullam';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'maxime';
    $request->report->pathToConversionCriteria->metricNames = [
        'ipsa',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 354533;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 478000;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 103745;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 66919;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 982197;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'fugit';
    $request->report->reachCriteria->activities->metricNames = [
        'iusto',
        'recusandae',
        'iusto',
        'pariatur',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'enim';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-21');
    $request->report->reachCriteria->dateRange->kind = 'cum';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-08');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'fuga',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'culpa',
        'dolores',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 81673;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-03-25');
    $request->report->schedule->repeats = 'officia';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-04-23');
    $request->report->schedule->timezone = 'dolorum';
    $request->report->subAccountId = 'provident';
    $request->report->type = ReportTypeEnum::PATH;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'rem';
    $request->key = 'quos';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->profileId = 'perspiciatis';
    $request->quotaUser = 'fugit';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'sapiente';

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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->maxResults = 355092;
    $request->oauthToken = 'dolorem';
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->profileId = 'esse';
    $request->quotaUser = 'vero';
    $request->scope = DfareportingReportsListScopeEnum::ALL;
    $request->sortField = DfareportingReportsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingReportsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'vero';

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
use \OpenAPI\OpenAPI\Models\Shared\UvarFilter;
use \OpenAPI\OpenAPI\Models\Shared\UvarFilterMatchEnum;
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
    $request->report->accountId = 'recusandae';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'nobis';
    $request->report->criteria->activities->metricNames = [
        'consequatur',
        'distinctio',
        'similique',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'consectetur';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-19');
    $request->report->criteria->dateRange->kind = 'saepe';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::MONTH_TO_DATE;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-06');
    $request->report->criteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->criteria->metricNames = [
        'sequi',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-08-06');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'adipisci';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::WEEK_TO_DATE;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-12-31');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::ADVERTISER;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'dolore',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'dicta',
        'deleniti',
        'perspiciatis',
        'deserunt',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'eum';
    $request->report->delivery->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->report->etag = 'iure';
    $request->report->fileName = 'harum';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-27');
    $request->report->floodlightCriteria->dateRange->kind = 'in';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST14_DAYS;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-31');
    $request->report->floodlightCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->floodlightCriteria->floodlightConfigId = new DimensionValue();
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'similique';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'est';
    $request->report->floodlightCriteria->floodlightConfigId->id = '60c8fe46-e617-47db-9db3-b70ffbb6970e';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'repudiandae';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'nihil';
    $request->report->floodlightCriteria->metricNames = [
        'eveniet',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::CSV;
    $request->report->id = 'autem';
    $request->report->kind = 'alias';
    $request->report->lastModifiedTime = 'occaecati';
    $request->report->name = 'Henrietta Wiza';
    $request->report->ownerProfileId = 'eos';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'vel';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'itaque';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Dr. Gloria Renner';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-04');
    $request->report->pathAttributionCriteria->dateRange->kind = 'inventore';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::QUARTER_TO_DATE;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-04');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'est';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'ipsum';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = 'd98637ca-85c3-4fe6-9574-dbaf94a7c98f';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'illo';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'est';
    $request->report->pathAttributionCriteria->metricNames = [
        'magni',
        'rem',
        'assumenda',
        'libero',
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
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'sapiente';
    $request->report->pathCriteria->customChannelGrouping->kind = 'consequuntur';
    $request->report->pathCriteria->customChannelGrouping->name = 'Courtney Gislason';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2020-06-21');
    $request->report->pathCriteria->dateRange->kind = 'amet';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-23');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'officiis';
    $request->report->pathCriteria->floodlightConfigId->etag = 'sunt';
    $request->report->pathCriteria->floodlightConfigId->id = '4b21cd98-196d-455a-b69a-1c4b79ae3368';
    $request->report->pathCriteria->floodlightConfigId->kind = 'beatae';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathCriteria->floodlightConfigId->value = 'eos';
    $request->report->pathCriteria->metricNames = [
        'eligendi',
    ];
    $request->report->pathCriteria->pathFilters = [
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
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-02-11');
    $request->report->pathToConversionCriteria->dateRange->kind = 'ab';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_MONTH;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-11-07');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'quasi';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'dolores';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = 'c5ba825f-e22c-4d5c-ba6f-bfec932af681';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'adipisci';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'ea';
    $request->report->pathToConversionCriteria->metricNames = [
        'nam',
        'delectus',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 811117;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 906587;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 800053;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 140289;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 826920;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'ea';
    $request->report->reachCriteria->activities->metricNames = [
        'inventore',
        'ea',
        'repellat',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'delectus';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-08-06');
    $request->report->reachCriteria->dateRange->kind = 'quibusdam';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST24_MONTHS;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-17');
    $request->report->reachCriteria->dimensionFilters = [
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
        'aliquid',
        'sit',
        'vero',
        'laboriosam',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'reprehenderit',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 341302;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2021-10-07');
    $request->report->schedule->repeats = 'numquam';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::SUNDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::DAY_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-07-24');
    $request->report->schedule->timezone = 'excepturi';
    $request->report->subAccountId = 'aut';
    $request->report->type = ReportTypeEnum::STANDARD;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'neque';
    $request->key = 'nihil';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->profileId = 'eaque';
    $request->quotaUser = 'facere';
    $request->reportId = 'iste';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'voluptate';

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
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'eius';
    $request->key = 'iste';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->profileId = 'similique';
    $request->quotaUser = 'quidem';
    $request->reportId = 'officiis';
    $request->synchronous = false;
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'dignissimos';

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
use \OpenAPI\OpenAPI\Models\Shared\UvarFilter;
use \OpenAPI\OpenAPI\Models\Shared\UvarFilterMatchEnum;
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
    $request->report->accountId = 'beatae';
    $request->report->criteria = new ReportCriteria();
    $request->report->criteria->activities = new Activities();
    $request->report->criteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->activities->kind = 'vitae';
    $request->report->criteria->activities->metricNames = [
        'commodi',
    ];
    $request->report->criteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->criteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->criteria->customRichMediaEvents->kind = 'qui';
    $request->report->criteria->dateRange = new DateRange();
    $request->report->criteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-29');
    $request->report->criteria->dateRange->kind = 'accusantium';
    $request->report->criteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::MONTH_TO_DATE;
    $request->report->criteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2021-11-14');
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
        'veniam',
    ];
    $request->report->crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria();
    $request->report->crossDimensionReachCriteria->breakdown = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->crossDimensionReachCriteria->dateRange = new DateRange();
    $request->report->crossDimensionReachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-03-23');
    $request->report->crossDimensionReachCriteria->dateRange->kind = 'omnis';
    $request->report->crossDimensionReachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_YEAR;
    $request->report->crossDimensionReachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->report->crossDimensionReachCriteria->dimension = ReportCrossDimensionReachCriteriaDimensionEnum::SITE_BY_CAMPAIGN;
    $request->report->crossDimensionReachCriteria->dimensionFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->crossDimensionReachCriteria->metricNames = [
        'voluptates',
        'in',
        'odit',
    ];
    $request->report->crossDimensionReachCriteria->overlapMetricNames = [
        'eligendi',
        'error',
        'nulla',
    ];
    $request->report->crossDimensionReachCriteria->pivoted = false;
    $request->report->delivery = new ReportDelivery();
    $request->report->delivery->emailOwner = false;
    $request->report->delivery->emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum::LINK;
    $request->report->delivery->message = 'maiores';
    $request->report->delivery->recipients = [
        new Recipient(),
    ];
    $request->report->etag = 'pariatur';
    $request->report->fileName = 'totam';
    $request->report->floodlightCriteria = new ReportFloodlightCriteria();
    $request->report->floodlightCriteria->customRichMediaEvents = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->floodlightCriteria->dateRange = new DateRange();
    $request->report->floodlightCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-22');
    $request->report->floodlightCriteria->dateRange->kind = 'laboriosam';
    $request->report->floodlightCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YEAR_TO_DATE;
    $request->report->floodlightCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-18');
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
    $request->report->floodlightCriteria->floodlightConfigId->dimensionName = 'ipsa';
    $request->report->floodlightCriteria->floodlightConfigId->etag = 'illum';
    $request->report->floodlightCriteria->floodlightConfigId->id = 'b73a2f93-f467-4dc0-98da-56122026ab8f';
    $request->report->floodlightCriteria->floodlightConfigId->kind = 'eos';
    $request->report->floodlightCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->floodlightCriteria->floodlightConfigId->value = 'voluptate';
    $request->report->floodlightCriteria->metricNames = [
        'praesentium',
        'exercitationem',
    ];
    $request->report->floodlightCriteria->reportProperties = new ReportFloodlightCriteriaReportProperties();
    $request->report->floodlightCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->floodlightCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->format = ReportFormatEnum::EXCEL;
    $request->report->id = 'et';
    $request->report->kind = 'cupiditate';
    $request->report->lastModifiedTime = 'in';
    $request->report->name = 'Marguerite Wiegand';
    $request->report->ownerProfileId = 'aut';
    $request->report->pathAttributionCriteria = new ReportPathAttributionCriteria();
    $request->report->pathAttributionCriteria->activityFilters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->pathAttributionCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathAttributionCriteria->customChannelGrouping->fallbackName = 'culpa';
    $request->report->pathAttributionCriteria->customChannelGrouping->kind = 'reprehenderit';
    $request->report->pathAttributionCriteria->customChannelGrouping->name = 'Charles Kuvalis';
    $request->report->pathAttributionCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathAttributionCriteria->dateRange = new DateRange();
    $request->report->pathAttributionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-19');
    $request->report->pathAttributionCriteria->dateRange->kind = 'fugiat';
    $request->report->pathAttributionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::LAST90_DAYS;
    $request->report->pathAttributionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-15');
    $request->report->pathAttributionCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathAttributionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathAttributionCriteria->floodlightConfigId->dimensionName = 'ullam';
    $request->report->pathAttributionCriteria->floodlightConfigId->etag = 'neque';
    $request->report->pathAttributionCriteria->floodlightConfigId->id = '0e5cc7c6-d0cb-4cfd-8d33-4b6f623bceca';
    $request->report->pathAttributionCriteria->floodlightConfigId->kind = 'facilis';
    $request->report->pathAttributionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathAttributionCriteria->floodlightConfigId->value = 'alias';
    $request->report->pathAttributionCriteria->metricNames = [
        'voluptates',
        'recusandae',
        'quis',
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
    ];
    $request->report->pathCriteria->customChannelGrouping = new ChannelGrouping();
    $request->report->pathCriteria->customChannelGrouping->fallbackName = 'pariatur';
    $request->report->pathCriteria->customChannelGrouping->kind = 'officia';
    $request->report->pathCriteria->customChannelGrouping->name = 'Jonathon Marquardt';
    $request->report->pathCriteria->customChannelGrouping->rules = [
        new ChannelGroupingRule(),
        new ChannelGroupingRule(),
    ];
    $request->report->pathCriteria->dateRange = new DateRange();
    $request->report->pathCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2021-04-12');
    $request->report->pathCriteria->dateRange->kind = 'perferendis';
    $request->report->pathCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::PREVIOUS_WEEK;
    $request->report->pathCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->report->pathCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathCriteria->floodlightConfigId->dimensionName = 'repudiandae';
    $request->report->pathCriteria->floodlightConfigId->etag = 'odio';
    $request->report->pathCriteria->floodlightConfigId->id = 'b413cbe2-d176-4dc1-843d-40f61d171157';
    $request->report->pathCriteria->floodlightConfigId->kind = 'cumque';
    $request->report->pathCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->report->pathCriteria->floodlightConfigId->value = 'debitis';
    $request->report->pathCriteria->metricNames = [
        'itaque',
        'saepe',
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
    ];
    $request->report->pathToConversionCriteria->customFloodlightVariables = [
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->customRichMediaEvents = [
        new DimensionValue(),
    ];
    $request->report->pathToConversionCriteria->dateRange = new DateRange();
    $request->report->pathToConversionCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-11');
    $request->report->pathToConversionCriteria->dateRange->kind = 'magnam';
    $request->report->pathToConversionCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::TODAY;
    $request->report->pathToConversionCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-17');
    $request->report->pathToConversionCriteria->floodlightConfigId = new DimensionValue();
    $request->report->pathToConversionCriteria->floodlightConfigId->dimensionName = 'quia';
    $request->report->pathToConversionCriteria->floodlightConfigId->etag = 'maiores';
    $request->report->pathToConversionCriteria->floodlightConfigId->id = '32e3b49d-be0f-423b-bb6d-9948d6eded47';
    $request->report->pathToConversionCriteria->floodlightConfigId->kind = 'odio';
    $request->report->pathToConversionCriteria->floodlightConfigId->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->report->pathToConversionCriteria->floodlightConfigId->value = 'deleniti';
    $request->report->pathToConversionCriteria->metricNames = [
        'reiciendis',
    ];
    $request->report->pathToConversionCriteria->perInteractionDimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->pathToConversionCriteria->reportProperties = new ReportPathToConversionCriteriaReportProperties();
    $request->report->pathToConversionCriteria->reportProperties->clicksLookbackWindow = 437920;
    $request->report->pathToConversionCriteria->reportProperties->impressionsLookbackWindow = 673057;
    $request->report->pathToConversionCriteria->reportProperties->includeAttributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedCookieConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->includeUnattributedIPConversions = false;
    $request->report->pathToConversionCriteria->reportProperties->maximumClickInteractions = 69825;
    $request->report->pathToConversionCriteria->reportProperties->maximumImpressionInteractions = 439202;
    $request->report->pathToConversionCriteria->reportProperties->maximumInteractionGap = 643400;
    $request->report->pathToConversionCriteria->reportProperties->pivotOnInteractionPath = false;
    $request->report->reachCriteria = new ReportReachCriteria();
    $request->report->reachCriteria->activities = new Activities();
    $request->report->reachCriteria->activities->filters = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->activities->kind = 'dolores';
    $request->report->reachCriteria->activities->metricNames = [
        'nemo',
        'vero',
        'totam',
        'eos',
    ];
    $request->report->reachCriteria->customRichMediaEvents = new CustomRichMediaEvents();
    $request->report->reachCriteria->customRichMediaEvents->filteredEventIds = [
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
        new DimensionValue(),
    ];
    $request->report->reachCriteria->customRichMediaEvents->kind = 'illum';
    $request->report->reachCriteria->dateRange = new DateRange();
    $request->report->reachCriteria->dateRange->endDate = DateTime::createFromFormat('Y-m-d', '2022-06-28');
    $request->report->reachCriteria->dateRange->kind = 'fugiat';
    $request->report->reachCriteria->dateRange->relativeDateRange = DateRangeRelativeDateRangeEnum::YESTERDAY;
    $request->report->reachCriteria->dateRange->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-09');
    $request->report->reachCriteria->dimensionFilters = [
        new DimensionValue(),
    ];
    $request->report->reachCriteria->dimensions = [
        new SortedDimension(),
        new SortedDimension(),
        new SortedDimension(),
    ];
    $request->report->reachCriteria->enableAllDimensionCombinations = false;
    $request->report->reachCriteria->metricNames = [
        'debitis',
        'sint',
    ];
    $request->report->reachCriteria->reachByFrequencyMetricNames = [
        'ratione',
    ];
    $request->report->schedule = new ReportSchedule();
    $request->report->schedule->active = false;
    $request->report->schedule->every = 609653;
    $request->report->schedule->expirationDate = DateTime::createFromFormat('Y-m-d', '2022-04-28');
    $request->report->schedule->repeats = 'distinctio';
    $request->report->schedule->repeatsOnWeekDays = [
        ReportScheduleRepeatsOnWeekDaysEnum::TUESDAY,
        ReportScheduleRepeatsOnWeekDaysEnum::FRIDAY,
    ];
    $request->report->schedule->runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum::WEEK_OF_MONTH;
    $request->report->schedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-26');
    $request->report->schedule->timezone = 'adipisci';
    $request->report->subAccountId = 'nemo';
    $request->report->type = ReportTypeEnum::STANDARD;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'eius';
    $request->key = 'suscipit';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->profileId = 'quisquam';
    $request->quotaUser = 'accusamus';
    $request->reportId = 'quis';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'necessitatibus';

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
