# agr

## Overview

Alliance of Genome Resources

### Available Operations

* [getAffectedGenomicModelsUsingGET](#getaffectedgenomicmodelsusingget) - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* [getAllelesForTaxonUsingGET](#getallelesfortaxonusingget) - Get gene allele records submitted by RGD to AGR by taxonId
* [getExpressionForTaxonUsingGET](#getexpressionfortaxonusingget) - Get expression annotations submitted by RGD to AGR by taxonId
* [getGenesForLatestAssemblyUsingGET](#getgenesforlatestassemblyusingget) - Get gene records submitted by RGD to AGR by taxonId
* [getPhenotypesForTaxonUsingGET](#getphenotypesfortaxonusingget) - Get phenotype annotations submitted by RGD to AGR by taxonId
* [getVariantsForTaxonUsingGET](#getvariantsfortaxonusingget) - Get basic variant records submitted by RGD to AGR by taxonId

## getAffectedGenomicModelsUsingGET

Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAffectedGenomicModelsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAffectedGenomicModelsUsingGETRequest();
    $request->taxonId = 'provident';

    $response = $sdk->agr->getAffectedGenomicModelsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllelesForTaxonUsingGET

Get gene allele records submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAllelesForTaxonUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAllelesForTaxonUsingGETRequest();
    $request->taxonId = 'distinctio';

    $response = $sdk->agr->getAllelesForTaxonUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExpressionForTaxonUsingGET

Get expression annotations submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETExpressionForTaxonUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETExpressionForTaxonUsingGETRequest();
    $request->taxonId = 'quibusdam';

    $response = $sdk->agr->getExpressionForTaxonUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenesForLatestAssemblyUsingGET

Get gene records submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGenesForLatestAssemblyUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGenesForLatestAssemblyUsingGETRequest();
    $request->taxonId = 'unde';

    $response = $sdk->agr->getGenesForLatestAssemblyUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypesForTaxonUsingGET

Get phenotype annotations submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETPhenotypesForTaxonUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPhenotypesForTaxonUsingGETRequest();
    $request->taxonId = 'nulla';

    $response = $sdk->agr->getPhenotypesForTaxonUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantsForTaxonUsingGET

Get basic variant records submitted by RGD to AGR by taxonId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETVariantsForTaxonUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVariantsForTaxonUsingGETRequest();
    $request->taxonId = 'corrupti';

    $response = $sdk->agr->getVariantsForTaxonUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
