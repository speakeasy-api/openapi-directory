# v1

### Available Operations

* [cloudsearchInitializeCustomer](#cloudsearchinitializecustomer) - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

## cloudsearchInitializeCustomer

Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchInitializeCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchInitializeCustomerSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchInitializeCustomerSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchInitializeCustomerSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchInitializeCustomerSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchInitializeCustomerRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'ex' => 'deleniti',
        'itaque' => 'dolorum',
        'architecto' => 'omnis',
        'tenetur' => 'quasi',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'ipsa';
    $request->key = 'minima';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new CloudsearchInitializeCustomerSecurity();
    $requestSecurity->option1 = new CloudsearchInitializeCustomerSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->v1->cloudsearchInitializeCustomer($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
