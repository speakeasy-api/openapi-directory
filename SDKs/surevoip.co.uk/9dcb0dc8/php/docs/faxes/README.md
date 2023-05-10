# faxes

## Overview

Send faxes - Not in service

### Available Operations

* [getFaxes](#getfaxes) - List global ongoing faxes

## getFaxes

List global ongoing faxes

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
    $response = $sdk->faxes->getFaxes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
