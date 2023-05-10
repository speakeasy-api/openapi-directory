# accidentStats

### Available Operations

* [accidentStatsGet](#accidentstatsget) - Gets all accident details for accidents occuring in the specified year

## accidentStatsGet

Gets all accident details for accidents occuring in the specified year

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccidentStatsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccidentStatsGetRequest();
    $request->year = 592845;

    $response = $sdk->accidentStats->accidentStatsGet($request);

    if ($response->tflApiPresentationEntitiesAccidentStatsAccidentDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
