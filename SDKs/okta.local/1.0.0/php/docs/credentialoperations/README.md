# credentialOperations

### Available Operations

* [changePassword](#changepassword) - Change Password
* [changeRecoveryQuestion](#changerecoveryquestion) - Change Recovery Question
* [forgotPasswordOneTimeCode](#forgotpasswordonetimecode) - Forgot Password (One Time Code)
* [setRecoveryCredential](#setrecoverycredential) - Set Recovery Credential

## changePassword

Change Password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequestBodyNewPassword;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequestBodyOldPassword;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->requestBody = new ChangePasswordRequestBody();
    $request->requestBody->newPassword = new ChangePasswordRequestBodyNewPassword();
    $request->requestBody->newPassword->value = 'uTVM,TPw55';
    $request->requestBody->oldPassword = new ChangePasswordRequestBodyOldPassword();
    $request->requestBody->oldPassword->value = '{{password}}';
    $request->userId = 'ipsa';

    $response = $sdk->credentialOperations->changePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeRecoveryQuestion

Change Recovery Question

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeRecoveryQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangeRecoveryQuestionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ChangeRecoveryQuestionRequestBodyPassword;
use \OpenAPI\OpenAPI\Models\Operations\ChangeRecoveryQuestionRequestBodyRecoveryQuestion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeRecoveryQuestionRequest();
    $request->requestBody = new ChangeRecoveryQuestionRequestBody();
    $request->requestBody->password = new ChangeRecoveryQuestionRequestBodyPassword();
    $request->requestBody->password->value = '{{password}}';
    $request->requestBody->recoveryQuestion = new ChangeRecoveryQuestionRequestBodyRecoveryQuestion();
    $request->requestBody->recoveryQuestion->answer = 'My recovery credentials are updated';
    $request->requestBody->recoveryQuestion->question = 'What happens when I update my question';
    $request->userId = 'delectus';

    $response = $sdk->credentialOperations->changeRecoveryQuestion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forgotPasswordOneTimeCode

Forgot Password (One Time Code)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForgotPasswordOneTimeCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgotPasswordOneTimeCodeRequest();
    $request->requestBody = 'tempora';
    $request->sendEmail = 'false';
    $request->userId = 'suscipit';

    $response = $sdk->credentialOperations->forgotPasswordOneTimeCode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setRecoveryCredential

Set Recovery Credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetRecoveryCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetRecoveryCredentialRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetRecoveryCredentialRequestBodyCredentials;
use \OpenAPI\OpenAPI\Models\Operations\SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetRecoveryCredentialRequest();
    $request->requestBody = new SetRecoveryCredentialRequestBody();
    $request->requestBody->credentials = new SetRecoveryCredentialRequestBodyCredentials();
    $request->requestBody->credentials->recoveryQuestion = new SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion();
    $request->requestBody->credentials->recoveryQuestion->answer = 'Annie Oakley';
    $request->requestBody->credentials->recoveryQuestion->question = 'Who's a major player in the cowboy scene?';
    $request->userId = 'molestiae';

    $response = $sdk->credentialOperations->setRecoveryCredential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
