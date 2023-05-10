<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2BatchDeleteEntityTypesRequest = new GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest();
    $request->googleCloudDialogflowV2BatchDeleteEntityTypesRequest->entityTypeNames = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->oauthToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesBatchDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->