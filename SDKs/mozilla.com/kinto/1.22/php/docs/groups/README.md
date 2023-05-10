# groups

### Available Operations

* [getGroup](#getgroup)
* [getGroups](#getgroups)

## getGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->ifMatch = 'fugiat';
    $request->ifNoneMatch = 'amet';
    $request->fields = [
        'cumque',
    ];
    $request->bucketId = 'corporis';
    $request->id = 'fbb25870-5320-42c7-bd5f-e9b90c28909b';

    $response = $sdk->groups->getGroup($request);

    if ($response->objectSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsRequest();
    $request->ifMatch = 'adipisci';
    $request->ifNoneMatch = 'asperiores';
    $request->before = 934214;
    $request->fields = [
        'iste',
        'dolorum',
    ];
    $request->limit = 535633;
    $request->since = 864282;
    $request->sort = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->to = 311945;
    $request->token = 'quos';
    $request->bucketId = 'aliquid';
    $request->id = '33323f9b-77f3-4a41-8067-4ebf69280d1b';
    $request->lastModified = 679393;

    $response = $sdk->groups->getGroups($request);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
