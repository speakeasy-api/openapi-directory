# owlOntology

## Overview

OWL-level operations on an ontology

### Available Operations

* [getDlQuery](#getdlquery) - Placeholder - use OWLery for now
* [getSparqlQuery](#getsparqlquery) - Placeholder - use direct SPARQL endpoint for now

## getDlQuery

Placeholder - use OWLery for now

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDlQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDlQueryRequest();
    $request->query = 'incidunt';

    $response = $sdk->owlOntology->getDlQuery($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSparqlQuery

Placeholder - use direct SPARQL endpoint for now

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSparqlQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSparqlQueryRequest();
    $request->query = 'dolore';

    $response = $sdk->owlOntology->getSparqlQuery($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
