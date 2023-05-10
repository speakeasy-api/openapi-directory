<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaInterval;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput();
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_DISABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->facetIntervals = [
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
        new GoogleCloudRetailV2alphaInterval(),
    ];
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->ignoredFacetValues = [
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
        new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues(),
    ];
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->key = 'corrupti';
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2alphaAddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'iure';
    $request->callback = 'magnam';
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2alphaAttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->