# orders

### Available Operations

* [contentOrdersAcknowledge](#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCreatetestorder](#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersCustombatch](#contentorderscustombatch) - Retrieves or modifies multiple orders in a single request.
* [contentOrdersGet](#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* [contentOrdersList](#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefund](#contentordersrefund) - Deprecated, please use returnRefundLineItem instead.
* [contentOrdersRejectreturnlineitem](#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnlineitem](#contentordersreturnlineitem) - Returns a line item.
* [contentOrdersReturnrefundlineitem](#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersAcknowledgeRequest = new OrdersAcknowledgeRequest();
    $request->ordersAcknowledgeRequest->operationId = 'mollitia';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'minima';
    $request->key = 'nisi';
    $request->merchantId = 'fugit';
    $request->oauthToken = 'sapiente';
    $request->orderId = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ratione';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'eveniet';
    $request->key = 'accusamus';
    $request->merchantId = 'veritatis';
    $request->oauthToken = 'esse';
    $request->orderId = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

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
    $request->ordersCancelRequest->operationId = 'saepe';
    $request->ordersCancelRequest->reason = 'vel';
    $request->ordersCancelRequest->reasonText = 'harum';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'minima';
    $request->key = 'distinctio';
    $request->merchantId = 'eligendi';
    $request->oauthToken = 'sit';
    $request->orderId = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'cumque';

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
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCancellineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCancellineitemRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersCancelLineItemRequest = new OrdersCancelLineItemRequest();
    $request->ordersCancelLineItemRequest->amount = new Price();
    $request->ordersCancelLineItemRequest->amount->currency = 'consequatur';
    $request->ordersCancelLineItemRequest->amount->value = 'minus';
    $request->ordersCancelLineItemRequest->amountPretax = new Price();
    $request->ordersCancelLineItemRequest->amountPretax->currency = 'quaerat';
    $request->ordersCancelLineItemRequest->amountPretax->value = 'sapiente';
    $request->ordersCancelLineItemRequest->amountTax = new Price();
    $request->ordersCancelLineItemRequest->amountTax->currency = 'consectetur';
    $request->ordersCancelLineItemRequest->amountTax->value = 'esse';
    $request->ordersCancelLineItemRequest->lineItemId = 'blanditiis';
    $request->ordersCancelLineItemRequest->operationId = 'provident';
    $request->ordersCancelLineItemRequest->productId = 'a';
    $request->ordersCancelLineItemRequest->quantity = 857723;
    $request->ordersCancelLineItemRequest->reason = 'quas';
    $request->ordersCancelLineItemRequest->reasonText = 'esse';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->fields = 'sint';
    $request->key = 'pariatur';
    $request->merchantId = 'possimus';
    $request->oauthToken = 'quia';
    $request->orderId = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'veritatis';

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
    $request->ordersCancelTestOrderByCustomerRequest->reason = 'quasi';
    $request->accessToken = 'similique';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->merchantId = 'earum';
    $request->oauthToken = 'vel';
    $request->orderId = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'illum';

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
use \OpenAPI\OpenAPI\Models\Shared\TestOrderCustomer;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderCustomerMarketingRightsInfo;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderLineItem;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderLineItemProduct;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemProductFee;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemProductVariantAttribute;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemReturnInfo;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemShippingDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemShippingDetailsMethod;
use \OpenAPI\OpenAPI\Models\Shared\TestOrderPaymentMethod;
use \OpenAPI\OpenAPI\Models\Shared\OrderLegacyPromotion;
use \OpenAPI\OpenAPI\Models\Shared\OrderLegacyPromotionBenefit;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCreatetestorderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCreatetestorderRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersCreateTestOrderRequest = new OrdersCreateTestOrderRequest();
    $request->ordersCreateTestOrderRequest->country = 'Antigua and Barbuda';
    $request->ordersCreateTestOrderRequest->templateName = 'aliquam';
    $request->ordersCreateTestOrderRequest->testOrder = new TestOrder();
    $request->ordersCreateTestOrderRequest->testOrder->customer = new TestOrderCustomer();
    $request->ordersCreateTestOrderRequest->testOrder->customer->email = 'Blake.Hermiston@hotmail.com';
    $request->ordersCreateTestOrderRequest->testOrder->customer->explicitMarketingPreference = false;
    $request->ordersCreateTestOrderRequest->testOrder->customer->fullName = 'nisi';
    $request->ordersCreateTestOrderRequest->testOrder->customer->marketingRightsInfo = new TestOrderCustomerMarketingRightsInfo();
    $request->ordersCreateTestOrderRequest->testOrder->customer->marketingRightsInfo->explicitMarketingPreference = 'aut';
    $request->ordersCreateTestOrderRequest->testOrder->customer->marketingRightsInfo->lastUpdatedTimestamp = 'voluptatum';
    $request->ordersCreateTestOrderRequest->testOrder->enableOrderinvoices = false;
    $request->ordersCreateTestOrderRequest->testOrder->kind = 'qui';
    $request->ordersCreateTestOrderRequest->testOrder->lineItems = [
        new TestOrderLineItem(),
        new TestOrderLineItem(),
        new TestOrderLineItem(),
        new TestOrderLineItem(),
    ];
    $request->ordersCreateTestOrderRequest->testOrder->notificationMode = 'ex';
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod = new TestOrderPaymentMethod();
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod->expirationMonth = 536275;
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod->expirationYear = 929292;
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod->lastFourDigits = 'dolorum';
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod->predefinedBillingAddress = 'architecto';
    $request->ordersCreateTestOrderRequest->testOrder->paymentMethod->type = 'omnis';
    $request->ordersCreateTestOrderRequest->testOrder->predefinedDeliveryAddress = 'tenetur';
    $request->ordersCreateTestOrderRequest->testOrder->predefinedPickupDetails = 'quasi';
    $request->ordersCreateTestOrderRequest->testOrder->promotions = [
        new OrderLegacyPromotion(),
        new OrderLegacyPromotion(),
        new OrderLegacyPromotion(),
        new OrderLegacyPromotion(),
    ];
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost = new Price();
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost->currency = 'et';
    $request->ordersCreateTestOrderRequest->testOrder->shippingCost->value = 'voluptate';
    $request->ordersCreateTestOrderRequest->testOrder->shippingCostTax = new Price();
    $request->ordersCreateTestOrderRequest->testOrder->shippingCostTax->currency = 'ipsa';
    $request->ordersCreateTestOrderRequest->testOrder->shippingCostTax->value = 'minima';
    $request->ordersCreateTestOrderRequest->testOrder->shippingOption = 'veritatis';
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'temporibus';
    $request->key = 'accusantium';
    $request->merchantId = 'rem';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'mollitia';

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
        new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem(),
        new OrdersCustomBatchRequestEntryCreateTestReturnReturnItem(),
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->merchantId = 'impedit';
    $request->oauthToken = 'explicabo';
    $request->orderId = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

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

## contentOrdersCustombatch

Retrieves or modifies multiple orders in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryCancel;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryCancelLineItem;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryInStoreRefundLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryRefund;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryRejectReturnLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryReturnLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryReturnRefundLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntrySetLineItemMetadata;
use \OpenAPI\OpenAPI\Models\Shared\OrderMerchantProvidedAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryShipLineItems;
use \OpenAPI\OpenAPI\Models\Shared\OrderShipmentLineItemShipment;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrdersCustomBatchRequestEntryUpdateShipment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersCustomBatchRequest = new OrdersCustomBatchRequest();
    $request->ordersCustomBatchRequest->entries = [
        new OrdersCustomBatchRequestEntry(),
        new OrdersCustomBatchRequestEntry(),
        new OrdersCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'asperiores';
    $request->key = 'aperiam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new ContentOrdersCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersCustombatch($request, $requestSecurity);

    if ($response->ordersCustomBatchResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officia';
    $request->fields = 'asperiores';
    $request->key = 'nemo';
    $request->merchantId = 'quae';
    $request->oauthToken = 'quaerat';
    $request->orderId = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'ab';

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
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'velit';
    $request->key = 'culpa';
    $request->merchantId = 'est';
    $request->merchantOrderId = 'recusandae';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'ducimus';

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
    $request->accessToken = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'possimus';
    $request->country = 'Pitcairn Islands';
    $request->fields = 'cum';
    $request->key = 'commodi';
    $request->merchantId = 'in';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->templateName = ContentOrdersGettestordertemplateTemplateNameEnum::TEMPLATE3;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'recusandae';

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

Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.

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
    $request->ordersInStoreRefundLineItemRequest->amountPretax = new Price();
    $request->ordersInStoreRefundLineItemRequest->amountPretax->currency = 'aperiam';
    $request->ordersInStoreRefundLineItemRequest->amountPretax->value = 'cum';
    $request->ordersInStoreRefundLineItemRequest->amountTax = new Price();
    $request->ordersInStoreRefundLineItemRequest->amountTax->currency = 'consectetur';
    $request->ordersInStoreRefundLineItemRequest->amountTax->value = 'in';
    $request->ordersInStoreRefundLineItemRequest->lineItemId = 'exercitationem';
    $request->ordersInStoreRefundLineItemRequest->operationId = 'earum';
    $request->ordersInStoreRefundLineItemRequest->productId = 'facere';
    $request->ordersInStoreRefundLineItemRequest->quantity = 257233;
    $request->ordersInStoreRefundLineItemRequest->reason = 'doloribus';
    $request->ordersInStoreRefundLineItemRequest->reasonText = 'suscipit';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'necessitatibus';
    $request->key = 'dolore';
    $request->merchantId = 'sunt';
    $request->oauthToken = 'asperiores';
    $request->orderId = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'beatae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->acknowledged = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->key = 'harum';
    $request->maxResults = 385237;
    $request->merchantId = 'ipsa';
    $request->oauthToken = 'voluptates';
    $request->orderBy = 'libero';
    $request->pageToken = 'vitae';
    $request->placedDateEnd = 'accusamus';
    $request->placedDateStart = 'similique';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->statuses = [
        ContentOrdersListStatusesEnum::PENDING_SHIPMENT,
    ];
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'voluptas';

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

## contentOrdersRefund

Deprecated, please use returnRefundLineItem instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersRefundRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersRefundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersRefundRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersRefundRequest = new OrdersRefundRequest();
    $request->ordersRefundRequest->amount = new Price();
    $request->ordersRefundRequest->amount->currency = 'nobis';
    $request->ordersRefundRequest->amount->value = 'dolorum';
    $request->ordersRefundRequest->amountPretax = new Price();
    $request->ordersRefundRequest->amountPretax->currency = 'adipisci';
    $request->ordersRefundRequest->amountPretax->value = 'minus';
    $request->ordersRefundRequest->amountTax = new Price();
    $request->ordersRefundRequest->amountTax->currency = 'dolores';
    $request->ordersRefundRequest->amountTax->value = 'blanditiis';
    $request->ordersRefundRequest->operationId = 'in';
    $request->ordersRefundRequest->reason = 'dolore';
    $request->ordersRefundRequest->reasonText = 'aliquam';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'adipisci';
    $request->key = 'cum';
    $request->merchantId = 'blanditiis';
    $request->oauthToken = 'quas';
    $request->orderId = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'corrupti';

    $requestSecurity = new ContentOrdersRefundSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersRefund($request, $requestSecurity);

    if ($response->ordersRefundResponse !== null) {
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
    $request->ordersRejectReturnLineItemRequest->lineItemId = 'totam';
    $request->ordersRejectReturnLineItemRequest->operationId = 'hic';
    $request->ordersRejectReturnLineItemRequest->productId = 'exercitationem';
    $request->ordersRejectReturnLineItemRequest->quantity = 750765;
    $request->ordersRejectReturnLineItemRequest->reason = 'sit';
    $request->ordersRejectReturnLineItemRequest->reasonText = 'rerum';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'asperiores';
    $request->key = 'facilis';
    $request->merchantId = 'voluptate';
    $request->oauthToken = 'expedita';
    $request->orderId = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'laborum';

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

## contentOrdersReturnlineitem

Returns a line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersReturnlineitemRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrdersReturnLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersReturnlineitemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersReturnlineitemRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersReturnLineItemRequest = new OrdersReturnLineItemRequest();
    $request->ordersReturnLineItemRequest->lineItemId = 'in';
    $request->ordersReturnLineItemRequest->operationId = 'commodi';
    $request->ordersReturnLineItemRequest->productId = 'quidem';
    $request->ordersReturnLineItemRequest->quantity = 131289;
    $request->ordersReturnLineItemRequest->reason = 'voluptas';
    $request->ordersReturnLineItemRequest->reasonText = 'unde';
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'debitis';
    $request->key = 'illo';
    $request->merchantId = 'reiciendis';
    $request->oauthToken = 'perferendis';
    $request->orderId = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new ContentOrdersReturnlineitemSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->contentOrdersReturnlineitem($request, $requestSecurity);

    if ($response->ordersReturnLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrdersReturnrefundlineitem

Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.

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
    $request->ordersReturnRefundLineItemRequest->amountPretax = new Price();
    $request->ordersReturnRefundLineItemRequest->amountPretax->currency = 'eius';
    $request->ordersReturnRefundLineItemRequest->amountPretax->value = 'necessitatibus';
    $request->ordersReturnRefundLineItemRequest->amountTax = new Price();
    $request->ordersReturnRefundLineItemRequest->amountTax->currency = 'ipsum';
    $request->ordersReturnRefundLineItemRequest->amountTax->value = 'ea';
    $request->ordersReturnRefundLineItemRequest->lineItemId = 'occaecati';
    $request->ordersReturnRefundLineItemRequest->operationId = 'quos';
    $request->ordersReturnRefundLineItemRequest->productId = 'voluptatibus';
    $request->ordersReturnRefundLineItemRequest->quantity = 271653;
    $request->ordersReturnRefundLineItemRequest->reason = 'tempora';
    $request->ordersReturnRefundLineItemRequest->reasonText = 'voluptate';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'non';
    $request->key = 'officiis';
    $request->merchantId = 'praesentium';
    $request->oauthToken = 'facilis';
    $request->orderId = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'debitis';

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

Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ordersSetLineItemMetadataRequest = new OrdersSetLineItemMetadataRequest();
    $request->ordersSetLineItemMetadataRequest->annotations = [
        new OrderMerchantProvidedAnnotation(),
    ];
    $request->ordersSetLineItemMetadataRequest->lineItemId = 'nobis';
    $request->ordersSetLineItemMetadataRequest->operationId = 'error';
    $request->ordersSetLineItemMetadataRequest->productId = 'veniam';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'nulla';
    $request->key = 'magni';
    $request->merchantId = 'aperiam';
    $request->oauthToken = 'saepe';
    $request->orderId = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersShipLineItemsRequest = new OrdersShipLineItemsRequest();
    $request->ordersShipLineItemsRequest->carrier = 'laudantium';
    $request->ordersShipLineItemsRequest->lineItems = [
        new OrderShipmentLineItemShipment(),
        new OrderShipmentLineItemShipment(),
    ];
    $request->ordersShipLineItemsRequest->operationId = 'praesentium';
    $request->ordersShipLineItemsRequest->shipmentGroupId = 'cum';
    $request->ordersShipLineItemsRequest->shipmentId = 'laboriosam';
    $request->ordersShipLineItemsRequest->shipmentInfos = [
        new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(),
        new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(),
        new OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo(),
    ];
    $request->ordersShipLineItemsRequest->trackingId = 'voluptatum';
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'expedita';
    $request->fields = 'debitis';
    $request->key = 'neque';
    $request->merchantId = 'dolorum';
    $request->oauthToken = 'nostrum';
    $request->orderId = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'accusamus';

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
    $request->ordersUpdateLineItemShippingDetailsRequest->deliverByDate = 'atque';
    $request->ordersUpdateLineItemShippingDetailsRequest->lineItemId = 'fugit';
    $request->ordersUpdateLineItemShippingDetailsRequest->operationId = 'ut';
    $request->ordersUpdateLineItemShippingDetailsRequest->productId = 'fugiat';
    $request->ordersUpdateLineItemShippingDetailsRequest->shipByDate = 'voluptatem';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'consequatur';
    $request->key = 'esse';
    $request->merchantId = 'ipsam';
    $request->oauthToken = 'sit';
    $request->orderId = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quas';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersUpdateMerchantOrderIdRequest = new OrdersUpdateMerchantOrderIdRequest();
    $request->ordersUpdateMerchantOrderIdRequest->merchantOrderId = 'blanditiis';
    $request->ordersUpdateMerchantOrderIdRequest->operationId = 'ex';
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'nostrum';
    $request->key = 'saepe';
    $request->merchantId = 'error';
    $request->oauthToken = 'consequatur';
    $request->orderId = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'harum';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrdersUpdateshipmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrdersUpdateshipmentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->ordersUpdateShipmentRequest = new OrdersUpdateShipmentRequest();
    $request->ordersUpdateShipmentRequest->carrier = 'architecto';
    $request->ordersUpdateShipmentRequest->deliveryDate = 'occaecati';
    $request->ordersUpdateShipmentRequest->operationId = 'labore';
    $request->ordersUpdateShipmentRequest->shipmentId = 'quidem';
    $request->ordersUpdateShipmentRequest->status = 'atque';
    $request->ordersUpdateShipmentRequest->trackingId = 'laborum';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'alias';
    $request->key = 'amet';
    $request->merchantId = 'deserunt';
    $request->oauthToken = 'voluptate';
    $request->orderId = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'repellendus';

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
