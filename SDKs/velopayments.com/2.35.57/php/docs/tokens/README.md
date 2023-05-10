# tokens

## Overview

<p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
<p>Tokens have an expiry and are one-time use only</p>


### Available Operations

* [resendToken](#resendtoken) - Resend a token

## resendToken

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendTokenRequestTokenTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendTokenRequest();
    $request->resendTokenRequest = new ResendTokenRequest();
    $request->resendTokenRequest->tokenType = ResendTokenRequestTokenTypeEnum::INVITE_MFA_USER;
    $request->resendTokenRequest->verificationCode = '123456';
    $request->userId = 'ec09ff8f-0f81-46ff-b477-c13e902c1412';

    $response = $sdk->tokens->resendToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
