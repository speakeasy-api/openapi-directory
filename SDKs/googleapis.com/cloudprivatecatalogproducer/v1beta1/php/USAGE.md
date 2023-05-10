<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudPrivatecatalogproducerV1beta1Association;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprivatecatalogproducerCatalogsAssociationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest = new GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest();
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association = new GoogleCloudPrivatecatalogproducerV1beta1Association();
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->createTime = 'provident';
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->name = 'Ellis Mitchell';
    $request->googleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest->association->resource = 'illum';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalogs->cloudprivatecatalogproducerCatalogsAssociationsCreate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->