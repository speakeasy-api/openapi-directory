<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDiscoveryengineV1betaDocument;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument();
    $request->googleCloudDiscoveryengineV1betaDocument->id = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->googleCloudDiscoveryengineV1betaDocument->jsonData = 'perferendis';
    $request->googleCloudDiscoveryengineV1betaDocument->name = 'Estelle Will';
    $request->googleCloudDiscoveryengineV1betaDocument->parentDocumentId = 'at';
    $request->googleCloudDiscoveryengineV1betaDocument->schemaId = 'at';
    $request->googleCloudDiscoveryengineV1betaDocument->structData = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->documentId = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate($request, $requestSecurity);

    if ($response->googleCloudDiscoveryengineV1betaDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->