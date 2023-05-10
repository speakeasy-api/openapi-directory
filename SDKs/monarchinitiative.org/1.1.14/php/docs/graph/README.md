# graph

## Overview

Operations over data graphs

### Available Operations

* [getEdgeResource](#getedgeresource) - Returns edges emanating from a given node
* [getNodeResource](#getnoderesource) - Returns a graph node

## getEdgeResource

Returns edges emanating from a given node

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEdgeResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEdgeResourceDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEdgeResourceGraphEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEdgeResourceRequest();
    $request->depth = 35219;
    $request->direction = GetEdgeResourceDirectionEnum::INCOMING;
    $request->entail = false;
    $request->graph = GetEdgeResourceGraphEnum::DATA;
    $request->id = '25194db5-5410-4adc-a69a-f90a26c7cdc9';
    $request->relationshipType = [
        'quasi',
        'maiores',
        'voluptatem',
    ];

    $response = $sdk->graph->getEdgeResource($request);

    if ($response->graphs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNodeResource

A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNodeResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNodeResourceRequest();
    $request->id = '68981d6b-b33c-4faa-b48c-31bf407ee4fc';

    $response = $sdk->graph->getNodeResource($request);

    if ($response->bioObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
