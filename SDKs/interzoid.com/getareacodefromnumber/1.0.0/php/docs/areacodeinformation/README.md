# areaCodeInformation

### Available Operations

* [getareacodefromnumber](#getareacodefromnumber) - Gets area code information from a telephone number

## getareacodefromnumber

The area code will be parsed out of a telephone number and used to retrieve information about the area code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetareacodefromnumberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetareacodefromnumberRequest();
    $request->license = 'distinctio';
    $request->number = 'quibusdam';

    $response = $sdk->areaCodeInformation->getareacodefromnumber($request);

    if ($response->getareacodefromnumber200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
