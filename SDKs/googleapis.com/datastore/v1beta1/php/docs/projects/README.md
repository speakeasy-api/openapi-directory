# projects

### Available Operations

* [datastoreProjectsExport](#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [datastoreProjectsImport](#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

## datastoreProjectsExport

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest = new GoogleDatastoreAdminV1beta1ExportEntitiesRequest();
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter();
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter->kinds = [
        'veritatis',
        'deserunt',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->entityFilter->namespaceIds = [
        'ipsam',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->labels = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->googleDatastoreAdminV1beta1ExportEntitiesRequest->outputUrlPrefix = 'quod';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->projectId = 'officia';
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

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

## datastoreProjectsImport

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1beta1ImportEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDatastoreAdminV1beta1EntityFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest = new GoogleDatastoreAdminV1beta1ImportEntitiesRequest();
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest->entityFilter = new GoogleDatastoreAdminV1beta1EntityFilter();
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest->entityFilter->kinds = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest->entityFilter->namespaceIds = [
        'qui',
        'impedit',
    ];
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest->inputUrl = 'cum';
    $request->googleDatastoreAdminV1beta1ImportEntitiesRequest->labels = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->projectId = 'laboriosam';
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new DatastoreProjectsImportSecurity();
    $requestSecurity->option1 = new DatastoreProjectsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
