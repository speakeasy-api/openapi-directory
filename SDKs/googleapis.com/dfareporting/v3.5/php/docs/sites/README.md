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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'cum';
    $request->id = '9af6ad05-486e-47b4-93cb-e2d176dc1c43';
    $request->key = 'pariatur';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->profileId = 'doloremque';
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'illo';

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
    $request->site->accountId = 'inventore';
    $request->site->approved = false;
    $request->site->directorySiteId = 'in';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'et';
    $request->site->directorySiteIdDimensionValue->etag = 'veritatis';
    $request->site->directorySiteIdDimensionValue->id = '57cbe5ee-4f72-4118-8077-2f32e3b49dbe';
    $request->site->directorySiteIdDimensionValue->kind = 'alias';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::WILDCARD_EXPRESSION;
    $request->site->directorySiteIdDimensionValue->value = 'fugit';
    $request->site->id = 'non';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'harum';
    $request->site->idDimensionValue->etag = 'voluptate';
    $request->site->idDimensionValue->id = 'b6d9948d-6ede-4d47-b680-fc7a17a82e5e';
    $request->site->idDimensionValue->kind = 'totam';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'delectus';
    $request->site->keyName = 'illum';
    $request->site->kind = 'consequuntur';
    $request->site->name = 'Mrs. Clint Breitenberg MD';
    $request->site->siteContacts = [
        new SiteContact(),
        new SiteContact(),
    ];
    $request->site->siteSettings = new SiteSettings();
    $request->site->siteSettings->activeViewOptOut = false;
    $request->site->siteSettings->adBlockingOptOut = false;
    $request->site->siteSettings->disableNewCookie = false;
    $request->site->siteSettings->tagSetting = new TagSetting();
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'debitis';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::DEFAULT;
    $request->site->subaccountId = 'ratione';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'qui';
    $request->site->videoSettings->kind = 'dolorum';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'distinctio';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'incidunt';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'quaerat';
    $request->site->videoSettings->obaSettings->program = 'eligendi';
    $request->site->videoSettings->obaSettings->resourceUrl = 'expedita';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 103328;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'totam';
    $request->site->videoSettings->obaSettings->size->kind = 'adipisci';
    $request->site->videoSettings->obaSettings->size->width = 366938;
    $request->site->videoSettings->obaSettings->xPosition = 'alias';
    $request->site->videoSettings->obaSettings->yPosition = 'aperiam';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'reiciendis';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 263436;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 380012;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 78067;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 789636;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        336692,
        198665,
        897785,
        567320,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'illo';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'rem';
    $request->key = 'animi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'libero';
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'nisi';

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
    $request->accessToken = 'similique';
    $request->adWordsSite = false;
    $request->alt = AltEnum::PROTO;
    $request->approved = false;
    $request->callback = 'pariatur';
    $request->campaignIds = [
        'temporibus',
        'officiis',
        'non',
        'veritatis',
    ];
    $request->directorySiteIds = [
        'porro',
    ];
    $request->fields = 'adipisci';
    $request->ids = [
        'possimus',
        'culpa',
    ];
    $request->key = 'animi';
    $request->maxResults = 611715;
    $request->oauthToken = 'sunt';
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'consequuntur';
    $request->quotaUser = 'laborum';
    $request->searchString = 'modi';
    $request->sortField = DfareportingSitesListSortFieldEnum::NAME;
    $request->sortOrder = DfareportingSitesListSortOrderEnum::DESCENDING;
    $request->subaccountId = 'sint';
    $request->unmappedSite = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'odit';

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
    $request->site->accountId = 'pariatur';
    $request->site->approved = false;
    $request->site->directorySiteId = 'amet';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'eligendi';
    $request->site->directorySiteIdDimensionValue->etag = 'laborum';
    $request->site->directorySiteIdDimensionValue->id = 'ffc198ee-a445-4279-abcd-440ea98becce';
    $request->site->directorySiteIdDimensionValue->kind = 'accusantium';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->directorySiteIdDimensionValue->value = 'voluptatum';
    $request->site->id = 'nisi';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'pariatur';
    $request->site->idDimensionValue->etag = 'necessitatibus';
    $request->site->idDimensionValue->id = '0d56d73b-0055-403e-8dc6-26ff77c65675';
    $request->site->idDimensionValue->kind = 'delectus';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::BEGINS_WITH;
    $request->site->idDimensionValue->value = 'harum';
    $request->site->keyName = 'reprehenderit';
    $request->site->kind = 'sit';
    $request->site->name = 'Vincent Thiel';
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
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'porro';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::FLASH;
    $request->site->subaccountId = 'dolorum';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'ab';
    $request->site->videoSettings->kind = 'necessitatibus';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'maxime';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'veniam';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'qui';
    $request->site->videoSettings->obaSettings->program = 'aliquid';
    $request->site->videoSettings->obaSettings->resourceUrl = 'sed';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 265082;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'at';
    $request->site->videoSettings->obaSettings->size->kind = 'aperiam';
    $request->site->videoSettings->obaSettings->size->width = 5037;
    $request->site->videoSettings->obaSettings->xPosition = 'aut';
    $request->site->videoSettings->obaSettings->yPosition = 'quae';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::ANY;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'repudiandae';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 941174;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 251555;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 324238;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 774339;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        657173,
        118122,
        112232,
        674670,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'minus';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'quidem';
    $request->id = 'b6587f34-0414-4c5b-9ace-e400ae9f92ca';
    $request->key = 'earum';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->profileId = 'nobis';
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'nemo';

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
    $request->site->accountId = 'architecto';
    $request->site->approved = false;
    $request->site->directorySiteId = 'pariatur';
    $request->site->directorySiteIdDimensionValue = new DimensionValue();
    $request->site->directorySiteIdDimensionValue->dimensionName = 'vitae';
    $request->site->directorySiteIdDimensionValue->etag = 'magnam';
    $request->site->directorySiteIdDimensionValue->id = '718c6fa2-fad0-4c06-85d9-5472cdd14fc4';
    $request->site->directorySiteIdDimensionValue->kind = 'nesciunt';
    $request->site->directorySiteIdDimensionValue->matchType = DimensionValueMatchTypeEnum::CONTAINS;
    $request->site->directorySiteIdDimensionValue->value = 'in';
    $request->site->id = 'quae';
    $request->site->idDimensionValue = new DimensionValue();
    $request->site->idDimensionValue->dimensionName = 'distinctio';
    $request->site->idDimensionValue->etag = 'maxime';
    $request->site->idDimensionValue->id = 'a88fa70c-4335-41c3-9d1e-b8f7f75f4f23';
    $request->site->idDimensionValue->kind = 'doloribus';
    $request->site->idDimensionValue->matchType = DimensionValueMatchTypeEnum::EXACT;
    $request->site->idDimensionValue->value = 'cumque';
    $request->site->keyName = 'eaque';
    $request->site->kind = 'error';
    $request->site->name = 'Deanna Johnson';
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
    $request->site->siteSettings->tagSetting->additionalKeyValues = 'repudiandae';
    $request->site->siteSettings->tagSetting->includeClickThroughUrls = false;
    $request->site->siteSettings->tagSetting->includeClickTracking = false;
    $request->site->siteSettings->tagSetting->keywordOption = TagSettingKeywordOptionEnum::IGNORE;
    $request->site->siteSettings->videoActiveViewOptOutTemplate = false;
    $request->site->siteSettings->vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum::BOTH;
    $request->site->subaccountId = 'reprehenderit';
    $request->site->videoSettings = new SiteVideoSettings();
    $request->site->videoSettings->companionSettings = new SiteCompanionSetting();
    $request->site->videoSettings->companionSettings->companionsDisabled = false;
    $request->site->videoSettings->companionSettings->enabledSizes = [
        new Size(),
        new Size(),
        new Size(),
    ];
    $request->site->videoSettings->companionSettings->imageOnly = false;
    $request->site->videoSettings->companionSettings->kind = 'voluptas';
    $request->site->videoSettings->kind = 'odio';
    $request->site->videoSettings->obaEnabled = false;
    $request->site->videoSettings->obaSettings = new ObaIcon();
    $request->site->videoSettings->obaSettings->iconClickThroughUrl = 'reiciendis';
    $request->site->videoSettings->obaSettings->iconClickTrackingUrl = 'officiis';
    $request->site->videoSettings->obaSettings->iconViewTrackingUrl = 'voluptates';
    $request->site->videoSettings->obaSettings->program = 'tenetur';
    $request->site->videoSettings->obaSettings->resourceUrl = 'veniam';
    $request->site->videoSettings->obaSettings->size = new Size();
    $request->site->videoSettings->obaSettings->size->height = 887672;
    $request->site->videoSettings->obaSettings->size->iab = false;
    $request->site->videoSettings->obaSettings->size->id = 'quae';
    $request->site->videoSettings->obaSettings->size->kind = 'eius';
    $request->site->videoSettings->obaSettings->size->width = 155534;
    $request->site->videoSettings->obaSettings->xPosition = 'pariatur';
    $request->site->videoSettings->obaSettings->yPosition = 'perspiciatis';
    $request->site->videoSettings->orientation = SiteVideoSettingsOrientationEnum::LANDSCAPE;
    $request->site->videoSettings->skippableSettings = new SiteSkippableSetting();
    $request->site->videoSettings->skippableSettings->kind = 'nam';
    $request->site->videoSettings->skippableSettings->progressOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->progressOffset->offsetPercentage = 123268;
    $request->site->videoSettings->skippableSettings->progressOffset->offsetSeconds = 863173;
    $request->site->videoSettings->skippableSettings->skipOffset = new VideoOffset();
    $request->site->videoSettings->skippableSettings->skipOffset->offsetPercentage = 743623;
    $request->site->videoSettings->skippableSettings->skipOffset->offsetSeconds = 909717;
    $request->site->videoSettings->skippableSettings->skippable = false;
    $request->site->videoSettings->transcodeSettings = new SiteTranscodeSetting();
    $request->site->videoSettings->transcodeSettings->enabledVideoFormats = [
        934820,
        986781,
        977742,
        480957,
    ];
    $request->site->videoSettings->transcodeSettings->kind = 'quo';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'quis';
    $request->key = 'commodi';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->profileId = 'occaecati';
    $request->quotaUser = 'odit';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'corrupti';

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
