<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1beta1ExportEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1beta1EntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest();
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter();
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter->kinds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter->namespaceIds = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->labels = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->outputUrlPrefix = 'tempora';
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minus';
    $request->fields = 'placeat';
    $request->key = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->projectId = 'excepturi';
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DatastoreProjectsExportSecurity();
    $requestSecurity->option1 = new DatastoreProjectsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->