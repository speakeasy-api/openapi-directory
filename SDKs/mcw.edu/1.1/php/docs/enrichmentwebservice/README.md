# enrichmentWebService

## Overview

Enrichment Web Service

### Available Operations

* [getEnrichmentDataUsingPOST](#getenrichmentdatausingpost) - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* [getEnrichmentDataUsingPOST1](#getenrichmentdatausingpost1) - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

## getEnrichmentDataUsingPOST

Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\EnrichmentGeneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnrichmentGeneRequest();
    $request->accId = 'rerum';
    $request->geneSymbols = [
        'magnam',
    ];
    $request->species = 'cumque';

    $response = $sdk->enrichmentWebService->getEnrichmentDataUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnrichmentDataUsingPOST1

Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\EnrichmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnrichmentRequest();
    $request->aspect = 'facere';
    $request->genes = [
        'aliquid',
        'laborum',
    ];
    $request->species = 'accusamus';

    $response = $sdk->enrichmentWebService->getEnrichmentDataUsingPOST1($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
