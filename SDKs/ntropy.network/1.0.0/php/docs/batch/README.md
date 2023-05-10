# batch

### Available Operations

* [getABatchOfConsumerTransactionClassificationResults](#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

## getABatchOfConsumerTransactionClassificationResults

Get a batch of consumer transaction classification results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetABatchOfConsumerTransactionClassificationResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetABatchOfConsumerTransactionClassificationResultsRequest();
    $request->id = '247ee045-3d04-4b3c-872b-a9160b810f33';

    $response = $sdk->batch->getABatchOfConsumerTransactionClassificationResults($request);

    if ($response->getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
