# orderinvoices

### Available Operations

* [contentOrderinvoicesCreatechargeinvoice](#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [contentOrderinvoicesCreaterefundinvoice](#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

## contentOrderinvoicesCreatechargeinvoice

Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderinvoicesCreatechargeinvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderinvoicesCreateChargeInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceSummary;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceSummaryAdditionalChargeSummary;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentInvoiceLineItemInvoice;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoice;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoiceAdditionalCharge;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoiceTaxLine;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderinvoicesCreatechargeinvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderinvoicesCreatechargeinvoiceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->orderinvoicesCreateChargeInvoiceRequest = new OrderinvoicesCreateChargeInvoiceRequest();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceId = 'ullam';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary = new InvoiceSummary();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->additionalChargeSummaries = [
        new InvoiceSummaryAdditionalChargeSummary(),
        new InvoiceSummaryAdditionalChargeSummary(),
    ];
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal = new Amount();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->priceAmount = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->priceAmount->currency = 'nam';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->priceAmount->value = 'earum';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->taxAmount = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->taxAmount->currency = 'officia';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->taxAmount->value = 'laborum';
    $request->orderinvoicesCreateChargeInvoiceRequest->lineItemInvoices = [
        new ShipmentInvoiceLineItemInvoice(),
        new ShipmentInvoiceLineItemInvoice(),
        new ShipmentInvoiceLineItemInvoice(),
        new ShipmentInvoiceLineItemInvoice(),
    ];
    $request->orderinvoicesCreateChargeInvoiceRequest->operationId = 'modi';
    $request->orderinvoicesCreateChargeInvoiceRequest->shipmentGroupId = 'voluptatibus';
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'cumque';
    $request->key = 'vitae';
    $request->merchantId = 'rerum';
    $request->oauthToken = 'tempora';
    $request->orderId = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ContentOrderinvoicesCreatechargeinvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderinvoices->contentOrderinvoicesCreatechargeinvoice($request, $requestSecurity);

    if ($response->orderinvoicesCreateChargeInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderinvoicesCreaterefundinvoice

Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderinvoicesCreaterefundinvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderinvoicesCreateRefundInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
use \OpenAPI\OpenAPI\Models\Shared\OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentInvoice;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceSummary;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceSummaryAdditionalChargeSummary;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\ShipmentInvoiceLineItemInvoice;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoice;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoiceAdditionalCharge;
use \OpenAPI\OpenAPI\Models\Shared\UnitInvoiceTaxLine;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderinvoicesCreaterefundinvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderinvoicesCreaterefundinvoiceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->orderinvoicesCreateRefundInvoiceRequest = new OrderinvoicesCreateRefundInvoiceRequest();
    $request->orderinvoicesCreateRefundInvoiceRequest->invoiceId = 'perferendis';
    $request->orderinvoicesCreateRefundInvoiceRequest->operationId = 'velit';
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption();
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption->description = 'aspernatur';
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption->reason = 'eum';
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption();
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption->description = 'eius';
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption->reason = 'rem';
    $request->orderinvoicesCreateRefundInvoiceRequest->shipmentInvoices = [
        new ShipmentInvoice(),
        new ShipmentInvoice(),
        new ShipmentInvoice(),
        new ShipmentInvoice(),
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'eum';
    $request->key = 'dicta';
    $request->merchantId = 'minima';
    $request->oauthToken = 'beatae';
    $request->orderId = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new ContentOrderinvoicesCreaterefundinvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderinvoices->contentOrderinvoicesCreaterefundinvoice($request, $requestSecurity);

    if ($response->orderinvoicesCreateRefundInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
