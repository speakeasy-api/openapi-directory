# swaggerDocs

## Overview

Dataset search

### Available Operations

* [facets](#facets) - View the facet information corresponding to a search
* [id](#id) - Suggest search terms based on a partial query
* [openSearch](#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [opensearchDescription](#opensearchdescription) - Describes the web interface of NSIDC's data search engine

## facets

In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

### Example Usage

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
    $request->count = 384382;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-14');
    $request->facetFilters = 'debitis';
    $request->searchTerms = 'ipsa';
    $request->sortKeys = FacetsSortKeysEnum::UPDATED_DESC;
    $request->source = FacetsSourceEnum::NSIDC;
    $request->spatial = 'suscipit';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-18');
    $request->startIndex = 812169;

    $response = $sdk->swaggerDocs->facets($request);

    if ($response->facets200ApplicationNsidcfacetsPlusXmlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## id

In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdRequest;
use \OpenAPI\OpenAPI\Models\Operations\IdSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdRequest();
    $request->q = 'voluptatum';
    $request->source = IdSourceEnum::NSIDC;

    $response = $sdk->swaggerDocs->id($request);

    if ($response->id200ApplicationXSuggestionsPlusJsonString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## openSearch

This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OpenSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\OpenSearchSortKeysEnum;
use \OpenAPI\OpenAPI\Models\Operations\OpenSearchSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpenSearchRequest();
    $request->count = 568045;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-01-28');
    $request->facetFilters = 'temporibus';
    $request->searchTerms = 'ab';
    $request->sortKeys = OpenSearchSortKeysEnum::SPATIAL_AREA_DESC;
    $request->source = OpenSearchSourceEnum::NSIDC;
    $request->spatial = 'deserunt';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-19');
    $request->startIndex = 832620;

    $response = $sdk->swaggerDocs->openSearch($request);

    if ($response->openSearch200ApplicationAtomPlusXmlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## opensearchDescription

Describes the web interface of NSIDC's data search engine

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->swaggerDocs->opensearchDescription();

    if ($response->opensearchDescription200ApplicationOpensearchdescriptionPlusXmlString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
