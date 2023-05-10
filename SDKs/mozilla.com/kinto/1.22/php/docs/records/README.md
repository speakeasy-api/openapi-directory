# records

### Available Operations

* [getRecord](#getrecord)
* [getRecords](#getrecords)

## getRecord

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecordRequest();
    $request->ifMatch = 'iusto';
    $request->ifNoneMatch = 'voluptate';
    $request->fields = [
        'deleniti',
        'omnis',
        'necessitatibus',
    ];
    $request->bucketId = 'distinctio';
    $request->collectionId = 'asperiores';
    $request->id = '737ae420-3ce5-4e6a-95d8-a0d446ce2af7';

    $response = $sdk->records->getRecord($request);

    if ($response->objectSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecords

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecordsRequest();
    $request->ifMatch = 'harum';
    $request->ifNoneMatch = 'iusto';
    $request->before = 215507;
    $request->fields = [
        'tenetur',
        'amet',
        'tempore',
        'accusamus',
    ];
    $request->limit = 253941;
    $request->since = 313692;
    $request->sort = [
        'sapiente',
    ];
    $request->to = 518201;
    $request->token = 'nihil';
    $request->bucketId = 'sit';
    $request->collectionId = 'expedita';
    $request->id = '326b5a73-429c-4db1-a842-2bb679d23227';
    $request->lastModified = 124833;

    $response = $sdk->records->getRecords($request);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
