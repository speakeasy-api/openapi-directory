# payoutsAPI

### Available Operations

* [verifyPayout](#verifypayout) - Verify payout

## verifyPayout

This method is required to verify payouts by using your 2fa code.  
You’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.  
Payout will be processed only when it is verified.

Make sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).  
When 2fa is disabled, the code automatically goes to your registration email.  
The code sent by email is valid for one hour.

Next is a description of the required request fields:

- :batch-withdrawal-id - payout id you received in `2. Create payout` method
- verification_code - 2fa code you received with your Google Auth app or via email
    

In order to establish an automatic verification of payouts, you should switch 2FA through the application.  
There are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.  
e.g: Speakeasy for JavaScript.  
We do not recommend to change any default settings.  

```
const 2faVerificationCode = speakeasy.totp({
      your_2fa_secret_key,
      encoding: 'base32',
})
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VerifyPayoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\VerifyPayoutRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyPayoutRequest();
    $request->requestBody = new VerifyPayoutRequestBody();
    $request->requestBody->verificationCode = '123456';
    $request->withdrawalsId = '5000000191';
    $request->xApiKey = '{{your_api_key}}';

    $response = $sdk->payoutsAPI->verifyPayout($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
