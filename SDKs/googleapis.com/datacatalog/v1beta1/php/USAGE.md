<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogCatalogSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest = new GoogleCloudDatacatalogV1beta1SearchCatalogRequest();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->orderBy = 'provident';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageSize = 715190;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->pageToken = 'quibusdam';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->query = 'unde';
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope = new GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope();
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeGcpPublicDatasets = false;
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeOrgIds = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->includeProjectIds = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleCloudDatacatalogV1beta1SearchCatalogRequest->scope->restrictedLocations = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DatacatalogCatalogSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->catalog->datacatalogCatalogSearch($request, $requestSecurity);

    if ($response->googleCloudDatacatalogV1beta1SearchCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->