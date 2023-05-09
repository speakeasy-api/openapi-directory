# Projects

### Available Operations

* [DatastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [DatastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [DatastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [DatastoreProjectsExport](#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [DatastoreProjectsImport](#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* [DatastoreProjectsIndexesCreate](#datastoreprojectsindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* [DatastoreProjectsIndexesDelete](#datastoreprojectsindexesdelete) - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* [DatastoreProjectsIndexesGet](#datastoreprojectsindexesget) - Gets an index.
* [DatastoreProjectsIndexesList](#datastoreprojectsindexeslist) - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* [DatastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
* [DatastoreProjectsOperationsCancel](#datastoreprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastoreProjectsOperationsDelete](#datastoreprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatastoreProjectsOperationsGet](#datastoreprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatastoreProjectsOperationsList](#datastoreprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastoreProjectsReserveIds](#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [DatastoreProjectsRollback](#datastoreprojectsrollback) - Rolls back a transaction.
* [DatastoreProjectsRunAggregationQuery](#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [DatastoreProjectsRunQuery](#datastoreprojectsrunquery) - Queries for entities.

## DatastoreProjectsAllocateIds

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

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
    res, err := s.Projects.DatastoreProjectsAllocateIds(ctx, operations.DatastoreProjectsAllocateIdsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AllocateIdsRequest: &shared.AllocateIdsRequest{
            DatabaseID: sdk.String("mollitia"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("dolores"),
                        NamespaceID: sdk.String("dolorem"),
                        ProjectID: sdk.String("corporis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("nobis"),
                            Kind: sdk.String("enim"),
                            Name: sdk.String("Corey Hane III"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("culpa"),
                        NamespaceID: sdk.String("doloribus"),
                        ProjectID: sdk.String("sapiente"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("mollitia"),
                            Kind: sdk.String("dolorem"),
                            Name: sdk.String("Carlos Ziemann"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("numquam"),
                        NamespaceID: sdk.String("commodi"),
                        ProjectID: sdk.String("quam"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("velit"),
                            Kind: sdk.String("error"),
                            Name: sdk.String("Beatrice Brown"),
                        },
                        shared.PathElement{
                            ID: sdk.String("enim"),
                            Kind: sdk.String("odit"),
                            Name: sdk.String("Jimmy Wiegand"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("error"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quasi",
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
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

## DatastoreProjectsBeginTransaction

Begins a new transaction.

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
    res, err := s.Projects.DatastoreProjectsBeginTransaction(ctx, operations.DatastoreProjectsBeginTransactionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BeginTransactionRequest: &shared.BeginTransactionRequest{
            DatabaseID: sdk.String("praesentium"),
            TransactionOptions: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: sdk.String("voluptatibus"),
                },
                ReadWrite: &shared.ReadWrite{
                    PreviousTransaction: sdk.String("ipsa"),
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ut",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DatastoreProjectsBeginTransactionSecurity{
        Option1: &operations.DatastoreProjectsBeginTransactionSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BeginTransactionResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsCommit

Commits a transaction, optionally creating, deleting or modifying some entities.

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
    res, err := s.Projects.DatastoreProjectsCommit(ctx, operations.DatastoreProjectsCommitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CommitRequest: &shared.CommitRequest{
            DatabaseID: sdk.String("iusto"),
            Mode: shared.CommitRequestModeEnumModeUnspecified.ToPointer(),
            Mutations: []shared.Mutation{
                shared.Mutation{
                    BaseVersion: sdk.String("enim"),
                    Delete: &shared.Key{
                        PartitionID: &shared.PartitionID{
                            DatabaseID: sdk.String("accusamus"),
                            NamespaceID: sdk.String("commodi"),
                            ProjectID: sdk.String("repudiandae"),
                        },
                        Path: []shared.PathElement{
                            shared.PathElement{
                                ID: sdk.String("ipsum"),
                                Kind: sdk.String("quidem"),
                                Name: sdk.String("Andy Streich"),
                            },
                        },
                    },
                    Insert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("rem"),
                                NamespaceID: sdk.String("voluptates"),
                                ProjectID: sdk.String("quasi"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("sint"),
                                    Kind: sdk.String("veritatis"),
                                    Name: sdk.String("Miss Randall Hamill"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("explicabo"),
                                    Kind: sdk.String("deserunt"),
                                    Name: sdk.String("Marty Green"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("aliquid"),
                                    Kind: sdk.String("cupiditate"),
                                    Name: sdk.String("Christopher Cummerata"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("alias"),
                                    Kind: sdk.String("fugit"),
                                    Name: sdk.String("Marshall Glover"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "delectus": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("non"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(7561.07),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(5761.57),
                                    Longitude: sdk.Float64(3960.98),
                                },
                                IntegerValue: sdk.String("provident"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("necessitatibus"),
                                        NamespaceID: sdk.String("sint"),
                                        ProjectID: sdk.String("officia"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("debitis"),
                                            Kind: sdk.String("a"),
                                            Name: sdk.String("Arnold Kirlin"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(699479),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("dicta"),
                                TimestampValue: sdk.String("magnam"),
                            },
                            "cumque": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("ea"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3965.06),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(6754.39),
                                    Longitude: sdk.Float64(8811.04),
                                },
                                IntegerValue: sdk.String("non"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("occaecati"),
                                        NamespaceID: sdk.String("enim"),
                                        ProjectID: sdk.String("accusamus"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quidem"),
                                            Kind: sdk.String("provident"),
                                            Name: sdk.String("Lynn Kuvalis"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("amet"),
                                            Kind: sdk.String("deserunt"),
                                            Name: sdk.String("Wilma Mosciski"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("perferendis"),
                                            Kind: sdk.String("nihil"),
                                            Name: sdk.String("Verna Olson"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("suscipit"),
                                            Kind: sdk.String("natus"),
                                            Name: sdk.String("Duane Thiel II"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(92373),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("excepturi"),
                                TimestampValue: sdk.String("ullam"),
                            },
                        },
                    },
                    Update: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("provident"),
                                NamespaceID: sdk.String("quos"),
                                ProjectID: sdk.String("sint"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("mollitia"),
                                    Kind: sdk.String("reiciendis"),
                                    Name: sdk.String("Tommy Kemmer"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "nemo": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("iure"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9840.43),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(8919.24),
                                    Longitude: sdk.Float64(2603.41),
                                },
                                IntegerValue: sdk.String("maxime"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("deleniti"),
                                        NamespaceID: sdk.String("facilis"),
                                        ProjectID: sdk.String("in"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("architecto"),
                                            Kind: sdk.String("repudiandae"),
                                            Name: sdk.String("Lola Koss"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(149448),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("saepe"),
                                TimestampValue: sdk.String("pariatur"),
                            },
                        },
                    },
                    UpdateTime: sdk.String("accusantium"),
                    Upsert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("consequuntur"),
                                NamespaceID: sdk.String("praesentium"),
                                ProjectID: sdk.String("natus"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("sunt"),
                                    Kind: sdk.String("quo"),
                                    Name: sdk.String("Ervin Schoen"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "ea": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("ab"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9825.75),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(6974.29),
                                    Longitude: sdk.Float64(3732.91),
                                },
                                IntegerValue: sdk.String("voluptate"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("autem"),
                                        NamespaceID: sdk.String("nam"),
                                        ProjectID: sdk.String("eaque"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("nemo"),
                                            Kind: sdk.String("voluptatibus"),
                                            Name: sdk.String("Miss Ginger Feeney"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("hic"),
                                            Kind: sdk.String("libero"),
                                            Name: sdk.String("Ernest Hayes"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("eaque"),
                                            Kind: sdk.String("quis"),
                                            Name: sdk.String("Ruby Auer"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quam"),
                                            Kind: sdk.String("dolor"),
                                            Name: sdk.String("Dean Welch"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(704415),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("perspiciatis"),
                                TimestampValue: sdk.String("voluptatem"),
                            },
                        },
                    },
                },
                shared.Mutation{
                    BaseVersion: sdk.String("porro"),
                    Delete: &shared.Key{
                        PartitionID: &shared.PartitionID{
                            DatabaseID: sdk.String("consequuntur"),
                            NamespaceID: sdk.String("blanditiis"),
                            ProjectID: sdk.String("error"),
                        },
                        Path: []shared.PathElement{
                            shared.PathElement{
                                ID: sdk.String("occaecati"),
                                Kind: sdk.String("rerum"),
                                Name: sdk.String("Ollie Watsica"),
                            },
                        },
                    },
                    Insert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("dolorum"),
                                NamespaceID: sdk.String("deleniti"),
                                ProjectID: sdk.String("pariatur"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("nobis"),
                                    Kind: sdk.String("libero"),
                                    Name: sdk.String("Alex Luettgen"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("dolorem"),
                                    Kind: sdk.String("dolor"),
                                    Name: sdk.String("Tiffany Welch"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("voluptate"),
                                    Kind: sdk.String("dignissimos"),
                                    Name: sdk.String("Allen Parisian Jr."),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "iure": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("quaerat"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8810.05),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(6963.44),
                                    Longitude: sdk.Float64(9764.05),
                                },
                                IntegerValue: sdk.String("voluptas"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("natus"),
                                        NamespaceID: sdk.String("eos"),
                                        ProjectID: sdk.String("atque"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("fugiat"),
                                            Kind: sdk.String("ab"),
                                            Name: sdk.String("Omar Kris"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(536579),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("omnis"),
                                TimestampValue: sdk.String("necessitatibus"),
                            },
                        },
                    },
                    Update: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("distinctio"),
                                NamespaceID: sdk.String("asperiores"),
                                ProjectID: sdk.String("nihil"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("voluptate"),
                                    Kind: sdk.String("id"),
                                    Name: sdk.String("Mrs. Ray Collins"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "ad": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("suscipit"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6457.85),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(5883.17),
                                    Longitude: sdk.Float64(3246.83),
                                },
                                IntegerValue: sdk.String("repellendus"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("totam"),
                                        NamespaceID: sdk.String("similique"),
                                        ProjectID: sdk.String("alias"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quaerat"),
                                            Kind: sdk.String("tempora"),
                                            Name: sdk.String("Bernadette Torp"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("a"),
                                            Kind: sdk.String("esse"),
                                            Name: sdk.String("Tyrone Emard"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("amet"),
                                            Kind: sdk.String("tempore"),
                                            Name: sdk.String("Francis Haley"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("totam"),
                                            Kind: sdk.String("nihil"),
                                            Name: sdk.String("Mamie Durgan"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(730442),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("voluptas"),
                                TimestampValue: sdk.String("deserunt"),
                            },
                            "quam": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("incidunt"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1864.58),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(5867.84),
                                    Longitude: sdk.Float64(8075.81),
                                },
                                IntegerValue: sdk.String("pariatur"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("soluta"),
                                        NamespaceID: sdk.String("dicta"),
                                        ProjectID: sdk.String("laborum"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("incidunt"),
                                            Kind: sdk.String("aspernatur"),
                                            Name: sdk.String("Verna Purdy"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("molestias"),
                                            Kind: sdk.String("temporibus"),
                                            Name: sdk.String("Gladys Considine"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("sunt"),
                                            Kind: sdk.String("ullam"),
                                            Name: sdk.String("Terrell Bartell"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(748664),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("et"),
                                TimestampValue: sdk.String("saepe"),
                            },
                            "ipsum": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("nobis"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5521.93),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(7316.94),
                                    Longitude: sdk.Float64(5844.76),
                                },
                                IntegerValue: sdk.String("aperiam"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("delectus"),
                                        NamespaceID: sdk.String("dolorem"),
                                        ProjectID: sdk.String("dolore"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("adipisci"),
                                            Kind: sdk.String("dolorum"),
                                            Name: sdk.String("Amy Armstrong"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("consequatur"),
                                            Kind: sdk.String("est"),
                                            Name: sdk.String("Sherman Wyman"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(586410),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("qui"),
                                TimestampValue: sdk.String("quae"),
                            },
                            "laudantium": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("occaecati"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9774.96),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(7875.42),
                                    Longitude: sdk.Float64(8765.06),
                                },
                                IntegerValue: sdk.String("omnis"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("quis"),
                                        NamespaceID: sdk.String("ipsum"),
                                        ProjectID: sdk.String("delectus"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("consectetur"),
                                            Kind: sdk.String("vero"),
                                            Name: sdk.String("Julio Weissnat"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("odio"),
                                            Kind: sdk.String("similique"),
                                            Name: sdk.String("Hugo Kuphal"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(848944),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("sequi"),
                                TimestampValue: sdk.String("natus"),
                            },
                        },
                    },
                    UpdateTime: sdk.String("impedit"),
                    Upsert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("aut"),
                                NamespaceID: sdk.String("voluptatibus"),
                                ProjectID: sdk.String("exercitationem"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("fugit"),
                                    Kind: sdk.String("porro"),
                                    Name: sdk.String("Domingo Kris"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("alias"),
                                    Kind: sdk.String("officia"),
                                    Name: sdk.String("Roberta Jenkins"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("possimus"),
                                    Kind: sdk.String("magnam"),
                                    Name: sdk.String("Mrs. Vicki Langosh"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("quasi"),
                                    Kind: sdk.String("ex"),
                                    Name: sdk.String("Marshall Wiza"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "saepe": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("impedit"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3592.71),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(3331.45),
                                    Longitude: sdk.Float64(3994.99),
                                },
                                IntegerValue: sdk.String("inventore"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("magnam"),
                                        NamespaceID: sdk.String("ea"),
                                        ProjectID: sdk.String("quo"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("recusandae"),
                                            Kind: sdk.String("aspernatur"),
                                            Name: sdk.String("Shirley Wilderman Jr."),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(533466),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("impedit"),
                                TimestampValue: sdk.String("aliquam"),
                            },
                            "fugit": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("inventore"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2506.22),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(896.03),
                                    Longitude: sdk.Float64(6774.12),
                                },
                                IntegerValue: sdk.String("laborum"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("placeat"),
                                        NamespaceID: sdk.String("velit"),
                                        ProjectID: sdk.String("eum"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("nobis"),
                                            Kind: sdk.String("quas"),
                                            Name: sdk.String("Drew Hoeger I"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("numquam"),
                                            Kind: sdk.String("explicabo"),
                                            Name: sdk.String("Jose Kreiger"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(262118),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("esse"),
                                TimestampValue: sdk.String("esse"),
                            },
                            "rem": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("reprehenderit"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6956.26),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(8526.35),
                                    Longitude: sdk.Float64(2835.19),
                                },
                                IntegerValue: sdk.String("eum"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("suscipit"),
                                        NamespaceID: sdk.String("assumenda"),
                                        ProjectID: sdk.String("eos"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quisquam"),
                                            Kind: sdk.String("veritatis"),
                                            Name: sdk.String("Amelia Predovic"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("illum"),
                                            Kind: sdk.String("quo"),
                                            Name: sdk.String("Herbert Daugherty V"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("consequatur"),
                                            Kind: sdk.String("tempora"),
                                            Name: sdk.String("Roberto Collier"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(459856),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("recusandae"),
                                TimestampValue: sdk.String("aperiam"),
                            },
                            "distinctio": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("dignissimos"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(769.56),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(4694.98),
                                    Longitude: sdk.Float64(5188.35),
                                },
                                IntegerValue: sdk.String("accusamus"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("aliquam"),
                                        NamespaceID: sdk.String("odio"),
                                        ProjectID: sdk.String("occaecati"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("sapiente"),
                                            Kind: sdk.String("dolores"),
                                            Name: sdk.String("Fernando Barton"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quas"),
                                            Kind: sdk.String("praesentium"),
                                            Name: sdk.String("Cassandra Considine"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(277596),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("atque"),
                                TimestampValue: sdk.String("explicabo"),
                            },
                        },
                    },
                },
                shared.Mutation{
                    BaseVersion: sdk.String("minima"),
                    Delete: &shared.Key{
                        PartitionID: &shared.PartitionID{
                            DatabaseID: sdk.String("nisi"),
                            NamespaceID: sdk.String("fugit"),
                            ProjectID: sdk.String("sapiente"),
                        },
                        Path: []shared.PathElement{
                            shared.PathElement{
                                ID: sdk.String("ratione"),
                                Kind: sdk.String("explicabo"),
                                Name: sdk.String("Ms. Marion Little"),
                            },
                        },
                    },
                    Insert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("accusamus"),
                                NamespaceID: sdk.String("veritatis"),
                                ProjectID: sdk.String("esse"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("nam"),
                                    Kind: sdk.String("vero"),
                                    Name: sdk.String("Frances Turner"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("molestiae"),
                                    Kind: sdk.String("rerum"),
                                    Name: sdk.String("Warren Rau V"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("tempore"),
                                    Kind: sdk.String("adipisci"),
                                    Name: sdk.String("Carlos Altenwerth"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("sapiente"),
                                    Kind: sdk.String("consectetur"),
                                    Name: sdk.String("Mattie McLaughlin"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "esse": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("a"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6216.79),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(5757.51),
                                    Longitude: sdk.Float64(8630.23),
                                },
                                IntegerValue: sdk.String("possimus"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("quia"),
                                        NamespaceID: sdk.String("eveniet"),
                                        ProjectID: sdk.String("asperiores"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("veritatis"),
                                            Kind: sdk.String("consequuntur"),
                                            Name: sdk.String("Hattie Nader"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quae"),
                                            Kind: sdk.String("earum"),
                                            Name: sdk.String("Pearl Gerlach"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("soluta"),
                                            Kind: sdk.String("accusantium"),
                                            Name: sdk.String("Miranda Carter"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("ullam"),
                                            Kind: sdk.String("nisi"),
                                            Name: sdk.String("Nora Denesik"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(536275),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("itaque"),
                                TimestampValue: sdk.String("dolorum"),
                            },
                            "architecto": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("tenetur"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(984.78),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(8694.89),
                                    Longitude: sdk.Float64(920.27),
                                },
                                IntegerValue: sdk.String("voluptate"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("ipsa"),
                                        NamespaceID: sdk.String("minima"),
                                        ProjectID: sdk.String("veritatis"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("adipisci"),
                                            Kind: sdk.String("iste"),
                                            Name: sdk.String("Ms. Kenneth Ledner"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(649832),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("ab"),
                                TimestampValue: sdk.String("corrupti"),
                            },
                            "non": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("dolor"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5801.52),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(2531.91),
                                    Longitude: sdk.Float64(7710.89),
                                },
                                IntegerValue: sdk.String("explicabo"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("voluptas"),
                                        NamespaceID: sdk.String("aut"),
                                        ProjectID: sdk.String("dignissimos"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("maiores"),
                                            Kind: sdk.String("natus"),
                                            Name: sdk.String("Camille Hirthe III"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(310067),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("consequuntur"),
                                TimestampValue: sdk.String("repellendus"),
                            },
                        },
                    },
                    Update: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("officia"),
                                NamespaceID: sdk.String("maxime"),
                                ProjectID: sdk.String("dignissimos"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("asperiores"),
                                    Kind: sdk.String("nemo"),
                                    Name: sdk.String("Darlene Sawayn"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("ab"),
                                    Kind: sdk.String("adipisci"),
                                    Name: sdk.String("Orlando Homenick"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("est"),
                                    Kind: sdk.String("recusandae"),
                                    Name: sdk.String("Nicolas Kassulke"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "labore": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("facilis"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(7382.27),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(4148.57),
                                    Longitude: sdk.Float64(4471.44),
                                },
                                IntegerValue: sdk.String("corporis"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("reiciendis"),
                                        NamespaceID: sdk.String("assumenda"),
                                        ProjectID: sdk.String("nemo"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("aliquid"),
                                            Kind: sdk.String("aperiam"),
                                            Name: sdk.String("Glenn Kirlin"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("facere"),
                                            Kind: sdk.String("numquam"),
                                            Name: sdk.String("Ricardo Wisozk"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("necessitatibus"),
                                            Kind: sdk.String("dolore"),
                                            Name: sdk.String("Ollie Flatley"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("beatae"),
                                            Kind: sdk.String("dignissimos"),
                                            Name: sdk.String("Doyle Feest"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(385237),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("ipsa"),
                                TimestampValue: sdk.String("voluptates"),
                            },
                            "libero": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("accusamus"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6311.26),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(2724.37),
                                    Longitude: sdk.Float64(1328.15),
                                },
                                IntegerValue: sdk.String("voluptas"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("voluptas"),
                                        NamespaceID: sdk.String("voluptas"),
                                        ProjectID: sdk.String("minima"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("dolorum"),
                                            Kind: sdk.String("adipisci"),
                                            Name: sdk.String("Ernest Labadie"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("aliquam"),
                                            Kind: sdk.String("officiis"),
                                            Name: sdk.String("Dustin Ferry"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quas"),
                                            Kind: sdk.String("hic"),
                                            Name: sdk.String("Molly Lowe"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(940210),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("exercitationem"),
                                TimestampValue: sdk.String("nobis"),
                            },
                        },
                    },
                    UpdateTime: sdk.String("sit"),
                    Upsert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                DatabaseID: sdk.String("rerum"),
                                NamespaceID: sdk.String("sed"),
                                ProjectID: sdk.String("reiciendis"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("asperiores"),
                                    Kind: sdk.String("facilis"),
                                    Name: sdk.String("Kristy Bernier"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "sed": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("commodi"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6960.77),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(1312.89),
                                    Longitude: sdk.Float64(3783.26),
                                },
                                IntegerValue: sdk.String("unde"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("architecto"),
                                        NamespaceID: sdk.String("suscipit"),
                                        ProjectID: sdk.String("sapiente"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("illo"),
                                            Kind: sdk.String("reiciendis"),
                                            Name: sdk.String("Naomi Wuckert"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("provident"),
                                            Kind: sdk.String("eius"),
                                            Name: sdk.String("Nathan Jaskolski"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("voluptatibus"),
                                            Kind: sdk.String("tempora"),
                                            Name: sdk.String("Allison Wisozk I"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("officiis"),
                                            Kind: sdk.String("praesentium"),
                                            Name: sdk.String("Alex Gottlieb"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(524970),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("sit"),
                                TimestampValue: sdk.String("nobis"),
                            },
                            "error": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("minima"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9241.59),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(9671.22),
                                    Longitude: sdk.Float64(8623.19),
                                },
                                IntegerValue: sdk.String("magni"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("aperiam"),
                                        NamespaceID: sdk.String("saepe"),
                                        ProjectID: sdk.String("numquam"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("in"),
                                            Kind: sdk.String("officiis"),
                                            Name: sdk.String("Marsha Heidenreich"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("laboriosam"),
                                            Kind: sdk.String("dolorum"),
                                            Name: sdk.String("Evan Welch"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(204923),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("dolorum"),
                                TimestampValue: sdk.String("nostrum"),
                            },
                            "officia": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("corrupti"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8792.35),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(2726.83),
                                    Longitude: sdk.Float64(5436.78),
                                },
                                IntegerValue: sdk.String("fugit"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("ut"),
                                        NamespaceID: sdk.String("fugiat"),
                                        ProjectID: sdk.String("voluptatem"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("expedita"),
                                            Kind: sdk.String("magnam"),
                                            Name: sdk.String("Ms. Georgia Hintz"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("repudiandae"),
                                            Kind: sdk.String("corporis"),
                                            Name: sdk.String("Mattie Jaskolski III"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("nostrum"),
                                            Kind: sdk.String("saepe"),
                                            Name: sdk.String("William Gottlieb"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(690894),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("dicta"),
                                TimestampValue: sdk.String("architecto"),
                            },
                        },
                    },
                },
            },
            SingleUseTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: sdk.String("occaecati"),
                },
                ReadWrite: &shared.ReadWrite{
                    PreviousTransaction: sdk.String("labore"),
                },
            },
            Transaction: sdk.String("quidem"),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "amet",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("unde"),
    }, operations.DatastoreProjectsCommitSecurity{
        Option1: &operations.DatastoreProjectsCommitSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommitResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsExport

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

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
    res, err := s.Projects.DatastoreProjectsExport(ctx, operations.DatastoreProjectsExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleDatastoreAdminV1ExportEntitiesRequest: &shared.GoogleDatastoreAdminV1ExportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1EntityFilter{
                Kinds: []string{
                    "repellendus",
                    "delectus",
                    "voluptates",
                },
                NamespaceIds: []string{
                    "est",
                },
            },
            Labels: map[string]string{
                "reprehenderit": "facere",
                "fuga": "praesentium",
                "mollitia": "veniam",
            },
            OutputURLPrefix: sdk.String("voluptatem"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("atque"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "totam",
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.DatastoreProjectsExportSecurity{
        Option1: &operations.DatastoreProjectsExportSecurityOption1{
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

## DatastoreProjectsImport

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

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
    res, err := s.Projects.DatastoreProjectsImport(ctx, operations.DatastoreProjectsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleDatastoreAdminV1ImportEntitiesRequest: &shared.GoogleDatastoreAdminV1ImportEntitiesRequest{
            EntityFilter: &shared.GoogleDatastoreAdminV1EntityFilter{
                Kinds: []string{
                    "amet",
                    "assumenda",
                },
                NamespaceIds: []string{
                    "atque",
                    "error",
                },
            },
            InputURL: sdk.String("officiis"),
            Labels: map[string]string{
                "accusamus": "natus",
                "minima": "aspernatur",
                "ex": "maiores",
                "corrupti": "at",
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sunt",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.DatastoreProjectsImportSecurity{
        Option1: &operations.DatastoreProjectsImportSecurityOption1{
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

## DatastoreProjectsIndexesCreate

Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.

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
    res, err := s.Projects.DatastoreProjectsIndexesCreate(ctx, operations.DatastoreProjectsIndexesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleDatastoreAdminV1IndexInput: &shared.GoogleDatastoreAdminV1IndexInput{
            Ancestor: shared.GoogleDatastoreAdminV1IndexAncestorEnumAllAncestors.ToPointer(),
            Kind: sdk.String("doloremque"),
            Properties: []shared.GoogleDatastoreAdminV1IndexedProperty{
                shared.GoogleDatastoreAdminV1IndexedProperty{
                    Direction: shared.GoogleDatastoreAdminV1IndexedPropertyDirectionEnumDirectionUnspecified.ToPointer(),
                    Name: sdk.String("Teresa Daniel"),
                },
                shared.GoogleDatastoreAdminV1IndexedProperty{
                    Direction: shared.GoogleDatastoreAdminV1IndexedPropertyDirectionEnumDirectionUnspecified.ToPointer(),
                    Name: sdk.String("Ross Gusikowski"),
                },
                shared.GoogleDatastoreAdminV1IndexedProperty{
                    Direction: shared.GoogleDatastoreAdminV1IndexedPropertyDirectionEnumAscending.ToPointer(),
                    Name: sdk.String("Freddie King"),
                },
                shared.GoogleDatastoreAdminV1IndexedProperty{
                    Direction: shared.GoogleDatastoreAdminV1IndexedPropertyDirectionEnumAscending.ToPointer(),
                    Name: sdk.String("Beverly Olson"),
                },
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vero",
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DatastoreProjectsIndexesCreateSecurity{
        Option1: &operations.DatastoreProjectsIndexesCreateSecurityOption1{
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

## DatastoreProjectsIndexesDelete

Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.

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
    res, err := s.Projects.DatastoreProjectsIndexesDelete(ctx, operations.DatastoreProjectsIndexesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("qui"),
        IndexID: "cum",
        Key: sdk.String("iure"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ratione",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.DatastoreProjectsIndexesDeleteSecurity{
        Option1: &operations.DatastoreProjectsIndexesDeleteSecurityOption1{
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

## DatastoreProjectsIndexesGet

Gets an index.

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
    res, err := s.Projects.DatastoreProjectsIndexesGet(ctx, operations.DatastoreProjectsIndexesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("alias"),
        IndexID: "corporis",
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "mollitia",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DatastoreProjectsIndexesGetSecurity{
        Option1: &operations.DatastoreProjectsIndexesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleDatastoreAdminV1Index != nil {
        // handle response
    }
}
```

## DatastoreProjectsIndexesList

Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.

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
    res, err := s.Projects.DatastoreProjectsIndexesList(ctx, operations.DatastoreProjectsIndexesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("dolore"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("quae"),
        PageSize: sdk.Int64(925703),
        PageToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quaerat",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("ut"),
    }, operations.DatastoreProjectsIndexesListSecurity{
        Option1: &operations.DatastoreProjectsIndexesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleDatastoreAdminV1ListIndexesResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsLookup

Looks up entities by key.

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
    res, err := s.Projects.DatastoreProjectsLookup(ctx, operations.DatastoreProjectsLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LookupRequest: &shared.LookupRequest{
            DatabaseID: sdk.String("adipisci"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("laudantium"),
                        NamespaceID: sdk.String("eum"),
                        ProjectID: sdk.String("nemo"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("esse"),
                            Kind: sdk.String("provident"),
                            Name: sdk.String("Natalie Witting"),
                        },
                        shared.PathElement{
                            ID: sdk.String("ullam"),
                            Kind: sdk.String("quasi"),
                            Name: sdk.String("Gordon O'Hara"),
                        },
                        shared.PathElement{
                            ID: sdk.String("animi"),
                            Kind: sdk.String("ex"),
                            Name: sdk.String("Ruth Zulauf"),
                        },
                        shared.PathElement{
                            ID: sdk.String("in"),
                            Kind: sdk.String("nam"),
                            Name: sdk.String("Oliver Osinski"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("voluptatibus"),
                        NamespaceID: sdk.String("molestias"),
                        ProjectID: sdk.String("officiis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("cumque"),
                            Kind: sdk.String("vitae"),
                            Name: sdk.String("Mr. Ricky Harvey"),
                        },
                        shared.PathElement{
                            ID: sdk.String("quae"),
                            Kind: sdk.String("perferendis"),
                            Name: sdk.String("Judy Kemmer"),
                        },
                        shared.PathElement{
                            ID: sdk.String("at"),
                            Kind: sdk.String("impedit"),
                            Name: sdk.String("Mrs. Miranda Kemmer V"),
                        },
                        shared.PathElement{
                            ID: sdk.String("provident"),
                            Kind: sdk.String("earum"),
                            Name: sdk.String("Dr. Terrell Stanton"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("maiores"),
                        NamespaceID: sdk.String("debitis"),
                        ProjectID: sdk.String("aliquid"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("suscipit"),
                            Kind: sdk.String("dolorem"),
                            Name: sdk.String("Erma Paucek"),
                        },
                        shared.PathElement{
                            ID: sdk.String("necessitatibus"),
                            Kind: sdk.String("nulla"),
                            Name: sdk.String("Joyce Borer"),
                        },
                        shared.PathElement{
                            ID: sdk.String("occaecati"),
                            Kind: sdk.String("suscipit"),
                            Name: sdk.String("Joyce Cummings"),
                        },
                        shared.PathElement{
                            ID: sdk.String("necessitatibus"),
                            Kind: sdk.String("ipsa"),
                            Name: sdk.String("Ms. Marcia Kozey"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("praesentium"),
                        NamespaceID: sdk.String("maiores"),
                        ProjectID: sdk.String("reiciendis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("architecto"),
                            Kind: sdk.String("fugiat"),
                            Name: sdk.String("Cheryl Kub"),
                        },
                        shared.PathElement{
                            ID: sdk.String("ex"),
                            Kind: sdk.String("consectetur"),
                            Name: sdk.String("Mrs. Melissa Osinski"),
                        },
                    },
                },
            },
            ReadOptions: &shared.ReadOptions{
                NewTransaction: &shared.TransactionOptions{
                    ReadOnly: &shared.ReadOnly{
                        ReadTime: sdk.String("expedita"),
                    },
                    ReadWrite: &shared.ReadWrite{
                        PreviousTransaction: sdk.String("aliquid"),
                    },
                },
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumStrong.ToPointer(),
                ReadTime: sdk.String("suscipit"),
                Transaction: sdk.String("aliquid"),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("iste"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "error",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DatastoreProjectsLookupSecurity{
        Option1: &operations.DatastoreProjectsLookupSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.DatastoreProjectsOperationsCancel(ctx, operations.DatastoreProjectsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("enim"),
        Key: sdk.String("vitae"),
        Name: "Ruben Ryan",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.DatastoreProjectsOperationsCancelSecurity{
        Option1: &operations.DatastoreProjectsOperationsCancelSecurityOption1{
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

## DatastoreProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.DatastoreProjectsOperationsDelete(ctx, operations.DatastoreProjectsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("veritatis"),
        Name: "Dr. Rex Nicolas",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DatastoreProjectsOperationsDeleteSecurity{
        Option1: &operations.DatastoreProjectsOperationsDeleteSecurityOption1{
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

## DatastoreProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.DatastoreProjectsOperationsGet(ctx, operations.DatastoreProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("ex"),
        Key: sdk.String("sapiente"),
        Name: "Israel Hickle",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DatastoreProjectsOperationsGetSecurity{
        Option1: &operations.DatastoreProjectsOperationsGetSecurityOption1{
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

## DatastoreProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.DatastoreProjectsOperationsList(ctx, operations.DatastoreProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("culpa"),
        Filter: sdk.String("dolor"),
        Key: sdk.String("aliquam"),
        Name: "Cassandra Bogan",
        OauthToken: sdk.String("consequatur"),
        PageSize: sdk.Int64(100014),
        PageToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DatastoreProjectsOperationsListSecurity{
        Option1: &operations.DatastoreProjectsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsReserveIds

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

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
    res, err := s.Projects.DatastoreProjectsReserveIds(ctx, operations.DatastoreProjectsReserveIdsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReserveIdsRequest: &shared.ReserveIdsRequest{
            DatabaseID: sdk.String("quae"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        DatabaseID: sdk.String("fugiat"),
                        NamespaceID: sdk.String("ipsam"),
                        ProjectID: sdk.String("consequuntur"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("quas"),
                            Kind: sdk.String("eveniet"),
                            Name: sdk.String("Erick Klocko"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "magnam",
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("porro"),
    }, operations.DatastoreProjectsReserveIdsSecurity{
        Option1: &operations.DatastoreProjectsReserveIdsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReserveIdsResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsRollback

Rolls back a transaction.

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
    res, err := s.Projects.DatastoreProjectsRollback(ctx, operations.DatastoreProjectsRollbackRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RollbackRequest: &shared.RollbackRequest{
            DatabaseID: sdk.String("nobis"),
            Transaction: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nisi",
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("est"),
    }, operations.DatastoreProjectsRollbackSecurity{
        Option1: &operations.DatastoreProjectsRollbackSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbackResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsRunAggregationQuery

Runs an aggregation query.

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
    res, err := s.Projects.DatastoreProjectsRunAggregationQuery(ctx, operations.DatastoreProjectsRunAggregationQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RunAggregationQueryRequest: &shared.RunAggregationQueryRequest{
            AggregationQuery: &shared.AggregationQuery{
                Aggregations: []shared.Aggregation{
                    shared.Aggregation{
                        Alias: sdk.String("doloribus"),
                        Count: &shared.Count{
                            UpTo: sdk.String("repudiandae"),
                        },
                    },
                },
                NestedQuery: &shared.Query{
                    DistinctOn: []shared.PropertyReference{
                        shared.PropertyReference{
                            Name: sdk.String("Herman Klocko"),
                        },
                        shared.PropertyReference{
                            Name: sdk.String("Marjorie Hickle"),
                        },
                        shared.PropertyReference{
                            Name: sdk.String("Caroline Dooley"),
                        },
                        shared.PropertyReference{
                            Name: sdk.String("Joyce Leffler III"),
                        },
                    },
                    EndCursor: sdk.String("consequuntur"),
                    Filter: &shared.Filter{
                        CompositeFilter: &shared.CompositeFilter{
                            Filters: []shared.Filter{
                                shared.Filter{},
                            },
                            Op: shared.CompositeFilterOpEnumOperatorUnspecified.ToPointer(),
                        },
                        PropertyFilter: &shared.PropertyFilter{
                            Op: shared.PropertyFilterOpEnumEqual.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Dominic Abernathy"),
                            },
                            Value: &shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("iste"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1700.99),
                                EntityValue: &shared.Entity{
                                    Key: &shared.Key{
                                        PartitionID: &shared.PartitionID{
                                            DatabaseID: sdk.String("inventore"),
                                            NamespaceID: sdk.String("fuga"),
                                            ProjectID: sdk.String("accusamus"),
                                        },
                                        Path: []shared.PathElement{
                                            shared.PathElement{
                                                ID: sdk.String("distinctio"),
                                                Kind: sdk.String("omnis"),
                                                Name: sdk.String("Darrell Lang"),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("temporibus"),
                                                Kind: sdk.String("quos"),
                                                Name: sdk.String("Lorena Johns"),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("modi"),
                                                Kind: sdk.String("nam"),
                                                Name: sdk.String("Kenneth Hilpert Sr."),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("non"),
                                                Kind: sdk.String("maiores"),
                                                Name: sdk.String("Bobbie Stokes"),
                                            },
                                        },
                                    },
                                    Properties: map[string]shared.Value{
                                        "reprehenderit": shared.Value{
                                            ArrayValue: &shared.ArrayValue{
                                                Values: []shared.Value{
                                                    shared.Value{},
                                                    shared.Value{},
                                                    shared.Value{},
                                                },
                                            },
                                            BlobValue: sdk.String("quis"),
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(5718.44),
                                            EntityValue: &shared.Entity{},
                                            ExcludeFromIndexes: sdk.Bool(false),
                                            GeoPointValue: &shared.LatLng{
                                                Latitude: sdk.Float64(8806.79),
                                                Longitude: sdk.Float64(7746.84),
                                            },
                                            IntegerValue: sdk.String("hic"),
                                            KeyValue: &shared.Key{
                                                PartitionID: &shared.PartitionID{
                                                    DatabaseID: sdk.String("necessitatibus"),
                                                    NamespaceID: sdk.String("asperiores"),
                                                    ProjectID: sdk.String("ex"),
                                                },
                                                Path: []shared.PathElement{
                                                    shared.PathElement{
                                                        ID: sdk.String("debitis"),
                                                        Kind: sdk.String("delectus"),
                                                        Name: sdk.String("Alexandra Pfannerstill"),
                                                    },
                                                    shared.PathElement{
                                                        ID: sdk.String("velit"),
                                                        Kind: sdk.String("atque"),
                                                        Name: sdk.String("Pat Cummerata"),
                                                    },
                                                },
                                            },
                                            Meaning: sdk.Int(721430),
                                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                            StringValue: sdk.String("dolore"),
                                            TimestampValue: sdk.String("iusto"),
                                        },
                                        "voluptate": shared.Value{
                                            ArrayValue: &shared.ArrayValue{
                                                Values: []shared.Value{
                                                    shared.Value{},
                                                },
                                            },
                                            BlobValue: sdk.String("dignissimos"),
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(2055.66),
                                            EntityValue: &shared.Entity{},
                                            ExcludeFromIndexes: sdk.Bool(false),
                                            GeoPointValue: &shared.LatLng{
                                                Latitude: sdk.Float64(7781.72),
                                                Longitude: sdk.Float64(5354.68),
                                            },
                                            IntegerValue: sdk.String("quibusdam"),
                                            KeyValue: &shared.Key{
                                                PartitionID: &shared.PartitionID{
                                                    DatabaseID: sdk.String("iure"),
                                                    NamespaceID: sdk.String("odit"),
                                                    ProjectID: sdk.String("voluptatibus"),
                                                },
                                                Path: []shared.PathElement{
                                                    shared.PathElement{
                                                        ID: sdk.String("magnam"),
                                                        Kind: sdk.String("quibusdam"),
                                                        Name: sdk.String("Dr. Muriel Reinger"),
                                                    },
                                                    shared.PathElement{
                                                        ID: sdk.String("porro"),
                                                        Kind: sdk.String("aliquam"),
                                                        Name: sdk.String("Martha Bashirian"),
                                                    },
                                                },
                                            },
                                            Meaning: sdk.Int(107617),
                                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                            StringValue: sdk.String("vero"),
                                            TimestampValue: sdk.String("excepturi"),
                                        },
                                    },
                                },
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(4319.94),
                                    Longitude: sdk.Float64(2465.57),
                                },
                                IntegerValue: sdk.String("ut"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("perspiciatis"),
                                        NamespaceID: sdk.String("earum"),
                                        ProjectID: sdk.String("dicta"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("voluptatibus"),
                                            Kind: sdk.String("iste"),
                                            Name: sdk.String("John Huel"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("laborum"),
                                            Kind: sdk.String("non"),
                                            Name: sdk.String("Mr. Glenda Bailey"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("recusandae"),
                                            Kind: sdk.String("ea"),
                                            Name: sdk.String("Hector Purdy"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("expedita"),
                                            Kind: sdk.String("deleniti"),
                                            Name: sdk.String("Karl Herman"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(654082),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("impedit"),
                                TimestampValue: sdk.String("ipsam"),
                            },
                        },
                    },
                    Kind: []shared.KindExpression{
                        shared.KindExpression{
                            Name: sdk.String("Jeremiah Koch PhD"),
                        },
                        shared.KindExpression{
                            Name: sdk.String("Evelyn Bode"),
                        },
                    },
                    Limit: sdk.Int(183033),
                    Offset: sdk.Int(611328),
                    Order: []shared.PropertyOrder{
                        shared.PropertyOrder{
                            Direction: shared.PropertyOrderDirectionEnumAscending.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Wm Legros"),
                            },
                        },
                        shared.PropertyOrder{
                            Direction: shared.PropertyOrderDirectionEnumDirectionUnspecified.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Mr. Anne Kautzer"),
                            },
                        },
                    },
                    Projection: []shared.Projection{
                        shared.Projection{
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Kellie Bogisich"),
                            },
                        },
                    },
                    StartCursor: sdk.String("nulla"),
                },
            },
            DatabaseID: sdk.String("distinctio"),
            GqlQuery: &shared.GqlQuery{
                AllowLiterals: sdk.Bool(false),
                NamedBindings: map[string]shared.GqlQueryParameter{
                    "quia": shared.GqlQueryParameter{
                        Cursor: sdk.String("quia"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("omnis"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7272.5),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("dicta"),
                                        NamespaceID: sdk.String("id"),
                                        ProjectID: sdk.String("libero"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("officia"),
                                            Kind: sdk.String("quos"),
                                            Name: sdk.String("Dr. Paul Kris Jr."),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("totam"),
                                            Kind: sdk.String("dolore"),
                                            Name: sdk.String("Kelvin Bartoletti"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("dolores"),
                                            Kind: sdk.String("assumenda"),
                                            Name: sdk.String("Jodi Schumm"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("provident"),
                                            Kind: sdk.String("accusamus"),
                                            Name: sdk.String("Garry Mayer"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "rerum": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("corporis"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8890.6),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9729.12),
                                            Longitude: sdk.Float64(7372.79),
                                        },
                                        IntegerValue: sdk.String("at"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("alias"),
                                                NamespaceID: sdk.String("quia"),
                                                ProjectID: sdk.String("quidem"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("repudiandae"),
                                                    Kind: sdk.String("accusantium"),
                                                    Name: sdk.String("Erick Dare"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("praesentium"),
                                                    Kind: sdk.String("odit"),
                                                    Name: sdk.String("Stacy Mraz"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("recusandae"),
                                                    Kind: sdk.String("similique"),
                                                    Name: sdk.String("Miss Alison Hayes"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(963198),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("cupiditate"),
                                        TimestampValue: sdk.String("fugit"),
                                    },
                                    "numquam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("nesciunt"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8735.57),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(6378.56),
                                            Longitude: sdk.Float64(4918.92),
                                        },
                                        IntegerValue: sdk.String("optio"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("necessitatibus"),
                                                NamespaceID: sdk.String("corporis"),
                                                ProjectID: sdk.String("qui"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("voluptatum"),
                                                    Kind: sdk.String("cupiditate"),
                                                    Name: sdk.String("Nichole Halvorson"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("minus"),
                                                    Kind: sdk.String("eum"),
                                                    Name: sdk.String("Dana Gusikowski"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("tempore"),
                                                    Kind: sdk.String("aperiam"),
                                                    Name: sdk.String("Philip Greenfelder"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(375994),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quo"),
                                        TimestampValue: sdk.String("velit"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(7955.91),
                                Longitude: sdk.Float64(6845.53),
                            },
                            IntegerValue: sdk.String("nostrum"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("est"),
                                    NamespaceID: sdk.String("impedit"),
                                    ProjectID: sdk.String("delectus"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("vero"),
                                        Kind: sdk.String("odit"),
                                        Name: sdk.String("Ervin Hettinger IV"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("minima"),
                                        Kind: sdk.String("in"),
                                        Name: sdk.String("Sonia D'Amore IV"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("voluptate"),
                                        Kind: sdk.String("pariatur"),
                                        Name: sdk.String("Dana Ruecker"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(416692),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("officiis"),
                            TimestampValue: sdk.String("placeat"),
                        },
                    },
                    "quidem": shared.GqlQueryParameter{
                        Cursor: sdk.String("exercitationem"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("dolorem"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2646.19),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("ipsa"),
                                        NamespaceID: sdk.String("sint"),
                                        ProjectID: sdk.String("vero"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("repudiandae"),
                                            Kind: sdk.String("cum"),
                                            Name: sdk.String("Lila Harvey"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "dicta": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("necessitatibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7482.24),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(568.77),
                                            Longitude: sdk.Float64(4973.57),
                                        },
                                        IntegerValue: sdk.String("maiores"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("veritatis"),
                                                NamespaceID: sdk.String("quasi"),
                                                ProjectID: sdk.String("laboriosam"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("libero"),
                                                    Kind: sdk.String("excepturi"),
                                                    Name: sdk.String("Maurice Haag"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("eligendi"),
                                                    Kind: sdk.String("sint"),
                                                    Name: sdk.String("Mindy O'Kon"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("molestias"),
                                                    Kind: sdk.String("odio"),
                                                    Name: sdk.String("Gwen Braun"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("assumenda"),
                                                    Kind: sdk.String("tempore"),
                                                    Name: sdk.String("Lee Batz"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(741238),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ipsum"),
                                        TimestampValue: sdk.String("adipisci"),
                                    },
                                    "saepe": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("doloremque"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3397.56),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3330.72),
                                            Longitude: sdk.Float64(7274.81),
                                        },
                                        IntegerValue: sdk.String("architecto"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("cupiditate"),
                                                NamespaceID: sdk.String("molestiae"),
                                                ProjectID: sdk.String("eligendi"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("non"),
                                                    Kind: sdk.String("magnam"),
                                                    Name: sdk.String("Jeremy Zemlak"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("facere"),
                                                    Kind: sdk.String("laudantium"),
                                                    Name: sdk.String("Freda Farrell I"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("facilis"),
                                                    Kind: sdk.String("tempore"),
                                                    Name: sdk.String("Tami Hahn"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("nisi"),
                                                    Kind: sdk.String("quis"),
                                                    Name: sdk.String("Jeannette Schimmel"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(217663),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ad"),
                                        TimestampValue: sdk.String("voluptatibus"),
                                    },
                                    "voluptatibus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("debitis"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(2908.41),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7009.28),
                                            Longitude: sdk.Float64(1797.95),
                                        },
                                        IntegerValue: sdk.String("reprehenderit"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("nostrum"),
                                                NamespaceID: sdk.String("neque"),
                                                ProjectID: sdk.String("iusto"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("rem"),
                                                    Kind: sdk.String("eligendi"),
                                                    Name: sdk.String("Fredrick Towne"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("dicta"),
                                                    Kind: sdk.String("error"),
                                                    Name: sdk.String("Justin Kulas"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("ad"),
                                                    Kind: sdk.String("aspernatur"),
                                                    Name: sdk.String("Marta Kub"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(72350),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ab"),
                                        TimestampValue: sdk.String("incidunt"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(8791.74),
                                Longitude: sdk.Float64(9025.81),
                            },
                            IntegerValue: sdk.String("tempore"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("veniam"),
                                    NamespaceID: sdk.String("eos"),
                                    ProjectID: sdk.String("reiciendis"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("reprehenderit"),
                                        Kind: sdk.String("praesentium"),
                                        Name: sdk.String("Kristie Schamberger"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("deleniti"),
                                        Kind: sdk.String("illo"),
                                        Name: sdk.String("Nadine Gutmann"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("laudantium"),
                                        Kind: sdk.String("repudiandae"),
                                        Name: sdk.String("Kendra Collins"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("quas"),
                                        Kind: sdk.String("provident"),
                                        Name: sdk.String("Ira Kulas"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(629377),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("repellendus"),
                            TimestampValue: sdk.String("iure"),
                        },
                    },
                    "dolorem": shared.GqlQueryParameter{
                        Cursor: sdk.String("commodi"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("commodi"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(121.71),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("voluptatem"),
                                        NamespaceID: sdk.String("ad"),
                                        ProjectID: sdk.String("quae"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("illum"),
                                            Kind: sdk.String("praesentium"),
                                            Name: sdk.String("Mr. Jonathon Fay"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "earum": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("amet"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5879.67),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(6771.41),
                                            Longitude: sdk.Float64(8979.56),
                                        },
                                        IntegerValue: sdk.String("provident"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("repudiandae"),
                                                NamespaceID: sdk.String("consequatur"),
                                                ProjectID: sdk.String("nemo"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("itaque"),
                                                    Kind: sdk.String("facilis"),
                                                    Name: sdk.String("Anthony Marvin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("totam"),
                                                    Kind: sdk.String("dicta"),
                                                    Name: sdk.String("Dr. Shannon Fahey"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(582320),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("atque"),
                                        TimestampValue: sdk.String("beatae"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(8682.55),
                                Longitude: sdk.Float64(2875.44),
                            },
                            IntegerValue: sdk.String("minus"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("esse"),
                                    NamespaceID: sdk.String("voluptatem"),
                                    ProjectID: sdk.String("perferendis"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("ea"),
                                        Kind: sdk.String("aperiam"),
                                        Name: sdk.String("Kristie Frami"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("consectetur"),
                                        Kind: sdk.String("eligendi"),
                                        Name: sdk.String("Kim Roberts"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("officia"),
                                        Kind: sdk.String("amet"),
                                        Name: sdk.String("Bruce Satterfield"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(670762),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("dignissimos"),
                            TimestampValue: sdk.String("vero"),
                        },
                    },
                    "qui": shared.GqlQueryParameter{
                        Cursor: sdk.String("consectetur"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("explicabo"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1293.55),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("exercitationem"),
                                        NamespaceID: sdk.String("nihil"),
                                        ProjectID: sdk.String("non"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("illo"),
                                            Kind: sdk.String("hic"),
                                            Name: sdk.String("Toby Friesen"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "labore": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("repudiandae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(2653.03),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4502.09),
                                            Longitude: sdk.Float64(1272.94),
                                        },
                                        IntegerValue: sdk.String("accusamus"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("rem"),
                                                NamespaceID: sdk.String("aperiam"),
                                                ProjectID: sdk.String("odit"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("enim"),
                                                    Kind: sdk.String("voluptate"),
                                                    Name: sdk.String("Warren Rempel I"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("eum"),
                                                    Kind: sdk.String("nesciunt"),
                                                    Name: sdk.String("Julio Stehr"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("veniam"),
                                                    Kind: sdk.String("reiciendis"),
                                                    Name: sdk.String("Dr. Pauline Ankunding"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(413758),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("numquam"),
                                        TimestampValue: sdk.String("dolorum"),
                                    },
                                    "possimus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("consectetur"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(2006.37),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3106.29),
                                            Longitude: sdk.Float64(9294.76),
                                        },
                                        IntegerValue: sdk.String("minus"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("sunt"),
                                                NamespaceID: sdk.String("distinctio"),
                                                ProjectID: sdk.String("iusto"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("et"),
                                                    Kind: sdk.String("facilis"),
                                                    Name: sdk.String("Ms. Ella Pfannerstill V"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("laudantium"),
                                                    Kind: sdk.String("repellendus"),
                                                    Name: sdk.String("Brenda Bechtelar"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("mollitia"),
                                                    Kind: sdk.String("nulla"),
                                                    Name: sdk.String("Dr. Aaron Bartell"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(27982),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("incidunt"),
                                        TimestampValue: sdk.String("qui"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(1858.97),
                                Longitude: sdk.Float64(8959.12),
                            },
                            IntegerValue: sdk.String("harum"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("explicabo"),
                                    NamespaceID: sdk.String("beatae"),
                                    ProjectID: sdk.String("aliquid"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("optio"),
                                        Kind: sdk.String("voluptatibus"),
                                        Name: sdk.String("Luke Renner"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("aliquid"),
                                        Kind: sdk.String("ea"),
                                        Name: sdk.String("Allan Connelly"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(997918),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("nulla"),
                            TimestampValue: sdk.String("laborum"),
                        },
                    },
                },
                PositionalBindings: []shared.GqlQueryParameter{
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("accusamus"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("nisi"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7008.56),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("recusandae"),
                                        NamespaceID: sdk.String("voluptates"),
                                        ProjectID: sdk.String("non"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quia"),
                                            Kind: sdk.String("ullam"),
                                            Name: sdk.String("Willie Wiza PhD"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("architecto"),
                                            Kind: sdk.String("architecto"),
                                            Name: sdk.String("Miss Marianne Leffler"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("a"),
                                            Kind: sdk.String("iste"),
                                            Name: sdk.String("Olga Hermiston"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "maxime": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("consequuntur"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8281.47),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(8768.4),
                                            Longitude: sdk.Float64(9851.09),
                                        },
                                        IntegerValue: sdk.String("impedit"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("porro"),
                                                NamespaceID: sdk.String("accusamus"),
                                                ProjectID: sdk.String("totam"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("ab"),
                                                    Kind: sdk.String("sint"),
                                                    Name: sdk.String("Joy Kessler"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("debitis"),
                                                    Kind: sdk.String("vel"),
                                                    Name: sdk.String("Dana Hirthe"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("reprehenderit"),
                                                    Kind: sdk.String("distinctio"),
                                                    Name: sdk.String("Angela Lebsack II"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("saepe"),
                                                    Kind: sdk.String("neque"),
                                                    Name: sdk.String("Tom Lueilwitz"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(668577),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("delectus"),
                                        TimestampValue: sdk.String("velit"),
                                    },
                                    "vitae": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("similique"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(748.95),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9979.95),
                                            Longitude: sdk.Float64(3632.14),
                                        },
                                        IntegerValue: sdk.String("doloribus"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("possimus"),
                                                NamespaceID: sdk.String("unde"),
                                                ProjectID: sdk.String("incidunt"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("ipsam"),
                                                    Kind: sdk.String("cupiditate"),
                                                    Name: sdk.String("John Predovic"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(956124),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("consequuntur"),
                                        TimestampValue: sdk.String("veniam"),
                                    },
                                    "debitis": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("sint"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(2808.59),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2567.68),
                                            Longitude: sdk.Float64(9478.22),
                                        },
                                        IntegerValue: sdk.String("adipisci"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("libero"),
                                                NamespaceID: sdk.String("in"),
                                                ProjectID: sdk.String("minima"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("minus"),
                                                    Kind: sdk.String("ab"),
                                                    Name: sdk.String("May Huel"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("ducimus"),
                                                    Kind: sdk.String("fuga"),
                                                    Name: sdk.String("Julie Davis"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(276650),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("adipisci"),
                                        TimestampValue: sdk.String("praesentium"),
                                    },
                                    "dolor": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("expedita"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7064.11),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7696.34),
                                            Longitude: sdk.Float64(245.77),
                                        },
                                        IntegerValue: sdk.String("nemo"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("culpa"),
                                                NamespaceID: sdk.String("consequuntur"),
                                                ProjectID: sdk.String("amet"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("modi"),
                                                    Kind: sdk.String("veniam"),
                                                    Name: sdk.String("Bradford Wilkinson"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("doloribus"),
                                                    Kind: sdk.String("assumenda"),
                                                    Name: sdk.String("Juan Abshire DDS"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("necessitatibus"),
                                                    Kind: sdk.String("quia"),
                                                    Name: sdk.String("Kristin Mertz"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(103578),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("accusantium"),
                                        TimestampValue: sdk.String("perferendis"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(828.76),
                                Longitude: sdk.Float64(5905.85),
                            },
                            IntegerValue: sdk.String("cumque"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("iure"),
                                    NamespaceID: sdk.String("quibusdam"),
                                    ProjectID: sdk.String("quod"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("recusandae"),
                                        Kind: sdk.String("velit"),
                                        Name: sdk.String("Stella Howell"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("natus"),
                                        Kind: sdk.String("provident"),
                                        Name: sdk.String("Cary Prosacco"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(389548),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("unde"),
                            TimestampValue: sdk.String("modi"),
                        },
                    },
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("perspiciatis"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("cum"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1355.48),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("libero"),
                                        NamespaceID: sdk.String("nam"),
                                        ProjectID: sdk.String("incidunt"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quod"),
                                            Kind: sdk.String("id"),
                                            Name: sdk.String("Ben Satterfield"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("nemo"),
                                            Kind: sdk.String("illum"),
                                            Name: sdk.String("Melvin O'Conner"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("distinctio"),
                                            Kind: sdk.String("pariatur"),
                                            Name: sdk.String("Ernestine Padberg"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("incidunt"),
                                            Kind: sdk.String("maxime"),
                                            Name: sdk.String("Mary Hoeger"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "est": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("labore"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7773.78),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(194.62),
                                            Longitude: sdk.Float64(1435.28),
                                        },
                                        IntegerValue: sdk.String("aliquid"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("magnam"),
                                                NamespaceID: sdk.String("quaerat"),
                                                ProjectID: sdk.String("eligendi"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("nostrum"),
                                                    Kind: sdk.String("officiis"),
                                                    Name: sdk.String("Drew Mraz"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("nostrum"),
                                                    Kind: sdk.String("esse"),
                                                    Name: sdk.String("Grant Schultz MD"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quod"),
                                                    Kind: sdk.String("laboriosam"),
                                                    Name: sdk.String("Sandra Schumm"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("consequatur"),
                                                    Kind: sdk.String("eaque"),
                                                    Name: sdk.String("Marguerite Sawayn Sr."),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(885797),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("sed"),
                                        TimestampValue: sdk.String("necessitatibus"),
                                    },
                                    "impedit": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("excepturi"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(9509.56),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9830),
                                            Longitude: sdk.Float64(5144.62),
                                        },
                                        IntegerValue: sdk.String("maiores"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("alias"),
                                                NamespaceID: sdk.String("asperiores"),
                                                ProjectID: sdk.String("rem"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("suscipit"),
                                                    Kind: sdk.String("earum"),
                                                    Name: sdk.String("Lee Gibson"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(757407),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quasi"),
                                        TimestampValue: sdk.String("neque"),
                                    },
                                    "vero": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("accusantium"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1858.16),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7712.41),
                                            Longitude: sdk.Float64(1047.36),
                                        },
                                        IntegerValue: sdk.String("incidunt"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("dicta"),
                                                NamespaceID: sdk.String("odit"),
                                                ProjectID: sdk.String("corporis"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("alias"),
                                                    Kind: sdk.String("error"),
                                                    Name: sdk.String("Carol O'Reilly"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quas"),
                                                    Kind: sdk.String("veritatis"),
                                                    Name: sdk.String("Amy Murray"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("magni"),
                                                    Kind: sdk.String("deserunt"),
                                                    Name: sdk.String("Alejandro Corwin"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(337841),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("cupiditate"),
                                        TimestampValue: sdk.String("aliquam"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(5692.87),
                                Longitude: sdk.Float64(9804.1),
                            },
                            IntegerValue: sdk.String("laudantium"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("velit"),
                                    NamespaceID: sdk.String("reiciendis"),
                                    ProjectID: sdk.String("amet"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("ipsa"),
                                        Kind: sdk.String("quisquam"),
                                        Name: sdk.String("Morris Kreiger"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("a"),
                                        Kind: sdk.String("nobis"),
                                        Name: sdk.String("Steven Carter"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(908734),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("porro"),
                            TimestampValue: sdk.String("tempore"),
                        },
                    },
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("quidem"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("voluptates"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1454.35),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("eius"),
                                        NamespaceID: sdk.String("sequi"),
                                        ProjectID: sdk.String("eligendi"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("esse"),
                                            Kind: sdk.String("blanditiis"),
                                            Name: sdk.String("Jerald Wilkinson"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("itaque"),
                                            Kind: sdk.String("nulla"),
                                            Name: sdk.String("Lewis Franecki"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("officia"),
                                            Kind: sdk.String("saepe"),
                                            Name: sdk.String("Delia Barton"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quasi"),
                                            Kind: sdk.String("blanditiis"),
                                            Name: sdk.String("Adrienne Daugherty"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "quia": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("reprehenderit"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8007.99),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(5524.4),
                                            Longitude: sdk.Float64(5488.46),
                                        },
                                        IntegerValue: sdk.String("amet"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("molestiae"),
                                                NamespaceID: sdk.String("amet"),
                                                ProjectID: sdk.String("laborum"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("perferendis"),
                                                    Kind: sdk.String("necessitatibus"),
                                                    Name: sdk.String("Dr. Felicia Greenholt"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("odit"),
                                                    Kind: sdk.String("earum"),
                                                    Name: sdk.String("Brittany Bechtelar"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(469994),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ad"),
                                        TimestampValue: sdk.String("nisi"),
                                    },
                                    "tenetur": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quibusdam"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3664.8),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3827.64),
                                            Longitude: sdk.Float64(8664.59),
                                        },
                                        IntegerValue: sdk.String("sit"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("quidem"),
                                                NamespaceID: sdk.String("repellendus"),
                                                ProjectID: sdk.String("perferendis"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("sapiente"),
                                                    Kind: sdk.String("sed"),
                                                    Name: sdk.String("Mrs. Jerald Waelchi"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("harum"),
                                                    Kind: sdk.String("dolore"),
                                                    Name: sdk.String("Elmer Champlin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("dolorum"),
                                                    Kind: sdk.String("velit"),
                                                    Name: sdk.String("Dwayne Mraz MD"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(884361),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("harum"),
                                        TimestampValue: sdk.String("cumque"),
                                    },
                                    "doloremque": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("corrupti"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(537.33),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(6431.99),
                                            Longitude: sdk.Float64(3962.23),
                                        },
                                        IntegerValue: sdk.String("excepturi"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("magni"),
                                                NamespaceID: sdk.String("tempora"),
                                                ProjectID: sdk.String("possimus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("rerum"),
                                                    Kind: sdk.String("sed"),
                                                    Name: sdk.String("Earnest Wisoky"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(550338),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("asperiores"),
                                        TimestampValue: sdk.String("voluptatum"),
                                    },
                                    "iste": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("accusantium"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(758.5),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(142.51),
                                            Longitude: sdk.Float64(9840.31),
                                        },
                                        IntegerValue: sdk.String("nostrum"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("at"),
                                                NamespaceID: sdk.String("possimus"),
                                                ProjectID: sdk.String("neque"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("vel"),
                                                    Kind: sdk.String("sapiente"),
                                                    Name: sdk.String("Mrs. Eric Lueilwitz"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("ad"),
                                                    Kind: sdk.String("aliquam"),
                                                    Name: sdk.String("Clifton Crooks III"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("laudantium"),
                                                    Kind: sdk.String("est"),
                                                    Name: sdk.String("Vicki Feeney"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("voluptatum"),
                                                    Kind: sdk.String("ducimus"),
                                                    Name: sdk.String("Kate Goldner"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(196374),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("voluptatum"),
                                        TimestampValue: sdk.String("sit"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(7031.89),
                                Longitude: sdk.Float64(841.78),
                            },
                            IntegerValue: sdk.String("tenetur"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("autem"),
                                    NamespaceID: sdk.String("quidem"),
                                    ProjectID: sdk.String("totam"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("deserunt"),
                                        Kind: sdk.String("magni"),
                                        Name: sdk.String("Melanie Okuneva MD"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("aut"),
                                        Kind: sdk.String("dolore"),
                                        Name: sdk.String("Jay Morar"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("placeat"),
                                        Kind: sdk.String("voluptas"),
                                        Name: sdk.String("Austin Blanda MD"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("ipsam"),
                                        Kind: sdk.String("quasi"),
                                        Name: sdk.String("Keith Pfeffer"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(105372),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("cumque"),
                            TimestampValue: sdk.String("delectus"),
                        },
                    },
                },
                QueryString: sdk.String("labore"),
            },
            PartitionID: &shared.PartitionID{
                DatabaseID: sdk.String("expedita"),
                NamespaceID: sdk.String("corrupti"),
                ProjectID: sdk.String("rem"),
            },
            ReadOptions: &shared.ReadOptions{
                NewTransaction: &shared.TransactionOptions{
                    ReadOnly: &shared.ReadOnly{
                        ReadTime: sdk.String("atque"),
                    },
                    ReadWrite: &shared.ReadWrite{
                        PreviousTransaction: sdk.String("officiis"),
                    },
                },
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumEventual.ToPointer(),
                ReadTime: sdk.String("pariatur"),
                Transaction: sdk.String("sapiente"),
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("minus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quo"),
    }, operations.DatastoreProjectsRunAggregationQuerySecurity{
        Option1: &operations.DatastoreProjectsRunAggregationQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunAggregationQueryResponse != nil {
        // handle response
    }
}
```

## DatastoreProjectsRunQuery

Queries for entities.

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
    res, err := s.Projects.DatastoreProjectsRunQuery(ctx, operations.DatastoreProjectsRunQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunQueryRequest: &shared.RunQueryRequest{
            DatabaseID: sdk.String("hic"),
            GqlQuery: &shared.GqlQuery{
                AllowLiterals: sdk.Bool(false),
                NamedBindings: map[string]shared.GqlQueryParameter{
                    "accusantium": shared.GqlQueryParameter{
                        Cursor: sdk.String("soluta"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("pariatur"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7562.87),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("recusandae"),
                                        NamespaceID: sdk.String("veritatis"),
                                        ProjectID: sdk.String("aut"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("iusto"),
                                            Kind: sdk.String("dolor"),
                                            Name: sdk.String("Troy Dach Jr."),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("eum"),
                                            Kind: sdk.String("at"),
                                            Name: sdk.String("Melinda Lemke"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("atque"),
                                            Kind: sdk.String("rerum"),
                                            Name: sdk.String("Dave Hegmann MD"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "rem": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5561.33),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(8112.59),
                                            Longitude: sdk.Float64(3180.28),
                                        },
                                        IntegerValue: sdk.String("labore"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("sapiente"),
                                                NamespaceID: sdk.String("saepe"),
                                                ProjectID: sdk.String("delectus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("natus"),
                                                    Kind: sdk.String("cumque"),
                                                    Name: sdk.String("Jon Yost"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("mollitia"),
                                                    Kind: sdk.String("cumque"),
                                                    Name: sdk.String("Darlene Keeling"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("nesciunt"),
                                                    Kind: sdk.String("sit"),
                                                    Name: sdk.String("Bethany Zboncak"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(506250),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("dicta"),
                                        TimestampValue: sdk.String("fugit"),
                                    },
                                    "sit": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("necessitatibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1489.75),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(5371.7),
                                            Longitude: sdk.Float64(1227.44),
                                        },
                                        IntegerValue: sdk.String("nesciunt"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("delectus"),
                                                NamespaceID: sdk.String("laborum"),
                                                ProjectID: sdk.String("aliquam"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("modi"),
                                                    Kind: sdk.String("sunt"),
                                                    Name: sdk.String("Dr. Herbert Legros"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("repellat"),
                                                    Kind: sdk.String("aspernatur"),
                                                    Name: sdk.String("Annie Conroy"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("eaque"),
                                                    Kind: sdk.String("dolorem"),
                                                    Name: sdk.String("Sarah Collier"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(73574),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("magnam"),
                                        TimestampValue: sdk.String("delectus"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(2550.64),
                                Longitude: sdk.Float64(7602.79),
                            },
                            IntegerValue: sdk.String("nobis"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("ex"),
                                    NamespaceID: sdk.String("repellat"),
                                    ProjectID: sdk.String("quae"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("expedita"),
                                        Kind: sdk.String("hic"),
                                        Name: sdk.String("Miss Gilbert Corwin"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("animi"),
                                        Kind: sdk.String("dolore"),
                                        Name: sdk.String("Julio Koch"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("esse"),
                                        Kind: sdk.String("eveniet"),
                                        Name: sdk.String("Melvin Torp"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(930111),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("dignissimos"),
                            TimestampValue: sdk.String("ipsam"),
                        },
                    },
                    "explicabo": shared.GqlQueryParameter{
                        Cursor: sdk.String("impedit"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("quis"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7044.02),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("ipsum"),
                                        NamespaceID: sdk.String("ut"),
                                        ProjectID: sdk.String("quaerat"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("praesentium"),
                                            Kind: sdk.String("eveniet"),
                                            Name: sdk.String("Kristy Renner DDS"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "temporibus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("iusto"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3156.71),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(8811.89),
                                            Longitude: sdk.Float64(444.67),
                                        },
                                        IntegerValue: sdk.String("voluptates"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("laudantium"),
                                                NamespaceID: sdk.String("tempora"),
                                                ProjectID: sdk.String("quae"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("illum"),
                                                    Kind: sdk.String("rem"),
                                                    Name: sdk.String("Alfredo Gleason II"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("labore"),
                                                    Kind: sdk.String("maiores"),
                                                    Name: sdk.String("Kerry Altenwerth"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("facere"),
                                                    Kind: sdk.String("quisquam"),
                                                    Name: sdk.String("Jay Pagac"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(970411),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("sequi"),
                                        TimestampValue: sdk.String("porro"),
                                    },
                                    "laborum": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quibusdam"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(6076.24),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(162.52),
                                            Longitude: sdk.Float64(3699.41),
                                        },
                                        IntegerValue: sdk.String("officia"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("cupiditate"),
                                                NamespaceID: sdk.String("reprehenderit"),
                                                ProjectID: sdk.String("quia"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("accusantium"),
                                                    Kind: sdk.String("ad"),
                                                    Name: sdk.String("Nellie Cremin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("odit"),
                                                    Kind: sdk.String("iusto"),
                                                    Name: sdk.String("Jesse Simonis V"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("dolore"),
                                                    Kind: sdk.String("esse"),
                                                    Name: sdk.String("Beulah Will"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("aliquam"),
                                                    Kind: sdk.String("delectus"),
                                                    Name: sdk.String("Bob Kub"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(374414),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("non"),
                                        TimestampValue: sdk.String("ullam"),
                                    },
                                    "laborum": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("doloribus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(6578.62),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9259.94),
                                            Longitude: sdk.Float64(3594.53),
                                        },
                                        IntegerValue: sdk.String("non"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("necessitatibus"),
                                                NamespaceID: sdk.String("distinctio"),
                                                ProjectID: sdk.String("maiores"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("voluptatem"),
                                                    Kind: sdk.String("optio"),
                                                    Name: sdk.String("Ashley Bruen Sr."),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("amet"),
                                                    Kind: sdk.String("rerum"),
                                                    Name: sdk.String("Audrey Smith"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(390854),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("dignissimos"),
                                        TimestampValue: sdk.String("reiciendis"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(9296.19),
                                Longitude: sdk.Float64(1147.67),
                            },
                            IntegerValue: sdk.String("est"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("accusantium"),
                                    NamespaceID: sdk.String("quod"),
                                    ProjectID: sdk.String("minus"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("possimus"),
                                        Kind: sdk.String("maiores"),
                                        Name: sdk.String("Miss Daisy Willms"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("provident"),
                                        Kind: sdk.String("ex"),
                                        Name: sdk.String("Austin Abbott"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("commodi"),
                                        Kind: sdk.String("labore"),
                                        Name: sdk.String("Mrs. Arnold Schamberger"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(979271),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("distinctio"),
                            TimestampValue: sdk.String("mollitia"),
                        },
                    },
                    "impedit": shared.GqlQueryParameter{
                        Cursor: sdk.String("accusamus"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("quas"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(5014.62),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("cum"),
                                        NamespaceID: sdk.String("dicta"),
                                        ProjectID: sdk.String("impedit"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("eveniet"),
                                            Kind: sdk.String("repudiandae"),
                                            Name: sdk.String("Pat Macejkovic"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("eligendi"),
                                            Kind: sdk.String("recusandae"),
                                            Name: sdk.String("Heather Bogisich"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "quidem": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quo"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4909.66),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7916.15),
                                            Longitude: sdk.Float64(7175.6),
                                        },
                                        IntegerValue: sdk.String("possimus"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("cum"),
                                                NamespaceID: sdk.String("suscipit"),
                                                ProjectID: sdk.String("saepe"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quod"),
                                                    Kind: sdk.String("nihil"),
                                                    Name: sdk.String("Tracy Kuphal"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("deserunt"),
                                                    Kind: sdk.String("odit"),
                                                    Name: sdk.String("Annie Breitenberg"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("magnam"),
                                                    Kind: sdk.String("odio"),
                                                    Name: sdk.String("Mrs. Myron McGlynn"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("illum"),
                                                    Kind: sdk.String("fugit"),
                                                    Name: sdk.String("Wilbur Zulauf"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(845086),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("commodi"),
                                        TimestampValue: sdk.String("esse"),
                                    },
                                    "explicabo": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("temporibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7625.25),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(597.57),
                                            Longitude: sdk.Float64(9786.55),
                                        },
                                        IntegerValue: sdk.String("exercitationem"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("culpa"),
                                                NamespaceID: sdk.String("repudiandae"),
                                                ProjectID: sdk.String("aspernatur"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("neque"),
                                                    Kind: sdk.String("officia"),
                                                    Name: sdk.String("Mr. Maryann Kunze"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("iusto"),
                                                    Kind: sdk.String("corrupti"),
                                                    Name: sdk.String("Mrs. Dolores Kertzmann"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("sapiente"),
                                                    Kind: sdk.String("corporis"),
                                                    Name: sdk.String("Elmer Schaefer"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("nam"),
                                                    Kind: sdk.String("nemo"),
                                                    Name: sdk.String("Holly Harber V"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(40874),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("fugiat"),
                                        TimestampValue: sdk.String("numquam"),
                                    },
                                    "doloremque": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("nobis"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(6283.14),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7837.64),
                                            Longitude: sdk.Float64(7697.89),
                                        },
                                        IntegerValue: sdk.String("nisi"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("cumque"),
                                                NamespaceID: sdk.String("soluta"),
                                                ProjectID: sdk.String("fugiat"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("nam"),
                                                    Kind: sdk.String("enim"),
                                                    Name: sdk.String("Jeffery Tromp"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("voluptatem"),
                                                    Kind: sdk.String("provident"),
                                                    Name: sdk.String("Carol Gutkowski"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(131576),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("vel"),
                                        TimestampValue: sdk.String("cum"),
                                    },
                                    "id": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("fugit"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3730.54),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3434.54),
                                            Longitude: sdk.Float64(1968.52),
                                        },
                                        IntegerValue: sdk.String("voluptatum"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("quasi"),
                                                NamespaceID: sdk.String("error"),
                                                ProjectID: sdk.String("nobis"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("voluptate"),
                                                    Kind: sdk.String("eius"),
                                                    Name: sdk.String("Jason Volkman"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("voluptatem"),
                                                    Kind: sdk.String("repudiandae"),
                                                    Name: sdk.String("Terri Davis"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(943063),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("maiores"),
                                        TimestampValue: sdk.String("asperiores"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(4209.85),
                                Longitude: sdk.Float64(1988.92),
                            },
                            IntegerValue: sdk.String("cupiditate"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("animi"),
                                    NamespaceID: sdk.String("provident"),
                                    ProjectID: sdk.String("beatae"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("mollitia"),
                                        Kind: sdk.String("nam"),
                                        Name: sdk.String("Salvatore Paucek"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(146742),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("suscipit"),
                            TimestampValue: sdk.String("voluptate"),
                        },
                    },
                    "nisi": shared.GqlQueryParameter{
                        Cursor: sdk.String("aliquid"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("laboriosam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8815.68),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("ab"),
                                        NamespaceID: sdk.String("itaque"),
                                        ProjectID: sdk.String("quisquam"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("alias"),
                                            Kind: sdk.String("qui"),
                                            Name: sdk.String("Evelyn Predovic"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "illum": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("unde"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(6294.61),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7532.61),
                                            Longitude: sdk.Float64(7321.42),
                                        },
                                        IntegerValue: sdk.String("amet"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("debitis"),
                                                NamespaceID: sdk.String("nobis"),
                                                ProjectID: sdk.String("asperiores"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("id"),
                                                    Kind: sdk.String("atque"),
                                                    Name: sdk.String("Mark Satterfield"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("provident"),
                                                    Kind: sdk.String("vero"),
                                                    Name: sdk.String("Mr. Anthony Emmerich"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("perspiciatis"),
                                                    Kind: sdk.String("quam"),
                                                    Name: sdk.String("Dr. Luke Jaskolski"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("veritatis"),
                                                    Kind: sdk.String("quod"),
                                                    Name: sdk.String("Clarence Barton"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(519985),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("tenetur"),
                                        TimestampValue: sdk.String("voluptate"),
                                    },
                                    "quam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("vitae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(9605.23),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9686.89),
                                            Longitude: sdk.Float64(7989.53),
                                        },
                                        IntegerValue: sdk.String("voluptate"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("inventore"),
                                                NamespaceID: sdk.String("facere"),
                                                ProjectID: sdk.String("maxime"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("ab"),
                                                    Kind: sdk.String("ex"),
                                                    Name: sdk.String("Ebony Cremin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("eligendi"),
                                                    Kind: sdk.String("voluptatum"),
                                                    Name: sdk.String("Janie Monahan"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("sapiente"),
                                                    Kind: sdk.String("velit"),
                                                    Name: sdk.String("Ellen Ruecker"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(945320),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("molestias"),
                                        TimestampValue: sdk.String("ipsam"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(4562.22),
                                Longitude: sdk.Float64(6757.55),
                            },
                            IntegerValue: sdk.String("perspiciatis"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("voluptates"),
                                    NamespaceID: sdk.String("eum"),
                                    ProjectID: sdk.String("quasi"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("odio"),
                                        Kind: sdk.String("commodi"),
                                        Name: sdk.String("Marc O'Connell Sr."),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("nulla"),
                                        Kind: sdk.String("magni"),
                                        Name: sdk.String("Clint Wiegand"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("ut"),
                                        Kind: sdk.String("facere"),
                                        Name: sdk.String("Ora Walter"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(491380),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("iste"),
                            TimestampValue: sdk.String("provident"),
                        },
                    },
                },
                PositionalBindings: []shared.GqlQueryParameter{
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("sint"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("eaque"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4312.58),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("laboriosam"),
                                        NamespaceID: sdk.String("laborum"),
                                        ProjectID: sdk.String("autem"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("explicabo"),
                                            Kind: sdk.String("fugiat"),
                                            Name: sdk.String("Donna Abshire"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quis"),
                                            Kind: sdk.String("velit"),
                                            Name: sdk.String("Billie Schmitt"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("doloremque"),
                                            Kind: sdk.String("totam"),
                                            Name: sdk.String("Ebony Orn PhD"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("iste"),
                                            Kind: sdk.String("dicta"),
                                            Name: sdk.String("Kathryn Runolfsdottir"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "sunt": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("beatae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4202.33),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4947.65),
                                            Longitude: sdk.Float64(7284.74),
                                        },
                                        IntegerValue: sdk.String("molestias"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("necessitatibus"),
                                                NamespaceID: sdk.String("ipsum"),
                                                ProjectID: sdk.String("impedit"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("illum"),
                                                    Kind: sdk.String("distinctio"),
                                                    Name: sdk.String("Ms. Ethel Hagenes"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("commodi"),
                                                    Kind: sdk.String("quibusdam"),
                                                    Name: sdk.String("Loretta Hackett"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("assumenda"),
                                                    Kind: sdk.String("dolore"),
                                                    Name: sdk.String("Ms. Samantha Metz"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(116867),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quia"),
                                        TimestampValue: sdk.String("commodi"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(2041.44),
                                Longitude: sdk.Float64(8436.59),
                            },
                            IntegerValue: sdk.String("numquam"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("rem"),
                                    NamespaceID: sdk.String("officiis"),
                                    ProjectID: sdk.String("omnis"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("corporis"),
                                        Kind: sdk.String("quod"),
                                        Name: sdk.String("Nichole Marks"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(115561),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("sapiente"),
                            TimestampValue: sdk.String("ipsum"),
                        },
                    },
                },
                QueryString: sdk.String("consequatur"),
            },
            PartitionID: &shared.PartitionID{
                DatabaseID: sdk.String("soluta"),
                NamespaceID: sdk.String("necessitatibus"),
                ProjectID: sdk.String("sequi"),
            },
            Query: &shared.Query{
                DistinctOn: []shared.PropertyReference{
                    shared.PropertyReference{
                        Name: sdk.String("Mr. Josephine Cummerata"),
                    },
                    shared.PropertyReference{
                        Name: sdk.String("Anne Brekke"),
                    },
                    shared.PropertyReference{
                        Name: sdk.String("Ms. Kristin Hane"),
                    },
                    shared.PropertyReference{
                        Name: sdk.String("Ann Leffler PhD"),
                    },
                },
                EndCursor: sdk.String("provident"),
                Filter: &shared.Filter{
                    CompositeFilter: &shared.CompositeFilter{
                        Filters: []shared.Filter{
                            shared.Filter{},
                            shared.Filter{},
                            shared.Filter{},
                            shared.Filter{},
                        },
                        Op: shared.CompositeFilterOpEnumOperatorUnspecified.ToPointer(),
                    },
                    PropertyFilter: &shared.PropertyFilter{
                        Op: shared.PropertyFilterOpEnumOperatorUnspecified.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Austin Oberbrunner I"),
                        },
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("optio"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2697.31),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        DatabaseID: sdk.String("debitis"),
                                        NamespaceID: sdk.String("cumque"),
                                        ProjectID: sdk.String("maxime"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("beatae"),
                                            Kind: sdk.String("id"),
                                            Name: sdk.String("Brandy Dicki"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "natus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("suscipit"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5123.7),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7034.07),
                                            Longitude: sdk.Float64(5146.09),
                                        },
                                        IntegerValue: sdk.String("ullam"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                DatabaseID: sdk.String("aut"),
                                                NamespaceID: sdk.String("quia"),
                                                ProjectID: sdk.String("officia"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("corporis"),
                                                    Kind: sdk.String("accusamus"),
                                                    Name: sdk.String("Miranda Koelpin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quisquam"),
                                                    Kind: sdk.String("praesentium"),
                                                    Name: sdk.String("Holly Torphy"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(29881),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("est"),
                                        TimestampValue: sdk.String("amet"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(842.11),
                                Longitude: sdk.Float64(6218.1),
                            },
                            IntegerValue: sdk.String("voluptatibus"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    DatabaseID: sdk.String("numquam"),
                                    NamespaceID: sdk.String("rerum"),
                                    ProjectID: sdk.String("dolorum"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("earum"),
                                        Kind: sdk.String("excepturi"),
                                        Name: sdk.String("Minnie Ryan"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("voluptatum"),
                                        Kind: sdk.String("aliquid"),
                                        Name: sdk.String("Shelley Rowe"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("magnam"),
                                        Kind: sdk.String("dolores"),
                                        Name: sdk.String("Natalie Kassulke"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("illo"),
                                        Kind: sdk.String("suscipit"),
                                        Name: sdk.String("Laurence Russel"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(913909),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("maiores"),
                            TimestampValue: sdk.String("nemo"),
                        },
                    },
                },
                Kind: []shared.KindExpression{
                    shared.KindExpression{
                        Name: sdk.String("Spencer Rath"),
                    },
                },
                Limit: sdk.Int(368599),
                Offset: sdk.Int(578081),
                Order: []shared.PropertyOrder{
                    shared.PropertyOrder{
                        Direction: shared.PropertyOrderDirectionEnumDescending.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Ryan Considine"),
                        },
                    },
                },
                Projection: []shared.Projection{
                    shared.Projection{
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Marty Beer"),
                        },
                    },
                    shared.Projection{
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Marguerite Windler"),
                        },
                    },
                    shared.Projection{
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Dr. Al MacGyver"),
                        },
                    },
                },
                StartCursor: sdk.String("incidunt"),
            },
            ReadOptions: &shared.ReadOptions{
                NewTransaction: &shared.TransactionOptions{
                    ReadOnly: &shared.ReadOnly{
                        ReadTime: sdk.String("numquam"),
                    },
                    ReadWrite: &shared.ReadWrite{
                        PreviousTransaction: sdk.String("corrupti"),
                    },
                },
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumStrong.ToPointer(),
                ReadTime: sdk.String("dolore"),
                Transaction: sdk.String("esse"),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "minima",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DatastoreProjectsRunQuerySecurity{
        Option1: &operations.DatastoreProjectsRunQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunQueryResponse != nil {
        // handle response
    }
}
```
