# Indexing

### Available Operations

* [CloudsearchIndexingDatasourcesDeleteSchema](#cloudsearchindexingdatasourcesdeleteschema) - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [CloudsearchIndexingDatasourcesGetSchema](#cloudsearchindexingdatasourcesgetschema) - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* [CloudsearchIndexingDatasourcesItemsDelete](#cloudsearchindexingdatasourcesitemsdelete) - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsDeleteQueueItems](#cloudsearchindexingdatasourcesitemsdeletequeueitems) - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsGet](#cloudsearchindexingdatasourcesitemsget) - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsIndex](#cloudsearchindexingdatasourcesitemsindex) - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsList](#cloudsearchindexingdatasourcesitemslist) - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsPoll](#cloudsearchindexingdatasourcesitemspoll) - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsPush](#cloudsearchindexingdatasourcesitemspush) - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsUnreserve](#cloudsearchindexingdatasourcesitemsunreserve) - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesItemsUpload](#cloudsearchindexingdatasourcesitemsupload) - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* [CloudsearchIndexingDatasourcesUpdateSchema](#cloudsearchindexingdatasourcesupdateschema) - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

## CloudsearchIndexingDatasourcesDeleteSchema

Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesDeleteSchema(ctx, operations.CloudsearchIndexingDatasourcesDeleteSchemaRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        Name: "Connie Herzog",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesGetSchema

Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesGetSchema(ctx, operations.CloudsearchIndexingDatasourcesGetSchemaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        Name: "Angie Durgan",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.CloudsearchIndexingDatasourcesGetSchemaSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesGetSchemaSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsDelete

Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsDelete(ctx, operations.CloudsearchIndexingDatasourcesItemsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        ConnectorName: sdk.String("error"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        Mode: operations.CloudsearchIndexingDatasourcesItemsDeleteModeEnumUnspecified.ToPointer(),
        Name: "Matt Hamill",
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
        Version: sdk.String("possimus"),
    }, operations.CloudsearchIndexingDatasourcesItemsDeleteSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsDeleteQueueItems

Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsDeleteQueueItems(ctx, operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DeleteQueueItemsRequest: &shared.DeleteQueueItemsRequest{
            ConnectorName: sdk.String("quasi"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            Queue: sdk.String("error"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        Name: "Jessie Langosh V",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsGet

Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsGet(ctx, operations.CloudsearchIndexingDatasourcesItemsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        ConnectorName: sdk.String("corporis"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        Name: "Maryann Hamill",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.CloudsearchIndexingDatasourcesItemsGetSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Item != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsIndex

Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsIndex(ctx, operations.CloudsearchIndexingDatasourcesItemsIndexRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        IndexItemRequest: &shared.IndexItemRequest{
            ConnectorName: sdk.String("excepturi"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            IndexItemOptions: &shared.IndexItemOptions{
                AllowUnknownGsuitePrincipals: sdk.Bool(false),
            },
            Item: &shared.Item{
                ACL: &shared.ItemACL{
                    ACLInheritanceType: shared.ItemACLACLInheritanceTypeEnumBothPermit.ToPointer(),
                    DeniedReaders: []shared.Principal{
                        shared.Principal{
                            GroupResourceName: sdk.String("praesentium"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("rem"),
                                GsuiteUserEmail: sdk.String("voluptates"),
                            },
                            UserResourceName: sdk.String("quasi"),
                        },
                        shared.Principal{
                            GroupResourceName: sdk.String("repudiandae"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("sint"),
                                GsuiteUserEmail: sdk.String("veritatis"),
                            },
                            UserResourceName: sdk.String("itaque"),
                        },
                    },
                    InheritACLFrom: sdk.String("incidunt"),
                    Owners: []shared.Principal{
                        shared.Principal{
                            GroupResourceName: sdk.String("consequatur"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("est"),
                                GsuiteUserEmail: sdk.String("quibusdam"),
                            },
                            UserResourceName: sdk.String("explicabo"),
                        },
                        shared.Principal{
                            GroupResourceName: sdk.String("deserunt"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("distinctio"),
                                GsuiteUserEmail: sdk.String("quibusdam"),
                            },
                            UserResourceName: sdk.String("labore"),
                        },
                    },
                    Readers: []shared.Principal{
                        shared.Principal{
                            GroupResourceName: sdk.String("qui"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("aliquid"),
                                GsuiteUserEmail: sdk.String("cupiditate"),
                            },
                            UserResourceName: sdk.String("quos"),
                        },
                        shared.Principal{
                            GroupResourceName: sdk.String("perferendis"),
                            GsuitePrincipal: &shared.GSuitePrincipal{
                                GsuiteDomain: sdk.Bool(false),
                                GsuiteGroupEmail: sdk.String("magni"),
                                GsuiteUserEmail: sdk.String("assumenda"),
                            },
                            UserResourceName: sdk.String("ipsam"),
                        },
                    },
                },
                Content: &shared.ItemContent{
                    ContentDataRef: &shared.UploadItemRef{
                        Name: sdk.String("Denise Pagac"),
                    },
                    ContentFormat: shared.ItemContentContentFormatEnumText.ToPointer(),
                    Hash: sdk.String("tempore"),
                    InlineContent: sdk.String("labore"),
                },
                ItemType: shared.ItemItemTypeEnumVirtualContainerItem.ToPointer(),
                Metadata: &shared.ItemMetadata{
                    ContainerName: sdk.String("eum"),
                    ContentLanguage: sdk.String("non"),
                    ContextAttributes: []shared.ContextAttribute{
                        shared.ContextAttribute{
                            Name: sdk.String("Gilbert Medhurst"),
                            Values: []string{
                                "dolor",
                                "debitis",
                                "a",
                            },
                        },
                        shared.ContextAttribute{
                            Name: sdk.String("Arnold Kirlin"),
                            Values: []string{
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                        },
                        shared.ContextAttribute{
                            Name: sdk.String("Nathaniel Hyatt"),
                            Values: []string{
                                "occaecati",
                            },
                        },
                        shared.ContextAttribute{
                            Name: sdk.String("Sophia Wintheiser"),
                            Values: []string{
                                "id",
                                "blanditiis",
                                "deleniti",
                            },
                        },
                    },
                    CreateTime: sdk.String("sapiente"),
                    Hash: sdk.String("amet"),
                    Interactions: []shared.Interaction{
                        shared.Interaction{
                            InteractionTime: sdk.String("nisi"),
                            Principal: &shared.Principal{
                                GroupResourceName: sdk.String("vel"),
                                GsuitePrincipal: &shared.GSuitePrincipal{
                                    GsuiteDomain: sdk.Bool(false),
                                    GsuiteGroupEmail: sdk.String("natus"),
                                    GsuiteUserEmail: sdk.String("omnis"),
                                },
                                UserResourceName: sdk.String("molestiae"),
                            },
                            Type: shared.InteractionTypeEnumUnspecified.ToPointer(),
                        },
                        shared.Interaction{
                            InteractionTime: sdk.String("nihil"),
                            Principal: &shared.Principal{
                                GroupResourceName: sdk.String("magnam"),
                                GsuitePrincipal: &shared.GSuitePrincipal{
                                    GsuiteDomain: sdk.Bool(false),
                                    GsuiteGroupEmail: sdk.String("distinctio"),
                                    GsuiteUserEmail: sdk.String("id"),
                                },
                                UserResourceName: sdk.String("labore"),
                            },
                            Type: shared.InteractionTypeEnumUnspecified.ToPointer(),
                        },
                        shared.Interaction{
                            InteractionTime: sdk.String("suscipit"),
                            Principal: &shared.Principal{
                                GroupResourceName: sdk.String("natus"),
                                GsuitePrincipal: &shared.GSuitePrincipal{
                                    GsuiteDomain: sdk.Bool(false),
                                    GsuiteGroupEmail: sdk.String("nobis"),
                                    GsuiteUserEmail: sdk.String("eum"),
                                },
                                UserResourceName: sdk.String("vero"),
                            },
                            Type: shared.InteractionTypeEnumUnspecified.ToPointer(),
                        },
                    },
                    Keywords: []string{
                        "magnam",
                    },
                    MimeType: sdk.String("et"),
                    ObjectType: sdk.String("excepturi"),
                    SearchQualityMetadata: &shared.SearchQualityMetadata{
                        Quality: sdk.Float64(3540.47),
                    },
                    SourceRepositoryURL: sdk.String("provident"),
                    Title: sdk.String("Ms."),
                    UpdateTime: sdk.String("sint"),
                },
                Name: sdk.String("Angie Wisozk"),
                Payload: sdk.String("eum"),
                Queue: sdk.String("dolor"),
                Status: &shared.ItemStatus{
                    Code: shared.ItemStatusCodeEnumAccepted.ToPointer(),
                    ProcessingErrors: []shared.ProcessingError{
                        shared.ProcessingError{
                            Code: shared.ProcessingErrorCodeEnumMalformedRequest.ToPointer(),
                            ErrorMessage: sdk.String("quasi"),
                            FieldViolations: []shared.FieldViolation{
                                shared.FieldViolation{
                                    Description: sdk.String("doloribus"),
                                    Field: sdk.String("debitis"),
                                },
                                shared.FieldViolation{
                                    Description: sdk.String("eius"),
                                    Field: sdk.String("maxime"),
                                },
                            },
                        },
                    },
                    RepositoryErrors: []shared.RepositoryError{
                        shared.RepositoryError{
                            ErrorMessage: sdk.String("facilis"),
                            HTTPStatusCode: sdk.Int(447926),
                            Type: shared.RepositoryErrorTypeEnumNetworkError.ToPointer(),
                        },
                        shared.RepositoryError{
                            ErrorMessage: sdk.String("architecto"),
                            HTTPStatusCode: sdk.Int(919483),
                            Type: shared.RepositoryErrorTypeEnumConnectionError.ToPointer(),
                        },
                        shared.RepositoryError{
                            ErrorMessage: sdk.String("expedita"),
                            HTTPStatusCode: sdk.Int(469249),
                            Type: shared.RepositoryErrorTypeEnumClientError.ToPointer(),
                        },
                    },
                },
                StructuredData: &shared.ItemStructuredData{
                    Hash: sdk.String("quibusdam"),
                    Object: &shared.StructuredDataObject{
                        Properties: []shared.NamedProperty{
                            shared.NamedProperty{
                                BooleanValue: sdk.Bool(false),
                                DateValues: &shared.DateValues{
                                    Values: []shared.Date{
                                        shared.Date{
                                            Day: sdk.Int(868126),
                                            Month: sdk.Int(37559),
                                            Year: sdk.Int(162493),
                                        },
                                        shared.Date{
                                            Day: sdk.Int(508315),
                                            Month: sdk.Int(615560),
                                            Year: sdk.Int(166847),
                                        },
                                        shared.Date{
                                            Day: sdk.Int(123820),
                                            Month: sdk.Int(779051),
                                            Year: sdk.Int(848009),
                                        },
                                        shared.Date{
                                            Day: sdk.Int(864934),
                                            Month: sdk.Int(807319),
                                            Year: sdk.Int(411397),
                                        },
                                    },
                                },
                                DoubleValues: &shared.DoubleValues{
                                    Values: []float64{
                                        1399.72,
                                        4071.83,
                                        332.22,
                                    },
                                },
                                EnumValues: &shared.EnumValues{
                                    Values: []string{
                                        "maiores",
                                    },
                                },
                                HTMLValues: &shared.HTMLValues{
                                    Values: []string{
                                        "ipsam",
                                        "voluptate",
                                        "autem",
                                    },
                                },
                                IntegerValues: &shared.IntegerValues{
                                    Values: []string{
                                        "eaque",
                                        "pariatur",
                                        "nemo",
                                    },
                                },
                                Name: sdk.String("Joseph Steuber DDS"),
                                ObjectValues: &shared.ObjectValues{
                                    Values: []shared.StructuredDataObject{
                                        shared.StructuredDataObject{},
                                        shared.StructuredDataObject{},
                                    },
                                },
                                TextValues: &shared.TextValues{
                                    Values: []string{
                                        "libero",
                                        "nobis",
                                        "dolores",
                                        "quis",
                                    },
                                },
                                TimestampValues: &shared.TimestampValues{
                                    Values: []string{
                                        "dignissimos",
                                        "eaque",
                                        "quis",
                                    },
                                },
                            },
                        },
                    },
                },
                Version: sdk.String("nesciunt"),
            },
            Mode: shared.IndexItemRequestModeEnumUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("quam"),
        Key: sdk.String("dolor"),
        Name: "Dean Welch",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
    }, operations.CloudsearchIndexingDatasourcesItemsIndexSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsIndexSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsList

Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsList(ctx, operations.CloudsearchIndexingDatasourcesItemsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Brief: sdk.Bool(false),
        Callback: sdk.String("eaque"),
        ConnectorName: sdk.String("occaecati"),
        DebugOptionsEnableDebugging: sdk.Bool(false),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        Name: "Merle Gleichner",
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(864282),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudsearchIndexingDatasourcesItemsListSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListItemsResponse != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsPoll

Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsPoll(ctx, operations.CloudsearchIndexingDatasourcesItemsPollRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PollItemsRequest: &shared.PollItemsRequest{
            ConnectorName: sdk.String("quos"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            Limit: sdk.Int(398221),
            Queue: sdk.String("dolorem"),
            StatusCodes: []shared.PollItemsRequestStatusCodesEnum{
                shared.PollItemsRequestStatusCodesEnumError,
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("cum"),
        Name: "Marian Wisozk",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.CloudsearchIndexingDatasourcesItemsPollSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsPollSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PollItemsResponse != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsPush

Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsPush(ctx, operations.CloudsearchIndexingDatasourcesItemsPushRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PushItemRequest: &shared.PushItemRequest{
            ConnectorName: sdk.String("odio"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            Item: &shared.PushItem{
                ContentHash: sdk.String("quaerat"),
                MetadataHash: sdk.String("accusamus"),
                Payload: sdk.String("quidem"),
                Queue: sdk.String("voluptatibus"),
                RepositoryError: &shared.RepositoryError{
                    ErrorMessage: sdk.String("voluptas"),
                    HTTPStatusCode: sdk.Int(617658),
                    Type: shared.RepositoryErrorTypeEnumNetworkError.ToPointer(),
                },
                StructuredDataHash: sdk.String("atque"),
                Type: shared.PushItemTypeEnumUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        Name: "Sonya Leuschke",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.CloudsearchIndexingDatasourcesItemsPushSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsPushSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Item != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsUnreserve

Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsUnreserve(ctx, operations.CloudsearchIndexingDatasourcesItemsUnreserveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UnreserveItemsRequest: &shared.UnreserveItemsRequest{
            ConnectorName: sdk.String("id"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            Queue: sdk.String("saepe"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("amet"),
        Key: sdk.String("optio"),
        Name: "Tommy Turner",
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudsearchIndexingDatasourcesItemsUnreserveSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsUnreserveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesItemsUpload

Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesItemsUpload(ctx, operations.CloudsearchIndexingDatasourcesItemsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StartUploadItemRequest: &shared.StartUploadItemRequest{
            ConnectorName: sdk.String("alias"),
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Key: sdk.String("quod"),
        Name: "Clarence Parisian",
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.CloudsearchIndexingDatasourcesItemsUploadSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesItemsUploadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadItemRef != nil {
        // handle response
    }
}
```

## CloudsearchIndexingDatasourcesUpdateSchema

Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

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
    res, err := s.Indexing.CloudsearchIndexingDatasourcesUpdateSchema(ctx, operations.CloudsearchIndexingDatasourcesUpdateSchemaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateSchemaRequest: &shared.UpdateSchemaRequest{
            DebugOptions: &shared.DebugOptions{
                EnableDebugging: sdk.Bool(false),
            },
            Schema: &shared.Schema{
                ObjectDefinitions: []shared.ObjectDefinition{
                    shared.ObjectDefinition{
                        Name: sdk.String("Tomas Funk"),
                        Options: &shared.ObjectOptions{
                            DisplayOptions: &shared.ObjectDisplayOptions{
                                Metalines: []shared.Metaline{
                                    shared.Metaline{
                                        Properties: []shared.DisplayedProperty{
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("nihil"),
                                            },
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("sit"),
                                            },
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("expedita"),
                                            },
                                        },
                                    },
                                    shared.Metaline{
                                        Properties: []shared.DisplayedProperty{
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("sed"),
                                            },
                                        },
                                    },
                                    shared.Metaline{
                                        Properties: []shared.DisplayedProperty{
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("libero"),
                                            },
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("voluptas"),
                                            },
                                        },
                                    },
                                    shared.Metaline{
                                        Properties: []shared.DisplayedProperty{
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("quam"),
                                            },
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("ipsum"),
                                            },
                                            shared.DisplayedProperty{
                                                PropertyName: sdk.String("incidunt"),
                                            },
                                        },
                                    },
                                },
                                ObjectDisplayLabel: sdk.String("qui"),
                            },
                            FreshnessOptions: &shared.FreshnessOptions{
                                FreshnessDuration: sdk.String("cupiditate"),
                                FreshnessProperty: sdk.String("maxime"),
                            },
                            SuggestionFilteringOperators: []string{
                                "soluta",
                                "dicta",
                                "laborum",
                                "totam",
                            },
                        },
                        PropertyDefinitions: []shared.PropertyDefinition{
                            shared.PropertyDefinition{
                                BooleanPropertyOptions: &shared.BooleanPropertyOptions{
                                    OperatorOptions: &shared.BooleanOperatorOptions{
                                        OperatorName: sdk.String("aspernatur"),
                                    },
                                },
                                DatePropertyOptions: &shared.DatePropertyOptions{
                                    OperatorOptions: &shared.DateOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("dolores"),
                                        LessThanOperatorName: sdk.String("distinctio"),
                                        OperatorName: sdk.String("facilis"),
                                    },
                                },
                                DisplayOptions: &shared.PropertyDisplayOptions{
                                    DisplayLabel: sdk.String("aliquid"),
                                },
                                DoublePropertyOptions: &shared.DoublePropertyOptions{
                                    OperatorOptions: &shared.DoubleOperatorOptions{
                                        OperatorName: sdk.String("quam"),
                                    },
                                },
                                EnumPropertyOptions: &shared.EnumPropertyOptions{
                                    OperatorOptions: &shared.EnumOperatorOptions{
                                        OperatorName: sdk.String("molestias"),
                                    },
                                    OrderedRanking: shared.EnumPropertyOptionsOrderedRankingEnumDescending.ToPointer(),
                                    PossibleValues: []shared.EnumValuePair{
                                        shared.EnumValuePair{
                                            IntegerValue: sdk.Int(204865),
                                            StringValue: sdk.String("fugit"),
                                        },
                                    },
                                },
                                HTMLPropertyOptions: &shared.HTMLPropertyOptions{
                                    OperatorOptions: &shared.HTMLOperatorOptions{
                                        OperatorName: sdk.String("magni"),
                                    },
                                    RetrievalImportance: &shared.RetrievalImportance{
                                        Importance: shared.RetrievalImportanceImportanceEnumHigh.ToPointer(),
                                    },
                                },
                                IntegerPropertyOptions: &shared.IntegerPropertyOptions{
                                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                                        IntegerBuckets: []string{
                                            "ullam",
                                        },
                                    },
                                    MaximumValue: sdk.String("nam"),
                                    MinimumValue: sdk.String("hic"),
                                    OperatorOptions: &shared.IntegerOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("voluptatem"),
                                        LessThanOperatorName: sdk.String("cumque"),
                                        OperatorName: sdk.String("soluta"),
                                    },
                                    OrderedRanking: shared.IntegerPropertyOptionsOrderedRankingEnumDescending.ToPointer(),
                                },
                                IsFacetable: sdk.Bool(false),
                                IsRepeatable: sdk.Bool(false),
                                IsReturnable: sdk.Bool(false),
                                IsSortable: sdk.Bool(false),
                                IsSuggestable: sdk.Bool(false),
                                IsWildcardSearchable: sdk.Bool(false),
                                Name: sdk.String("Miss Kerry Emmerich"),
                                ObjectPropertyOptions: &shared.ObjectPropertyOptions{
                                    SubobjectProperties: []shared.PropertyDefinition{
                                        shared.PropertyDefinition{},
                                        shared.PropertyDefinition{},
                                        shared.PropertyDefinition{},
                                    },
                                },
                                TextPropertyOptions: &shared.TextPropertyOptions{
                                    OperatorOptions: &shared.TextOperatorOptions{
                                        ExactMatchWithOperator: sdk.Bool(false),
                                        OperatorName: sdk.String("cupiditate"),
                                    },
                                    RetrievalImportance: &shared.RetrievalImportance{
                                        Importance: shared.RetrievalImportanceImportanceEnumDefault.ToPointer(),
                                    },
                                },
                                TimestampPropertyOptions: &shared.TimestampPropertyOptions{
                                    OperatorOptions: &shared.TimestampOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("delectus"),
                                        LessThanOperatorName: sdk.String("dolorem"),
                                        OperatorName: sdk.String("dolore"),
                                    },
                                },
                            },
                            shared.PropertyDefinition{
                                BooleanPropertyOptions: &shared.BooleanPropertyOptions{
                                    OperatorOptions: &shared.BooleanOperatorOptions{
                                        OperatorName: sdk.String("labore"),
                                    },
                                },
                                DatePropertyOptions: &shared.DatePropertyOptions{
                                    OperatorOptions: &shared.DateOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("adipisci"),
                                        LessThanOperatorName: sdk.String("dolorum"),
                                        OperatorName: sdk.String("architecto"),
                                    },
                                },
                                DisplayOptions: &shared.PropertyDisplayOptions{
                                    DisplayLabel: sdk.String("quae"),
                                },
                                DoublePropertyOptions: &shared.DoublePropertyOptions{
                                    OperatorOptions: &shared.DoubleOperatorOptions{
                                        OperatorName: sdk.String("aut"),
                                    },
                                },
                                EnumPropertyOptions: &shared.EnumPropertyOptions{
                                    OperatorOptions: &shared.EnumOperatorOptions{
                                        OperatorName: sdk.String("quas"),
                                    },
                                    OrderedRanking: shared.EnumPropertyOptionsOrderedRankingEnumDescending.ToPointer(),
                                    PossibleValues: []shared.EnumValuePair{
                                        shared.EnumValuePair{
                                            IntegerValue: sdk.Int(669917),
                                            StringValue: sdk.String("repellendus"),
                                        },
                                    },
                                },
                                HTMLPropertyOptions: &shared.HTMLPropertyOptions{
                                    OperatorOptions: &shared.HTMLOperatorOptions{
                                        OperatorName: sdk.String("porro"),
                                    },
                                    RetrievalImportance: &shared.RetrievalImportance{
                                        Importance: shared.RetrievalImportanceImportanceEnumNone.ToPointer(),
                                    },
                                },
                                IntegerPropertyOptions: &shared.IntegerPropertyOptions{
                                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                                        IntegerBuckets: []string{
                                            "facilis",
                                            "cupiditate",
                                        },
                                    },
                                    MaximumValue: sdk.String("qui"),
                                    MinimumValue: sdk.String("quae"),
                                    OperatorOptions: &shared.IntegerOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("laudantium"),
                                        LessThanOperatorName: sdk.String("odio"),
                                        OperatorName: sdk.String("occaecati"),
                                    },
                                    OrderedRanking: shared.IntegerPropertyOptionsOrderedRankingEnumDescending.ToPointer(),
                                },
                                IsFacetable: sdk.Bool(false),
                                IsRepeatable: sdk.Bool(false),
                                IsReturnable: sdk.Bool(false),
                                IsSortable: sdk.Bool(false),
                                IsSuggestable: sdk.Bool(false),
                                IsWildcardSearchable: sdk.Bool(false),
                                Name: sdk.String("Ignacio Moen"),
                                ObjectPropertyOptions: &shared.ObjectPropertyOptions{
                                    SubobjectProperties: []shared.PropertyDefinition{
                                        shared.PropertyDefinition{},
                                        shared.PropertyDefinition{},
                                        shared.PropertyDefinition{},
                                        shared.PropertyDefinition{},
                                    },
                                },
                                TextPropertyOptions: &shared.TextPropertyOptions{
                                    OperatorOptions: &shared.TextOperatorOptions{
                                        ExactMatchWithOperator: sdk.Bool(false),
                                        OperatorName: sdk.String("voluptate"),
                                    },
                                    RetrievalImportance: &shared.RetrievalImportance{
                                        Importance: shared.RetrievalImportanceImportanceEnumHighest.ToPointer(),
                                    },
                                },
                                TimestampPropertyOptions: &shared.TimestampPropertyOptions{
                                    OperatorOptions: &shared.TimestampOperatorOptions{
                                        GreaterThanOperatorName: sdk.String("vero"),
                                        LessThanOperatorName: sdk.String("tenetur"),
                                        OperatorName: sdk.String("dignissimos"),
                                    },
                                },
                            },
                        },
                    },
                },
                OperationIds: []string{
                    "distinctio",
                    "quod",
                    "odio",
                    "similique",
                },
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("quibusdam"),
        Name: "Earl Mosciski DVM",
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("porro"),
    }, operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurity{
        Option1: &operations.CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
