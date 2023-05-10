# collections

### Available Operations

* [getCollection](#getcollection)
* [getCollections](#getcollections)

## getCollection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCollectionRequest();
    $request->ifMatch = 'deserunt';
    $request->ifNoneMatch = 'nisi';
    $request->fields = [
        'natus',
        'omnis',
    ];
    $request->bucketId = 'molestiae';
    $request->id = '074ba446-9b6e-4214-9959-890afa563e25';

    $response = $sdk->collections->getCollection($request);

    if ($response->objectSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCollections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCollectionsRequest();
    $request->ifMatch = 'quasi';
    $request->ifNoneMatch = 'iure';
    $request->before = 984043;
    $request->fields = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->limit = 447926;
    $request->since = 100226;
    $request->sort = [
        'repudiandae',
    ];
    $request->to = 352312;
    $request->token = 'expedita';
    $request->bucketId = 'nihil';
    $request->id = 'fd2ed028-921c-4ddc-a926-01fb576b0d5f';
    $request->lastModified = 16627;

    $response = $sdk->collections->getCollections($request);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
