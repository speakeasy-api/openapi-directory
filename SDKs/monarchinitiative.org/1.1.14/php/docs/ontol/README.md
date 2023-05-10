# ontol

## Overview

extract a subgraph from an ontology

### Available Operations

* [getExtractOntologySubgraphResource](#getextractontologysubgraphresource) - Extract a subgraph from an ontology
* [getInformationContentResource](#getinformationcontentresource) - Returns information content (IC) for a set of relevant ontology classes
* [postExtractOntologySubgraphResource](#postextractontologysubgraphresource) - Extract a subgraph from an ontology

## getExtractOntologySubgraphResource

Extract a subgraph from an ontology

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExtractOntologySubgraphResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExtractOntologySubgraphResourceRequest();
    $request->cnode = [
        'illum',
        'sit',
    ];
    $request->includeAncestors = false;
    $request->includeDescendants = false;
    $request->includeMeta = false;
    $request->node = 'molestias';
    $request->ontology = 'voluptas';
    $request->relation = [
        'voluptas',
        'maiores',
        'ea',
    ];

    $response = $sdk->ontol->getExtractOntologySubgraphResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInformationContentResource

```
IC = -log2( freq(t) / popSize )
```

Here the frequency and population is calculated for a particular dataset:
e.g. all human disease-phenotype associations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInformationContentResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInformationContentResourceRequest();
    $request->evidence = 'vel';
    $request->objectCategory = 'delectus';
    $request->subjectCategory = 'accusamus';
    $request->subjectTaxon = 'reiciendis';

    $response = $sdk->ontol->getInformationContentResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExtractOntologySubgraphResource

Extract a subgraph from an ontology

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExtractOntologySubgraphResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExtractOntologySubgraphResourceRequest();
    $request->cnode = [
        'sed',
    ];
    $request->includeAncestors = false;
    $request->includeDescendants = false;
    $request->includeMeta = false;
    $request->node = 'accusantium';
    $request->ontology = 'voluptates';
    $request->relation = [
        'maiores',
        'quaerat',
        'numquam',
    ];

    $response = $sdk->ontol->postExtractOntologySubgraphResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
