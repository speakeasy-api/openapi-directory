# Datasets

### Available Operations

* [BigqueryDatasetsDelete](#bigquerydatasetsdelete) - Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
* [BigqueryDatasetsGet](#bigquerydatasetsget) - Returns the dataset specified by datasetID.
* [BigqueryDatasetsInsert](#bigquerydatasetsinsert) - Creates a new empty dataset.
* [BigqueryDatasetsList](#bigquerydatasetslist) - Lists all datasets in the specified project to which you have been granted the READER dataset role.
* [BigqueryDatasetsPatch](#bigquerydatasetspatch) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
* [BigqueryDatasetsUpdate](#bigquerydatasetsupdate) - Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

## BigqueryDatasetsDelete

Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.

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
    res, err := s.Datasets.BigqueryDatasetsDelete(ctx, operations.BigqueryDatasetsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "illum",
        DeleteContents: sdk.Bool(false),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "suscipit",
        QuotaUser: sdk.String("iure"),
        UserIP: sdk.String("magnam"),
    }, operations.BigqueryDatasetsDeleteSecurity{
        Option1: &operations.BigqueryDatasetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BigqueryDatasetsGet

Returns the dataset specified by datasetID.

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
    res, err := s.Datasets.BigqueryDatasetsGet(ctx, operations.BigqueryDatasetsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "debitis",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "suscipit",
        QuotaUser: sdk.String("molestiae"),
        UserIP: sdk.String("minus"),
    }, operations.BigqueryDatasetsGetSecurity{
        Option1: &operations.BigqueryDatasetsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## BigqueryDatasetsInsert

Creates a new empty dataset.

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
    res, err := s.Datasets.BigqueryDatasetsInsert(ctx, operations.BigqueryDatasetsInsertRequest{
        Dataset: &shared.Dataset{
            Access: []shared.DatasetAccess{
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("voluptatum"),
                            ProjectID: sdk.String("iusto"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                        },
                    },
                    Domain: sdk.String("ab"),
                    GroupByEmail: sdk.String("quis"),
                    IamMember: sdk.String("veritatis"),
                    Role: sdk.String("deserunt"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("perferendis"),
                        ProjectID: sdk.String("ipsam"),
                        RoutineID: sdk.String("repellendus"),
                    },
                    SpecialGroup: sdk.String("sapiente"),
                    UserByEmail: sdk.String("quo"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("odit"),
                        ProjectID: sdk.String("at"),
                        TableID: sdk.String("at"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("maiores"),
                            ProjectID: sdk.String("molestiae"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                        },
                    },
                    Domain: sdk.String("dolorum"),
                    GroupByEmail: sdk.String("dicta"),
                    IamMember: sdk.String("nam"),
                    Role: sdk.String("officia"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("occaecati"),
                        ProjectID: sdk.String("fugit"),
                        RoutineID: sdk.String("deleniti"),
                    },
                    SpecialGroup: sdk.String("hic"),
                    UserByEmail: sdk.String("optio"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("totam"),
                        ProjectID: sdk.String("beatae"),
                        TableID: sdk.String("commodi"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("molestiae"),
                            ProjectID: sdk.String("modi"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                        },
                    },
                    Domain: sdk.String("cum"),
                    GroupByEmail: sdk.String("esse"),
                    IamMember: sdk.String("ipsum"),
                    Role: sdk.String("excepturi"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("aspernatur"),
                        ProjectID: sdk.String("perferendis"),
                        RoutineID: sdk.String("ad"),
                    },
                    SpecialGroup: sdk.String("natus"),
                    UserByEmail: sdk.String("sed"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("iste"),
                        ProjectID: sdk.String("dolor"),
                        TableID: sdk.String("natus"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("laboriosam"),
                            ProjectID: sdk.String("hic"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                        },
                    },
                    Domain: sdk.String("iure"),
                    GroupByEmail: sdk.String("saepe"),
                    IamMember: sdk.String("quidem"),
                    Role: sdk.String("architecto"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("ipsa"),
                        ProjectID: sdk.String("reiciendis"),
                        RoutineID: sdk.String("est"),
                    },
                    SpecialGroup: sdk.String("mollitia"),
                    UserByEmail: sdk.String("laborum"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("dolores"),
                        ProjectID: sdk.String("dolorem"),
                        TableID: sdk.String("corporis"),
                    },
                },
            },
            CreationTime: sdk.String("explicabo"),
            DatasetReference: &shared.DatasetReference{
                DatasetID: sdk.String("nobis"),
                ProjectID: sdk.String("enim"),
            },
            DefaultCollation: sdk.String("omnis"),
            DefaultEncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("nemo"),
            },
            DefaultPartitionExpirationMs: sdk.String("minima"),
            DefaultRoundingMode: sdk.String("excepturi"),
            DefaultTableExpirationMs: sdk.String("accusantium"),
            Description: sdk.String("iure"),
            Etag: sdk.String("culpa"),
            FriendlyName: sdk.String("doloribus"),
            ID: sdk.String("f1a3a2fa-9467-4739-a51a-a52c3f5ad019"),
            IsCaseInsensitive: sdk.Bool(false),
            Kind: sdk.String("temporibus"),
            Labels: map[string]string{
                "quasi": "reiciendis",
                "voluptatibus": "vero",
                "nihil": "praesentium",
            },
            LastModifiedTime: sdk.String("voluptatibus"),
            Location: sdk.String("ipsa"),
            MaxTimeTravelHours: sdk.String("omnis"),
            SatisfiesPzs: sdk.Bool(false),
            SelfLink: sdk.String("voluptate"),
            StorageBillingModel: sdk.String("cum"),
            Tags: []shared.DatasetTags{
                shared.DatasetTags{
                    TagKey: sdk.String("doloremque"),
                    TagValue: sdk.String("reprehenderit"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "corporis",
        QuotaUser: sdk.String("dolore"),
        UserIP: sdk.String("iusto"),
    }, operations.BigqueryDatasetsInsertSecurity{
        Option1: &operations.BigqueryDatasetsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## BigqueryDatasetsList

Lists all datasets in the specified project to which you have been granted the READER dataset role.

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
    res, err := s.Datasets.BigqueryDatasetsList(ctx, operations.BigqueryDatasetsListRequest{
        All: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("harum"),
        Key: sdk.String("enim"),
        MaxResults: sdk.Int64(880476),
        OauthToken: sdk.String("commodi"),
        PageToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quae",
        QuotaUser: sdk.String("ipsum"),
        UserIP: sdk.String("quidem"),
    }, operations.BigqueryDatasetsListSecurity{
        Option1: &operations.BigqueryDatasetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatasetList != nil {
        // handle response
    }
}
```

## BigqueryDatasetsPatch

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.

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
    res, err := s.Datasets.BigqueryDatasetsPatch(ctx, operations.BigqueryDatasetsPatchRequest{
        Dataset: &shared.Dataset{
            Access: []shared.DatasetAccess{
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("excepturi"),
                            ProjectID: sdk.String("pariatur"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                        },
                    },
                    Domain: sdk.String("voluptates"),
                    GroupByEmail: sdk.String("quasi"),
                    IamMember: sdk.String("repudiandae"),
                    Role: sdk.String("sint"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("veritatis"),
                        ProjectID: sdk.String("itaque"),
                        RoutineID: sdk.String("incidunt"),
                    },
                    SpecialGroup: sdk.String("enim"),
                    UserByEmail: sdk.String("consequatur"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("est"),
                        ProjectID: sdk.String("quibusdam"),
                        TableID: sdk.String("explicabo"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("deserunt"),
                            ProjectID: sdk.String("distinctio"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                        },
                    },
                    Domain: sdk.String("cupiditate"),
                    GroupByEmail: sdk.String("quos"),
                    IamMember: sdk.String("perferendis"),
                    Role: sdk.String("magni"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("assumenda"),
                        ProjectID: sdk.String("ipsam"),
                        RoutineID: sdk.String("alias"),
                    },
                    SpecialGroup: sdk.String("fugit"),
                    UserByEmail: sdk.String("dolorum"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("excepturi"),
                        ProjectID: sdk.String("tempora"),
                        TableID: sdk.String("facilis"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("tempore"),
                            ProjectID: sdk.String("labore"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                        },
                    },
                    Domain: sdk.String("aliquid"),
                    GroupByEmail: sdk.String("provident"),
                    IamMember: sdk.String("necessitatibus"),
                    Role: sdk.String("sint"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("officia"),
                        ProjectID: sdk.String("dolor"),
                        RoutineID: sdk.String("debitis"),
                    },
                    SpecialGroup: sdk.String("a"),
                    UserByEmail: sdk.String("dolorum"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("in"),
                        ProjectID: sdk.String("in"),
                        TableID: sdk.String("illum"),
                    },
                },
            },
            CreationTime: sdk.String("maiores"),
            DatasetReference: &shared.DatasetReference{
                DatasetID: sdk.String("rerum"),
                ProjectID: sdk.String("dicta"),
            },
            DefaultCollation: sdk.String("magnam"),
            DefaultEncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("cumque"),
            },
            DefaultPartitionExpirationMs: sdk.String("facere"),
            DefaultRoundingMode: sdk.String("ea"),
            DefaultTableExpirationMs: sdk.String("aliquid"),
            Description: sdk.String("laborum"),
            Etag: sdk.String("accusamus"),
            FriendlyName: sdk.String("non"),
            ID: sdk.String("95efb9ba-88f3-4a66-9970-74ba4469b6e2"),
            IsCaseInsensitive: sdk.Bool(false),
            Kind: sdk.String("architecto"),
            Labels: map[string]string{
                "et": "excepturi",
                "ullam": "provident",
            },
            LastModifiedTime: sdk.String("quos"),
            Location: sdk.String("sint"),
            MaxTimeTravelHours: sdk.String("accusantium"),
            SatisfiesPzs: sdk.Bool(false),
            SelfLink: sdk.String("mollitia"),
            StorageBillingModel: sdk.String("reiciendis"),
            Tags: []shared.DatasetTags{
                shared.DatasetTags{
                    TagKey: sdk.String("ad"),
                    TagValue: sdk.String("eum"),
                },
                shared.DatasetTags{
                    TagKey: sdk.String("dolor"),
                    TagValue: sdk.String("necessitatibus"),
                },
                shared.DatasetTags{
                    TagKey: sdk.String("odit"),
                    TagValue: sdk.String("nemo"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "quasi",
        Fields: sdk.String("iure"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "eius",
        QuotaUser: sdk.String("maxime"),
        UserIP: sdk.String("deleniti"),
    }, operations.BigqueryDatasetsPatchSecurity{
        Option1: &operations.BigqueryDatasetsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## BigqueryDatasetsUpdate

Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.

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
    res, err := s.Datasets.BigqueryDatasetsUpdate(ctx, operations.BigqueryDatasetsUpdateRequest{
        Dataset: &shared.Dataset{
            Access: []shared.DatasetAccess{
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("in"),
                            ProjectID: sdk.String("architecto"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                        },
                    },
                    Domain: sdk.String("ullam"),
                    GroupByEmail: sdk.String("expedita"),
                    IamMember: sdk.String("nihil"),
                    Role: sdk.String("repellat"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("quibusdam"),
                        ProjectID: sdk.String("sed"),
                        RoutineID: sdk.String("saepe"),
                    },
                    SpecialGroup: sdk.String("pariatur"),
                    UserByEmail: sdk.String("accusantium"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("consequuntur"),
                        ProjectID: sdk.String("praesentium"),
                        TableID: sdk.String("natus"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("magni"),
                            ProjectID: sdk.String("sunt"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumViews,
                        },
                    },
                    Domain: sdk.String("excepturi"),
                    GroupByEmail: sdk.String("odit"),
                    IamMember: sdk.String("ea"),
                    Role: sdk.String("accusantium"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("ab"),
                        ProjectID: sdk.String("maiores"),
                        RoutineID: sdk.String("quidem"),
                    },
                    SpecialGroup: sdk.String("ipsam"),
                    UserByEmail: sdk.String("voluptate"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("autem"),
                        ProjectID: sdk.String("nam"),
                        TableID: sdk.String("eaque"),
                    },
                },
                shared.DatasetAccess{
                    Dataset: &shared.DatasetAccessEntry{
                        Dataset: &shared.DatasetReference{
                            DatasetID: sdk.String("pariatur"),
                            ProjectID: sdk.String("nemo"),
                        },
                        TargetTypes: []shared.DatasetAccessEntryTargetTypesEnum{
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumRoutines,
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                            shared.DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified,
                        },
                    },
                    Domain: sdk.String("cumque"),
                    GroupByEmail: sdk.String("corporis"),
                    IamMember: sdk.String("hic"),
                    Role: sdk.String("libero"),
                    Routine: &shared.RoutineReference{
                        DatasetID: sdk.String("nobis"),
                        ProjectID: sdk.String("dolores"),
                        RoutineID: sdk.String("quis"),
                    },
                    SpecialGroup: sdk.String("totam"),
                    UserByEmail: sdk.String("dignissimos"),
                    View: &shared.TableReference{
                        DatasetID: sdk.String("eaque"),
                        ProjectID: sdk.String("quis"),
                        TableID: sdk.String("nesciunt"),
                    },
                },
            },
            CreationTime: sdk.String("eos"),
            DatasetReference: &shared.DatasetReference{
                DatasetID: sdk.String("perferendis"),
                ProjectID: sdk.String("dolores"),
            },
            DefaultCollation: sdk.String("minus"),
            DefaultEncryptionConfiguration: &shared.EncryptionConfiguration{
                KmsKeyName: sdk.String("quam"),
            },
            DefaultPartitionExpirationMs: sdk.String("dolor"),
            DefaultRoundingMode: sdk.String("vero"),
            DefaultTableExpirationMs: sdk.String("nostrum"),
            Description: sdk.String("hic"),
            Etag: sdk.String("recusandae"),
            FriendlyName: sdk.String("omnis"),
            ID: sdk.String("b90c2890-9b3f-4e49-a8d9-cbf48633323f"),
            IsCaseInsensitive: sdk.Bool(false),
            Kind: sdk.String("excepturi"),
            Labels: map[string]string{
                "voluptate": "dignissimos",
                "reiciendis": "amet",
                "dolorum": "numquam",
            },
            LastModifiedTime: sdk.String("veritatis"),
            Location: sdk.String("ipsa"),
            MaxTimeTravelHours: sdk.String("ipsa"),
            SatisfiesPzs: sdk.Bool(false),
            SelfLink: sdk.String("iure"),
            StorageBillingModel: sdk.String("odio"),
            Tags: []shared.DatasetTags{
                shared.DatasetTags{
                    TagKey: sdk.String("accusamus"),
                    TagValue: sdk.String("quidem"),
                },
                shared.DatasetTags{
                    TagKey: sdk.String("voluptatibus"),
                    TagValue: sdk.String("voluptas"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "natus",
        Fields: sdk.String("eos"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fugiat",
        QuotaUser: sdk.String("ab"),
        UserIP: sdk.String("soluta"),
    }, operations.BigqueryDatasetsUpdateSecurity{
        Option1: &operations.BigqueryDatasetsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
