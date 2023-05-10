# invoice

### Available Operations

* [getInvoice](#getinvoice) - List a specific invoice of project Level
* [getInvoiceFiles](#getinvoicefiles) - List files of invoice Level
* [getInvoices](#getinvoices) - List invoices by a specific order

## getInvoice

List a specific invoice of project Level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoiceRequest();
    $request->invoiceId = 'sapiente';
    $request->projectId = 'quo';
    $request->workgroupId = 'odit';

    $response = $sdk->invoice->getInvoice($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoiceFiles

List files of invoice Level

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoiceFilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoiceFilesRequest();
    $request->invoiceId = 'at';
    $request->projectId = 'at';
    $request->workgroupId = 'maiores';

    $response = $sdk->invoice->getInvoiceFiles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoices

List invoices by a specific order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoicesRequest();
    $request->orderId = 'molestiae';
    $request->projectId = 'quod';
    $request->workgroupId = 'quod';

    $response = $sdk->invoice->getInvoices($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
