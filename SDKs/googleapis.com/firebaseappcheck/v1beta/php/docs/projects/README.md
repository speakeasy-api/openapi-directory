# projects

### Available Operations

* [firebaseappcheckProjectsAppsAppAttestConfigBatchGet](#firebaseappcheckprojectsappsappattestconfigbatchget) - Atomically gets the AppAttestConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsDebugTokensCreate](#firebaseappcheckprojectsappsdebugtokenscreate) - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* [firebaseappcheckProjectsAppsDebugTokensDelete](#firebaseappcheckprojectsappsdebugtokensdelete) - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* [firebaseappcheckProjectsAppsDebugTokensList](#firebaseappcheckprojectsappsdebugtokenslist) - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* [firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet](#firebaseappcheckprojectsappsdevicecheckconfigbatchget) - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* [firebaseappcheckProjectsAppsExchangeAppAttestAssertion](#firebaseappcheckprojectsappsexchangeappattestassertion) - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeAppAttestAttestation](#firebaseappcheckprojectsappsexchangeappattestattestation) - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* [firebaseappcheckProjectsAppsExchangeCustomToken](#firebaseappcheckprojectsappsexchangecustomtoken) - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeDebugToken](#firebaseappcheckprojectsappsexchangedebugtoken) - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* [firebaseappcheckProjectsAppsExchangeDeviceCheckToken](#firebaseappcheckprojectsappsexchangedevicechecktoken) - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangePlayIntegrityToken](#firebaseappcheckprojectsappsexchangeplayintegritytoken) - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken](#firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken) - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaToken](#firebaseappcheckprojectsappsexchangerecaptchatoken) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaV3Token](#firebaseappcheckprojectsappsexchangerecaptchav3token) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeSafetyNetToken](#firebaseappcheckprojectsappsexchangesafetynettoken) - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsGenerateAppAttestChallenge](#firebaseappcheckprojectsappsgenerateappattestchallenge) - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge](#firebaseappcheckprojectsappsgenerateplayintegritychallenge) - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet](#firebaseappcheckprojectsappsplayintegrityconfigbatchget) - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaconfigbatchget) - Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet](#firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget) - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet](#firebaseappcheckprojectsappsrecaptchav3configbatchget) - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsSafetyNetConfigBatchGet](#firebaseappcheckprojectsappssafetynetconfigbatchget) - Atomically gets the SafetyNetConfigs for the specified list of apps.
* [firebaseappcheckProjectsServicesBatchUpdate](#firebaseappcheckprojectsservicesbatchupdate) - Atomically updates the specified Service configurations.
* [firebaseappcheckProjectsServicesGet](#firebaseappcheckprojectsservicesget) - Gets the Service configuration for the specified service name.
* [firebaseappcheckProjectsServicesList](#firebaseappcheckprojectsserviceslist) - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* [firebaseappcheckProjectsServicesPatch](#firebaseappcheckprojectsservicespatch) - Updates the specified Service configuration.
* [firebaseappcheckProjectsVerifyAppCheckToken](#firebaseappcheckprojectsverifyappchecktoken) - Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` will contain the value `false`. The given token will then be marked as `already_consumed` for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed.

## firebaseappcheckProjectsAppsAppAttestConfigBatchGet

Atomically gets the AppAttestConfigs for the specified list of apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->names = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->oauthToken = 'recusandae';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsAppAttestConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsDebugTokensCreate

Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaDebugToken;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsDebugTokensCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppcheckV1betaDebugToken = new GoogleFirebaseAppcheckV1betaDebugToken();
    $request->googleFirebaseAppcheckV1betaDebugToken->displayName = 'perferendis';
    $request->googleFirebaseAppcheckV1betaDebugToken->name = 'Estelle Will';
    $request->googleFirebaseAppcheckV1betaDebugToken->token = 'at';
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirebaseappcheckProjectsAppsDebugTokensCreateSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsDebugTokensCreate($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaDebugToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsDebugTokensDelete

Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsDebugTokensDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsDebugTokensDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsDebugTokensDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsDebugTokensList

Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDebugTokensListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsDebugTokensListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new FirebaseappcheckProjectsAppsDebugTokensListSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsDebugTokensListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsDebugTokensList($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaListDebugTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet

Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->names = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->oauthToken = 'est';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeAppAttestAssertion

Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest = new GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest();
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest->artifact = 'explicabo';
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest->assertion = 'nobis';
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest->challenge = 'enim';
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->app = 'minima';
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeAppAttestAssertion($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeAppAttestAttestation

Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest = new GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest();
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest->attestationStatement = 'dolorem';
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest->challenge = 'culpa';
    $request->googleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest->keyId = 'consequuntur';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->app = 'occaecati';
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeAppAttestAttestation($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeCustomToken

Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeCustomTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeCustomTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeCustomTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeCustomTokenRequest->customToken = 'vitae';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->app = 'enim';
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeCustomTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeCustomToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeDebugToken

Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDebugTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeDebugTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeDebugTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeDebugTokenRequest->debugToken = 'quasi';
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->app = 'laborum';
    $request->callback = 'quasi';
    $request->fields = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeDebugToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeDeviceCheckToken

Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest->deviceToken = 'omnis';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->app = 'perferendis';
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeDeviceCheckToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangePlayIntegrityToken

Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest = new GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest->playIntegrityToken = 'dicta';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->app = 'accusamus';
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangePlayIntegrityToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken

Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest->recaptchaEnterpriseToken = 'modi';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->app = 'voluptates';
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaToken

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest->recaptchaToken = 'est';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->app = 'deserunt';
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeRecaptchaToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeRecaptchaV3Token

Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest = new GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest->recaptchaV3Token = 'perferendis';
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->app = 'ipsam';
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeRecaptchaV3Token($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsExchangeSafetyNetToken

Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest = new GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest();
    $request->googleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest->safetyNetToken = 'delectus';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->app = 'eligendi';
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsExchangeSafetyNetToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaAppCheckToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsGenerateAppAttestChallenge

Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'dolorum' => 'in',
        'in' => 'illum',
        'maiores' => 'rerum',
        'dicta' => 'magnam',
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->app = 'ea';
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsGenerateAppAttestChallenge($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge

Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->app = 'nisi';
    $request->callback = 'vel';
    $request->fields = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet

Atomically gets the PlayIntegrityConfigs for the specified list of apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->names = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->oauthToken = 'architecto';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsRecaptchaConfigBatchGet

Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'mollitia';
    $request->key = 'reiciendis';
    $request->names = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsRecaptchaConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet

Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->names = [
        'architecto',
        'architecto',
    ];
    $request->oauthToken = 'repudiandae';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet

Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->names = [
        'natus',
        'magni',
        'sunt',
    ];
    $request->oauthToken = 'quo';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsAppsSafetyNetConfigBatchGet

Atomically gets the SafetyNetConfigs for the specified list of apps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->names = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->oauthToken = 'nam';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsSafetyNetConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsServicesBatchUpdate

Atomically updates the specified Service configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaUpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsServicesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaBatchUpdateServicesRequest = new GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest();
    $request->googleFirebaseAppcheckV1betaBatchUpdateServicesRequest->requests = [
        new GoogleFirebaseAppcheckV1betaUpdateServiceRequest(),
        new GoogleFirebaseAppcheckV1betaUpdateServiceRequest(),
        new GoogleFirebaseAppcheckV1betaUpdateServiceRequest(),
        new GoogleFirebaseAppcheckV1betaUpdateServiceRequest(),
    ];
    $request->googleFirebaseAppcheckV1betaBatchUpdateServicesRequest->updateMask = 'amet';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'hic';
    $request->key = 'libero';
    $request->oauthToken = 'nobis';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new FirebaseappcheckProjectsServicesBatchUpdateSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsServicesBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsServicesBatchUpdate($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaBatchUpdateServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsServicesGet

Gets the Service configuration for the specified service name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'perferendis';
    $request->key = 'dolores';
    $request->name = 'Darryl Fadel';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new FirebaseappcheckProjectsServicesGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsServicesGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsServicesList

Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequuntur';
    $request->fields = 'blanditiis';
    $request->key = 'error';
    $request->oauthToken = 'eaque';
    $request->pageSize = 577229;
    $request->pageToken = 'rerum';
    $request->parent = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new FirebaseappcheckProjectsServicesListSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsServicesList($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaListServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsServicesPatch

Updates the specified Service configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsServicesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirebaseAppcheckV1betaService = new GoogleFirebaseAppcheckV1betaService();
    $request->googleFirebaseAppcheckV1betaService->enforcementMode = GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum::ENFORCED;
    $request->googleFirebaseAppcheckV1betaService->name = 'Ervin McLaughlin';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->key = 'dolorem';
    $request->name = 'Rosa Dibbert';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->updateMask = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new FirebaseappcheckProjectsServicesPatchSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsServicesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsServicesPatch($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseappcheckProjectsVerifyAppCheckToken

Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` will contain the value `false`. The given token will then be marked as `already_consumed` for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsVerifyAppCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsVerifyAppCheckTokenSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseappcheckProjectsVerifyAppCheckTokenRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest = new GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest();
    $request->googleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest->appCheckToken = 'dolorum';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->key = 'iure';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new FirebaseappcheckProjectsVerifyAppCheckTokenSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsVerifyAppCheckTokenSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsVerifyAppCheckToken($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
