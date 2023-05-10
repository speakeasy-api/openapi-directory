# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->pageSize = 423655;
    $request->pageToken = 'error';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'magnam';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firestoreProjectsDatabasesCollectionGroupsFieldsList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
* [firestoreProjectsDatabasesCollectionGroupsFieldsPatch](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsfieldspatch) - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
* [firestoreProjectsDatabasesCollectionGroupsIndexesCreate](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [firestoreProjectsDatabasesCollectionGroupsIndexesDelete](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexesdelete) - Deletes a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesGet](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexesget) - Gets a composite index.
* [firestoreProjectsDatabasesCollectionGroupsIndexesList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [firestoreProjectsDatabasesExportDocuments](docs/projects/README.md#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [firestoreProjectsDatabasesImportDocuments](docs/projects/README.md#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
