# SDK

## Overview

The perfectpdf api does one thing, perfectly: it converts html to pdf. The perfectpdf api uses headless Google Chrome to provide a low cost, high quality, simple to use service.

<https://services.scideas.net/perfectpdf>
### Available Operations

* [postPerfectpdfApi](#postperfectpdfapi) - Returns PDF document.

## postPerfectpdfApi

Returns PDF document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PerfectpdfApiBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PerfectpdfApiBody();
    $request->apiKey = 'abc123';
    $request->html = '<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>';

    $response = $sdk->sdk->postPerfectpdfApi($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
