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
    $request->creative->overrideCss = 'ab';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 319592;
    $request->creative->progressOffset->offsetSeconds = 500828;
    $request->creative->redirectUrl = 'porro';
    $request->creative->renderingId = 'labore';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'impedit';
    $request->creative->renderingIdDimensionValue->etag = 'ut';
    $request->creative->renderingIdDimensionValue->id = 'e54599ea-3422-460e-9b20-0ce78a1bd8fb';
    $request->creative->renderingIdDimensionValue->kind = 'in';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->creative->renderingIdDimensionValue->value = 'doloremque';
    $request->creative->requiredFlashPluginVersion = 'fuga';
    $request->creative->requiredFlashVersion = 117546;
    $request->creative->size = new Size();
    $request->creative->size->height = 103901;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'suscipit';
    $request->creative->size->kind = 'eligendi';
    $request->creative->size->width = 885523;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 490956;
    $request->creative->skipOffset->offsetSeconds = 148038;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'ratione';
    $request->creative->studioCreativeId = 'possimus';
    $request->creative->studioTraffickedCreativeId = 'quaerat';
    $request->creative->subaccountId = 'aut';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'natus';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'esse';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'ratione';
    $request->creative->type = CreativeTypeEnum::DISPLAY_REDIRECT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::DCM;
    $request->creative->universalAdId->value = 'iste';
    $request->creative->version = 646776;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'ipsam';
    $request->key = 'libero';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->profileId = 'omnis';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'explicabo';

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
    $request->accessToken = 'amet';
    $request->active = false;
    $request->advertiserId = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->archived = false;
    $request->callback = 'voluptatum';
    $request->campaignId = 'velit';
    $request->companionCreativeIds = [
        'ullam',
        'deserunt',
        'itaque',
        'distinctio',
    ];
    $request->creativeFieldIds = [
        'dignissimos',
        'provident',
    ];
    $request->fields = 'occaecati';
    $request->ids = [
        'sunt',
        'odit',
        'vero',
        'deleniti',
    ];
    $request->key = 'optio';
    $request->maxResults = 98805;
    $request->oauthToken = 'repellat';
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->profileId = 'magnam';
    $request->quotaUser = 'perspiciatis';
    $request->renderingIds = [
        'corrupti',
    ];
    $request->searchString = 'sunt';
    $request->sizeIds = [
        'delectus',
        'illum',
    ];
    $request->sortField = DfareportingCreativesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingCreativesListSortOrderEnum::ASCENDING;
    $request->studioCreativeId = 'magni';
    $request->types = [
        DfareportingCreativesListTypesEnum::RICH_MEDIA_MOBILE_IN_APP,
        DfareportingCreativesListTypesEnum::RICH_MEDIA_DISPLAY_INTERSTITIAL,
        DfareportingCreativesListTypesEnum::RICH_MEDIA_DISPLAY_EXPANDING,
        DfareportingCreativesListTypesEnum::HTML5_BANNER,
    ];
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'minus';

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
    $request->creative->accountId = 'possimus';
    $request->creative->active = false;
    $request->creative->adParameters = 'delectus';
    $request->creative->adTagKeys = [
        'aliquam',
        'eligendi',
        'hic',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'illo';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_IMAGE;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_DBM;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'explicabo';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'sequi';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'alias';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'reiciendis';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::CSS_TRANSFORMS,
        CreativeBackupImageFeaturesEnum::CSS_MULTIPLE_BGS,
        CreativeBackupImageFeaturesEnum::SVG_FILTERS,
    ];
    $request->creative->backupImageReportingLabel = 'nam';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'architecto';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::CUSTOM;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'eos';
    $request->creative->companionCreatives = [
        'hic',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::IN_STREAM_VIDEO,
        CreativeCompatibilityEnum::DISPLAY,
        CreativeCompatibilityEnum::DISPLAY_INTERSTITIAL,
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
    ];
    $request->creative->convertFlashToHtml5 = false;
    $request->creative->counterCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->creativeAssetSelection = new CreativeAssetSelection();
    $request->creative->creativeAssetSelection->defaultAssetId = 'autem';
    $request->creative->creativeAssetSelection->rules = [
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
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'voluptas',
        'laudantium',
        'corporis',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 616619;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 900411;
    $request->creative->fsCommand->windowHeight = 136770;
    $request->creative->fsCommand->windowWidth = 173193;
    $request->creative->htmlCode = 'laborum';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'vero';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'eos';
    $request->creative->idDimensionValue->etag = 'voluptatem';
    $request->creative->idDimensionValue->id = 'da16fc2b-271a-4289-857e-854e90439d22';
    $request->creative->idDimensionValue->kind = 'consequuntur';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->idDimensionValue->value = 'commodi';
    $request->creative->kind = 'ipsam';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'vel';
    $request->creative->latestTraffickedCreativeId = 'cupiditate';
    $request->creative->mediaDescription = 'modi';
    $request->creative->mediaDuration = 3923.11;
    $request->creative->name = 'Juanita Batz IV';
    $request->creative->overrideCss = 'tempora';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 962411;
    $request->creative->progressOffset->offsetSeconds = 461853;
    $request->creative->redirectUrl = 'dolorum';
    $request->creative->renderingId = 'libero';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'ratione';
    $request->creative->renderingIdDimensionValue->etag = 'molestiae';
    $request->creative->renderingIdDimensionValue->id = 'cef02225-194d-4b55-810a-dc669af90a26';
    $request->creative->renderingIdDimensionValue->kind = 'quo';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->creative->renderingIdDimensionValue->value = 'maxime';
    $request->creative->requiredFlashPluginVersion = 'facere';
    $request->creative->requiredFlashVersion = 769247;
    $request->creative->size = new Size();
    $request->creative->size->height = 587122;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'deleniti';
    $request->creative->size->kind = 'quasi';
    $request->creative->size->width = 978857;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 29853;
    $request->creative->skipOffset->offsetSeconds = 396184;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'laudantium';
    $request->creative->studioCreativeId = 'unde';
    $request->creative->studioTraffickedCreativeId = 'corrupti';
    $request->creative->subaccountId = 'quae';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'facere';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'ea';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'amet';
    $request->creative->type = CreativeTypeEnum::INTERSTITIAL_INTERNAL_REDIRECT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::DCM;
    $request->creative->universalAdId->value = 'hic';
    $request->creative->version = 629116;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'laudantium';
    $request->id = 'c31bf407-ee4f-4cf0-842b-78f15626398a';
    $request->key = 'perferendis';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->profileId = 'impedit';
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'nisi';

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
    $request->creative->accountId = 'fugit';
    $request->creative->active = false;
    $request->creative->adParameters = 'dolore';
    $request->creative->adTagKeys = [
        'maxime',
        'expedita',
        'accusantium',
        'ea',
    ];
    $request->creative->additionalSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->creative->advertiserId = 'totam';
    $request->creative->allowScriptAccess = false;
    $request->creative->archived = false;
    $request->creative->artworkType = CreativeArtworkTypeEnum::ARTWORK_TYPE_IMAGE;
    $request->creative->authoringSource = CreativeAuthoringSourceEnum::CREATIVE_AUTHORING_SOURCE_STUDIO;
    $request->creative->authoringTool = CreativeAuthoringToolEnum::NINJA;
    $request->creative->autoAdvanceImages = false;
    $request->creative->backgroundColor = 'consequuntur';
    $request->creative->backupImageClickThroughUrl = new CreativeClickThroughUrl();
    $request->creative->backupImageClickThroughUrl->computedClickThroughUrl = 'repellendus';
    $request->creative->backupImageClickThroughUrl->customClickThroughUrl = 'sit';
    $request->creative->backupImageClickThroughUrl->landingPageId = 'dolores';
    $request->creative->backupImageFeatures = [
        CreativeBackupImageFeaturesEnum::CSS_RGBA,
        CreativeBackupImageFeaturesEnum::INPUT_TYPE_TEL,
    ];
    $request->creative->backupImageReportingLabel = 'magni';
    $request->creative->backupImageTargetWindow = new TargetWindow();
    $request->creative->backupImageTargetWindow->customHtml = 'odio';
    $request->creative->backupImageTargetWindow->targetWindowOption = TargetWindowTargetWindowOptionEnum::NEW_WINDOW;
    $request->creative->clickTags = [
        new ClickTag(),
        new ClickTag(),
        new ClickTag(),
    ];
    $request->creative->commercialId = 'deleniti';
    $request->creative->companionCreatives = [
        'ipsam',
        'odio',
        'fugit',
        'aspernatur',
    ];
    $request->creative->compatibility = [
        CreativeCompatibilityEnum::IN_STREAM_AUDIO,
        CreativeCompatibilityEnum::APP_INTERSTITIAL,
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
    $request->creative->creativeAssetSelection->defaultAssetId = 'voluptatum';
    $request->creative->creativeAssetSelection->rules = [
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
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
        new CreativeFieldAssignment(),
    ];
    $request->creative->customKeyValues = [
        'dolore',
    ];
    $request->creative->dynamicAssetSelection = false;
    $request->creative->exitCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->fsCommand = new FsCommand();
    $request->creative->fsCommand->left = 705307;
    $request->creative->fsCommand->positionOption = FsCommandPositionOptionEnum::DISTANCE_FROM_TOP_LEFT_CORNER;
    $request->creative->fsCommand->top = 365676;
    $request->creative->fsCommand->windowHeight = 615532;
    $request->creative->fsCommand->windowWidth = 395411;
    $request->creative->htmlCode = 'provident';
    $request->creative->htmlCodeLocked = false;
    $request->creative->id = 'amet';
    $request->creative->idDimensionValue = new DimensionValue();
    $request->creative->idDimensionValue->dimensionName = 'dolor';
    $request->creative->idDimensionValue->etag = 'nostrum';
    $request->creative->idDimensionValue->id = '2f745339-94d7-48de-bb6e-9389f5abb7f6';
    $request->creative->idDimensionValue->kind = 'commodi';
    $request->creative->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creative->idDimensionValue->value = 'ullam';
    $request->creative->kind = 'ullam';
    $request->creative->lastModifiedInfo = new LastModifiedInfo();
    $request->creative->lastModifiedInfo->time = 'doloremque';
    $request->creative->latestTraffickedCreativeId = 'est';
    $request->creative->mediaDescription = 'qui';
    $request->creative->mediaDuration = 5087.73;
    $request->creative->name = 'Christy Deckow';
    $request->creative->overrideCss = 'incidunt';
    $request->creative->progressOffset = new VideoOffset();
    $request->creative->progressOffset->offsetPercentage = 535883;
    $request->creative->progressOffset->offsetSeconds = 220746;
    $request->creative->redirectUrl = 'est';
    $request->creative->renderingId = 'reiciendis';
    $request->creative->renderingIdDimensionValue = new DimensionValue();
    $request->creative->renderingIdDimensionValue->dimensionName = 'possimus';
    $request->creative->renderingIdDimensionValue->etag = 'odit';
    $request->creative->renderingIdDimensionValue->id = '315bba65-0164-4e06-b5bf-6ae591bc8bde';
    $request->creative->renderingIdDimensionValue->kind = 'maiores';
    $request->creative->renderingIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->creative->renderingIdDimensionValue->value = 'commodi';
    $request->creative->requiredFlashPluginVersion = 'vitae';
    $request->creative->requiredFlashVersion = 147297;
    $request->creative->size = new Size();
    $request->creative->size->height = 724073;
    $request->creative->size->iab = false;
    $request->creative->size->id = 'ex';
    $request->creative->size->kind = 'neque';
    $request->creative->size->width = 797712;
    $request->creative->skipOffset = new VideoOffset();
    $request->creative->skipOffset->offsetPercentage = 176104;
    $request->creative->skipOffset->offsetSeconds = 186;
    $request->creative->skippable = false;
    $request->creative->sslCompliant = false;
    $request->creative->sslOverride = false;
    $request->creative->studioAdvertiserId = 'ad';
    $request->creative->studioCreativeId = 'a';
    $request->creative->studioTraffickedCreativeId = 'facere';
    $request->creative->subaccountId = 'id';
    $request->creative->thirdPartyBackupImageImpressionsUrl = 'atque';
    $request->creative->thirdPartyRichMediaImpressionsUrl = 'quaerat';
    $request->creative->thirdPartyUrls = [
        new ThirdPartyTrackingUrl(),
    ];
    $request->creative->timerCustomEvents = [
        new CreativeCustomEvent(),
        new CreativeCustomEvent(),
    ];
    $request->creative->totalFileSize = 'quam';
    $request->creative->type = CreativeTypeEnum::TRACKING_TEXT;
    $request->creative->universalAdId = new UniversalAdId();
    $request->creative->universalAdId->registry = UniversalAdIdRegistryEnum::CLEARCAST;
    $request->creative->universalAdId->value = 'iure';
    $request->creative->version = 538368;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolor';
    $request->key = 'ad';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->profileId = 'sit';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'expedita';

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
