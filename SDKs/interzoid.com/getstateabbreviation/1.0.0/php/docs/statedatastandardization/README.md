# stateDataStandardization

### Available Operations

* [getstateabbreviation](#getstateabbreviation) - Gets a two-letter abbreviation for a state or province name data

## getstateabbreviation

Gets a two-letter abbreviation for a state or province given a permutation of state or province data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetstateabbreviationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetstateabbreviationRequest();
    $request->license = 'distinctio';
    $request->state = 'quibusdam';

    $response = $sdk->stateDataStandardization->getstateabbreviation($request);

    if ($response->getstateabbreviation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
