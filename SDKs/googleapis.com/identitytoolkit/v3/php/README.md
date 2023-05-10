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
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyCreateAuthUriRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyCreateAuthUriRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyCreateAuthUriSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyCreateAuthUriRequest();
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest = new IdentitytoolkitRelyingpartyCreateAuthUriRequest();
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->appId = 'corrupti';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->authFlowType = 'provident';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->clientId = 'distinctio';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->context = 'quibusdam';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->continueUri = 'unde';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->customParameter = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->hostedDomain = 'debitis';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->identifier = 'ipsa';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthConsumerKey = 'delectus';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthScope = 'tempora';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->openidRealm = 'suscipit';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->otaApp = 'molestiae';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->providerId = 'minus';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->sessionId = 'placeat';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantId = 'voluptatum';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantProjectNumber = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->userIp = 'ab';

    $requestSecurity = new IdentitytoolkitRelyingpartyCreateAuthUriSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyCreateAuthUri($request, $requestSecurity);

    if ($response->createAuthUriResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [relyingparty](docs/relyingparty/README.md)

* [identitytoolkitRelyingpartyCreateAuthUri](docs/relyingparty/README.md#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [identitytoolkitRelyingpartyDeleteAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [identitytoolkitRelyingpartyDownloadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [identitytoolkitRelyingpartyEmailLinkSignin](docs/relyingparty/README.md#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [identitytoolkitRelyingpartyGetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [identitytoolkitRelyingpartyGetOobConfirmationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [identitytoolkitRelyingpartyGetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [identitytoolkitRelyingpartyGetPublicKeys](docs/relyingparty/README.md#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [identitytoolkitRelyingpartyGetRecaptchaParam](docs/relyingparty/README.md#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [identitytoolkitRelyingpartyResetPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [identitytoolkitRelyingpartySendVerificationCode](docs/relyingparty/README.md#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [identitytoolkitRelyingpartySetAccountInfo](docs/relyingparty/README.md#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [identitytoolkitRelyingpartySetProjectConfig](docs/relyingparty/README.md#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [identitytoolkitRelyingpartySignOutUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [identitytoolkitRelyingpartySignupNewUser](docs/relyingparty/README.md#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [identitytoolkitRelyingpartyUploadAccount](docs/relyingparty/README.md#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [identitytoolkitRelyingpartyVerifyAssertion](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [identitytoolkitRelyingpartyVerifyCustomToken](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [identitytoolkitRelyingpartyVerifyPassword](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [identitytoolkitRelyingpartyVerifyPhoneNumber](docs/relyingparty/README.md#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
