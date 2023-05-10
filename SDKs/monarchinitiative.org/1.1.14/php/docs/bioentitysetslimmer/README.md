# bioentitysetSlimmer

## Overview

maps a set of entities to a slim

### Available Operations

* [getEntitySetAnatomySlimmer](#getentitysetanatomyslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetFunctionSlimmer](#getentitysetfunctionslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetPhenotypeSlimmer](#getentitysetphenotypeslimmer) - For a given gene(s), summarize its annotations over a defined set of slim

## getEntitySetAnatomySlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetAnatomySlimmerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetAnatomySlimmerRequest();
    $request->excludeAutomaticAssertions = false;
    $request->rows = 311548;
    $request->slim = [
        'natus',
    ];
    $request->start = 457389;
    $request->subject = [
        'deserunt',
        'ratione',
        'ipsa',
        'debitis',
    ];

    $response = $sdk->bioentitysetSlimmer->getEntitySetAnatomySlimmer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitySetFunctionSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetFunctionSlimmerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetFunctionSlimmerRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetFunctionSlimmerRequest();
    $request->excludeAutomaticAssertions = false;
    $request->relationshipType = GetEntitySetFunctionSlimmerRelationshipTypeEnum::ACTS_UPSTREAM_OF_OR_WITHIN;
    $request->rows = 646776;
    $request->slim = [
        'ducimus',
        'consequuntur',
        'ipsam',
        'libero',
    ];
    $request->start = 153942;
    $request->subject = [
        'dicta',
        'qui',
        'explicabo',
    ];

    $response = $sdk->bioentitysetSlimmer->getEntitySetFunctionSlimmer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitySetPhenotypeSlimmer

For a given gene(s), summarize its annotations over a defined set of slim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetPhenotypeSlimmerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetPhenotypeSlimmerRequest();
    $request->excludeAutomaticAssertions = false;
    $request->rows = 6203;
    $request->slim = [
        'consequatur',
    ];
    $request->start = 852634;
    $request->subject = [
        'velit',
        'hic',
        'ullam',
    ];

    $response = $sdk->bioentitysetSlimmer->getEntitySetPhenotypeSlimmer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
