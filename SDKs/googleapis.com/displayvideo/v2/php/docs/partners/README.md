# partners

### Available Operations

* [displayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [displayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoPartnersEditAssignedTargetingOptions](#displayvideopartnerseditassignedtargetingoptions) - Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [displayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [displayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'voluptatum';
    $request->channelInput->displayName = 'sit';
    $request->channelInput->partnerId = 'rerum';
    $request->accessToken = 'veritatis';
    $request->advertiserId = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'deserunt';
    $request->partnerId = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'animi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->advertiserId = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'maxime';
    $request->filter = 'aliquam';
    $request->key = 'iste';
    $request->oauthToken = 'ullam';
    $request->orderBy = 'eligendi';
    $request->pageSize = 810302;
    $request->pageToken = 'voluptas';
    $request->partnerId = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'libero';
    $request->channelInput->displayName = 'ipsam';
    $request->channelInput->partnerId = 'quasi';
    $request->accessToken = 'cumque';
    $request->advertiserId = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->channelId = 'facilis';
    $request->fields = 'beatae';
    $request->key = 'cumque';
    $request->oauthToken = 'delectus';
    $request->partnerId = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->updateMask = 'corrupti';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'atque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditSitesRequestInput = new BulkEditSitesRequestInput();
    $request->bulkEditSitesRequestInput->advertiserId = 'cum';
    $request->bulkEditSitesRequestInput->createdSites = [
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
    ];
    $request->bulkEditSitesRequestInput->deletedSites = [
        'quo',
        'incidunt',
        'quod',
        'minus',
    ];
    $request->bulkEditSitesRequestInput->partnerId = 'porro';
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->channelId = 'libero';
    $request->fields = 'quo';
    $request->key = 'esse';
    $request->oauthToken = 'hic';
    $request->partnerId = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'fugit';

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
    $request->accessToken = 'eligendi';
    $request->advertiserId = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->channelId = 'laudantium';
    $request->fields = 'iusto';
    $request->key = 'dolor';
    $request->oauthToken = 'voluptates';
    $request->partnerId = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'doloremque';
    $request->urlOrAppId = 'voluptatem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->advertiserId = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->channelId = 'blanditiis';
    $request->fields = 'nihil';
    $request->filter = 'atque';
    $request->key = 'rerum';
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'atque';
    $request->pageSize = 344856;
    $request->pageToken = 'atque';
    $request->partnerId = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'rem';

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
    $request->replaceSitesRequestInput->advertiserId = 'quae';
    $request->replaceSitesRequestInput->newSites = [
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
    ];
    $request->replaceSitesRequestInput->partnerId = 'placeat';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->channelId = 'saepe';
    $request->fields = 'delectus';
    $request->key = 'officia';
    $request->oauthToken = 'natus';
    $request->partnerId = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'doloribus';

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

## displayvideoPartnersEditAssignedTargetingOptions

Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersEditAssignedTargetingOptionsRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoPartnersEditAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoPartnersEditAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput = new BulkEditPartnerAssignedTargetingOptionsRequestInput();
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditPartnerAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'eum';
    $request->key = 'nemo';
    $request->oauthToken = 'illum';
    $request->partnerId = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DisplayvideoPartnersEditAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->displayvideoPartnersEditAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditPartnerAssignedTargetingOptionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->fields = 'dicta';
    $request->key = 'fugit';
    $request->oauthToken = 'sit';
    $request->partnerId = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'deleniti';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'aliquam';
    $request->filter = 'deserunt';
    $request->key = 'modi';
    $request->oauthToken = 'sunt';
    $request->orderBy = 'impedit';
    $request->pageSize = 259600;
    $request->pageToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'dolorem';

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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
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
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE2534;
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'inventore';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'sequi';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_IOS;
    $request->assignedTargetingOptionInput->appDetails->negative = false;
    $request->assignedTargetingOptionInput->audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup->settings = [
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup = new CombinedAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup->settings = [
        new CombinedAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup = new CustomListGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup->settings = [
        new CustomListTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedFirstAndThirdPartyAudienceGroups = [
        new FirstAndThirdPartyAudienceGroup(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'nulla';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'enim';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 735.74;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'delectus';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'numquam';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'optio';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'nobis';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'ex';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'repellat';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_IN_BANNER;
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'expedita';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::SUNDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 569834;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 396610;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'beatae';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_SMART_PHONE;
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum::CONTENT_RATING_TIER_GENERAL;
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_WEB_NOT_OPTIMIZED;
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum::EXCHANGE_KARGO;
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_UNKNOWN;
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'dignissimos';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_TOP41_TO50_PERCENT;
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'animi';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'laudantium';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'esse';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'eveniet';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_RECOMMENDATION;
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'velit';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_FOR_MOBILE_DISPLAY_ADS;
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'eius';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'rerum';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_UNKNOWN;
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 4896.85;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_MILES;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'explicabo';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'impedit';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadius = 3970.14;
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum::PROXIMITY_RADIUS_UNIT_MILES;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'facilis';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum::SENSITIVE_CATEGORY_WEAPONS;
    $request->assignedTargetingOptionInput->sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sessionPositionDetails->sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum::SESSION_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'quaerat';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::BORDERLINE_CONTENT,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE4_POINT5_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE12_PLUS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::GRAPHIC_VIOLENCE_WEAPONS,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::CRIMINAL_SKILLS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::PARKING_PAGE,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::DISASTER_VEHICLE,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::DISASTER_NATURAL,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'enim';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE40_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD2;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X30070;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY75_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIDEO_VIEWABLE_RATE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'illum',
        'rem',
        'tenetur',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY50;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ600;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY70;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'facere';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'quisquam';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_HD;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY30_PERCENT_OR_MORE;
    $request->assignedTargetingOptionInput->youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeChannelDetails->channelId = 'dolorum';
    $request->assignedTargetingOptionInput->youtubeChannelDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeVideoDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails->videoId = 'deserunt';
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'porro';
    $request->key = 'laborum';
    $request->oauthToken = 'nobis';
    $request->partnerId = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_UNSPECIFIED;
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'officia';

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
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->assignedTargetingOptionId = 'necessitatibus';
    $request->callback = 'accusantium';
    $request->fields = 'ad';
    $request->key = 'nisi';
    $request->oauthToken = 'molestiae';
    $request->partnerId = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_REGIONAL_LOCATION_LIST;
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'nesciunt';
    $request->callback = 'ipsa';
    $request->fields = 'sint';
    $request->key = 'dolore';
    $request->oauthToken = 'esse';
    $request->partnerId = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_YOUTUBE_VIDEO;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->filter = 'quod';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'non';
    $request->pageSize = 353819;
    $request->pageToken = 'laborum';
    $request->partnerId = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->targetingType = DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_LANGUAGE;
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'corporis';

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
