# placements

### Available Operations

* [dfareportingPlacementsGeneratetags](#dfareportingplacementsgeneratetags) - Generates tags for a placement.
* [dfareportingPlacementsGet](#dfareportingplacementsget) - Gets one placement by ID.
* [dfareportingPlacementsInsert](#dfareportingplacementsinsert) - Inserts a new placement.
* [dfareportingPlacementsList](#dfareportingplacementslist) - Retrieves a list of placements, possibly filtered. This method supports paging.
* [dfareportingPlacementsPatch](#dfareportingplacementspatch) - Updates an existing placement. This method supports patch semantics.
* [dfareportingPlacementsUpdate](#dfareportingplacementsupdate) - Updates an existing placement.

## dfareportingPlacementsGeneratetags

Generates tags for a placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsGeneratetagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsGeneratetagsTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsGeneratetagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsGeneratetagsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->campaignId = 'commodi';
    $request->fields = 'dicta';
    $request->key = 'illum';
    $request->oauthToken = 'aspernatur';
    $request->placementIds = [
        'deserunt',
        'dignissimos',
    ];
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'facilis';
    $request->tagFormats = [
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_TRACKING,
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT,
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT,
    ];
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DfareportingPlacementsGeneratetagsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsGeneratetags($request, $requestSecurity);

    if ($response->placementsGenerateTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementsGet

Gets one placement by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'eligendi';
    $request->id = 'f7812cb5-12c8-4782-80bf-548f88f8f1bf';
    $request->key = 'alias';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->profileId = 'quod';
    $request->quotaUser = 'totam';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DfareportingPlacementsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsGet($request, $requestSecurity);

    if ($response->placement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementsInsert

Inserts a new placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Placement;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\CompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\TranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\PlacementVpaidAdapterChoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placement = new Placement();
    $request->placement->accountId = 'dolores';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
    ];
    $request->placement->advertiserId = 'eum';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'nulla';
    $request->placement->advertiserIdDimensionValue->etag = 'corporis';
    $request->placement->advertiserIdDimensionValue->id = 'd831d008-1090-4f67-8667-3f3a681c5768';
    $request->placement->advertiserIdDimensionValue->kind = 'repellendus';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->advertiserIdDimensionValue->value = 'itaque';
    $request->placement->archived = false;
    $request->placement->campaignId = 'molestiae';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'quaerat';
    $request->placement->campaignIdDimensionValue->etag = 'explicabo';
    $request->placement->campaignIdDimensionValue->id = '409a215e-0860-4148-9a5f-63e3af3dd9dd';
    $request->placement->campaignIdDimensionValue->kind = 'officia';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->campaignIdDimensionValue->value = 'velit';
    $request->placement->comment = 'vero';
    $request->placement->compatibility = PlacementCompatibilityEnum::IN_STREAM_VIDEO;
    $request->placement->contentCategoryId = 'pariatur';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'vel';
    $request->placement->directorySiteId = 'non';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'incidunt';
    $request->placement->directorySiteIdDimensionValue->etag = 'praesentium';
    $request->placement->directorySiteIdDimensionValue->id = '3e4a7a98-e4df-437e-85b8-955d413e13a4';
    $request->placement->directorySiteIdDimensionValue->kind = 'praesentium';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->directorySiteIdDimensionValue->value = 'consectetur';
    $request->placement->externalId = 'dicta';
    $request->placement->id = 'ipsa';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'occaecati';
    $request->placement->idDimensionValue->etag = 'perferendis';
    $request->placement->idDimensionValue->id = '7bd354c0-92bd-4734-b024-49d86f4bb20f';
    $request->placement->idDimensionValue->kind = 'debitis';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->idDimensionValue->value = 'quibusdam';
    $request->placement->keyName = 'provident';
    $request->placement->kind = 'veritatis';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'sunt';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 798619;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 710148;
    $request->placement->name = 'Dexter Kulas';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placement->placementGroupId = 'dolorum';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'voluptatibus';
    $request->placement->placementGroupIdDimensionValue->etag = 'modi';
    $request->placement->placementGroupIdDimensionValue->id = '5a27f69e-2c9e-46d1-8e9d-b3ad4c6b0310';
    $request->placement->placementGroupIdDimensionValue->kind = 'molestias';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->placementGroupIdDimensionValue->value = 'occaecati';
    $request->placement->placementStrategyId = 'quisquam';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_NONE;
    $request->placement->pricingSchedule->disregardOverdelivery = false;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-21');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'modi';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPC;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-23');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-04-10');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'error';
    $request->placement->siteId = 'incidunt';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'asperiores';
    $request->placement->siteIdDimensionValue->etag = 'eos';
    $request->placement->siteIdDimensionValue->id = 'ab1fd567-1e9c-4326-b50a-467143789ce0';
    $request->placement->siteIdDimensionValue->kind = 'recusandae';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'error';
    $request->placement->size = new Size();
    $request->placement->size->height = 115881;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'nemo';
    $request->placement->size->kind = 'unde';
    $request->placement->size->width = 257873;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::DRAFT;
    $request->placement->subaccountId = 'omnis';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_JAVASCRIPT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'ducimus';
    $request->placement->tagSetting->includeClickThroughUrls = false;
    $request->placement->tagSetting->includeClickTracking = false;
    $request->placement->tagSetting->keywordOption = TagSettingKeywordOptionEnum::PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
    $request->placement->videoActiveViewOptOut = false;
    $request->placement->videoSettings = new VideoSettings();
    $request->placement->videoSettings->companionSettings = new CompanionSetting();
    $request->placement->videoSettings->companionSettings->companionsDisabled = false;
    $request->placement->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->videoSettings->companionSettings->imageOnly = false;
    $request->placement->videoSettings->companionSettings->kind = 'ipsa';
    $request->placement->videoSettings->kind = 'dolores';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::LANDSCAPE;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'sed';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 954542;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 905046;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 224548;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 694647;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        736574,
        292846,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'quibusdam';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::HTML5;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odio';
    $request->fields = 'reprehenderit';
    $request->key = 'quas';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->profileId = 'distinctio';
    $request->quotaUser = 'nam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DfareportingPlacementsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsInsert($request, $requestSecurity);

    if ($response->placement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementsList

Retrieves a list of placements, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListCompatibilitiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListPricingTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->advertiserIds = [
        'impedit',
    ];
    $request->alt = AltEnum::PROTO;
    $request->archived = false;
    $request->callback = 'ad';
    $request->campaignIds = [
        'aspernatur',
    ];
    $request->compatibilities = [
        DfareportingPlacementsListCompatibilitiesEnum::IN_STREAM_VIDEO,
        DfareportingPlacementsListCompatibilitiesEnum::IN_STREAM_AUDIO,
        DfareportingPlacementsListCompatibilitiesEnum::IN_STREAM_VIDEO,
    ];
    $request->contentCategoryIds = [
        'eligendi',
    ];
    $request->directorySiteIds = [
        'placeat',
        'aliquam',
        'aliquid',
    ];
    $request->fields = 'adipisci';
    $request->groupIds = [
        'fugiat',
        'enim',
    ];
    $request->ids = [
        'eum',
        'exercitationem',
        'at',
        'culpa',
    ];
    $request->key = 'alias';
    $request->maxEndDate = 'eos';
    $request->maxResults = 550066;
    $request->maxStartDate = 'quisquam';
    $request->minEndDate = 'dolor';
    $request->minStartDate = 'accusamus';
    $request->oauthToken = 'sint';
    $request->pageToken = 'enim';
    $request->paymentSource = DfareportingPlacementsListPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placementStrategyIds = [
        'veritatis',
        'vero',
        'ratione',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementsListPricingTypesEnum::PRICING_TYPE_CPM_ACTIVEVIEW,
    ];
    $request->profileId = 'fugiat';
    $request->quotaUser = 'deserunt';
    $request->searchString = 'sint';
    $request->siteIds = [
        'commodi',
        'magnam',
    ];
    $request->sizeIds = [
        'occaecati',
        'possimus',
        'voluptate',
    ];
    $request->sortField = DfareportingPlacementsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingPlacementsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new DfareportingPlacementsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsList($request, $requestSecurity);

    if ($response->placementsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementsPatch

Updates an existing placement. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Placement;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\CompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\TranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\PlacementVpaidAdapterChoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placement = new Placement();
    $request->placement->accountId = 'adipisci';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'veritatis';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'consectetur';
    $request->placement->advertiserIdDimensionValue->etag = 'fuga';
    $request->placement->advertiserIdDimensionValue->id = '12a6b992-4945-4944-87f5-c843836b86b3';
    $request->placement->advertiserIdDimensionValue->kind = 'quisquam';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->advertiserIdDimensionValue->value = 'a';
    $request->placement->archived = false;
    $request->placement->campaignId = 'ex';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'dolore';
    $request->placement->campaignIdDimensionValue->etag = 'dicta';
    $request->placement->campaignIdDimensionValue->id = '5b0449f9-df13-4f4e-adbe-78bf60682589';
    $request->placement->campaignIdDimensionValue->kind = 'eius';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->campaignIdDimensionValue->value = 'culpa';
    $request->placement->comment = 'in';
    $request->placement->compatibility = PlacementCompatibilityEnum::APP;
    $request->placement->contentCategoryId = 'amet';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'fugiat';
    $request->placement->directorySiteId = 'corporis';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'impedit';
    $request->placement->directorySiteIdDimensionValue->etag = 'in';
    $request->placement->directorySiteIdDimensionValue->id = '2795b785-148d-46d5-89e5-635b33bc0f97';
    $request->placement->directorySiteIdDimensionValue->kind = 'voluptatem';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->directorySiteIdDimensionValue->value = 'dolore';
    $request->placement->externalId = 'magni';
    $request->placement->id = 'voluptatibus';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'quod';
    $request->placement->idDimensionValue->etag = 'provident';
    $request->placement->idDimensionValue->id = 'f4844225-e75b-4796-865c-0efa6f93b90a';
    $request->placement->idDimensionValue->kind = 'beatae';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->idDimensionValue->value = 'deleniti';
    $request->placement->keyName = 'eligendi';
    $request->placement->kind = 'unde';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'veniam';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 724307;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 882195;
    $request->placement->name = 'Janice Hermiston';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'adipisci';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'provident';
    $request->placement->placementGroupIdDimensionValue->etag = 'reiciendis';
    $request->placement->placementGroupIdDimensionValue->id = '4fe77210-d1f6-4558-899c-722d2bc0f940';
    $request->placement->placementGroupIdDimensionValue->kind = 'voluptatum';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->placementGroupIdDimensionValue->value = 'possimus';
    $request->placement->placementStrategyId = 'unde';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placement->pricingSchedule->disregardOverdelivery = false;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2021-09-18');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'recusandae';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPC;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-26');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2021-08-23');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'placeat';
    $request->placement->siteId = 'est';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'est';
    $request->placement->siteIdDimensionValue->etag = 'placeat';
    $request->placement->siteIdDimensionValue->id = '9b4caa1c-fe9e-415d-b903-907f37831983';
    $request->placement->siteIdDimensionValue->kind = 'fugiat';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->siteIdDimensionValue->value = 'odit';
    $request->placement->size = new Size();
    $request->placement->size->height = 924872;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'minima';
    $request->placement->size->kind = 'aliquam';
    $request->placement->size->width = 631123;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::ACKNOWLEDGE_REJECTION;
    $request->placement->subaccountId = 'corporis';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_CLICK_COMMANDS,
        PlacementTagFormatsEnum::PLACEMENT_TAG_CLICK_COMMANDS,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'quis';
    $request->placement->tagSetting->includeClickThroughUrls = false;
    $request->placement->tagSetting->includeClickTracking = false;
    $request->placement->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->placement->videoActiveViewOptOut = false;
    $request->placement->videoSettings = new VideoSettings();
    $request->placement->videoSettings->companionSettings = new CompanionSetting();
    $request->placement->videoSettings->companionSettings->companionsDisabled = false;
    $request->placement->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
    ];
    $request->placement->videoSettings->companionSettings->imageOnly = false;
    $request->placement->videoSettings->companionSettings->kind = 'optio';
    $request->placement->videoSettings->kind = 'ipsam';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::ANY;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'fugit';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 213871;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 198812;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 803113;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 79246;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        467657,
        112399,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'quibusdam';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::FLASH;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'mollitia';
    $request->id = '6ddf5abd-6487-4c5f-82b8-62a00bef69e1';
    $request->key = 'aperiam';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->profileId = 'veritatis';
    $request->quotaUser = 'enim';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DfareportingPlacementsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsPatch($request, $requestSecurity);

    if ($response->placement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementsUpdate

Updates an existing placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Placement;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\LookbackConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlacementPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedule;
use \OpenAPI\OpenAPI\Models\Shared\PricingScheduleCapCostOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingPeriod;
use \OpenAPI\OpenAPI\Models\Shared\PricingSchedulePricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementTagFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\CompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\TranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\PlacementVpaidAdapterChoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placement = new Placement();
    $request->placement->accountId = 'alias';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'quibusdam';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'fuga';
    $request->placement->advertiserIdDimensionValue->etag = 'nihil';
    $request->placement->advertiserIdDimensionValue->id = 'afded84a-35a4-4123-8e1a-735ac26ae33b';
    $request->placement->advertiserIdDimensionValue->kind = 'itaque';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->advertiserIdDimensionValue->value = 'provident';
    $request->placement->archived = false;
    $request->placement->campaignId = 'dignissimos';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'dicta';
    $request->placement->campaignIdDimensionValue->etag = 'id';
    $request->placement->campaignIdDimensionValue->id = '8f46bca1-106f-4e96-9b71-1d08cf88ec9f';
    $request->placement->campaignIdDimensionValue->kind = 'nihil';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->campaignIdDimensionValue->value = 'perspiciatis';
    $request->placement->comment = 'occaecati';
    $request->placement->compatibility = PlacementCompatibilityEnum::APP_INTERSTITIAL;
    $request->placement->contentCategoryId = 'nemo';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'quis';
    $request->placement->directorySiteId = 'doloremque';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'similique';
    $request->placement->directorySiteIdDimensionValue->etag = 'eum';
    $request->placement->directorySiteIdDimensionValue->id = '56ed333b-b0ce-48aa-a543-2a986eb7e14c';
    $request->placement->directorySiteIdDimensionValue->kind = 'mollitia';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->directorySiteIdDimensionValue->value = 'autem';
    $request->placement->externalId = 'non';
    $request->placement->id = 'doloremque';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'atque';
    $request->placement->idDimensionValue->etag = 'natus';
    $request->placement->idDimensionValue->id = '15009701-9a48-4f88-ace7-bf904e01105d';
    $request->placement->idDimensionValue->kind = 'sequi';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->idDimensionValue->value = 'excepturi';
    $request->placement->keyName = 'alias';
    $request->placement->kind = 'deleniti';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'quasi';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 389791;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 133790;
    $request->placement->name = 'Shane Renner';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'blanditiis';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'culpa';
    $request->placement->placementGroupIdDimensionValue->etag = 'doloremque';
    $request->placement->placementGroupIdDimensionValue->id = 'f657b7d0-3a14-480f-8de3-0f069d810618';
    $request->placement->placementGroupIdDimensionValue->kind = 'temporibus';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->placementGroupIdDimensionValue->value = 'voluptate';
    $request->placement->placementStrategyId = 'debitis';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_NONE;
    $request->placement->pricingSchedule->disregardOverdelivery = false;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-05');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'aspernatur';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-11-29');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-02-27');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'culpa';
    $request->placement->siteId = 'voluptatum';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'voluptatem';
    $request->placement->siteIdDimensionValue->etag = 'amet';
    $request->placement->siteIdDimensionValue->id = '12292cc6-1c2a-4702-bb97-ee102da2de35';
    $request->placement->siteIdDimensionValue->kind = 'tenetur';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'officiis';
    $request->placement->size = new Size();
    $request->placement->size->height = 23694;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'quasi';
    $request->placement->size->kind = 'libero';
    $request->placement->size->width = 945218;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PAYMENT_ACCEPTED;
    $request->placement->subaccountId = 'adipisci';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_JAVASCRIPT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'veniam';
    $request->placement->tagSetting->includeClickThroughUrls = false;
    $request->placement->tagSetting->includeClickTracking = false;
    $request->placement->tagSetting->keywordOption = TagSettingKeywordOptionEnum::PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
    $request->placement->videoActiveViewOptOut = false;
    $request->placement->videoSettings = new VideoSettings();
    $request->placement->videoSettings->companionSettings = new CompanionSetting();
    $request->placement->videoSettings->companionSettings->companionsDisabled = false;
    $request->placement->videoSettings->companionSettings->enabledSizes = [
        new Size(),
    ];
    $request->placement->videoSettings->companionSettings->imageOnly = false;
    $request->placement->videoSettings->companionSettings->kind = 'dolores';
    $request->placement->videoSettings->kind = 'dolorum';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::PORTRAIT;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'sunt';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 438477;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 30886;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 276945;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 747014;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        110823,
        802241,
        811167,
        586303,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'asperiores';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::BOTH;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'laborum';
    $request->key = 'itaque';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->profileId = 'voluptates';
    $request->quotaUser = 'harum';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DfareportingPlacementsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placements->dfareportingPlacementsUpdate($request, $requestSecurity);

    if ($response->placement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
