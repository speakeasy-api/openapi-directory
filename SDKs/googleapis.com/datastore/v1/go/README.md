# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastore/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DatastoreProjectsAllocateIdsRequest{
        DollarXgafv: "2",
        AllocateIdsRequest: &shared.AllocateIdsRequest{
            DatabaseID: "provident",
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "quibusdam",
                        NamespaceID: "unde",
                        ProjectID: "nulla",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "illum",
                            Kind: "vel",
                            Name: "error",
                        },
                        shared.PathElement{
                            ID: "deserunt",
                            Kind: "suscipit",
                            Name: "iure",
                        },
                        shared.PathElement{
                            ID: "magnam",
                            Kind: "debitis",
                            Name: "ipsa",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "delectus",
                        NamespaceID: "tempora",
                        ProjectID: "suscipit",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "minus",
                            Kind: "placeat",
                            Name: "voluptatum",
                        },
                        shared.PathElement{
                            ID: "iusto",
                            Kind: "excepturi",
                            Name: "nisi",
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: "recusandae",
                        NamespaceID: "temporibus",
                        ProjectID: "ab",
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: "veritatis",
                            Kind: "deserunt",
                            Name: "perferendis",
                        },
                        shared.PathElement{
                            ID: "ipsam",
                            Kind: "repellendus",
                            Name: "sapiente",
                        },
                    },
                },
            },
        },
        AccessToken: "quo",
        Alt: "json",
        Callback: "at",
        Fields: "at",
        Key: "maiores",
        OauthToken: "molestiae",
        PrettyPrint: false,
        ProjectID: "quod",
        QuotaUser: "quod",
        UploadType: "esse",
        UploadProtocol: "totam",
    }

    ctx := context.Background()
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, req, operations.DatastoreProjectsAllocateIdsSecurity{
        Option1: &operations.DatastoreProjectsAllocateIdsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateIdsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `DatastoreProjectsBeginTransaction` - Begins a new transaction.
* `DatastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `DatastoreProjectsExport` - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* `DatastoreProjectsImport` - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* `DatastoreProjectsIndexesCreate` - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* `DatastoreProjectsIndexesDelete` - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* `DatastoreProjectsIndexesGet` - Gets an index.
* `DatastoreProjectsIndexesList` - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* `DatastoreProjectsLookup` - Looks up entities by key.
* `DatastoreProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastoreProjectsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatastoreProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatastoreProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `DatastoreProjectsRollback` - Rolls back a transaction.
* `DatastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `DatastoreProjectsRunQuery` - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
