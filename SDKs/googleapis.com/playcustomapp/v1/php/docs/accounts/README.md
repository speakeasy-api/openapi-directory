# accounts

### Available Operations

* [playcustomappAccountsCustomAppsCreate](#playcustomappaccountscustomappscreate) - Creates a new custom app.

## playcustomappAccountsCustomAppsCreate

Creates a new custom app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlaycustomappAccountsCustomAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PlaycustomappAccountsCustomAppsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlaycustomappAccountsCustomAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'magnam';
    $request->accessToken = 'debitis';
    $request->account = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new PlaycustomappAccountsCustomAppsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->playcustomappAccountsCustomAppsCreate($request, $requestSecurity);

    if ($response->customApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
