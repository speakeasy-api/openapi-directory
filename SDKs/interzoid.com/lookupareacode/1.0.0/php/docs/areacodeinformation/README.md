# areaCodeInformation

### Available Operations

* [getareacode](#getareacode) - Gets telephone area code information

## getareacode

Gets telephone area code information for a given area code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetareacodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetareacodeRequest();
    $request->areacode = 'distinctio';
    $request->license = 'quibusdam';

    $response = $sdk->areaCodeInformation->getareacode($request);

    if ($response->getareacode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
