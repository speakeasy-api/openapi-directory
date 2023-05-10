# test

### Available Operations

* [echo](#echo) - Echo text
* [validate](#validate) - Validate input

## echo

Echo text

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EchoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EchoRequest();
    $request->text = 'alias';

    $response = $sdk->test->echo($request);

    if ($response->testEcho !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validate

Validate input

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateRequest();
    $request->id = 608989;
    $request->tag = [
        'occaecati',
    ];
    $request->userAgent = 'iste';

    $response = $sdk->test->validate($request);

    if ($response->testValidate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
