# creatives

### Available Operations

* [dfareportingCreativesGet](#dfareportingcreativesget) - Gets one creative by ID.
* [dfareportingCreativesInsert](#dfareportingcreativesinsert) - Inserts a new creative.
* [dfareportingCreativesList](#dfareportingcreativeslist) - Retrieves a list of creatives, possibly filtered. This method supports paging.
* [dfareportingCreativesPatch](#dfareportingcreativespatch) - Updates an existing creative. This method supports patch semantics.
* [dfareportingCreativesUpdate](#dfareportingcreativesupdate) - Updates an existing creative.

## dfareportingCreativesGet

Gets one creative by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'in';
    $request->id = 'a0a116ce-723d-4409-bfa3-0e9af725b291';
    $request->key = 'qui';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->profileId = 'consequatur';
    $request->quotaUser = 'amet';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new DfareportingCreativesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->dfareportingCreativesGet($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativesInsert

Inserts a new creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\CreativeArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringToolEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\CreativeBackupImageFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindow;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindowTargetWindowOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickTag;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEvent;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventAdvertiserCustomEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowProperties;
use \OpenAPI\OpenAPI\Models\Shared\OffsetPosition;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowPropertiesPositionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetSelection;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAsset;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetId;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetChildAssetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDetectedFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionLeftUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionTopUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetStartTimeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldAssignment;
use \OpenAPI\OpenAPI\Models\Shared\FsCommand;
use \OpenAPI\OpenAPI\Models\Shared\FsCommandPositionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrl;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdId;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdIdRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creative = new Creative();
    $request->creative->accountId = 'velit';
    $request->creative->active = false;
    $request->creative->adParameters = 'hic';
    $request->creative->adTagKeys = [
        'deserunt',
        'itaque',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'iusto';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_HTML5;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::SWIFFY;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'assumenda';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'sunt';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'odit';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'vero';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_COLOR,
        CreativeBackupImageFeaturesEnum::CSS_HSLA,
        CreativeBackupImageFeaturesEnum::SVG_FE_IMAGE,
    ];
    $request->creative->backupImageReportingLabel = 'atque';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'magnam';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CURRENT_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
    ];
    $request->creative->commercialId = 'corrupti';
    $request->creative->companionCreatives = [
        'nemo',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
        CreativeCompatibilityEnum::IN_STREAM_VIDEO,
        CreativeCompatibilityEnum::DISPLAY_INTERSTITIAL,
        CreativeCompatibilityEnum::DISPLAY,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'quos';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'minus',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 820900;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 690871;
    $request->creative->fsCommand->windowHeight = 304964;
    $request->creative->fsCommand->windowWidth = 757962;
    $request->creative->htmlCode = 'hic';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'quo';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'illo';
    $request->creative->idDimensionValue->etag = 'nobis';
    $request->creative->idDimensionValue->id = '76230f84-1fb1-4bd2-bfdb-14db6be5a685';
    $request->creative->idDimensionValue->kind = 'excepturi';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creative->idDimensionValue->value = 'deleniti';
    $request->creative->kind = 'necessitatibus';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'aspernatur';
    $request->creative->latestTraffickedCreativeId = 'dolores';
    $request->creative->mediaDescription = 'laborum';
    $request->creative->mediaDuration = 8752;
    $request->creative->name = 'Betty Smitham III';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'a';
    $request->creative->obaIcon->iconClickTrackingUrl = 'minus';
    $request->creative->obaIcon->iconViewTrackingUrl = 'sed';
    $request->creative->obaIcon->program = 'nam';
    $request->creative->obaIcon->resourceUrl = 'quia';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 480108;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'ab';
    $request->creative->obaIcon->size->kind = 'deserunt';
    $request->creative->obaIcon->size->width = 149815;
    $request->creative->obaIcon->xPosition = 'blanditiis';
    $request->creative->obaIcon->yPosition = 'sint';
    $request->creative->overrideCss = 'placeat';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 356904;
    $request->creative->progressOffset->offsetSeconds = 476084;
    $request->creative->redirectUrl = 'itaque';
    $request->creative->renderingId = 'rem';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'nemo';
    $request->creative->renderingIdDimensionValue->etag = 'non';
    $request->creative->renderingIdDimensionValue->id = 'e90439d2-2246-4569-8624-07084f7ab37c';
    $request->creative->renderingIdDimensionValue->kind = 'saepe';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->renderingIdDimensionValue->value = 'accusantium';
    $request->creative->requiredFlashPluginVersion = 'sed';
    $request->creative->requiredFlashVersion = 180660;
    $request->creative->size = new Size();
    $request->creative->size->height = 162251;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'quis';
    $request->creative->size->kind = 'vitae';
    $request->creative->size->width = 577496;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 290761;
    $request->creative->skipOffset->offsetSeconds = 852737;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'quidem';
    $request->creative->studioCreativeId = 'exercitationem';
    $request->creative->studioTraffickedCreativeId = 'veniam';
    $request->creative->subaccountId = 'modi';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'quasi';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'quae';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'quo';
    $request->creative->type = CreativeTypeEnum::RICH_MEDIA_IM_EXPAND;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::AD_ID_OFFICIAL;
    $request->creative->universalAdId->value = 'sint';
    $request->creative->version = 666817;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'deserunt';
    $request->key = 'fugit';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->profileId = 'quo';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new DfareportingCreativesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->dfareportingCreativesInsert($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativesList

Retrieves a list of creatives, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesListTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->active = false;
    $request->advertiserId = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->archived = false;
    $request->callback = 'maiores';
    $request->campaignId = 'voluptatem';
    $request->companionCreativeIds = [
        'laudantium',
        'unde',
    ];
    $request->creativeFieldIds = [
        'quae',
        'facere',
        'ea',
    ];
    $request->fields = 'libero';
    $request->ids = [
        'amet',
        'adipisci',
        'minus',
    ];
    $request->key = 'hic';
    $request->maxResults = 629116;
    $request->oauthToken = 'fuga';
    $request->pageToken = 'consectetur';
    $request->prettyPrint = false;
    $request->profileId = 'labore';
    $request->quotaUser = 'laudantium';
    $request->renderingIds = [
        'adipisci',
        'veritatis',
        'nam',
        'voluptatibus',
    ];
    $request->searchString = 'magnam';
    $request->sizeIds = [
        'ducimus',
    ];
    $request->sortField = DfareportingCreativesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCreativesListSortOrderEnum::DESCENDING;
    $request->studioCreativeId = 'numquam';
    $request->types = [
        DfareportingCreativesListTypesEnum::INSTREAM_VIDEO_REDIRECT,
        DfareportingCreativesListTypesEnum::BRAND_SAFE_DEFAULT_INSTREAM_VIDEO,
        DfareportingCreativesListTypesEnum::IMAGE,
        DfareportingCreativesListTypesEnum::RICH_MEDIA_PEEL_DOWN,
    ];
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new DfareportingCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->dfareportingCreativesList($request, $requestSecurity);

    if ($response->creativesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativesPatch

Updates an existing creative. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\CreativeArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringToolEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\CreativeBackupImageFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindow;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindowTargetWindowOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickTag;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEvent;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventAdvertiserCustomEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowProperties;
use \OpenAPI\OpenAPI\Models\Shared\OffsetPosition;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowPropertiesPositionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetSelection;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAsset;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetId;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetChildAssetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDetectedFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionLeftUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionTopUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetStartTimeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldAssignment;
use \OpenAPI\OpenAPI\Models\Shared\FsCommand;
use \OpenAPI\OpenAPI\Models\Shared\FsCommandPositionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrl;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdId;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdIdRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creative = new Creative();
    $request->creative->accountId = 'nihil';
    $request->creative->active = false;
    $request->creative->adParameters = 'voluptatum';
    $request->creative->adTagKeys = [
        'vitae',
        'ullam',
        'nisi',
        'consequuntur',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'ratione';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_MIXED;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::SWIFFY;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'perferendis';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'quibusdam';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'impedit';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'ducimus';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::AUDIO,
        CreativeBackupImageFeaturesEnum::CSS_GRADIENTS,
    ];
    $request->creative->backupImageReportingLabel = 'fugit';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'dolore';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CUSTOM;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'expedita';
    $request->creative->companionCreatives = [
        'ea',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::IN_STREAM_VIDEO,
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::DISPLAY,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'repellendus';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'perspiciatis',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 486606;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::CENTERED;
    $request->creative->fsCommand->top = 692555;
    $request->creative->fsCommand->windowHeight = 533457;
    $request->creative->fsCommand->windowWidth = 819690;
    $request->creative->htmlCode = 'ipsam';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'odio';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'fugit';
    $request->creative->idDimensionValue->etag = 'aspernatur';
    $request->creative->idDimensionValue->id = 'dd895b8b-cf24-4db9-9969-3352f7453399';
    $request->creative->idDimensionValue->kind = 'numquam';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->idDimensionValue->value = 'molestiae';
    $request->creative->kind = 'quas';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'repellendus';
    $request->creative->latestTraffickedCreativeId = 'saepe';
    $request->creative->mediaDescription = 'amet';
    $request->creative->mediaDuration = 7167.95;
    $request->creative->name = 'Gwen Monahan';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'cupiditate';
    $request->creative->obaIcon->iconClickTrackingUrl = 'voluptatibus';
    $request->creative->obaIcon->iconViewTrackingUrl = 'ullam';
    $request->creative->obaIcon->program = 'dolorum';
    $request->creative->obaIcon->resourceUrl = 'soluta';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 739946;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'in';
    $request->creative->obaIcon->size->kind = 'delectus';
    $request->creative->obaIcon->size->width = 412181;
    $request->creative->obaIcon->xPosition = 'commodi';
    $request->creative->obaIcon->yPosition = 'fugit';
    $request->creative->overrideCss = 'ullam';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 354554;
    $request->creative->progressOffset->offsetSeconds = 43862;
    $request->creative->redirectUrl = 'est';
    $request->creative->renderingId = 'qui';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'praesentium';
    $request->creative->renderingIdDimensionValue->etag = 'adipisci';
    $request->creative->renderingIdDimensionValue->id = '82ac483a-fd23-415b-ba65-0164e06f5bf6';
    $request->creative->renderingIdDimensionValue->kind = 'deserunt';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->renderingIdDimensionValue->value = 'nemo';
    $request->creative->requiredFlashPluginVersion = 'molestias';
    $request->creative->requiredFlashVersion = 102019;
    $request->creative->size = new Size();
    $request->creative->size->height = 711275;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'quisquam';
    $request->creative->size->kind = 'praesentium';
    $request->creative->size->width = 708075;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 826478;
    $request->creative->skipOffset->offsetSeconds = 921916;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'maiores';
    $request->creative->studioCreativeId = 'ipsum';
    $request->creative->studioTraffickedCreativeId = 'commodi';
    $request->creative->subaccountId = 'vitae';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'fugit';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'nam';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'quod';
    $request->creative->type = CreativeTypeEnum::CUSTOM_DISPLAY_INTERSTITIAL;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::OTHER;
    $request->creative->universalAdId->value = 'ad';
    $request->creative->version = 954595;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'quaerat';
    $request->id = '0774a68a-9a35-4d08-ab6f-66fef020e9f4';
    $request->key = 'numquam';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->profileId = 'cum';
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DfareportingCreativesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->dfareportingCreativesPatch($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCreativesUpdate

Updates an existing creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Creative;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\CreativeArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAuthoringToolEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeClickThroughUrl;
use \OpenAPI\OpenAPI\Models\Shared\CreativeBackupImageFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindow;
use \OpenAPI\OpenAPI\Models\Shared\TargetWindowTargetWindowOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClickTag;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEvent;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventAdvertiserCustomEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowProperties;
use \OpenAPI\OpenAPI\Models\Shared\OffsetPosition;
use \OpenAPI\OpenAPI\Models\Shared\PopupWindowPropertiesPositionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCustomEventTargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetSelection;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAsset;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetArtworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetId;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetChildAssetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDetectedFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDisplayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetDurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionLeftUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetPositionTopUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetStartTimeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeAssetWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeFieldAssignment;
use \OpenAPI\OpenAPI\Models\Shared\FsCommand;
use \OpenAPI\OpenAPI\Models\Shared\FsCommandPositionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrl;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdId;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdIdRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creative = new Creative();
    $request->creative->accountId = 'libero';
    $request->creative->active = false;
    $request->creative->adParameters = 'omnis';
    $request->creative->adTagKeys = [
        'eos',
        'quisquam',
        'corrupti',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'cum';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_IMAGE;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_GWD;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'similique';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'autem';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'dicta';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'recusandae';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_DATE,
        CreativeBackupImageFeaturesEnum::CSS_RGBA,
        CreativeBackupImageFeaturesEnum::CSS_FLEX_BOX,
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_URL,
    ];
    $request->creative->backupImageReportingLabel = 'atque';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'explicabo';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CURRENT_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'doloribus';
    $request->creative->companionCreatives = [
        'aut',
        'similique',
        'iste',
        'eveniet',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::DISPLAY_INTERSTITIAL,
        CreativeCompatibilityEnum::APP,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'quam';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'perferendis',
        'quaerat',
        'excepturi',
        'aliquid',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 29789;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 388006;
    $request->creative->fsCommand->windowHeight = 632850;
    $request->creative->fsCommand->windowWidth = 116705;
    $request->creative->htmlCode = 'atque';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'ratione';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'vitae';
    $request->creative->idDimensionValue->etag = 'quisquam';
    $request->creative->idDimensionValue->id = '87adf596-fdf1-4ad8-b7ae-80c1c19c95ba';
    $request->creative->idDimensionValue->kind = 'iste';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creative->idDimensionValue->value = 'quas';
    $request->creative->kind = 'laboriosam';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'ducimus';
    $request->creative->latestTraffickedCreativeId = 'voluptatum';
    $request->creative->mediaDescription = 'sapiente';
    $request->creative->mediaDuration = 6451.39;
    $request->creative->name = 'Darla Kertzmann';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'iste';
    $request->creative->obaIcon->iconClickTrackingUrl = 'cupiditate';
    $request->creative->obaIcon->iconViewTrackingUrl = 'ab';
    $request->creative->obaIcon->program = 'fuga';
    $request->creative->obaIcon->resourceUrl = 'a';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 222771;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'voluptatum';
    $request->creative->obaIcon->size->kind = 'molestias';
    $request->creative->obaIcon->size->width = 801274;
    $request->creative->obaIcon->xPosition = 'repudiandae';
    $request->creative->obaIcon->yPosition = 'eaque';
    $request->creative->overrideCss = 'consectetur';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 420910;
    $request->creative->progressOffset->offsetSeconds = 110804;
    $request->creative->redirectUrl = 'numquam';
    $request->creative->renderingId = 'incidunt';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'modi';
    $request->creative->renderingIdDimensionValue->etag = 'quos';
    $request->creative->renderingIdDimensionValue->id = 'c7977a0e-f2f5-4360-a8ef-eef934152ed7';
    $request->creative->renderingIdDimensionValue->kind = 'itaque';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creative->renderingIdDimensionValue->value = 'ullam';
    $request->creative->requiredFlashPluginVersion = 'non';
    $request->creative->requiredFlashVersion = 962497;
    $request->creative->size = new Size();
    $request->creative->size->height = 276795;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'quod';
    $request->creative->size->kind = 'sunt';
    $request->creative->size->width = 353493;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 463044;
    $request->creative->skipOffset->offsetSeconds = 850953;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'voluptates';
    $request->creative->studioCreativeId = 'officia';
    $request->creative->studioTraffickedCreativeId = 'est';
    $request->creative->subaccountId = 'in';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'illo';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'voluptate';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'incidunt';
    $request->creative->type = CreativeTypeEnum::RICH_MEDIA_DISPLAY_BANNER;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::AD_ID_OFFICIAL;
    $request->creative->universalAdId->value = 'est';
    $request->creative->version = 776750;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'laboriosam';
    $request->key = 'quam';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'repellat';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new DfareportingCreativesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creatives->dfareportingCreativesUpdate($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
