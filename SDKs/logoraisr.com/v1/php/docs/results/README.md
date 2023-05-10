# results

### Available Operations

* [resultsRead](#resultsread) - Get the result from image processing

## resultsRead

This GET-Method returns the URL where the result can downloaded from.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResultsReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResultsReadRequest();
    $request->resultFileId = 'iste';

    $response = $sdk->results->resultsRead($request);

    if ($response->resultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
