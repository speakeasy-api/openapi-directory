# porting

## Overview

Create, List, Updated and Delete Number Porting requests

### Available Operations

* [getPorting](#getporting) - List ported numbers

## getPorting

List ported numbers

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
    $response = $sdk->porting->getPorting();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
