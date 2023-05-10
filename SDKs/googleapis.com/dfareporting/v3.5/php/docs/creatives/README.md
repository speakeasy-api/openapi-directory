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
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'atque';
    $request->id = '4f7ae12c-6891-4f82-8e11-57172305377d';
    $request->key = 'minus';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->profileId = 'fuga';
    $request->quotaUser = 'totam';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'at';

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
    $request->creative->accountId = 'omnis';
    $request->creative->active = false;
    $request->creative->adParameters = 'quam';
    $request->creative->adTagKeys = [
        'voluptates',
        'sequi',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'commodi';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_HTML5;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'aperiam';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'perspiciatis';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'fugit';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'itaque';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_COLOR,
        CreativeBackupImageFeaturesEnum::CSS_GRADIENTS,
        CreativeBackupImageFeaturesEnum::WEB_SQL_DATABASE,
    ];
    $request->creative->backupImageReportingLabel = 'temporibus';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'minus';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::NEW_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'beatae';
    $request->creative->companionCreatives = [
        'veritatis',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
        CreativeCompatibilityEnum::IN_STREAM_VIDEO,
        CreativeCompatibilityEnum::DISPLAY,
        CreativeCompatibilityEnum::DISPLAY,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'aliquid';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
        new Rule(),
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
    ];
    $request->creative->customKeyValues = [
        'est',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 816726;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::CENTERED;
    $request->creative->fsCommand->top = 607181;
    $request->creative->fsCommand->windowHeight = 3860;
    $request->creative->fsCommand->windowWidth = 957489;
    $request->creative->htmlCode = 'officiis';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'expedita';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'quia';
    $request->creative->idDimensionValue->etag = 'vitae';
    $request->creative->idDimensionValue->id = '780bccc0-dbbd-4db4-8470-8fb4e391e6bc';
    $request->creative->idDimensionValue->kind = 'ab';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->idDimensionValue->value = 'blanditiis';
    $request->creative->kind = 'porro';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'labore';
    $request->creative->latestTraffickedCreativeId = 'impedit';
    $request->creative->mediaDescription = 'ut';
    $request->creative->mediaDuration = 9365.18;
    $request->creative->name = 'Carrie Haley';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'itaque';
    $request->creative->obaIcon->iconClickTrackingUrl = 'fuga';
    $request->creative->obaIcon->iconViewTrackingUrl = 'consectetur';
    $request->creative->obaIcon->program = 'modi';
    $request->creative->obaIcon->resourceUrl = 'aspernatur';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 129762;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'suscipit';
    $request->creative->obaIcon->size->kind = 'ipsa';
    $request->creative->obaIcon->size->width = 910410;
    $request->creative->obaIcon->xPosition = 'sint';
    $request->creative->obaIcon->yPosition = 'nobis';
    $request->creative->overrideCss = 'qui';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 37477;
    $request->creative->progressOffset->offsetSeconds = 9248;
    $request->creative->redirectUrl = 'impedit';
    $request->creative->renderingId = 'recusandae';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'voluptate';
    $request->creative->renderingIdDimensionValue->etag = 'deleniti';
    $request->creative->renderingIdDimensionValue->id = 'a1bd8fb7-a0a1-416c-a723-d4097fa30e9a';
    $request->creative->renderingIdDimensionValue->kind = 'hic';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->renderingIdDimensionValue->value = 'consequuntur';
    $request->creative->requiredFlashPluginVersion = 'ipsam';
    $request->creative->requiredFlashVersion = 729612;
    $request->creative->size = new Size();
    $request->creative->size->height = 153942;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'omnis';
    $request->creative->size->kind = 'dicta';
    $request->creative->size->width = 185116;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 130934;
    $request->creative->skipOffset->offsetSeconds = 6203;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'amet';
    $request->creative->studioCreativeId = 'consequatur';
    $request->creative->studioTraffickedCreativeId = 'fugiat';
    $request->creative->subaccountId = 'voluptatum';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'velit';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'hic';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'itaque';
    $request->creative->type = CreativeTypeEnum::VPAID_NON_LINEAR_VIDEO;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::AD_ID_OFFICIAL;
    $request->creative->universalAdId->value = 'dignissimos';
    $request->creative->version = 592088;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'odit';
    $request->key = 'vero';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'optio';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'atque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'perspiciatis';
    $request->active = false;
    $request->advertiserId = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->archived = false;
    $request->callback = 'sunt';
    $request->campaignId = 'nemo';
    $request->companionCreativeIds = [
        'illum',
        'porro',
        'quaerat',
        'magni',
    ];
    $request->creativeFieldIds = [
        'quos',
        'in',
        'commodi',
        'maxime',
    ];
    $request->fields = 'sed';
    $request->ids = [
        'consequuntur',
        'possimus',
        'delectus',
        'harum',
    ];
    $request->key = 'aliquam';
    $request->maxResults = 757962;
    $request->oauthToken = 'hic';
    $request->pageToken = 'quo';
    $request->prettyPrint = false;
    $request->profileId = 'illo';
    $request->quotaUser = 'nobis';
    $request->renderingIds = [
        'nisi',
        'explicabo',
    ];
    $request->searchString = 'sequi';
    $request->sizeIds = [
        'reiciendis',
    ];
    $request->sortField = DfareportingCreativesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCreativesListSortOrderEnum::ASCENDING;
    $request->studioCreativeId = 'vitae';
    $request->types = [
        DfareportingCreativesListTypesEnum::INSTREAM_VIDEO_REDIRECT,
        DfareportingCreativesListTypesEnum::CUSTOM_DISPLAY,
        DfareportingCreativesListTypesEnum::VPAID_NON_LINEAR_VIDEO,
        DfareportingCreativesListTypesEnum::HTML5_BANNER,
    ];
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'dolorem';

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
    $request->creative->accountId = 'repellendus';
    $request->creative->active = false;
    $request->creative->adParameters = 'nam';
    $request->creative->adTagKeys = [
        'magnam',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'expedita';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_HTML5;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_GWD;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::SWIFFY;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'nostrum';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'officia';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'voluptas';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'laudantium';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::INPUT_ATTR_STEP,
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_URL,
    ];
    $request->creative->backupImageReportingLabel = 'deleniti';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'necessitatibus';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::NEW_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
    ];
    $request->creative->commercialId = 'laborum';
    $request->creative->companionCreatives = [
        'eos',
        'voluptatem',
        'temporibus',
        'id',
    ];
    $request->creative->compatibility = [
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
    $request->creative->creativeAssetSelection->defaultAssetId = 'minus';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
        new CreativeAsset(),
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'ab',
        'deserunt',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 501773;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 811519;
    $request->creative->fsCommand->windowHeight = 356904;
    $request->creative->fsCommand->windowWidth = 476084;
    $request->creative->htmlCode = 'itaque';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'rem';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'nemo';
    $request->creative->idDimensionValue->etag = 'non';
    $request->creative->idDimensionValue->id = 'e90439d2-2246-4569-8624-07084f7ab37c';
    $request->creative->idDimensionValue->kind = 'saepe';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->idDimensionValue->value = 'accusantium';
    $request->creative->kind = 'sed';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'eos';
    $request->creative->latestTraffickedCreativeId = 'consequuntur';
    $request->creative->mediaDescription = 'quis';
    $request->creative->mediaDuration = 1146.81;
    $request->creative->name = 'Marcus Stehr';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'veniam';
    $request->creative->obaIcon->iconClickTrackingUrl = 'modi';
    $request->creative->obaIcon->iconViewTrackingUrl = 'quasi';
    $request->creative->obaIcon->program = 'quae';
    $request->creative->obaIcon->resourceUrl = 'similique';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 821304;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'quo';
    $request->creative->obaIcon->size->kind = 'suscipit';
    $request->creative->obaIcon->size->width = 405041;
    $request->creative->obaIcon->xPosition = 'sint';
    $request->creative->obaIcon->yPosition = 'est';
    $request->creative->overrideCss = 'doloribus';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 589031;
    $request->creative->progressOffset->offsetSeconds = 1594;
    $request->creative->redirectUrl = 'deserunt';
    $request->creative->renderingId = 'fugit';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'autem';
    $request->creative->renderingIdDimensionValue->etag = 'quo';
    $request->creative->renderingIdDimensionValue->id = '7cdc981f-0689-481d-abb3-3cfaa348c31b';
    $request->creative->renderingIdDimensionValue->kind = 'voluptatibus';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->renderingIdDimensionValue->value = 'aperiam';
    $request->creative->requiredFlashPluginVersion = 'ducimus';
    $request->creative->requiredFlashVersion = 933456;
    $request->creative->size = new Size();
    $request->creative->size->height = 898197;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'numquam';
    $request->creative->size->kind = 'doloribus';
    $request->creative->size->width = 757824;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 957899;
    $request->creative->skipOffset->offsetSeconds = 73;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'impedit';
    $request->creative->studioCreativeId = 'numquam';
    $request->creative->studioTraffickedCreativeId = 'aspernatur';
    $request->creative->subaccountId = 'nobis';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'nihil';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'voluptatum';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'ullam';
    $request->creative->type = CreativeTypeEnum::RICH_MEDIA_IM_EXPAND;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::OTHER;
    $request->creative->universalAdId->value = 'voluptas';
    $request->creative->version = 191312;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'perferendis';
    $request->id = 'dc766324-ccb0-46c8-8a12-d02529270b8d';
    $request->key = 'ipsam';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->profileId = 'fugit';
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'illum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creative = new Creative();
    $request->creative->accountId = 'sint';
    $request->creative->active = false;
    $request->creative->adParameters = 'exercitationem';
    $request->creative->adTagKeys = [
        'voluptatum',
        'facilis',
        'placeat',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'dolores';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_HTML5;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_ACS;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::SWIFFY;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'cupiditate';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'nemo';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'natus';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'nisi';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::CSS_REFLECTIONS,
        CreativeBackupImageFeaturesEnum::CSS_GRADIENTS,
        CreativeBackupImageFeaturesEnum::DRAG_AND_DROP,
    ];
    $request->creative->backupImageReportingLabel = 'qui';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'tenetur';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CURRENT_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'ullam';
    $request->creative->companionCreatives = [
        'adipisci',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::DISPLAY_INTERSTITIAL,
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'quas';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
        new CreativeAsset(),
        new CreativeAsset(),
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'vel',
        'necessitatibus',
        'iste',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 545629;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 974724;
    $request->creative->fsCommand->windowHeight = 354678;
    $request->creative->fsCommand->windowWidth = 680370;
    $request->creative->htmlCode = 'soluta';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'cum';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'in';
    $request->creative->idDimensionValue->etag = 'delectus';
    $request->creative->idDimensionValue->id = '662550a2-8382-4ac4-83af-d2315bba6501';
    $request->creative->idDimensionValue->kind = 'iure';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->idDimensionValue->value = 'eveniet';
    $request->creative->kind = 'quae';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'ea';
    $request->creative->latestTraffickedCreativeId = 'asperiores';
    $request->creative->mediaDescription = 'veniam';
    $request->creative->mediaDuration = 6954.08;
    $request->creative->name = 'Franklin Nolan';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'molestias';
    $request->creative->obaIcon->iconClickTrackingUrl = 'architecto';
    $request->creative->obaIcon->iconViewTrackingUrl = 'expedita';
    $request->creative->obaIcon->program = 'quisquam';
    $request->creative->obaIcon->resourceUrl = 'praesentium';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 708075;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'assumenda';
    $request->creative->obaIcon->size->kind = 'repudiandae';
    $request->creative->obaIcon->size->width = 982447;
    $request->creative->obaIcon->xPosition = 'ipsum';
    $request->creative->obaIcon->yPosition = 'commodi';
    $request->creative->overrideCss = 'vitae';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 147297;
    $request->creative->progressOffset->offsetSeconds = 724073;
    $request->creative->redirectUrl = 'ex';
    $request->creative->renderingId = 'neque';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'quod';
    $request->creative->renderingIdDimensionValue->etag = 'eos';
    $request->creative->renderingIdDimensionValue->id = '05fda840-774a-468a-9a35-d086b6f66fef';
    $request->creative->renderingIdDimensionValue->kind = 'consequatur';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creative->renderingIdDimensionValue->value = 'accusantium';
    $request->creative->requiredFlashPluginVersion = 'voluptates';
    $request->creative->requiredFlashVersion = 590280;
    $request->creative->size = new Size();
    $request->creative->size->height = 978460;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'quaerat';
    $request->creative->size->kind = 'numquam';
    $request->creative->size->width = 248276;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 741024;
    $request->creative->skipOffset->offsetSeconds = 277935;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'dolores';
    $request->creative->studioCreativeId = 'enim';
    $request->creative->studioTraffickedCreativeId = 'nihil';
    $request->creative->subaccountId = 'libero';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'omnis';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'excepturi';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'corrupti';
    $request->creative->type = CreativeTypeEnum::HTML5_BANNER;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::CLEARCAST;
    $request->creative->universalAdId->value = 'quibusdam';
    $request->creative->version = 667418;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'dicta';
    $request->key = 'recusandae';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->profileId = 'id';
    $request->quotaUser = 'odit';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'iste';

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
