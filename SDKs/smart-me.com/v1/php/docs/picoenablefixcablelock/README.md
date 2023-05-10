# picoEnableFixCableLock

### Available Operations

* [picoEnableFixCableLockPost](#picoenablefixcablelockpost) - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

## picoEnableFixCableLockPost

Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PicoEnableFixCableLockPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PicoEnableFixCableLockPostRequest();
    $request->id = '2dac7af5-15cc-4413-aa63-aae8d67864db';

    $response = $sdk->picoEnableFixCableLock->picoEnableFixCableLockPost($request);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
