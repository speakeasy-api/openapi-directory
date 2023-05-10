# orders

### Available Operations

* [contentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCaptureOrder](#contentorderscaptureorder) - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* [contentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* [contentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefunditem](#contentordersrefunditem) - Issues a partial or total refund for items and shipment.
* [contentOrdersRefundorder](#contentordersrefundorder) - Issues a partial or total refund for an order.
* [contentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [contentOrdersShiplineitems](#contentordersshiplineitems) - Marks line item(s) as shipped.
* [contentOrdersUpdatelineitemshippingdetails](#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [contentOrdersUpdatemerchantorderid](#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [contentOrdersUpdateshipment](#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

## contentOrdersAcknowledge

Marks an order as acknowledged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersAcknowledgeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersAcknowledgeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersAcknowledgeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersAcknowledgeRequest = new OrdersAcknowledgeRequest();
    $request->ordersAcknowledgeRequest->operationId = 'consequuntur';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eveniet';
    $request->fields = 'impedit';
    $request->key = 'officiis';
    $request->merchantId = 'esse';
    $request->oauthToken = 'necessitatibus';
    $request->orderId = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'expedita';

    $requestSecurity = new ContentOrdersAcknowledgeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersAcknowledge($request, $requestSecurity);

    if ($response->ordersAcknowledgeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersAdvancetestorder

Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersAdvancetestorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersAdvancetestorderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersAdvancetestorderRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'exercitationem';
    $request->key = 'ab';
    $request->merchantId = 'porro';
    $request->oauthToken = 'autem';
    $request->orderId = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new ContentOrdersAdvancetestorderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersAdvancetestorder($request, $requestSecurity);

    if ($response->ordersAdvanceTestOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCancel

Cancels all line items in an order, making a full refund.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersCancelRequest = new OrdersCancelRequest();
    $request->ordersCancelRequest->operationId = 'exercitationem';
    $request->ordersCancelRequest->reason = 'necessitatibus';
    $request->ordersCancelRequest->reasonText = 'quasi';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'est';
    $request->key = 'harum';
    $request->merchantId = 'sequi';
    $request->oauthToken = 'doloribus';
    $request->orderId = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new ContentOrdersCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCancel($request, $requestSecurity);

    if ($response->ordersCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCancellineitem

Cancels a line item, making a full refund.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCancellineitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCancelLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCancellineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCancellineitemRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersCancelLineItemRequest = new OrdersCancelLineItemRequest();
    $request->ordersCancelLineItemRequest->lineItemId = 'blanditiis';
    $request->ordersCancelLineItemRequest->operationId = 'officia';
    $request->ordersCancelLineItemRequest->productId = 'voluptas';
    $request->ordersCancelLineItemRequest->quantity = 254025;
    $request->ordersCancelLineItemRequest->reason = 'nemo';
    $request->ordersCancelLineItemRequest->reasonText = 'quos';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'nesciunt';
    $request->key = 'fuga';
    $request->merchantId = 'laudantium';
    $request->oauthToken = 'incidunt';
    $request->orderId = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ContentOrdersCancellineitemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCancellineitem($request, $requestSecurity);

    if ($response->ordersCancelLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCanceltestorderbycustomer

Sandbox only. Cancels a test order for customer-initiated cancellation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCanceltestorderbycustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCancelTestOrderByCustomerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCanceltestorderbycustomerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCanceltestorderbycustomerRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersCancelTestOrderByCustomerRequest = new OrdersCancelTestOrderByCustomerRequest();
    $request->ordersCancelTestOrderByCustomerRequest->reason = 'consequuntur';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cupiditate';
    $request->fields = 'reiciendis';
    $request->key = 'soluta';
    $request->merchantId = 'alias';
    $request->oauthToken = 'omnis';
    $request->orderId = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new ContentOrdersCanceltestorderbycustomerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCanceltestorderbycustomer($request, $requestSecurity);

    if ($response->ordersCancelTestOrderByCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCaptureOrder

Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCaptureOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCaptureOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCaptureOrderRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'accusamus' => 'voluptatibus',
        'distinctio' => 'omnis',
        'delectus' => 'minima',
    ];
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'temporibus';
    $request->key = 'quos';
    $request->merchantId = 'commodi';
    $request->oauthToken = 'itaque';
    $request->orderId = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new ContentOrdersCaptureOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCaptureOrder($request, $requestSecurity);

    if ($response->captureOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCreatetestorder

Sandbox only. Creates a test order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCreatetestorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCreateTestOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestOrder;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderDeliveryDetails;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderAddress;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderLineItem;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderLineItemProduct;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemProductFee;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemProductVariantAttribute;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemReturnInfo;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemShippingDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemShippingDetailsMethod;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderPickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderPickupDetailsPickupPerson;
use \OpenAPI\OpenAPI\Models\Shared\OrderPromotion;
use \OpenAPI\OpenAPI\Models\Shared\OrderPromotionItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCreatetestorderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCreatetestorderRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersCreateTestOrderRequest = new OrdersCreateTestOrderRequest();
    $request->ordersCreateTestOrderRequest->country = 'Tanzania';
    $request->ordersCreateTestOrderRequest->templateName = 'voluptatem';
    $request->ordersCreateTestOrderRequest->testOrder = new TestOrder();
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails = new TestOrderDeliveryDetails();
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address = new TestOrderAddress();
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->country = 'Guyana';
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->fullAddress = [
        'alias',
        'quasi',
    ];
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->isPostOfficeBox = false;
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->locality = 'non';
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->postalCode = '35864-3463';
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->recipientName = 'sint';
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->region = 'accusamus';
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->address->streetAddress = [
        'hic',
        'necessitatibus',
        'asperiores',
        'ex',
    ];
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->isScheduledDelivery = false;
    $request->ordersCreateTestOrderRequest->testOrder->deliveryDetails->phoneNumber = 'voluptas';
    $request->ordersCreateTestOrderRequest->testOrder->enableOrderinvoices = false;
    $request->ordersCreateTestOrderRequest->testOrder->kind = 'debitis';
    $request->ordersCreateTestOrderRequest->testOrder->lineItems = [
        new TestOrderLineItem(),
        new TestOrderLineItem(),
        new TestOrderLineItem(),
        new TestOrderLineItem(),
    ];
    $request->ordersCreateTestOrderRequest->testOrder->notificationMode = 'quae';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails = new TestOrderPickupDetails();
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->locationCode = 'minus';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress = new TestOrderAddress();
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->country = 'Panama';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->fullAddress = [
        'consectetur',
        'velit',
        'atque',
    ];
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->isPostOfficeBox = false;
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->locality = 'ipsum';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->postalCode = '17972-4414';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->recipientName = 'neque';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->region = 'quo';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationAddress->streetAddress = [
        'quibusdam',
        'iure',
        'odit',
    ];
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupLocationType = 'voluptatibus';
    $request->ordersCreateTestOrderRequest->testOrder->pickupDetails->pickupPersons = [
        new TestOrderPickupDetailsPickupPerson(),
        new TestOrderPickupDetailsPickupPerson(),
    ];
    $request->ordersCreateTestOrderRequest->testOrder->predefinedBillingAddress = 'magnam';
    $request->ordersCreateTestOrderRequest->testOrder->predefinedDeliveryAddress = 'quibusdam';
    $request->ordersCreateTestOrderRequest->testOrder->predefinedEmail = 'inventore';
    $request->ordersCreateTestOrderRequest->testOrder->predefinedPickupDetails = 'facere';
    $request->ordersCreateTestOrderRequest->testOrder->promotions = [
        new OrderPromotion(),
        new OrderPromotion(),
        new OrderPromotion(),
    ];
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost = new Price();
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost->currency = 'architecto';
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost->value = 'voluptatibus';
    $request->ordersCreateTestOrderRequest->testOrder->shippingOption = 'quia';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::JSON;
    $request->callback = 'velit';
    $request->fields = 'illo';
    $request->key = 'accusantium';
    $request->merchantId = 'vel';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ContentOrdersCreatetestorderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCreatetestorder($request, $requestSecurity);

    if ($response->ordersCreateTestOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersCreatetestreturn

Sandbox only. Creates a test return.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCreatetestreturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCreateTestReturnRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryCreateTestReturnReturnItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCreatetestreturnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCreatetestreturnRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersCreateTestReturnRequest = new OrdersCreateTestReturnRequest();
    $request->ordersCreateTestReturnRequest->items = [
        new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->fields = 'dicta';
    $request->key = 'impedit';
    $request->merchantId = 'voluptatibus';
    $request->oauthToken = 'iste';
    $request->orderId = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new ContentOrdersCreatetestreturnSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCreatetestreturn($request, $requestSecurity);

    if ($response->ordersCreateTestReturnResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersGet

Retrieves an order from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'iusto';
    $request->key = 'sit';
    $request->merchantId = 'doloremque';
    $request->oauthToken = 'consequatur';
    $request->orderId = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ContentOrdersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersGet($request, $requestSecurity);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersGetbymerchantorderid

Retrieves an order using merchant order ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGetbymerchantorderidRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGetbymerchantorderidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersGetbymerchantorderidRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'expedita';
    $request->key = 'deleniti';
    $request->merchantId = 'a';
    $request->merchantOrderId = 'voluptate';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new ContentOrdersGetbymerchantorderidSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersGetbymerchantorderid($request, $requestSecurity);

    if ($response->ordersGetByMerchantOrderIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersGettestordertemplate

Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGettestordertemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGettestordertemplateTemplateNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersGettestordertemplateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersGettestordertemplateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->country = 'Nepal';
    $request->fields = 'esse';
    $request->key = 'labore';
    $request->merchantId = 'veritatis';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'consectetur';
    $request->templateName = ContentOrdersGettestordertemplateTemplateNameEnum::TEMPLATE1;
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new ContentOrdersGettestordertemplateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersGettestordertemplate($request, $requestSecurity);

    if ($response->ordersGetTestOrderTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersInstorerefundlineitem

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersInstorerefundlineitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersInStoreRefundLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersInstorerefundlineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersInstorerefundlineitemRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersInStoreRefundLineItemRequest = new OrdersInStoreRefundLineItemRequest();
    $request->ordersInStoreRefundLineItemRequest->lineItemId = 'qui';
    $request->ordersInStoreRefundLineItemRequest->operationId = 'iste';
    $request->ordersInStoreRefundLineItemRequest->priceAmount = new Price();
    $request->ordersInStoreRefundLineItemRequest->priceAmount->currency = 'ex';
    $request->ordersInStoreRefundLineItemRequest->priceAmount->value = 'nemo';
    $request->ordersInStoreRefundLineItemRequest->productId = 'soluta';
    $request->ordersInStoreRefundLineItemRequest->quantity = 726227;
    $request->ordersInStoreRefundLineItemRequest->reason = 'rem';
    $request->ordersInStoreRefundLineItemRequest->reasonText = 'dolorum';
    $request->ordersInStoreRefundLineItemRequest->taxAmount = new Price();
    $request->ordersInStoreRefundLineItemRequest->taxAmount->currency = 'odio';
    $request->ordersInStoreRefundLineItemRequest->taxAmount->value = 'fugit';
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quae';
    $request->key = 'quae';
    $request->merchantId = 'modi';
    $request->oauthToken = 'neque';
    $request->orderId = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new ContentOrdersInstorerefundlineitemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersInstorerefundlineitem($request, $requestSecurity);

    if ($response->ordersInStoreRefundLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersList

Lists the orders in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersListStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->acknowledged = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'quia';
    $request->key = 'quia';
    $request->maxResults = 342137;
    $request->merchantId = 'omnis';
    $request->oauthToken = 'libero';
    $request->orderBy = 'dicta';
    $request->pageToken = 'id';
    $request->placedDateEnd = 'libero';
    $request->placedDateStart = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->statuses = [
        ContentOrdersListStatusesEnum::DELIVERED,
        ContentOrdersListStatusesEnum::ACTIVE,
        ContentOrdersListStatusesEnum::PARTIALLY_SHIPPED,
    ];
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'voluptates';

    $requestSecurity = new ContentOrdersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersList($request, $requestSecurity);

    if ($response->ordersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersRefunditem

Issues a partial or total refund for items and shipment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefunditemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersRefundItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryRefundItemItem;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryAmount;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryRefundItemShipping;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefunditemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersRefunditemRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersRefundItemRequest = new OrdersRefundItemRequest();
    $request->ordersRefundItemRequest->items = [
        new OrdersCustomBatchRequestEntryRefundItemItem(),
    ];
    $request->ordersRefundItemRequest->operationId = 'totam';
    $request->ordersRefundItemRequest->reason = 'dolore';
    $request->ordersRefundItemRequest->reasonText = 'eligendi';
    $request->ordersRefundItemRequest->shipping = new OrdersCustomBatchRequestEntryRefundItemShipping();
    $request->ordersRefundItemRequest->shipping->amount = new Price();
    $request->ordersRefundItemRequest->shipping->amount->currency = 'distinctio';
    $request->ordersRefundItemRequest->shipping->amount->value = 'voluptatem';
    $request->ordersRefundItemRequest->shipping->fullRefund = false;
    $request->accessToken = 'autem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolores';
    $request->fields = 'assumenda';
    $request->key = 'beatae';
    $request->merchantId = 'est';
    $request->oauthToken = 'facere';
    $request->orderId = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ContentOrdersRefunditemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersRefunditem($request, $requestSecurity);

    if ($response->ordersRefundItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersRefundorder

Issues a partial or total refund for an order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefundorderRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersRefundOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonetaryAmount;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefundorderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersRefundorderRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersRefundOrderRequest = new OrdersRefundOrderRequest();
    $request->ordersRefundOrderRequest->amount = new MonetaryAmount();
    $request->ordersRefundOrderRequest->amount->priceAmount = new Price();
    $request->ordersRefundOrderRequest->amount->priceAmount->currency = 'tempore';
    $request->ordersRefundOrderRequest->amount->priceAmount->value = 'sint';
    $request->ordersRefundOrderRequest->amount->taxAmount = new Price();
    $request->ordersRefundOrderRequest->amount->taxAmount->currency = 'ea';
    $request->ordersRefundOrderRequest->amount->taxAmount->value = 'autem';
    $request->ordersRefundOrderRequest->fullRefund = false;
    $request->ordersRefundOrderRequest->operationId = 'ipsam';
    $request->ordersRefundOrderRequest->reason = 'rerum';
    $request->ordersRefundOrderRequest->reasonText = 'laudantium';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'cum';
    $request->key = 'at';
    $request->merchantId = 'alias';
    $request->oauthToken = 'quia';
    $request->orderId = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new ContentOrdersRefundorderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersRefundorder($request, $requestSecurity);

    if ($response->ordersRefundOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersRejectreturnlineitem

Rejects return on an line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRejectreturnlineitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersRejectReturnLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRejectreturnlineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersRejectreturnlineitemRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersRejectReturnLineItemRequest = new OrdersRejectReturnLineItemRequest();
    $request->ordersRejectReturnLineItemRequest->lineItemId = 'officiis';
    $request->ordersRejectReturnLineItemRequest->operationId = 'eos';
    $request->ordersRejectReturnLineItemRequest->productId = 'quibusdam';
    $request->ordersRejectReturnLineItemRequest->quantity = 483518;
    $request->ordersRejectReturnLineItemRequest->reason = 'praesentium';
    $request->ordersRejectReturnLineItemRequest->reasonText = 'odit';
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'earum';
    $request->key = 'adipisci';
    $request->merchantId = 'recusandae';
    $request->oauthToken = 'similique';
    $request->orderId = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new ContentOrdersRejectreturnlineitemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersRejectreturnlineitem($request, $requestSecurity);

    if ($response->ordersRejectReturnLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersReturnrefundlineitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersReturnRefundLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersReturnrefundlineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersReturnrefundlineitemRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersReturnRefundLineItemRequest = new OrdersReturnRefundLineItemRequest();
    $request->ordersReturnRefundLineItemRequest->lineItemId = 'molestiae';
    $request->ordersReturnRefundLineItemRequest->operationId = 'delectus';
    $request->ordersReturnRefundLineItemRequest->priceAmount = new Price();
    $request->ordersReturnRefundLineItemRequest->priceAmount->currency = 'cupiditate';
    $request->ordersReturnRefundLineItemRequest->priceAmount->value = 'fugit';
    $request->ordersReturnRefundLineItemRequest->productId = 'numquam';
    $request->ordersReturnRefundLineItemRequest->quantity = 256916;
    $request->ordersReturnRefundLineItemRequest->reason = 'nesciunt';
    $request->ordersReturnRefundLineItemRequest->reasonText = 'at';
    $request->ordersReturnRefundLineItemRequest->taxAmount = new Price();
    $request->ordersReturnRefundLineItemRequest->taxAmount->currency = 'officia';
    $request->ordersReturnRefundLineItemRequest->taxAmount->value = 'dignissimos';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'qui';
    $request->key = 'expedita';
    $request->merchantId = 'voluptatum';
    $request->oauthToken = 'cupiditate';
    $request->orderId = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new ContentOrdersReturnrefundlineitemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersReturnrefundlineitem($request, $requestSecurity);

    if ($response->ordersReturnRefundLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersSetlineitemmetadata

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersSetlineitemmetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersSetLineItemMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderMerchantProvidedAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersSetlineitemmetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersSetlineitemmetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersSetLineItemMetadataRequest = new OrdersSetLineItemMetadataRequest();
    $request->ordersSetLineItemMetadataRequest->annotations = [
        new OrderMerchantProvidedAnnotation(),
        new OrderMerchantProvidedAnnotation(),
        new OrderMerchantProvidedAnnotation(),
        new OrderMerchantProvidedAnnotation(),
    ];
    $request->ordersSetLineItemMetadataRequest->lineItemId = 'eum';
    $request->ordersSetLineItemMetadataRequest->operationId = 'modi';
    $request->ordersSetLineItemMetadataRequest->productId = 'corporis';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'tempore';
    $request->key = 'aperiam';
    $request->merchantId = 'libero';
    $request->oauthToken = 'ratione';
    $request->orderId = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ContentOrdersSetlineitemmetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersSetlineitemmetadata($request, $requestSecurity);

    if ($response->ordersSetLineItemMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersShiplineitems

Marks line item(s) as shipped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersShiplineitemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersShipLineItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderShipmentLineItemShipment;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersShiplineitemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersShiplineitemsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersShipLineItemsRequest = new OrdersShipLineItemsRequest();
    $request->ordersShipLineItemsRequest->lineItems = [
        new OrderShipmentLineItemShipment(),
    ];
    $request->ordersShipLineItemsRequest->operationId = 'minus';
    $request->ordersShipLineItemsRequest->shipmentGroupId = 'fuga';
    $request->ordersShipLineItemsRequest->shipmentInfos = [
        new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(),
        new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(),
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'tempore';
    $request->key = 'vero';
    $request->merchantId = 'odit';
    $request->oauthToken = 'repellat';
    $request->orderId = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new ContentOrdersShiplineitemsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersShiplineitems($request, $requestSecurity);

    if ($response->ordersShipLineItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersUpdatelineitemshippingdetails

Updates ship by and delivery by dates for a line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdatelineitemshippingdetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersUpdateLineItemShippingDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdatelineitemshippingdetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersUpdatelineitemshippingdetailsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersUpdateLineItemShippingDetailsRequest = new OrdersUpdateLineItemShippingDetailsRequest();
    $request->ordersUpdateLineItemShippingDetailsRequest->deliverByDate = 'minima';
    $request->ordersUpdateLineItemShippingDetailsRequest->lineItemId = 'in';
    $request->ordersUpdateLineItemShippingDetailsRequest->operationId = 'ducimus';
    $request->ordersUpdateLineItemShippingDetailsRequest->productId = 'excepturi';
    $request->ordersUpdateLineItemShippingDetailsRequest->shipByDate = 'dolores';
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ducimus';
    $request->fields = 'voluptate';
    $request->key = 'pariatur';
    $request->merchantId = 'itaque';
    $request->oauthToken = 'similique';
    $request->orderId = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new ContentOrdersUpdatelineitemshippingdetailsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersUpdatelineitemshippingdetails($request, $requestSecurity);

    if ($response->ordersUpdateLineItemShippingDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersUpdatemerchantorderid

Updates the merchant order ID for a given order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdatemerchantorderidRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersUpdateMerchantOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdatemerchantorderidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersUpdatemerchantorderidRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersUpdateMerchantOrderIdRequest = new OrdersUpdateMerchantOrderIdRequest();
    $request->ordersUpdateMerchantOrderIdRequest->merchantOrderId = 'placeat';
    $request->ordersUpdateMerchantOrderIdRequest->operationId = 'quidem';
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'modi';
    $request->key = 'ipsa';
    $request->merchantId = 'sint';
    $request->oauthToken = 'vero';
    $request->orderId = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new ContentOrdersUpdatemerchantorderidSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersUpdatemerchantorderid($request, $requestSecurity);

    if ($response->ordersUpdateMerchantOrderIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersUpdateshipment

Updates a shipment's status, carrier, and/or tracking ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdateshipmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersUpdateShipmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdateshipmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersUpdateshipmentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersUpdateShipmentRequest = new OrdersUpdateShipmentRequest();
    $request->ordersUpdateShipmentRequest->carrier = 'veniam';
    $request->ordersUpdateShipmentRequest->deliveryDate = 'animi';
    $request->ordersUpdateShipmentRequest->lastPickupDate = 'dolores';
    $request->ordersUpdateShipmentRequest->operationId = 'nam';
    $request->ordersUpdateShipmentRequest->readyPickupDate = 'dicta';
    $request->ordersUpdateShipmentRequest->scheduledDeliveryDetails = new OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails();
    $request->ordersUpdateShipmentRequest->scheduledDeliveryDetails->carrierPhoneNumber = 'consequuntur';
    $request->ordersUpdateShipmentRequest->scheduledDeliveryDetails->scheduledDate = 'necessitatibus';
    $request->ordersUpdateShipmentRequest->shipmentId = 'nobis';
    $request->ordersUpdateShipmentRequest->status = 'ipsa';
    $request->ordersUpdateShipmentRequest->trackingId = 'ducimus';
    $request->ordersUpdateShipmentRequest->undeliveredDate = 'maiores';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'pariatur';
    $request->key = 'libero';
    $request->merchantId = 'excepturi';
    $request->oauthToken = 'occaecati';
    $request->orderId = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new ContentOrdersUpdateshipmentSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersUpdateshipment($request, $requestSecurity);

    if ($response->ordersUpdateShipmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
