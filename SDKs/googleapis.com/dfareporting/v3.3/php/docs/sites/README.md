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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'quae';
    $request->id = 'b4a4a425-3c30-4257-91f4-2c7e7dc548be';
    $request->key = 'sit';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->profileId = 'recusandae';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'fuga';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->site = new Site();
    $request->site->accountId = 'culpa';
    $request->site->approved = false;
    $request->site->directorySiteId = 'dolores';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'inventore';
    $request->site->directorySiteIdDimensionValue->etag = 'ipsam';
    $request->site->directorySiteIdDimensionValue->id = 'ca12a4ba-9d59-4988-992c-fd0c77c53e7e';
    $request->site->directorySiteIdDimensionValue->kind = 'dignissimos';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'eius';
    $request->site->id = 'accusamus';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'vero';
    $request->site->idDimensionValue->etag = 'nisi';
    $request->site->idDimensionValue->id = 'e8b90bac-384e-4239-a703-fec31c50824d';
    $request->site->idDimensionValue->kind = 'dicta';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->site->idDimensionValue->value = 'perspiciatis';
    $request->site->keyName = 'deserunt';
    $request->site->kind = 'dolor';
    $request->site->name = 'Molly Kertzmann DDS';
    $request->site->siteContacts = [
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'in';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::HTML5;
    $request->site->subaccountId = 'esse';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'nihil';
    $request->site->videoSettings->kind = 'similique';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'iure';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 14126;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 809072;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 532694;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 987890;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        292431,
        417304,
        894444,
        412604,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'beatae';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'quidem';
    $request->key = 'iste';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->profileId = 'nobis';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'dignissimos';

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
    $request->accessToken = 'voluptatibus';
    $request->adWordsSite = false;
    $request->alt = AltEnum::PROTO;
    $request->approved = false;
    $request->callback = 'cum';
    $request->campaignIds = [
        'nisi',
        'occaecati',
        'ducimus',
    ];
    $request->directorySiteIds = [
        'repudiandae',
    ];
    $request->fields = 'repudiandae';
    $request->ids = [
        'nihil',
        'ipsa',
    ];
    $request->key = 'eveniet';
    $request->maxResults = 204697;
    $request->oauthToken = 'autem';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->profileId = 'occaecati';
    $request->quotaUser = 'iusto';
    $request->searchString = 'debitis';
    $request->sortField = DfareportingSitesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingSitesListSortOrderEnum::ASCENDING;
    $request->subaccountId = 'maxime';
    $request->unmappedSite = false;
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'doloremque';

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
    $request->site->accountId = 'itaque';
    $request->site->approved = false;
    $request->site->directorySiteId = 'suscipit';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'vitae';
    $request->site->directorySiteIdDimensionValue->etag = 'tempore';
    $request->site->directorySiteIdDimensionValue->id = '0d308714-c20a-43d9-8637-ca85c3fe6557';
    $request->site->directorySiteIdDimensionValue->kind = 'ut';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'harum';
    $request->site->id = 'culpa';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'reiciendis';
    $request->site->idDimensionValue->etag = 'natus';
    $request->site->idDimensionValue->id = '4a7c98f1-3af2-48db-acf2-bf4f3ded356d';
    $request->site->idDimensionValue->kind = 'esse';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->idDimensionValue->value = 'sunt';
    $request->site->keyName = 'modi';
    $request->site->kind = 'tempore';
    $request->site->name = 'Teresa Rosenbaum';
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
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'beatae';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'assumenda';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'quis';
    $request->site->videoSettings->kind = 'id';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::PORTRAIT;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'autem';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 611802;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 648676;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 124242;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 799388;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        707073,
        496261,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'natus';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nesciunt';
    $request->fields = 'non';
    $request->id = '681c23c3-9a7c-40e1-bcb1-2c5ba825fe22';
    $request->key = 'quo';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->profileId = 'enim';
    $request->quotaUser = 'optio';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->site = new Site();
    $request->site->accountId = 'hic';
    $request->site->approved = false;
    $request->site->directorySiteId = 'nobis';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'repellat';
    $request->site->directorySiteIdDimensionValue->etag = 'necessitatibus';
    $request->site->directorySiteIdDimensionValue->id = 'c932af68-13d6-45bf-acec-2dd6916f7fc7';
    $request->site->directorySiteIdDimensionValue->kind = 'quibusdam';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'animi';
    $request->site->id = 'molestiae';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'ipsa';
    $request->site->idDimensionValue->etag = 'recusandae';
    $request->site->idDimensionValue->id = 'c60e6075-894d-461c-94cd-90227e37c0d9';
    $request->site->idDimensionValue->kind = 'reprehenderit';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->idDimensionValue->value = 'reiciendis';
    $request->site->keyName = 'et';
    $request->site->kind = 'culpa';
    $request->site->name = 'Miss Charlotte Morar';
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
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'provident';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'beatae';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'vitae';
    $request->site->videoSettings->kind = 'doloremque';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'fugiat';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 185321;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 190657;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 920954;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 33126;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        891921,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'voluptas';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'veniam';
    $request->key = 'similique';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->profileId = 'officiis';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'earum';

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
