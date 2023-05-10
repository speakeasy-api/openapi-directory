# lookup

### Available Operations

* [getEnsemblGeneMappingUsingGET](#getensemblgenemappingusingget) - Translate an RGD ID to an Ensembl Gene  ID
* [getEnsemblGeneMappingUsingPOST](#getensemblgenemappingusingpost) - Translate RGD IDs to Ensembl Gene IDs
* [getEnsemblProteinMappingUsingGET](#getensemblproteinmappingusingget) - Translate an RGD ID to an Ensembl Protein ID
* [getEnsemblProteinMappingUsingPOST](#getensemblproteinmappingusingpost) - Translate RGD IDs to Ensembl Protein IDs
* [getEnsemblTranscriptMappingUsingGET](#getensembltranscriptmappingusingget) - Translate an RGD ID to an Ensembl Transcript ID
* [getEnsemblTranscriptMappingUsingPOST](#getensembltranscriptmappingusingpost) - Translate RGD IDs to Ensembl Transcript IDs
* [getGTEXMappingUsingGET](#getgtexmappingusingget) - Translate an RGD ID to an GTEx ID
* [getGTEXMappingUsingPOST](#getgtexmappingusingpost) - Translate RGD IDs to GTEx IDs
* [getGenBankNucleotideMappingUsingGET](#getgenbanknucleotidemappingusingget) - Translate an RGD ID to a GenBank Nucleotide ID
* [getGenBankNucleotideMappingUsingPOST](#getgenbanknucleotidemappingusingpost) - Translate RGD IDs to GenBank Nucleotide IDs
* [getGenBankProteinMappingUsingGET](#getgenbankproteinmappingusingget) - Translate an RGD ID to a GenBank Protein ID
* [getGenBankProteinMappingUsingPOST](#getgenbankproteinmappingusingpost) - Translate RGD IDs to GenBank Protein IDs
* [getGeneTypesUsingGET](#getgenetypesusingget) - Returns a list of gene types avialable in RGD
* [getHGNCMappingUsingGET](#gethgncmappingusingget) - Translate an RGD ID to an HGNC ID
* [getHGNCMappingUsingPOST](#gethgncmappingusingpost) - Translate RGD IDs to HGNC IDs
* [getMGIMappingUsingGET](#getmgimappingusingget) - Translate an RGD ID to an MGI ID
* [getMGIMappingUsingPOST](#getmgimappingusingpost) - Translate RGD IDs to MGI IDs
* [getMapsUsingGET](#getmapsusingget) - Return a list assembly maps for a species
* [getMapsUsingGET1](#getmapsusingget1) - Return a standardUnit for an ontology if it exists
* [getNCBIGeneMappingUsingGET](#getncbigenemappingusingget) - Translate an RGD ID to an NCBI Gene ID
* [getNCBIGeneMappingUsingPOST](#getncbigenemappingusingpost) - Translate RGD IDs to NCBI Gene IDs
* [getSpeciesTypesUsingGET](#getspeciestypesusingget) - Return a Map of species type keys available in RGD
* [getUniProtMappingUsingGET](#getuniprotmappingusingget) - Translate an RGD ID to a UniProt ID
* [getUniProtMappingUsingPOST](#getuniprotmappingusingpost) - Translate RGD IDs to UniProt IDs

## getEnsemblGeneMappingUsingGET

Translate an RGD ID to an Ensembl Gene  ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETEnsemblGeneMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnsemblGeneMappingUsingGETRequest();
    $request->rgdId = 437032;

    $response = $sdk->lookup->getEnsemblGeneMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnsemblGeneMappingUsingPOST

Translate RGD IDs to Ensembl Gene IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        697631,
        99280,
        60225,
        969810,
    ];

    $response = $sdk->lookup->getEnsemblGeneMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnsemblProteinMappingUsingGET

Translate an RGD ID to an Ensembl Protein ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETEnsemblProteinMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnsemblProteinMappingUsingGETRequest();
    $request->rgdId = 666767;

    $response = $sdk->lookup->getEnsemblProteinMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnsemblProteinMappingUsingPOST

Translate RGD IDs to Ensembl Protein IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        670638,
        170909,
        210382,
    ];

    $response = $sdk->lookup->getEnsemblProteinMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnsemblTranscriptMappingUsingGET

Translate an RGD ID to an Ensembl Transcript ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETEnsemblTranscriptMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnsemblTranscriptMappingUsingGETRequest();
    $request->rgdId = 358152;

    $response = $sdk->lookup->getEnsemblTranscriptMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnsemblTranscriptMappingUsingPOST

Translate RGD IDs to Ensembl Transcript IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        750686,
    ];

    $response = $sdk->lookup->getEnsemblTranscriptMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGTEXMappingUsingGET

Translate an RGD ID to an GTEx ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGTEXMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGTEXMappingUsingGETRequest();
    $request->rgdId = 315428;

    $response = $sdk->lookup->getGTEXMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGTEXMappingUsingPOST

Translate RGD IDs to GTEx IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        363711,
        325047,
        570197,
    ];

    $response = $sdk->lookup->getGTEXMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenBankNucleotideMappingUsingGET

Translate an RGD ID to a GenBank Nucleotide ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenBankNucleotideMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenBankNucleotideMappingUsingGETRequest();
    $request->rgdId = 38425;

    $response = $sdk->lookup->getGenBankNucleotideMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenBankNucleotideMappingUsingPOST

Translate RGD IDs to GenBank Nucleotide IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        634274,
        988374,
    ];

    $response = $sdk->lookup->getGenBankNucleotideMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenBankProteinMappingUsingGET

Translate an RGD ID to a GenBank Protein ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenBankProteinMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenBankProteinMappingUsingGETRequest();
    $request->rgdId = 958950;

    $response = $sdk->lookup->getGenBankProteinMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenBankProteinMappingUsingPOST

Translate RGD IDs to GenBank Protein IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        652790,
    ];

    $response = $sdk->lookup->getGenBankProteinMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneTypesUsingGET

Returns a list of gene types avialable in RGD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->lookup->getGeneTypesUsingGET();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHGNCMappingUsingGET

Translate an RGD ID to an HGNC ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETHGNCMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETHGNCMappingUsingGETRequest();
    $request->rgdId = 208876;

    $response = $sdk->lookup->getHGNCMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHGNCMappingUsingPOST

Translate RGD IDs to HGNC IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        161309,
        995300,
        653108,
    ];

    $response = $sdk->lookup->getHGNCMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMGIMappingUsingGET

Translate an RGD ID to an MGI ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMGIMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMGIMappingUsingGETRequest();
    $request->rgdId = 581850;

    $response = $sdk->lookup->getMGIMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMGIMappingUsingPOST

Translate RGD IDs to MGI IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        414369,
        466311,
    ];

    $response = $sdk->lookup->getMGIMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapsUsingGET

Return a list assembly maps for a species

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMapsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMapsUsingGETRequest();
    $request->speciesTypeKey = 474697;

    $response = $sdk->lookup->getMapsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapsUsingGET1

Return a standardUnit for an ontology if it exists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMapsUsingGET1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMapsUsingGET1Request();
    $request->accId = 'velit';

    $response = $sdk->lookup->getMapsUsingGET1($request);

    if ($response->getMapsUsingGET1200WildcardString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNCBIGeneMappingUsingGET

Translate an RGD ID to an NCBI Gene ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETNCBIGeneMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETNCBIGeneMappingUsingGETRequest();
    $request->rgdId = 623510;

    $response = $sdk->lookup->getNCBIGeneMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNCBIGeneMappingUsingPOST

Translate RGD IDs to NCBI Gene IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        338007,
    ];

    $response = $sdk->lookup->getNCBIGeneMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpeciesTypesUsingGET

Return a Map of species type keys available in RGD

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->lookup->getSpeciesTypesUsingGET();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUniProtMappingUsingGET

Translate an RGD ID to a UniProt ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETUniProtMappingUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUniProtMappingUsingGETRequest();
    $request->rgdId = 110375;

    $response = $sdk->lookup->getUniProtMappingUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUniProtMappingUsingPOST

Translate RGD IDs to UniProt IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RGDIDListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RGDIDListRequest();
    $request->rgdIds = [
        656330,
        317202,
        138183,
    ];

    $response = $sdk->lookup->getUniProtMappingUsingPOST($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
