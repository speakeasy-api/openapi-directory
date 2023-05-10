# signupUrls

### Available Operations

* [androidmanagementSignupUrlsCreate](#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.

## androidmanagementSignupUrlsCreate

Creates an enterprise signup URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementSignupUrlsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementSignupUrlsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidmanagementSignupUrlsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->callbackUrl = 'ipsam';
    $request->fields = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->projectId = 'eaque';
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new AndroidmanagementSignupUrlsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->signupUrls->androidmanagementSignupUrlsCreate($request, $requestSecurity);

    if ($response->signupUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
