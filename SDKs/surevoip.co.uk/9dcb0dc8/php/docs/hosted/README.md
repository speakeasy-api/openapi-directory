# hosted

## Overview

Create, List, Updated and Delete Hosted VoIP Customers

### Available Operations

* [getHosted](#gethosted) - List Hosted VoIP domains

## getHosted

List Hosted VoIP domains

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
    $response = $sdk->hosted->getHosted();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
