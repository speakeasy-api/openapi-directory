# enterprises

### Available Operations

* [androidenterpriseEnterprisesAcknowledgeNotificationSet](#androidenterpriseenterprisesacknowledgenotificationset) - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
* [androidenterpriseEnterprisesCompleteSignup](#androidenterpriseenterprisescompletesignup) - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
* [androidenterpriseEnterprisesCreateEnrollmentToken](#androidenterpriseenterprisescreateenrollmenttoken) - Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
* [androidenterpriseEnterprisesCreateWebToken](#androidenterpriseenterprisescreatewebtoken) - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
* [androidenterpriseEnterprisesEnroll](#androidenterpriseenterprisesenroll) - Enrolls an enterprise with the calling EMM.
* [androidenterpriseEnterprisesGenerateSignupUrl](#androidenterpriseenterprisesgeneratesignupurl) - Generates a sign-up URL.
* [androidenterpriseEnterprisesGet](#androidenterpriseenterprisesget) - Retrieves the name and domain of an enterprise.
* [androidenterpriseEnterprisesGetServiceAccount](#androidenterpriseenterprisesgetserviceaccount) - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
* [androidenterpriseEnterprisesGetStoreLayout](#androidenterpriseenterprisesgetstorelayout) - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
* [androidenterpriseEnterprisesList](#androidenterpriseenterpriseslist) - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
* [androidenterpriseEnterprisesPullNotificationSet](#androidenterpriseenterprisespullnotificationset) - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
* [androidenterpriseEnterprisesSendTestPushNotification](#androidenterpriseenterprisessendtestpushnotification) - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
* [androidenterpriseEnterprisesSetAccount](#androidenterpriseenterprisessetaccount) - Sets the account that will be used to authenticate to the API as the enterprise.
* [androidenterpriseEnterprisesSetStoreLayout](#androidenterpriseenterprisessetstorelayout) - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
* [androidenterpriseEnterprisesUnenroll](#androidenterpriseenterprisesunenroll) - Unenrolls an enterprise from the calling EMM.

## androidenterpriseEnterprisesAcknowledgeNotificationSet

Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->notificationSetId = 'commodi';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'error';

    $requestSecurity = new AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesAcknowledgeNotificationSet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesCompleteSignup

Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesCompleteSignupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->completionToken = 'animi';
    $request->enterpriseToken = 'enim';
    $request->fields = 'odit';
    $request->key = 'quo';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new AndroidenterpriseEnterprisesCompleteSignupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesCompleteSignup($request, $requestSecurity);

    if ($response->enterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesCreateEnrollmentToken

Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->deviceType = AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum::KNOWLEDGE_WORKER;
    $request->enterpriseId = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesCreateEnrollmentToken($request, $requestSecurity);

    if ($response->createEnrollmentTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesCreateWebToken

Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpec;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecManagedConfigurations;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecPlaySearch;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecPrivateApps;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecStoreBuilder;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecWebApps;
use \OpenAPI\OpenAPI\Models\Shared\AdministratorWebTokenSpecZeroTouch;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesCreateWebTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->administratorWebTokenSpec = new AdministratorWebTokenSpec();
    $request->administratorWebTokenSpec->managedConfigurations = new AdministratorWebTokenSpecManagedConfigurations();
    $request->administratorWebTokenSpec->managedConfigurations->enabled = false;
    $request->administratorWebTokenSpec->parent = 'ipsa';
    $request->administratorWebTokenSpec->permission = [
        AdministratorWebTokenSpecPermissionEnum::APPROVE_APPS,
        AdministratorWebTokenSpecPermissionEnum::MANAGE_MCM,
        AdministratorWebTokenSpecPermissionEnum::UNKNOWN,
    ];
    $request->administratorWebTokenSpec->playSearch = new AdministratorWebTokenSpecPlaySearch();
    $request->administratorWebTokenSpec->playSearch->approveApps = false;
    $request->administratorWebTokenSpec->playSearch->enabled = false;
    $request->administratorWebTokenSpec->privateApps = new AdministratorWebTokenSpecPrivateApps();
    $request->administratorWebTokenSpec->privateApps->enabled = false;
    $request->administratorWebTokenSpec->storeBuilder = new AdministratorWebTokenSpecStoreBuilder();
    $request->administratorWebTokenSpec->storeBuilder->enabled = false;
    $request->administratorWebTokenSpec->webApps = new AdministratorWebTokenSpecWebApps();
    $request->administratorWebTokenSpec->webApps->enabled = false;
    $request->administratorWebTokenSpec->zeroTouch = new AdministratorWebTokenSpecZeroTouch();
    $request->administratorWebTokenSpec->zeroTouch->enabled = false;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->enterpriseId = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new AndroidenterpriseEnterprisesCreateWebTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesCreateWebToken($request, $requestSecurity);

    if ($response->administratorWebToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesEnroll

Enrolls an enterprise with the calling EMM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Enterprise;
use \OpenAPI\OpenAPI\Models\Shared\Administrator;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAuthenticationSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesEnrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enterprise = new Enterprise();
    $request->enterprise->administrator = [
        new Administrator(),
        new Administrator(),
        new Administrator(),
        new Administrator(),
    ];
    $request->enterprise->googleAuthenticationSettings = new GoogleAuthenticationSettings();
    $request->enterprise->googleAuthenticationSettings->dedicatedDevicesAllowed = GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum::DISALLOWED;
    $request->enterprise->googleAuthenticationSettings->googleAuthenticationRequired = GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum::REQUIRED;
    $request->enterprise->id = '13b99d48-8e1e-491e-850a-d2abd4426980';
    $request->enterprise->name = 'Mr. Nadine Hills';
    $request->enterprise->primaryDomain = 'excepturi';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->token = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AndroidenterpriseEnterprisesEnrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesEnroll($request, $requestSecurity);

    if ($response->enterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesGenerateSignupUrl

Generates a sign-up URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesGenerateSignupUrlRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->callbackUrl = 'dolor';
    $request->fields = 'debitis';
    $request->key = 'a';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new AndroidenterpriseEnterprisesGenerateSignupUrlSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesGenerateSignupUrl($request, $requestSecurity);

    if ($response->signupInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesGet

Retrieves the name and domain of an enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->enterpriseId = 'cumque';
    $request->fields = 'facere';
    $request->key = 'ea';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';

    $requestSecurity = new AndroidenterpriseEnterprisesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesGet($request, $requestSecurity);

    if ($response->enterprise !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesGetServiceAccount

Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesGetServiceAccountRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->enterpriseId = 'quidem';
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->keyType = AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum::PKCS12;
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new AndroidenterpriseEnterprisesGetServiceAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesGetServiceAccount($request, $requestSecurity);

    if ($response->serviceAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesGetStoreLayout

Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesGetStoreLayoutRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->enterpriseId = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new AndroidenterpriseEnterprisesGetStoreLayoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesGetStoreLayout($request, $requestSecurity);

    if ($response->storeLayout !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesList

Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->domain = 'nobis';
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'et';

    $requestSecurity = new AndroidenterpriseEnterprisesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesList($request, $requestSecurity);

    if ($response->enterprisesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesPullNotificationSet

Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesPullNotificationSetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->requestMode = AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum::RETURN_IMMEDIATELY;
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AndroidenterpriseEnterprisesPullNotificationSetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesPullNotificationSet($request, $requestSecurity);

    if ($response->notificationSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesSendTestPushNotification

Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesSendTestPushNotificationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->enterpriseId = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new AndroidenterpriseEnterprisesSendTestPushNotificationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesSendTestPushNotification($request, $requestSecurity);

    if ($response->enterprisesSendTestPushNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesSetAccount

Sets the account that will be used to authenticate to the API as the enterprise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseAccount;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesSetAccountRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enterpriseAccount = new EnterpriseAccount();
    $request->enterpriseAccount->accountEmail = 'in';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->enterpriseId = 'ullam';
    $request->fields = 'expedita';
    $request->key = 'nihil';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new AndroidenterpriseEnterprisesSetAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesSetAccount($request, $requestSecurity);

    if ($response->enterpriseAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesSetStoreLayout

Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoreLayout;
use \OpenAPI\OpenAPI\Models\Shared\StoreLayoutStoreLayoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesSetStoreLayoutRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->storeLayout = new StoreLayout();
    $request->storeLayout->homepageId = 'accusantium';
    $request->storeLayout->storeLayoutType = StoreLayoutStoreLayoutTypeEnum::UNKNOWN;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->enterpriseId = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AndroidenterpriseEnterprisesSetStoreLayoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesSetStoreLayout($request, $requestSecurity);

    if ($response->storeLayout !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEnterprisesUnenroll

Unenrolls an enterprise from the calling EMM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEnterprisesUnenrollRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->enterpriseId = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new AndroidenterpriseEnterprisesUnenrollSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->enterprises->androidenterpriseEnterprisesUnenroll($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
