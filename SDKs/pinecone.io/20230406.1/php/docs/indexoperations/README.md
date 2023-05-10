# indexOperations

## Overview

Endpoints for manipulating indexes

### Available Operations

* [configureIndex](#configureindex) - Configure index
* [createCollection](#createcollection) - Create collection
* [createIndex](#createindex) - Create index
* [deleteCollection](#deletecollection) - Delete Collection
* [deleteIndex](#deleteindex) - Delete Index
* [describeCollection](#describecollection) - Describe collection
* [describeIndex](#describeindex) - Describe index
* [listCollections](#listcollections) - List collections
* [listIndexes](#listindexes) - List indexes

## configureIndex

This operation specifies the pod type and number of replicas for an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\IndexConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PodTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureIndexRequest();
    $request->indexConfiguration = new IndexConfiguration();
    $request->indexConfiguration->podType = PodTypeEnum::P2_X1;
    $request->indexConfiguration->replicas = 844266;
    $request->indexName = 'example';

    $response = $sdk->indexOperations->configureIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollection

This operation creates a Pinecone collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CollectionDefinition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionDefinition();
    $request->name = 'example';
    $request->source = 'example';

    $response = $sdk->indexOperations->createCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIndex

This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\IndexDefinition;
use \OpenAPI\OpenAPI\Models\Shared\IndexMetadataConfig;
use \OpenAPI\OpenAPI\Models\Shared\IndexMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\PodTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndexDefinition();
    $request->dimension = 602763;
    $request->metadataConfig = new IndexMetadataConfig();
    $request->metadataConfig->indexed = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->metric = IndexMetricEnum::COSINE;
    $request->name = 'example';
    $request->podType = PodTypeEnum::P1_X1;
    $request->pods = 437587;
    $request->replicas = 297534;
    $request->sourceCollection = 'example';

    $response = $sdk->indexOperations->createIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollection

This operation deletes an existing collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollectionRequest();
    $request->collectionName = 'example';

    $response = $sdk->indexOperations->deleteCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIndex

This operation deletes an existing index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndexRequest();
    $request->indexName = 'example';

    $response = $sdk->indexOperations->deleteIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCollection

Get a description of a collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCollectionRequest();
    $request->collectionName = 'example';

    $response = $sdk->indexOperations->describeCollection($request);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIndex

Get a description of an index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIndexRequest();
    $request->indexName = 'example';

    $response = $sdk->indexOperations->describeIndex($request);

    if ($response->index !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollections

This operation returns a list of your Pinecone collections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->indexOperations->listCollections();

    if ($response->collectionsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIndexes

This operation returns a list of your Pinecone indexes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->indexOperations->listIndexes();

    if ($response->indexesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
