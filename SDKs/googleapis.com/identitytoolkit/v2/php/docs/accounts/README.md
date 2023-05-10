# accounts

### Available Operations

* [identitytoolkitAccountsMfaEnrollmentFinalize](#identitytoolkitaccountsmfaenrollmentfinalize) - Finishes enrolling a second factor for the user.
* [identitytoolkitAccountsMfaEnrollmentStart](#identitytoolkitaccountsmfaenrollmentstart) - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* [identitytoolkitAccountsMfaEnrollmentWithdraw](#identitytoolkitaccountsmfaenrollmentwithdraw) - Revokes one second factor from the enrolled second factors for an account.
* [identitytoolkitAccountsMfaSignInFinalize](#identitytoolkitaccountsmfasigninfinalize) - Verifies the MFA challenge and performs sign-in
* [identitytoolkitAccountsMfaSignInStart](#identitytoolkitaccountsmfasigninstart) - Sends the MFA challenge
* [identitytoolkitAccountsPasskeyEnrollmentFinalize](#identitytoolkitaccountspasskeyenrollmentfinalize) - Finishes enrolling a passkey credential for the user.
* [identitytoolkitAccountsPasskeyEnrollmentStart](#identitytoolkitaccountspasskeyenrollmentstart) - Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.
* [identitytoolkitAccountsPasskeySignInFinalize](#identitytoolkitaccountspasskeysigninfinalize) - Verifies the passkey assertion and signs the user in.
* [identitytoolkitAccountsPasskeySignInStart](#identitytoolkitaccountspasskeysigninstart) - Creates and returns the passkey challenge
* [identitytoolkitAccountsRevokeToken](#identitytoolkitaccountsrevoketoken) - Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

## identitytoolkitAccountsMfaEnrollmentFinalize

Finishes enrolling a second factor for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->displayName = 'minus';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->idToken = 'placeat';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->androidVerificationProof = 'voluptatum';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->code = 'iusto';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->phoneNumber = 'excepturi';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->phoneVerificationInfo->sessionInfo = 'nisi';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->tenantId = 'recusandae';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->sessionInfo = 'temporibus';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest->totpVerificationInfo->verificationCode = 'ab';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaEnrollmentFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsMfaEnrollmentStart

Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaEnrollmentStartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->idToken = 'at';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo = new GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->autoRetrievalInfo = new GoogleCloudIdentitytoolkitV2AutoRetrievalInfo();
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->autoRetrievalInfo->appSignatureHash = 'maiores';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->iosReceipt = 'molestiae';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->iosSecret = 'quod';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->phoneNumber = 'quod';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->playIntegrityToken = 'esse';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->recaptchaToken = 'totam';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->phoneEnrollmentInfo->safetyNetToken = 'porro';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->tenantId = 'dolorum';
    $request->googleCloudIdentitytoolkitV2StartMfaEnrollmentRequest->totpEnrollmentInfo = [
        'nam' => 'officia',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new IdentitytoolkitAccountsMfaEnrollmentStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaEnrollmentStart($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsMfaEnrollmentWithdraw

Revokes one second factor from the enrolled second factors for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2WithdrawMfaRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2WithdrawMfaRequest = new GoogleCloudIdentitytoolkitV2WithdrawMfaRequest();
    $request->googleCloudIdentitytoolkitV2WithdrawMfaRequest->idToken = 'qui';
    $request->googleCloudIdentitytoolkitV2WithdrawMfaRequest->mfaEnrollmentId = 'impedit';
    $request->googleCloudIdentitytoolkitV2WithdrawMfaRequest->tenantId = 'cum';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaEnrollmentWithdraw($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2WithdrawMfaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsMfaSignInFinalize

Verifies the MFA challenge and performs sign-in

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaSignInFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaSignInFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaSignInFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->mfaEnrollmentId = 'natus';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->mfaPendingCredential = 'laboriosam';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->phoneVerificationInfo->androidVerificationProof = 'hic';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->phoneVerificationInfo->code = 'saepe';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->phoneVerificationInfo->phoneNumber = 'fuga';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->phoneVerificationInfo->sessionInfo = 'in';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->tenantId = 'corporis';
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->totpVerificationInfo = new GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo();
    $request->googleCloudIdentitytoolkitV2FinalizeMfaSignInRequest->totpVerificationInfo->verificationCode = 'iste';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new IdentitytoolkitAccountsMfaSignInFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaSignInFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsMfaSignInStart

Sends the MFA challenge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaSignInStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartMfaSignInRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsMfaSignInStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsMfaSignInStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest = new GoogleCloudIdentitytoolkitV2StartMfaSignInRequest();
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->mfaEnrollmentId = 'dolorem';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->mfaPendingCredential = 'corporis';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo = new GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo();
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->autoRetrievalInfo = new GoogleCloudIdentitytoolkitV2AutoRetrievalInfo();
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->autoRetrievalInfo->appSignatureHash = 'explicabo';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->iosReceipt = 'nobis';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->iosSecret = 'enim';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->phoneNumber = 'omnis';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->playIntegrityToken = 'nemo';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->recaptchaToken = 'minima';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->phoneSignInInfo->safetyNetToken = 'excepturi';
    $request->googleCloudIdentitytoolkitV2StartMfaSignInRequest->tenantId = 'accusantium';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new IdentitytoolkitAccountsMfaSignInStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsMfaSignInStart($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2StartMfaSignInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsPasskeyEnrollmentFinalize

Finishes enrolling a passkey credential for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeyEnrollmentFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsPasskeyEnrollmentFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->authenticatorAttestationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->authenticatorAttestationResponse->attestationObject = 'mollitia';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->authenticatorAttestationResponse->clientDataJson = 'occaecati';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->authenticatorAttestationResponse->transports = [
        'commodi',
        'quam',
    ];
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->credentialId = 'molestiae';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->authenticatorRegistrationResponse->credentialType = 'velit';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->idToken = 'error';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest->tenantId = 'quia';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'tenetur';

    $requestSecurity = new IdentitytoolkitAccountsPasskeyEnrollmentFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsPasskeyEnrollmentFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsPasskeyEnrollmentStart

Step one of the passkey enrollment process. Returns a challenge and parameters for creation of the passkey credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeyEnrollmentStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeyEnrollmentStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsPasskeyEnrollmentStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest = new GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest();
    $request->googleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest->idToken = 'id';
    $request->googleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest->tenantId = 'possimus';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new IdentitytoolkitAccountsPasskeyEnrollmentStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsPasskeyEnrollmentStart($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsPasskeySignInFinalize

Verifies the passkey assertion and signs the user in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeySignInFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeySignInFinalizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsPasskeySignInFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest = new GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->authenticatorAssertionResponse = new GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse();
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->authenticatorAssertionResponse->authenticatorData = 'praesentium';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->authenticatorAssertionResponse->clientDataJson = 'voluptatibus';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->authenticatorAssertionResponse->signature = 'ipsa';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->authenticatorAssertionResponse->userHandle = 'omnis';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->credentialId = 'voluptate';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->authenticatorAuthenticationResponse->credentialType = 'cum';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->sessionId = 'perferendis';
    $request->googleCloudIdentitytoolkitV2FinalizePasskeySignInRequest->tenantId = 'doloremque';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new IdentitytoolkitAccountsPasskeySignInFinalizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsPasskeySignInFinalize($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2FinalizePasskeySignInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsPasskeySignInStart

Creates and returns the passkey challenge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeySignInStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsPasskeySignInStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsPasskeySignInStartRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIdentitytoolkitV2StartPasskeySignInRequest = new GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest();
    $request->googleCloudIdentitytoolkitV2StartPasskeySignInRequest->sessionId = 'accusamus';
    $request->googleCloudIdentitytoolkitV2StartPasskeySignInRequest->tenantId = 'commodi';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new IdentitytoolkitAccountsPasskeySignInStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsPasskeySignInStart($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2StartPasskeySignInResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitAccountsRevokeToken

Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsRevokeTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2RevokeTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitAccountsRevokeTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitAccountsRevokeTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest = new GoogleCloudIdentitytoolkitV2RevokeTokenRequest();
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->idToken = 'voluptates';
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->providerId = 'quasi';
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->redirectUri = 'repudiandae';
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->tenantId = 'sint';
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->token = 'veritatis';
    $request->googleCloudIdentitytoolkitV2RevokeTokenRequest->tokenType = GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenTypeEnum::CODE;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->key = 'quibusdam';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new IdentitytoolkitAccountsRevokeTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->identitytoolkitAccountsRevokeToken($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitV2RevokeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
