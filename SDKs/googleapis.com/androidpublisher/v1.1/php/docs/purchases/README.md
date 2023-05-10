# purchases

### Available Operations

* [androidpublisherPurchasesCancel](#androidpublisherpurchasescancel) - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* [androidpublisherPurchasesGet](#androidpublisherpurchasesget) - Checks whether a user's subscription purchase is valid and returns its expiry time.

## androidpublisherPurchasesCancel

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesCancelRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->packageName = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->subscriptionId = 'placeat';
    $request->token = 'voluptatum';
    $request->userIp = 'iusto';

    $requestSecurity = new AndroidpublisherPurchasesCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesCancel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherPurchasesGet

Checks whether a user's subscription purchase is valid and returns its expiry time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherPurchasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherPurchasesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->packageName = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->subscriptionId = 'quis';
    $request->token = 'veritatis';
    $request->userIp = 'deserunt';

    $requestSecurity = new AndroidpublisherPurchasesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->purchases->androidpublisherPurchasesGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
