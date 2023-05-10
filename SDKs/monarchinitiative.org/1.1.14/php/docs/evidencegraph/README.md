# evidenceGraph

## Overview

Operations on evidence graphs

### Available Operations

* [getEvidenceGraphObject](#getevidencegraphobject) - Returns evidence graph object for a given association
* [getEvidenceGraphTable](#getevidencegraphtable) - Returns evidence as a association_results object given an association

## getEvidenceGraphObject

Note that every association is assumed to have a unique ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceGraphObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceGraphObjectRequest();
    $request->id = '5998e22a-e20d-4a16-bc2b-271a289c57e8';

    $response = $sdk->evidenceGraph->getEvidenceGraphObject($request);

    if ($response->graphs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceGraphTable

Note that every association is assumed to have a unique ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceGraphTableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceGraphTableRequest();
    $request->id = '54e90439-d222-4465-a946-2407084f7ab3';
    $request->isPublication = false;

    $response = $sdk->evidenceGraph->getEvidenceGraphTable($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
