# customGatewayProcessPaymentsAndRefunds

### Available Operations

* [postCustomGatewayPaymentOwnershipId](#postcustomgatewaypaymentownershipid) - Adds a payment for an app on behalf of a user
* [postCustomGatewayRefundOwnershipId](#postcustomgatewayrefundownershipid) - Fully or partially refund payment for an app on behalf of a user

## postCustomGatewayPaymentOwnershipId

- Results are returned for the market provided within the basic authentication credentials 
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomGatewayPaymentOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomGatewayPaymentOwnershipIdRequest();
    $request->amount = 969810;
    $request->customData = 'est';
    $request->date = 653140;
    $request->developerAmount = 670638;
    $request->feeAmount = 170909;
    $request->marketplaceAmount = 210382;
    $request->ownershipId = 'corporis';

    $response = $sdk->customGatewayProcessPaymentsAndRefunds->postCustomGatewayPaymentOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomGatewayRefundOwnershipId

- Results are returned for the market provided within the basic authentication credentials
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomGatewayRefundOwnershipIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomGatewayRefundOwnershipIdRequest();
    $request->amount = 128926;
    $request->customData = 'nobis';
    $request->date = 315428;
    $request->developerAmount = 607831;
    $request->feeAmount = 363711;
    $request->marketplaceAmount = 325047;
    $request->ownershipId = 'excepturi';

    $response = $sdk->customGatewayProcessPaymentsAndRefunds->postCustomGatewayRefundOwnershipId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
