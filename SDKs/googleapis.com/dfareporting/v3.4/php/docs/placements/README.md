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
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_PUBLISHER_PAID;
    $request->placement->placementGroupId = 'doloremque';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'adipisci';
    $request->placement->placementGroupIdDimensionValue->etag = 'quasi';
    $request->placement->placementGroupIdDimensionValue->id = '08d9c337-4730-482b-94f2-ab1fd5671e9c';
    $request->placement->placementGroupIdDimensionValue->kind = 'amet';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->placementGroupIdDimensionValue->value = 'commodi';
    $request->placement->placementStrategyId = 'neque';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_NONE;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-05-11');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'tempora';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-11');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-07-12');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'blanditiis';
    $request->placement->siteId = 'natus';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'quisquam';
    $request->placement->siteIdDimensionValue->etag = 'itaque';
    $request->placement->siteIdDimensionValue->id = '0e991594-d93a-474c-8252-fe3b4b4db8b7';
    $request->placement->siteIdDimensionValue->kind = 'reprehenderit';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'voluptates';
    $request->placement->size = new Size();
    $request->placement->size->height = 717018;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'nam';
    $request->placement->size->kind = 'nisi';
    $request->placement->size->width = 887980;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PENDING_REVIEW;
    $request->placement->subaccountId = 'fugiat';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_JAVASCRIPT_LEGACY,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'voluptatibus';
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
    $request->placement->videoSettings->companionSettings->kind = 'aspernatur';
    $request->placement->videoSettings->kind = 'expedita';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'laborum';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'hic';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'rerum';
    $request->placement->videoSettings->obaSettings->program = 'explicabo';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'eligendi';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 722265;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'placeat';
    $request->placement->videoSettings->obaSettings->size->kind = 'aliquam';
    $request->placement->videoSettings->obaSettings->size->width = 399527;
    $request->placement->videoSettings->obaSettings->xPosition = 'adipisci';
    $request->placement->videoSettings->obaSettings->yPosition = 'ipsam';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::PORTRAIT;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'enim';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 909354;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 433083;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 347050;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 871888;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        1914,
        175937,
        550066,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'quisquam';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::DEFAULT;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'veritatis';
    $request->key = 'mollitia';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->profileId = 'vero';
    $request->quotaUser = 'ratione';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'doloribus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deserunt';
    $request->advertiserIds = [
        'eum',
        'commodi',
        'magnam',
    ];
    $request->alt = AltEnum::MEDIA;
    $request->archived = false;
    $request->callback = 'occaecati';
    $request->campaignIds = [
        'voluptate',
        'nam',
        'quam',
        'blanditiis',
    ];
    $request->compatibilities = [
        DfareportingPlacementsListCompatibilitiesEnum::APP,
        DfareportingPlacementsListCompatibilitiesEnum::DISPLAY_INTERSTITIAL,
    ];
    $request->contentCategoryIds = [
        'veritatis',
        'consectetur',
        'fuga',
        'quasi',
    ];
    $request->directorySiteIds = [
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
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'placeat';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'est';
    $request->placement->placementGroupIdDimensionValue->etag = 'est';
    $request->placement->placementGroupIdDimensionValue->id = 'c9b4caa1-cfe9-4e15-9f90-3907f3783198';
    $request->placement->placementGroupIdDimensionValue->kind = 'sequi';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->placementGroupIdDimensionValue->value = 'eius';
    $request->placement->placementStrategyId = 'odit';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_CUMULATIVE;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-11');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'similique';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2022-08-30');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'provident';
    $request->placement->siteId = 'iusto';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'optio';
    $request->placement->siteIdDimensionValue->etag = 'ipsam';
    $request->placement->siteIdDimensionValue->id = '0233c147-1d51-4aaa-addf-5abd6487c5fc';
    $request->placement->siteIdDimensionValue->kind = 'aspernatur';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->siteIdDimensionValue->value = 'voluptatum';
    $request->placement->size = new Size();
    $request->placement->size->height = 401321;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'aspernatur';
    $request->placement->size->kind = 'est';
    $request->placement->size->width = 30503;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::PENDING_REVIEW;
    $request->placement->subaccountId = 'nobis';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT,
        PlacementTagFormatsEnum::PLACEMENT_TAG_CLICK_COMMANDS,
        PlacementTagFormatsEnum::PLACEMENT_TAG_TRACKING_IFRAME,
        PlacementTagFormatsEnum::PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST4,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'illo';
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
    $request->placement->videoSettings->companionSettings->kind = 'veritatis';
    $request->placement->videoSettings->kind = 'enim';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'ducimus';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'suscipit';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'dolor';
    $request->placement->videoSettings->obaSettings->program = 'alias';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'libero';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 842683;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'fuga';
    $request->placement->videoSettings->obaSettings->size->kind = 'nihil';
    $request->placement->videoSettings->obaSettings->size->width = 630668;
    $request->placement->videoSettings->obaSettings->xPosition = 'repellat';
    $request->placement->videoSettings->obaSettings->yPosition = 'quibusdam';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::PORTRAIT;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'illum';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 500776;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 270736;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 627058;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 220864;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        677473,
        303356,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'beatae';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::DEFAULT;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'inventore';
    $request->id = 'a735ac26-ae33-4bef-971a-8f46bca1106f';
    $request->key = 'officiis';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->profileId = 'ea';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'esse';

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
    $request->placement->accountId = 'beatae';
    $request->placement->adBlockingOptOut = false;
    $request->placement->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->placement->advertiserId = 'voluptatem';
    $request->placement->advertiserIdDimensionValue = new DimensionValue();
    $request->placement->advertiserIdDimensionValue->dimensionName = 'blanditiis';
    $request->placement->advertiserIdDimensionValue->etag = 'eligendi';
    $request->placement->advertiserIdDimensionValue->id = 'f88ec9f7-b99a-4550-a656-ed333bb0ce8a';
    $request->placement->advertiserIdDimensionValue->kind = 'fuga';
    $request->placement->advertiserIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->advertiserIdDimensionValue->value = 'quis';
    $request->placement->archived = false;
    $request->placement->campaignId = 'modi';
    $request->placement->campaignIdDimensionValue = new DimensionValue();
    $request->placement->campaignIdDimensionValue->dimensionName = 'consectetur';
    $request->placement->campaignIdDimensionValue->etag = 'qui';
    $request->placement->campaignIdDimensionValue->id = 'a986eb7e-14ca-4564-8891-50097019a48f';
    $request->placement->campaignIdDimensionValue->kind = 'blanditiis';
    $request->placement->campaignIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->campaignIdDimensionValue->value = 'earum';
    $request->placement->comment = 'impedit';
    $request->placement->compatibility = PlacementCompatibilityEnum::IN_STREAM_AUDIO;
    $request->placement->contentCategoryId = 'reprehenderit';
    $request->placement->createInfo = new LastModifiedInfo();
    $request->placement->createInfo->time = 'expedita';
    $request->placement->directorySiteId = 'hic';
    $request->placement->directorySiteIdDimensionValue = new DimensionValue();
    $request->placement->directorySiteIdDimensionValue->dimensionName = 'occaecati';
    $request->placement->directorySiteIdDimensionValue->etag = 'perferendis';
    $request->placement->directorySiteIdDimensionValue->id = '4e01105d-3890-4816-ac6b-eb68a0f657b7';
    $request->placement->directorySiteIdDimensionValue->kind = 'at';
    $request->placement->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->placement->directorySiteIdDimensionValue->value = 'consectetur';
    $request->placement->externalId = 'mollitia';
    $request->placement->id = 'beatae';
    $request->placement->idDimensionValue = new DimensionValue();
    $request->placement->idDimensionValue->dimensionName = 'numquam';
    $request->placement->idDimensionValue->etag = 'praesentium';
    $request->placement->idDimensionValue->id = '0f8de30f-069d-4810-a18d-97e152297510';
    $request->placement->idDimensionValue->kind = 'quibusdam';
    $request->placement->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->placement->idDimensionValue->value = 'voluptatum';
    $request->placement->keyName = 'voluptatem';
    $request->placement->kind = 'amet';
    $request->placement->lastModifiedInfo = new LastModifiedInfo();
    $request->placement->lastModifiedInfo->time = 'vitae';
    $request->placement->lookbackConfiguration = new LookbackConfiguration();
    $request->placement->lookbackConfiguration->clickDuration = 130672;
    $request->placement->lookbackConfiguration->postImpressionActivitiesDuration = 158768;
    $request->placement->name = 'Wayne Rolfson';
    $request->placement->paymentApproved = false;
    $request->placement->paymentSource = PlacementPaymentSourceEnum::PLACEMENT_AGENCY_PAID;
    $request->placement->placementGroupId = 'porro';
    $request->placement->placementGroupIdDimensionValue = new DimensionValue();
    $request->placement->placementGroupIdDimensionValue->dimensionName = 'sed';
    $request->placement->placementGroupIdDimensionValue->etag = 'laborum';
    $request->placement->placementGroupIdDimensionValue->id = '702bb97e-e102-4da2-9e35-f8e01bf33eaa';
    $request->placement->placementGroupIdDimensionValue->kind = 'quidem';
    $request->placement->placementGroupIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->placement->placementGroupIdDimensionValue->value = 'veniam';
    $request->placement->placementStrategyId = 'eius';
    $request->placement->pricingSchedule = new PricingSchedule();
    $request->placement->pricingSchedule->capCostOption = PricingScheduleCapCostOptionEnum::CAP_COST_NONE;
    $request->placement->pricingSchedule->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-28');
    $request->placement->pricingSchedule->flighted = false;
    $request->placement->pricingSchedule->floodlightActivityId = 'quod';
    $request->placement->pricingSchedule->pricingPeriods = [
        new PricingSchedulePricingPeriod(),
    ];
    $request->placement->pricingSchedule->pricingType = PricingSchedulePricingTypeEnum::PRICING_TYPE_CPA;
    $request->placement->pricingSchedule->startDate = DateTime::createFromFormat('Y-m-d', '2022-09-21');
    $request->placement->pricingSchedule->testingStartDate = DateTime::createFromFormat('Y-m-d', '2021-02-04');
    $request->placement->primary = false;
    $request->placement->publisherUpdateInfo = new LastModifiedInfo();
    $request->placement->publisherUpdateInfo->time = 'vitae';
    $request->placement->siteId = 'maxime';
    $request->placement->siteIdDimensionValue = new DimensionValue();
    $request->placement->siteIdDimensionValue->dimensionName = 'placeat';
    $request->placement->siteIdDimensionValue->etag = 'cupiditate';
    $request->placement->siteIdDimensionValue->id = 'fc61aae5-eb5f-40c4-92b5-744d08a2267a';
    $request->placement->siteIdDimensionValue->kind = 'est';
    $request->placement->siteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->placement->siteIdDimensionValue->value = 'debitis';
    $request->placement->size = new Size();
    $request->placement->size->height = 461186;
    $request->placement->size->iab = false;
    $request->placement->size->id = 'omnis';
    $request->placement->size->kind = 'repudiandae';
    $request->placement->size->width = 217724;
    $request->placement->sslRequired = false;
    $request->placement->status = PlacementStatusEnum::ACKNOWLEDGE_ACCEPTANCE;
    $request->placement->subaccountId = 'molestiae';
    $request->placement->tagFormats = [
        PlacementTagFormatsEnum::PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3,
    ];
    $request->placement->tagSetting = new TagSetting();
    $request->placement->tagSetting->additionalKeyValues = 'placeat';
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
    $request->placement->videoSettings->companionSettings->kind = 'tempore';
    $request->placement->videoSettings->kind = 'voluptates';
    $request->placement->videoSettings->obaEnabled = false;
    $request->placement->videoSettings->obaSettings = new ObaIcon();
    $request->placement->videoSettings->obaSettings->iconClickThroughUrl = 'cumque';
    $request->placement->videoSettings->obaSettings->iconClickTrackingUrl = 'distinctio';
    $request->placement->videoSettings->obaSettings->iconViewTrackingUrl = 'rem';
    $request->placement->videoSettings->obaSettings->program = 'consectetur';
    $request->placement->videoSettings->obaSettings->resourceUrl = 'nulla';
    $request->placement->videoSettings->obaSettings->size = new Size();
    $request->placement->videoSettings->obaSettings->size->height = 169011;
    $request->placement->videoSettings->obaSettings->size->iab = false;
    $request->placement->videoSettings->obaSettings->size->id = 'dolor';
    $request->placement->videoSettings->obaSettings->size->kind = 'esse';
    $request->placement->videoSettings->obaSettings->size->width = 537738;
    $request->placement->videoSettings->obaSettings->xPosition = 'mollitia';
    $request->placement->videoSettings->obaSettings->yPosition = 'debitis';
    $request->placement->videoSettings->orientation = VideoSettingsOrientationEnum::ANY;
    $request->placement->videoSettings->skippableSettings = new SkippableSetting();
    $request->placement->videoSettings->skippableSettings->kind = 'facilis';
    $request->placement->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetPercentage = 957111;
    $request->placement->videoSettings->skippableSettings->progressOffset->offsetSeconds = 806875;
    $request->placement->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetPercentage = 148873;
    $request->placement->videoSettings->skippableSettings->skipOffset->offsetSeconds = 222093;
    $request->placement->videoSettings->skippableSettings->skippable = false;
    $request->placement->videoSettings->transcodeSettings = new TranscodeSetting();
    $request->placement->videoSettings->transcodeSettings->enabledVideoFormats = [
        572781,
        261500,
        324043,
        45570,
    ];
    $request->placement->videoSettings->transcodeSettings->kind = 'animi';
    $request->placement->vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum::HTML5;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'aliquam';
    $request->key = 'natus';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->profileId = 'cum';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'nihil';

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
