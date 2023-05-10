# bidders

### Available Operations

* [realtimebiddingBiddersCreativesWatch](#realtimebiddingbidderscreativeswatch) - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* [realtimebiddingBiddersEndpointsList](#realtimebiddingbiddersendpointslist) - Lists all the bidder's endpoints.
* [realtimebiddingBiddersList](#realtimebiddingbidderslist) - Lists all the bidder accounts that belong to the caller.
* [realtimebiddingBiddersPretargetingConfigsActivate](#realtimebiddingbidderspretargetingconfigsactivate) - Activates a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedApps](#realtimebiddingbidderspretargetingconfigsaddtargetedapps) - Adds targeted apps to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers](#realtimebiddingbidderspretargetingconfigsaddtargetedpublishers) - Adds targeted publishers to the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedSites](#realtimebiddingbidderspretargetingconfigsaddtargetedsites) - Adds targeted sites to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsCreate](#realtimebiddingbidderspretargetingconfigscreate) - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* [realtimebiddingBiddersPretargetingConfigsDelete](#realtimebiddingbidderspretargetingconfigsdelete) - Deletes a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsList](#realtimebiddingbidderspretargetingconfigslist) - Lists all pretargeting configurations for a single bidder.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps](#realtimebiddingbidderspretargetingconfigsremovetargetedapps) - Removes targeted apps from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers](#realtimebiddingbidderspretargetingconfigsremovetargetedpublishers) - Removes targeted publishers from the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites](#realtimebiddingbidderspretargetingconfigsremovetargetedsites) - Removes targeted sites from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsSuspend](#realtimebiddingbidderspretargetingconfigssuspend) - Suspends a pretargeting configuration.
* [realtimebiddingBiddersPublisherConnectionsBatchApprove](#realtimebiddingbidderspublisherconnectionsbatchapprove) - Batch approves multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsBatchReject](#realtimebiddingbidderspublisherconnectionsbatchreject) - Batch rejects multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsList](#realtimebiddingbidderspublisherconnectionslist) - Lists publisher connections for a given bidder.

## realtimebiddingBiddersCreativesWatch

Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersCreativesWatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersCreativesWatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersCreativesWatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new RealtimebiddingBiddersCreativesWatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersCreativesWatch($request, $requestSecurity);

    if ($response->watchCreativesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersEndpointsList

Lists all the bidder's endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersEndpointsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersEndpointsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersEndpointsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->pageSize = 473608;
    $request->pageToken = 'quod';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new RealtimebiddingBiddersEndpointsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersEndpointsList($request, $requestSecurity);

    if ($response->listEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersList

Lists all the bidder accounts that belong to the caller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->oauthToken = 'deleniti';
    $request->pageSize = 944669;
    $request->pageToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new RealtimebiddingBiddersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersList($request, $requestSecurity);

    if ($response->listBiddersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsActivate

Activates a pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsActivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'qui' => 'impedit',
        'cum' => 'esse',
    ];
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->name = 'Louis Moore';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsActivate($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedApps

Adds targeted apps to the pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedAppsRequestTargetingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addTargetedAppsRequest = new AddTargetedAppsRequest();
    $request->addTargetedAppsRequest->appIds = [
        'iste',
        'iure',
    ];
    $request->addTargetedAppsRequest->targetingMode = AddTargetedAppsRequestTargetingModeEnum::EXCLUSIVE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->pretargetingConfig = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsAddTargetedApps($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers

Adds targeted publishers to the pretargeting config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedPublishersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedPublishersRequestTargetingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addTargetedPublishersRequest = new AddTargetedPublishersRequest();
    $request->addTargetedPublishersRequest->publisherIds = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->addTargetedPublishersRequest->targetingMode = AddTargetedPublishersRequestTargetingModeEnum::INCLUSIVE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->oauthToken = 'architecto';
    $request->pretargetingConfig = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedSites

Adds targeted sites to the pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedSitesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTargetedSitesRequestTargetingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addTargetedSitesRequest = new AddTargetedSitesRequest();
    $request->addTargetedSitesRequest->sites = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->addTargetedSitesRequest->targetingMode = AddTargetedSitesRequestTargetingModeEnum::INCLUSIVE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->pretargetingConfig = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsAddTargetedSites($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsCreate

Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigAllowedUserTargetingModesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppTargeting;
use \OpenAPI\OpenAPI\Models\Shared\NumericTargetingDimension;
use \OpenAPI\OpenAPI\Models\Shared\StringTargetingDimension;
use \OpenAPI\OpenAPI\Models\Shared\StringTargetingDimensionTargetingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeDimensions;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigIncludedEnvironmentsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigIncludedFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigIncludedPlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigIncludedUserIdTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\PretargetingConfigInterstitialTargetingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->pretargetingConfigInput = new PretargetingConfigInput();
    $request->pretargetingConfigInput->allowedUserTargetingModes = [
        PretargetingConfigAllowedUserTargetingModesEnum::INTEREST_BASED_TARGETING,
    ];
    $request->pretargetingConfigInput->appTargeting = new AppTargeting();
    $request->pretargetingConfigInput->appTargeting->mobileAppCategoryTargeting = new NumericTargetingDimension();
    $request->pretargetingConfigInput->appTargeting->mobileAppCategoryTargeting->excludedIds = [
        'id',
        'possimus',
    ];
    $request->pretargetingConfigInput->appTargeting->mobileAppCategoryTargeting->includedIds = [
        'quasi',
    ];
    $request->pretargetingConfigInput->appTargeting->mobileAppTargeting = new StringTargetingDimension();
    $request->pretargetingConfigInput->appTargeting->mobileAppTargeting->targetingMode = StringTargetingDimensionTargetingModeEnum::INCLUSIVE;
    $request->pretargetingConfigInput->appTargeting->mobileAppTargeting->values = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->pretargetingConfigInput->displayName = 'vero';
    $request->pretargetingConfigInput->excludedContentLabelIds = [
        'praesentium',
        'voluptatibus',
    ];
    $request->pretargetingConfigInput->geoTargeting = new NumericTargetingDimension();
    $request->pretargetingConfigInput->geoTargeting->excludedIds = [
        'omnis',
    ];
    $request->pretargetingConfigInput->geoTargeting->includedIds = [
        'cum',
        'perferendis',
    ];
    $request->pretargetingConfigInput->includedCreativeDimensions = [
        new CreativeDimensions(),
    ];
    $request->pretargetingConfigInput->includedEnvironments = [
        PretargetingConfigIncludedEnvironmentsEnum::ENVIRONMENT_UNSPECIFIED,
        PretargetingConfigIncludedEnvironmentsEnum::WEB,
    ];
    $request->pretargetingConfigInput->includedFormats = [
        PretargetingConfigIncludedFormatsEnum::HTML,
    ];
    $request->pretargetingConfigInput->includedLanguages = [
        'iusto',
        'dicta',
    ];
    $request->pretargetingConfigInput->includedMobileOperatingSystemIds = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->pretargetingConfigInput->includedPlatforms = [
        PretargetingConfigIncludedPlatformsEnum::PLATFORM_UNSPECIFIED,
        PretargetingConfigIncludedPlatformsEnum::PERSONAL_COMPUTER,
        PretargetingConfigIncludedPlatformsEnum::TABLET,
        PretargetingConfigIncludedPlatformsEnum::PHONE,
    ];
    $request->pretargetingConfigInput->includedUserIdTypes = [
        PretargetingConfigIncludedUserIdTypesEnum::DEVICE_ID,
        PretargetingConfigIncludedUserIdTypesEnum::HOSTED_MATCH_DATA,
        PretargetingConfigIncludedUserIdTypesEnum::GOOGLE_COOKIE,
    ];
    $request->pretargetingConfigInput->interstitialTargeting = PretargetingConfigInterstitialTargetingEnum::ONLY_INTERSTITIAL_REQUESTS;
    $request->pretargetingConfigInput->maximumQps = 'voluptates';
    $request->pretargetingConfigInput->minimumViewabilityDecile = 93940;
    $request->pretargetingConfigInput->publisherTargeting = new StringTargetingDimension();
    $request->pretargetingConfigInput->publisherTargeting->targetingMode = StringTargetingDimensionTargetingModeEnum::EXCLUSIVE;
    $request->pretargetingConfigInput->publisherTargeting->values = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->pretargetingConfigInput->userListTargeting = new NumericTargetingDimension();
    $request->pretargetingConfigInput->userListTargeting->excludedIds = [
        'consequatur',
        'est',
    ];
    $request->pretargetingConfigInput->userListTargeting->includedIds = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->pretargetingConfigInput->verticalTargeting = new NumericTargetingDimension();
    $request->pretargetingConfigInput->verticalTargeting->excludedIds = [
        'modi',
        'qui',
    ];
    $request->pretargetingConfigInput->verticalTargeting->includedIds = [
        'cupiditate',
        'quos',
    ];
    $request->pretargetingConfigInput->webTargeting = new StringTargetingDimension();
    $request->pretargetingConfigInput->webTargeting->targetingMode = StringTargetingDimensionTargetingModeEnum::TARGETING_MODE_UNSPECIFIED;
    $request->pretargetingConfigInput->webTargeting->values = [
        'assumenda',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->oauthToken = 'tempora';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsCreate($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsDelete

Deletes a pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->name = 'Perry Nikolaus';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'in';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsList

Lists all pretargeting configurations for a single bidder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->pageSize = 411820;
    $request->pageToken = 'aliquid';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsList($request, $requestSecurity);

    if ($response->listPretargetingConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps

Removes targeted apps from the pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTargetedAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeTargetedAppsRequest = new RemoveTargetedAppsRequest();
    $request->removeTargetedAppsRequest->appIds = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->pretargetingConfig = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers

Removes targeted publishers from the pretargeting config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTargetedPublishersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeTargetedPublishersRequest = new RemoveTargetedPublishersRequest();
    $request->removeTargetedPublishersRequest->publisherIds = [
        'nihil',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->pretargetingConfig = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites

Removes targeted sites from the pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTargetedSitesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeTargetedSitesRequest = new RemoveTargetedSitesRequest();
    $request->removeTargetedSitesRequest->sites = [
        'magnam',
    ];
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->oauthToken = 'sint';
    $request->pretargetingConfig = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPretargetingConfigsSuspend

Suspends a pretargeting configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsSuspendRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPretargetingConfigsSuspendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPretargetingConfigsSuspendRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->name = 'Alfredo Prosacco Sr.';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new RealtimebiddingBiddersPretargetingConfigsSuspendSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPretargetingConfigsSuspend($request, $requestSecurity);

    if ($response->pretargetingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPublisherConnectionsBatchApprove

Batch approves multiple publisher connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchApprovePublisherConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchApprovePublisherConnectionsRequest = new BatchApprovePublisherConnectionsRequest();
    $request->batchApprovePublisherConnectionsRequest->names = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'magni';
    $request->key = 'sunt';
    $request->oauthToken = 'quo';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPublisherConnectionsBatchApprove($request, $requestSecurity);

    if ($response->batchApprovePublisherConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPublisherConnectionsBatchReject

Batch rejects multiple publisher connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRejectPublisherConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchRejectPublisherConnectionsRequest = new BatchRejectPublisherConnectionsRequest();
    $request->batchRejectPublisherConnectionsRequest->names = [
        'ea',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->parent = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPublisherConnectionsBatchReject($request, $requestSecurity);

    if ($response->batchRejectPublisherConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## realtimebiddingBiddersPublisherConnectionsList

Lists publisher connections for a given bidder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RealtimebiddingBiddersPublisherConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RealtimebiddingBiddersPublisherConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->filter = 'aut';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->orderBy = 'hic';
    $request->pageSize = 729991;
    $request->pageToken = 'nobis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new RealtimebiddingBiddersPublisherConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bidders->realtimebiddingBiddersPublisherConnectionsList($request, $requestSecurity);

    if ($response->listPublisherConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
