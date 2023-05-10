# inapppurchases

### Available Operations

* [androidpublisherInapppurchasesGet](#androidpublisherinapppurchasesget) - Checks the purchase and consumption status of an inapp item.

## androidpublisherInapppurchasesGet

Checks the purchase and consumption status of an inapp item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInapppurchasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInapppurchasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInapppurchasesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->packageName = 'suscipit';
    $request->prettyPrint = false;
    $request->productId = 'iure';
    $request->quotaUser = 'magnam';
    $request->token = 'debitis';
    $request->userIp = 'ipsa';

    $requestSecurity = new AndroidpublisherInapppurchasesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inapppurchases->androidpublisherInapppurchasesGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
