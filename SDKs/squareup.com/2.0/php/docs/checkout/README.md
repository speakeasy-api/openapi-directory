# checkout

### Available Operations

* [createCheckout](#createcheckout) - CreateCheckout

## createCheckout

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCheckoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCheckoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChargeRequestAdditionalRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemDiscount;
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
use \OpenAPI\OpenAPI\Models\Operations\CreateCheckoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCheckoutRequest();
    $request->createCheckoutRequest = new CreateCheckoutRequest();
    $request->createCheckoutRequest->additionalRecipients = [
        new ChargeRequestAdditionalRecipient(),
        new ChargeRequestAdditionalRecipient(),
    ];
    $request->createCheckoutRequest->askForShippingAddress = false;
    $request->createCheckoutRequest->idempotencyKey = 'facilis';
    $request->createCheckoutRequest->merchantSupportEmail = 'cupiditate';
    $request->createCheckoutRequest->note = 'qui';
    $request->createCheckoutRequest->order = new CreateOrderRequest();
    $request->createCheckoutRequest->order->idempotencyKey = 'quae';
    $request->createCheckoutRequest->order->order = new Order();
    $request->createCheckoutRequest->order->order->closedAt = 'laudantium';
    $request->createCheckoutRequest->order->order->createdAt = 'odio';
    $request->createCheckoutRequest->order->order->customerId = 'occaecati';
    $request->createCheckoutRequest->order->order->discounts = [
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
        new OrderLineItemDiscount(),
    ];
    $request->createCheckoutRequest->order->order->fulfillments = [
        new OrderFulfillment(),
        new OrderFulfillment(),
        new OrderFulfillment(),
        new OrderFulfillment(),
    ];
    $request->createCheckoutRequest->order->order->id = 'e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf';
    $request->createCheckoutRequest->order->order->lineItems = [
        new OrderLineItem(),
        new OrderLineItem(),
        new OrderLineItem(),
        new OrderLineItem(),
    ];
    $request->createCheckoutRequest->order->order->locationId = 'iusto';
    $request->createCheckoutRequest->order->order->metadata = [
        'ducimus' => 'alias',
        'officia' => 'tempora',
        'ipsam' => 'ea',
        'aspernatur' => 'vel',
    ];
    $request->createCheckoutRequest->order->order->netAmounts = new OrderMoneyAmounts();
    $request->createCheckoutRequest->order->order->netAmounts->discountMoney = new Money();
    $request->createCheckoutRequest->order->order->netAmounts->discountMoney->amount = 822118;
    $request->createCheckoutRequest->order->order->netAmounts->discountMoney->currency = 'magnam';
    $request->createCheckoutRequest->order->order->netAmounts->serviceChargeMoney = new Money();
    $request->createCheckoutRequest->order->order->netAmounts->serviceChargeMoney->amount = 189848;
    $request->createCheckoutRequest->order->order->netAmounts->serviceChargeMoney->currency = 'ex';
    $request->createCheckoutRequest->order->order->netAmounts->taxMoney = new Money();
    $request->createCheckoutRequest->order->order->netAmounts->taxMoney->amount = 511319;
    $request->createCheckoutRequest->order->order->netAmounts->taxMoney->currency = 'dicta';
    $request->createCheckoutRequest->order->order->netAmounts->tipMoney = new Money();
    $request->createCheckoutRequest->order->order->netAmounts->tipMoney->amount = 224317;
    $request->createCheckoutRequest->order->order->netAmounts->tipMoney->currency = 'maiores';
    $request->createCheckoutRequest->order->order->netAmounts->totalMoney = new Money();
    $request->createCheckoutRequest->order->order->netAmounts->totalMoney->amount = 97844;
    $request->createCheckoutRequest->order->order->netAmounts->totalMoney->currency = 'ex';
    $request->createCheckoutRequest->order->order->pricingOptions = new OrderPricingOptions();
    $request->createCheckoutRequest->order->order->pricingOptions->autoApplyDiscounts = false;
    $request->createCheckoutRequest->order->order->pricingOptions->autoApplyTaxes = false;
    $request->createCheckoutRequest->order->order->referenceId = 'nulla';
    $request->createCheckoutRequest->order->order->refunds = [
        new Refund(),
        new Refund(),
        new Refund(),
    ];
    $request->createCheckoutRequest->order->order->returnAmounts = new OrderMoneyAmounts();
    $request->createCheckoutRequest->order->order->returnAmounts->discountMoney = new Money();
    $request->createCheckoutRequest->order->order->returnAmounts->discountMoney->amount = 972920;
    $request->createCheckoutRequest->order->order->returnAmounts->discountMoney->currency = 'nostrum';
    $request->createCheckoutRequest->order->order->returnAmounts->serviceChargeMoney = new Money();
    $request->createCheckoutRequest->order->order->returnAmounts->serviceChargeMoney->amount = 960835;
    $request->createCheckoutRequest->order->order->returnAmounts->serviceChargeMoney->currency = 'quisquam';
    $request->createCheckoutRequest->order->order->returnAmounts->taxMoney = new Money();
    $request->createCheckoutRequest->order->order->returnAmounts->taxMoney->amount = 906556;
    $request->createCheckoutRequest->order->order->returnAmounts->taxMoney->currency = 'ea';
    $request->createCheckoutRequest->order->order->returnAmounts->tipMoney = new Money();
    $request->createCheckoutRequest->order->order->returnAmounts->tipMoney->amount = 774048;
    $request->createCheckoutRequest->order->order->returnAmounts->tipMoney->currency = 'corporis';
    $request->createCheckoutRequest->order->order->returnAmounts->totalMoney = new Money();
    $request->createCheckoutRequest->order->order->returnAmounts->totalMoney->amount = 333145;
    $request->createCheckoutRequest->order->order->returnAmounts->totalMoney->currency = 'aliquid';
    $request->createCheckoutRequest->order->order->returns = [
        new OrderReturn(),
    ];
    $request->createCheckoutRequest->order->order->rewards = [
        new OrderReward(),
        new OrderReward(),
    ];
    $request->createCheckoutRequest->order->order->roundingAdjustment = new OrderRoundingAdjustment();
    $request->createCheckoutRequest->order->order->roundingAdjustment->amountMoney = new Money();
    $request->createCheckoutRequest->order->order->roundingAdjustment->amountMoney->amount = 407241;
    $request->createCheckoutRequest->order->order->roundingAdjustment->amountMoney->currency = 'quo';
    $request->createCheckoutRequest->order->order->roundingAdjustment->name = 'Kate Cole DVM';
    $request->createCheckoutRequest->order->order->roundingAdjustment->uid = 'libero';
    $request->createCheckoutRequest->order->order->serviceCharges = [
        new OrderServiceCharge(),
    ];
    $request->createCheckoutRequest->order->order->source = new OrderSource();
    $request->createCheckoutRequest->order->order->source->name = 'Margie Russel';
    $request->createCheckoutRequest->order->order->state = 'accusamus';
    $request->createCheckoutRequest->order->order->taxes = [
        new OrderLineItemTax(),
    ];
    $request->createCheckoutRequest->order->order->tenders = [
        new Tender(),
        new Tender(),
    ];
    $request->createCheckoutRequest->order->order->totalDiscountMoney = new Money();
    $request->createCheckoutRequest->order->order->totalDiscountMoney->amount = 89603;
    $request->createCheckoutRequest->order->order->totalDiscountMoney->currency = 'dolorum';
    $request->createCheckoutRequest->order->order->totalMoney = new Money();
    $request->createCheckoutRequest->order->order->totalMoney->amount = 672048;
    $request->createCheckoutRequest->order->order->totalMoney->currency = 'placeat';
    $request->createCheckoutRequest->order->order->totalServiceChargeMoney = new Money();
    $request->createCheckoutRequest->order->order->totalServiceChargeMoney->amount = 245367;
    $request->createCheckoutRequest->order->order->totalServiceChargeMoney->currency = 'eum';
    $request->createCheckoutRequest->order->order->totalTaxMoney = new Money();
    $request->createCheckoutRequest->order->order->totalTaxMoney->amount = 420539;
    $request->createCheckoutRequest->order->order->totalTaxMoney->currency = 'nobis';
    $request->createCheckoutRequest->order->order->totalTipMoney = new Money();
    $request->createCheckoutRequest->order->order->totalTipMoney->amount = 557369;
    $request->createCheckoutRequest->order->order->totalTipMoney->currency = 'assumenda';
    $request->createCheckoutRequest->order->order->updatedAt = 'nulla';
    $request->createCheckoutRequest->order->order->version = 379034;
    $request->createCheckoutRequest->prePopulateBuyerEmail = 'libero';
    $request->createCheckoutRequest->prePopulateShippingAddress = new Address();
    $request->createCheckoutRequest->prePopulateShippingAddress->addressLine1 = 'quasi';
    $request->createCheckoutRequest->prePopulateShippingAddress->addressLine2 = 'tempora';
    $request->createCheckoutRequest->prePopulateShippingAddress->addressLine3 = 'numquam';
    $request->createCheckoutRequest->prePopulateShippingAddress->administrativeDistrictLevel1 = 'explicabo';
    $request->createCheckoutRequest->prePopulateShippingAddress->administrativeDistrictLevel2 = 'provident';
    $request->createCheckoutRequest->prePopulateShippingAddress->administrativeDistrictLevel3 = 'ipsa';
    $request->createCheckoutRequest->prePopulateShippingAddress->country = 'Kyrgyz Republic';
    $request->createCheckoutRequest->prePopulateShippingAddress->firstName = 'Elisha';
    $request->createCheckoutRequest->prePopulateShippingAddress->lastName = 'Kuhlman';
    $request->createCheckoutRequest->prePopulateShippingAddress->locality = 'eius';
    $request->createCheckoutRequest->prePopulateShippingAddress->organization = 'esse';
    $request->createCheckoutRequest->prePopulateShippingAddress->postalCode = '56468';
    $request->createCheckoutRequest->prePopulateShippingAddress->sublocality = 'ut';
    $request->createCheckoutRequest->prePopulateShippingAddress->sublocality2 = 'eum';
    $request->createCheckoutRequest->prePopulateShippingAddress->sublocality3 = 'suscipit';
    $request->createCheckoutRequest->redirectUrl = 'assumenda';
    $request->locationId = 'eos';

    $requestSecurity = new CreateCheckoutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->checkout->createCheckout($request, $requestSecurity);

    if ($response->createCheckoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
