# status

### Available Operations

* [statusGet](#statusget) - Get the current status of message

## statusGet

Get the current status of message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StatusGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusGetRequest();
    $request->messageId = 'distinctio';

    $response = $sdk->status->statusGet($request);

    if ($response->messageStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
