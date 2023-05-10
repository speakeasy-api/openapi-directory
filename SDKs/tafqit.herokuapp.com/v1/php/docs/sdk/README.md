# SDK

## Overview

Convert numbers to their Arabic text representation

### Available Operations

* [convert](#convert) - Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

## convert

Convert the number into its Arabic text representation
حول العدد إلى ما يقابله كتابة

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRequestBody();
    $request->hundredsForm = 'مائة';
    $request->theNumber = '2519.50';
    $request->unit = ' ريال سعودي';

    $response = $sdk->sdk->convert($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
