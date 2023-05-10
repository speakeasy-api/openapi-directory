# orders

### Available Operations

* [cancelAuthorization](#cancelauthorization) - Cancel an existing authorization
* [createOrder](#createorder) - Create a new order
* [purchaseToken](#purchasetoken) - Generate a consumer token

## cancelAuthorization

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelAuthorizationRequest();
    $request->authorizationToken = 'provident';

    $response = $sdk->orders->cancelAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrder

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrderRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerOrganizationEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantUrls;
use \OpenAPI\OpenAPI\Models\Shared\OrderLine;
use \OpenAPI\OpenAPI\Models\Shared\ProductIdentifiers;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionIntervalEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrderRequest();
    $request->authorizationToken = 'distinctio';
    $request->createOrderRequestInput = new CreateOrderRequestInput();
    $request->createOrderRequestInput->autoCapture = false;
    $request->createOrderRequestInput->billingAddress = new Address();
    $request->createOrderRequestInput->billingAddress->attention = 'Attn';
    $request->createOrderRequestInput->billingAddress->city = 'London';
    $request->createOrderRequestInput->billingAddress->country = 'GB';
    $request->createOrderRequestInput->billingAddress->email = 'test.sam@test.com';
    $request->createOrderRequestInput->billingAddress->familyName = 'Andersson';
    $request->createOrderRequestInput->billingAddress->givenName = 'Adam';
    $request->createOrderRequestInput->billingAddress->organizationName = 'quibusdam';
    $request->createOrderRequestInput->billingAddress->phone = '+44795465131';
    $request->createOrderRequestInput->billingAddress->postalCode = 'W1G 0PW';
    $request->createOrderRequestInput->billingAddress->region = 'OH';
    $request->createOrderRequestInput->billingAddress->streetAddress = '33 Cavendish Square';
    $request->createOrderRequestInput->billingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->createOrderRequestInput->billingAddress->title = 'Mr.';
    $request->createOrderRequestInput->customPaymentMethodIds = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->createOrderRequestInput->customer = new Customer();
    $request->createOrderRequestInput->customer->dateOfBirth = '1978-12-31';
    $request->createOrderRequestInput->customer->gender = 'male';
    $request->createOrderRequestInput->customer->lastFourSsn = 'vel';
    $request->createOrderRequestInput->customer->nationalIdentificationNumber = 'error';
    $request->createOrderRequestInput->customer->organizationEntityType = CustomerOrganizationEntityTypeEnum::SOLE_TRADER;
    $request->createOrderRequestInput->customer->organizationRegistrationId = 'suscipit';
    $request->createOrderRequestInput->customer->title = 'Mr.';
    $request->createOrderRequestInput->customer->type = 'organization';
    $request->createOrderRequestInput->customer->vatId = 'iure';
    $request->createOrderRequestInput->locale = 'en-GB';
    $request->createOrderRequestInput->merchantData = '{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}';
    $request->createOrderRequestInput->merchantReference1 = 'ON4711';
    $request->createOrderRequestInput->merchantReference2 = 'hdt53h-zdgg6-hdaff2';
    $request->createOrderRequestInput->merchantUrls = new MerchantUrls();
    $request->createOrderRequestInput->merchantUrls->authorization = 'https://www.example-url.com/authorization';
    $request->createOrderRequestInput->merchantUrls->confirmation = 'https://www.example-url.com/confirmation';
    $request->createOrderRequestInput->merchantUrls->notification = 'https://www.example-url.com/notification';
    $request->createOrderRequestInput->merchantUrls->push = 'https://www.example-url.com/push';
    $request->createOrderRequestInput->orderAmount = 2500;
    $request->createOrderRequestInput->orderLines = [
        new OrderLine(),
        new OrderLine(),
    ];
    $request->createOrderRequestInput->orderTaxAmount = 475;
    $request->createOrderRequestInput->purchaseCountry = 'GB';
    $request->createOrderRequestInput->purchaseCurrency = 'GBP';
    $request->createOrderRequestInput->shippingAddress = new Address();
    $request->createOrderRequestInput->shippingAddress->attention = 'Attn';
    $request->createOrderRequestInput->shippingAddress->city = 'London';
    $request->createOrderRequestInput->shippingAddress->country = 'GB';
    $request->createOrderRequestInput->shippingAddress->email = 'test.sam@test.com';
    $request->createOrderRequestInput->shippingAddress->familyName = 'Andersson';
    $request->createOrderRequestInput->shippingAddress->givenName = 'Adam';
    $request->createOrderRequestInput->shippingAddress->organizationName = 'debitis';
    $request->createOrderRequestInput->shippingAddress->phone = '+44795465131';
    $request->createOrderRequestInput->shippingAddress->postalCode = 'W1G 0PW';
    $request->createOrderRequestInput->shippingAddress->region = 'OH';
    $request->createOrderRequestInput->shippingAddress->streetAddress = '33 Cavendish Square';
    $request->createOrderRequestInput->shippingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->createOrderRequestInput->shippingAddress->title = 'Mr.';

    $response = $sdk->orders->createOrder($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchaseToken

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PurchaseTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerTokenCreationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Customer;
use \OpenAPI\OpenAPI\Models\Shared\CustomerOrganizationEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerTokenCreationRequestIntendedUseEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchaseTokenRequest();
    $request->authorizationToken = 'ipsa';
    $request->customerTokenCreationRequest = new CustomerTokenCreationRequest();
    $request->customerTokenCreationRequest->billingAddress = new Address();
    $request->customerTokenCreationRequest->billingAddress->attention = 'Attn';
    $request->customerTokenCreationRequest->billingAddress->city = 'London';
    $request->customerTokenCreationRequest->billingAddress->country = 'GB';
    $request->customerTokenCreationRequest->billingAddress->email = 'test.sam@test.com';
    $request->customerTokenCreationRequest->billingAddress->familyName = 'Andersson';
    $request->customerTokenCreationRequest->billingAddress->givenName = 'Adam';
    $request->customerTokenCreationRequest->billingAddress->organizationName = 'delectus';
    $request->customerTokenCreationRequest->billingAddress->phone = '+44795465131';
    $request->customerTokenCreationRequest->billingAddress->postalCode = 'W1G 0PW';
    $request->customerTokenCreationRequest->billingAddress->region = 'OH';
    $request->customerTokenCreationRequest->billingAddress->streetAddress = '33 Cavendish Square';
    $request->customerTokenCreationRequest->billingAddress->streetAddress2 = 'Floor 22 / Flat 2';
    $request->customerTokenCreationRequest->billingAddress->title = 'Mr.';
    $request->customerTokenCreationRequest->customer = new Customer();
    $request->customerTokenCreationRequest->customer->dateOfBirth = '1978-12-31';
    $request->customerTokenCreationRequest->customer->gender = 'male';
    $request->customerTokenCreationRequest->customer->lastFourSsn = 'tempora';
    $request->customerTokenCreationRequest->customer->nationalIdentificationNumber = 'suscipit';
    $request->customerTokenCreationRequest->customer->organizationEntityType = CustomerOrganizationEntityTypeEnum::GENERAL_PARTNERSHIP;
    $request->customerTokenCreationRequest->customer->organizationRegistrationId = 'minus';
    $request->customerTokenCreationRequest->customer->title = 'Mr.';
    $request->customerTokenCreationRequest->customer->type = 'organization';
    $request->customerTokenCreationRequest->customer->vatId = 'placeat';
    $request->customerTokenCreationRequest->description = 'voluptatum';
    $request->customerTokenCreationRequest->intendedUse = CustomerTokenCreationRequestIntendedUseEnum::SUBSCRIPTION;
    $request->customerTokenCreationRequest->locale = 'en-GB';
    $request->customerTokenCreationRequest->purchaseCountry = 'GB';
    $request->customerTokenCreationRequest->purchaseCurrency = 'GBP';

    $response = $sdk->orders->purchaseToken($request);

    if ($response->customerTokenCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
