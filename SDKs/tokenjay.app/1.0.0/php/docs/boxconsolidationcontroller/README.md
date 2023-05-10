# boxConsolidationController

### Available Operations

* [epConsolidate](#epconsolidate)
* [mainApp1](#mainapp1)

## epConsolidate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EpConsolidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EpConsolidateRequest();
    $request->p2pkaddress = 'natus';

    $response = $sdk->boxConsolidationController->epConsolidate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mainApp1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->boxConsolidationController->mainApp1();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
