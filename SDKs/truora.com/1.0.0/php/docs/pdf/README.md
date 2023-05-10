# pdf

### Available Operations

* [createPDF](#createpdf) - Create PDF
* [getPDF](#getpdf) - Get PDF

## createPDF

Creates a PDF containing the background check results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePDFRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePDFRequest();
    $request->checkId = 'voluptatibus';

    $response = $sdk->pdf->createPDF($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPDF

Downloads the PDF in the specified language, Spanish by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPDFRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPDFRequest();
    $request->checkId = 'vero';
    $request->lang = 'nihil';

    $response = $sdk->pdf->getPDF($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
