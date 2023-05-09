# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firestore/v1beta2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsList(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1beta2ListFieldsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [FirestoreProjectsDatabasesCollectionGroupsFieldsList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
* [FirestoreProjectsDatabasesCollectionGroupsFieldsPatch](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsfieldspatch) - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesCreate](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesDelete](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexesdelete) - Deletes a composite index.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesGet](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexesget) - Gets a composite index.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesList](docs/projects/README.md#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [FirestoreProjectsDatabasesExportDocuments](docs/projects/README.md#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [FirestoreProjectsDatabasesImportDocuments](docs/projects/README.md#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
