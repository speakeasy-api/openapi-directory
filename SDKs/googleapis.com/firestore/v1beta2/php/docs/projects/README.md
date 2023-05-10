# projects

### Available Operations

* [firestoreProjectsDatabasesCollectionGroupsFieldsList](#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
* [firestoreProjectsDatabasesCollectionGroupsFieldsPatch](#firestoreprojectsdatabasescollectiongroupsfieldspatch) - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
* [firestoreProjectsDatabasesCollectionGroupsIndexesCreate](#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [firestoreProjectsDatabasesCollectionGroupsIndexesDelete](#firestoreprojectsdatabasescollectiongroupsindexesdelete) - Deletes a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesGet](#firestoreprojectsdatabasescollectiongroupsindexesget) - Gets a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesList](#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [firestoreProjectsDatabasesExportDocuments](#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [firestoreProjectsDatabasesImportDocuments](#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

## firestoreProjectsDatabasesCollectionGroupsFieldsList

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsFieldsList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta2ListFieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsFieldsPatch

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2Field;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2Index;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta2Field = new GoogleFirestoreAdminV1beta2Field();
    $request->googleFirestoreAdminV1beta2Field->indexConfig = new GoogleFirestoreAdminV1beta2IndexConfig();
    $request->googleFirestoreAdminV1beta2Field->indexConfig->ancestorField = 'quis';
    $request->googleFirestoreAdminV1beta2Field->indexConfig->indexes = [
        new GoogleFirestoreAdminV1beta2Index(),
    ];
    $request->googleFirestoreAdminV1beta2Field->indexConfig->reverting = false;
    $request->googleFirestoreAdminV1beta2Field->indexConfig->usesAncestorConfig = false;
    $request->googleFirestoreAdminV1beta2Field->name = 'Christopher Hills';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->name = 'Bernadette Schmidt';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->updateMask = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsFieldsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesCreate

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2Index;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2IndexStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleFirestoreAdminV1beta2Index = new GoogleFirestoreAdminV1beta2Index();
    $request->googleFirestoreAdminV1beta2Index->fields = [
        new GoogleFirestoreAdminV1beta2IndexField(),
    ];
    $request->googleFirestoreAdminV1beta2Index->name = 'Irvin Rosenbaum III';
    $request->googleFirestoreAdminV1beta2Index->queryScope = GoogleFirestoreAdminV1beta2IndexQueryScopeEnum::COLLECTION;
    $request->googleFirestoreAdminV1beta2Index->state = GoogleFirestoreAdminV1beta2IndexStateEnum::CREATING;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesDelete

Deletes a composite index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->name = 'Wilbur Kirlin';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesGet

Gets a composite index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->name = 'Stacy Champlin';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesGet($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta2Index !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesCollectionGroupsIndexesList

Lists composite indexes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->filter = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->pageSize = 635059;
    $request->pageToken = 'consequuntur';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesCollectionGroupsIndexesList($request, $requestSecurity);

    if ($response->googleFirestoreAdminV1beta2ListIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesExportDocuments

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2ExportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesExportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesExportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta2ExportDocumentsRequest = new GoogleFirestoreAdminV1beta2ExportDocumentsRequest();
    $request->googleFirestoreAdminV1beta2ExportDocumentsRequest->collectionIds = [
        'molestiae',
        'velit',
    ];
    $request->googleFirestoreAdminV1beta2ExportDocumentsRequest->outputUriPrefix = 'error';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new FirestoreProjectsDatabasesExportDocumentsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesExportDocumentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesExportDocuments($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firestoreProjectsDatabasesImportDocuments

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleFirestoreAdminV1beta2ImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirestoreProjectsDatabasesImportDocumentsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirestoreProjectsDatabasesImportDocumentsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleFirestoreAdminV1beta2ImportDocumentsRequest = new GoogleFirestoreAdminV1beta2ImportDocumentsRequest();
    $request->googleFirestoreAdminV1beta2ImportDocumentsRequest->collectionIds = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->googleFirestoreAdminV1beta2ImportDocumentsRequest->inputUriPrefix = 'reiciendis';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'praesentium';
    $request->key = 'voluptatibus';
    $request->name = 'Geneva Klein Jr.';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirestoreProjectsDatabasesImportDocumentsSecurity();
    $requestSecurity->option1 = new FirestoreProjectsDatabasesImportDocumentsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firestoreProjectsDatabasesImportDocuments($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
