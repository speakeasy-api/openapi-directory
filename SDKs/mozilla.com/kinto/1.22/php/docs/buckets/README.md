# buckets

### Available Operations

* [getBucket](#getbucket)
* [getBuckets](#getbuckets)

## getBucket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketRequest();
    $request->ifMatch = 'quam';
    $request->ifNoneMatch = 'molestiae';
    $request->fields = [
        'error',
    ];
    $request->id = '251aa52c-3f5a-4d01-9da1-ffe78f097b00';

    $response = $sdk->buckets->getBucket($request);

    if ($response->objectSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBuckets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBucketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBucketsRequest();
    $request->ifMatch = 'reprehenderit';
    $request->ifNoneMatch = 'ut';
    $request->before = 979587;
    $request->fields = [
        'corporis',
    ];
    $request->limit = 296140;
    $request->since = 480894;
    $request->sort = [
        'harum',
    ];
    $request->to = 317983;
    $request->token = 'accusamus';
    $request->id = '6e13b99d-488e-41e9-9e45-0ad2abd44269';
    $request->lastModified = 552822;

    $response = $sdk->buckets->getBuckets($request);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
