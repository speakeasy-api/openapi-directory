# sim

## Overview

Perform semantic similarity, ranking, and sufficiency scoring

### Available Operations

* [getAnnotationScore](#getannotationscore) - Get annotation score
* [getSimCompare](#getsimcompare) - Compare a reference profile vs one profiles
* [getSimSearch](#getsimsearch) - Search for phenotypically similar diseases or model genes
* [postAnnotationScore](#postannotationscore) - Get annotation score
* [postSimCompare](#postsimcompare) - Compare a reference profile vs one or more profiles

## getAnnotationScore

Get annotation score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotationScoreRequest();
    $request->absentId = [
        'maiores',
        'cupiditate',
        'illo',
    ];
    $request->id = [
        'enim',
        'eaque',
        'ex',
        'eveniet',
    ];

    $response = $sdk->sim->getAnnotationScore($request);

    if ($response->sufficiencyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimCompare

Compare a reference profile vs one profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimCompareRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSimCompareMetricEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimCompareRequest();
    $request->isFeatureSet = false;
    $request->metric = GetSimCompareMetricEnum::SYMMETRIC_RESNIK;
    $request->queryId = [
        'provident',
        'aut',
        'dolorum',
    ];
    $request->refId = [
        'tempora',
        'nam',
    ];

    $response = $sdk->sim->getSimCompare($request);

    if ($response->simResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimSearch

Search for phenotypically similar diseases or model genes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSimSearchMetricEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimSearchRequest();
    $request->id = [
        'odio',
        'nostrum',
    ];
    $request->isFeatureSet = false;
    $request->limit = 980160;
    $request->metric = GetSimSearchMetricEnum::PHENODIGM;
    $request->taxon = 'autem';

    $response = $sdk->sim->getSimSearch($request);

    if ($response->simResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAnnotationScore

Get annotation score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SufficiencyPostInput;
use \OpenAPI\OpenAPI\Models\Shared\Feature;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SufficiencyPostInput();
    $request->features = [
        new Feature(),
        new Feature(),
        new Feature(),
        new Feature(),
    ];
    $request->id = '56d385a3-c4ac-4631-b99e-26ced8f9fdb9';

    $response = $sdk->sim->postAnnotationScore($request);

    if ($response->sufficiencyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSimCompare

Compare a reference profile vs one or more profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CompareInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompareInput();
    $request->queryIds = [
        [
            'accusantium',
        ],
        [
            'nisi',
            'velit',
            'tempore',
            'expedita',
        ],
    ];
    $request->referenceIds = [
        'blanditiis',
        'vitae',
        'iusto',
        'atque',
    ];

    $response = $sdk->sim->postSimCompare($request);

    if ($response->simResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
