# invoices

### Available Operations

* [cancelInvoice](#cancelinvoice) - CancelInvoice
* [createInvoice](#createinvoice) - CreateInvoice
* [deleteInvoice](#deleteinvoice) - DeleteInvoice
* [getInvoice](#getinvoice) - GetInvoice
* [listInvoices](#listinvoices) - ListInvoices
* [publishInvoice](#publishinvoice) - PublishInvoice
* [searchInvoices](#searchinvoices) - SearchInvoices
* [updateInvoice](#updateinvoice) - UpdateInvoice

## cancelInvoice

Cancels an invoice. The seller cannot collect payments for 
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelInvoiceRequest();
    $request->cancelInvoiceRequest = new CancelInvoiceRequest();
    $request->cancelInvoiceRequest->version = 62636;
    $request->invoiceId = 'perferendis';

    $requestSecurity = new CancelInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->cancelInvoice($request, $requestSecurity);

    if ($response->cancelInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInvoice

Creates a draft [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) 
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken. 
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAcceptedPaymentMethods;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCustomField;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\InvoicePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoicePaymentReminder;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\CreateInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInvoiceRequest();
    $request->idempotencyKey = 'velit';
    $request->invoice = new Invoice();
    $request->invoice->acceptedPaymentMethods = new InvoiceAcceptedPaymentMethods();
    $request->invoice->acceptedPaymentMethods->bankAccount = false;
    $request->invoice->acceptedPaymentMethods->card = false;
    $request->invoice->acceptedPaymentMethods->squareGiftCard = false;
    $request->invoice->createdAt = 'aspernatur';
    $request->invoice->customFields = [
        new InvoiceCustomField(),
        new InvoiceCustomField(),
    ];
    $request->invoice->deliveryMethod = 'eius';
    $request->invoice->description = 'rem';
    $request->invoice->id = 'dc2f6151-99eb-4fd0-a9fe-6c632ca3aed0';
    $request->invoice->invoiceNumber = 'quasi';
    $request->invoice->locationId = 'et';
    $request->invoice->nextPaymentAmountMoney = new Money();
    $request->invoice->nextPaymentAmountMoney->amount = 497777;
    $request->invoice->nextPaymentAmountMoney->currency = 'natus';
    $request->invoice->orderId = 'occaecati';
    $request->invoice->paymentRequests = [
        new InvoicePaymentRequest(),
        new InvoicePaymentRequest(),
    ];
    $request->invoice->primaryRecipient = new InvoiceRecipient();
    $request->invoice->primaryRecipient->address = new Address();
    $request->invoice->primaryRecipient->address->addressLine1 = 'adipisci';
    $request->invoice->primaryRecipient->address->addressLine2 = 'quasi';
    $request->invoice->primaryRecipient->address->addressLine3 = 'magni';
    $request->invoice->primaryRecipient->address->administrativeDistrictLevel1 = 'doloribus';
    $request->invoice->primaryRecipient->address->administrativeDistrictLevel2 = 'nulla';
    $request->invoice->primaryRecipient->address->administrativeDistrictLevel3 = 'necessitatibus';
    $request->invoice->primaryRecipient->address->country = 'Azerbaijan';
    $request->invoice->primaryRecipient->address->firstName = 'Donato';
    $request->invoice->primaryRecipient->address->lastName = 'Kovacek';
    $request->invoice->primaryRecipient->address->locality = 'molestiae';
    $request->invoice->primaryRecipient->address->organization = 'dicta';
    $request->invoice->primaryRecipient->address->postalCode = '45994';
    $request->invoice->primaryRecipient->address->sublocality = 'architecto';
    $request->invoice->primaryRecipient->address->sublocality2 = 'fugiat';
    $request->invoice->primaryRecipient->address->sublocality3 = 'doloremque';
    $request->invoice->primaryRecipient->companyName = 'dicta';
    $request->invoice->primaryRecipient->customerId = 'odio';
    $request->invoice->primaryRecipient->emailAddress = 'tempora';
    $request->invoice->primaryRecipient->familyName = 'esse';
    $request->invoice->primaryRecipient->givenName = 'ex';
    $request->invoice->primaryRecipient->phoneNumber = 'consectetur';
    $request->invoice->publicUrl = 'aliquid';
    $request->invoice->scheduledAt = 'ipsa';
    $request->invoice->status = 'laborum';
    $request->invoice->subscriptionId = 'sunt';
    $request->invoice->timezone = 'nostrum';
    $request->invoice->title = 'Dr.';
    $request->invoice->updatedAt = 'expedita';
    $request->invoice->version = 399667;

    $requestSecurity = new CreateInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->createInvoice($request, $requestSecurity);

    if ($response->createInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInvoice

Deletes the specified invoice. When an invoice is deleted, the 
associated order status changes to CANCELED. You can only delete a draft 
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInvoiceRequest();
    $request->invoiceId = 'officia';
    $request->version = 381397;

    $requestSecurity = new DeleteInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->deleteInvoice($request, $requestSecurity);

    if ($response->deleteInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoice

Retrieves an invoice by invoice ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoiceRequest();
    $request->invoiceId = 'aliquid';

    $requestSecurity = new GetInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->getInvoice($request, $requestSecurity);

    if ($response->getInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInvoices

Returns a list of invoices for a given location. The response 
is paginated. If truncated, the response includes a `cursor` that you    
use in a subsequent request to retrieve the next set of invoices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInvoicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInvoicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInvoicesRequest();
    $request->cursor = 'perferendis';
    $request->limit = 431760;
    $request->locationId = 'voluptas';

    $requestSecurity = new ListInvoicesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->listInvoices($request, $requestSecurity);

    if ($response->listInvoicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishInvoice

Publishes the specified draft invoice. 

After an invoice is published, Square 
follows up based on the invoice configuration. For example, Square 
sends the invoice to the customer's email address, charges the customer's card on file, or does 
nothing. Square also makes the invoice available on a Square-hosted invoice page. 

The invoice `status` also changes from `DRAFT` to a status 
based on the invoice configuration. For example, the status changes to `UNPAID` if 
Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the 
invoice amount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublishInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishInvoiceRequest();
    $request->publishInvoiceRequest = new PublishInvoiceRequest();
    $request->publishInvoiceRequest->idempotencyKey = 'iste';
    $request->publishInvoiceRequest->version = 661607;
    $request->invoiceId = 'ab';

    $requestSecurity = new PublishInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->publishInvoice($request, $requestSecurity);

    if ($response->publishInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchInvoices

Searches for invoices from a location specified in 
the filter. You can optionally specify customers in the filter for whom to 
retrieve invoices. In the current implementation, you can only specify one location and 
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor` 
that you use in a subsequent request to retrieve the next set of invoices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchInvoicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceQuery;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceFilter;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceSort;
use \OpenAPI\OpenAPI\Models\Operations\SearchInvoicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchInvoicesRequest();
    $request->cursor = 'error';
    $request->limit = 822407;
    $request->query = new InvoiceQuery();
    $request->query->filter = new InvoiceFilter();
    $request->query->filter->customerIds = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->query->filter->locationIds = [
        'enim',
        'vitae',
        'repellendus',
    ];
    $request->query->sort = new InvoiceSort();
    $request->query->sort->field = 'ex';
    $request->query->sort->order = 'quo';

    $requestSecurity = new SearchInvoicesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->searchInvoices($request, $requestSecurity);

    if ($response->searchInvoicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInvoice

Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a sparse 
`Invoice` object to add fields or change values and use the `fields_to_clear` field to specify fields to clear. 
However, some restrictions apply. For example, you cannot change the `order_id` or `location_id` field and you 
must provide the complete `custom_fields` list to update a custom field. Published invoices have additional restrictions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAcceptedPaymentMethods;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCustomField;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\InvoicePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoicePaymentReminder;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInvoiceRequest();
    $request->updateInvoiceRequest = new UpdateInvoiceRequest();
    $request->updateInvoiceRequest->fieldsToClear = [
        'ut',
        'ad',
    ];
    $request->updateInvoiceRequest->idempotencyKey = 'expedita';
    $request->updateInvoiceRequest->invoice = new Invoice();
    $request->updateInvoiceRequest->invoice->acceptedPaymentMethods = new InvoiceAcceptedPaymentMethods();
    $request->updateInvoiceRequest->invoice->acceptedPaymentMethods->bankAccount = false;
    $request->updateInvoiceRequest->invoice->acceptedPaymentMethods->card = false;
    $request->updateInvoiceRequest->invoice->acceptedPaymentMethods->squareGiftCard = false;
    $request->updateInvoiceRequest->invoice->createdAt = 'voluptatem';
    $request->updateInvoiceRequest->invoice->customFields = [
        new InvoiceCustomField(),
        new InvoiceCustomField(),
        new InvoiceCustomField(),
    ];
    $request->updateInvoiceRequest->invoice->deliveryMethod = 'cum';
    $request->updateInvoiceRequest->invoice->description = 'aliquid';
    $request->updateInvoiceRequest->invoice->id = '1891baa0-fe1a-4de0-88e6-f8c5f350d8cd';
    $request->updateInvoiceRequest->invoice->invoiceNumber = 'nam';
    $request->updateInvoiceRequest->invoice->locationId = 'ipsam';
    $request->updateInvoiceRequest->invoice->nextPaymentAmountMoney = new Money();
    $request->updateInvoiceRequest->invoice->nextPaymentAmountMoney->amount = 633415;
    $request->updateInvoiceRequest->invoice->nextPaymentAmountMoney->currency = 'dolor';
    $request->updateInvoiceRequest->invoice->orderId = 'aliquam';
    $request->updateInvoiceRequest->invoice->paymentRequests = [
        new InvoicePaymentRequest(),
    ];
    $request->updateInvoiceRequest->invoice->primaryRecipient = new InvoiceRecipient();
    $request->updateInvoiceRequest->invoice->primaryRecipient->address = new Address();
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->addressLine1 = 'deleniti';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->addressLine2 = 'veritatis';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->addressLine3 = 'tempora';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->administrativeDistrictLevel1 = 'dolor';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->administrativeDistrictLevel2 = 'consequatur';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->administrativeDistrictLevel3 = 'architecto';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->country = 'Anguilla';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->firstName = 'Dillon';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->lastName = 'Considine';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->locality = 'ab';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->organization = 'laudantium';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->postalCode = '28310';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->sublocality = 'quas';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->sublocality2 = 'eveniet';
    $request->updateInvoiceRequest->invoice->primaryRecipient->address->sublocality3 = 'impedit';
    $request->updateInvoiceRequest->invoice->primaryRecipient->companyName = 'officiis';
    $request->updateInvoiceRequest->invoice->primaryRecipient->customerId = 'esse';
    $request->updateInvoiceRequest->invoice->primaryRecipient->emailAddress = 'necessitatibus';
    $request->updateInvoiceRequest->invoice->primaryRecipient->familyName = 'sed';
    $request->updateInvoiceRequest->invoice->primaryRecipient->givenName = 'veniam';
    $request->updateInvoiceRequest->invoice->primaryRecipient->phoneNumber = 'nesciunt';
    $request->updateInvoiceRequest->invoice->publicUrl = 'expedita';
    $request->updateInvoiceRequest->invoice->scheduledAt = 'eum';
    $request->updateInvoiceRequest->invoice->status = 'vel';
    $request->updateInvoiceRequest->invoice->subscriptionId = 'voluptatum';
    $request->updateInvoiceRequest->invoice->timezone = 'magnam';
    $request->updateInvoiceRequest->invoice->title = 'Mrs.';
    $request->updateInvoiceRequest->invoice->updatedAt = 'ab';
    $request->updateInvoiceRequest->invoice->version = 781480;
    $request->invoiceId = 'autem';

    $requestSecurity = new UpdateInvoiceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->invoices->updateInvoice($request, $requestSecurity);

    if ($response->updateInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
