# cadenceExports

## Overview

Cadence Exports

### Available Operations

* [getV2CadenceExportsIdJson](#getv2cadenceexportsidjson) - Export a cadence

## getV2CadenceExportsIdJson

Exports a cadence as JSON.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CadenceExportsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CadenceExportsIdJsonRequest();
    $request->id = 'bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1';

    $response = $sdk->cadenceExports->getV2CadenceExportsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
