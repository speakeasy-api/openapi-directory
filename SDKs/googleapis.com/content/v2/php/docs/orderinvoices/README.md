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
use \OpenAPI\OpenAPI\Models\Shared\Promotion;
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
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceId = 'quisquam';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary = new InvoiceSummary();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->additionalChargeSummaries = [
        new InvoiceSummaryAdditionalChargeSummary(),
        new InvoiceSummaryAdditionalChargeSummary(),
        new InvoiceSummaryAdditionalChargeSummary(),
        new InvoiceSummaryAdditionalChargeSummary(),
    ];
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance = new Amount();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->pretax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->pretax->currency = 'ea';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->pretax->value = 'impedit';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->tax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->tax->currency = 'corporis';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->customerBalance->tax->value = 'veniam';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance = new Amount();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->pretax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->pretax->currency = 'aliquid';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->pretax->value = 'inventore';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->tax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->tax->currency = 'magnam';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->googleBalance->tax->value = 'ea';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance = new Amount();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->pretax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->pretax->currency = 'quo';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->pretax->value = 'consectetur';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->tax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->tax->currency = 'recusandae';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->merchantBalance->tax->value = 'aspernatur';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal = new Amount();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->pretax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->pretax->currency = 'minima';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->pretax->value = 'eaque';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->tax = new Price();
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->tax->currency = 'a';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->productTotal->tax->value = 'libero';
    $request->orderinvoicesCreateChargeInvoiceRequest->invoiceSummary->promotionSummaries = [
        new Promotion(),
    ];
    $request->orderinvoicesCreateChargeInvoiceRequest->lineItemInvoices = [
        new ShipmentInvoiceLineItemInvoice(),
    ];
    $request->orderinvoicesCreateChargeInvoiceRequest->operationId = 'deleniti';
    $request->orderinvoicesCreateChargeInvoiceRequest->shipmentGroupId = 'impedit';
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'inventore';
    $request->key = 'non';
    $request->merchantId = 'et';
    $request->oauthToken = 'dolorum';
    $request->orderId = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'eum';

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
use \OpenAPI\OpenAPI\Models\Shared\Promotion;
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
    $request->orderinvoicesCreateRefundInvoiceRequest->invoiceId = 'nobis';
    $request->orderinvoicesCreateRefundInvoiceRequest->operationId = 'quas';
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption();
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption->description = 'assumenda';
    $request->orderinvoicesCreateRefundInvoiceRequest->refundOnlyOption->reason = 'nulla';
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption = new OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption();
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption->description = 'voluptas';
    $request->orderinvoicesCreateRefundInvoiceRequest->returnOption->reason = 'libero';
    $request->orderinvoicesCreateRefundInvoiceRequest->shipmentInvoices = [
        new ShipmentInvoice(),
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->merchantId = 'molestiae';
    $request->oauthToken = 'magnam';
    $request->orderId = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'esse';

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
