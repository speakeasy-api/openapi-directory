# private

## Overview

Unstable API methods. Subject to change without prior notice. Use at your own risk.

### Available Operations

* [getApiDocs](#getapidocs) - Browse API documentation
* [getApiSwaggerUI](#getapiswaggerui) - Browse interactive API documentation
* [getAutocomplete](#getautocomplete) - Get `autocomplete` objects.
* [getDiseaseById](#getdiseasebyid) - Find information about a disease
* [getDrugByID](#getdrugbyid) - Get drug by ID
* [getECObyID](#getecobyid) - Get evidence code by ID
* [getQuickSearch](#getquicksearch) - Search most relevant results
* [getRelationByEFOID](#getrelationbyefoid) - Find related entities by disease
* [getRelationByENSGID](#getrelationbyensgid) - Find related entities by target
* [getSwagger](#getswagger) - Get OpenAPI schema
* [getTargetByENSGID](#gettargetbyensgid) - Find information about a target
* [getTargetExpressionByENSGID](#gettargetexpressionbyensgid) - Query expression levels
* [postBestHitSearch](#postbesthitsearch) - Find the best hit
* [postDiseaseById](#postdiseasebyid) - Find information about a list of diseases
* [postEnrichmentTarget](#postenrichmenttarget) - Enrichment analysis
* [postRelation](#postrelation) - Find related entities
* [postTargetByENSGID](#posttargetbyensgid) - Find information about a list of targets
* [postTargetExpressionByENSGID](#posttargetexpressionbyensgid) - Batch query expression levels

## getApiDocs

Access api docs as served by Redoc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->private->getApiDocs();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiSwaggerUI

Interactive API docs using swagger-ui

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->private->getApiSwaggerUI();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutocomplete

Search for the closest term to autocomplete in the search box.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutocompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutocompleteRequest();
    $request->q = 'officia';
    $request->size = 'occaecati';

    $response = $sdk->private->getAutocomplete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseById

Get `disease` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseByIdRequest();
    $request->disease = 'fugit';

    $response = $sdk->private->getDiseaseById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDrugByID

Get `drug` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDrugByIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDrugByIDRequest();
    $request->drugIDPathParameter = 'deleniti';
    $request->drugIdQueryParameter = 'hic';

    $response = $sdk->private->getDrugByID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getECObyID

Get `ECO` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetECObyIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetECObyIDRequest();
    $request->ecoId = 'optio';

    $response = $sdk->private->getECObyID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuickSearch

Get `search-result` objects. Enables search bar functionality.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuickSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuickSearchRequest();
    $request->q = 'totam';
    $request->size = 'beatae';

    $response = $sdk->private->getQuickSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationByEFOID

Get `relation` objects starting from diseases.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationByEFOIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationByEFOIDRequest();
    $request->disease = 'commodi';

    $response = $sdk->private->getRelationByEFOID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRelationByENSGID

Get `relation` objects starting from diseases.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelationByENSGIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelationByENSGIDRequest();
    $request->target = 'molestiae';

    $response = $sdk->private->getRelationByENSGID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwagger

Get swagger.yaml specs for the API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->private->getSwagger();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTargetByENSGID

Get `target` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTargetByENSGIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTargetByENSGIDRequest();
    $request->target = 'modi';

    $response = $sdk->private->getTargetByENSGID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTargetExpressionByENSGID

Get `gene-expression` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTargetExpressionByENSGIDRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTargetExpressionByENSGIDRequest();
    $request->gene = 'qui';

    $response = $sdk->private->getTargetExpressionByENSGID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBestHitSearch

Fire the search method for multiple strings


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'impedit'

    $response = $sdk->private->postBestHitSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDiseaseById

Get `disease` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"disease":["disease1", "disease2"],
"facets" = "true"}
'

    $response = $sdk->private->postDiseaseById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnrichmentTarget

Returns an enrichment analysis for a list of targets passed in the body


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"target" : ["ENSG00000001", "ENSG00000002"],
 "pvalue" : 0.001,
 "size" : 20}
'

    $response = $sdk->private->postEnrichmentTarget($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRelation

Get `relation` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"subject":["gene1", "gene2"]}
'

    $response = $sdk->private->postRelation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTargetByENSGID

Get `target` objects. Used for the target profile page.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"target":["target1", "target2"],
"facets" = "true"}
'

    $response = $sdk->private->postTargetByENSGID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTargetExpressionByENSGID

Get `gene-expression` objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'{"gene":["gene1", "gene2"]}
'

    $response = $sdk->private->postTargetExpressionByENSGID($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
