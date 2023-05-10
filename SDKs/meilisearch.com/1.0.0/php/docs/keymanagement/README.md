# keyManagement

### Available Operations

* [createAKey](#createakey) - Create a key
* [deleteAKey](#deleteakey) - Delete a key
* [getKeys](#getkeys) - Get keys
* [getOneKey](#getonekey) - Get one key
* [updateAKey](#updateakey) - Update a key

## createAKey

Create a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAKeyRequestBody();
    $request->actions = [
        'documents.add',
        'documents.add',
        'documents.add',
    ];
    $request->description = 'Key to add and delete documents, in `books` index.';
    $request->expiresAt = 'illum';
    $request->indexes = [
        'books',
        'books',
    ];
    $request->name = 'docs-key';

    $response = $sdk->keyManagement->createAKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAKey

Delete a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->keyManagement->deleteAKey();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeys

Get keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeysRequest();
    $request->limit = '10';
    $request->offset = '0';

    $response = $sdk->keyManagement->getKeys($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneKey

Get one key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->keyManagement->getOneKey();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAKey

Update a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAKeyRequestBody();
    $request->description = 'Key to add and delete documents, but also to create indexes, in `book` index.';

    $response = $sdk->keyManagement->updateAKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
