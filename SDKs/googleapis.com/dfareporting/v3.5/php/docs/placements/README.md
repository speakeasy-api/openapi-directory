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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->campaignId = 'impedit';
    $request->fields = 'deleniti';
    $request->key = 'esse';
    $request->oauthToken = 'voluptatum';
    $request->placementIds = [
        'eius',
    ];
    $request->prettyPrint = false;
    $request->profileId = 'accusantium';
    $request->quotaUser = 'nobis';
    $request->tagFormats = [
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT,
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT,
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_TRACKING,
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT,
    ];
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'blanditiis';

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
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'harum';
    $request->id = 'f0bc8e1f-206d-45d8-b1d0-081090f67066';
    $request->key = 'ducimus';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->profileId = 'doloribus';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'ex';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingData;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataTagWrappingModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
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
    $request->placement->accountId = 'dicta';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'exercitationem';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'molestiae';
    $request->placement->advertiserIdDimensionValue->etag = 'iure';
    $request->placement->advertiserIdDimensionValue->id = '8dce7424-09a2-415e-8860-1489a5f63e3a';
    $request->placement->advertiserIdDimensionValue->kind = 'tenetur';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->advertiserIdDimensionValue->value = 'pariatur';
    $request->placement->archived = false;
    $request->placement->campaignId = 'vero';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'natus';
    $request->placement->campaignIdDimensionValue->etag = 'quibusdam';
    $request->placement->campaignIdDimensionValue->id = 'da33dcd6-3483-4e4a-ba98-e4df37e45b89';
    $request->placement->campaignIdDimensionValue->kind = 'veniam';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->campaignIdDimensionValue->value = 'facere';
    $request->placement->comment = 'aliquam';
    $request->placement->compatibility = PlacementCompatibilityEnum::DISPLAY;
    $request->placement->contentCategoryId = 'ipsum';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'recusandae';
    $request->placement->directorySiteId = 'inventore';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'ipsum';
    $request->placement->directorySiteIdDimensionValue->etag = 'error';
    $request->placement->directorySiteIdDimensionValue->id = '48231090-7bd3-454c-892b-d734f02449d8';
    $request->placement->directorySiteIdDimensionValue->kind = 'vel';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->directorySiteIdDimensionValue->value = 'modi';
    $request->placement->externalId = 'expedita';
    $request->placement->id = 'quidem';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'consequuntur';
    $request->placement->idDimensionValue->etag = 'eaque';
    $request->placement->idDimensionValue->id = 'fe5d911c-bfe7-449c-af45-a27f69e2c9e6';
    $request->placement->idDimensionValue->kind = 'temporibus';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->idDimensionValue->value = 'doloremque';
    $request->placement->keyName = 'debitis';
    $request->placement->kind = 'omnis';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'temporibus';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 697637;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 206011;
    $request->placement->name = 'Gustavo Goldner';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::NONE;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::MONITORING_ONLY;
    $request->placement->partnerWrappingData->wrappedTag = 'quasi';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'molestias';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'facere';
    $request->placement->placementGroupIdDimensionValue->etag = 'occaecati';
    $request->placement->placementGroupIdDimensionValue->id = 'c3374730-82b9-44f2-ab1f-d5671e9c3263';
    $request->placement->placementGroupIdDimensionValue->kind = 'enim';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->placementGroupIdDimensionValue->value = 'officia';
    $request->placement->placementStrategyId = 'tempora';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-11-24');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'aliquam';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-08');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2020-03-17');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'consequatur';
    $request->placement->siteId = 'recusandae';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'iste';
    $request->placement->siteIdDimensionValue->etag = 'error';
    $request->placement->siteIdDimensionValue->id = '1594d93a-74c0-4252-be3b-4b4db8b778eb';
    $request->placement->siteIdDimensionValue->kind = 'nam';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->siteIdDimensionValue->value = 'officiis';
    $request->placement->size = new Size();
    $request->placement->size->height = 95168;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'fugiat';
    $request->placement->size->kind = 'aspernatur';
    $request->placement->size->width = 772593;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::DRAFT;
    $request->placement->subaccountId = 'ad';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_IFRAME_ILAYER,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'expedita';
    $request->placement->tagSetting->includeClickThroughUrls = false;
    $request->placement->tagSetting->includeClickTracking = false;
    $request->placement->tagSetting->keywordOption = TagSettingKeywordOptionEnum::GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
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
    $request->placement->videoSettings->companionSettings->kind = 'rerum';
    $request->placement->videoSettings->durationSeconds = 129259;
    $request->placement->videoSettings->kind = 'eligendi';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'nam';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'placeat';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'aliquam';
    $request->placement->videoSettings->obaSettings->program = 'aliquid';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'adipisci';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 373203;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'fugiat';
    $request->placement->videoSettings->obaSettings->size->kind = 'enim';
    $request->placement->videoSettings->obaSettings->size->width = 909354;
    $request->placement->videoSettings->obaSettings->xPosition = 'eum';
    $request->placement->videoSettings->obaSettings->yPosition = 'exercitationem';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::PORTRAIT;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'culpa';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 1914;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 175937;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 550066;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 789760;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        881240,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'sint';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::FLASH;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'vero';
    $request->key = 'ratione';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->profileId = 'doloribus';
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'sint';

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
    $request->accessToken = 'commodi';
    $request->advertiserIds = [
        'rem',
        'occaecati',
    ];
    $request->alt = AltEnum::PROTO;
    $request->archived = false;
    $request->callback = 'voluptate';
    $request->campaignIds = [
        'quam',
        'blanditiis',
        'laboriosam',
    ];
    $request->compatibilities = [
        DfareportingPlacementsListCompatibilitiesEnum::DISPLAY_INTERSTITIAL,
        DfareportingPlacementsListCompatibilitiesEnum::IN_STREAM_AUDIO,
    ];
    $request->contentCategoryIds = [
        'consectetur',
    ];
    $request->directorySiteIds = [
        'quasi',
        'eos',
        'dolorum',
    ];
    $request->fields = 'vel';
    $request->groupIds = [
        'cupiditate',
        'excepturi',
        'fugit',
    ];
    $request->ids = [
        'perspiciatis',
        'dolore',
    ];
    $request->key = 'corporis';
    $request->maxEndDate = 'natus';
    $request->maxResults = 255602;
    $request->maxStartDate = 'tempora';
    $request->minEndDate = 'corrupti';
    $request->minStartDate = 'ducimus';
    $request->oauthToken = 'asperiores';
    $request->pageToken = 'veniam';
    $request->paymentSource = DfareportingPlacementsListPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placementStrategyIds = [
        'ut',
        'amet',
        'blanditiis',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementsListPricingTypesEnum::PRICING_TYPE_CPA,
    ];
    $request->profileId = 'tempore';
    $request->quotaUser = 'rem';
    $request->searchString = 'laboriosam';
    $request->siteIds = [
        'consectetur',
        'quisquam',
        'nulla',
    ];
    $request->sizeIds = [
        'ex',
        'dolore',
        'dicta',
        'minima',
    ];
    $request->sortField = DfareportingPlacementsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingPlacementsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'magnam';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingData;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataTagWrappingModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placement = new Placement();
    $request->placement->accountId = 'hic';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'repellendus';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'delectus';
    $request->placement->advertiserIdDimensionValue->etag = 'dicta';
    $request->placement->advertiserIdDimensionValue->id = '3f4eedbe-78bf-4606-8258-94ea763d5c72';
    $request->placement->advertiserIdDimensionValue->kind = 'voluptate';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->advertiserIdDimensionValue->value = 'quis';
    $request->placement->archived = false;
    $request->placement->campaignId = 'expedita';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'quam';
    $request->placement->campaignIdDimensionValue->etag = 'laudantium';
    $request->placement->campaignIdDimensionValue->id = '5148d6d5-49e5-4635-b33b-c0f970c42fc9';
    $request->placement->campaignIdDimensionValue->kind = 'delectus';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->campaignIdDimensionValue->value = 'totam';
    $request->placement->comment = 'labore';
    $request->placement->compatibility = PlacementCompatibilityEnum::DISPLAY_INTERSTITIAL;
    $request->placement->contentCategoryId = 'sunt';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'consequuntur';
    $request->placement->directorySiteId = 'veniam';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'voluptates';
    $request->placement->directorySiteIdDimensionValue->etag = 'in';
    $request->placement->directorySiteIdDimensionValue->id = '5b796065-c0ef-4a6f-93b9-0a1b8c95be12';
    $request->placement->directorySiteIdDimensionValue->kind = 'corporis';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->directorySiteIdDimensionValue->value = 'soluta';
    $request->placement->externalId = 'nihil';
    $request->placement->id = 'adipisci';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'provident';
    $request->placement->idDimensionValue->etag = 'reiciendis';
    $request->placement->idDimensionValue->id = '4fe77210-d1f6-4558-899c-722d2bc0f940';
    $request->placement->idDimensionValue->kind = 'voluptatum';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->idDimensionValue->value = 'possimus';
    $request->placement->keyName = 'unde';
    $request->placement->kind = 'maxime';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'culpa';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 642858;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 926879;
    $request->placement->name = 'Valerie Crona';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_LINK_FAILURE;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::VPAID_ONLY_MONITORING;
    $request->placement->partnerWrappingData->wrappedTag = 'est';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placement->placementGroupId = 'occaecati';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'nam';
    $request->placement->placementGroupIdDimensionValue->etag = 'modi';
    $request->placement->placementGroupIdDimensionValue->id = 'caa1cfe9-e15d-4f90-b907-f37831983d42';
    $request->placement->placementGroupIdDimensionValue->kind = 'recusandae';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->placementGroupIdDimensionValue->value = 'aliquam';
    $request->placement->placementStrategyId = 'similique';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-16');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'commodi';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-13');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2021-11-18');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'consequatur';
    $request->placement->siteId = 'fugit';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'dolorem';
    $request->placement->siteIdDimensionValue->etag = 'nesciunt';
    $request->placement->siteIdDimensionValue->id = 'c1471d51-aaa6-4ddf-9abd-6487c5fc2b86';
    $request->placement->siteIdDimensionValue->kind = 'aspernatur';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'voluptatem';
    $request->placement->size = new Size();
    $request->placement->size->height = 13057;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'nobis';
    $request->placement->size->kind = 'saepe';
    $request->placement->size->width = 983272;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PAYMENT_REJECTED;
    $request->placement->subaccountId = 'perspiciatis';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_IFRAME_JAVASCRIPT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_STANDARD,
        PlacementTagFormatsEnum::PLACEMENT_TAG_IFRAME_JAVASCRIPT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_IFRAME_JAVASCRIPT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'enim';
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
    $request->placement->videoSettings->companionSettings->kind = 'dolor';
    $request->placement->videoSettings->durationSeconds = 3866;
    $request->placement->videoSettings->kind = 'libero';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'quibusdam';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'fuga';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'nihil';
    $request->placement->videoSettings->obaSettings->program = 'similique';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'repellat';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 840994;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'accusamus';
    $request->placement->videoSettings->obaSettings->size->kind = 'illum';
    $request->placement->videoSettings->obaSettings->size->width = 500776;
    $request->placement->videoSettings->obaSettings->xPosition = 'tempora';
    $request->placement->videoSettings->obaSettings->yPosition = 'similique';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::ANY;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'enim';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 677473;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 303356;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 109308;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 130205;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        545400,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'officiis';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::DEFAULT;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sequi';
    $request->fields = 'ad';
    $request->id = 'ac26ae33-bef9-471a-8f46-bca1106fe965';
    $request->key = 'soluta';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->profileId = 'vitae';
    $request->quotaUser = 'beatae';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'voluptatem';

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
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingData;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataMeasurementPartnerEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementPartnerWrappingDataTagWrappingModeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placement = new Placement();
    $request->placement->accountId = 'eligendi';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'deleniti';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'deleniti';
    $request->placement->advertiserIdDimensionValue->etag = 'necessitatibus';
    $request->placement->advertiserIdDimensionValue->id = 'c9f7b99a-550a-4656-ad33-3bb0ce8aa654';
    $request->placement->advertiserIdDimensionValue->kind = 'consectetur';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->advertiserIdDimensionValue->value = 'officia';
    $request->placement->archived = false;
    $request->placement->campaignId = 'cupiditate';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'rem';
    $request->placement->campaignIdDimensionValue->etag = 'ea';
    $request->placement->campaignIdDimensionValue->id = 'eb7e14ca-5640-4891-9009-7019a48f88ec';
    $request->placement->campaignIdDimensionValue->kind = 'accusamus';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->campaignIdDimensionValue->value = 'expedita';
    $request->placement->comment = 'hic';
    $request->placement->compatibility = PlacementCompatibilityEnum::APP_INTERSTITIAL;
    $request->placement->contentCategoryId = 'perferendis';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'non';
    $request->placement->directorySiteId = 'saepe';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'consequatur';
    $request->placement->directorySiteIdDimensionValue->etag = 'architecto';
    $request->placement->directorySiteIdDimensionValue->id = '105d3890-8162-4c6b-ab68-a0f657b7d03a';
    $request->placement->directorySiteIdDimensionValue->kind = 'beatae';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->directorySiteIdDimensionValue->value = 'praesentium';
    $request->placement->externalId = 'aperiam';
    $request->placement->id = 'hic';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'blanditiis';
    $request->placement->idDimensionValue->etag = 'at';
    $request->placement->idDimensionValue->id = 'e30f069d-8106-418d-97e1-52297510da80';
    $request->placement->idDimensionValue->kind = 'amet';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->idDimensionValue->value = 'explicabo';
    $request->placement->keyName = 'quia';
    $request->placement->kind = 'provident';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'fugit';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 751675;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 761563;
    $request->placement->name = 'Frances Sauer';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_LINK_FAILURE;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::NONE;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::BLOCKING;
    $request->placement->partnerWrappingData->wrappedTag = 'distinctio';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placement->placementGroupId = 'sint';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'odio';
    $request->placement->placementGroupIdDimensionValue->etag = 'repudiandae';
    $request->placement->placementGroupIdDimensionValue->id = 'e102da2d-e35f-48e0-9bf3-3eaab45402ac';
    $request->placement->placementGroupIdDimensionValue->kind = 'sunt';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->placementGroupIdDimensionValue->value = 'voluptatem';
    $request->placement->placementStrategyId = 'incidunt';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-01');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'maxime';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2020-08-05');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-11-18');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'deserunt';
    $request->placement->siteId = 'laborum';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'itaque';
    $request->placement->siteIdDimensionValue->etag = 'ad';
    $request->placement->siteIdDimensionValue->id = 'eb5f0c49-2b57-444d-88a2-267aaee79e3c';
    $request->placement->siteIdDimensionValue->kind = 'molestiae';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->siteIdDimensionValue->value = 'est';
    $request->placement->size = new Size();
    $request->placement->size->height = 812857;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'sequi';
    $request->placement->size->kind = 'et';
    $request->placement->size->width = 732172;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::DRAFT;
    $request->placement->subaccountId = 'cumque';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING,
        PlacementTagFormatsEnum::PLACEMENT_TAG_JAVASCRIPT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'magni';
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
    ];
    $request->placement->videoSettings->companionSettings->imageOnly = false;
    $request->placement->videoSettings->companionSettings->kind = 'deleniti';
    $request->placement->videoSettings->durationSeconds = 649690;
    $request->placement->videoSettings->kind = 'debitis';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'neque';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'facilis';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'sapiente';
    $request->placement->videoSettings->obaSettings->program = 'maxime';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'sed';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 222093;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'nulla';
    $request->placement->videoSettings->obaSettings->size->kind = 'sint';
    $request->placement->videoSettings->obaSettings->size->width = 261500;
    $request->placement->videoSettings->obaSettings->xPosition = 'ad';
    $request->placement->videoSettings->obaSettings->yPosition = 'aperiam';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::LANDSCAPE;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'unde';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 522610;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 435411;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 625489;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 304459;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        320259,
        736436,
        678630,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'quod';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::FLASH;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tenetur';
    $request->fields = 'eaque';
    $request->key = 'ex';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->profileId = 'magni';
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'minus';

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
