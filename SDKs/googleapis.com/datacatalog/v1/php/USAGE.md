<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SearchCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDatacatalogV1SearchCatalogRequestScope;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatacatalogCatalogSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatacatalogCatalogSearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDatacatalogV1SearchCatalogRequest = new GoogleCloudDatacatalogV1SearchCatalogRequest();
    $request->googleCloudDatacatalogV1SearchCatalogRequest->orderBy = 'provident';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->pageSize = 715190;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->pageToken = 'quibusdam';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->query = 'unde';
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope = new GoogleCloudDatacatalogV1SearchCatalogRequestScope();
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeGcpPublicDatasets = false;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeOrgIds = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includeProjectIds = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->includePublicTagTemplates = false;
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->restrictedLocations = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->googleCloudDatacatalogV1SearchCatalogRequest->scope->starredOnly = false;
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

    if ($response->googleCloudDatacatalogV1SearchCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->