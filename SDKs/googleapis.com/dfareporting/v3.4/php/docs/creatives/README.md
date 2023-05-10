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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'laudantium';
    $request->id = '79923b7e-1358-44f7-ae12-c6891f82ce11';
    $request->key = 'ullam';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->profileId = 'inventore';
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'dolorem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creative = new Creative();
    $request->creative->accountId = 'exercitationem';
    $request->creative->active = false;
    $request->creative->adParameters = 'amet';
    $request->creative->adTagKeys = [
        'voluptate',
        'pariatur',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'a';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_MIXED;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::SWIFFY;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'at';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'doloribus';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'omnis';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'quam';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::SVG_HREF,
        CreativeBackupImageFeaturesEnum::CSS_COLUMNS,
    ];
    $request->creative->backupImageReportingLabel = 'quis';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'commodi';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CURRENT_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'aliquid';
    $request->creative->companionCreatives = [
        'perspiciatis',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'cumque';
    $request->creative->creativeAssetSelection->rules = [
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
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'minima',
        'a',
        'beatae',
        'vitae',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 814398;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 672273;
    $request->creative->fsCommand->windowHeight = 118020;
    $request->creative->fsCommand->windowWidth = 32737;
    $request->creative->htmlCode = 'odit';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'aliquid';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'pariatur';
    $request->creative->idDimensionValue->etag = 'enim';
    $request->creative->idDimensionValue->id = '41a4d190-feb2-4178-8bcc-c0dbbddb4847';
    $request->creative->idDimensionValue->kind = 'doloremque';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creative->idDimensionValue->value = 'reiciendis';
    $request->creative->kind = 'facilis';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'aliquam';
    $request->creative->latestTraffickedCreativeId = 'repudiandae';
    $request->creative->mediaDescription = 'amet';
    $request->creative->mediaDuration = 6170.35;
    $request->creative->name = 'Gretchen Keeling';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'ab';
    $request->creative->obaIcon->iconClickTrackingUrl = 'ad';
    $request->creative->obaIcon->iconViewTrackingUrl = 'blanditiis';
    $request->creative->obaIcon->program = 'porro';
    $request->creative->obaIcon->resourceUrl = 'labore';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 773889;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'ut';
    $request->creative->obaIcon->size->kind = 'earum';
    $request->creative->obaIcon->size->width = 355927;
    $request->creative->obaIcon->xPosition = 'numquam';
    $request->creative->obaIcon->yPosition = 'enim';
    $request->creative->overrideCss = 'cupiditate';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 578610;
    $request->creative->progressOffset->offsetSeconds = 929443;
    $request->creative->redirectUrl = 'fuga';
    $request->creative->renderingId = 'consectetur';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'modi';
    $request->creative->renderingIdDimensionValue->etag = 'aspernatur';
    $request->creative->renderingIdDimensionValue->id = '260e9b20-0ce7-48a1-bd8f-b7a0a116ce72';
    $request->creative->renderingIdDimensionValue->kind = 'ratione';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->renderingIdDimensionValue->value = 'quaerat';
    $request->creative->requiredFlashPluginVersion = 'aut';
    $request->creative->requiredFlashVersion = 620534;
    $request->creative->size = new Size();
    $request->creative->size->height = 457389;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'delectus';
    $request->creative->size->kind = 'deserunt';
    $request->creative->size->width = 188081;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 60379;
    $request->creative->skipOffset->offsetSeconds = 895293;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'iste';
    $request->creative->studioCreativeId = 'deserunt';
    $request->creative->studioTraffickedCreativeId = 'hic';
    $request->creative->subaccountId = 'ducimus';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'consequuntur';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'ipsam';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'omnis';
    $request->creative->type = CreativeTypeEnum::INTERNAL_REDIRECT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::OTHER;
    $request->creative->universalAdId->value = 'explicabo';
    $request->creative->version = 6203;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'voluptatum';
    $request->key = 'velit';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'distinctio';

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
    $request->accessToken = 'dignissimos';
    $request->active = false;
    $request->advertiserId = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->archived = false;
    $request->callback = 'assumenda';
    $request->campaignId = 'sunt';
    $request->companionCreativeIds = [
        'vero',
    ];
    $request->creativeFieldIds = [
        'optio',
        'quasi',
        'repellat',
    ];
    $request->fields = 'atque';
    $request->ids = [
        'perspiciatis',
        'amet',
    ];
    $request->key = 'corrupti';
    $request->maxResults = 125161;
    $request->oauthToken = 'nemo';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->profileId = 'illum';
    $request->quotaUser = 'porro';
    $request->renderingIds = [
        'magni',
        'cumque',
    ];
    $request->searchString = 'quos';
    $request->sizeIds = [
        'commodi',
        'maxime',
    ];
    $request->sortField = DfareportingCreativesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingCreativesListSortOrderEnum::DESCENDING;
    $request->studioCreativeId = 'consequuntur';
    $request->types = [
        DfareportingCreativesListTypesEnum::INSTREAM_AUDIO,
        DfareportingCreativesListTypesEnum::VPAID_NON_LINEAR_VIDEO,
        DfareportingCreativesListTypesEnum::RICH_MEDIA_DISPLAY_BANNER,
        DfareportingCreativesListTypesEnum::INSTREAM_VIDEO_REDIRECT,
    ];
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'quo';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creative = new Creative();
    $request->creative->accountId = 'nobis';
    $request->creative->active = false;
    $request->creative->adParameters = 'esse';
    $request->creative->adTagKeys = [
        'explicabo',
        'sequi',
    ];
    $request->creative->additionalSizes = [
        new Size(),
    ];
    $request->creative->advertiserId = 'reiciendis';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_MIXED;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_DBM;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'maiores';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'nam';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'architecto';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'rerum';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::CSS_ANIMATIONS,
        CreativeBackupImageFeaturesEnum::CSS_GENERATED_CONTENT,
        CreativeBackupImageFeaturesEnum::TOUCH,
        CreativeBackupImageFeaturesEnum::WEB_SOCKETS,
    ];
    $request->creative->backupImageReportingLabel = 'nam';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'ab';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::NEW_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'expedita';
    $request->creative->companionCreatives = [
        'tempore',
        'recusandae',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::APP,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'corporis';
    $request->creative->creativeAssetSelection->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->creative->creativeAssets = [
        new CreativeAsset(),
        new CreativeAsset(),
        new CreativeAsset(),
    ];
    $request->creative->creativeFieldAssignments = [
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'aspernatur',
        'dolores',
        'laborum',
        'vero',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 27653;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 660339;
    $request->creative->fsCommand->windowHeight = 62907;
    $request->creative->fsCommand->windowWidth = 414439;
    $request->creative->htmlCode = 'a';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'minus';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'sed';
    $request->creative->idDimensionValue->etag = 'nam';
    $request->creative->idDimensionValue->id = '271a289c-57e8-454e-9043-9d2224656946';
    $request->creative->idDimensionValue->kind = 'explicabo';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->idDimensionValue->value = 'doloremque';
    $request->creative->kind = 'odio';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'sit';
    $request->creative->latestTraffickedCreativeId = 'voluptatum';
    $request->creative->mediaDescription = 'tempora';
    $request->creative->mediaDuration = 9624.11;
    $request->creative->name = 'Kayla Reinger';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'optio';
    $request->creative->obaIcon->iconClickTrackingUrl = 'saepe';
    $request->creative->obaIcon->iconViewTrackingUrl = 'maiores';
    $request->creative->obaIcon->program = 'accusantium';
    $request->creative->obaIcon->resourceUrl = 'sed';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 180660;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'consequuntur';
    $request->creative->obaIcon->size->kind = 'quis';
    $request->creative->obaIcon->size->width = 114681;
    $request->creative->obaIcon->xPosition = 'occaecati';
    $request->creative->obaIcon->yPosition = 'labore';
    $request->creative->overrideCss = 'fugiat';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 695974;
    $request->creative->progressOffset->offsetSeconds = 350202;
    $request->creative->redirectUrl = 'veniam';
    $request->creative->renderingId = 'modi';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'quasi';
    $request->creative->renderingIdDimensionValue->etag = 'quae';
    $request->creative->renderingIdDimensionValue->id = 'adc669af-90a2-46c7-8dc9-81f068981d6b';
    $request->creative->renderingIdDimensionValue->kind = 'nam';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creative->renderingIdDimensionValue->value = 'adipisci';
    $request->creative->requiredFlashPluginVersion = 'minus';
    $request->creative->requiredFlashVersion = 943828;
    $request->creative->size = new Size();
    $request->creative->size->height = 629116;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'fuga';
    $request->creative->size->kind = 'consectetur';
    $request->creative->size->width = 287575;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 515873;
    $request->creative->skipOffset->offsetSeconds = 768999;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'adipisci';
    $request->creative->studioCreativeId = 'veritatis';
    $request->creative->studioTraffickedCreativeId = 'nam';
    $request->creative->subaccountId = 'voluptatibus';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'magnam';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'aperiam';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'necessitatibus';
    $request->creative->type = CreativeTypeEnum::TRACKING_TEXT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::DCM;
    $request->creative->universalAdId->value = 'eligendi';
    $request->creative->version = 957899;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'aspernatur';
    $request->id = 'b78f1562-6398-4a0d-8766-324ccb06c8ca';
    $request->key = 'inventore';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->profileId = 'repellendus';
    $request->quotaUser = 'sit';
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
    $request->creative->accountId = 'perspiciatis';
    $request->creative->active = false;
    $request->creative->adParameters = 'magni';
    $request->creative->adTagKeys = [
        'alias',
        'quidem',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'possimus';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_HTML5;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'aspernatur';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'at';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'illum';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'praesentium';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::HASH_CHANGE,
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_NUMBER,
        CreativeBackupImageFeaturesEnum::INPUT_ATTR_PATTERN,
    ];
    $request->creative->backupImageReportingLabel = 'facilis';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'placeat';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CUSTOM;
    $request->creative->clickTags = [
        new ClickTag(),
    ];
    $request->creative->commercialId = 'dolore';
    $request->creative->companionCreatives = [
        'facilis',
        'cupiditate',
        'nemo',
        'natus',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
        CreativeCompatibilityEnum::DISPLAY_INTERSTITIAL,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'nostrum';
    $request->creative->creativeAssetSelection->rules = [
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
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'ullam',
        'velit',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 583138;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 258036;
    $request->creative->fsCommand->windowHeight = 856185;
    $request->creative->fsCommand->windowWidth = 473386;
    $request->creative->htmlCode = 'quas';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'repellendus';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'saepe';
    $request->creative->idDimensionValue->etag = 'amet';
    $request->creative->idDimensionValue->id = 'b6e9389f-5abb-47f6-a255-0a28382ac483';
    $request->creative->idDimensionValue->kind = 'est';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->idDimensionValue->value = 'possimus';
    $request->creative->kind = 'odit';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'consectetur';
    $request->creative->latestTraffickedCreativeId = 'inventore';
    $request->creative->mediaDescription = 'minima';
    $request->creative->mediaDuration = 7036.51;
    $request->creative->name = 'Kenny Huel Jr.';
    $request->creative->obaIcon = new ObaIcon();
    $request->creative->obaIcon->iconClickThroughUrl = 'iure';
    $request->creative->obaIcon->iconClickTrackingUrl = 'incidunt';
    $request->creative->obaIcon->iconViewTrackingUrl = 'eveniet';
    $request->creative->obaIcon->program = 'quae';
    $request->creative->obaIcon->resourceUrl = 'ea';
    $request->creative->obaIcon->size = new Size();
    $request->creative->obaIcon->size->height = 989122;
    $request->creative->obaIcon->size->iab = false;
    $request->creative->obaIcon->size->id = 'veniam';
    $request->creative->obaIcon->size->kind = 'quidem';
    $request->creative->obaIcon->size->width = 989526;
    $request->creative->obaIcon->xPosition = 'eum';
    $request->creative->obaIcon->yPosition = 'deserunt';
    $request->creative->overrideCss = 'repudiandae';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 365998;
    $request->creative->progressOffset->offsetSeconds = 565446;
    $request->creative->redirectUrl = 'architecto';
    $request->creative->renderingId = 'expedita';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'quisquam';
    $request->creative->renderingIdDimensionValue->etag = 'praesentium';
    $request->creative->renderingIdDimensionValue->id = 'bdef3612-b63c-4205-bda8-40774a68a9a3';
    $request->creative->renderingIdDimensionValue->kind = 'ad';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->creative->renderingIdDimensionValue->value = 'sit';
    $request->creative->requiredFlashPluginVersion = 'molestias';
    $request->creative->requiredFlashVersion = 377194;
    $request->creative->size = new Size();
    $request->creative->size->height = 713246;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'voluptas';
    $request->creative->size->kind = 'maiores';
    $request->creative->size->width = 412024;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 428199;
    $request->creative->skipOffset->offsetSeconds = 965726;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'accusamus';
    $request->creative->studioCreativeId = 'reiciendis';
    $request->creative->studioTraffickedCreativeId = 'consequatur';
    $request->creative->subaccountId = 'sed';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'accusantium';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'voluptates';
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
    $request->creative->totalFileSize = 'quaerat';
    $request->creative->type = CreativeTypeEnum::TRACKING_TEXT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::OTHER;
    $request->creative->universalAdId->value = 'cum';
    $request->creative->version = 277935;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'libero';
    $request->key = 'omnis';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->profileId = 'eos';
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'repellendus';

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
