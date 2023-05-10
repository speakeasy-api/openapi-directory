# partners

### Available Operations

* [displayvideoPartnersBulkEditPartnerAssignedTargetingOptions](#displayvideopartnersbulkeditpartnerassignedtargetingoptions) - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [displayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [displayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [displayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

## displayvideoPartnersBulkEditPartnerAssignedTargetingOptions

Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditPartnerAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput = new BulkEditPartnerAssignedTargetingOptionsRequestInput();
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'accusantium';
    $request->key = 'perferendis';
    $request->oauthToken = 'veritatis';
    $request->partnerId = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersBulkEditPartnerAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditPartnerAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsCreate

Creates a new channel. Returns the newly created channel if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'nemo';
    $request->channelInput->displayName = 'recusandae';
    $request->channelInput->partnerId = 'velit';
    $request->accessToken = 'magnam';
    $request->advertiserId = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'odio';
    $request->key = 'natus';
    $request->oauthToken = 'provident';
    $request->partnerId = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DisplayvideoPartnersChannelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsCreate($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsList

Lists channels for a partner or advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->advertiserId = 'unde';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perspiciatis';
    $request->fields = 'hic';
    $request->filter = 'cum';
    $request->key = 'aspernatur';
    $request->oauthToken = 'libero';
    $request->orderBy = 'nam';
    $request->pageSize = 279172;
    $request->pageToken = 'recusandae';
    $request->partnerId = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DisplayvideoPartnersChannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsList($request, $requestSecurity);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsPatch

Updates a channel. Returns the updated channel if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'nesciunt';
    $request->channelInput->displayName = 'illum';
    $request->channelInput->partnerId = 'nemo';
    $request->accessToken = 'illum';
    $request->advertiserId = 'facilis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->channelId = 'assumenda';
    $request->fields = 'recusandae';
    $request->key = 'distinctio';
    $request->oauthToken = 'pariatur';
    $request->partnerId = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->updateMask = 'laborum';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DisplayvideoPartnersChannelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsPatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsSitesBulkEdit

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesBulkEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditSitesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesBulkEditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsSitesBulkEditRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditSitesRequestInput = new BulkEditSitesRequestInput();
    $request->bulkEditSitesRequestInput->advertiserId = 'maxime';
    $request->bulkEditSitesRequestInput->createdSites = [
        new SiteInput(),
        new SiteInput(),
    ];
    $request->bulkEditSitesRequestInput->deletedSites = [
        'suscipit',
    ];
    $request->bulkEditSitesRequestInput->partnerId = 'deserunt';
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->channelId = 'occaecati';
    $request->fields = 'labore';
    $request->key = 'quo';
    $request->oauthToken = 'perferendis';
    $request->partnerId = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new DisplayvideoPartnersChannelsSitesBulkEditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsSitesBulkEdit($request, $requestSecurity);

    if ($response->bulkEditSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsSitesDelete

Deletes a site from a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsSitesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->advertiserId = 'nostrum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->channelId = 'nulla';
    $request->fields = 'error';
    $request->key = 'mollitia';
    $request->oauthToken = 'magnam';
    $request->partnerId = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'fuga';
    $request->urlOrAppId = 'facere';

    $requestSecurity = new DisplayvideoPartnersChannelsSitesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsSitesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsSitesList

Lists sites in a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsSitesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->advertiserId = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->channelId = 'doloremque';
    $request->fields = 'voluptatem';
    $request->filter = 'facere';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'maxime';
    $request->orderBy = 'consequatur';
    $request->pageSize = 51007;
    $request->pageToken = 'architecto';
    $request->partnerId = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DisplayvideoPartnersChannelsSitesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsSitesList($request, $requestSecurity);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersChannelsSitesReplace

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceSitesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersChannelsSitesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersChannelsSitesReplaceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->replaceSitesRequestInput = new ReplaceSitesRequestInput();
    $request->replaceSitesRequestInput->advertiserId = 'officiis';
    $request->replaceSitesRequestInput->newSites = [
        new SiteInput(),
    ];
    $request->replaceSitesRequestInput->partnerId = 'necessitatibus';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->channelId = 'a';
    $request->fields = 'maiores';
    $request->key = 'laudantium';
    $request->oauthToken = 'maiores';
    $request->partnerId = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DisplayvideoPartnersChannelsSitesReplaceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersChannelsSitesReplace($request, $requestSecurity);

    if ($response->replaceSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersGet

Gets a partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'velit';
    $request->fields = 'eius';
    $request->key = 'esse';
    $request->oauthToken = 'in';
    $request->partnerId = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DisplayvideoPartnersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersGet($request, $requestSecurity);

    if ($response->partner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersList

Lists partners that are accessible to the current user. The order is defined by the order_by parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'beatae';
    $request->filter = 'incidunt';
    $request->key = 'dicta';
    $request->oauthToken = 'odit';
    $request->orderBy = 'corporis';
    $request->pageSize = 701441;
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new DisplayvideoPartnersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersList($request, $requestSecurity);

    if ($response->listPartnersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a partner. Returns the assigned targeting option if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->assignedTargetingOptionInput = new AssignedTargetingOptionInput();
    $request->assignedTargetingOptionInput->ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE3544;
    $request->assignedTargetingOptionInput->ageRangeDetails->targetingOptionId = 'ex';
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'quas';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'veritatis';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_ROKU;
    $request->assignedTargetingOptionInput->appDetails->negative = false;
    $request->assignedTargetingOptionInput->audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup->settings = [
        new FirstAndThirdPartyAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup = new CombinedAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup->settings = [
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup = new CustomListGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup->settings = [
        new CustomListTargetingSetting(),
        new CustomListTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedFirstAndThirdPartyAudienceGroups = [
        new FirstAndThirdPartyAudienceGroup(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_PODCAST;
    $request->assignedTargetingOptionInput->audioContentTypeDetails->targetingOptionId = 'omnis';
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'sed';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'nesciunt';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 8054.63;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_MILES;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'cupiditate';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'aliquam';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'excepturi';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'maiores';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'laudantium';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'velit';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_UNKNOWN;
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->targetingOptionId = 'amet';
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->targetingOptionId = 'ipsa';
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'quisquam';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::SUNDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 555294;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 476003;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_END_USER;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'asperiores';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_TABLET;
    $request->assignedTargetingOptionInput->deviceTypeDetails->targetingOptionId = 'nobis';
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedTargetingOptionId = 'perspiciatis';
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->environmentDetails->targetingOptionId = 'dicta';
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->targetingOptionId = 'minus';
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_MALE;
    $request->assignedTargetingOptionInput->genderDetails->targetingOptionId = 'eveniet';
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'porro';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
    $request->assignedTargetingOptionInput->householdIncomeDetails->targetingOptionId = 'quidem';
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'modi';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'voluptates';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'fugit';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'eius';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_UNKNOWN;
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->targetingOptionId = 'eligendi';
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'asperiores';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_UNSPECIFIED;
    $request->assignedTargetingOptionInput->omidDetails->targetingOptionId = 'blanditiis';
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'sint';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'repellat';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_UNKNOWN;
    $request->assignedTargetingOptionInput->parentalStatusDetails->targetingOptionId = 'animi';
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 9792.87;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'nulla';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'deserunt';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum::PROXIMITY_RADIUS_RANGE_SMALL;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'velit';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedTargetingOptionId = 'officiis';
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'enim';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::FRAUD,
        AdlooxExcludedAdlooxCategoriesEnum::ILLEGAL_CONTENT,
        AdlooxExcludedAdlooxCategoriesEnum::FRAUD,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE17_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::AGE_RATING_UNSPECIFIED,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE9_PLUS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::CRIMINAL_SKILLS,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::ADULT_CONTENT_PORNOGRAPHY,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ALCOHOL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NON_ENGLISH,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ALTERNATIVE_LIFESTYLES,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'magnam';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE65_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION15_SEC;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD10;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X30070;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY75_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIEWED_PERFORMANCE30_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'laborum',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY40;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ1000;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY40;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'ipsam';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'eaque';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->targetingOptionId = 'exercitationem';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_SMALL;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->targetingOptionId = 'nihil';
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY30_PERCENT_OR_MORE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quis';
    $request->fields = 'quibusdam';
    $request->key = 'nemo';
    $request->oauthToken = 'suscipit';
    $request->partnerId = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_INVENTORY_SOURCE;
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->assignedTargetingOptionId = 'possimus';
    $request->callback = 'repellat';
    $request->fields = 'repudiandae';
    $request->key = 'architecto';
    $request->oauthToken = 'adipisci';
    $request->partnerId = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_CONTENT_INSTREAM_POSITION;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'dolorum';
    $request->callback = 'velit';
    $request->fields = 'earum';
    $request->key = 'praesentium';
    $request->oauthToken = 'error';
    $request->partnerId = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_VIEWABILITY;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->fields = 'eaque';
    $request->filter = 'deserunt';
    $request->key = 'aliquid';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'magni';
    $request->pageSize = 273677;
    $request->pageToken = 'possimus';
    $request->partnerId = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_REGIONAL_LOCATION_LIST;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listPartnerAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
