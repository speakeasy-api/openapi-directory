# orders

### Available Operations

* [androidpublisherOrdersRefund](#androidpublisherordersrefund) - Refund a user's subscription or in-app purchase order.

## androidpublisherOrdersRefund

Refund a user's subscription or in-app purchase order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherOrdersRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherOrdersRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherOrdersRefundRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'cupiditate';
    $request->key = 'qui';
    $request->oauthToken = 'quae';
    $request->orderId = 'laudantium';
    $request->packageName = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->revoke = false;
    $request->userIp = 'voluptatibus';

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
