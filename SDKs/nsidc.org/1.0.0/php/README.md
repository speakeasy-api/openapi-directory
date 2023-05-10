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
use \OpenAPI\OpenAPI\Models\Operations\FacetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FacetsSortKeysEnum;
use \OpenAPI\OpenAPI\Models\Operations\FacetsSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FacetsRequest();
    $request->count = 548814;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2021-07-27');
    $request->facetFilters = 'quibusdam';
    $request->searchTerms = 'unde';
    $request->sortKeys = FacetsSortKeysEnum::UPDATED_DESC;
    $request->source = FacetsSourceEnum::ADE;
    $request->spatial = 'illum';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-18');
    $request->startIndex = 645894;

    $response = $sdk->swaggerDocs->facets($request);

    if ($response->facets200ApplicationNsidcfacetsPlusXmlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [swaggerDocs](docs/swaggerdocs/README.md)

* [facets](docs/swaggerdocs/README.md#facets) - View the facet information corresponding to a search
* [id](docs/swaggerdocs/README.md#id) - Suggest search terms based on a partial query
* [openSearch](docs/swaggerdocs/README.md#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [opensearchDescription](docs/swaggerdocs/README.md#opensearchdescription) - Describes the web interface of NSIDC's data search engine
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
