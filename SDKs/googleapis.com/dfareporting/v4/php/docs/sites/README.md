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
    $request->accessToken = 'illo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'perspiciatis';
    $request->id = '8a9ba460-addf-4de4-90c3-7daa9182a49d';
    $request->key = 'sint';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'quis';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'amet';

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
    $request->site->accountId = 'laborum';
    $request->site->approved = false;
    $request->site->directorySiteId = 'delectus';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'reiciendis';
    $request->site->directorySiteIdDimensionValue->etag = 'minus';
    $request->site->directorySiteIdDimensionValue->id = '198eea44-5279-42bc-9440-ea98becce048';
    $request->site->directorySiteIdDimensionValue->kind = 'nisi';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'necessitatibus';
    $request->site->id = 'perferendis';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'repellendus';
    $request->site->idDimensionValue->etag = 'ipsam';
    $request->site->idDimensionValue->id = '6d73b005-503e-48dc-a26f-f77c65675f5b';
    $request->site->idDimensionValue->kind = 'reprehenderit';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'recusandae';
    $request->site->keyName = 'consectetur';
    $request->site->kind = 'vero';
    $request->site->name = 'Jacquelyn Williamson';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'dolorum';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::DEFAULT;
    $request->site->subaccountId = 'necessitatibus';
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
    $request->site->videoSettings->companionSettings->kind = 'veniam';
    $request->site->videoSettings->kind = 'qui';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'aliquid';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'sed';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'modi';
    $request->site->videoSettings->obaSettings->program = 'at';
    $request->site->videoSettings->obaSettings->resourceUrl = 'aperiam';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 5037;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'aut';
    $request->site->videoSettings->obaSettings->size->kind = 'quae';
    $request->site->videoSettings->obaSettings->size->width = 272438;
    $request->site->videoSettings->obaSettings->xPosition = 'repudiandae';
    $request->site->videoSettings->obaSettings->yPosition = 'hic';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::ANY;
    $request->site->videoSettings->publisherSpecificationId = 'minima';
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'impedit';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 888573;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 657173;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 118122;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 112232;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        794929,
        328577,
        207391,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'debitis';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'nostrum';
    $request->key = 'corrupti';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->profileId = 'tenetur';
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'voluptatem';

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
    $request->accessToken = 'quae';
    $request->adWordsSite = false;
    $request->alt = AltEnum::JSON;
    $request->approved = false;
    $request->callback = 'placeat';
    $request->campaignIds = [
        'cum',
        'sint',
    ];
    $request->directorySiteIds = [
        'quod',
        'voluptates',
        'debitis',
    ];
    $request->fields = 'non';
    $request->ids = [
        'perferendis',
    ];
    $request->key = 'mollitia';
    $request->maxResults = 914691;
    $request->oauthToken = 'provident';
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->profileId = 'unde';
    $request->quotaUser = 'magni';
    $request->searchString = 'minus';
    $request->sortField = DfareportingSitesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingSitesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'architecto';
    $request->unmappedSite = false;
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'ipsa';

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
    $request->site->accountId = 'nemo';
    $request->site->approved = false;
    $request->site->directorySiteId = 'a';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'architecto';
    $request->site->directorySiteIdDimensionValue->etag = 'pariatur';
    $request->site->directorySiteIdDimensionValue->id = '14718c6f-a2fa-4d0c-86c5-d95472cdd14f';
    $request->site->directorySiteIdDimensionValue->kind = 'porro';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->directorySiteIdDimensionValue->value = 'nesciunt';
    $request->site->id = 'cum';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'in';
    $request->site->idDimensionValue->etag = 'quae';
    $request->site->idDimensionValue->id = 'bca88fa7-0c43-4351-83dd-1eb8f7f75f4f';
    $request->site->idDimensionValue->kind = 'aspernatur';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'doloribus';
    $request->site->keyName = 'quasi';
    $request->site->kind = 'cumque';
    $request->site->name = 'Isabel Herzog';
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
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'non';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::BOTH;
    $request->site->subaccountId = 'odio';
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
    $request->site->videoSettings->companionSettings->kind = 'reprehenderit';
    $request->site->videoSettings->kind = 'soluta';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'voluptas';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'odio';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'reiciendis';
    $request->site->videoSettings->obaSettings->program = 'officiis';
    $request->site->videoSettings->obaSettings->resourceUrl = 'voluptates';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 945188;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'veniam';
    $request->site->videoSettings->obaSettings->size->kind = 'officiis';
    $request->site->videoSettings->obaSettings->size->width = 64880;
    $request->site->videoSettings->obaSettings->xPosition = 'eius';
    $request->site->videoSettings->obaSettings->yPosition = 'quia';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::PORTRAIT;
    $request->site->videoSettings->publisherSpecificationId = 'perspiciatis';
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'exercitationem';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 724140;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 123268;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 863173;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 743623;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        808885,
        934820,
        986781,
        977742,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'iusto';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'quae';
    $request->id = '56e92782-75ee-4a76-8174-68063f799b79';
    $request->key = 'nemo';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->profileId = 'maxime';
    $request->quotaUser = 'quae';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatem';

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
    $request->site->accountId = 'mollitia';
    $request->site->approved = false;
    $request->site->directorySiteId = 'voluptatem';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'quidem';
    $request->site->directorySiteIdDimensionValue->etag = 'soluta';
    $request->site->directorySiteIdDimensionValue->id = '20a40e7c-4ae6-4406-8272-657b01a07c08';
    $request->site->directorySiteIdDimensionValue->kind = 'earum';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'sequi';
    $request->site->id = 'iste';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'magni';
    $request->site->idDimensionValue->etag = 'inventore';
    $request->site->idDimensionValue->id = 'c257930d-6f09-43a3-afa4-6d366dfa1011';
    $request->site->idDimensionValue->kind = 'id';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'unde';
    $request->site->keyName = 'et';
    $request->site->kind = 'cum';
    $request->site->name = 'Gwen Schaden';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'velit';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'dolores';
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
    $request->site->videoSettings->kind = 'illo';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'fuga';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'molestias';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'at';
    $request->site->videoSettings->obaSettings->program = 'vitae';
    $request->site->videoSettings->obaSettings->resourceUrl = 'aliquam';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 994055;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'debitis';
    $request->site->videoSettings->obaSettings->size->kind = 'reprehenderit';
    $request->site->videoSettings->obaSettings->size->width = 151916;
    $request->site->videoSettings->obaSettings->xPosition = 'voluptates';
    $request->site->videoSettings->obaSettings->yPosition = 'ipsam';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::ANY;
    $request->site->videoSettings->publisherSpecificationId = 'illo';
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'asperiores';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 611101;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 59303;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 242378;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 58922;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        823237,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'asperiores';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'laudantium';
    $request->key = 'velit';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->profileId = 'molestiae';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'hic';

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
