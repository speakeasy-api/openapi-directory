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
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, operations.DatastoreProjectsAllocateIdsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AllocateIdsRequest: &shared.AllocateIdsRequest{
            DatabaseID: sdk.String("provident"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("quibusdam"),
                        NamespaceID: sdk.String("unde"),
                        ProjectID: sdk.String("nulla"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("illum"),
                            Kind: sdk.String("vel"),
                            Name: sdk.String("Doug Hoppe"),
                        },
                        shared.PathElement{
                            ID: sdk.String("debitis"),
                            Kind: sdk.String("ipsa"),
                            Name: sdk.String("Ricky Hoppe"),
                        },
                        shared.PathElement{
                            ID: sdk.String("placeat"),
                            Kind: sdk.String("voluptatum"),
                            Name: sdk.String("Miriam Huel"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("ab"),
                        NamespaceID: sdk.String("quis"),
                        ProjectID: sdk.String("veritatis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("perferendis"),
                            Kind: sdk.String("ipsam"),
                            Name: sdk.String("Timmy Satterfield"),
                        },
                        shared.PathElement{
                            ID: sdk.String("at"),
                            Kind: sdk.String("maiores"),
                            Name: sdk.String("Bernadette Schmidt"),
                        },
                        shared.PathElement{
                            ID: sdk.String("porro"),
                            Kind: sdk.String("dolorum"),
                            Name: sdk.String("Antoinette Nikolaus"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("deleniti"),
                        NamespaceID: sdk.String("hic"),
                        ProjectID: sdk.String("optio"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("beatae"),
                            Kind: sdk.String("commodi"),
                            Name: sdk.String("Pauline Dibbert"),
                        },
                        shared.PathElement{
                            ID: sdk.String("esse"),
                            Kind: sdk.String("ipsum"),
                            Name: sdk.String("Brandon Auer"),
                        },
                        shared.PathElement{
                            ID: sdk.String("sed"),
                            Kind: sdk.String("iste"),
                            Name: sdk.String("Faye Howe"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quidem",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DatastoreProjectsAllocateIdsSecurity{
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


### [Projects](docs/projects/README.md)

* [DatastoreProjectsAllocateIds](docs/projects/README.md#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [DatastoreProjectsBeginTransaction](docs/projects/README.md#datastoreprojectsbegintransaction) - Begins a new transaction.
* [DatastoreProjectsCommit](docs/projects/README.md#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [DatastoreProjectsExport](docs/projects/README.md#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [DatastoreProjectsImport](docs/projects/README.md#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* [DatastoreProjectsIndexesCreate](docs/projects/README.md#datastoreprojectsindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* [DatastoreProjectsIndexesDelete](docs/projects/README.md#datastoreprojectsindexesdelete) - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* [DatastoreProjectsIndexesGet](docs/projects/README.md#datastoreprojectsindexesget) - Gets an index.
* [DatastoreProjectsIndexesList](docs/projects/README.md#datastoreprojectsindexeslist) - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* [DatastoreProjectsLookup](docs/projects/README.md#datastoreprojectslookup) - Looks up entities by key.
* [DatastoreProjectsOperationsCancel](docs/projects/README.md#datastoreprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastoreProjectsOperationsDelete](docs/projects/README.md#datastoreprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatastoreProjectsOperationsGet](docs/projects/README.md#datastoreprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatastoreProjectsOperationsList](docs/projects/README.md#datastoreprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastoreProjectsReserveIds](docs/projects/README.md#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [DatastoreProjectsRollback](docs/projects/README.md#datastoreprojectsrollback) - Rolls back a transaction.
* [DatastoreProjectsRunAggregationQuery](docs/projects/README.md#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [DatastoreProjectsRunQuery](docs/projects/README.md#datastoreprojectsrunquery) - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
