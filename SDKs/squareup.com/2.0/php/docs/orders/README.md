# orders

### Available Operations

* [batchRetrieveOrders](#batchretrieveorders) - BatchRetrieveOrders
* [calculateOrder](#calculateorder) - CalculateOrder
* [createOrder](#createorder) - CreateOrder
* [payOrder](#payorder) - PayOrder
* [searchOrders](#searchorders) - SearchOrders
* [getV2OrdersOrderId](#getv2ordersorderid) - RetrieveOrder
* [putV2OrdersOrderId](#putv2ordersorderid) - UpdateOrder

## batchRetrieveOrders

Retrieves a set of [orders](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by their IDs.

If a given order ID does not exist, the ID is ignored instead of generating an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetrieveOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchRetrieveOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchRetrieveOrdersRequest();
    $request->locationId = 'itaque';
    $request->orderIds = [
        'quisquam',
        'enim',
        'doloribus',
        'assumenda',
    ];

    $requestSecurity = new BatchRetrieveOrdersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->batchRetrieveOrders($request, $requestSecurity);

    if ($response->batchRetrieveOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## calculateOrder

Enables applications to preview order pricing without creating an order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CalculateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemDiscount;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillment;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentShipmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklists;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderQuantityUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\OrderMoneyAmounts;
use \OpenAPI\OpenAPI\Models\Shared\OrderPricingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Refund;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalRecipient;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturn;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderRoundingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\OrderReward;
use \OpenAPI\OpenAPI\Models\Shared\OrderServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderSource;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemTax;
use \OpenAPI\OpenAPI\Models\Shared\Tender;
use \OpenAPI\OpenAPI\Models\Shared\TenderCardDetails;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\TenderCashDetails;
use \OpenAPI\OpenAPI\Models\Operations\CalculateOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CalculateOrderRequest();
    $request->order = new Order();
    $request->order->closedAt = 'officiis';
    $request->order->createdAt = 'architecto';
    $request->order->customerId = 'alias';
    $request->order->discounts = [
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
    ];
    $request->order->fulfillments = [
        new OrderFulfillment(),
    ];
    $request->order->id = 'ce2169e5-1001-49c6-9c5e-34762799bfbb';
    $request->order->lineItems = [
        new OrderLineItem(),
        new OrderLineItem(),
        new OrderLineItem(),
        new OrderLineItem(),
    ];
    $request->order->locationId = 'laboriosam';
    $request->order->metadata = [
        'modi' => 'perspiciatis',
        'hic' => 'cum',
        'aspernatur' => 'libero',
    ];
    $request->order->netAmounts = new OrderMoneyAmounts();
    $request->order->netAmounts->discountMoney = new Money();
    $request->order->netAmounts->discountMoney->amount = 720266;
    $request->order->netAmounts->discountMoney->currency = 'incidunt';
    $request->order->netAmounts->serviceChargeMoney = new Money();
    $request->order->netAmounts->serviceChargeMoney->amount = 925395;
    $request->order->netAmounts->serviceChargeMoney->currency = 'quod';
    $request->order->netAmounts->taxMoney = new Money();
    $request->order->netAmounts->taxMoney->amount = 664666;
    $request->order->netAmounts->taxMoney->currency = 'saepe';
    $request->order->netAmounts->tipMoney = new Money();
    $request->order->netAmounts->tipMoney->amount = 423054;
    $request->order->netAmounts->tipMoney->currency = 'quo';
    $request->order->netAmounts->totalMoney = new Money();
    $request->order->netAmounts->totalMoney->amount = 198991;
    $request->order->netAmounts->totalMoney->currency = 'illum';
    $request->order->pricingOptions = new OrderPricingOptions();
    $request->order->pricingOptions->autoApplyDiscounts = false;
    $request->order->pricingOptions->autoApplyTaxes = false;
    $request->order->referenceId = 'nemo';
    $request->order->refunds = [
        new Refund(),
        new Refund(),
        new Refund(),
        new Refund(),
    ];
    $request->order->returnAmounts = new OrderMoneyAmounts();
    $request->order->returnAmounts->discountMoney = new Money();
    $request->order->returnAmounts->discountMoney->amount = 706872;
    $request->order->returnAmounts->discountMoney->currency = 'non';
    $request->order->returnAmounts->serviceChargeMoney = new Money();
    $request->order->returnAmounts->serviceChargeMoney->amount = 649534;
    $request->order->returnAmounts->serviceChargeMoney->currency = 'assumenda';
    $request->order->returnAmounts->taxMoney = new Money();
    $request->order->returnAmounts->taxMoney->amount = 927977;
    $request->order->returnAmounts->taxMoney->currency = 'distinctio';
    $request->order->returnAmounts->tipMoney = new Money();
    $request->order->returnAmounts->tipMoney->amount = 866861;
    $request->order->returnAmounts->tipMoney->currency = 'ad';
    $request->order->returnAmounts->totalMoney = new Money();
    $request->order->returnAmounts->totalMoney->amount = 816151;
    $request->order->returnAmounts->totalMoney->currency = 'laborum';
    $request->order->returns = [
        new OrderReturn(),
        new OrderReturn(),
        new OrderReturn(),
        new OrderReturn(),
    ];
    $request->order->rewards = [
        new OrderReward(),
        new OrderReward(),
        new OrderReward(),
    ];
    $request->order->roundingAdjustment = new OrderRoundingAdjustment();
    $request->order->roundingAdjustment->amountMoney = new Money();
    $request->order->roundingAdjustment->amountMoney->amount = 276337;
    $request->order->roundingAdjustment->amountMoney->currency = 'maxime';
    $request->order->roundingAdjustment->name = 'Mary Hoeger';
    $request->order->roundingAdjustment->uid = 'laborum';
    $request->order->serviceCharges = [
        new OrderServiceCharge(),
        new OrderServiceCharge(),
        new OrderServiceCharge(),
    ];
    $request->order->source = new OrderSource();
    $request->order->source->name = 'Mr. Leroy Sanford';
    $request->order->state = 'magnam';
    $request->order->taxes = [
        new OrderLineItemTax(),
        new OrderLineItemTax(),
    ];
    $request->order->tenders = [
        new Tender(),
        new Tender(),
        new Tender(),
        new Tender(),
    ];
    $request->order->totalDiscountMoney = new Money();
    $request->order->totalDiscountMoney->amount = 942185;
    $request->order->totalDiscountMoney->currency = 'nostrum';
    $request->order->totalMoney = new Money();
    $request->order->totalMoney->amount = 888265;
    $request->order->totalMoney->currency = 'unde';
    $request->order->totalServiceChargeMoney = new Money();
    $request->order->totalServiceChargeMoney->amount = 860311;
    $request->order->totalServiceChargeMoney->currency = 'error';
    $request->order->totalTaxMoney = new Money();
    $request->order->totalTaxMoney->amount = 653000;
    $request->order->totalTaxMoney->currency = 'magnam';
    $request->order->totalTipMoney = new Money();
    $request->order->totalTipMoney->amount = 344289;
    $request->order->totalTipMoney->currency = 'esse';
    $request->order->updatedAt = 'corrupti';
    $request->order->version = 684799;
    $request->proposedRewards = [
        new OrderReward(),
        new OrderReward(),
        new OrderReward(),
        new OrderReward(),
    ];

    $requestSecurity = new CalculateOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->calculateOrder($request, $requestSecurity);

    if ($response->calculateOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrder

Creates a new [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that can include information about products for
purchase and settings to apply to the purchase.

To pay for a created order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

You can modify open orders using the [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemDiscount;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillment;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentShipmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklists;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderQuantityUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\OrderMoneyAmounts;
use \OpenAPI\OpenAPI\Models\Shared\OrderPricingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Refund;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalRecipient;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturn;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderRoundingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\OrderReward;
use \OpenAPI\OpenAPI\Models\Shared\OrderServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderSource;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemTax;
use \OpenAPI\OpenAPI\Models\Shared\Tender;
use \OpenAPI\OpenAPI\Models\Shared\TenderCardDetails;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\TenderCashDetails;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrderRequest();
    $request->idempotencyKey = 'impedit';
    $request->order = new Order();
    $request->order->closedAt = 'quasi';
    $request->order->createdAt = 'deserunt';
    $request->order->customerId = 'quod';
    $request->order->discounts = [
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
    ];
    $request->order->fulfillments = [
        new OrderFulfillment(),
    ];
    $request->order->id = '0dec001a-c802-4e2e-809f-f8f0f816ff34';
    $request->order->lineItems = [
        new OrderLineItem(),
        new OrderLineItem(),
    ];
    $request->order->locationId = 'in';
    $request->order->metadata = [
        'quasi' => 'neque',
        'vero' => 'excepturi',
        'accusantium' => 'qui',
        'impedit' => 'beatae',
    ];
    $request->order->netAmounts = new OrderMoneyAmounts();
    $request->order->netAmounts->discountMoney = new Money();
    $request->order->netAmounts->discountMoney->amount = 278329;
    $request->order->netAmounts->discountMoney->currency = 'dicta';
    $request->order->netAmounts->serviceChargeMoney = new Money();
    $request->order->netAmounts->serviceChargeMoney->amount = 139133;
    $request->order->netAmounts->serviceChargeMoney->currency = 'corporis';
    $request->order->netAmounts->taxMoney = new Money();
    $request->order->netAmounts->taxMoney->amount = 701441;
    $request->order->netAmounts->taxMoney->currency = 'alias';
    $request->order->netAmounts->tipMoney = new Money();
    $request->order->netAmounts->tipMoney->amount = 624498;
    $request->order->netAmounts->tipMoney->currency = 'vel';
    $request->order->netAmounts->totalMoney = new Money();
    $request->order->netAmounts->totalMoney->amount = 35581;
    $request->order->netAmounts->totalMoney->currency = 'id';
    $request->order->pricingOptions = new OrderPricingOptions();
    $request->order->pricingOptions->autoApplyDiscounts = false;
    $request->order->pricingOptions->autoApplyTaxes = false;
    $request->order->referenceId = 'laboriosam';
    $request->order->refunds = [
        new Refund(),
        new Refund(),
    ];
    $request->order->returnAmounts = new OrderMoneyAmounts();
    $request->order->returnAmounts->discountMoney = new Money();
    $request->order->returnAmounts->discountMoney->amount = 555679;
    $request->order->returnAmounts->discountMoney->currency = 'veritatis';
    $request->order->returnAmounts->serviceChargeMoney = new Money();
    $request->order->returnAmounts->serviceChargeMoney->amount = 356440;
    $request->order->returnAmounts->serviceChargeMoney->currency = 'quae';
    $request->order->returnAmounts->taxMoney = new Money();
    $request->order->returnAmounts->taxMoney->amount = 631719;
    $request->order->returnAmounts->taxMoney->currency = 'incidunt';
    $request->order->returnAmounts->tipMoney = new Money();
    $request->order->returnAmounts->tipMoney->amount = 462583;
    $request->order->returnAmounts->tipMoney->currency = 'magni';
    $request->order->returnAmounts->totalMoney = new Money();
    $request->order->returnAmounts->totalMoney->amount = 646329;
    $request->order->returnAmounts->totalMoney->currency = 'delectus';
    $request->order->returns = [
        new OrderReturn(),
        new OrderReturn(),
        new OrderReturn(),
    ];
    $request->order->rewards = [
        new OrderReward(),
    ];
    $request->order->roundingAdjustment = new OrderRoundingAdjustment();
    $request->order->roundingAdjustment->amountMoney = new Money();
    $request->order->roundingAdjustment->amountMoney->amount = 200950;
    $request->order->roundingAdjustment->amountMoney->currency = 'maxime';
    $request->order->roundingAdjustment->name = 'Shelly Gutmann';
    $request->order->roundingAdjustment->uid = 'laudantium';
    $request->order->serviceCharges = [
        new OrderServiceCharge(),
    ];
    $request->order->source = new OrderSource();
    $request->order->source->name = 'Miss Vincent Hickle';
    $request->order->state = 'quas';
    $request->order->taxes = [
        new OrderLineItemTax(),
        new OrderLineItemTax(),
    ];
    $request->order->tenders = [
        new Tender(),
        new Tender(),
    ];
    $request->order->totalDiscountMoney = new Money();
    $request->order->totalDiscountMoney->amount = 989033;
    $request->order->totalDiscountMoney->currency = 'a';
    $request->order->totalMoney = new Money();
    $request->order->totalMoney->amount = 749702;
    $request->order->totalMoney->currency = 'perspiciatis';
    $request->order->totalServiceChargeMoney = new Money();
    $request->order->totalServiceChargeMoney->amount = 34245;
    $request->order->totalServiceChargeMoney->currency = 'dicta';
    $request->order->totalTaxMoney = new Money();
    $request->order->totalTaxMoney->amount = 795546;
    $request->order->totalTaxMoney->currency = 'commodi';
    $request->order->totalTipMoney = new Money();
    $request->order->totalTipMoney->amount = 908734;
    $request->order->totalTipMoney->currency = 'porro';
    $request->order->updatedAt = 'tempore';
    $request->order->version = 693747;

    $requestSecurity = new CreateOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->createOrder($request, $requestSecurity);

    if ($response->createOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## payOrder

Pay for an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) using one or more approved [payments](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment)
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with `PayOrder`, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
Any approved payments that reference the same `order_id` not specified in the
`payment_ids` is canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-capture).
Using a delayed capture payment with `PayOrder` completes the approved payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PayOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PayOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayOrderRequest();
    $request->payOrderRequest = new PayOrderRequest();
    $request->payOrderRequest->idempotencyKey = 'modi';
    $request->payOrderRequest->orderVersion = 916341;
    $request->payOrderRequest->paymentIds = [
        'eius',
    ];
    $request->orderId = 'sequi';

    $requestSecurity = new PayOrderSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->payOrder($request, $requestSecurity);

    if ($response->payOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchOrders

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
ecosystem (such as Point of Sale, Invoices, and Connect APIs).

`SearchOrders` requests need to specify which locations to search and define a
[SearchOrdersQuery](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersQuery) object that controls
how to sort or filter the results. Your `SearchOrdersQuery` can:

  Set filter criteria.
  Set the sort order.
  Determine whether to return results as complete `Order` objects or as
[OrderEntry](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode might not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersQuery;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersCustomerFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersDateTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersFulfillmentFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersSourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersStateFilter;
use \OpenAPI\OpenAPI\Models\Shared\SearchOrdersSort;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOrdersRequest();
    $request->cursor = 'eligendi';
    $request->limit = 992887;
    $request->locationIds = [
        'blanditiis',
        'sint',
    ];
    $request->query = new SearchOrdersQuery();
    $request->query->filter = new SearchOrdersFilter();
    $request->query->filter->customerFilter = new SearchOrdersCustomerFilter();
    $request->query->filter->customerFilter->customerIds = [
        'a',
        'animi',
        'maiores',
        'itaque',
    ];
    $request->query->filter->dateTimeFilter = new SearchOrdersDateTimeFilter();
    $request->query->filter->dateTimeFilter->closedAt = new TimeRange();
    $request->query->filter->dateTimeFilter->closedAt->endAt = 'nulla';
    $request->query->filter->dateTimeFilter->closedAt->startAt = 'deserunt';
    $request->query->filter->dateTimeFilter->createdAt = new TimeRange();
    $request->query->filter->dateTimeFilter->createdAt->endAt = 'corporis';
    $request->query->filter->dateTimeFilter->createdAt->startAt = 'velit';
    $request->query->filter->dateTimeFilter->updatedAt = new TimeRange();
    $request->query->filter->dateTimeFilter->updatedAt->endAt = 'officiis';
    $request->query->filter->dateTimeFilter->updatedAt->startAt = 'enim';
    $request->query->filter->fulfillmentFilter = new SearchOrdersFulfillmentFilter();
    $request->query->filter->fulfillmentFilter->fulfillmentStates = [
        'saepe',
        'eum',
        'repudiandae',
    ];
    $request->query->filter->fulfillmentFilter->fulfillmentTypes = [
        'officia',
    ];
    $request->query->filter->sourceFilter = new SearchOrdersSourceFilter();
    $request->query->filter->sourceFilter->sourceNames = [
        'quasi',
        'blanditiis',
        'eius',
        'quisquam',
    ];
    $request->query->filter->stateFilter = new SearchOrdersStateFilter();
    $request->query->filter->stateFilter->states = [
        'nobis',
    ];
    $request->query->sort = new SearchOrdersSort();
    $request->query->sort->sortField = 'natus';
    $request->query->sort->sortOrder = 'minus';
    $request->returnEntries = false;

    $requestSecurity = new SearchOrdersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->searchOrders($request, $requestSecurity);

    if ($response->searchOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2OrdersOrderId

Retrieves an [Order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2OrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2OrdersOrderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2OrdersOrderIdRequest();
    $request->orderId = 'quia';

    $requestSecurity = new GetV2OrdersOrderIdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->getV2OrdersOrderId($request, $requestSecurity);

    if ($response->retrieveOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2OrdersOrderId

Updates an open [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An `UpdateOrder` request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects)
containing only the fields to update and the version to which the update is
being applied.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
identifying the fields to clear.

To pay for an order, see 
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2OrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemDiscount;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillment;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentShipmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemAppliedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklists;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemPricingBlocklistsBlockedTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderQuantityUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnit;
use \OpenAPI\OpenAPI\Models\Shared\MeasurementUnitCustom;
use \OpenAPI\OpenAPI\Models\Shared\OrderMoneyAmounts;
use \OpenAPI\OpenAPI\Models\Shared\OrderPricingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Refund;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalRecipient;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturn;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnDiscount;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnLineItemModifier;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderReturnTax;
use \OpenAPI\OpenAPI\Models\Shared\OrderRoundingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\OrderReward;
use \OpenAPI\OpenAPI\Models\Shared\OrderServiceCharge;
use \OpenAPI\OpenAPI\Models\Shared\OrderSource;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemTax;
use \OpenAPI\OpenAPI\Models\Shared\Tender;
use \OpenAPI\OpenAPI\Models\Shared\TenderCardDetails;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\TenderCashDetails;
use \OpenAPI\OpenAPI\Models\Operations\PutV2OrdersOrderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2OrdersOrderIdRequest();
    $request->updateOrderRequest = new UpdateOrderRequest();
    $request->updateOrderRequest->fieldsToClear = [
        'reprehenderit',
        'quod',
    ];
    $request->updateOrderRequest->idempotencyKey = 'quos';
    $request->updateOrderRequest->order = new Order();
    $request->updateOrderRequest->order->closedAt = 'corrupti';
    $request->updateOrderRequest->order->createdAt = 'amet';
    $request->updateOrderRequest->order->customerId = 'molestiae';
    $request->updateOrderRequest->order->discounts = [
        new OrderLineItemDiscount(),
    ];
    $request->updateOrderRequest->order->fulfillments = [
        new OrderFulfillment(),
        new OrderFulfillment(),
        new OrderFulfillment(),
    ];
    $request->updateOrderRequest->order->id = '40e1942f-32e5-4505-9756-f5d56d0bd0af';
    $request->updateOrderRequest->order->lineItems = [
        new OrderLineItem(),
    ];
    $request->updateOrderRequest->order->locationId = 'possimus';
    $request->updateOrderRequest->order->metadata = [
        'repudiandae' => 'architecto',
        'adipisci' => 'pariatur',
        'harum' => 'dolore',
        'voluptatibus' => 'iure',
    ];
    $request->updateOrderRequest->order->netAmounts = new OrderMoneyAmounts();
    $request->updateOrderRequest->order->netAmounts->discountMoney = new Money();
    $request->updateOrderRequest->order->netAmounts->discountMoney->amount = 127087;
    $request->updateOrderRequest->order->netAmounts->discountMoney->currency = 'minus';
    $request->updateOrderRequest->order->netAmounts->serviceChargeMoney = new Money();
    $request->updateOrderRequest->order->netAmounts->serviceChargeMoney->amount = 746688;
    $request->updateOrderRequest->order->netAmounts->serviceChargeMoney->currency = 'dolorum';
    $request->updateOrderRequest->order->netAmounts->taxMoney = new Money();
    $request->updateOrderRequest->order->netAmounts->taxMoney->amount = 242531;
    $request->updateOrderRequest->order->netAmounts->taxMoney->currency = 'earum';
    $request->updateOrderRequest->order->netAmounts->tipMoney = new Money();
    $request->updateOrderRequest->order->netAmounts->tipMoney->amount = 510020;
    $request->updateOrderRequest->order->netAmounts->tipMoney->currency = 'error';
    $request->updateOrderRequest->order->netAmounts->totalMoney = new Money();
    $request->updateOrderRequest->order->netAmounts->totalMoney->amount = 252473;
    $request->updateOrderRequest->order->netAmounts->totalMoney->currency = 'quasi';
    $request->updateOrderRequest->order->pricingOptions = new OrderPricingOptions();
    $request->updateOrderRequest->order->pricingOptions->autoApplyDiscounts = false;
    $request->updateOrderRequest->order->pricingOptions->autoApplyTaxes = false;
    $request->updateOrderRequest->order->referenceId = 'mollitia';
    $request->updateOrderRequest->order->refunds = [
        new Refund(),
        new Refund(),
        new Refund(),
        new Refund(),
    ];
    $request->updateOrderRequest->order->returnAmounts = new OrderMoneyAmounts();
    $request->updateOrderRequest->order->returnAmounts->discountMoney = new Money();
    $request->updateOrderRequest->order->returnAmounts->discountMoney->amount = 687589;
    $request->updateOrderRequest->order->returnAmounts->discountMoney->currency = 'cumque';
    $request->updateOrderRequest->order->returnAmounts->serviceChargeMoney = new Money();
    $request->updateOrderRequest->order->returnAmounts->serviceChargeMoney->amount = 42615;
    $request->updateOrderRequest->order->returnAmounts->serviceChargeMoney->currency = 'expedita';
    $request->updateOrderRequest->order->returnAmounts->taxMoney = new Money();
    $request->updateOrderRequest->order->returnAmounts->taxMoney->amount = 549237;
    $request->updateOrderRequest->order->returnAmounts->taxMoney->currency = 'eaque';
    $request->updateOrderRequest->order->returnAmounts->tipMoney = new Money();
    $request->updateOrderRequest->order->returnAmounts->tipMoney->amount = 643199;
    $request->updateOrderRequest->order->returnAmounts->tipMoney->currency = 'aliquid';
    $request->updateOrderRequest->order->returnAmounts->totalMoney = new Money();
    $request->updateOrderRequest->order->returnAmounts->totalMoney->amount = 570423;
    $request->updateOrderRequest->order->returnAmounts->totalMoney->currency = 'magni';
    $request->updateOrderRequest->order->returns = [
        new OrderReturn(),
        new OrderReturn(),
    ];
    $request->updateOrderRequest->order->rewards = [
        new OrderReward(),
        new OrderReward(),
        new OrderReward(),
        new OrderReward(),
    ];
    $request->updateOrderRequest->order->roundingAdjustment = new OrderRoundingAdjustment();
    $request->updateOrderRequest->order->roundingAdjustment->amountMoney = new Money();
    $request->updateOrderRequest->order->roundingAdjustment->amountMoney->amount = 220824;
    $request->updateOrderRequest->order->roundingAdjustment->amountMoney->currency = 'rerum';
    $request->updateOrderRequest->order->roundingAdjustment->name = 'Eloise Rowe';
    $request->updateOrderRequest->order->roundingAdjustment->uid = 'quo';
    $request->updateOrderRequest->order->serviceCharges = [
        new OrderServiceCharge(),
        new OrderServiceCharge(),
        new OrderServiceCharge(),
    ];
    $request->updateOrderRequest->order->source = new OrderSource();
    $request->updateOrderRequest->order->source->name = 'Jaime Morar Jr.';
    $request->updateOrderRequest->order->state = 'aut';
    $request->updateOrderRequest->order->taxes = [
        new OrderLineItemTax(),
        new OrderLineItemTax(),
        new OrderLineItemTax(),
        new OrderLineItemTax(),
    ];
    $request->updateOrderRequest->order->tenders = [
        new Tender(),
        new Tender(),
    ];
    $request->updateOrderRequest->order->totalDiscountMoney = new Money();
    $request->updateOrderRequest->order->totalDiscountMoney->amount = 869848;
    $request->updateOrderRequest->order->totalDiscountMoney->currency = 'possimus';
    $request->updateOrderRequest->order->totalMoney = new Money();
    $request->updateOrderRequest->order->totalMoney->amount = 205499;
    $request->updateOrderRequest->order->totalMoney->currency = 'pariatur';
    $request->updateOrderRequest->order->totalServiceChargeMoney = new Money();
    $request->updateOrderRequest->order->totalServiceChargeMoney->amount = 424853;
    $request->updateOrderRequest->order->totalServiceChargeMoney->currency = 'sapiente';
    $request->updateOrderRequest->order->totalTaxMoney = new Money();
    $request->updateOrderRequest->order->totalTaxMoney->amount = 652515;
    $request->updateOrderRequest->order->totalTaxMoney->currency = 'quae';
    $request->updateOrderRequest->order->totalTipMoney = new Money();
    $request->updateOrderRequest->order->totalTipMoney->amount = 552646;
    $request->updateOrderRequest->order->totalTipMoney->currency = 'aperiam';
    $request->updateOrderRequest->order->updatedAt = 'non';
    $request->updateOrderRequest->order->version = 913284;
    $request->orderId = 'ad';

    $requestSecurity = new PutV2OrdersOrderIdSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->putV2OrdersOrderId($request, $requestSecurity);

    if ($response->updateOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
