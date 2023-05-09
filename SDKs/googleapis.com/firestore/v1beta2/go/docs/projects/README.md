# Projects

### Available Operations

* [FirestoreProjectsDatabasesCollectionGroupsFieldsList](#firestoreprojectsdatabasescollectiongroupsfieldslist) - Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
* [FirestoreProjectsDatabasesCollectionGroupsFieldsPatch](#firestoreprojectsdatabasescollectiongroupsfieldspatch) - Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesCreate](#firestoreprojectsdatabasescollectiongroupsindexescreate) - Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesDelete](#firestoreprojectsdatabasescollectiongroupsindexesdelete) - Deletes a composite index.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesGet](#firestoreprojectsdatabasescollectiongroupsindexesget) - Gets a composite index.
* [FirestoreProjectsDatabasesCollectionGroupsIndexesList](#firestoreprojectsdatabasescollectiongroupsindexeslist) - Lists composite indexes.
* [FirestoreProjectsDatabasesExportDocuments](#firestoreprojectsdatabasesexportdocuments) - Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [FirestoreProjectsDatabasesImportDocuments](#firestoreprojectsdatabasesimportdocuments) - Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

## FirestoreProjectsDatabasesCollectionGroupsFieldsList

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.

### Example Usage

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
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
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

## FirestoreProjectsDatabasesCollectionGroupsFieldsPatch

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsFieldsPatch(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirestoreAdminV1beta2Field: &shared.GoogleFirestoreAdminV1beta2Field{
            IndexConfig: &shared.GoogleFirestoreAdminV1beta2IndexConfig{
                AncestorField: sdk.String("quis"),
                Indexes: []shared.GoogleFirestoreAdminV1beta2Index{
                    shared.GoogleFirestoreAdminV1beta2Index{
                        Fields: []shared.GoogleFirestoreAdminV1beta2IndexField{
                            shared.GoogleFirestoreAdminV1beta2IndexField{
                                ArrayConfig: shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumArrayConfigUnspecified.ToPointer(),
                                FieldPath: sdk.String("ipsam"),
                                Order: shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnumDescending.ToPointer(),
                            },
                            shared.GoogleFirestoreAdminV1beta2IndexField{
                                ArrayConfig: shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumContains.ToPointer(),
                                FieldPath: sdk.String("quo"),
                                Order: shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnumOrderUnspecified.ToPointer(),
                            },
                            shared.GoogleFirestoreAdminV1beta2IndexField{
                                ArrayConfig: shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumContains.ToPointer(),
                                FieldPath: sdk.String("at"),
                                Order: shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnumDescending.ToPointer(),
                            },
                        },
                        Name: sdk.String("Bernadette Schmidt"),
                        QueryScope: shared.GoogleFirestoreAdminV1beta2IndexQueryScopeEnumCollectionGroup.ToPointer(),
                        State: shared.GoogleFirestoreAdminV1beta2IndexStateEnumReady.ToPointer(),
                    },
                },
                Reverting: sdk.Bool(false),
                UsesAncestorConfig: sdk.Bool(false),
            },
            Name: sdk.String("Antoinette Nikolaus"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("totam"),
        Key: sdk.String("beatae"),
        Name: "Tanya Gleason",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UpdateMask: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesCollectionGroupsIndexesCreate

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsIndexesCreate(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirestoreAdminV1beta2Index: &shared.GoogleFirestoreAdminV1beta2Index{
            Fields: []shared.GoogleFirestoreAdminV1beta2IndexField{
                shared.GoogleFirestoreAdminV1beta2IndexField{
                    ArrayConfig: shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumContains.ToPointer(),
                    FieldPath: sdk.String("sed"),
                    Order: shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnumAscending.ToPointer(),
                },
                shared.GoogleFirestoreAdminV1beta2IndexField{
                    ArrayConfig: shared.GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumArrayConfigUnspecified.ToPointer(),
                    FieldPath: sdk.String("natus"),
                    Order: shared.GoogleFirestoreAdminV1beta2IndexFieldOrderEnumAscending.ToPointer(),
                },
            },
            Name: sdk.String("Elias Parker"),
            QueryScope: shared.GoogleFirestoreAdminV1beta2IndexQueryScopeEnumCollection.ToPointer(),
            State: shared.GoogleFirestoreAdminV1beta2IndexStateEnumCreating.ToPointer(),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesCollectionGroupsIndexesDelete

Deletes a composite index.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsIndexesDelete(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        Name: "Velma Batz",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesCollectionGroupsIndexesGet

Gets a composite index.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsIndexesGet(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        Name: "Lucy Konopelski",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1beta2Index != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesCollectionGroupsIndexesList

Lists composite indexes.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesCollectionGroupsIndexesList(ctx, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Filter: sdk.String("sequi"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(662527),
        PageToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity{
        Option1: &operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFirestoreAdminV1beta2ListIndexesResponse != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesExportDocuments

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesExportDocuments(ctx, operations.FirestoreProjectsDatabasesExportDocumentsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleFirestoreAdminV1beta2ExportDocumentsRequest: &shared.GoogleFirestoreAdminV1beta2ExportDocumentsRequest{
            CollectionIds: []string{
                "reiciendis",
            },
            OutputURIPrefix: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        Name: "Mr. Jared Ritchie",
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.FirestoreProjectsDatabasesExportDocumentsSecurity{
        Option1: &operations.FirestoreProjectsDatabasesExportDocumentsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## FirestoreProjectsDatabasesImportDocuments

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

### Example Usage

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
    res, err := s.Projects.FirestoreProjectsDatabasesImportDocuments(ctx, operations.FirestoreProjectsDatabasesImportDocumentsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleFirestoreAdminV1beta2ImportDocumentsRequest: &shared.GoogleFirestoreAdminV1beta2ImportDocumentsRequest{
            CollectionIds: []string{
                "dicta",
                "harum",
            },
            InputURIPrefix: sdk.String("enim"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        Name: "Virgil Mante",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.FirestoreProjectsDatabasesImportDocumentsSecurity{
        Option1: &operations.FirestoreProjectsDatabasesImportDocumentsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
