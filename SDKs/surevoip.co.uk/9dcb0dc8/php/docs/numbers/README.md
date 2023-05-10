# numbers

## Overview

Create, List, Updated and Delete Numbers (DDIs)

### Available Operations

* [getNumbers](#getnumbers) - List available SureVoIP Ofcom number allocations for purchase

## getNumbers

List available SureVoIP Ofcom number allocations for purchase

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->numbers->getNumbers();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
