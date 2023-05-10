# relyingparty

### Available Operations

* [identitytoolkitRelyingpartyCreateAuthUri](#identitytoolkitrelyingpartycreateauthuri) - Creates the URI used by the IdP to authenticate the user.
* [identitytoolkitRelyingpartyDeleteAccount](#identitytoolkitrelyingpartydeleteaccount) - Delete user account.
* [identitytoolkitRelyingpartyDownloadAccount](#identitytoolkitrelyingpartydownloadaccount) - Batch download user accounts.
* [identitytoolkitRelyingpartyEmailLinkSignin](#identitytoolkitrelyingpartyemaillinksignin) - Reset password for a user.
* [identitytoolkitRelyingpartyGetAccountInfo](#identitytoolkitrelyingpartygetaccountinfo) - Returns the account info.
* [identitytoolkitRelyingpartyGetOobConfirmationCode](#identitytoolkitrelyingpartygetoobconfirmationcode) - Get a code for user action confirmation.
* [identitytoolkitRelyingpartyGetProjectConfig](#identitytoolkitrelyingpartygetprojectconfig) - Get project configuration.
* [identitytoolkitRelyingpartyGetPublicKeys](#identitytoolkitrelyingpartygetpublickeys) - Get token signing public key.
* [identitytoolkitRelyingpartyGetRecaptchaParam](#identitytoolkitrelyingpartygetrecaptchaparam) - Get recaptcha secure param.
* [identitytoolkitRelyingpartyResetPassword](#identitytoolkitrelyingpartyresetpassword) - Reset password for a user.
* [identitytoolkitRelyingpartySendVerificationCode](#identitytoolkitrelyingpartysendverificationcode) - Send SMS verification code.
* [identitytoolkitRelyingpartySetAccountInfo](#identitytoolkitrelyingpartysetaccountinfo) - Set account info for a user.
* [identitytoolkitRelyingpartySetProjectConfig](#identitytoolkitrelyingpartysetprojectconfig) - Set project configuration.
* [identitytoolkitRelyingpartySignOutUser](#identitytoolkitrelyingpartysignoutuser) - Sign out user.
* [identitytoolkitRelyingpartySignupNewUser](#identitytoolkitrelyingpartysignupnewuser) - Signup new user.
* [identitytoolkitRelyingpartyUploadAccount](#identitytoolkitrelyingpartyuploadaccount) - Batch upload existing user accounts.
* [identitytoolkitRelyingpartyVerifyAssertion](#identitytoolkitrelyingpartyverifyassertion) - Verifies the assertion returned by the IdP.
* [identitytoolkitRelyingpartyVerifyCustomToken](#identitytoolkitrelyingpartyverifycustomtoken) - Verifies the developer asserted ID token.
* [identitytoolkitRelyingpartyVerifyPassword](#identitytoolkitrelyingpartyverifypassword) - Verifies the user entered password.
* [identitytoolkitRelyingpartyVerifyPhoneNumber](#identitytoolkitrelyingpartyverifyphonenumber) - Verifies ownership of a phone number and creates/updates the user account accordingly.

## identitytoolkitRelyingpartyCreateAuthUri

Creates the URI used by the IdP to authenticate the user.

### Example Usage

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
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->appId = 'quis';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->authFlowType = 'veritatis';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->clientId = 'deserunt';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->context = 'perferendis';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->continueUri = 'ipsam';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->customParameter = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->hostedDomain = 'quod';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->identifier = 'esse';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthConsumerKey = 'totam';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->oauthScope = 'porro';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->openidRealm = 'dolorum';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->otaApp = 'dicta';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->providerId = 'nam';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->sessionId = 'officia';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantId = 'occaecati';
    $request->identitytoolkitRelyingpartyCreateAuthUriRequest->tenantProjectNumber = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->userIp = 'beatae';

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

## identitytoolkitRelyingpartyDeleteAccount

Delete user account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDeleteAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyDeleteAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDeleteAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyDeleteAccountRequest();
    $request->identitytoolkitRelyingpartyDeleteAccountRequest = new IdentitytoolkitRelyingpartyDeleteAccountRequest();
    $request->identitytoolkitRelyingpartyDeleteAccountRequest->delegatedProjectNumber = 'commodi';
    $request->identitytoolkitRelyingpartyDeleteAccountRequest->idToken = 'molestiae';
    $request->identitytoolkitRelyingpartyDeleteAccountRequest->localId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->fields = 'qui';
    $request->key = 'impedit';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->userIp = 'ipsum';

    $requestSecurity = new IdentitytoolkitRelyingpartyDeleteAccountSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyDeleteAccount($request, $requestSecurity);

    if ($response->deleteAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyDownloadAccount

Batch download user accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDownloadAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyDownloadAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDownloadAccountSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyDownloadAccountRequest();
    $request->identitytoolkitRelyingpartyDownloadAccountRequest = new IdentitytoolkitRelyingpartyDownloadAccountRequest();
    $request->identitytoolkitRelyingpartyDownloadAccountRequest->delegatedProjectNumber = 'excepturi';
    $request->identitytoolkitRelyingpartyDownloadAccountRequest->maxResults = 135218;
    $request->identitytoolkitRelyingpartyDownloadAccountRequest->nextPageToken = 'perferendis';
    $request->identitytoolkitRelyingpartyDownloadAccountRequest->targetProjectId = 'ad';
    $request->alt = AltEnum::JSON;
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->userIp = 'natus';

    $requestSecurity = new IdentitytoolkitRelyingpartyDownloadAccountSecurity();
    $requestSecurity->option1 = new IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyDownloadAccount($request, $requestSecurity);

    if ($response->downloadAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyEmailLinkSignin

Reset password for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyEmailLinkSigninSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyEmailLinkSigninRequest();
    $request->identitytoolkitRelyingpartyEmailLinkSigninRequest = new IdentitytoolkitRelyingpartyEmailLinkSigninRequest();
    $request->identitytoolkitRelyingpartyEmailLinkSigninRequest->email = 'Tyra.Turcotte35@yahoo.com';
    $request->identitytoolkitRelyingpartyEmailLinkSigninRequest->idToken = 'iste';
    $request->identitytoolkitRelyingpartyEmailLinkSigninRequest->oobCode = 'iure';
    $request->alt = AltEnum::JSON;
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->userIp = 'reiciendis';

    $requestSecurity = new IdentitytoolkitRelyingpartyEmailLinkSigninSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyEmailLinkSignin($request, $requestSecurity);

    if ($response->emailLinkSigninResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyGetAccountInfo

Returns the account info.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetAccountInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyGetAccountInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetAccountInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyGetAccountInfoRequest();
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest = new IdentitytoolkitRelyingpartyGetAccountInfoRequest();
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest->delegatedProjectNumber = 'est';
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest->email = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest->idToken = 'corporis';
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest->localId = [
        'nobis',
    ];
    $request->identitytoolkitRelyingpartyGetAccountInfoRequest->phoneNumber = [
        'omnis',
        'nemo',
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'culpa';

    $requestSecurity = new IdentitytoolkitRelyingpartyGetAccountInfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyGetAccountInfo($request, $requestSecurity);

    if ($response->getAccountInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyGetOobConfirmationCode

Get a code for user action confirmation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Relyingparty;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest();
    $request->relyingparty = new Relyingparty();
    $request->relyingparty->androidInstallApp = false;
    $request->relyingparty->androidMinimumVersion = 'doloribus';
    $request->relyingparty->androidPackageName = 'sapiente';
    $request->relyingparty->canHandleCodeInApp = false;
    $request->relyingparty->captchaResp = 'architecto';
    $request->relyingparty->challenge = 'mollitia';
    $request->relyingparty->continueUrl = 'dolorem';
    $request->relyingparty->email = 'Caroline_Ziemann@yahoo.com';
    $request->relyingparty->iOSAppStoreId = 'numquam';
    $request->relyingparty->iOSBundleId = 'commodi';
    $request->relyingparty->idToken = 'quam';
    $request->relyingparty->kind = 'molestiae';
    $request->relyingparty->newEmail = 'velit';
    $request->relyingparty->requestType = 'error';
    $request->relyingparty->userIp = 'quia';
    $request->alt = AltEnum::JSON;
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->userIp = 'enim';

    $requestSecurity = new IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyGetOobConfirmationCode($request, $requestSecurity);

    if ($response->getOobConfirmationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyGetProjectConfig

Get project configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetProjectConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetProjectConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyGetProjectConfigRequest();
    $request->alt = AltEnum::JSON;
    $request->delegatedProjectNumber = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->projectNumber = 'ipsam';
    $request->quotaUser = 'id';
    $request->userIp = 'possimus';

    $requestSecurity = new IdentitytoolkitRelyingpartyGetProjectConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyGetProjectConfig($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartyGetProjectConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyGetPublicKeys

Get token signing public key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetPublicKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetPublicKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyGetPublicKeysRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->userIp = 'laborum';

    $requestSecurity = new IdentitytoolkitRelyingpartyGetPublicKeysSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyGetPublicKeys($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartyGetPublicKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyGetRecaptchaParam

Get recaptcha secure param.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetRecaptchaParamRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyGetRecaptchaParamRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->userIp = 'nihil';

    $requestSecurity = new IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyGetRecaptchaParam($request, $requestSecurity);

    if ($response->getRecaptchaParamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyResetPassword

Reset password for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyResetPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyResetPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyResetPasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyResetPasswordRequest();
    $request->identitytoolkitRelyingpartyResetPasswordRequest = new IdentitytoolkitRelyingpartyResetPasswordRequest();
    $request->identitytoolkitRelyingpartyResetPasswordRequest->email = 'Whitney.Bednar@yahoo.com';
    $request->identitytoolkitRelyingpartyResetPasswordRequest->newPassword = 'cum';
    $request->identitytoolkitRelyingpartyResetPasswordRequest->oldPassword = 'perferendis';
    $request->identitytoolkitRelyingpartyResetPasswordRequest->oobCode = 'doloremque';
    $request->alt = AltEnum::JSON;
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->userIp = 'corporis';

    $requestSecurity = new IdentitytoolkitRelyingpartyResetPasswordSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyResetPassword($request, $requestSecurity);

    if ($response->resetPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartySendVerificationCode

Send SMS verification code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySendVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartySendVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySendVerificationCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartySendVerificationCodeRequest();
    $request->identitytoolkitRelyingpartySendVerificationCodeRequest = new IdentitytoolkitRelyingpartySendVerificationCodeRequest();
    $request->identitytoolkitRelyingpartySendVerificationCodeRequest->iosReceipt = 'dolore';
    $request->identitytoolkitRelyingpartySendVerificationCodeRequest->iosSecret = 'iusto';
    $request->identitytoolkitRelyingpartySendVerificationCodeRequest->phoneNumber = 'dicta';
    $request->identitytoolkitRelyingpartySendVerificationCodeRequest->recaptchaToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->userIp = 'quae';

    $requestSecurity = new IdentitytoolkitRelyingpartySendVerificationCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartySendVerificationCode($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartySendVerificationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartySetAccountInfo

Set account info for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySetAccountInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartySetAccountInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySetAccountInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartySetAccountInfoRequest();
    $request->identitytoolkitRelyingpartySetAccountInfoRequest = new IdentitytoolkitRelyingpartySetAccountInfoRequest();
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->captchaChallenge = 'ipsum';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->captchaResponse = 'quidem';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->createdAt = 'molestias';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->customAttributes = 'excepturi';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->delegatedProjectNumber = 'pariatur';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->deleteAttribute = [
        'praesentium',
        'rem',
    ];
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->deleteProvider = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->disableUser = false;
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->displayName = 'itaque';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->email = 'Emily_Altenwerth13@gmail.com';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->emailVerified = false;
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->idToken = 'deserunt';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->instanceId = 'distinctio';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->lastLoginAt = 'quibusdam';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->localId = 'labore';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->oobCode = 'modi';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->password = 'qui';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->phoneNumber = 'aliquid';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->photoUrl = 'cupiditate';
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->provider = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->returnSecureToken = false;
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->upgradeToFederatedLogin = false;
    $request->identitytoolkitRelyingpartySetAccountInfoRequest->validSince = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->userIp = 'tempora';

    $requestSecurity = new IdentitytoolkitRelyingpartySetAccountInfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartySetAccountInfo($request, $requestSecurity);

    if ($response->setAccountInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartySetProjectConfig

Set project configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySetProjectConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartySetProjectConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmailTemplate;
use \OpenAPI\OpenAPI\Models\Shared\IdpConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySetProjectConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartySetProjectConfigRequest();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest = new IdentitytoolkitRelyingpartySetProjectConfigRequest();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->allowPasswordUser = false;
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->apiKey = 'facilis';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->authorizedDomains = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate = new EmailTemplate();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->body = 'non';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->format = 'eligendi';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->from = 'sint';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->fromDisplayName = 'aliquid';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->replyTo = 'provident';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->changeEmailTemplate->subject = 'necessitatibus';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->delegatedProjectNumber = 'sint';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->enableAnonymousUser = false;
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->idpConfig = [
        new IdpConfig(),
        new IdpConfig(),
        new IdpConfig(),
    ];
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate = new EmailTemplate();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->body = 'dolor';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->format = 'debitis';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->from = 'a';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->fromDisplayName = 'dolorum';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->replyTo = 'in';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->legacyResetPasswordTemplate->subject = 'in';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate = new EmailTemplate();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->body = 'illum';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->format = 'maiores';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->from = 'rerum';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->fromDisplayName = 'dicta';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->replyTo = 'magnam';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->resetPasswordTemplate->subject = 'cumque';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->useEmailSending = false;
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate = new EmailTemplate();
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->body = 'facere';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->format = 'ea';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->from = 'aliquid';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->fromDisplayName = 'laborum';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->replyTo = 'accusamus';
    $request->identitytoolkitRelyingpartySetProjectConfigRequest->verifyEmailTemplate->subject = 'non';
    $request->alt = AltEnum::JSON;
    $request->fields = 'occaecati';
    $request->key = 'enim';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->userIp = 'quidem';

    $requestSecurity = new IdentitytoolkitRelyingpartySetProjectConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartySetProjectConfig($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartySetProjectConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartySignOutUser

Sign out user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySignOutUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartySignOutUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySignOutUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartySignOutUserRequest();
    $request->identitytoolkitRelyingpartySignOutUserRequest = new IdentitytoolkitRelyingpartySignOutUserRequest();
    $request->identitytoolkitRelyingpartySignOutUserRequest->instanceId = 'provident';
    $request->identitytoolkitRelyingpartySignOutUserRequest->localId = 'nam';
    $request->alt = AltEnum::JSON;
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->userIp = 'amet';

    $requestSecurity = new IdentitytoolkitRelyingpartySignOutUserSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartySignOutUser($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartySignOutUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartySignupNewUser

Signup new user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySignupNewUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartySignupNewUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartySignupNewUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartySignupNewUserRequest();
    $request->identitytoolkitRelyingpartySignupNewUserRequest = new IdentitytoolkitRelyingpartySignupNewUserRequest();
    $request->identitytoolkitRelyingpartySignupNewUserRequest->captchaChallenge = 'deserunt';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->captchaResponse = 'nisi';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->disabled = false;
    $request->identitytoolkitRelyingpartySignupNewUserRequest->displayName = 'vel';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->email = 'Lenna47@yahoo.com';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->emailVerified = false;
    $request->identitytoolkitRelyingpartySignupNewUserRequest->idToken = 'magnam';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->instanceId = 'distinctio';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->localId = 'id';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->password = 'labore';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->phoneNumber = 'labore';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->photoUrl = 'suscipit';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->tenantId = 'natus';
    $request->identitytoolkitRelyingpartySignupNewUserRequest->tenantProjectNumber = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->fields = 'eum';
    $request->key = 'vero';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->userIp = 'magnam';

    $requestSecurity = new IdentitytoolkitRelyingpartySignupNewUserSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartySignupNewUser($request, $requestSecurity);

    if ($response->signupNewUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyUploadAccount

Batch upload existing user accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyUploadAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyUploadAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserInfo;
use \OpenAPI\OpenAPI\Models\Shared\UserInfoProviderUserInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyUploadAccountSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyUploadAccountRequest();
    $request->identitytoolkitRelyingpartyUploadAccountRequest = new IdentitytoolkitRelyingpartyUploadAccountRequest();
    $request->identitytoolkitRelyingpartyUploadAccountRequest->allowOverwrite = false;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->blockSize = 92373;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->cpuMemCost = 569965;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->delegatedProjectNumber = 'ullam';
    $request->identitytoolkitRelyingpartyUploadAccountRequest->dkLen = 590873;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->hashAlgorithm = 'quos';
    $request->identitytoolkitRelyingpartyUploadAccountRequest->memoryCost = 574325;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->parallelization = 33625;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->rounds = 653201;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->saltSeparator = 'reiciendis';
    $request->identitytoolkitRelyingpartyUploadAccountRequest->sanityCheck = false;
    $request->identitytoolkitRelyingpartyUploadAccountRequest->signerKey = 'mollitia';
    $request->identitytoolkitRelyingpartyUploadAccountRequest->targetProjectId = 'ad';
    $request->identitytoolkitRelyingpartyUploadAccountRequest->users = [
        new UserInfo(),
        new UserInfo(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->userIp = 'quasi';

    $requestSecurity = new IdentitytoolkitRelyingpartyUploadAccountSecurity();
    $requestSecurity->option1 = new IdentitytoolkitRelyingpartyUploadAccountSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyUploadAccount($request, $requestSecurity);

    if ($response->uploadAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyVerifyAssertion

Verifies the assertion returned by the IdP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyAssertionRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyVerifyAssertionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyAssertionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyVerifyAssertionRequest();
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest = new IdentitytoolkitRelyingpartyVerifyAssertionRequest();
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->autoCreate = false;
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->delegatedProjectNumber = 'iure';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->idToken = 'doloribus';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->instanceId = 'debitis';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->pendingIdToken = 'eius';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->postBody = 'maxime';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->requestUri = 'deleniti';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->returnIdpCredential = false;
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->returnRefreshToken = false;
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->returnSecureToken = false;
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->sessionId = 'facilis';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->tenantId = 'in';
    $request->identitytoolkitRelyingpartyVerifyAssertionRequest->tenantProjectNumber = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->userIp = 'nihil';

    $requestSecurity = new IdentitytoolkitRelyingpartyVerifyAssertionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyVerifyAssertion($request, $requestSecurity);

    if ($response->verifyAssertionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyVerifyCustomToken

Verifies the developer asserted ID token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyVerifyCustomTokenRequest();
    $request->identitytoolkitRelyingpartyVerifyCustomTokenRequest = new IdentitytoolkitRelyingpartyVerifyCustomTokenRequest();
    $request->identitytoolkitRelyingpartyVerifyCustomTokenRequest->delegatedProjectNumber = 'repellat';
    $request->identitytoolkitRelyingpartyVerifyCustomTokenRequest->instanceId = 'quibusdam';
    $request->identitytoolkitRelyingpartyVerifyCustomTokenRequest->returnSecureToken = false;
    $request->identitytoolkitRelyingpartyVerifyCustomTokenRequest->token = 'sed';
    $request->alt = AltEnum::JSON;
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->userIp = 'praesentium';

    $requestSecurity = new IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyVerifyCustomToken($request, $requestSecurity);

    if ($response->verifyCustomTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyVerifyPassword

Verifies the user entered password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyVerifyPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyPasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyVerifyPasswordRequest();
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest = new IdentitytoolkitRelyingpartyVerifyPasswordRequest();
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->captchaChallenge = 'natus';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->captchaResponse = 'magni';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->delegatedProjectNumber = 'sunt';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->email = 'Rosendo.Streich56@hotmail.com';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->idToken = 'odit';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->instanceId = 'ea';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->password = 'accusantium';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->pendingIdToken = 'ab';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->returnSecureToken = false;
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->tenantId = 'maiores';
    $request->identitytoolkitRelyingpartyVerifyPasswordRequest->tenantProjectNumber = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsam';
    $request->key = 'voluptate';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->userIp = 'eaque';

    $requestSecurity = new IdentitytoolkitRelyingpartyVerifyPasswordSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyVerifyPassword($request, $requestSecurity);

    if ($response->verifyPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## identitytoolkitRelyingpartyVerifyPhoneNumber

Verifies ownership of a phone number and creates/updates the user account accordingly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest();
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest = new IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest();
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->code = 'pariatur';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->idToken = 'nemo';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->operation = 'voluptatibus';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->phoneNumber = 'perferendis';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->sessionInfo = 'fugiat';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->temporaryProof = 'amet';
    $request->identitytoolkitRelyingpartyVerifyPhoneNumberRequest->verificationProof = 'aut';
    $request->alt = AltEnum::JSON;
    $request->fields = 'cumque';
    $request->key = 'corporis';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->userIp = 'nobis';

    $requestSecurity = new IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->relyingparty->identitytoolkitRelyingpartyVerifyPhoneNumber($request, $requestSecurity);

    if ($response->identitytoolkitRelyingpartyVerifyPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
