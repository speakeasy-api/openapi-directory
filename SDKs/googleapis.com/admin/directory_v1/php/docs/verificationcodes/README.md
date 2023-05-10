# verificationCodes

### Available Operations

* [directoryVerificationCodesGenerate](#directoryverificationcodesgenerate) - Generates new backup verification codes for the user.
* [directoryVerificationCodesInvalidate](#directoryverificationcodesinvalidate) - Invalidates the current backup verification codes for the user.
* [directoryVerificationCodesList](#directoryverificationcodeslist) - Returns the current set of valid backup verification codes for the specified user.

## directoryVerificationCodesGenerate

Generates new backup verification codes for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryVerificationCodesGenerateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'voluptates';
    $request->key = 'laudantium';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'illum';
    $request->userKey = 'rem';

    $requestSecurity = new DirectoryVerificationCodesGenerateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->verificationCodes->directoryVerificationCodesGenerate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryVerificationCodesInvalidate

Invalidates the current backup verification codes for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryVerificationCodesInvalidateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'architecto';
    $request->key = 'aliquam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'saepe';
    $request->userKey = 'consequatur';

    $requestSecurity = new DirectoryVerificationCodesInvalidateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->verificationCodes->directoryVerificationCodesInvalidate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directoryVerificationCodesList

Returns the current set of valid backup verification codes for the specified user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryVerificationCodesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'cumque';
    $request->key = 'aliquam';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'reiciendis';
    $request->userKey = 'sequi';

    $requestSecurity = new DirectoryVerificationCodesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->verificationCodes->directoryVerificationCodesList($request, $requestSecurity);

    if ($response->verificationCodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
