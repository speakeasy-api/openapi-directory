<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaAddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2betaAddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput();
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_ENABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_DISABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->key = 'unde';
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum::RECOMMENDATIONS_FILTERING_ENABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum::RETRIEVABLE_ENABLED;
    $request->googleCloudRetailV2betaAddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum::SEARCHABLE_DISABLED;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'deserunt';
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2betaAttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->