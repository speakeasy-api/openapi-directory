# bioentity

## Overview

Retrieval of domain entities plus associations

### Available Operations

* [getAnatomyGeneAssociations](#getanatomygeneassociations) - Returns genes associated with a given anatomy
* [~~getAnatomyGeneByTaxonAssociations~~](#getanatomygenebytaxonassociations) - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon :warning: **Deprecated**
* [getCaseDiseaseAssociations](#getcasediseaseassociations) - Returns diseases associated with a case
* [getCaseGenotypeAssociations](#getcasegenotypeassociations) - Returns genotypes associated with a case
* [getCaseModelAssociations](#getcasemodelassociations) - Returns models associated with a case
* [getCasePhenotypeAssociations](#getcasephenotypeassociations) - Returns phenotypes associated with a case
* [getCaseVariantAssociations](#getcasevariantassociations) - Returns variants associated with a case
* [getDiseaseCaseAssociations](#getdiseasecaseassociations) - Returns cases associated with a disease
* [getDiseaseGeneAssociations](#getdiseasegeneassociations) - Returns genes associated with a disease
* [getDiseaseGenotypeAssociations](#getdiseasegenotypeassociations) - Returns genotypes associated with a disease
* [getDiseaseModelAssociations](#getdiseasemodelassociations) - Returns associations to models of the disease
* [~~getDiseaseModelTaxonAssociations~~](#getdiseasemodeltaxonassociations) - Returns associations to models of the disease constrained by taxon :warning: **Deprecated**
* [getDiseasePathwayAssociations](#getdiseasepathwayassociations) - Returns pathways associated with a disease
* [getDiseasePhenotypeAssociations](#getdiseasephenotypeassociations) - Returns phenotypes associated with disease
* [getDiseasePublicationAssociations](#getdiseasepublicationassociations) - Returns publications associated with a disease
* [getDiseaseSubstanceAssociations](#getdiseasesubstanceassociations) - Returns substances associated with a disease
* [getDiseaseVariantAssociations](#getdiseasevariantassociations) - Returns variants associated with a disease
* [getFunctionAssociations](#getfunctionassociations) - Returns annotations associated to a function term
* [getFunctionGeneAssociations](#getfunctiongeneassociations) - Returns genes associated to a GO term
* [getFunctionPublicationAssociations](#getfunctionpublicationassociations) - Returns publications associated to a GO term
* [getFunctionTaxonAssociations](#getfunctiontaxonassociations) - Returns taxons associated to a GO term
* [getGeneAnatomyAssociations](#getgeneanatomyassociations) - Returns anatomical entities associated with a gene
* [getGeneCaseAssociations](#getgenecaseassociations) - Returns cases associated with a gene
* [getGeneDiseaseAssociations](#getgenediseaseassociations) - Returns diseases associated with gene
* [getGeneExpressionAssociations](#getgeneexpressionassociations) - Returns expression events for a gene
* [getGeneFunctionAssociations](#getgenefunctionassociations) - Returns function associations for a gene
* [getGeneGenotypeAssociations](#getgenegenotypeassociations) - Returns genotypes associated with a gene
* [getGeneHomologAssociations](#getgenehomologassociations) - Returns homologs for a gene
* [getGeneInteractions](#getgeneinteractions) - Returns interactions for a gene
* [getGeneModelAssociations](#getgenemodelassociations) - Returns models associated with a gene
* [getGeneOrthologDiseaseAssociations](#getgeneorthologdiseaseassociations) - Return diseases associated with orthologs of a gene
* [getGeneOrthologPhenotypeAssociations](#getgeneorthologphenotypeassociations) - Return phenotypes associated with orthologs for a gene
* [getGenePathwayAssociations](#getgenepathwayassociations) - Returns pathways associated with gene
* [getGenePhenotypeAssociations](#getgenephenotypeassociations) - Returns phenotypes associated with gene
* [getGenePublicationAssociations](#getgenepublicationassociations) - Returns publications associated with a gene
* [getGeneVariantAssociations](#getgenevariantassociations) - Returns variants associated with a gene
* [getGenericAssociations](#getgenericassociations) - Returns associations for an entity regardless of the type
* [getGenericObject](#getgenericobject) - Returns basic info on object of any type
* [getGenericObjectByType](#getgenericobjectbytype) - Return basic info on an object for a given type
* [getGenotypeCaseAssociations](#getgenotypecaseassociations) - Returns cases associated with a genotype
* [getGenotypeDiseaseAssociations](#getgenotypediseaseassociations) - Returns diseases associated with a genotype
* [getGenotypeGeneAssociations](#getgenotypegeneassociations) - Returns genes associated with a genotype
* [getGenotypeGenotypeAssociations](#getgenotypegenotypeassociations) - Returns genotypes-genotype associations
* [getGenotypeModelAssociations](#getgenotypemodelassociations) - Returns models associated with a genotype
* [getGenotypePhenotypeAssociations](#getgenotypephenotypeassociations) - Returns phenotypes associated with a genotype
* [getGenotypePublicationAssociations](#getgenotypepublicationassociations) - Returns publications associated with a genotype
* [getGenotypeVariantAssociations](#getgenotypevariantassociations) - Returns genotypes-variant associations
* [~~getGotermGeneAssociations~~](#getgotermgeneassociations) - Returns associations to GO terms for a gene :warning: **Deprecated**
* [getModelCaseAssociations](#getmodelcaseassociations) - Returns cases associated with a model
* [getModelDiseaseAssociations](#getmodeldiseaseassociations) - Returns diseases associated with a model
* [getModelGeneAssociations](#getmodelgeneassociations) - Returns genes associated with a model
* [getModelGenotypeAssociations](#getmodelgenotypeassociations) - Returns genotypes associated with a model
* [getModelPhenotypeAssociations](#getmodelphenotypeassociations) - Returns phenotypes associated with a model
* [getModelPublicationAssociations](#getmodelpublicationassociations) - Returns publications associated with a model
* [getModelVariantAssociations](#getmodelvariantassociations) - Returns variants associated with a model
* [getPathwayDiseaseAssociations](#getpathwaydiseaseassociations) - Returns diseases associated with a pathway
* [getPathwayGeneAssociations](#getpathwaygeneassociations) - Returns genes associated with a pathway
* [getPathwayPhenotypeAssociations](#getpathwayphenotypeassociations) - Returns phenotypes associated with a pathway
* [getPhenotypeAnatomyAssociations](#getphenotypeanatomyassociations) - Returns anatomical entities associated with a phenotype
* [getPhenotypeCaseAssociations](#getphenotypecaseassociations) - Returns cases associated with a phenotype
* [getPhenotypeDiseaseAssociations](#getphenotypediseaseassociations) - Returns diseases associated with a phenotype
* [getPhenotypeGeneAssociations](#getphenotypegeneassociations) - Returns genes associated with a phenotype
* [~~getPhenotypeGeneByTaxonAssociations~~](#getphenotypegenebytaxonassociations) - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon :warning: **Deprecated**
* [getPhenotypeGenotypeAssociations](#getphenotypegenotypeassociations) - Returns genotypes associated with a phenotype
* [getPhenotypePathwayAssociations](#getphenotypepathwayassociations) - Returns pathways associated with a phenotype
* [getPhenotypePublicationAssociations](#getphenotypepublicationassociations) - Returns publications associated with a phenotype
* [getPhenotypeVariantAssociations](#getphenotypevariantassociations) - Returns variants associated with a phenotype
* [getPublicationDiseaseAssociations](#getpublicationdiseaseassociations) - Returns diseases associated with a publication
* [getPublicationGeneAssociations](#getpublicationgeneassociations) - Returns genes associated with a publication
* [getPublicationGenotypeAssociations](#getpublicationgenotypeassociations) - Returns genotypes associated with a publication
* [getPublicationModelAssociations](#getpublicationmodelassociations) - Returns models associated with a publication
* [getPublicationPhenotypeAssociations](#getpublicationphenotypeassociations) - Returns phenotypes associated with a publication
* [getPublicationVariantAssociations](#getpublicationvariantassociations) - Returns variants associated with a publication
* [getSubstanceParticipantInAssociations](#getsubstanceparticipantinassociations) - Returns associations between an activity and process and the specified substance
* [getSubstanceRoleAssociations](#getsubstanceroleassociations) - Returns associations between given drug and roles
* [getSubstanceTreatsAssociations](#getsubstancetreatsassociations) - Returns substances associated with a disease
* [getVariantCaseAssociations](#getvariantcaseassociations) - Returns cases associated with a variant
* [getVariantDiseaseAssociations](#getvariantdiseaseassociations) - Returns diseases associated with a variant
* [getVariantGeneAssociations](#getvariantgeneassociations) - Returns genes associated with a variant
* [getVariantGenotypeAssociations](#getvariantgenotypeassociations) - Returns genotypes associated with a variant
* [getVariantModelAssociations](#getvariantmodelassociations) - Returns models associated with a variant
* [getVariantPhenotypeAssociations](#getvariantphenotypeassociations) - Returns phenotypes associated with a variant
* [getVariantPublicationAssociations](#getvariantpublicationassociations) - Returns publications associated with a variant

## getAnatomyGeneAssociations

Returns genes associated with a given anatomy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnatomyGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnatomyGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'laboriosam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->fetchObjects = false;
    $request->id = '96eb10fa-aa23-452c-9955-907aff1a3a2f';
    $request->q = 'mollitia';
    $request->relation = 'occaecati';
    $request->rows = 253291;
    $request->slim = [
        'quam',
        'molestiae',
    ];
    $request->sort = 'velit';
    $request->start = 623510;
    $request->taxon = [
        'quis',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getAnatomyGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getAnatomyGeneByTaxonAssociations~~

For example, + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnatomyGeneByTaxonAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnatomyGeneByTaxonAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'vitae';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'animi',
        'enim',
        'odit',
    ];
    $request->fetchObjects = false;
    $request->id = 'c3f5ad01-9da1-4ffe-b8f0-97b0074f1547';
    $request->q = 'dicta';
    $request->relation = 'harum';
    $request->rows = 317983;
    $request->slim = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->sort = 'quidem';
    $request->start = 565189;
    $request->taxid = 'excepturi';
    $request->taxon = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getAnatomyGeneByTaxonAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCaseDiseaseAssociations

Returns diseases associated with a case

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseDiseaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'quasi';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->fetchObjects = false;
    $request->id = '50ad2abd-4426-4980-ad50-2a94bb4f63c9';
    $request->rows = 396098;
    $request->slim = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->start = 223081;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getCaseDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCaseGenotypeAssociations

Returns genotypes associated with a case

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseGenotypeAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'debitis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->fetchObjects = false;
    $request->id = 'fb14cd66-ae39-45ef-b9ba-88f3a6699707';
    $request->rows = 301575;
    $request->slim = [
        'id',
        'labore',
        'labore',
    ];
    $request->start = 383462;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getCaseGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCaseModelAssociations

Returns models associated with a case

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseModelAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'natus';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->fetchObjects = false;
    $request->id = '14195989-0afa-4563-a251-6fe4c8b711e5';
    $request->rows = 714242;
    $request->slim = [
        'repellat',
        'quibusdam',
    ];
    $request->start = 149448;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getCaseModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCasePhenotypeAssociations

Returns phenotypes associated with a case

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCasePhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCasePhenotypeAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'saepe';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->fetchObjects = false;
    $request->id = '21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb';
    $request->rows = 171629;
    $request->slim = [
        'totam',
        'dignissimos',
    ];
    $request->start = 54338;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getCasePhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCaseVariantAssociations

Returns variants associated with a case

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCaseVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCaseVariantAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'quis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eos',
    ];
    $request->fetchObjects = false;
    $request->id = '02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb';
    $request->rows = 964490;
    $request->slim = [
        'quos',
        'aliquid',
    ];
    $request->start = 212390;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getCaseVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseCaseAssociations

Returns cases associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'dolorem';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'qui',
    ];
    $request->fetchObjects = false;
    $request->id = '3f9b77f3-a410-4067-8ebf-69280d1ba77a';
    $request->rows = 536579;
    $request->slim = [
        'necessitatibus',
        'distinctio',
        'asperiores',
    ];
    $request->start = 469497;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseGeneAssociations

Returns genes associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseGeneAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseGeneAssociationsAssociationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseGeneAssociationsRequest();
    $request->associationType = GetDiseaseGeneAssociationsAssociationTypeEnum::CAUSAL;
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'voluptate';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->fetchObjects = false;
    $request->id = '03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b';
    $request->q = 'accusamus';
    $request->relation = 'numquam';
    $request->rows = 313692;
    $request->slim = [
        'sapiente',
    ];
    $request->sort = 'totam';
    $request->start = 471752;
    $request->taxon = [
        'expedita',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseGenotypeAssociations

Returns genotypes associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'neque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'vel',
    ];
    $request->fetchObjects = false;
    $request->id = 'b5a73429-cdb1-4a84-a2bb-679d2322715b';
    $request->q = 'hic';
    $request->relation = 'voluptatem';
    $request->rows = 765326;
    $request->slim = [
        'nobis',
        'et',
        'saepe',
    ];
    $request->sort = 'ipsum';
    $request->start = 83422;
    $request->taxon = [
        'quos',
        'tempore',
        'cupiditate',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseModelAssociations

In the association object returned, the subject will be the disease, and the object will be the model.
The model may be a gene or genetic element.

If the query disease is a general class, the association subject may be to a specific disease.

In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.

In other cases, the association will be *indirect*, for
example, chaining over orthology. In these cases the chain
will be reflected in the *evidence graph*

* TODO: provide hook into owlsim for dynamic computation of models by similarity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseModelAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'aperiam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->fetchObjects = false;
    $request->id = 'a1108e0a-dcf4-4b92-9879-fce953f73ef7';
    $request->q = 'hic';
    $request->relation = 'distinctio';
    $request->rows = 799203;
    $request->slim = [
        'similique',
        'facilis',
    ];
    $request->sort = 'vero';
    $request->start = 498140;
    $request->taxon = [
        'quibusdam',
        'illum',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getDiseaseModelTaxonAssociations~~

See /disease/<id>/models route for full details

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseModelTaxonAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseModelTaxonAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'sequi';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'impedit',
        'aut',
        'voluptatibus',
    ];
    $request->fetchObjects = false;
    $request->id = '5d2cff7c-70a4-4562-ad43-6813f16d9f5f';
    $request->rows = 788873;
    $request->slim = [
        'ea',
        'impedit',
        'corporis',
        'veniam',
    ];
    $request->start = 399499;
    $request->taxon = 'inventore';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseModelTaxonAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseasePathwayAssociations

Returns pathways associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseasePathwayAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseasePathwayAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'magnam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quo',
        'consectetur',
    ];
    $request->fetchObjects = false;
    $request->id = 'e250fb00-8c42-4e14-9aac-366c8dd6b144';
    $request->q = 'explicabo';
    $request->relation = 'provident';
    $request->rows = 55374;
    $request->slim = [
        'magnam',
        'odio',
    ];
    $request->sort = 'eius';
    $request->start = 458515;
    $request->taxon = [
        'rem',
        'fuga',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseasePathwayAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseasePhenotypeAssociations

Returns phenotypes associated with disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseasePhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseasePhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'reprehenderit';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'fugiat',
        'ut',
        'eum',
    ];
    $request->fetchObjects = false;
    $request->id = '6d28c10a-b3cd-4ca4-a519-04e523c7e0bc';
    $request->q = 'dignissimos';
    $request->relation = 'inventore';
    $request->rows = 469498;
    $request->slim = [
        'accusamus',
        'aliquam',
        'odio',
    ];
    $request->sort = 'occaecati';
    $request->start = 414567;
    $request->taxon = [
        'dolores',
        'deserunt',
        'molestiae',
        'accusantium',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseasePhenotypeAssociations($request);

    if ($response->d2PAssociationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseasePublicationAssociations

Returns publications associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseasePublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseasePublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'porro';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quas',
        'praesentium',
    ];
    $request->fetchObjects = false;
    $request->id = '282aa482-562f-4222-a981-7ee17cbe61e6';
    $request->q = 'harum';
    $request->relation = 'molestiae';
    $request->rows = 699622;
    $request->slim = [
        'minima',
        'distinctio',
        'eligendi',
    ];
    $request->sort = 'sit';
    $request->start = 636061;
    $request->taxon = [
        'adipisci',
        'cumque',
        'consequuntur',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseasePublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseSubstanceAssociations

e.g. drugs or small molecules used to treat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseSubstanceAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseSubstanceAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'consequatur';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quaerat',
        'sapiente',
        'consectetur',
        'esse',
    ];
    $request->fetchObjects = false;
    $request->id = '89fd871f-99dd-42ef-9121-aa6f1e674bdb';
    $request->rows = 33304;
    $request->slim = [
        'sapiente',
        'dicta',
    ];
    $request->start = 355369;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseSubstanceAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiseaseVariantAssociations

Returns variants associated with a disease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiseaseVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiseaseVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'reprehenderit';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'nisi',
        'aut',
    ];
    $request->fetchObjects = false;
    $request->id = '82d68ea1-9f1d-4170-9133-9d08086a1840';
    $request->q = 'dolor';
    $request->relation = 'occaecati';
    $request->rows = 253191;
    $request->slim = [
        'explicabo',
        'voluptas',
        'aut',
        'dignissimos',
    ];
    $request->sort = 'dicta';
    $request->start = 981640;
    $request->taxon = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getDiseaseVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionAssociations

Returns annotations associated to a function term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionAssociationsRequest();
    $request->evidence = [
        'aperiam',
        'ea',
        'quaerat',
        'consequuntur',
    ];
    $request->id = 'dac7af51-5cc4-413a-a63a-ae8d67864dbb';
    $request->rows = 414857;
    $request->start = 447144;

    $response = $sdk->bioentity->getFunctionAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionGeneAssociations

Returns genes associated to a GO term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionGeneAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionGeneAssociationsRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'corporis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'assumenda',
        'nemo',
        'recusandae',
        'aliquid',
    ];
    $request->fetchObjects = false;
    $request->id = '0b375ed4-f6fb-4ee4-9f33-317fe35b60eb';
    $request->q = 'vitae';
    $request->relation = 'accusamus';
    $request->relationshipType = GetFunctionGeneAssociationsRelationshipTypeEnum::INVOLVED_IN_REGULATION_OF;
    $request->rows = 272437;
    $request->slim = [
        'voluptas',
    ];
    $request->sort = 'voluptas';
    $request->start = 374296;
    $request->taxon = [
        'nobis',
        'dolorum',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getFunctionGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionPublicationAssociations

Returns publications associated to a GO term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionPublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionPublicationAssociationsRequest();
    $request->evidence = [
        'minus',
    ];
    $request->id = '28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1';
    $request->rows = 611749;
    $request->start = 292794;

    $response = $sdk->bioentity->getFunctionPublicationAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionTaxonAssociations

Returns taxons associated to a GO term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionTaxonAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionTaxonAssociationsRequest();
    $request->evidence = [
        'sed',
        'in',
        'commodi',
    ];
    $request->id = 'b26916fe-1f08-4f42-94e3-698f447f603e';
    $request->rows = 505866;
    $request->start = 708609;

    $response = $sdk->bioentity->getFunctionTaxonAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneAnatomyAssociations

Returns anatomical entities associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneAnatomyAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneAnatomyAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'quaerat';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'ipsam',
        'debitis',
    ];
    $request->fetchObjects = false;
    $request->id = '80ca55ef-d20e-4457-a185-8b6a89fbe3a5';
    $request->q = 'officia';
    $request->relation = 'dolorum';
    $request->rows = 548361;
    $request->slim = [
        'tempora',
        'atque',
        'fugit',
        'ut',
    ];
    $request->sort = 'fugiat';
    $request->start = 30235;
    $request->taxon = [
        'expedita',
        'magnam',
        'consequatur',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneAnatomyAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneCaseAssociations

Returns cases associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'esse';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'sit',
        'voluptatum',
    ];
    $request->fetchObjects = false;
    $request->id = '8e518620-65e9-404f-bb11-94b8abf603a7';
    $request->rows = 600392;
    $request->slim = [
        'provident',
        'repellendus',
        'delectus',
        'voluptates',
    ];
    $request->start = 16871;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneDiseaseAssociations

Returns diseases associated with gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneDiseaseAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneDiseaseAssociationsAssociationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneDiseaseAssociationsRequest();
    $request->associationType = GetGeneDiseaseAssociationsAssociationTypeEnum::BOTH;
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'quidem';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'facere',
        'fuga',
    ];
    $request->fetchObjects = false;
    $request->id = '8a50ce18-7f86-4bc1-b3d6-89eee9526f8d';
    $request->q = 'error';
    $request->relation = 'blanditiis';
    $request->rows = 379356;
    $request->slim = [
        'atque',
        'atque',
        'sunt',
        'recusandae',
    ];
    $request->sort = 'dolorum';
    $request->start = 829898;
    $request->taxon = [
        'reiciendis',
        'doloremque',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneExpressionAssociations

Returns expression events for a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneExpressionAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneExpressionAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'repudiandae';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'accusantium',
    ];
    $request->fetchObjects = false;
    $request->id = '12563f94-e29e-4973-a922-a57a15be3e06';
    $request->q = 'ipsa';
    $request->relation = 'totam';
    $request->rows = 61078;
    $request->slim = [
        'eveniet',
        'qui',
    ];
    $request->sort = 'cum';
    $request->start = 434761;
    $request->taxon = [
        'ratione',
        'laborum',
        'distinctio',
        'voluptatum',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneExpressionAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneFunctionAssociations

IMPLEMENTATION DETAILS
----------------------

Note: currently this is implemented as a query to the GO/AmiGO solr instance.
This directly supports IDs such as:

 - ZFIN e.g. ZFIN:ZDB-GENE-050417-357

Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
the standard for biolink is MGI:nnnn, so you should use this (will be transparently
mapped to legacy ID)

Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
mapped behind the scenes for querying.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneFunctionAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneFunctionAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'rem';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'ad',
        'repellat',
    ];
    $request->fetchObjects = false;
    $request->id = '0597a60f-f2a5-44a3-9e94-764a3e865e79';
    $request->rows = 337477;
    $request->slim = [
        'reiciendis',
        'provident',
    ];
    $request->start = 133439;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneFunctionAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneGenotypeAssociations

Returns genotypes associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'ullam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'animi',
    ];
    $request->fetchObjects = false;
    $request->id = '5a9da660-ff57-4bfa-ad4f-9efc1b4512c1';
    $request->q = 'perferendis';
    $request->relation = 'velit';
    $request->rows = 137251;
    $request->slim = [
        'eius',
        'rem',
    ];
    $request->sort = 'at';
    $request->start = 773084;
    $request->taxon = [
        'sapiente',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneHomologAssociations

Returns homologs for a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneHomologAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneHomologAssociationsHomologyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneHomologAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'eum';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'minima',
    ];
    $request->fetchObjects = false;
    $request->homologyType = GetGeneHomologAssociationsHomologyTypeEnum::P;
    $request->id = '99ebfd0e-9fe6-4c63-aca3-aed011799631';
    $request->rows = 169025;
    $request->slim = [
        'nulla',
        'necessitatibus',
        'ipsa',
        'tempora',
    ];
    $request->start = 470621;
    $request->taxon = [
        'dicta',
        'iusto',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneHomologAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneInteractions

Returns interactions for a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneInteractionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneInteractionsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'esse';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'maiores',
        'reiciendis',
        'vel',
    ];
    $request->fetchObjects = false;
    $request->id = '1d017476-360a-415d-b6a6-60659a1adeaa';
    $request->q = 'libero';
    $request->relation = 'ad';
    $request->rows = 536923;
    $request->slim = [
        'vitae',
        'repellendus',
    ];
    $request->sort = 'ex';
    $request->start = 775803;
    $request->taxon = [
        'ut',
        'ad',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneInteractions($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneModelAssociations

Returns models associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneModelAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'expedita';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'molestias',
    ];
    $request->fetchObjects = false;
    $request->id = 'b61891ba-a0fe-41ad-a008-e6f8c5f350d8';
    $request->q = 'impedit';
    $request->relation = 'quibusdam';
    $request->rows = 720528;
    $request->slim = [
        'culpa',
        'dolor',
    ];
    $request->sort = 'aliquam';
    $request->start = 80532;
    $request->taxon = [
        'veritatis',
        'tempora',
        'dolor',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneOrthologDiseaseAssociations

Return diseases associated with orthologs of a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneOrthologDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneOrthologDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'consequatur';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'sit',
    ];
    $request->fetchObjects = false;
    $request->id = '421813d5-208e-4ce7-a253-b668451c6c6e';
    $request->q = 'consequuntur';
    $request->relation = 'voluptatem';
    $request->rows = 350207;
    $request->slim = [
        'quasi',
        'nisi',
        'at',
        'vero',
    ];
    $request->sort = 'est';
    $request->start = 690785;
    $request->taxon = [
        'doloribus',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneOrthologDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneOrthologPhenotypeAssociations

Return phenotypes associated with orthologs for a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneOrthologPhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneOrthologPhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'repudiandae';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'occaecati',
        'nemo',
        'voluptate',
        'blanditiis',
    ];
    $request->fetchObjects = false;
    $request->id = 'a6458427-3a84-418d-9623-09fb0929921a';
    $request->q = 'accusamus';
    $request->relation = 'voluptatibus';
    $request->rows = 719620;
    $request->slim = [
        'delectus',
        'minima',
        'praesentium',
    ];
    $request->sort = 'maxime';
    $request->start = 300403;
    $request->taxon = [
        'quos',
        'commodi',
        'itaque',
        'commodi',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneOrthologPhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenePathwayAssociations

Returns pathways associated with gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenePathwayAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenePathwayAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'totam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'modi',
        'nam',
        'vero',
        'voluptatem',
    ];
    $request->fetchObjects = false;
    $request->id = '56013f59-da75-47a5-9ecf-ef66ef1caa33';
    $request->q = 'atque';
    $request->relation = 'ipsum';
    $request->rows = 773035;
    $request->slim = [
        'soluta',
    ];
    $request->sort = 'repudiandae';
    $request->start = 721430;
    $request->taxon = [
        'iusto',
        'voluptate',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenePathwayAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenePhenotypeAssociations

Returns phenotypes associated with gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenePhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenePhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'sequi';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'neque',
        'quo',
    ];
    $request->fetchObjects = false;
    $request->id = '8d72f64d-1db1-4f2c-8310-661e96349e1c';
    $request->q = 'voluptatibus';
    $request->relation = 'iste';
    $request->rows = 932562;
    $request->slim = [
        'nisi',
    ];
    $request->sort = 'itaque';
    $request->start = 242178;
    $request->taxon = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenePhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenePublicationAssociations

Returns publications associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenePublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenePublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'sit';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'consequatur',
    ];
    $request->fetchObjects = false;
    $request->id = 'ae6b6bc9-b8f7-459e-ac55-a9741d311352';
    $request->q = 'iste';
    $request->relation = 'ex';
    $request->rows = 367626;
    $request->slim = [
        'libero',
        'rem',
        'dolorum',
    ];
    $request->sort = 'odio';
    $request->start = 144691;
    $request->taxon = [
        'magni',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenePublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGeneVariantAssociations

Returns variants associated with a gene

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGeneVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGeneVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'vel';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quae',
    ];
    $request->fetchObjects = false;
    $request->id = '435e139d-bc22-459b-9abd-a8c070e1084c';
    $request->q = 'distinctio';
    $request->relation = 'voluptatem';
    $request->rows = 418109;
    $request->slim = [
        'dolores',
        'assumenda',
    ];
    $request->sort = 'beatae';
    $request->start = 668606;
    $request->taxon = [
        'corrupti',
        'molestiae',
        'provident',
        'accusamus',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGeneVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenericAssociations

Returns associations for an entity regardless of the type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenericAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenericAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'necessitatibus';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'sint',
        'ea',
        'autem',
    ];
    $request->fetchObjects = false;
    $request->id = '5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5';
    $request->q = 'beatae';
    $request->relation = 'unde';
    $request->rows = 476946;
    $request->slim = [
        'cupiditate',
        'fugit',
        'numquam',
        'numquam',
    ];
    $request->sort = 'nesciunt';
    $request->start = 873557;
    $request->taxon = [
        'dignissimos',
        'optio',
        'necessitatibus',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenericAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenericObject

Returns basic info on object of any type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenericObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenericObjectRequest();
    $request->direct = false;
    $request->evidence = 'corporis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'expedita',
    ];
    $request->fetchObjects = false;
    $request->id = '895c537c-6454-4efb-8b34-896c3ca5acfb';
    $request->rows = 878601;
    $request->slim = [
        'repellat',
    ];
    $request->start = 865946;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenericObject($request);

    if ($response->bioObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenericObjectByType

Return basic info on an object for a given type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenericObjectByTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGenericObjectByTypeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenericObjectByTypeRequest();
    $request->direct = false;
    $request->distinctCounts = false;
    $request->evidence = 'nemo';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'aperiam',
        'odio',
    ];
    $request->fetchObjects = false;
    $request->getAssociationCounts = false;
    $request->id = '57792917-7dea-4c64-aecb-573409e3eb1e';
    $request->rows = 334474;
    $request->slim = [
        'dolores',
        'nam',
        'dicta',
    ];
    $request->start = 164488;
    $request->type = GetGenericObjectByTypeTypeEnum::MODEL;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenericObjectByType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeCaseAssociations

Returns cases associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'nobis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'ducimus',
    ];
    $request->fetchObjects = false;
    $request->id = 'f116db99-545f-4c95-ba88-970e189dbb30';
    $request->rows = 963976;
    $request->slim = [
        'cum',
        'ipsum',
        'adipisci',
        'saepe',
    ];
    $request->start = 644420;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeDiseaseAssociations

Returns diseases associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'doloremque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'veniam',
        'libero',
    ];
    $request->fetchObjects = false;
    $request->id = '197cd44e-2f52-4d82-9351-3bb6f48b656b';
    $request->q = 'minus';
    $request->relation = 'facere';
    $request->rows = 706061;
    $request->slim = [
        'ad',
    ];
    $request->sort = 'voluptatibus';
    $request->start = 974589;
    $request->taxon = [
        'debitis',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeGeneAssociations

Returns genes associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'labore';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eos',
        'reprehenderit',
        'nostrum',
    ];
    $request->fetchObjects = false;
    $request->id = '37a8cd9e-7319-4c17-bd52-5f77b114eeb5';
    $request->q = 'eos';
    $request->relation = 'reiciendis';
    $request->rows = 939161;
    $request->slim = [
        'praesentium',
        'nemo',
    ];
    $request->sort = 'repellat';
    $request->start = 789770;
    $request->taxon = [
        'nihil',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeGenotypeAssociations

Genotypes may be related to one another according to the GENO model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'deleniti';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'labore',
    ];
    $request->fetchObjects = false;
    $request->id = 'd4c98e0c-2bb8-49eb-b5da-d636c600503d';
    $request->q = 'praesentium';
    $request->relation = 'quidem';
    $request->rows = 736853;
    $request->slim = [
        'quasi',
    ];
    $request->sort = 'dicta';
    $request->start = 514922;
    $request->taxon = [
        'earum',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeModelAssociations

Returns models associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeModelAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'iusto';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'provident',
    ];
    $request->fetchObjects = false;
    $request->id = 'ae9e057e-b809-4e28-9033-1f3981d4c700';
    $request->q = 'rerum';
    $request->relation = 'ea';
    $request->rows = 46791;
    $request->slim = [
        'repellat',
        'velit',
    ];
    $request->sort = 'porro';
    $request->start = 588639;
    $request->taxon = [
        'eligendi',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypePhenotypeAssociations

Returns phenotypes associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypePhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypePhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'dignissimos';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'soluta',
    ];
    $request->fetchObjects = false;
    $request->id = '9da3f2ce-da7e-423f-a257-411faf4b7544';
    $request->q = 'repudiandae';
    $request->relation = 'modi';
    $request->rows = 450209;
    $request->slim = [
        'accusamus',
    ];
    $request->sort = 'rem';
    $request->start = 44016;
    $request->taxon = [
        'deleniti',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypePhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypePublicationAssociations

Returns publications associated with a genotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypePublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypePublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'enim';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'similique',
        'minima',
    ];
    $request->fetchObjects = false;
    $request->id = 'b40463a7-d575-4f14-80e7-64ad7334ec1b';
    $request->q = 'iusto';
    $request->relation = 'quas';
    $request->rows = 91728;
    $request->slim = [
        'amet',
        'autem',
        'fuga',
    ];
    $request->sort = 'alias';
    $request->start = 526413;
    $request->taxon = [
        'quos',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypePublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenotypeVariantAssociations

Returns genotypes-variant associations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenotypeVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenotypeVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'laudantium';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'veritatis',
        'quae',
        'eaque',
        'saepe',
    ];
    $request->fetchObjects = false;
    $request->id = 'fada200e-f042-42eb-a164-cf9ab8366c72';
    $request->q = 'velit';
    $request->relation = 'reiciendis';
    $request->rows = 997918;
    $request->slim = [
        'laborum',
        'natus',
        'accusamus',
        'doloremque',
    ];
    $request->sort = 'nisi';
    $request->start = 700856;
    $request->taxon = [
        'voluptates',
        'non',
        'rem',
        'quia',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGenotypeVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getGotermGeneAssociations~~

Returns associations to GO terms for a gene

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGotermGeneAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGotermGeneAssociationsRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGotermGeneAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'ullam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'dicta',
        'voluptatibus',
        'eligendi',
        'quae',
    ];
    $request->fetchObjects = false;
    $request->id = 'e115c80b-ff91-4854-8ec4-2defcce8f197';
    $request->relationshipType = GetGotermGeneAssociationsRelationshipTypeEnum::INVOLVED_IN_REGULATION_OF;
    $request->rows = 438256;
    $request->slim = [
        'nesciunt',
        'debitis',
    ];
    $request->start = 423588;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getGotermGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelCaseAssociations

Returns cases associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'neque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'voluptas',
        'consequuntur',
    ];
    $request->fetchObjects = false;
    $request->id = 'a7b408f0-5e3d-448f-9af3-13a1f5fd9425';
    $request->rows = 583193;
    $request->slim = [
        'alias',
        'quidem',
        'nesciunt',
        'commodi',
    ];
    $request->start = 956124;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelDiseaseAssociations

Returns diseases associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'consequuntur';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'debitis',
        'officia',
    ];
    $request->fetchObjects = false;
    $request->id = '944f3b75-6c11-4f6c-b7a5-126243835bbc';
    $request->q = 'sit';
    $request->relation = 'nemo';
    $request->rows = 633987;
    $request->slim = [
        'amet',
    ];
    $request->sort = 'deserunt';
    $request->start = 268709;
    $request->taxon = [
        'quod',
        'itaque',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelGeneAssociations

Returns genes associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'a';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'enim',
        'doloribus',
        'assumenda',
        'officiis',
    ];
    $request->fetchObjects = false;
    $request->id = '10a0ce21-69e5-4100-99c6-dc5e34762799';
    $request->q = 'cum';
    $request->relation = 'doloribus';
    $request->rows = 703966;
    $request->slim = [
        'itaque',
        'laboriosam',
        'unde',
    ];
    $request->sort = 'modi';
    $request->start = 595198;
    $request->taxon = [
        'cum',
        'aspernatur',
        'libero',
        'nam',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelGenotypeAssociations

Returns genotypes associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'incidunt';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quod',
        'id',
        'saepe',
        'autem',
    ];
    $request->fetchObjects = false;
    $request->id = 'c3d5db3a-debd-45da-aa4c-506a8aa94c02';
    $request->q = 'aliquid';
    $request->relation = 'magnam';
    $request->rows = 308528;
    $request->slim = [
        'hic',
        'nostrum',
        'officiis',
        'unde',
    ];
    $request->sort = 'nulla';
    $request->start = 621393;
    $request->taxon = [
        'magnam',
        'nostrum',
        'esse',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelPhenotypeAssociations

Returns phenotypes associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelPhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'corrupti';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'facere',
        'impedit',
        'quasi',
    ];
    $request->fetchObjects = false;
    $request->id = 'ac600dec-001a-4c80-ae2e-c09ff8f0f816';
    $request->q = 'earum';
    $request->relation = 'doloribus';
    $request->rows = 244569;
    $request->slim = [
        'esse',
        'in',
    ];
    $request->sort = 'eligendi';
    $request->start = 94697;
    $request->taxon = [
        'vero',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelPhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelPublicationAssociations

Returns publications associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelPublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelPublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'excepturi';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'qui',
    ];
    $request->fetchObjects = false;
    $request->id = 'c14125b0-960a-4668-951a-472af923c594';
    $request->q = 'excepturi';
    $request->relation = 'maiores';
    $request->rows = 512081;
    $request->slim = [
        'reiciendis',
    ];
    $request->sort = 'amet';
    $request->start = 363845;
    $request->taxon = [
        'quisquam',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelPublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModelVariantAssociations

Returns variants associated with a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetModelVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetModelVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'tenetur';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'molestiae',
        'aliquid',
        'asperiores',
    ];
    $request->fetchObjects = false;
    $request->id = 'fb901c6e-cbb4-4e24-bcf7-89ffafeda53e';
    $request->q = 'enim';
    $request->relation = 'officia';
    $request->rows = 902979;
    $request->slim = [
        'repudiandae',
        'accusantium',
    ];
    $request->sort = 'officia';
    $request->start = 770128;
    $request->taxon = [
        'blanditiis',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getModelVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPathwayDiseaseAssociations

Returns diseases associated with a pathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPathwayDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPathwayDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'eius';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eos',
        'nobis',
        'natus',
        'minus',
    ];
    $request->fetchObjects = false;
    $request->id = '247c8837-3a40-4e19-82f3-2e55055756f5';
    $request->q = 'quibusdam';
    $request->relation = 'nemo';
    $request->rows = 382764;
    $request->slim = [
        'sit',
        'quidem',
        'repellendus',
        'perferendis',
    ];
    $request->sort = 'id';
    $request->start = 958146;
    $request->taxon = [
        'possimus',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPathwayDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPathwayGeneAssociations

Returns genes associated with a pathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPathwayGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPathwayGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'repellat';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'architecto',
        'adipisci',
        'pariatur',
        'harum',
    ];
    $request->fetchObjects = false;
    $request->id = '4f62cba3-f894-41ae-bc0b-80a6924d3b2e';
    $request->q = 'optio';
    $request->relation = 'delectus';
    $request->rows = 792719;
    $request->slim = [
        'quos',
        'asperiores',
        'voluptatum',
        'iste',
    ];
    $request->sort = 'corporis';
    $request->start = 37129;
    $request->taxon = [
        'aut',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPathwayGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPathwayPhenotypeAssociations

Returns phenotypes associated with a pathway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPathwayPhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPathwayPhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'doloribus';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'at',
        'possimus',
    ];
    $request->fetchObjects = false;
    $request->id = '3d6fa180-4e54-4c82-b168-a363c8873e48';
    $request->q = 'numquam';
    $request->relation = 'sequi';
    $request->rows = 532320;
    $request->slim = [
        'rerum',
    ];
    $request->sort = 'veritatis';
    $request->start = 949280;
    $request->taxon = [
        'quidem',
        'totam',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPathwayPhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeAnatomyAssociations

Example IDs:

 * MP:0008521 abnormal Bowman membrane

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeAnatomyAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeAnatomyAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'porro';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'magni',
        'nihil',
        'voluptas',
    ];
    $request->fetchObjects = false;
    $request->id = 'a60a04c4-95cc-4699-971b-51c1bdb1cf4b';
    $request->rows = 548256;
    $request->slim = [
        'atque',
        'officiis',
        'cum',
    ];
    $request->start = 863330;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeAnatomyAssociations($request);

    if ($response->namedObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeCaseAssociations

Returns cases associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'sapiente';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'incidunt',
        'quod',
        'minus',
        'porro',
    ];
    $request->fetchObjects = false;
    $request->id = 'a99bc7fc-0b2d-4ce1-8873-e42b006d6788';
    $request->rows = 470647;
    $request->slim = [
        'rerum',
        'deserunt',
        'atque',
    ];
    $request->start = 344856;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeDiseaseAssociations

Returns diseases associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'atque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'est',
    ];
    $request->fetchObjects = false;
    $request->id = '58208c54-fefa-49c9-9f2e-ac5565d307cf';
    $request->q = 'recusandae';
    $request->relation = 'voluptates';
    $request->rows = 506250;
    $request->slim = [
        'fugit',
    ];
    $request->sort = 'sit';
    $request->start = 396234;
    $request->taxon = [
        'sed',
        'deleniti',
        'sunt',
        'nesciunt',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeDiseaseAssociations($request);

    if ($response->d2PAssociationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeGeneAssociations

Returns genes associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'delectus';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'aliquam',
        'deserunt',
        'modi',
    ];
    $request->fetchObjects = false;
    $request->id = '1c480d3f-2132-4af0-b102-d514f4cc6f18';
    $request->q = 'expedita';
    $request->relation = 'hic';
    $request->rows = 569834;
    $request->slim = [
        'sed',
        'beatae',
    ];
    $request->sort = 'similique';
    $request->start = 408774;
    $request->taxon = [
        'dolore',
        'tenetur',
        'dignissimos',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getPhenotypeGeneByTaxonAssociations~~

For example, MP:0001569 + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeGeneByTaxonAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeGeneByTaxonAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'esse';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'laudantium',
        'esse',
        'eveniet',
    ];
    $request->fetchObjects = false;
    $request->id = 'e3e4be75-2c65-4b34-818e-3bb91c8d975e';
    $request->rows = 44467;
    $request->slim = [
        'laudantium',
        'tempora',
        'quae',
        'omnis',
    ];
    $request->start = 848063;
    $request->taxid = 'rem';
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeGeneByTaxonAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeGenotypeAssociations

Returns genotypes associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'tenetur';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'modi',
        'earum',
        'architecto',
    ];
    $request->fetchObjects = false;
    $request->id = '44f3e07e-dcc4-4aa5-b3ca-bd905a972e05';
    $request->q = 'nisi';
    $request->relation = 'molestiae';
    $request->rows = 154130;
    $request->slim = [
        'sed',
        'odit',
        'iusto',
    ];
    $request->sort = 'expedita';
    $request->start = 176935;
    $request->taxon = [
        'nesciunt',
        'ipsa',
        'sint',
        'dolore',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypePathwayAssociations

Returns pathways associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypePathwayAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypePathwayAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'esse';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'distinctio',
    ];
    $request->fetchObjects = false;
    $request->id = 'f7a4fa87-cf53-45a6-bae5-4ebf60c321f0';
    $request->q = 'sed';
    $request->relation = 'amet';
    $request->rows = 699536;
    $request->slim = [
        'nostrum',
        'temporibus',
    ];
    $request->sort = 'ratione';
    $request->start = 221824;
    $request->taxon = [
        'dignissimos',
        'reiciendis',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypePathwayAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypePublicationAssociations

Returns publications associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypePublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypePublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'itaque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'est',
    ];
    $request->fetchObjects = false;
    $request->id = '0cc8df79-f0a3-496d-90c3-64b7c15dfbac';
    $request->q = 'accusamus';
    $request->relation = 'et';
    $request->rows = 555938;
    $request->slim = [
        'cum',
        'dicta',
        'impedit',
    ];
    $request->sort = 'tempora';
    $request->start = 908249;
    $request->taxon = [
        'sed',
        'impedit',
        'quas',
        'impedit',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypePublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPhenotypeVariantAssociations

Returns variants associated with a phenotype

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPhenotypeVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPhenotypeVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'vel';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'recusandae',
        'ex',
        'beatae',
        'veritatis',
    ];
    $request->fetchObjects = false;
    $request->id = 'feeb1c7c-bdb6-4eec-b437-8ba25317747d';
    $request->q = 'impedit';
    $request->relation = 'cupiditate';
    $request->rows = 72422;
    $request->slim = [
        'laborum',
        'illum',
    ];
    $request->sort = 'fugit';
    $request->start = 804879;
    $request->taxon = [
        'repellat',
        'nostrum',
        'illum',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPhenotypeVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationDiseaseAssociations

Returns diseases associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'quibusdam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'esse',
        'explicabo',
    ];
    $request->fetchObjects = false;
    $request->id = '3dc0f5ae-2f3a-46b7-8087-8756143f5a6c';
    $request->q = 'provident';
    $request->relation = 'laudantium';
    $request->rows = 722392;
    $request->slim = [
        'enim',
        'ipsam',
    ];
    $request->sort = 'minima';
    $request->start = 273383;
    $request->taxon = [
        'corrupti',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationGeneAssociations

Returns genes associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'doloremque';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'numquam',
        'doloremque',
        'cum',
        'nobis',
    ];
    $request->fetchObjects = false;
    $request->id = 'acc6cbd6-b5f3-4ec9-8930-4f926bad2553';
    $request->q = 'voluptatum';
    $request->relation = 'quasi';
    $request->rows = 622566;
    $request->slim = [
        'tempora',
        'voluptate',
        'eius',
    ];
    $request->sort = 'expedita';
    $request->start = 46384;
    $request->taxon = [
        'possimus',
        'fugit',
        'voluptatem',
        'repudiandae',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationGenotypeAssociations

Returns genotypes associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'corporis';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eos',
        'aliquam',
    ];
    $request->fetchObjects = false;
    $request->id = '8fff639a-910a-4bdc-ab62-676696e1ec00';
    $request->q = 'qui';
    $request->relation = 'consequuntur';
    $request->rows = 112224;
    $request->slim = [
        'sequi',
        'amet',
        'exercitationem',
    ];
    $request->sort = 'illum';
    $request->start = 506532;
    $request->taxon = [
        'similique',
        'eligendi',
        'tempore',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationModelAssociations

Returns models associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationModelAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'amet';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'nobis',
        'asperiores',
        'temporibus',
        'id',
    ];
    $request->fetchObjects = false;
    $request->id = '8d0c549e-f030-4049-b8a6-1fa1cf20688f';
    $request->q = 'voluptate';
    $request->relation = 'quam';
    $request->rows = 799830;
    $request->slim = [
        'sapiente',
    ];
    $request->sort = 'reiciendis';
    $request->start = 798953;
    $request->taxon = [
        'inventore',
        'facere',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationPhenotypeAssociations

Returns phenotypes associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationPhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationPhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'maxime';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'ab',
        'ex',
        'consectetur',
    ];
    $request->fetchObjects = false;
    $request->id = 'f2a3c80a-97ff-4334-8ddf-857a9e61876c';
    $request->q = 'aliquid';
    $request->relation = 'mollitia';
    $request->rows = 695347;
    $request->slim = [
        'et',
    ];
    $request->sort = 'nulla';
    $request->start = 166542;
    $request->taxon = [
        'illum',
        'a',
        'impedit',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationPhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicationVariantAssociations

Returns variants associated with a publication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationVariantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationVariantAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'unde';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'facere',
        'voluptas',
    ];
    $request->fetchObjects = false;
    $request->id = 'fecd7993-9006-46a6-92d0-00355338cec0';
    $request->q = 'totam';
    $request->relation = 'iure';
    $request->rows = 982927;
    $request->slim = [
        'fugit',
        'veritatis',
        'necessitatibus',
    ];
    $request->sort = 'iste';
    $request->start = 116463;
    $request->taxon = [
        'consequuntur',
        'cumque',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getPublicationVariantAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubstanceParticipantInAssociations

Examples relationships:

 * substance is a metabolite of a process
 * substance is synthesized by a process
 * substance is modified by an activity
 * substance elicits a response program/pathway
 * substance is transported by activity or pathway

For example, CHEBI:40036 (amitrole)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubstanceParticipantInAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubstanceParticipantInAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'quidem';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'beatae',
    ];
    $request->fetchObjects = false;
    $request->id = '19167b8e-3c8d-4b03-808d-6d364ffd4559';
    $request->rows = 3709;
    $request->slim = [
        'quibusdam',
        'dicta',
    ];
    $request->start = 154840;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getSubstanceParticipantInAssociations($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubstanceRoleAssociations

Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubstanceRoleAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubstanceRoleAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'commodi';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quibusdam',
    ];
    $request->fetchObjects = false;
    $request->id = '48e935c2-c9e8-41f3-8be3-e43202d72165';
    $request->rows = 453198;
    $request->slim = [
        'minima',
        'sit',
    ];
    $request->start = 426527;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getSubstanceRoleAssociations($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubstanceTreatsAssociations

e.g. drugs or small molecules used to treat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubstanceTreatsAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubstanceTreatsAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'laboriosam';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'quasi',
        'rem',
    ];
    $request->fetchObjects = false;
    $request->id = '70d9d21f-9ad0-430c-8ecc-11a083642906';
    $request->rows = 512370;
    $request->slim = [
        'laudantium',
        'ullam',
        'aut',
    ];
    $request->start = 154425;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getSubstanceTreatsAssociations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantCaseAssociations

Returns cases associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantCaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantCaseAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'officia';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'corporis',
        'accusamus',
    ];
    $request->fetchObjects = false;
    $request->id = '7f73bc84-5e32-40a3-99f4-badf947c9a86';
    $request->rows = 469384;
    $request->slim = [
        'optio',
        'incidunt',
        'eos',
    ];
    $request->start = 299379;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantCaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantDiseaseAssociations

Returns diseases associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantDiseaseAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantDiseaseAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'dolores';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'eum',
        'vel',
    ];
    $request->fetchObjects = false;
    $request->id = '5816ddca-8ef5-41fc-b4c5-93ec12cdaad0';
    $request->q = 'accusamus';
    $request->relation = 'placeat';
    $request->rows = 464878;
    $request->slim = [
        'delectus',
        'saepe',
        'facere',
    ];
    $request->sort = 'nobis';
    $request->start = 869088;
    $request->taxon = [
        'aut',
        'temporibus',
        'tenetur',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantDiseaseAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantGeneAssociations

Returns genes associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantGeneAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantGeneAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'incidunt';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'corrupti',
        'similique',
    ];
    $request->fetchObjects = false;
    $request->id = '47f9390c-5888-4098-bdab-f9ef3ffdd9f7';
    $request->q = 'voluptatibus';
    $request->relation = 'aut';
    $request->rows = 465732;
    $request->slim = [
        'similique',
        'asperiores',
        'modi',
    ];
    $request->sort = 'facere';
    $request->start = 208639;
    $request->taxon = [
        'in',
        'sed',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantGeneAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantGenotypeAssociations

Returns genotypes associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantGenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantGenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'non';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'fugiat',
        'soluta',
        'ipsa',
        'reiciendis',
    ];
    $request->fetchObjects = false;
    $request->id = '4d281187-d568-444e-9ed8-5a9065e628bd';
    $request->q = 'reiciendis';
    $request->relation = 'placeat';
    $request->rows = 175275;
    $request->slim = [
        'nesciunt',
    ];
    $request->sort = 'quia';
    $request->start = 693724;
    $request->taxon = [
        'quo',
        'laudantium',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantGenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantModelAssociations

Returns models associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantModelAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantModelAssociationsRequest();
    $request->direct = false;
    $request->evidence = 'dignissimos';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'omnis',
        'fugit',
        'dolorem',
    ];
    $request->fetchObjects = false;
    $request->id = 'b7e13584-f7ae-412c-a891-f82ce1157172';
    $request->rows = 209602;
    $request->slim = [
        'exercitationem',
    ];
    $request->start = 226143;
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantModelAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantPhenotypeAssociations

Returns phenotypes associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantPhenotypeAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantPhenotypeAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'voluptate';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'pariatur',
        'minus',
    ];
    $request->fetchObjects = false;
    $request->id = 'fa89df97-5e35-4668-a092-e9c3ddc5f111';
    $request->q = 'facere';
    $request->relation = 'earum';
    $request->rows = 672273;
    $request->slim = [
        'voluptatem',
    ];
    $request->sort = 'odit';
    $request->start = 398847;
    $request->taxon = [
        'enim',
        'numquam',
        'architecto',
        'est',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantPhenotypeAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantPublicationAssociations

Returns publications associated with a variant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantPublicationAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantPublicationAssociationsRequest();
    $request->direct = false;
    $request->directTaxon = false;
    $request->evidence = 'quaerat';
    $request->excludeAutomaticAssertions = false;
    $request->facet = false;
    $request->facetFields = [
        'vitae',
        'omnis',
        'alias',
        'sapiente',
    ];
    $request->fetchObjects = false;
    $request->id = 'eb21780b-ccc0-4dbb-9db4-84708fb4e391';
    $request->q = 'officiis';
    $request->relation = 'eum';
    $request->rows = 701257;
    $request->slim = [
        'ab',
        'ad',
        'blanditiis',
        'porro',
    ];
    $request->sort = 'labore';
    $request->start = 773889;
    $request->taxon = [
        'earum',
        'ullam',
    ];
    $request->unselectEvidence = false;
    $request->useCompactAssociations = false;

    $response = $sdk->bioentity->getVariantPublicationAssociations($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
