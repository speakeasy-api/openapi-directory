# annotation

### Available Operations

* [getAnnotationCountByAccIdAndObjectTypeUsingGET](#getannotationcountbyaccidandobjecttypeusingget) - Returns annotation count for ontology accession ID and object type
* [getAnnotationCountByAccIdAndSpeciesUsingGET](#getannotationcountbyaccidandspeciesusingget) - Returns annotation count for ontology accession ID and speicies
* [getAnnotationCountByAccIdUsingGET](#getannotationcountbyaccidusingget) - Returns annotation count for ontology accession ID
* [getAnnotationsByAccIdAndRgdIdUsingGET](#getannotationsbyaccidandrgdidusingget) - Returns a list of annotations by RGD ID and ontology term accession ID
* [getAnnotationsByRgdIdAndOntologyUsingGET](#getannotationsbyrgdidandontologyusingget) - Returns a list of annotations by RGD ID and ontology prefix
* [getAnnotationsByRgdIdUsingGET](#getannotationsbyrgdidusingget) - Returns a list of annotations by RGD ID
* [getAnnotationsUsingGET](#getannotationsusingget) - Returns a list annotations for an ontology term or a term and it's children
* [getAnnotationsUsingPOST](#getannotationsusingpost) - Return a list of genes annotated to an ontology term
* [getAnnotsByRefrerenceUsingGET](#getannotsbyrefrerenceusingget) - Returns a list of annotations for a reference
* [getTermAccIdsUsingGET](#gettermaccidsusingget) - Returns a list ontology term accession IDs annotated to an rgd object

## getAnnotationCountByAccIdAndObjectTypeUsingGET

Returns annotation count for ontology accession ID and object type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest();
    $request->accId = 'illum';
    $request->includeChildren = false;
    $request->objectType = 423655;
    $request->speciesTypeKey = 623564;

    $response = $sdk->annotation->getAnnotationCountByAccIdAndObjectTypeUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationCountByAccIdAndSpeciesUsingGET

Returns annotation count for ontology accession ID and speicies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationCountByAccIdAndSpeciesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationCountByAccIdAndSpeciesUsingGETRequest();
    $request->accId = 'deserunt';
    $request->includeChildren = false;
    $request->speciesTypeKey = 384382;

    $response = $sdk->annotation->getAnnotationCountByAccIdAndSpeciesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationCountByAccIdUsingGET

Returns annotation count for ontology accession ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationCountByAccIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationCountByAccIdUsingGETRequest();
    $request->accId = 'iure';
    $request->includeChildren = false;

    $response = $sdk->annotation->getAnnotationCountByAccIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsByAccIdAndRgdIdUsingGET

Returns a list of annotations by RGD ID and ontology term accession ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationsByAccIdAndRgdIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationsByAccIdAndRgdIdUsingGETRequest();
    $request->accId = 'magnam';
    $request->rgdId = 891773;

    $response = $sdk->annotation->getAnnotationsByAccIdAndRgdIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsByRgdIdAndOntologyUsingGET

Returns a list of annotations by RGD ID and ontology prefix

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationsByRgdIdAndOntologyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationsByRgdIdAndOntologyUsingGETRequest();
    $request->ontologyPrefix = 'ipsa';
    $request->rgdId = 963663;

    $response = $sdk->annotation->getAnnotationsByRgdIdAndOntologyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsByRgdIdUsingGET

Returns a list of annotations by RGD ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationsByRgdIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationsByRgdIdUsingGETRequest();
    $request->rgdId = 272656;

    $response = $sdk->annotation->getAnnotationsByRgdIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsUsingGET

Returns a list annotations for an ontology term or a term and it's children

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotationsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotationsUsingGETRequest();
    $request->accId = 'suscipit';
    $request->includeChildren = false;
    $request->speciesTypeKey = 477665;

    $response = $sdk->annotation->getAnnotationsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsUsingPOST

Return a list of genes annotated to an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnnotationRequest();
    $request->evidenceCodes = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->ids = [
        'recusandae',
        'temporibus',
    ];
    $request->speciesTypeKeys = [
        337396,
    ];
    $request->termAcc = 'veritatis';

    $response = $sdk->annotation->getAnnotationsUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotsByRefrerenceUsingGET

Returns a list of annotations for a reference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnnotsByRefrerenceUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnnotsByRefrerenceUsingGETRequest();
    $request->refRgdId = 648172;

    $response = $sdk->annotation->getAnnotsByRefrerenceUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTermAccIdsUsingGET

Returns a list ontology term accession IDs annotated to an rgd object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETTermAccIdsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTermAccIdsUsingGETRequest();
    $request->rgdId = 20218;

    $response = $sdk->annotation->getTermAccIdsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
