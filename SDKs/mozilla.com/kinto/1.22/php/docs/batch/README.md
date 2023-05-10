# batch

### Available Operations

* [batch](#batch)

## batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BatchBatchPayloadSchema;
use \OpenAPI\OpenAPI\Models\Operations\BatchBatchPayloadSchemaDefaults;
use \OpenAPI\OpenAPI\Models\Operations\BatchBatchPayloadSchemaDefaultsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchBatchPayloadSchemaRequests;
use \OpenAPI\OpenAPI\Models\Operations\BatchBatchPayloadSchemaRequestsMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchBatchPayloadSchema();
    $request->defaults = new BatchBatchPayloadSchemaDefaults();
    $request->defaults->body = [
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->defaults->headers = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ];
    $request->defaults->method = BatchBatchPayloadSchemaDefaultsMethodEnum::POST;
    $request->defaults->path = 'numquam';
    $request->requests = [
        new BatchBatchPayloadSchemaRequests(),
        new BatchBatchPayloadSchemaRequests(),
    ];

    $response = $sdk->batch->batch($request);

    if ($response->batchResponseBodySchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
