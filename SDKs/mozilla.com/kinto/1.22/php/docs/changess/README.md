# changess

### Available Operations

* [getChangess](#getchangess)

## getChangess

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChangessRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChangessRequest();
    $request->ifMatch = 'perferendis';
    $request->ifNoneMatch = 'magni';
    $request->before = 828940;
    $request->fields = [
        'alias',
        'fugit',
    ];
    $request->limit = 677817;
    $request->since = 569618;
    $request->sort = [
        'facilis',
        'tempore',
    ];
    $request->to = 288476;
    $request->token = 'delectus';
    $request->id = '63c969e9-a3ef-4a77-9fb1-4cd66ae395ef';
    $request->lastModified = 692532;

    $response = $sdk->changess->getChangess($request);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
