# indexes

### Available Operations

* [createIndexWithPrimaryKey](#createindexwithprimarykey) - Create index with primary key
* [deleteAnIndex](#deleteanindex) - Delete an index
* [getIndexes](#getindexes) - Get indexes
* [showIndex](#showindex) - Show index
* [swapIndexes](#swapindexes) - Swap indexes
* [updateIndex](#updateindex) - Update index

## createIndexWithPrimaryKey

Create index with primary key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexWithPrimaryKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIndexWithPrimaryKeyRequestBody();
    $request->primaryKey = 'number';
    $request->uid = 'books';

    $response = $sdk->indexes->createIndexWithPrimaryKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnIndex

Delete an index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->indexes->deleteAnIndex();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndexes

Get indexes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndexesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndexesRequest();
    $request->limit = '2';
    $request->offset = '0';

    $response = $sdk->indexes->getIndexes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## showIndex

Show index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->indexes->showIndex();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## swapIndexes

Swap indexes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SwapIndexesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new SwapIndexesRequestBody(),
        new SwapIndexesRequestBody(),
        new SwapIndexesRequestBody(),
        new SwapIndexesRequestBody(),
    ]

    $response = $sdk->indexes->swapIndexes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIndex

Can only change the document identifier if it has not already been added before.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIndexRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIndexRequestBody();
    $request->primaryKey = 'title';

    $response = $sdk->indexes->updateIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
