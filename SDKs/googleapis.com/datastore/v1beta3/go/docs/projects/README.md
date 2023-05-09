# Projects

### Available Operations

* [DatastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [DatastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [DatastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [DatastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
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
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("in"),
                        ProjectID: sdk.String("corporis"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("iure"),
                            Kind: sdk.String("saepe"),
                            Name: sdk.String("Roger Beier"),
                        },
                        shared.PathElement{
                            ID: sdk.String("mollitia"),
                            Kind: sdk.String("laborum"),
                            Name: sdk.String("Connie Herzog"),
                        },
                        shared.PathElement{
                            ID: sdk.String("enim"),
                            Kind: sdk.String("omnis"),
                            Name: sdk.String("Ms. Cathy Marks"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
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
                        NamespaceID: sdk.String("numquam"),
                        ProjectID: sdk.String("commodi"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("molestiae"),
                            Kind: sdk.String("velit"),
                            Name: sdk.String("Miss Eugene Hauck"),
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
            TransactionOptions: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: sdk.String("praesentium"),
                },
                ReadWrite: &shared.ReadWrite{
                    PreviousTransaction: sdk.String("voluptatibus"),
                },
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "reprehenderit",
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
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
            Mode: shared.CommitRequestModeEnumModeUnspecified.ToPointer(),
            Mutations: []shared.Mutation{
                shared.Mutation{
                    BaseVersion: sdk.String("dicta"),
                    Delete: &shared.Key{
                        PartitionID: &shared.PartitionID{
                            NamespaceID: sdk.String("harum"),
                            ProjectID: sdk.String("enim"),
                        },
                        Path: []shared.PathElement{
                            shared.PathElement{
                                ID: sdk.String("commodi"),
                                Kind: sdk.String("repudiandae"),
                                Name: sdk.String("Edna Pouros"),
                            },
                            shared.PathElement{
                                ID: sdk.String("pariatur"),
                                Kind: sdk.String("modi"),
                                Name: sdk.String("Dr. Jordan Von"),
                            },
                            shared.PathElement{
                                ID: sdk.String("veritatis"),
                                Kind: sdk.String("itaque"),
                                Name: sdk.String("Erin Altenwerth"),
                            },
                            shared.PathElement{
                                ID: sdk.String("explicabo"),
                                Kind: sdk.String("deserunt"),
                                Name: sdk.String("Marty Green"),
                            },
                        },
                    },
                    Insert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("aliquid"),
                                ProjectID: sdk.String("cupiditate"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("perferendis"),
                                    Kind: sdk.String("magni"),
                                    Name: sdk.String("Vernon Abshire"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("excepturi"),
                                    Kind: sdk.String("tempora"),
                                    Name: sdk.String("Geoffrey Green"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("non"),
                                    Kind: sdk.String("eligendi"),
                                    Name: sdk.String("Gilbert Medhurst"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "dolor": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("a"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6800.56),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(4471.25),
                                    Longitude: sdk.Float64(4491.98),
                                },
                                IntegerValue: sdk.String("illum"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("maiores"),
                                        ProjectID: sdk.String("rerum"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("magnam"),
                                            Kind: sdk.String("cumque"),
                                            Name: sdk.String("Nathaniel Hyatt"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(249796),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("occaecati"),
                                TimestampValue: sdk.String("enim"),
                            },
                            "accusamus": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("quidem"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5884.65),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(7252.55),
                                    Longitude: sdk.Float64(6596.69),
                                },
                                IntegerValue: sdk.String("blanditiis"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("deleniti"),
                                        ProjectID: sdk.String("sapiente"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("deserunt"),
                                            Kind: sdk.String("nisi"),
                                            Name: sdk.String("Ada Moen IV"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(301575),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("distinctio"),
                                TimestampValue: sdk.String("id"),
                            },
                            "labore": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("suscipit"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6180.16),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(7491.7),
                                    Longitude: sdk.Float64(4287.69),
                                },
                                IntegerValue: sdk.String("vero"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("aspernatur"),
                                        ProjectID: sdk.String("architecto"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("et"),
                                            Kind: sdk.String("excepturi"),
                                            Name: sdk.String("Ramona Lueilwitz MD"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("reiciendis"),
                                            Kind: sdk.String("mollitia"),
                                            Name: sdk.String("Natalie Ernser"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(367562),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("quasi"),
                                TimestampValue: sdk.String("iure"),
                            },
                        },
                    },
                    Update: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("doloribus"),
                                ProjectID: sdk.String("debitis"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("maxime"),
                                    Kind: sdk.String("deleniti"),
                                    Name: sdk.String("Dr. Arnold Bradtke"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("expedita"),
                                    Kind: sdk.String("nihil"),
                                    Name: sdk.String("Marty Cormier"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "consequuntur": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("natus"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1668.47),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(1238.2),
                                    Longitude: sdk.Float64(7790.51),
                                },
                                IntegerValue: sdk.String("illum"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("pariatur"),
                                        ProjectID: sdk.String("maxime"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("excepturi"),
                                            Kind: sdk.String("odit"),
                                            Name: sdk.String("Donna Bernhard"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("ipsam"),
                                            Kind: sdk.String("voluptate"),
                                            Name: sdk.String("Candice Beatty"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(975522),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("perferendis"),
                                TimestampValue: sdk.String("fugiat"),
                            },
                        },
                    },
                    UpdateTime: sdk.String("amet"),
                    Upsert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("aut"),
                                ProjectID: sdk.String("cumque"),
                            },
                            Path: []shared.PathElement{
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
                            },
                        },
                        Properties: map[string]shared.Value{
                            "dolor": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("nostrum"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9441.2),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(9280.82),
                                    Longitude: sdk.Float64(6082.53),
                                },
                                IntegerValue: sdk.String("facilis"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("perspiciatis"),
                                        ProjectID: sdk.String("voluptatem"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("consequuntur"),
                                            Kind: sdk.String("blanditiis"),
                                            Name: sdk.String("Gary Mayert"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("asperiores"),
                                            Kind: sdk.String("earum"),
                                            Name: sdk.String("Sheryl Parisian"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("provident"),
                                            Kind: sdk.String("nobis"),
                                            Name: sdk.String("Toby Hahn"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("dolorem"),
                                            Kind: sdk.String("dolorem"),
                                            Name: sdk.String("Norma Erdman"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(739551),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("voluptate"),
                                TimestampValue: sdk.String("dignissimos"),
                            },
                            "reiciendis": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("dolorum"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2543.56),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(852.95),
                                    Longitude: sdk.Float64(580.29),
                                },
                                IntegerValue: sdk.String("ipsa"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("iure"),
                                        ProjectID: sdk.String("odio"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("accusamus"),
                                            Kind: sdk.String("quidem"),
                                            Name: sdk.String("Hector Mosciski"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("sit"),
                                            Kind: sdk.String("fugiat"),
                                            Name: sdk.String("Latoya Parisian"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(677082),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("deleniti"),
                                TimestampValue: sdk.String("omnis"),
                            },
                        },
                    },
                },
                shared.Mutation{
                    BaseVersion: sdk.String("necessitatibus"),
                    Delete: &shared.Key{
                        PartitionID: &shared.PartitionID{
                            NamespaceID: sdk.String("distinctio"),
                            ProjectID: sdk.String("asperiores"),
                        },
                        Path: []shared.PathElement{
                            shared.PathElement{
                                ID: sdk.String("ipsum"),
                                Kind: sdk.String("voluptate"),
                                Name: sdk.String("Elbert Gislason I"),
                            },
                            shared.PathElement{
                                ID: sdk.String("optio"),
                                Kind: sdk.String("accusamus"),
                                Name: sdk.String("Jenna Hoppe"),
                            },
                        },
                    },
                    Insert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("minima"),
                                ProjectID: sdk.String("repellendus"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("similique"),
                                    Kind: sdk.String("alias"),
                                    Name: sdk.String("Alex Goodwin"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("officiis"),
                                    Kind: sdk.String("qui"),
                                    Name: sdk.String("Randal Klocko"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("ipsum"),
                                    Kind: sdk.String("quisquam"),
                                    Name: sdk.String("Marvin Renner"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "dolorem": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("totam"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4717.52),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(256.62),
                                    Longitude: sdk.Float64(7115.84),
                                },
                                IntegerValue: sdk.String("neque"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("sed"),
                                        ProjectID: sdk.String("vel"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("voluptas"),
                                            Kind: sdk.String("deserunt"),
                                            Name: sdk.String("Tracy Gottlieb"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("maxime"),
                                            Kind: sdk.String("pariatur"),
                                            Name: sdk.String("Keith Padberg"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("aspernatur"),
                                            Kind: sdk.String("dolores"),
                                            Name: sdk.String("Cesar Hyatt"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(840429),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("qui"),
                                TimestampValue: sdk.String("neque"),
                            },
                            "fugit": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("odio"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1248.33),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(3556.13),
                                    Longitude: sdk.Float64(7220.81),
                                },
                                IntegerValue: sdk.String("hic"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("voluptatem"),
                                        ProjectID: sdk.String("cumque"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("nobis"),
                                            Kind: sdk.String("et"),
                                            Name: sdk.String("Dale Boehm"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("tempore"),
                                            Kind: sdk.String("cupiditate"),
                                            Name: sdk.String("Dixie Durgan"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("adipisci"),
                                            Kind: sdk.String("dolorum"),
                                            Name: sdk.String("Amy Armstrong"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(9240),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("est"),
                                TimestampValue: sdk.String("repellendus"),
                            },
                        },
                    },
                    Update: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("porro"),
                                ProjectID: sdk.String("doloribus"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("facilis"),
                                    Kind: sdk.String("cupiditate"),
                                    Name: sdk.String("Amy Langworth"),
                                },
                                shared.PathElement{
                                    ID: sdk.String("voluptatibus"),
                                    Kind: sdk.String("quisquam"),
                                    Name: sdk.String("Arturo Hauck"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "consectetur": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("tenetur"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4922.68),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(9413.78),
                                    Longitude: sdk.Float64(7155.61),
                                },
                                IntegerValue: sdk.String("quod"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("odio"),
                                        ProjectID: sdk.String("similique"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("vero"),
                                            Kind: sdk.String("ducimus"),
                                            Name: sdk.String("Rosemarie Stanton"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("impedit"),
                                            Kind: sdk.String("aut"),
                                            Name: sdk.String("Greg Stoltenberg"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("maiores"),
                                            Kind: sdk.String("doloribus"),
                                            Name: sdk.String("Miss Vicky Kuphal"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(368584),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("ea"),
                                TimestampValue: sdk.String("aspernatur"),
                            },
                            "vel": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("magnam"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1898.48),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(4011.32),
                                    Longitude: sdk.Float64(5113.19),
                                },
                                IntegerValue: sdk.String("dicta"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("dolor"),
                                        ProjectID: sdk.String("maiores"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("ex"),
                                            Kind: sdk.String("nulla"),
                                            Name: sdk.String("Boyd Heathcote"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(906556),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("ea"),
                                TimestampValue: sdk.String("impedit"),
                            },
                        },
                    },
                    UpdateTime: sdk.String("corporis"),
                    Upsert: &shared.Entity{
                        Key: &shared.Key{
                            PartitionID: &shared.PartitionID{
                                NamespaceID: sdk.String("veniam"),
                                ProjectID: sdk.String("aliquid"),
                            },
                            Path: []shared.PathElement{
                                shared.PathElement{
                                    ID: sdk.String("magnam"),
                                    Kind: sdk.String("ea"),
                                    Name: sdk.String("Glenn Walter"),
                                },
                            },
                        },
                        Properties: map[string]shared.Value{
                            "a": shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("aut"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(114.27),
                                EntityValue: &shared.Entity{},
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(5334.66),
                                    Longitude: sdk.Float64(7705.81),
                                },
                                IntegerValue: sdk.String("aliquam"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("fugit"),
                                        ProjectID: sdk.String("accusamus"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("non"),
                                            Kind: sdk.String("et"),
                                            Name: sdk.String("Neal Schroeder"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(420539),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("nobis"),
                                TimestampValue: sdk.String("quas"),
                            },
                        },
                    },
                },
            },
            Transaction: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "explicabo",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("molestiae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LookupRequest: &shared.LookupRequest{
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("eius"),
                        ProjectID: sdk.String("esse"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("rem"),
                            Kind: sdk.String("fuga"),
                            Name: sdk.String("Yvette Stehr"),
                        },
                        shared.PathElement{
                            ID: sdk.String("suscipit"),
                            Kind: sdk.String("assumenda"),
                            Name: sdk.String("Mr. Irma Schaefer"),
                        },
                    },
                },
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("quidem"),
                        ProjectID: sdk.String("neque"),
                    },
                    Path: []shared.PathElement{
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
                        shared.PathElement{
                            ID: sdk.String("esse"),
                            Kind: sdk.String("recusandae"),
                            Name: sdk.String("Lola Schmidt IV"),
                        },
                        shared.PathElement{
                            ID: sdk.String("totam"),
                            Kind: sdk.String("accusamus"),
                            Name: sdk.String("Courtney Mayert"),
                        },
                    },
                },
            },
            ReadOptions: &shared.ReadOptions{
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumReadConsistencyUnspecified.ToPointer(),
                ReadTime: sdk.String("deserunt"),
                Transaction: sdk.String("molestiae"),
            },
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("quas"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "deleniti",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("fuga"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReserveIdsRequest: &shared.ReserveIdsRequest{
            DatabaseID: sdk.String("atque"),
            Keys: []shared.Key{
                shared.Key{
                    PartitionID: &shared.PartitionID{
                        NamespaceID: sdk.String("minima"),
                        ProjectID: sdk.String("nisi"),
                    },
                    Path: []shared.PathElement{
                        shared.PathElement{
                            ID: sdk.String("sapiente"),
                            Kind: sdk.String("consequuntur"),
                            Name: sdk.String("Rose Turner"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quod",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("aliquid"),
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
            Transaction: sdk.String("saepe"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "distinctio",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("culpa"),
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
                        Alias: sdk.String("cumque"),
                        Count: &shared.Count{
                            UpTo: sdk.String("consequuntur"),
                        },
                    },
                },
                NestedQuery: &shared.Query{
                    DistinctOn: []shared.PropertyReference{
                        shared.PropertyReference{
                            Name: sdk.String("Calvin Williamson"),
                        },
                    },
                    EndCursor: sdk.String("blanditiis"),
                    Filter: &shared.Filter{
                        CompositeFilter: &shared.CompositeFilter{
                            Filters: []shared.Filter{
                                shared.Filter{},
                                shared.Filter{},
                                shared.Filter{},
                            },
                            Op: shared.CompositeFilterOpEnumOr.ToPointer(),
                        },
                        PropertyFilter: &shared.PropertyFilter{
                            Op: shared.PropertyFilterOpEnumHasAncestor.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Cory Boyle"),
                            },
                            Value: &shared.Value{
                                ArrayValue: &shared.ArrayValue{
                                    Values: []shared.Value{
                                        shared.Value{},
                                        shared.Value{},
                                        shared.Value{},
                                    },
                                },
                                BlobValue: sdk.String("pariatur"),
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8207.67),
                                EntityValue: &shared.Entity{
                                    Key: &shared.Key{
                                        PartitionID: &shared.PartitionID{
                                            NamespaceID: sdk.String("quia"),
                                            ProjectID: sdk.String("eveniet"),
                                        },
                                        Path: []shared.PathElement{
                                            shared.PathElement{
                                                ID: sdk.String("facere"),
                                                Kind: sdk.String("veritatis"),
                                                Name: sdk.String("Ann Murphy"),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("tenetur"),
                                                Kind: sdk.String("quae"),
                                                Name: sdk.String("Chester King"),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("illum"),
                                                Kind: sdk.String("soluta"),
                                                Name: sdk.String("Mrs. Michele Williamson"),
                                            },
                                            shared.PathElement{
                                                ID: sdk.String("ullam"),
                                                Kind: sdk.String("nisi"),
                                                Name: sdk.String("Nora Denesik"),
                                            },
                                        },
                                    },
                                    Properties: map[string]shared.Value{
                                        "itaque": shared.Value{
                                            ArrayValue: &shared.ArrayValue{
                                                Values: []shared.Value{
                                                    shared.Value{},
                                                    shared.Value{},
                                                    shared.Value{},
                                                },
                                            },
                                            BlobValue: sdk.String("architecto"),
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(6091.78),
                                            EntityValue: &shared.Entity{},
                                            ExcludeFromIndexes: sdk.Bool(false),
                                            GeoPointValue: &shared.LatLng{
                                                Latitude: sdk.Float64(9453.02),
                                                Longitude: sdk.Float64(984.78),
                                            },
                                            IntegerValue: sdk.String("at"),
                                            KeyValue: &shared.Key{
                                                PartitionID: &shared.PartitionID{
                                                    NamespaceID: sdk.String("et"),
                                                    ProjectID: sdk.String("voluptate"),
                                                },
                                                Path: []shared.PathElement{
                                                    shared.PathElement{
                                                        ID: sdk.String("minima"),
                                                        Kind: sdk.String("veritatis"),
                                                        Name: sdk.String("Sherry Morar IV"),
                                                    },
                                                },
                                            },
                                            Meaning: sdk.Int(15606),
                                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                            StringValue: sdk.String("laudantium"),
                                            TimestampValue: sdk.String("eum"),
                                        },
                                        "mollitia": shared.Value{
                                            ArrayValue: &shared.ArrayValue{
                                                Values: []shared.Value{
                                                    shared.Value{},
                                                },
                                            },
                                            BlobValue: sdk.String("corrupti"),
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(2519.41),
                                            EntityValue: &shared.Entity{},
                                            ExcludeFromIndexes: sdk.Bool(false),
                                            GeoPointValue: &shared.LatLng{
                                                Latitude: sdk.Float64(324.65),
                                                Longitude: sdk.Float64(2211.61),
                                            },
                                            IntegerValue: sdk.String("occaecati"),
                                            KeyValue: &shared.Key{
                                                PartitionID: &shared.PartitionID{
                                                    NamespaceID: sdk.String("numquam"),
                                                    ProjectID: sdk.String("impedit"),
                                                },
                                                Path: []shared.PathElement{
                                                    shared.PathElement{
                                                        ID: sdk.String("voluptas"),
                                                        Kind: sdk.String("aut"),
                                                        Name: sdk.String("Jean Wunsch"),
                                                    },
                                                },
                                            },
                                            Meaning: sdk.Int(974257),
                                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                            StringValue: sdk.String("voluptas"),
                                            TimestampValue: sdk.String("asperiores"),
                                        },
                                        "aperiam": shared.Value{
                                            ArrayValue: &shared.ArrayValue{
                                                Values: []shared.Value{
                                                    shared.Value{},
                                                    shared.Value{},
                                                },
                                            },
                                            BlobValue: sdk.String("quaerat"),
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(1629.54),
                                            EntityValue: &shared.Entity{},
                                            ExcludeFromIndexes: sdk.Bool(false),
                                            GeoPointValue: &shared.LatLng{
                                                Latitude: sdk.Float64(8315.2),
                                                Longitude: sdk.Float64(6387.62),
                                            },
                                            IntegerValue: sdk.String("maxime"),
                                            KeyValue: &shared.Key{
                                                PartitionID: &shared.PartitionID{
                                                    NamespaceID: sdk.String("dignissimos"),
                                                    ProjectID: sdk.String("officia"),
                                                },
                                                Path: []shared.PathElement{
                                                    shared.PathElement{
                                                        ID: sdk.String("nemo"),
                                                        Kind: sdk.String("quae"),
                                                        Name: sdk.String("Robyn Schmitt I"),
                                                    },
                                                    shared.PathElement{
                                                        ID: sdk.String("fuga"),
                                                        Kind: sdk.String("id"),
                                                        Name: sdk.String("Sheila Nader"),
                                                    },
                                                    shared.PathElement{
                                                        ID: sdk.String("totam"),
                                                        Kind: sdk.String("fugiat"),
                                                        Name: sdk.String("Dora Luettgen"),
                                                    },
                                                    shared.PathElement{
                                                        ID: sdk.String("possimus"),
                                                        Kind: sdk.String("facilis"),
                                                        Name: sdk.String("Leslie King"),
                                                    },
                                                },
                                            },
                                            Meaning: sdk.Int(828657),
                                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                            StringValue: sdk.String("nemo"),
                                            TimestampValue: sdk.String("recusandae"),
                                        },
                                    },
                                },
                                ExcludeFromIndexes: sdk.Bool(false),
                                GeoPointValue: &shared.LatLng{
                                    Latitude: sdk.Float64(3975.33),
                                    Longitude: sdk.Float64(460.07),
                                },
                                IntegerValue: sdk.String("cum"),
                                KeyValue: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("consectetur"),
                                        ProjectID: sdk.String("in"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("earum"),
                                            Kind: sdk.String("facere"),
                                            Name: sdk.String("Melba Homenick"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("saepe"),
                                            Kind: sdk.String("necessitatibus"),
                                            Name: sdk.String("Katherine Zemlak"),
                                        },
                                    },
                                },
                                Meaning: sdk.Int(228263),
                                NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                StringValue: sdk.String("beatae"),
                                TimestampValue: sdk.String("dignissimos"),
                            },
                        },
                    },
                    Kind: []shared.KindExpression{
                        shared.KindExpression{
                            Name: sdk.String("Glenn Herzog"),
                        },
                        shared.KindExpression{
                            Name: sdk.String("Dr. Silvia Renner"),
                        },
                        shared.KindExpression{
                            Name: sdk.String("Kelly Hoeger"),
                        },
                        shared.KindExpression{
                            Name: sdk.String("Gayle Parisian"),
                        },
                    },
                    Limit: sdk.Int(171853),
                    Offset: sdk.Int(503934),
                    Order: []shared.PropertyOrder{
                        shared.PropertyOrder{
                            Direction: shared.PropertyOrderDirectionEnumDirectionUnspecified.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Rochelle Smitham"),
                            },
                        },
                        shared.PropertyOrder{
                            Direction: shared.PropertyOrderDirectionEnumDescending.ToPointer(),
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Morris Weissnat"),
                            },
                        },
                    },
                    Projection: []shared.Projection{
                        shared.Projection{
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Jimmie Weimann"),
                            },
                        },
                        shared.Projection{
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Luz Cormier"),
                            },
                        },
                        shared.Projection{
                            Property: &shared.PropertyReference{
                                Name: sdk.String("Johnathan Klein V"),
                            },
                        },
                    },
                    StartCursor: sdk.String("dolore"),
                },
            },
            GqlQuery: &shared.GqlQuery{
                AllowLiterals: sdk.Bool(false),
                NamedBindings: map[string]shared.GqlQueryParameter{
                    "sed": shared.GqlQueryParameter{
                        Cursor: sdk.String("in"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("quidem"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1312.89),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("voluptas"),
                                        ProjectID: sdk.String("unde"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("suscipit"),
                                            Kind: sdk.String("sapiente"),
                                            Name: sdk.String("Ms. Gregory Wisoky"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "sed": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("eius"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8967.62),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2155.29),
                                            Longitude: sdk.Float64(4067.33),
                                        },
                                        IntegerValue: sdk.String("occaecati"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("quos"),
                                                ProjectID: sdk.String("voluptatibus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("tempora"),
                                                    Kind: sdk.String("voluptate"),
                                                    Name: sdk.String("Marc Balistreri"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("praesentium"),
                                                    Kind: sdk.String("facilis"),
                                                    Name: sdk.String("Amber Hintz"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(26522),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("nobis"),
                                        TimestampValue: sdk.String("error"),
                                    },
                                    "veniam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("recusandae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(9671.22),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(8623.19),
                                            Longitude: sdk.Float64(1685.76),
                                        },
                                        IntegerValue: sdk.String("aperiam"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
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
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(6390.28),
                                Longitude: sdk.Float64(6762.43),
                            },
                            IntegerValue: sdk.String("corrupti"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("accusamus"),
                                    ProjectID: sdk.String("tempora"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("fugit"),
                                        Kind: sdk.String("ut"),
                                        Name: sdk.String("George Nicolas"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("consequatur"),
                                        Kind: sdk.String("esse"),
                                        Name: sdk.String("Karen Lehner"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("corporis"),
                                        Kind: sdk.String("et"),
                                        Name: sdk.String("Ms. Ruben Cremin"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(906172),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("error"),
                            TimestampValue: sdk.String("consequatur"),
                        },
                    },
                    "incidunt": shared.GqlQueryParameter{
                        Cursor: sdk.String("reiciendis"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("harum"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1157.03),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("architecto"),
                                        ProjectID: sdk.String("occaecati"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quidem"),
                                            Kind: sdk.String("atque"),
                                            Name: sdk.String("Marco White I"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("deserunt"),
                                            Kind: sdk.String("voluptate"),
                                            Name: sdk.String("Boyd McKenzie"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "perferendis": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quidem"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4406.66),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(8136.79),
                                            Longitude: sdk.Float64(6850.92),
                                        },
                                        IntegerValue: sdk.String("praesentium"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("mollitia"),
                                                ProjectID: sdk.String("veniam"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quisquam"),
                                                    Kind: sdk.String("repudiandae"),
                                                    Name: sdk.String("Kay Kihn"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(383103),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quidem"),
                                        TimestampValue: sdk.String("maxime"),
                                    },
                                    "et": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("amet"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8268.25),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4103.01),
                                            Longitude: sdk.Float64(5391.18),
                                        },
                                        IntegerValue: sdk.String("error"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("officiis"),
                                                ProjectID: sdk.String("officiis"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("natus"),
                                                    Kind: sdk.String("minima"),
                                                    Name: sdk.String("Tara Wuckert"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("error"),
                                                    Kind: sdk.String("blanditiis"),
                                                    Name: sdk.String("Delia Littel DVM"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("dolorum"),
                                                    Kind: sdk.String("repellendus"),
                                                    Name: sdk.String("Lela Baumbach Jr."),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("beatae"),
                                                    Kind: sdk.String("dolores"),
                                                    Name: sdk.String("Vanessa Franecki"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(300029),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("saepe"),
                                        TimestampValue: sdk.String("consequuntur"),
                                    },
                                    "occaecati": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("perspiciatis"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4463.94),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2380.43),
                                            Longitude: sdk.Float64(9078.76),
                                        },
                                        IntegerValue: sdk.String("occaecati"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("consequuntur"),
                                                ProjectID: sdk.String("fugit"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quis"),
                                                    Kind: sdk.String("reprehenderit"),
                                                    Name: sdk.String("Jerry Hessel"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("non"),
                                                    Kind: sdk.String("vero"),
                                                    Name: sdk.String("Vera Beier IV"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("eveniet"),
                                                    Kind: sdk.String("qui"),
                                                    Name: sdk.String("Elmer Treutel"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(715208),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("voluptatum"),
                                        TimestampValue: sdk.String("rem"),
                                    },
                                    "aliquam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("repellat"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(30.99),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3621.89),
                                            Longitude: sdk.Float64(5973.03),
                                        },
                                        IntegerValue: sdk.String("nihil"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("mollitia"),
                                                ProjectID: sdk.String("voluptas"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("maiores"),
                                                    Kind: sdk.String("reiciendis"),
                                                    Name: sdk.String("Alberta Harber"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(200364),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quae"),
                                        TimestampValue: sdk.String("recusandae"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(6072.49),
                                Longitude: sdk.Float64(3092.51),
                            },
                            IntegerValue: sdk.String("molestiae"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("ex"),
                                    ProjectID: sdk.String("ut"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("adipisci"),
                                        Kind: sdk.String("debitis"),
                                        Name: sdk.String("Andre Hills"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("provident"),
                                        Kind: sdk.String("quis"),
                                        Name: sdk.String("Johanna Medhurst"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("quasi"),
                                        Kind: sdk.String("animi"),
                                        Name: sdk.String("Angie McLaughlin"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(402767),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("aliquid"),
                            TimestampValue: sdk.String("accusantium"),
                        },
                    },
                    "repellat": shared.GqlQueryParameter{
                        Cursor: sdk.String("doloribus"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("in"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(7214.07),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("earum"),
                                        ProjectID: sdk.String("officia"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("placeat"),
                                            Kind: sdk.String("modi"),
                                            Name: sdk.String("Virgil Towne"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("vitae"),
                                            Kind: sdk.String("rerum"),
                                            Name: sdk.String("Regina Bode"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("quae"),
                                            Kind: sdk.String("perferendis"),
                                            Name: sdk.String("Judy Kemmer"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "impedit": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("sapiente"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4332.79),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(1173.2),
                                            Longitude: sdk.Float64(3251.18),
                                        },
                                        IntegerValue: sdk.String("beatae"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("cupiditate"),
                                                ProjectID: sdk.String("provident"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("soluta"),
                                                    Kind: sdk.String("hic"),
                                                    Name: sdk.String("Timothy Weber"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("debitis"),
                                                    Kind: sdk.String("aliquid"),
                                                    Name: sdk.String("Ricardo Effertz"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("fuga"),
                                                    Kind: sdk.String("ratione"),
                                                    Name: sdk.String("Mr. Santiago Stoltenberg IV"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("natus"),
                                                    Kind: sdk.String("occaecati"),
                                                    Name: sdk.String("Josephine Boyer"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(859581),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("necessitatibus"),
                                        TimestampValue: sdk.String("ipsa"),
                                    },
                                    "tempora": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("molestiae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1158.34),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4797.54),
                                            Longitude: sdk.Float64(4570.59),
                                        },
                                        IntegerValue: sdk.String("praesentium"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
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
                                        Meaning: sdk.Int(713767),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("aliquid"),
                                        TimestampValue: sdk.String("officia"),
                                    },
                                    "suscipit": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("perferendis"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(4317.6),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3747.53),
                                            Longitude: sdk.Float64(6145.28),
                                        },
                                        IntegerValue: sdk.String("id"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("ab"),
                                                ProjectID: sdk.String("error"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("voluptates"),
                                                    Kind: sdk.String("mollitia"),
                                                    Name: sdk.String("Wm Hane"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("vitae"),
                                                    Kind: sdk.String("repellendus"),
                                                    Name: sdk.String("Krista Jakubowski"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("expedita"),
                                                    Kind: sdk.String("voluptatem"),
                                                    Name: sdk.String("Ms. Jonathon Jacobs"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("veritatis"),
                                                    Kind: sdk.String("rerum"),
                                                    Name: sdk.String("Trevor Bartell"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(103298),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("fuga"),
                                        TimestampValue: sdk.String("pariatur"),
                                    },
                                    "debitis": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("alias"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5349.17),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9372.19),
                                            Longitude: sdk.Float64(4042.44),
                                        },
                                        IntegerValue: sdk.String("sapiente"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("rem"),
                                                ProjectID: sdk.String("minus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("asperiores"),
                                                    Kind: sdk.String("ratione"),
                                                    Name: sdk.String("Dorothy Stanton"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quibusdam"),
                                                    Kind: sdk.String("nam"),
                                                    Name: sdk.String("Molly Fadel IV"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(85311),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("tempora"),
                                        TimestampValue: sdk.String("dolor"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(86.89),
                                Longitude: sdk.Float64(1000.14),
                            },
                            IntegerValue: sdk.String("sit"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("modi"),
                                    ProjectID: sdk.String("fugit"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("laudantium"),
                                        Kind: sdk.String("quae"),
                                        Name: sdk.String("Janis Hills V"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(911198),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("impedit"),
                            TimestampValue: sdk.String("officiis"),
                        },
                    },
                },
                PositionalBindings: []shared.GqlQueryParameter{
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("necessitatibus"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("veniam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1995.96),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("expedita"),
                                        ProjectID: sdk.String("eum"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("voluptatum"),
                                            Kind: sdk.String("magnam"),
                                            Name: sdk.String("Kathleen Sauer"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("laboriosam"),
                                            Kind: sdk.String("recusandae"),
                                            Name: sdk.String("Helen Heller III"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "vero": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("harum"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1927.18),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9873.49),
                                            Longitude: sdk.Float64(9180.92),
                                        },
                                        IntegerValue: sdk.String("optio"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("occaecati"),
                                                ProjectID: sdk.String("nemo"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("blanditiis"),
                                                    Kind: sdk.String("officia"),
                                                    Name: sdk.String("Marjorie Hickle"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("aspernatur"),
                                                    Kind: sdk.String("ducimus"),
                                                    Name: sdk.String("Lee Larkin IV"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(851854),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("dicta"),
                                        TimestampValue: sdk.String("nisi"),
                                    },
                                    "consequuntur": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("aperiam"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5854.32),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9707.32),
                                            Longitude: sdk.Float64(7468.37),
                                        },
                                        IntegerValue: sdk.String("alias"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("omnis"),
                                                ProjectID: sdk.String("eos"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("iste"),
                                                    Kind: sdk.String("magni"),
                                                    Name: sdk.String("Fannie Tillman"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("omnis"),
                                                    Kind: sdk.String("delectus"),
                                                    Name: sdk.String("Maxine Schmitt"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quos"),
                                                    Kind: sdk.String("commodi"),
                                                    Name: sdk.String("Leslie Lebsack"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(722184),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("vero"),
                                        TimestampValue: sdk.String("voluptatem"),
                                    },
                                    "ipsam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("alias"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(938.94),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2476.85),
                                            Longitude: sdk.Float64(9785.48),
                                        },
                                        IntegerValue: sdk.String("enim"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("sint"),
                                                ProjectID: sdk.String("nulla"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("esse"),
                                                    Kind: sdk.String("nemo"),
                                                    Name: sdk.String("Monique Harvey"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("impedit"),
                                                    Kind: sdk.String("hic"),
                                                    Name: sdk.String("Emmett Jakubowski"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("delectus"),
                                                    Kind: sdk.String("quae"),
                                                    Name: sdk.String("Grant Padberg"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(538869),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ipsum"),
                                        TimestampValue: sdk.String("impedit"),
                                    },
                                    "magni": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("repudiandae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7214.3),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2940.76),
                                            Longitude: sdk.Float64(4828.92),
                                        },
                                        IntegerValue: sdk.String("voluptate"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("sequi"),
                                                ProjectID: sdk.String("dignissimos"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quo"),
                                                    Kind: sdk.String("deleniti"),
                                                    Name: sdk.String("Brad Conn"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(300824),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quibusdam"),
                                        TimestampValue: sdk.String("inventore"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(8180.34),
                                Longitude: sdk.Float64(7268.78),
                            },
                            IntegerValue: sdk.String("architecto"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("voluptatibus"),
                                    ProjectID: sdk.String("quia"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("aliquam"),
                                        Kind: sdk.String("velit"),
                                        Name: sdk.String("Ruth Kassulke PhD"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("excepturi"),
                                        Kind: sdk.String("eum"),
                                        Name: sdk.String("Leslie Metz DDS"),
                                    },
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
                                },
                            },
                            Meaning: sdk.Int(927403),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("ea"),
                            TimestampValue: sdk.String("quidem"),
                        },
                    },
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("voluptas"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("placeat"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(5960.65),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("expedita"),
                                        ProjectID: sdk.String("deleniti"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("voluptate"),
                                            Kind: sdk.String("ullam"),
                                            Name: sdk.String("Terence O'Keefe"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("corporis"),
                                            Kind: sdk.String("est"),
                                            Name: sdk.String("Dr. Cory Green"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("vitae"),
                                            Kind: sdk.String("inventore"),
                                            Name: sdk.String("Lauren Deckow"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("nemo"),
                                            Kind: sdk.String("soluta"),
                                            Name: sdk.String("Wallace Pagac"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "magni": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quae"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(635.53),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2643.33),
                                            Longitude: sdk.Float64(2082.53),
                                        },
                                        IntegerValue: sdk.String("exercitationem"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("itaque"),
                                                ProjectID: sdk.String("et"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("unde"),
                                                    Kind: sdk.String("nulla"),
                                                    Name: sdk.String("Wilbert Crona"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(605712),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("libero"),
                                        TimestampValue: sdk.String("dicta"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(6633.18),
                                Longitude: sdk.Float64(7278.88),
                            },
                            IntegerValue: sdk.String("fugiat"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("officia"),
                                    ProjectID: sdk.String("quos"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("sit"),
                                        Kind: sdk.String("iusto"),
                                        Name: sdk.String("Ms. Tasha Block"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("eligendi"),
                                        Kind: sdk.String("distinctio"),
                                        Name: sdk.String("Ella Koch"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("beatae"),
                                        Kind: sdk.String("est"),
                                        Name: sdk.String("Johnnie Kozey"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("necessitatibus"),
                                        Kind: sdk.String("tempore"),
                                        Name: sdk.String("Angel Jones"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(515638),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("corporis"),
                            TimestampValue: sdk.String("officiis"),
                        },
                    },
                },
                QueryString: sdk.String("voluptatibus"),
            },
            PartitionID: &shared.PartitionID{
                NamespaceID: sdk.String("cum"),
                ProjectID: sdk.String("at"),
            },
            ReadOptions: &shared.ReadOptions{
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumReadConsistencyUnspecified.ToPointer(),
                ReadTime: sdk.String("quia"),
                Transaction: sdk.String("quidem"),
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quibusdam",
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("odit"),
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
            GqlQuery: &shared.GqlQuery{
                AllowLiterals: sdk.Bool(false),
                NamedBindings: map[string]shared.GqlQueryParameter{
                    "error": shared.GqlQueryParameter{
                        Cursor: sdk.String("earum"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("recusandae"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(6308.71),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("ut"),
                                        ProjectID: sdk.String("quidem"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("beatae"),
                                            Kind: sdk.String("unde"),
                                            Name: sdk.String("Lucia McDermott"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("numquam"),
                                            Kind: sdk.String("nesciunt"),
                                            Name: sdk.String("Oliver Kulas"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "qui": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("voluptatum"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5873.75),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3262.69),
                                            Longitude: sdk.Float64(8095.94),
                                        },
                                        IntegerValue: sdk.String("enim"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("neque"),
                                                ProjectID: sdk.String("in"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("eum"),
                                                    Kind: sdk.String("modi"),
                                                    Name: sdk.String("Danielle Volkman"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("aperiam"),
                                                    Kind: sdk.String("libero"),
                                                    Name: sdk.String("Lucille Lebsack"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("quo"),
                                                    Kind: sdk.String("velit"),
                                                    Name: sdk.String("Grant Heathcote"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("delectus"),
                                                    Kind: sdk.String("tempore"),
                                                    Name: sdk.String("Fred Zieme"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(441321),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("aperiam"),
                                        TimestampValue: sdk.String("odio"),
                                    },
                                    "minima": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("ducimus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5678.46),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(1721.95),
                                            Longitude: sdk.Float64(6211.69),
                                        },
                                        IntegerValue: sdk.String("veritatis"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("ducimus"),
                                                ProjectID: sdk.String("voluptate"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("itaque"),
                                                    Kind: sdk.String("similique"),
                                                    Name: sdk.String("Marc Hahn"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("placeat"),
                                                    Kind: sdk.String("quidem"),
                                                    Name: sdk.String("Constance Effertz V"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("vero"),
                                                    Kind: sdk.String("sequi"),
                                                    Name: sdk.String("Bennie Carter"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("animi"),
                                                    Kind: sdk.String("dolores"),
                                                    Name: sdk.String("Gerald Cruickshank"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(56877),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("ducimus"),
                                        TimestampValue: sdk.String("maiores"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(873.82),
                                Longitude: sdk.Float64(964.5),
                            },
                            IntegerValue: sdk.String("laboriosam"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("pariatur"),
                                    ProjectID: sdk.String("libero"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("occaecati"),
                                        Kind: sdk.String("nemo"),
                                        Name: sdk.String("Bernice Yundt"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("enim"),
                                        Kind: sdk.String("hic"),
                                        Name: sdk.String("Willard Larson"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("eaque"),
                                        Kind: sdk.String("saepe"),
                                        Name: sdk.String("Billie Morar"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(725574),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("velit"),
                            TimestampValue: sdk.String("doloremque"),
                        },
                    },
                    "delectus": shared.GqlQueryParameter{
                        Cursor: sdk.String("impedit"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("ipsum"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2380.11),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("saepe"),
                                        ProjectID: sdk.String("deserunt"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("quis"),
                                            Kind: sdk.String("veniam"),
                                            Name: sdk.String("Roger McDermott"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "non": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("itaque"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1509.35),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9930.02),
                                            Longitude: sdk.Float64(3302.67),
                                        },
                                        IntegerValue: sdk.String("consequuntur"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("facere"),
                                                ProjectID: sdk.String("laudantium"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("pariatur"),
                                                    Kind: sdk.String("amet"),
                                                    Name: sdk.String("Virginia Flatley"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(395233),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("voluptatibus"),
                                        TimestampValue: sdk.String("quaerat"),
                                    },
                                    "blanditiis": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("nisi"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3359.77),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(3919.33),
                                            Longitude: sdk.Float64(7277.71),
                                        },
                                        IntegerValue: sdk.String("minus"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("facere"),
                                                ProjectID: sdk.String("facilis"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("ad"),
                                                    Kind: sdk.String("voluptatibus"),
                                                    Name: sdk.String("Russell Toy"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(179795),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("reprehenderit"),
                                        TimestampValue: sdk.String("nostrum"),
                                    },
                                    "neque": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("est"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5221.76),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7538.9),
                                            Longitude: sdk.Float64(8536.06),
                                        },
                                        IntegerValue: sdk.String("unde"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("officiis"),
                                                ProjectID: sdk.String("ducimus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("dicta"),
                                                    Kind: sdk.String("error"),
                                                    Name: sdk.String("Justin Kulas"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(322333),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("aspernatur"),
                                        TimestampValue: sdk.String("enim"),
                                    },
                                    "delectus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("dignissimos"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7298.28),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(723.5),
                                            Longitude: sdk.Float64(691.82),
                                        },
                                        IntegerValue: sdk.String("incidunt"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("accusamus"),
                                                ProjectID: sdk.String("saepe"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("veniam"),
                                                    Kind: sdk.String("eos"),
                                                    Name: sdk.String("Amos Kilback"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("repellat"),
                                                    Kind: sdk.String("quisquam"),
                                                    Name: sdk.String("Mrs. Claudia Leuschke"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("aliquam"),
                                                    Kind: sdk.String("quisquam"),
                                                    Name: sdk.String("Dr. Armando Waelchi"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(723942),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("expedita"),
                                        TimestampValue: sdk.String("quas"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(5908.58),
                                Longitude: sdk.Float64(9222.99),
                            },
                            IntegerValue: sdk.String("rerum"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("dignissimos"),
                                    ProjectID: sdk.String("corporis"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("similique"),
                                        Kind: sdk.String("repellendus"),
                                        Name: sdk.String("Florence Jerde"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("aut"),
                                        Kind: sdk.String("voluptatem"),
                                        Name: sdk.String("Brenda Fay"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("quidem"),
                                        Kind: sdk.String("cum"),
                                        Name: sdk.String("Joyce Carroll DVM"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("iusto"),
                                        Kind: sdk.String("amet"),
                                        Name: sdk.String("Lorenzo Treutel"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(10063),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("nemo"),
                            TimestampValue: sdk.String("molestiae"),
                        },
                    },
                },
                PositionalBindings: []shared.GqlQueryParameter{
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("facilis"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("aperiam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(5740.92),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("accusamus"),
                                        ProjectID: sdk.String("eos"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("dicta"),
                                            Kind: sdk.String("voluptatem"),
                                            Name: sdk.String("Cindy Casper"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("occaecati"),
                                            Kind: sdk.String("atque"),
                                            Name: sdk.String("Lynette Green"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("voluptatem"),
                                            Kind: sdk.String("perferendis"),
                                            Name: sdk.String("Nathaniel Beahan"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "porro": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("consectetur"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(7532.4),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4901.1),
                                            Longitude: sdk.Float64(2358.34),
                                        },
                                        IntegerValue: sdk.String("soluta"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("natus"),
                                                ProjectID: sdk.String("temporibus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("amet"),
                                                    Kind: sdk.String("tenetur"),
                                                    Name: sdk.String("Angelica Waters"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("dignissimos"),
                                                    Kind: sdk.String("vero"),
                                                    Name: sdk.String("Mr. Edith Zieme"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("nihil"),
                                                    Kind: sdk.String("non"),
                                                    Name: sdk.String("Pamela Welch"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(251212),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("distinctio"),
                                        TimestampValue: sdk.String("in"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(3499.93),
                                Longitude: sdk.Float64(2883),
                            },
                            IntegerValue: sdk.String("numquam"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("repudiandae"),
                                    ProjectID: sdk.String("modi"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("explicabo"),
                                        Kind: sdk.String("accusamus"),
                                        Name: sdk.String("Kevin Conroy"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("voluptate"),
                                        Kind: sdk.String("similique"),
                                        Name: sdk.String("Mrs. Jeannette Gusikowski"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(199529),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("mollitia"),
                            TimestampValue: sdk.String("dignissimos"),
                        },
                    },
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("fugiat"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("molestiae"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(3306),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("reiciendis"),
                                        ProjectID: sdk.String("ab"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("aut"),
                                            Kind: sdk.String("aut"),
                                            Name: sdk.String("Tyrone Jerde"),
                                        },
                                        shared.PathElement{
                                            ID: sdk.String("possimus"),
                                            Kind: sdk.String("voluptate"),
                                            Name: sdk.String("Peggy Hagenes"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "distinctio": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("quas"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(917.28),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(7049.48),
                                            Longitude: sdk.Float64(2292.76),
                                        },
                                        IntegerValue: sdk.String("autem"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("fuga"),
                                                ProjectID: sdk.String("alias"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("aut"),
                                                    Kind: sdk.String("quos"),
                                                    Name: sdk.String("Mr. Marcos Boehm"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("delectus"),
                                                    Kind: sdk.String("mollitia"),
                                                    Name: sdk.String("Mr. Homer Corwin"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("hic"),
                                                    Kind: sdk.String("voluptatem"),
                                                    Name: sdk.String("Phyllis Denesik"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(126727),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("beatae"),
                                        TimestampValue: sdk.String("aliquid"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(2646.49),
                                Longitude: sdk.Float64(7600.49),
                            },
                            IntegerValue: sdk.String("voluptatibus"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("molestias"),
                                    ProjectID: sdk.String("officia"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("totam"),
                                        Kind: sdk.String("sequi"),
                                        Name: sdk.String("Gertrude Ryan"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("velit"),
                                        Kind: sdk.String("reiciendis"),
                                        Name: sdk.String("Drew Osinski"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("doloremque"),
                                        Kind: sdk.String("nisi"),
                                        Name: sdk.String("Rolando Veum"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(157884),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("ullam"),
                            TimestampValue: sdk.String("quisquam"),
                        },
                    },
                    shared.GqlQueryParameter{
                        Cursor: sdk.String("dicta"),
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("eligendi"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(620.35),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("officiis"),
                                        ProjectID: sdk.String("architecto"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("enim"),
                                            Kind: sdk.String("optio"),
                                            Name: sdk.String("Joseph Purdy"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "dicta": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("ullam"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(2959.5),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(2662.84),
                                            Longitude: sdk.Float64(9292.92),
                                        },
                                        IntegerValue: sdk.String("maxime"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("modi"),
                                                ProjectID: sdk.String("consequuntur"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("vero"),
                                                    Kind: sdk.String("doloribus"),
                                                    Name: sdk.String("Gregg Torp"),
                                                },
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
                                            },
                                        },
                                        Meaning: sdk.Int(906232),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("neque"),
                                        TimestampValue: sdk.String("facere"),
                                    },
                                    "aliquam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("doloribus"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(8518.09),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(6685.77),
                                            Longitude: sdk.Float64(9623.96),
                                        },
                                        IntegerValue: sdk.String("velit"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("vitae"),
                                                ProjectID: sdk.String("nesciunt"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("illo"),
                                                    Kind: sdk.String("repellat"),
                                                    Name: sdk.String("Ora Senger"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("explicabo"),
                                                    Kind: sdk.String("ipsam"),
                                                    Name: sdk.String("Lucas Abbott"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("commodi"),
                                                    Kind: sdk.String("sapiente"),
                                                    Name: sdk.String("Lynn Trantow"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(280859),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("numquam"),
                                        TimestampValue: sdk.String("tenetur"),
                                    },
                                    "adipisci": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("in"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(3296.51),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4031.47),
                                            Longitude: sdk.Float64(7917.62),
                                        },
                                        IntegerValue: sdk.String("ab"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("beatae"),
                                                ProjectID: sdk.String("hic"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quisquam"),
                                                    Kind: sdk.String("dolor"),
                                                    Name: sdk.String("Mr. Kristine Hansen"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("magni"),
                                                    Kind: sdk.String("incidunt"),
                                                    Name: sdk.String("Maxine Ernser"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(706411),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("impedit"),
                                        TimestampValue: sdk.String("sit"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(3634.82),
                                Longitude: sdk.Float64(6339.87),
                            },
                            IntegerValue: sdk.String("consequuntur"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("amet"),
                                    ProjectID: sdk.String("deserunt"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("veniam"),
                                        Kind: sdk.String("quod"),
                                        Name: sdk.String("Tommie Schamberger"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("assumenda"),
                                        Kind: sdk.String("officiis"),
                                        Name: sdk.String("Miss Linda Nader"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(155978),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("dicta"),
                            TimestampValue: sdk.String("vel"),
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
                            BlobValue: sdk.String("ullam"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(1035.78),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("accusantium"),
                                        ProjectID: sdk.String("perferendis"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("provident"),
                                            Kind: sdk.String("cumque"),
                                            Name: sdk.String("Doreen Schmeler"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "magnam": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("laboriosam"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(1522.83),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(4862.72),
                                            Longitude: sdk.Float64(6169.41),
                                        },
                                        IntegerValue: sdk.String("provident"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("cum"),
                                                ProjectID: sdk.String("doloribus"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("quidem"),
                                                    Kind: sdk.String("itaque"),
                                                    Name: sdk.String("Lindsey Gislason"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("cum"),
                                                    Kind: sdk.String("aspernatur"),
                                                    Name: sdk.String("Alton Goyette"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("id"),
                                                    Kind: sdk.String("saepe"),
                                                    Name: sdk.String("Angelica Dooley"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(848722),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("facilis"),
                                        TimestampValue: sdk.String("non"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(6495.34),
                                Longitude: sdk.Float64(8270.51),
                            },
                            IntegerValue: sdk.String("recusandae"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("distinctio"),
                                    ProjectID: sdk.String("pariatur"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("facere"),
                                        Kind: sdk.String("laborum"),
                                        Name: sdk.String("Neal Gorczany"),
                                    },
                                    shared.PathElement{
                                        ID: sdk.String("alias"),
                                        Kind: sdk.String("suscipit"),
                                        Name: sdk.String("Daryl Pacocha"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(286716),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("quo"),
                            TimestampValue: sdk.String("perferendis"),
                        },
                    },
                },
                QueryString: sdk.String("fugit"),
            },
            PartitionID: &shared.PartitionID{
                NamespaceID: sdk.String("aliquid"),
                ProjectID: sdk.String("magnam"),
            },
            Query: &shared.Query{
                DistinctOn: []shared.PropertyReference{
                    shared.PropertyReference{
                        Name: sdk.String("Moses Heathcote"),
                    },
                    shared.PropertyReference{
                        Name: sdk.String("Jeremiah O'Hara"),
                    },
                },
                EndCursor: sdk.String("esse"),
                Filter: &shared.Filter{
                    CompositeFilter: &shared.CompositeFilter{
                        Filters: []shared.Filter{
                            shared.Filter{},
                            shared.Filter{},
                            shared.Filter{},
                        },
                        Op: shared.CompositeFilterOpEnumOr.ToPointer(),
                    },
                    PropertyFilter: &shared.PropertyFilter{
                        Op: shared.PropertyFilterOpEnumHasAncestor.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Roger O'Connell"),
                        },
                        Value: &shared.Value{
                            ArrayValue: &shared.ArrayValue{
                                Values: []shared.Value{
                                    shared.Value{},
                                },
                            },
                            BlobValue: sdk.String("voluptatem"),
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8164.21),
                            EntityValue: &shared.Entity{
                                Key: &shared.Key{
                                    PartitionID: &shared.PartitionID{
                                        NamespaceID: sdk.String("necessitatibus"),
                                        ProjectID: sdk.String("maxime"),
                                    },
                                    Path: []shared.PathElement{
                                        shared.PathElement{
                                            ID: sdk.String("eaque"),
                                            Kind: sdk.String("architecto"),
                                            Name: sdk.String("Mr. Gregg Kuvalis"),
                                        },
                                    },
                                },
                                Properties: map[string]shared.Value{
                                    "necessitatibus": shared.Value{
                                        ArrayValue: &shared.ArrayValue{
                                            Values: []shared.Value{
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                                shared.Value{},
                                            },
                                        },
                                        BlobValue: sdk.String("ipsa"),
                                        BooleanValue: sdk.Bool(false),
                                        DoubleValue: sdk.Float64(5676.93),
                                        EntityValue: &shared.Entity{},
                                        ExcludeFromIndexes: sdk.Bool(false),
                                        GeoPointValue: &shared.LatLng{
                                            Latitude: sdk.Float64(9509.56),
                                            Longitude: sdk.Float64(9830),
                                        },
                                        IntegerValue: sdk.String("laudantium"),
                                        KeyValue: &shared.Key{
                                            PartitionID: &shared.PartitionID{
                                                NamespaceID: sdk.String("maiores"),
                                                ProjectID: sdk.String("alias"),
                                            },
                                            Path: []shared.PathElement{
                                                shared.PathElement{
                                                    ID: sdk.String("rem"),
                                                    Kind: sdk.String("dicta"),
                                                    Name: sdk.String("Lana Yost"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("esse"),
                                                    Kind: sdk.String("in"),
                                                    Name: sdk.String("Arthur Doyle"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("accusantium"),
                                                    Kind: sdk.String("qui"),
                                                    Name: sdk.String("Mr. Jack Gottlieb"),
                                                },
                                                shared.PathElement{
                                                    ID: sdk.String("rerum"),
                                                    Kind: sdk.String("alias"),
                                                    Name: sdk.String("Chester Barton"),
                                                },
                                            },
                                        },
                                        Meaning: sdk.Int(401688),
                                        NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                                        StringValue: sdk.String("quas"),
                                        TimestampValue: sdk.String("veritatis"),
                                    },
                                },
                            },
                            ExcludeFromIndexes: sdk.Bool(false),
                            GeoPointValue: &shared.LatLng{
                                Latitude: sdk.Float64(3564.4),
                                Longitude: sdk.Float64(626.88),
                            },
                            IntegerValue: sdk.String("similique"),
                            KeyValue: &shared.Key{
                                PartitionID: &shared.PartitionID{
                                    NamespaceID: sdk.String("incidunt"),
                                    ProjectID: sdk.String("quam"),
                                },
                                Path: []shared.PathElement{
                                    shared.PathElement{
                                        ID: sdk.String("deserunt"),
                                        Kind: sdk.String("delectus"),
                                        Name: sdk.String("Jeremy Douglas"),
                                    },
                                },
                            },
                            Meaning: sdk.Int(586108),
                            NullValue: shared.ValueNullValueEnumNullValue.ToPointer(),
                            StringValue: sdk.String("aliquam"),
                            TimestampValue: sdk.String("excepturi"),
                        },
                    },
                },
                Kind: []shared.KindExpression{
                    shared.KindExpression{
                        Name: sdk.String("Jacob Witting"),
                    },
                    shared.KindExpression{
                        Name: sdk.String("Adrienne White"),
                    },
                    shared.KindExpression{
                        Name: sdk.String("Nettie Wilkinson"),
                    },
                    shared.KindExpression{
                        Name: sdk.String("Mildred Schinner"),
                    },
                },
                Limit: sdk.Int(781582),
                Offset: sdk.Int(735740),
                Order: []shared.PropertyOrder{
                    shared.PropertyOrder{
                        Direction: shared.PropertyOrderDirectionEnumDirectionUnspecified.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Billy Gerlach"),
                        },
                    },
                    shared.PropertyOrder{
                        Direction: shared.PropertyOrderDirectionEnumDescending.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Vickie Marvin"),
                        },
                    },
                    shared.PropertyOrder{
                        Direction: shared.PropertyOrderDirectionEnumAscending.ToPointer(),
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Dexter Stoltenberg"),
                        },
                    },
                },
                Projection: []shared.Projection{
                    shared.Projection{
                        Property: &shared.PropertyReference{
                            Name: sdk.String("Ronnie Nikolaus"),
                        },
                    },
                },
                StartCursor: sdk.String("repudiandae"),
            },
            ReadOptions: &shared.ReadOptions{
                ReadConsistency: shared.ReadOptionsReadConsistencyEnumReadConsistencyUnspecified.ToPointer(),
                ReadTime: sdk.String("officia"),
                Transaction: sdk.String("impedit"),
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "natus",
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("magnam"),
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
