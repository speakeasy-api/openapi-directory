# map

## Overview

Map Web Service

### Available Operations

* [getChromosomeByAssemblyUsingGET](#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](#getchromosomesbyassemblyusingget) - Return a list of chromosomes
* [getMapsBySpeciesUsingGET](#getmapsbyspeciesusingget) - Return a list of assemblies

## getChromosomeByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETChromosomeByAssemblyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChromosomeByAssemblyUsingGETRequest();
    $request->chromosome = 'quo';
    $request->mapKey = 196582;

    $response = $sdk->map->getChromosomeByAssemblyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChromosomesByAssemblyUsingGET

Return a list of chromosomes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETChromosomesByAssemblyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChromosomesByAssemblyUsingGETRequest();
    $request->mapKey = 949572;

    $response = $sdk->map->getChromosomesByAssemblyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapsBySpeciesUsingGET

Return a list of assemblies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMapsBySpeciesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMapsBySpeciesUsingGETRequest();
    $request->speciesTypeKey = 368725;

    $response = $sdk->map->getMapsBySpeciesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
