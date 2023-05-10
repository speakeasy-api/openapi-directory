# async

### Available Operations

* [downloadAsync](#downloadasync) - Download result of an async operation

## downloadAsync

Download the result of an async operation that you have requested in other endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadAsyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadAsyncRequest();
    $request->asyncRequestKey = 'ipsam';

    $response = $sdk->async->downloadAsync($request);

    if ($response->downloadAsync200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
