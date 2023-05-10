# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->names = [
        'illum',
        'vel',
        'error',
    ];
    $request->oauthToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity();
    $requestSecurity->option1 = new FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseappcheckProjectsAppsAppAttestConfigBatchGet($request, $requestSecurity);

    if ($response->googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firebaseappcheckProjectsAppsAppAttestConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappsappattestconfigbatchget) - Atomically gets the AppAttestConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsDebugTokensCreate](docs/projects/README.md#firebaseappcheckprojectsappsdebugtokenscreate) - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
* [firebaseappcheckProjectsAppsDebugTokensDelete](docs/projects/README.md#firebaseappcheckprojectsappsdebugtokensdelete) - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
* [firebaseappcheckProjectsAppsDebugTokensList](docs/projects/README.md#firebaseappcheckprojectsappsdebugtokenslist) - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
* [firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappsdevicecheckconfigbatchget) - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
* [firebaseappcheckProjectsAppsExchangeAppAttestAssertion](docs/projects/README.md#firebaseappcheckprojectsappsexchangeappattestassertion) - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeAppAttestAttestation](docs/projects/README.md#firebaseappcheckprojectsappsexchangeappattestattestation) - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
* [firebaseappcheckProjectsAppsExchangeCustomToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangecustomtoken) - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeDebugToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangedebugtoken) - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
* [firebaseappcheckProjectsAppsExchangeDeviceCheckToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangedevicechecktoken) - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangePlayIntegrityToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangeplayintegritytoken) - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangerecaptchaenterprisetoken) - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeRecaptchaV3Token](docs/projects/README.md#firebaseappcheckprojectsappsexchangerecaptchav3token) - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsExchangeSafetyNetToken](docs/projects/README.md#firebaseappcheckprojectsappsexchangesafetynettoken) - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
* [firebaseappcheckProjectsAppsGenerateAppAttestChallenge](docs/projects/README.md#firebaseappcheckprojectsappsgenerateappattestchallenge) - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge](docs/projects/README.md#firebaseappcheckprojectsappsgenerateplayintegritychallenge) - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
* [firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappsplayintegrityconfigbatchget) - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappsrecaptchaenterpriseconfigbatchget) - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
* [firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappsrecaptchav3configbatchget) - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
* [firebaseappcheckProjectsAppsSafetyNetConfigBatchGet](docs/projects/README.md#firebaseappcheckprojectsappssafetynetconfigbatchget) - Atomically gets the SafetyNetConfigs for the specified list of apps.
* [firebaseappcheckProjectsServicesBatchUpdate](docs/projects/README.md#firebaseappcheckprojectsservicesbatchupdate) - Atomically updates the specified Service configurations.
* [firebaseappcheckProjectsServicesGet](docs/projects/README.md#firebaseappcheckprojectsservicesget) - Gets the Service configuration for the specified service name.
* [firebaseappcheckProjectsServicesList](docs/projects/README.md#firebaseappcheckprojectsserviceslist) - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
* [firebaseappcheckProjectsServicesPatch](docs/projects/README.md#firebaseappcheckprojectsservicespatch) - Updates the specified Service configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
