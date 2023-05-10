# sites

### Available Operations

* [dfareportingSitesGet](#dfareportingsitesget) - Gets one site by ID.
* [dfareportingSitesInsert](#dfareportingsitesinsert) - Inserts a new site.
* [dfareportingSitesList](#dfareportingsiteslist) - Retrieves a list of sites, possibly filtered. This method supports paging.
* [dfareportingSitesPatch](#dfareportingsitespatch) - Updates an existing site. This method supports patch semantics.
* [dfareportingSitesUpdate](#dfareportingsitesupdate) - Updates an existing site.

## dfareportingSitesGet

Gets one site by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSitesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'voluptas';
    $request->id = 'd0cbcfdc-d334-4b6f-a23b-cecab50aee5e';
    $request->key = 'voluptatem';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'officia';
    $request->quotaUser = 'quas';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DfareportingSitesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->dfareportingSitesGet($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSitesInsert

Inserts a new site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Site;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteContact;
use \OpenAPI\OpenAPI\Models\Shared\SiteContactContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettings;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettingsVpaidAdapterChoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\SiteCompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\SiteTranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSitesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->site = new Site();
    $request->site->accountId = 'sapiente';
    $request->site->approved = false;
    $request->site->directorySiteId = 'nisi';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'id';
    $request->site->directorySiteIdDimensionValue->etag = 'nulla';
    $request->site->directorySiteIdDimensionValue->id = '05486e7b-413c-4be2-9176-dc1c43d40f61';
    $request->site->directorySiteIdDimensionValue->kind = 'nulla';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->directorySiteIdDimensionValue->value = 'in';
    $request->site->id = 'et';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'veritatis';
    $request->site->idDimensionValue->etag = 'ad';
    $request->site->idDimensionValue->id = '7cbe5ee4-f721-4184-8772-f32e3b49dbe0';
    $request->site->idDimensionValue->kind = 'tenetur';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'non';
    $request->site->keyName = 'harum';
    $request->site->kind = 'voluptate';
    $request->site->name = 'Sam Stehr';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'quas';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'saepe';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'necessitatibus';
    $request->site->videoSettings->kind = 'fugiat';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'eius';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'voluptate';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'odio';
    $request->site->videoSettings->obaSettings->program = 'voluptas';
    $request->site->videoSettings->obaSettings->resourceUrl = 'deleniti';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 50405;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'reiciendis';
    $request->site->videoSettings->obaSettings->size->kind = 'minus';
    $request->site->videoSettings->obaSettings->size->width = 437920;
    $request->site->videoSettings->obaSettings->xPosition = 'laborum';
    $request->site->videoSettings->obaSettings->yPosition = 'ab';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'deserunt';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 504685;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 174464;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 896053;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 365192;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        518075,
        179083,
        962776,
        849010,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'consequuntur';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'perferendis';
    $request->key = 'quaerat';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->profileId = 'harum';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DfareportingSitesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->dfareportingSitesInsert($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSitesList

Retrieves a list of sites, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSitesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->acceptsInStreamVideoPlacements = false;
    $request->acceptsInterstitialPlacements = false;
    $request->acceptsPublisherPaidPlacements = false;
    $request->accessToken = 'ratione';
    $request->adWordsSite = false;
    $request->alt = AltEnum::MEDIA;
    $request->approved = false;
    $request->callback = 'qui';
    $request->campaignIds = [
        'distinctio',
        'incidunt',
        'quaerat',
    ];
    $request->directorySiteIds = [
        'expedita',
        'architecto',
        'totam',
        'adipisci',
    ];
    $request->fields = 'nemo';
    $request->ids = [
        'aperiam',
    ];
    $request->key = 'blanditiis';
    $request->maxResults = 972502;
    $request->oauthToken = 'eius';
    $request->pageToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'inventore';
    $request->quotaUser = 'quisquam';
    $request->searchString = 'accusamus';
    $request->sortField = DfareportingSitesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingSitesListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'necessitatibus';
    $request->unmappedSite = false;
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'illo';

    $requestSecurity = new DfareportingSitesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->dfareportingSitesList($request, $requestSecurity);

    if ($response->sitesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSitesPatch

Updates an existing site. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Site;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteContact;
use \OpenAPI\OpenAPI\Models\Shared\SiteContactContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettings;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettingsVpaidAdapterChoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\SiteCompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\SiteTranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSitesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->site = new Site();
    $request->site->accountId = 'ut';
    $request->site->approved = false;
    $request->site->directorySiteId = 'perspiciatis';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'rem';
    $request->site->directorySiteIdDimensionValue->etag = 'animi';
    $request->site->directorySiteIdDimensionValue->id = '9ba460ad-dfde-4410-837d-aa9182a49d96';
    $request->site->directorySiteIdDimensionValue->kind = 'odit';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->directorySiteIdDimensionValue->value = 'pariatur';
    $request->site->id = 'amet';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'eligendi';
    $request->site->idDimensionValue->etag = 'laborum';
    $request->site->idDimensionValue->id = 'ffc198ee-a445-4279-abcd-440ea98becce';
    $request->site->idDimensionValue->kind = 'accusantium';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->idDimensionValue->value = 'voluptatum';
    $request->site->keyName = 'nisi';
    $request->site->kind = 'pariatur';
    $request->site->name = 'Thomas Skiles';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'nihil';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::HTML5;
    $request->site->subaccountId = 'aut';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'quis';
    $request->site->videoSettings->kind = 'nemo';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'accusantium';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'neque';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'voluptates';
    $request->site->videoSettings->obaSettings->program = 'totam';
    $request->site->videoSettings->obaSettings->resourceUrl = 'fugiat';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 772103;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'autem';
    $request->site->videoSettings->obaSettings->size->kind = 'explicabo';
    $request->site->videoSettings->obaSettings->size->width = 407819;
    $request->site->videoSettings->obaSettings->xPosition = 'doloribus';
    $request->site->videoSettings->obaSettings->yPosition = 'maiores';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'dignissimos';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 773017;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 436689;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 352416;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 400469;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        317697,
        964865,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'nostrum';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'recusandae';
    $request->id = '3e4cfcc6-a91e-4c52-a24d-00014ef45cea';
    $request->key = 'dicta';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->profileId = 'laborum';
    $request->quotaUser = 'minus';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new DfareportingSitesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->dfareportingSitesPatch($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSitesUpdate

Updates an existing site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Site;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValue;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteContact;
use \OpenAPI\OpenAPI\Models\Shared\SiteContactContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettings;
use \OpenAPI\OpenAPI\Models\Shared\TagSetting;
use \OpenAPI\OpenAPI\Models\Shared\TagSettingKeywordOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSettingsVpaidAdapterChoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettings;
use \OpenAPI\OpenAPI\Models\Shared\SiteCompanionSetting;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\SiteVideoSettingsOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteSkippableSetting;
use \OpenAPI\OpenAPI\Models\Shared\VideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\SiteTranscodeSetting;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSitesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSitesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->site = new Site();
    $request->site->accountId = 'quidem';
    $request->site->approved = false;
    $request->site->directorySiteId = 'quidem';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'suscipit';
    $request->site->directorySiteIdDimensionValue->etag = 'nostrum';
    $request->site->directorySiteIdDimensionValue->id = '87f34041-4c5b-49ac-ae40-0ae9f92caf1b';
    $request->site->directorySiteIdDimensionValue->kind = 'ipsa';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->directorySiteIdDimensionValue->value = 'nemo';
    $request->site->id = 'a';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'architecto';
    $request->site->idDimensionValue->etag = 'pariatur';
    $request->site->idDimensionValue->id = '14718c6f-a2fa-4d0c-86c5-d95472cdd14f';
    $request->site->idDimensionValue->kind = 'porro';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->idDimensionValue->value = 'nesciunt';
    $request->site->keyName = 'cum';
    $request->site->kind = 'in';
    $request->site->name = 'Beulah Schmitt';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'reiciendis';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'eaque';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'labore';
    $request->site->videoSettings->kind = 'consectetur';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'ipsum';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'exercitationem';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'inventore';
    $request->site->videoSettings->obaSettings->program = 'quisquam';
    $request->site->videoSettings->obaSettings->resourceUrl = 'neque';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 872770;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'nulla';
    $request->site->videoSettings->obaSettings->size->kind = 'beatae';
    $request->site->videoSettings->obaSettings->size->width = 896280;
    $request->site->videoSettings->obaSettings->xPosition = 'harum';
    $request->site->videoSettings->obaSettings->yPosition = 'deleniti';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::PORTRAIT;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'odio';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 946866;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 463168;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 364332;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 959045;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        940819,
        134516,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'ipsum';
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'eaque';
    $request->key = 'error';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->profileId = 'totam';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DfareportingSitesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->dfareportingSitesUpdate($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
