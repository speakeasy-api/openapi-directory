# gene

### Available Operations

* [getAllAnnotatedGenesUsingGET](#getallannotatedgenesusingget) - Return a list of genes annotated to an ontology term
* [getAnnotatedGenesUsingPOST](#getannotatedgenesusingpost) - Return a list of genes annotated to an ontology term
* [getGeneAllelesUsingGET](#getgeneallelesusingget) - Return a list of gene alleles
* [getGeneByMapKeyUsingGET](#getgenebymapkeyusingget) - Return a list of all genes with position information for an assembly
* [getGeneByRgdIdUsingGET](#getgenebyrgdidusingget) - Get a gene record by RGD ID
* [getGeneBySymbolUsingGET](#getgenebysymbolusingget) - Get a gene record by symbol and species type key
* [getGeneOrthologsUsingGET](#getgeneorthologsusingget) - Return a list of gene orthologs
* [getGenesAnnotatedUsingGET](#getgenesannotatedusingget) - Return a list of genes annotated to an ontology term
* [getGenesByAffyIdUsingGET](#getgenesbyaffyidusingget) - Return a list of genes for an affymetrix ID
* [getGenesByAliasSymbolUsingGET](#getgenesbyaliassymbolusingget) - Return a list of genes for an alias and species
* [getGenesByKeywordUsingGET](#getgenesbykeywordusingget) - Return a list of genes by keyword and species type key
* [getGenesByPositionUsingGET](#getgenesbypositionusingget) - Return a list of genes position and map key
* [getGenesBySpeciesUsingGET](#getgenesbyspeciesusingget) - Return a list of all genes for a species in RGD
* [getGenesInRegionUsingGET](#getgenesinregionusingget) - Return a list of genes in region
* [getMappedGenesByPositionUsingGET](#getmappedgenesbypositionusingget) - Return a list of genes position and map key
* [getOrthologsByListUsingPOST](#getorthologsbylistusingpost) - Return a list of gene orthologs

## getAllAnnotatedGenesUsingGET

Return a list of genes annotated to an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAllAnnotatedGenesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAllAnnotatedGenesUsingGETRequest();
    $request->accId = 'quo';

    $response = $sdk->gene->getAllAnnotatedGenesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotatedGenesUsingPOST

Return a list of genes annotated to an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AnnotatedGeneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnnotatedGeneRequest();
    $request->accId = 'odit';
    $request->evidenceCodes = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->speciesTypeKeys = [
        461479,
        520478,
        780529,
        678880,
    ];

    $response = $sdk->gene->getAnnotatedGenesUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneAllelesUsingGET

Return a list of gene alleles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneAllelesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneAllelesUsingGETRequest();
    $request->rgdId = 118274;

    $response = $sdk->gene->getGeneAllelesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneByMapKeyUsingGET

Return a list of all genes with position information for an assembly

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneByMapKeyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneByMapKeyUsingGETRequest();
    $request->mapKey = 720633;

    $response = $sdk->gene->getGeneByMapKeyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneByRgdIdUsingGET

Get a gene record by RGD ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneByRgdIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneByRgdIdUsingGETRequest();
    $request->rgdId = 639921;

    $response = $sdk->gene->getGeneByRgdIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneBySymbolUsingGET

Get a gene record by symbol and species type key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneBySymbolUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneBySymbolUsingGETRequest();
    $request->speciesTypeKey = 582020;
    $request->symbol = 'fugit';

    $response = $sdk->gene->getGeneBySymbolUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneOrthologsUsingGET

Return a list of gene orthologs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGeneOrthologsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGeneOrthologsUsingGETRequest();
    $request->rgdId = 537373;

    $response = $sdk->gene->getGeneOrthologsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesAnnotatedUsingGET

Return a list of genes annotated to an ontology term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesAnnotatedUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesAnnotatedUsingGETRequest();
    $request->accId = 'hic';
    $request->speciesTypeKey = 758616;

    $response = $sdk->gene->getGenesAnnotatedUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesByAffyIdUsingGET

Return a list of genes for an affymetrix ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesByAffyIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesByAffyIdUsingGETRequest();
    $request->affyId = 'totam';
    $request->speciesTypeKey = 105907;

    $response = $sdk->gene->getGenesByAffyIdUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesByAliasSymbolUsingGET

Return a list of genes for an alias and species

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesByAliasSymbolUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesByAliasSymbolUsingGETRequest();
    $request->aliasSymbol = 'commodi';
    $request->speciesTypeKey = 473600;

    $response = $sdk->gene->getGenesByAliasSymbolUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesByKeywordUsingGET

Return a list of genes by keyword and species type key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesByKeywordUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesByKeywordUsingGETRequest();
    $request->keyword = 'modi';
    $request->speciesTypeKey = 186332;

    $response = $sdk->gene->getGenesByKeywordUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesByPositionUsingGET

Return a list of genes position and map key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesByPositionUsingGETRequest();
    $request->chr = 'impedit';
    $request->mapKey = 736918;
    $request->start = 456150;
    $request->stop = 216550;

    $response = $sdk->gene->getGenesByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesBySpeciesUsingGET

Return a list of all genes for a species in RGD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesBySpeciesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesBySpeciesUsingGETRequest();
    $request->speciesTypeKey = 568434;

    $response = $sdk->gene->getGenesBySpeciesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesInRegionUsingGET

Return a list of genes in region

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesInRegionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesInRegionUsingGETRequest();
    $request->chr = 'aspernatur';
    $request->mapKey = 18789;
    $request->start = 324141;
    $request->stop = 617636;

    $response = $sdk->gene->getGenesInRegionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMappedGenesByPositionUsingGET

Return a list of genes position and map key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMappedGenesByPositionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMappedGenesByPositionUsingGETRequest();
    $request->chr = 'sed';
    $request->mapKey = 612096;
    $request->start = 222321;
    $request->stop = 616934;

    $response = $sdk->gene->getMappedGenesByPositionUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrthologsByListUsingPOST

Return a list of gene orthologs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrthologRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrthologRequest();
    $request->rgdIds = [
        943749,
        902599,
    ];
    $request->speciesTypeKeys = [
        449950,
        359508,
        613064,
    ];

    $response = $sdk->gene->getOrthologsByListUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
