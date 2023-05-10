# mediaTypes

## Overview

Information about media types

### Available Operations

* [getResourcesMediaTypesFormat](#getresourcesmediatypesformat) - Get MediaTypes

## getResourcesMediaTypesFormat

Information about media types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaTypesFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaTypesFormatRequest();
    $request->format = 'sequi';

    $response = $sdk->mediaTypes->getResourcesMediaTypesFormat($request);

    if ($response->mediaTypeHolderWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
