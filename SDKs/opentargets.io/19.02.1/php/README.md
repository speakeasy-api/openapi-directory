# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationFilterRequest();
    $request->datasource = 'corrupti';
    $request->datastructure = 'provident';
    $request->datatype = 'distinctio';
    $request->direct = false;
    $request->disease = 'quibusdam';
    $request->facets = false;
    $request->fields = 'unde';
    $request->format = 'nulla';
    $request->from = 5448.83;
    $request->pathway = 'illum';
    $request->scorevalueMax = 4236.55;
    $request->scorevalueMin = 6235.64;
    $request->scorevalueTypes = 'deserunt';
    $request->search = 'suscipit';
    $request->size = 4375.87;
    $request->sort = 'magnam';
    $request->target = 'debitis';
    $request->targetClass = 'ipsa';
    $request->therapeuticArea = 'delectus';
    $request->uniprotkw = 'tempora';

    $response = $sdk->filter->getAssociationFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [filter](docs/filter/README.md)

* [getAssociationFilter](docs/filter/README.md#getassociationfilter) - Filter available associations
* [getEvidenceFilter](docs/filter/README.md#getevidencefilter) - Filter available evidence
* [postAssociationFilter](docs/filter/README.md#postassociationfilter) - Batch query available associations
* [postEvidenceFilter](docs/filter/README.md#postevidencefilter) - Batch filter available evidence

### [private](docs/private/README.md)

* [getApiDocs](docs/private/README.md#getapidocs) - Browse API documentation
* [getApiSwaggerUI](docs/private/README.md#getapiswaggerui) - Browse interactive API documentation
* [getAutocomplete](docs/private/README.md#getautocomplete) - Get `autocomplete` objects.
* [getDiseaseById](docs/private/README.md#getdiseasebyid) - Find information about a disease
* [getDrugByID](docs/private/README.md#getdrugbyid) - Get drug by ID
* [getECObyID](docs/private/README.md#getecobyid) - Get evidence code by ID
* [getQuickSearch](docs/private/README.md#getquicksearch) - Search most relevant results
* [getRelationByEFOID](docs/private/README.md#getrelationbyefoid) - Find related entities by disease
* [getRelationByENSGID](docs/private/README.md#getrelationbyensgid) - Find related entities by target
* [getSwagger](docs/private/README.md#getswagger) - Get OpenAPI schema
* [getTargetByENSGID](docs/private/README.md#gettargetbyensgid) - Find information about a target
* [getTargetExpressionByENSGID](docs/private/README.md#gettargetexpressionbyensgid) - Query expression levels
* [postBestHitSearch](docs/private/README.md#postbesthitsearch) - Find the best hit
* [postDiseaseById](docs/private/README.md#postdiseasebyid) - Find information about a list of diseases
* [postEnrichmentTarget](docs/private/README.md#postenrichmenttarget) - Enrichment analysis
* [postRelation](docs/private/README.md#postrelation) - Find related entities
* [postTargetByENSGID](docs/private/README.md#posttargetbyensgid) - Find information about a list of targets
* [postTargetExpressionByENSGID](docs/private/README.md#posttargetexpressionbyensgid) - Batch query expression levels

### [public](docs/public/README.md)

* [getAssociationById](docs/public/README.md#getassociationbyid) - Get association by id
* [getAssociationFilter](docs/public/README.md#getassociationfilter) - Filter available associations
* [getDataMetrics](docs/public/README.md#getdatametrics) - Get metrics about the current data release
* [getDataStats](docs/public/README.md#getdatastats) - Get statistics about the current data release
* [getEvidenceById](docs/public/README.md#getevidencebyid) - Get evidence by ID
* [getEvidenceFilter](docs/public/README.md#getevidencefilter) - Filter available evidence
* [getPing](docs/public/README.md#getping) - Ping service
* [getSearch](docs/public/README.md#getsearch) - Search for a disease or a target
* [getTherapeuticAreas](docs/public/README.md#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [getVersion](docs/public/README.md#getversion) - Get API version
* [postAssociationFilter](docs/public/README.md#postassociationfilter) - Batch query available associations
* [postEvidenceById](docs/public/README.md#postevidencebyid) - Get evidence for a list of IDs
* [postEvidenceFilter](docs/public/README.md#postevidencefilter) - Batch filter available evidence

### [retrieve](docs/retrieve/README.md)

* [getAssociationById](docs/retrieve/README.md#getassociationbyid) - Get association by id
* [getEvidenceById](docs/retrieve/README.md#getevidencebyid) - Get evidence by ID
* [postEvidenceById](docs/retrieve/README.md#postevidencebyid) - Get evidence for a list of IDs

### [search](docs/search/README.md)

* [getSearch](docs/search/README.md#getsearch) - Search for a disease or a target

### [utils](docs/utils/README.md)

* [getDataMetrics](docs/utils/README.md#getdatametrics) - Get metrics about the current data release
* [getDataStats](docs/utils/README.md#getdatastats) - Get statistics about the current data release
* [getPing](docs/utils/README.md#getping) - Ping service
* [getTherapeuticAreas](docs/utils/README.md#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [getVersion](docs/utils/README.md#getversion) - Get API version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
