# orders

### Available Operations

* [androidpublisherOrdersRefund](#androidpublisherordersrefund) - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

## androidpublisherOrdersRefund

Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherOrdersRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherOrdersRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherOrdersRefundRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'ratione';
    $request->key = 'laborum';
    $request->oauthToken = 'distinctio';
    $request->orderId = 'voluptatum';
    $request->packageName = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->revoke = false;
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new AndroidpublisherOrdersRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->androidpublisherOrdersRefund($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
