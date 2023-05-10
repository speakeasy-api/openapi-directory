# splash

### Available Operations

* [getNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [updateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID

## getNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessSsidSplashSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkWirelessSsidSplashSettingsRequest();
    $request->networkId = 'id';
    $request->number = 'amet';

    $response = $sdk->splash->getNetworkWirelessSsidSplashSettings($request);

    if ($response->getNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkWirelessSsidSplashSettingsRequest();
    $request->requestBody = new UpdateNetworkWirelessSsidSplashSettingsRequestBody();
    $request->requestBody->allowSimultaneousLogins = false;
    $request->requestBody->billing = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling();
    $request->requestBody->billing->freeAccess = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess();
    $request->requestBody->billing->freeAccess->durationInMinutes = 863273;
    $request->requestBody->billing->freeAccess->enabled = false;
    $request->requestBody->billing->prepaidAccessFastLoginEnabled = false;
    $request->requestBody->billing->replyToEmailAddress = 'iste';
    $request->requestBody->blockAllTrafficBeforeSignOn = false;
    $request->requestBody->controllerDisconnectionBehavior = UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum::DEFAULT;
    $request->requestBody->guestSponsorship = new UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship();
    $request->requestBody->guestSponsorship->durationInMinutes = 378600;
    $request->requestBody->guestSponsorship->guestCanRequestTimeframe = false;
    $request->requestBody->redirectUrl = 'hic';
    $request->requestBody->sentryEnrollment = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment();
    $request->requestBody->sentryEnrollment->enforcedSystems = [
        'officiis',
        'soluta',
    ];
    $request->requestBody->sentryEnrollment->strength = UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum::STRICT;
    $request->requestBody->sentryEnrollment->systemsManagerNetwork = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork();
    $request->requestBody->sentryEnrollment->systemsManagerNetwork->id = '5ad7ec73-94f2-45f6-b4b3-730714e6be8c';
    $request->requestBody->splashImage = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage();
    $request->requestBody->splashImage->extension = 'dolorem';
    $request->requestBody->splashImage->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage();
    $request->requestBody->splashImage->image->contents = 'debitis';
    $request->requestBody->splashImage->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnum::GIF;
    $request->requestBody->splashImage->md5 = 'perspiciatis';
    $request->requestBody->splashLogo = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo();
    $request->requestBody->splashLogo->extension = 'impedit';
    $request->requestBody->splashLogo->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage();
    $request->requestBody->splashLogo->image->contents = 'vel';
    $request->requestBody->splashLogo->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnum::GIF;
    $request->requestBody->splashLogo->md5 = 'quibusdam';
    $request->requestBody->splashPrepaidFront = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront();
    $request->requestBody->splashPrepaidFront->extension = 'dolorem';
    $request->requestBody->splashPrepaidFront->image = new UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage();
    $request->requestBody->splashPrepaidFront->image->contents = 'aliquam';
    $request->requestBody->splashPrepaidFront->image->format = UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnum::GIF;
    $request->requestBody->splashPrepaidFront->md5 = 'dolorum';
    $request->requestBody->splashTimeout = 808797;
    $request->requestBody->splashUrl = 'eos';
    $request->requestBody->useRedirectUrl = false;
    $request->requestBody->useSplashUrl = false;
    $request->requestBody->welcomeMessage = 'natus';
    $request->networkId = 'provident';
    $request->number = 'officia';

    $response = $sdk->splash->updateNetworkWirelessSsidSplashSettings($request);

    if ($response->updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
