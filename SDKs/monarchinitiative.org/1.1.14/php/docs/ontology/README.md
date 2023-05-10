# ontology

## Overview

Operations on Ontology Terms and Subsets

### Available Operations

* [getOntologySubset](#getontologysubset) - Returns meta data of an ontology subset (slim)
* [getOntologyTerm](#getontologyterm) - Returns meta data of an ontology term
* [getOntologyTermGraph](#getontologytermgraph) - Returns graph of an ontology term
* [getOntologyTermSubgraph](#getontologytermsubgraph) - Extract a subgraph from an ontology term
* [getOntologyTermSubsets](#getontologytermsubsets) - Returns subsets (slims) associated to an ontology term
* [getOntologyTermsSharedAncestor](#getontologytermssharedancestor) - Returns the ancestor ontology terms shared by two ontology terms

## getOntologySubset

Returns meta data of an ontology subset (slim)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologySubsetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologySubsetRequest();
    $request->id = '92c8dbda-6a61-4efa-a198-258fd0a9eba4';

    $response = $sdk->ontology->getOntologySubset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOntologyTerm

Returns meta data of an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologyTermRequest();
    $request->id = '7f7d3ef0-4964-40d6-a183-1c87adf596fd';

    $response = $sdk->ontology->getOntologyTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOntologyTermGraph

Returns graph of an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermGraphGraphTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologyTermGraphRequest();
    $request->graphType = GetOntologyTermGraphGraphTypeEnum::NEIGHBORHOOD_LIMITED_GRAPH;
    $request->id = '1ad837ae-80c1-4c19-895b-a998678fa3f6';

    $response = $sdk->ontology->getOntologyTermGraph($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOntologyTermSubgraph

Extract a subgraph from an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermSubgraphRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologyTermSubgraphRequest();
    $request->cnode = [
        'autem',
        'iste',
        'cupiditate',
    ];
    $request->id = '1af388ce-0361-4444-8c79-77a0ef2f5360';
    $request->includeAncestors = false;
    $request->includeDescendants = false;
    $request->includeMeta = false;
    $request->relation = [
        'voluptatum',
    ];

    $response = $sdk->ontology->getOntologyTermSubgraph($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOntologyTermSubsets

Returns subsets (slims) associated to an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermSubsetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologyTermSubsetsRequest();
    $request->id = 'efeef934-152e-4d7e-a53f-4c157deaa717';

    $response = $sdk->ontology->getOntologyTermSubsets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOntologyTermsSharedAncestor

Returns the ancestor ontology terms shared by two ontology terms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntologyTermsSharedAncestorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntologyTermsSharedAncestorRequest();
    $request->object = 'consequatur';
    $request->subject = 'delectus';

    $response = $sdk->ontology->getOntologyTermsSharedAncestor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
