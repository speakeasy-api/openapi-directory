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