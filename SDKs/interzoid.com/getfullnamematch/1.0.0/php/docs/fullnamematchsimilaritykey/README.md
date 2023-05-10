# fullNameMatchSimilarityKey

### Available Operations

* [getfullnamematch](#getfullnamematch) - Gets a similarity key for matching purposes for full name data

## getfullnamematch

Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetfullnamematchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfullnamematchRequest();
    $request->fullname = 'distinctio';
    $request->license = 'quibusdam';

    $response = $sdk->fullNameMatchSimilarityKey->getfullnamematch($request);

    if ($response->getfullnamematch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
