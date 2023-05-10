# ontology

## Overview

Ontology Web Service

### Available Operations

* [getOntDagsUsingGET](#getontdagsusingget) - Returns child and parent terms for Accession ID
* [getTermUsingGET](#gettermusingget) - Returns term for Accession ID
* [isDescendantOfUsingGET](#isdescendantofusingget) - Returns true or false for terms

## getOntDagsUsingGET

Returns child and parent terms for Accession ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETOntDagsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETOntDagsUsingGETRequest();
    $request->accId = 'id';

    $response = $sdk->ontology->getOntDagsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTermUsingGET

Returns term for Accession ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETTermUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTermUsingGETRequest();
    $request->accId = 'possimus';

    $response = $sdk->ontology->getTermUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## isDescendantOfUsingGET

Returns true or false for terms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IsDescendantOfUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IsDescendantOfUsingGETRequest();
    $request->accId1 = 'aut';
    $request->accId2 = 'quasi';

    $response = $sdk->ontology->isDescendantOfUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
