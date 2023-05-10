# bioentityset

## Overview

Operations over sets of entities

### Available Operations

* [getEntitySetAssociations](#getentitysetassociations) - Returns compact associations for a given input set
* [getEntitySetGraphResource](#getentitysetgraphresource) - TODO Graph object spanning all entities
* [getEntitySetSummary](#getentitysetsummary) - Summary statistics for objects associated
* [getOverRepresentation](#getoverrepresentation) - Summary statistics for objects associated

## getEntitySetAssociations

Returns compact associations for a given input set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetAssociationsRequest();
    $request->background = [
        'enim',
        'cupiditate',
    ];
    $request->objectCategory = 'occaecati';
    $request->objectSlim = 'itaque';
    $request->subject = [
        'consectetur',
        'modi',
        'aspernatur',
    ];

    $response = $sdk->bioentityset->getEntitySetAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitySetGraphResource

TODO Graph object spanning all entities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetGraphResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetGraphResourceRequest();
    $request->background = [
        'suscipit',
    ];
    $request->objectCategory = 'ipsa';
    $request->objectSlim = 'eveniet';
    $request->subject = [
        'nobis',
        'qui',
        'accusantium',
    ];

    $response = $sdk->bioentityset->getEntitySetGraphResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitySetSummary

Summary statistics for objects associated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetSummaryRequest();
    $request->background = [
        'impedit',
    ];
    $request->objectCategory = 'recusandae';
    $request->objectSlim = 'voluptate';
    $request->subject = [
        'est',
        'et',
        'expedita',
    ];

    $response = $sdk->bioentityset->getEntitySetSummary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOverRepresentation

Summary statistics for objects associated

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOverRepresentationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOverRepresentationRequest();
    $request->background = [
        'quos',
        'maiores',
        'quidem',
        'in',
    ];
    $request->maxPValue = 'culpa';
    $request->objectCategory = 'doloremque';
    $request->ontology = 'fuga';
    $request->subject = [
        'architecto',
    ];
    $request->subjectCategory = 'suscipit';
    $request->taxon = 'eligendi';

    $response = $sdk->bioentityset->getOverRepresentation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
