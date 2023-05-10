# v1

### Available Operations

* [get](#get) - Retrieve Legal Agreements for provided agreements keys

## get

Retrieve Legal Agreements for provided agreements keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->xMarketId = 'corrupti';
    $request->xPrivateLabelId = 847252;
    $request->keys = [
        'error',
        'deserunt',
    ];

    $response = $sdk->v1->get($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
