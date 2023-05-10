<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2AddCatalogAttributeRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput = new GoogleCloudRetailV2AddCatalogAttributeRequestInput();
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput();
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum::DYNAMIC_FACETABLE_ENABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum::EXACT_SEARCHABLE_DISABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum::INDEXABLE_DISABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->key = 'unde';
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum::RETRIEVABLE_DISABLED;
    $request->googleCloudRetailV2AddCatalogAttributeRequestInput->catalogAttribute->searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum::SEARCHABLE_ENABLED;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->attributesConfig = 'error';
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute($request, $requestSecurity);

    if ($response->googleCloudRetailV2AttributesConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->