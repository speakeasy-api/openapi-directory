# twoStepVerification

### Available Operations

* [directoryTwoStepVerificationTurnOff](#directorytwostepverificationturnoff) - Turns off 2-Step Verification for user.

## directoryTwoStepVerificationTurnOff

Turns off 2-Step Verification for user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTwoStepVerificationTurnOffRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryTwoStepVerificationTurnOffSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryTwoStepVerificationTurnOffRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'totam';
    $request->key = 'reiciendis';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'esse';
    $request->userKey = 'iure';

    $requestSecurity = new DirectoryTwoStepVerificationTurnOffSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->twoStepVerification->directoryTwoStepVerificationTurnOff($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
