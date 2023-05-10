# business

### Available Operations

* [getABatchOfBusinessTransactionClassificationResults](#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

## getABatchOfBusinessTransactionClassificationResults

Get a batch of business transaction classification results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetABatchOfBusinessTransactionClassificationResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetABatchOfBusinessTransactionClassificationResultsRequest();
    $request->id = '247ee045-3d04-4b3c-872b-a9160b810f33';

    $response = $sdk->business->getABatchOfBusinessTransactionClassificationResults($request);

    if ($response->getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
