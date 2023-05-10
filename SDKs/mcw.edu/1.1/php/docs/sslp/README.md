# sslp

## Overview

SSLP Web Service

### Available Operations

* [getMappedSSLPByPositionUsingGET](#getmappedsslpbypositionusingget) - Returns a list SSLP for given position and assembly map

## getMappedSSLPByPositionUsingGET

Returns a list SSLP for given position and assembly map

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMappedSSLPByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMappedSSLPByPositionUsingGETRequest();
    $request->chr = 'dolore';
    $request->mapKey = 480894;
    $request->start = 118727;
    $request->stop = 688661;

    $response = $sdk->sslp->getMappedSSLPByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
