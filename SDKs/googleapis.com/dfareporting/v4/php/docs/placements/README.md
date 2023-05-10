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
    $request->accessToken = 'a';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->campaignId = 'numquam';
    $request->fields = 'numquam';
    $request->key = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->placementIds = [
        'vel',
        'delectus',
        'modi',
    ];
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'quidem';
    $request->tagFormats = [
        DfareportingPlacementsGeneratetagsTagFormatsEnum::PLACEMENT_TAG_IFRAME_JAVASCRIPT,
    ];
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'debitis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'sunt';
    $request->id = 'cbfe749c-af45-4a27-b69e-2c9e6d10e9db';
    $request->key = 'neque';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->profileId = 'repellendus';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'vel';

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
use \OpenAPI\OpenAPI\Models\Shared\PlacementActiveStatusEnum;
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
    $request->placement->accountId = 'doloremque';
    $request->placement->activeStatus = PlacementActiveStatusEnum::PLACEMENT_STATUS_ACTIVE;
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
    ];
    $request->placement->advertiserId = 'accusantium';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'molestias';
    $request->placement->advertiserIdDimensionValue->etag = 'facere';
    $request->placement->advertiserIdDimensionValue->id = '9c337473-082b-494f-aab1-fd5671e9c326';
    $request->placement->advertiserIdDimensionValue->kind = 'neque';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->advertiserIdDimensionValue->value = 'eaque';
    $request->placement->campaignId = 'officia';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'tempora';
    $request->placement->campaignIdDimensionValue->etag = 'eum';
    $request->placement->campaignIdDimensionValue->id = '7143789c-e0e9-4915-94d9-3a74c0252fe3';
    $request->placement->campaignIdDimensionValue->kind = 'quidem';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->campaignIdDimensionValue->value = 'cum';
    $request->placement->comment = 'dolore';
    $request->placement->compatibility = PlacementCompatibilityEnum::IN_STREAM_AUDIO;
    $request->placement->contentCategoryId = 'rerum';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'atque';
    $request->placement->directorySiteId = 'tempore';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'odio';
    $request->placement->directorySiteIdDimensionValue->etag = 'reprehenderit';
    $request->placement->directorySiteIdDimensionValue->id = '8ebb6e1d-2cf5-402b-afb2-cbc4635d5e65';
    $request->placement->directorySiteIdDimensionValue->kind = 'at';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->directorySiteIdDimensionValue->value = 'alias';
    $request->placement->externalId = 'eos';
    $request->placement->id = 'quos';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'quisquam';
    $request->placement->idDimensionValue->etag = 'dolor';
    $request->placement->idDimensionValue->id = 'e951a1e3-0fda-4966-889d-7b78673e13a1';
    $request->placement->idDimensionValue->kind = 'eos';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->idDimensionValue->value = 'vel';
    $request->placement->keyName = 'rerum';
    $request->placement->kind = 'cupiditate';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'excepturi';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 146856;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 262536;
    $request->placement->name = 'Theodore Hettinger';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_LINK_PENDING;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::VPAID_MONITORING;
    $request->placement->partnerWrappingData->wrappedTag = 'asperiores';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'cumque';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'praesentium';
    $request->placement->placementGroupIdDimensionValue->etag = 'ut';
    $request->placement->placementGroupIdDimensionValue->id = '3836b86b-3cdf-4641-9b04-49f9df13f4ee';
    $request->placement->placementGroupIdDimensionValue->kind = 'nulla';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->placementGroupIdDimensionValue->value = 'recusandae';
    $request->placement->placementStrategyId = 'in';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2021-01-22');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'commodi';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-08');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-06-24');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'molestias';
    $request->placement->siteId = 'eius';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'necessitatibus';
    $request->placement->siteIdDimensionValue->etag = 'culpa';
    $request->placement->siteIdDimensionValue->id = '763d5c72-795b-4785-948d-6d549e5635b3';
    $request->placement->siteIdDimensionValue->kind = 'dolorem';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'maxime';
    $request->placement->size = new Size();
    $request->placement->size->height = 29144;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'maiores';
    $request->placement->size->kind = 'unde';
    $request->placement->size->width = 441239;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PENDING_REVIEW;
    $request->placement->subaccountId = 'placeat';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_INTERNAL_REDIRECT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'quod';
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
        new Size(),
        new Size(),
    ];
    $request->placement->videoSettings->companionSettings->imageOnly = false;
    $request->placement->videoSettings->companionSettings->kind = 'dolore';
    $request->placement->videoSettings->durationSeconds = 517023;
    $request->placement->videoSettings->kind = 'labore';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'numquam';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'sunt';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'consequuntur';
    $request->placement->videoSettings->obaSettings->program = 'veniam';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'voluptates';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 450324;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'minima';
    $request->placement->videoSettings->obaSettings->size->kind = 'expedita';
    $request->placement->videoSettings->obaSettings->size->width = 497004;
    $request->placement->videoSettings->obaSettings->xPosition = 'excepturi';
    $request->placement->videoSettings->obaSettings->yPosition = 'eum';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::ANY;
    $request->placement->videoSettings->publisherSpecificationId = 'iure';
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'nostrum';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 765259;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 50998;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 935159;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 938762;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        425484,
        957139,
        598824,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'ratione';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::HTML5;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fuga';
    $request->fields = 'beatae';
    $request->key = 'distinctio';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'eligendi';
    $request->quotaUser = 'unde';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'nam';

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
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementsListActiveStatusEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vitae';
    $request->activeStatus = [
        DfareportingPlacementsListActiveStatusEnum::PLACEMENT_STATUS_ACTIVE,
    ];
    $request->advertiserIds = [
        'soluta',
        'nihil',
    ];
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->campaignIds = [
        'dolore',
        'voluptatibus',
        'eveniet',
        'odio',
    ];
    $request->compatibilities = [
        DfareportingPlacementsListCompatibilitiesEnum::DISPLAY,
        DfareportingPlacementsListCompatibilitiesEnum::DISPLAY,
    ];
    $request->contentCategoryIds = [
        'possimus',
    ];
    $request->directorySiteIds = [
        'delectus',
    ];
    $request->fields = 'voluptas';
    $request->groupIds = [
        'quis',
        'quos',
    ];
    $request->ids = [
        'cupiditate',
        'excepturi',
        'quod',
        'iure',
    ];
    $request->key = 'sed';
    $request->maxEndDate = 'odit';
    $request->maxResults = 841254;
    $request->maxStartDate = 'fugit';
    $request->minEndDate = 'nam';
    $request->minStartDate = 'optio';
    $request->oauthToken = 'accusantium';
    $request->pageToken = 'earum';
    $request->paymentSource = DfareportingPlacementsListPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placementStrategyIds = [
        'voluptatem',
        'voluptatum',
    ];
    $request->prettyPrint = false;
    $request->pricingTypes = [
        DfareportingPlacementsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_CLICKS,
        DfareportingPlacementsListPricingTypesEnum::PRICING_TYPE_FLAT_RATE_IMPRESSIONS,
    ];
    $request->profileId = 'maxime';
    $request->quotaUser = 'culpa';
    $request->searchString = 'deserunt';
    $request->siteIds = [
        'doloremque',
        'magnam',
        'quia',
        'quibusdam',
    ];
    $request->sizeIds = [
        'voluptate',
        'placeat',
        'est',
        'est',
    ];
    $request->sortField = DfareportingPlacementsListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingPlacementsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'modi';

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
use \OpenAPI\OpenAPI\Models\Shared\PlacementActiveStatusEnum;
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
    $request->placement->accountId = 'id';
    $request->placement->activeStatus = PlacementActiveStatusEnum::PLACEMENT_STATUS_ARCHIVED;
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
    ];
    $request->placement->advertiserId = 'quod';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'a';
    $request->placement->advertiserIdDimensionValue->etag = 'eveniet';
    $request->placement->advertiserIdDimensionValue->id = '9e15df90-3907-4f37-8319-83d42e54a854';
    $request->placement->advertiserIdDimensionValue->kind = 'commodi';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->advertiserIdDimensionValue->value = 'quis';
    $request->placement->campaignId = 'provident';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'iusto';
    $request->placement->campaignIdDimensionValue->etag = 'optio';
    $request->placement->campaignIdDimensionValue->id = '50233c14-71d5-41aa-a6dd-f5abd6487c5f';
    $request->placement->campaignIdDimensionValue->kind = 'impedit';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->campaignIdDimensionValue->value = 'nobis';
    $request->placement->comment = 'voluptatum';
    $request->placement->compatibility = PlacementCompatibilityEnum::APP;
    $request->placement->contentCategoryId = 'aspernatur';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'est';
    $request->placement->directorySiteId = 'voluptatem';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'aut';
    $request->placement->directorySiteIdDimensionValue->etag = 'nobis';
    $request->placement->directorySiteIdDimensionValue->id = 'ef69e100-1576-430b-9a7a-fded84a35a41';
    $request->placement->directorySiteIdDimensionValue->kind = 'explicabo';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->directorySiteIdDimensionValue->value = 'corrupti';
    $request->placement->externalId = 'officiis';
    $request->placement->id = 'inventore';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'officia';
    $request->placement->idDimensionValue->etag = 'in';
    $request->placement->idDimensionValue->id = '35ac26ae-33be-4f97-9a8f-46bca1106fe9';
    $request->placement->idDimensionValue->kind = 'ea';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->idDimensionValue->value = 'soluta';
    $request->placement->keyName = 'esse';
    $request->placement->kind = 'vitae';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'beatae';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 866917;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 28449;
    $request->placement->name = 'Guillermo White';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_MODE_CHANGE_PENDING;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::DOUBLE_VERIFY;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::NON_VPAID_MONITORING;
    $request->placement->partnerWrappingData->wrappedTag = 'reiciendis';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'libero';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'perspiciatis';
    $request->placement->placementGroupIdDimensionValue->etag = 'occaecati';
    $request->placement->placementGroupIdDimensionValue->id = 'a550a656-ed33-43bb-8ce8-aa65432a986e';
    $request->placement->placementGroupIdDimensionValue->kind = 'soluta';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->placementGroupIdDimensionValue->value = 'eveniet';
    $request->placement->placementStrategyId = 'beatae';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_NONE;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2021-01-19');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'ipsam';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPC;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-17');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-10-16');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'nemo';
    $request->placement->siteId = 'eaque';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'aut';
    $request->placement->siteIdDimensionValue->etag = 'natus';
    $request->placement->siteIdDimensionValue->id = '7019a48f-88ec-4e7b-b904-e01105d38908';
    $request->placement->siteIdDimensionValue->kind = 'quasi';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->siteIdDimensionValue->value = 'aspernatur';
    $request->placement->size = new Size();
    $request->placement->size->height = 800545;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'suscipit';
    $request->placement->size->kind = 'tempore';
    $request->placement->size->width = 927171;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::ACKNOWLEDGE_ACCEPTANCE;
    $request->placement->subaccountId = 'nisi';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_JAVASCRIPT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_STANDARD,
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'vel';
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
    $request->placement->videoSettings->companionSettings->kind = 'quidem';
    $request->placement->videoSettings->durationSeconds = 447848;
    $request->placement->videoSettings->kind = 'at';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'alias';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'consectetur';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'mollitia';
    $request->placement->videoSettings->obaSettings->program = 'beatae';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'numquam';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 508520;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'aperiam';
    $request->placement->videoSettings->obaSettings->size->kind = 'hic';
    $request->placement->videoSettings->obaSettings->size->width = 503469;
    $request->placement->videoSettings->obaSettings->xPosition = 'at';
    $request->placement->videoSettings->obaSettings->yPosition = 'repudiandae';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::ANY;
    $request->placement->videoSettings->publisherSpecificationId = 'voluptatem';
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'tenetur';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 13741;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 401150;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 587748;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 855063;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        106800,
        15706,
        412568,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'architecto';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::HTML5;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'debitis';
    $request->id = '15229751-0da8-4031-a292-cc61c2a702bb';
    $request->key = 'sint';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->profileId = 'repudiandae';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'accusantium';

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
use \OpenAPI\OpenAPI\Models\Shared\PlacementActiveStatusEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placement = new Placement();
    $request->placement->accountId = 'fugiat';
    $request->placement->activeStatus = PlacementActiveStatusEnum::PLACEMENT_STATUS_ARCHIVED;
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
    ];
    $request->placement->advertiserId = 'fugiat';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'recusandae';
    $request->placement->advertiserIdDimensionValue->etag = 'neque';
    $request->placement->advertiserIdDimensionValue->id = '5f8e01bf-33ea-4ab4-9402-ac1704bf1cc9';
    $request->placement->advertiserIdDimensionValue->kind = 'asperiores';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->advertiserIdDimensionValue->value = 'ex';
    $request->placement->campaignId = 'dicta';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'deserunt';
    $request->placement->campaignIdDimensionValue->etag = 'laborum';
    $request->placement->campaignIdDimensionValue->id = 'e5eb5f0c-492b-4574-8d08-a2267aaee79e';
    $request->placement->campaignIdDimensionValue->kind = 'ipsum';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->campaignIdDimensionValue->value = 'molestiae';
    $request->placement->comment = 'illo';
    $request->placement->compatibility = PlacementCompatibilityEnum::IN_STREAM_VIDEO;
    $request->placement->contentCategoryId = 'placeat';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'sequi';
    $request->placement->directorySiteId = 'et';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'tempore';
    $request->placement->directorySiteIdDimensionValue->etag = 'voluptates';
    $request->placement->directorySiteIdDimensionValue->id = 'cb83d237-8ae3-4bfc-a3d9-450a986a495b';
    $request->placement->directorySiteIdDimensionValue->kind = 'dolorum';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->directorySiteIdDimensionValue->value = 'nihil';
    $request->placement->externalId = 'quae';
    $request->placement->id = 'ducimus';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'tenetur';
    $request->placement->idDimensionValue->etag = 'eaque';
    $request->placement->idDimensionValue->id = '6b28ecc8-6492-4386-b62c-969c4cc6b788';
    $request->placement->idDimensionValue->kind = 'error';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->idDimensionValue->value = 'deserunt';
    $request->placement->keyName = 'sequi';
    $request->placement->kind = 'sapiente';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'illum';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 202693;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 760941;
    $request->placement->name = 'Jerry Spinka Jr.';
    $request->placement->partnerWrappingData = new MeasurementPartnerWrappingData();
    $request->placement->partnerWrappingData->linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum::MEASUREMENT_PARTNER_MODE_CHANGE_PENDING;
    $request->placement->partnerWrappingData->measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum::INTEGRAL_AD_SCIENCE;
    $request->placement->partnerWrappingData->tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum::VPAID_ONLY_BLOCKING;
    $request->placement->partnerWrappingData->wrappedTag = 'consequuntur';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'fugiat';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'voluptatibus';
    $request->placement->placementGroupIdDimensionValue->etag = 'iste';
    $request->placement->placementGroupIdDimensionValue->id = '31da3edb-51fa-4d94-acc9-435137726d15';
    $request->placement->placementGroupIdDimensionValue->kind = 'velit';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->placementGroupIdDimensionValue->value = 'dicta';
    $request->placement->placementStrategyId = 'nam';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_MONTHLY;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-24');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'fuga';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-31');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-10-17');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'totam';
    $request->placement->siteId = 'alias';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'hic';
    $request->placement->siteIdDimensionValue->etag = 'tenetur';
    $request->placement->siteIdDimensionValue->id = '60eb9a66-58e6-49a4-b843-d382dbec75c6';
    $request->placement->siteIdDimensionValue->kind = 'corrupti';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->siteIdDimensionValue->value = 'autem';
    $request->placement->size = new Size();
    $request->placement->size->height = 16303;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'nisi';
    $request->placement->size->kind = 'veniam';
    $request->placement->size->width = 583445;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PAYMENT_ACCEPTED;
    $request->placement->subaccountId = 'suscipit';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_JAVASCRIPT_LEGACY,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY,
        PlacementTagFormatsEnum::PLACEMENT_TAG_JAVASCRIPT,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'doloremque';
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
    $request->placement->videoSettings->companionSettings->kind = 'deleniti';
    $request->placement->videoSettings->durationSeconds = 557128;
    $request->placement->videoSettings->kind = 'magnam';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'cupiditate';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'expedita';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'sapiente';
    $request->placement->videoSettings->obaSettings->program = 'deleniti';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'explicabo';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 86917;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'incidunt';
    $request->placement->videoSettings->obaSettings->size->kind = 'eligendi';
    $request->placement->videoSettings->obaSettings->size->width = 230052;
    $request->placement->videoSettings->obaSettings->xPosition = 'ipsum';
    $request->placement->videoSettings->obaSettings->yPosition = 'nihil';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::PORTRAIT;
    $request->placement->videoSettings->publisherSpecificationId = 'occaecati';
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'iure';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 727863;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 739379;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 53039;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 785549;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        608680,
        924275,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'adipisci';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::FLASH;
    $request->placement->wrappingOptOut = false;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'vitae';
    $request->key = 'non';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->profileId = 'incidunt';
    $request->quotaUser = 'tempore';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'error';

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
