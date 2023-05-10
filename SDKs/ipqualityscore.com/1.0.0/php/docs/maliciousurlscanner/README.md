# maliciousUrlScanner

### Available Operations

* [maliciousUrlScanner](#maliciousurlscanner) - Malicious URL Scanner

## maliciousUrlScanner

Malicious URL Scanner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MaliciousUrlScannerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MaliciousUrlScannerRequest();
    $request->urlHere = 'https%3A%2F%2Fgoogle.com';
    $request->yourApiKeyHere = 'asd24#sdfs322#';

    $response = $sdk->maliciousUrlScanner->maliciousUrlScanner($request);

    if ($response->maliciousUrlScanner200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
