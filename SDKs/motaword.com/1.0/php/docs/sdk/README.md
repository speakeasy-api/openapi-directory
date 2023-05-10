# SDK

## Overview

Use MotaWord API to post and track your translation projects.

<https://www.motaword.com/developer>
### Available Operations

* [deleteCache](#deletecache) - Clear cache by key

## deleteCache

Clear cache by key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCacheRequest();
    $request->key = 'provident';

    $response = $sdk->sdk->deleteCache($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
