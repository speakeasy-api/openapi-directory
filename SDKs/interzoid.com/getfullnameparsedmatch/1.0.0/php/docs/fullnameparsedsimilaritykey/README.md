# fullNameParsedSimilarityKey

### Available Operations

* [getfullnameparsedmatch](#getfullnameparsedmatch) - Gets a similarity key for matching purposes for parsed full name data

## getfullnameparsedmatch

Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetfullnameparsedmatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfullnameparsedmatchRequest();
    $request->firstname = 'Rosalinda';
    $request->lastname = 'Mitchell';
    $request->license = 'nulla';

    $response = $sdk->fullNameParsedSimilarityKey->getfullnameparsedmatch($request);

    if ($response->getfullnameparsedmatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
