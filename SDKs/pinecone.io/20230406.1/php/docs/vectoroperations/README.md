# vectorOperations

## Overview

Endpoints for manipulating vectors

### Available Operations

* [delete](#delete) - Delete
* [describeIndexStats](#describeindexstats) - Describe Index Stats
* [fetch](#fetch) - Fetch
* [query](#query) - Query
* [update](#update) - Fetch
* [upsert](#upsert) - Upsert

## delete

The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->deleteAll = false;
    $request->filter = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->ids = [
        'vector-0',
        'vector-0',
    ];
    $request->namespace = 'namespace-0';

    $response = $sdk->vectorOperations->delete($request);

    if ($response->deleteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIndexStats

The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIndexStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIndexStatsRequest();
    $request->filter = [
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
        'quis' => 'veritatis',
    ];

    $response = $sdk->vectorOperations->describeIndexStats($request);

    if ($response->describeIndexStatsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetch

The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\FetchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRequest();
    $request->ids = [
        'vector-0',
        'vector-0',
        'vector-0',
    ];
    $request->namespace = 'namespace-0';

    $response = $sdk->vectorOperations->fetch($request);

    if ($response->fetchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## query

The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SparseVectorData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->filter = [
        'ipsam' => 'repellendus',
    ];
    $request->id = 'vector-0';
    $request->includeMetadata = false;
    $request->includeValues = false;
    $request->namespace = 'namespace-0';
    $request->sparseVector = new SparseVectorData();
    $request->sparseVector->indices = [
        778157,
        140350,
        870013,
        870088,
    ];
    $request->sparseVector->values = [
        4736.08,
        7991.59,
        8009.11,
        4614.79,
    ];
    $request->topK = 520478;
    $request->vector = [
        6788.8,
        1182.74,
        7206.33,
        6399.21,
    ];

    $response = $sdk->vectorOperations->query($request);

    if ($response->queryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update

The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SparseVectorData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRequest();
    $request->id = 'occaecati';
    $request->namespace = 'namespace-0';
    $request->setMetadata = [
        'deleniti' => 'hic',
    ];
    $request->sparseValues = new SparseVectorData();
    $request->sparseValues->indices = [
        521848,
        105907,
        414662,
        473600,
    ];
    $request->sparseValues->values = [
        1863.32,
        7742.34,
    ];
    $request->values = [
        4561.5,
        2165.5,
        5684.34,
    ];

    $response = $sdk->vectorOperations->update($request);

    if ($response->updateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upsert

The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UpsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpsertVector;
use \OpenAPI\OpenAPI\Models\Shared\SparseVectorData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpsertRequest();
    $request->namespace = 'namespace-0';
    $request->vectors = [
        new UpsertVector(),
    ];

    $response = $sdk->vectorOperations->upsert($request);

    if ($response->upsertResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
