# Projects

### Available Operations

* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate](#discoveryengineprojectslocationsdatastoresbranchesdocumentscreate) - Creates a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete](#discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete) - Deletes a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImport](#discoveryengineprojectslocationsdatastoresbranchesdocumentsimport) - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsList](#discoveryengineprojectslocationsdatastoresbranchesdocumentslist) - Gets a list of Documents.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch](#discoveryengineprojectslocationsdatastoresbranchesdocumentspatch) - Updates a Document.
* [DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge](#discoveryengineprojectslocationsdatastoresbranchesdocumentspurge) - Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.
* [DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommend](#discoveryengineprojectslocationsdatastoresservingconfigsrecommend) - Makes a recommendation, which requires a contextual user event.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsCollect](#discoveryengineprojectslocationsdatastoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsImport](#discoveryengineprojectslocationsdatastoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [DiscoveryengineProjectsLocationsDataStoresUserEventsWrite](#discoveryengineprojectslocationsdatastoresusereventswrite) - Writes a single user event.
* [DiscoveryengineProjectsOperationsGet](#discoveryengineprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DiscoveryengineProjectsOperationsList](#discoveryengineprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate

Creates a Document.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDiscoveryengineV1betaDocument: &shared.GoogleCloudDiscoveryengineV1betaDocument{
            ID: sdk.String("2cb73920-5929-4396-bea7-596eb10faaa2"),
            JSONData: sdk.String("dolorem"),
            Name: sdk.String("Rose Rolfson"),
            ParentDocumentID: sdk.String("nemo"),
            SchemaID: sdk.String("minima"),
            StructData: map[string]interface{}{
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        DocumentID: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("occaecati"),
        Parent: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaDocument != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete

Deletes a Document.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        Name: "Bill Conn",
        OauthToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImport

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImport(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDiscoveryengineV1betaImportDocumentsRequest: &shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequest{
            BigquerySource: &shared.GoogleCloudDiscoveryengineV1betaBigQuerySource{
                DataSchema: sdk.String("quasi"),
                DatasetID: sdk.String("error"),
                GcsStagingDir: sdk.String("temporibus"),
                PartitionDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(673660),
                    Month: sdk.Int(96098),
                    Year: sdk.Int(971945),
                },
                ProjectID: sdk.String("voluptatibus"),
                TableID: sdk.String("vero"),
            },
            ErrorConfig: &shared.GoogleCloudDiscoveryengineV1betaImportErrorConfig{
                GcsPrefix: sdk.String("nihil"),
            },
            GcsSource: &shared.GoogleCloudDiscoveryengineV1betaGcsSource{
                DataSchema: sdk.String("praesentium"),
                InputUris: []string{
                    "ipsa",
                    "omnis",
                    "voluptate",
                    "cum",
                },
            },
            InlineSource: &shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource{
                Documents: []shared.GoogleCloudDiscoveryengineV1betaDocument{
                    shared.GoogleCloudDiscoveryengineV1betaDocument{
                        ID: sdk.String("074f1547-1b5e-46e1-bb99-d488e1e91e45"),
                        JSONData: sdk.String("consequatur"),
                        Name: sdk.String("Taylor Cole"),
                        ParentDocumentID: sdk.String("quibusdam"),
                        SchemaID: sdk.String("labore"),
                        StructData: map[string]interface{}{
                            "qui": "aliquid",
                            "cupiditate": "quos",
                        },
                    },
                },
            },
            ReconciliationMode: shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnumReconciliationModeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsList

Gets a list of Documents.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsList(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("aliquid"),
        PageSize: sdk.Int64(592042),
        PageToken: sdk.String("necessitatibus"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaListDocumentsResponse != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch

Updates a Document.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1betaDocument: &shared.GoogleCloudDiscoveryengineV1betaDocument{
            ID: sdk.String("a77dfb14-cd66-4ae3-95ef-b9ba88f3a669"),
            JSONData: sdk.String("omnis"),
            Name: sdk.String("Dorothy Kovacek"),
            ParentDocumentID: sdk.String("id"),
            SchemaID: sdk.String("labore"),
            StructData: map[string]interface{}{
                "suscipit": "natus",
                "nobis": "eum",
            },
        },
        AccessToken: sdk.String("vero"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("et"),
        Name: "Derrick McLaughlin",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaDocument != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge

Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest: &shared.GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest{
            Filter: sdk.String("eum"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("iure"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommend

Makes a recommendation, which requires a contextual user event.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommend(ctx, operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1betaRecommendRequest: &shared.GoogleCloudDiscoveryengineV1betaRecommendRequest{
            Filter: sdk.String("facilis"),
            PageSize: sdk.Int(447926),
            Params: map[string]interface{}{
                "architecto": "repudiandae",
            },
            UserEvent: &shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                    "expedita": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                        Numbers: []float64{
                            9988.48,
                            8411.4,
                        },
                        Text: []string{
                            "saepe",
                        },
                    },
                    "pariatur": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                        Numbers: []float64{
                            1624.93,
                        },
                        Text: []string{
                            "natus",
                            "magni",
                            "sunt",
                        },
                    },
                },
                AttributionToken: sdk.String("quo"),
                CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                    SelectedPosition: sdk.Int(848009),
                    SelectedSuggestion: sdk.String("pariatur"),
                },
                DirectUserRequest: sdk.Bool(false),
                Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                    shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                        ID: sdk.String("692601fb-576b-40d5-b0d3-0c5fbb258705"),
                        Name: sdk.String("Ruby Auer"),
                        PromotionIds: []string{
                            "dolor",
                            "vero",
                        },
                        Quantity: sdk.Int(345352),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                        ID: sdk.String("fe9b90c2-8909-4b3f-a49a-8d9cbf486333"),
                        Name: sdk.String("Tiffany Welch"),
                        PromotionIds: []string{
                            "dignissimos",
                            "reiciendis",
                        },
                        Quantity: sdk.Int(227414),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                        ID: sdk.String("a4100674-ebf6-4928-8d1b-a77a89ebf737"),
                        Name: sdk.String("Elbert Gislason I"),
                        PromotionIds: []string{
                            "accusamus",
                            "ad",
                            "saepe",
                            "suscipit",
                        },
                        Quantity: sdk.Int(645785),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                        ID: sdk.String("95d8a0d4-46ce-42af-ba73-cf3be453f870"),
                        Name: sdk.String("Luis Cremin"),
                        PromotionIds: []string{
                            "deserunt",
                            "quam",
                        },
                        Quantity: sdk.Int(214880),
                    },
                },
                EventTime: sdk.String("incidunt"),
                EventType: sdk.String("qui"),
                Filter: sdk.String("cupiditate"),
                MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                    MediaProgressDuration: sdk.String("maxime"),
                    MediaProgressPercentage: sdk.Float32(8638.56),
                },
                PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                    PageCategory: sdk.String("soluta"),
                    PageviewID: sdk.String("dicta"),
                    ReferrerURI: sdk.String("laborum"),
                    URI: sdk.String("https://feisty-carnival.biz"),
                },
                Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                    DisplayName: sdk.String("distinctio"),
                    PanelID: sdk.String("facilis"),
                    PanelPosition: sdk.Int(396060),
                    TotalPanels: sdk.Int(463150),
                },
                PromotionIds: []string{
                    "temporibus",
                    "qui",
                    "neque",
                },
                SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                    Offset: sdk.Int(144847),
                    OrderBy: sdk.String("magni"),
                    SearchQuery: sdk.String("odio"),
                },
                SessionID: sdk.String("sunt"),
                TagIds: []string{
                    "nam",
                    "hic",
                },
                TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                    Cost: sdk.Float32(304.52),
                    Currency: sdk.String("cumque"),
                    DiscountValue: sdk.Float32(7469.94),
                    Tax: sdk.Float32(7486.64),
                    TransactionID: sdk.String("et"),
                    Value: sdk.Float32(9037.2),
                },
                UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                    UserAgent: sdk.String("ipsum"),
                    UserID: sdk.String("veritatis"),
                },
                UserPseudoID: sdk.String("nobis"),
            },
            UserLabels: map[string]string{
                "tempore": "cupiditate",
                "aperiam": "delectus",
                "dolorem": "dolore",
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        ServingConfig: "itaque",
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaRecommendResponse != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresUserEventsCollect(ctx, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ut"),
        Ets: sdk.String("facilis"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("quae"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("voluptatibus"),
        URI: sdk.String("https://tubby-occurrence.info"),
        UserEvent: sdk.String("ipsum"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresUserEventsImport(ctx, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1betaImportUserEventsRequest: &shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest{
            BigquerySource: &shared.GoogleCloudDiscoveryengineV1betaBigQuerySource{
                DataSchema: sdk.String("voluptate"),
                DatasetID: sdk.String("consectetur"),
                GcsStagingDir: sdk.String("vero"),
                PartitionDate: &shared.GoogleTypeDate{
                    Day: sdk.Int(949319),
                    Month: sdk.Int(492268),
                    Year: sdk.Int(941378),
                },
                ProjectID: sdk.String("distinctio"),
                TableID: sdk.String("quod"),
            },
            ErrorConfig: &shared.GoogleCloudDiscoveryengineV1betaImportErrorConfig{
                GcsPrefix: sdk.String("odio"),
            },
            GcsSource: &shared.GoogleCloudDiscoveryengineV1betaGcsSource{
                DataSchema: sdk.String("similique"),
                InputUris: []string{
                    "vero",
                    "ducimus",
                    "dolore",
                },
            },
            InlineSource: &shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource{
                UserEvents: []shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                    shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                        Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                            "sequi": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    7733.26,
                                    132.36,
                                    9742.59,
                                },
                                Text: []string{
                                    "nulla",
                                    "fugit",
                                },
                            },
                            "porro": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    9850.33,
                                    4783.7,
                                    7535.7,
                                    4973.91,
                                },
                                Text: []string{
                                    "officia",
                                },
                            },
                            "tempora": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    4104.92,
                                    1369,
                                },
                                Text: []string{
                                    "possimus",
                                    "magnam",
                                },
                            },
                            "ratione": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    5113.19,
                                    1206.57,
                                },
                                Text: []string{
                                    "maiores",
                                },
                            },
                        },
                        AttributionToken: sdk.String("quasi"),
                        CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                            SelectedPosition: sdk.Int(406120),
                            SelectedSuggestion: sdk.String("nulla"),
                        },
                        DirectUserRequest: sdk.Bool(false),
                        Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("f5fce6c5-5614-46c3-a250-fb008c42e141"),
                                Name: sdk.String("Neal Schroeder"),
                                PromotionIds: []string{
                                    "nobis",
                                    "quas",
                                },
                                Quantity: sdk.Int(829603),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("d6b14429-0747-4477-8a7b-d466d28c10ab"),
                                Name: sdk.String("Angelica Stamm"),
                                PromotionIds: []string{
                                    "eos",
                                    "voluptas",
                                },
                                Quantity: sdk.Int(69859),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("904e523c-7e0b-4c71-b8e4-796f2a70c688"),
                                Name: sdk.String("Cassandra Considine"),
                                PromotionIds: []string{
                                    "atque",
                                    "explicabo",
                                },
                                Quantity: sdk.Int(325685),
                            },
                        },
                        EventTime: sdk.String("nisi"),
                        EventType: sdk.String("fugit"),
                        Filter: sdk.String("sapiente"),
                        MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                            MediaProgressDuration: sdk.String("consequuntur"),
                            MediaProgressPercentage: sdk.Float32(1871.31),
                        },
                        PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                            PageCategory: sdk.String("explicabo"),
                            PageviewID: sdk.String("saepe"),
                            ReferrerURI: sdk.String("occaecati"),
                            URI: sdk.String("https://brisk-indicator.org"),
                        },
                        Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                            DisplayName: sdk.String("accusamus"),
                            PanelID: sdk.String("veritatis"),
                            PanelPosition: sdk.Int(458604),
                            TotalPanels: sdk.Int(800379),
                        },
                        PromotionIds: []string{
                            "vero",
                            "aliquid",
                            "quasi",
                        },
                        SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                            Offset: sdk.Int(904045),
                            OrderBy: sdk.String("vel"),
                            SearchQuery: sdk.String("harum"),
                        },
                        SessionID: sdk.String("molestiae"),
                        TagIds: []string{
                            "occaecati",
                            "minima",
                            "distinctio",
                        },
                        TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                            Cost: sdk.Float32(7567.79),
                            Currency: sdk.String("sit"),
                            DiscountValue: sdk.Float32(6360.61),
                            Tax: sdk.Float32(7313.98),
                            TransactionID: sdk.String("adipisci"),
                            Value: sdk.Float32(7669.64),
                        },
                        UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                            UserAgent: sdk.String("consequuntur"),
                            UserID: sdk.String("consequatur"),
                        },
                        UserPseudoID: sdk.String("minus"),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                        Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                            "sapiente": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    4581.39,
                                },
                                Text: []string{
                                    "provident",
                                    "a",
                                    "nulla",
                                },
                            },
                            "quas": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    974.68,
                                    9518.75,
                                },
                                Text: []string{
                                    "sint",
                                    "pariatur",
                                    "possimus",
                                },
                            },
                        },
                        AttributionToken: sdk.String("quia"),
                        CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                            SelectedPosition: sdk.Int(908844),
                            SelectedSuggestion: sdk.String("asperiores"),
                        },
                        DirectUserRequest: sdk.Bool(false),
                        Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("121aa6f1-e674-4bdb-84f1-5756082d68ea"),
                                Name: sdk.String("Dr. Belinda West III"),
                                PromotionIds: []string{
                                    "minima",
                                },
                                Quantity: sdk.Int(86532),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("339d0808-6a18-4403-94c2-6071f93f5f06"),
                                Name: sdk.String("Kathryn Sipes"),
                                PromotionIds: []string{
                                    "officia",
                                    "asperiores",
                                },
                                Quantity: sdk.Int(368102),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("15cc413a-a63a-4ae8-9678-64dbb675fd5e"),
                                Name: sdk.String("Kimberly Ritchie"),
                                PromotionIds: []string{
                                    "earum",
                                    "facere",
                                },
                                Quantity: sdk.Int(257233),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("f6fbee41-f333-417f-a35b-60eb1ea42655"),
                                Name: sdk.String("Gayle Parisian"),
                                PromotionIds: []string{
                                    "blanditiis",
                                },
                                Quantity: sdk.Int(449292),
                            },
                        },
                        EventTime: sdk.String("dolore"),
                        EventType: sdk.String("aliquam"),
                        Filter: sdk.String("officiis"),
                        MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                            MediaProgressDuration: sdk.String("temporibus"),
                            MediaProgressPercentage: sdk.Float32(3518.7),
                        },
                        PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                            PageCategory: sdk.String("adipisci"),
                            PageviewID: sdk.String("cum"),
                            ReferrerURI: sdk.String("blanditiis"),
                            URI: sdk.String("https://warped-context.name"),
                        },
                        Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                            DisplayName: sdk.String("corrupti"),
                            PanelID: sdk.String("pariatur"),
                            PanelPosition: sdk.Int(519643),
                            TotalPanels: sdk.Int(940210),
                        },
                        PromotionIds: []string{
                            "nobis",
                            "sit",
                        },
                        SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                            Offset: sdk.Int(699575),
                            OrderBy: sdk.String("sed"),
                            SearchQuery: sdk.String("reiciendis"),
                        },
                        SessionID: sdk.String("explicabo"),
                        TagIds: []string{
                            "facilis",
                            "voluptate",
                            "expedita",
                            "ab",
                        },
                        TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                            Cost: sdk.Float32(6117.49),
                            Currency: sdk.String("dolore"),
                            DiscountValue: sdk.Float32(6719.07),
                            Tax: sdk.Float32(1523.54),
                            TransactionID: sdk.String("in"),
                            Value: sdk.Float32(4174.86),
                        },
                        UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                            UserAgent: sdk.String("quidem"),
                            UserID: sdk.String("explicabo"),
                        },
                        UserPseudoID: sdk.String("voluptas"),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                        Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                            "architecto": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    9602.57,
                                    8953.86,
                                },
                                Text: []string{
                                    "reiciendis",
                                },
                            },
                            "perferendis": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    9795.74,
                                    2748.23,
                                    1484.78,
                                },
                                Text: []string{
                                    "eius",
                                    "necessitatibus",
                                    "ipsum",
                                },
                            },
                            "ea": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    5520.78,
                                    9757.52,
                                    2716.53,
                                },
                                Text: []string{
                                    "voluptate",
                                    "reiciendis",
                                },
                            },
                        },
                        AttributionToken: sdk.String("ex"),
                        CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                            SelectedPosition: sdk.Int(25497),
                            SelectedSuggestion: sdk.String("non"),
                        },
                        DirectUserRequest: sdk.Bool(false),
                        Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("8b445e80-ca55-4efd-a0e4-57e1858b6a89"),
                                Name: sdk.String("Rudolph Trantow"),
                                PromotionIds: []string{
                                    "officia",
                                    "dolorum",
                                },
                                Quantity: sdk.Int(548361),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("e4824d0a-b407-4508-8e51-862065e904f3"),
                                Name: sdk.String("Gerald Bradtke"),
                                PromotionIds: []string{
                                    "atque",
                                    "laborum",
                                    "nam",
                                },
                                Quantity: sdk.Int(948861),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("603a79f9-dfe0-4ab7-9a8a-50ce187f86bc"),
                                Name: sdk.String("Georgia Farrell"),
                                PromotionIds: []string{
                                    "error",
                                    "officiis",
                                    "officiis",
                                },
                                Quantity: sdk.Int(880107),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("9526f8d9-86e8-481e-ad4f-0e1012563f94"),
                                Name: sdk.String("Carlos McClure"),
                                PromotionIds: []string{
                                    "adipisci",
                                    "eveniet",
                                },
                                Quantity: sdk.Int(580887),
                            },
                        },
                        EventTime: sdk.String("consequuntur"),
                        EventType: sdk.String("fugit"),
                        Filter: sdk.String("id"),
                        MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                            MediaProgressDuration: sdk.String("quis"),
                            MediaProgressPercentage: sdk.Float32(4402.64),
                        },
                        PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                            PageCategory: sdk.String("error"),
                            PageviewID: sdk.String("illo"),
                            ReferrerURI: sdk.String("corporis"),
                            URI: sdk.String("https://unwitting-degree.org"),
                        },
                        Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                            DisplayName: sdk.String("doloremque"),
                            PanelID: sdk.String("iure"),
                            PanelPosition: sdk.Int(59944),
                            TotalPanels: sdk.Int(517612),
                        },
                        PromotionIds: []string{
                            "molestiae",
                        },
                        SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                            Offset: sdk.Int(907733),
                            OrderBy: sdk.String("qui"),
                            SearchQuery: sdk.String("cum"),
                        },
                        SessionID: sdk.String("iure"),
                        TagIds: []string{
                            "ratione",
                            "laborum",
                            "distinctio",
                            "voluptatum",
                        },
                        TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                            Cost: sdk.Float32(5230.06),
                            Currency: sdk.String("aliquam"),
                            DiscountValue: sdk.Float32(3205.65),
                            Tax: sdk.Float32(9979.63),
                            TransactionID: sdk.String("alias"),
                            Value: sdk.Float32(3621.89),
                        },
                        UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                            UserAgent: sdk.String("perspiciatis"),
                            UserID: sdk.String("nihil"),
                        },
                        UserPseudoID: sdk.String("mollitia"),
                    },
                    shared.GoogleCloudDiscoveryengineV1betaUserEvent{
                        Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                            "alias": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    9702.22,
                                    1746.58,
                                    6638.66,
                                    3279.88,
                                },
                                Text: []string{
                                    "dolorum",
                                    "nesciunt",
                                },
                            },
                            "quae": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                                Numbers: []float64{
                                    6072.49,
                                    3092.51,
                                    4776.46,
                                    4032.18,
                                },
                                Text: []string{
                                    "culpa",
                                    "adipisci",
                                },
                            },
                        },
                        AttributionToken: sdk.String("debitis"),
                        CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                            SelectedPosition: sdk.Int(514513),
                            SelectedSuggestion: sdk.String("eum"),
                        },
                        DirectUserRequest: sdk.Bool(false),
                        Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("e7956f92-51a5-4a9d-a660-ff57bfaad4f9"),
                                Name: sdk.String("Miss Timmy Runolfsdottir"),
                                PromotionIds: []string{
                                    "inventore",
                                    "fugit",
                                },
                                Quantity: sdk.Int(765271),
                            },
                            shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                                ID: sdk.String("1032648d-c2f6-4151-99eb-fd0e9fe6c632"),
                                Name: sdk.String("Grant Dickens"),
                                PromotionIds: []string{
                                    "consequatur",
                                    "quasi",
                                    "et",
                                    "ducimus",
                                },
                                Quantity: sdk.Int(619183),
                            },
                        },
                        EventTime: sdk.String("occaecati"),
                        EventType: sdk.String("suscipit"),
                        Filter: sdk.String("adipisci"),
                        MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                            MediaProgressDuration: sdk.String("quasi"),
                            MediaProgressPercentage: sdk.Float32(1690.25),
                        },
                        PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                            PageCategory: sdk.String("doloribus"),
                            PageviewID: sdk.String("nulla"),
                            ReferrerURI: sdk.String("necessitatibus"),
                            URI: sdk.String("http://fat-interpretation.info"),
                        },
                        Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                            DisplayName: sdk.String("dicta"),
                            PanelID: sdk.String("iusto"),
                            PanelPosition: sdk.Int(457059),
                            TotalPanels: sdk.Int(508390),
                        },
                        PromotionIds: []string{
                            "reiciendis",
                            "vel",
                            "architecto",
                            "fugiat",
                        },
                        SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                            Offset: sdk.Int(39650),
                            OrderBy: sdk.String("dicta"),
                            SearchQuery: sdk.String("odio"),
                        },
                        SessionID: sdk.String("tempora"),
                        TagIds: []string{
                            "ex",
                            "consectetur",
                        },
                        TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                            Cost: sdk.Float32(3998.12),
                            Currency: sdk.String("ipsa"),
                            DiscountValue: sdk.Float32(6713.84),
                            Tax: sdk.Float32(1238.44),
                            TransactionID: sdk.String("nostrum"),
                            Value: sdk.Float32(8567.56),
                        },
                        UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                            UserAgent: sdk.String("expedita"),
                            UserID: sdk.String("aliquid"),
                        },
                        UserPseudoID: sdk.String("officia"),
                    },
                },
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("iste"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsLocationsDataStoresUserEventsWrite

Writes a single user event.

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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresUserEventsWrite(ctx, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1betaUserEvent: &shared.GoogleCloudDiscoveryengineV1betaUserEvent{
            Attributes: map[string]shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                "laborum": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                    Numbers: []float64{
                        3240.83,
                        5369.23,
                        3162.2,
                    },
                    Text: []string{
                        "repellendus",
                    },
                },
                "ex": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                    Numbers: []float64{
                        4053.73,
                        2811.53,
                        3210.43,
                        7139.27,
                    },
                    Text: []string{
                        "molestias",
                    },
                },
                "cum": shared.GoogleCloudDiscoveryengineV1betaCustomAttribute{
                    Numbers: []float64{
                        1097.84,
                        5308.6,
                    },
                    Text: []string{
                        "veritatis",
                        "rerum",
                        "est",
                    },
                },
            },
            AttributionToken: sdk.String("culpa"),
            CompletionInfo: &shared.GoogleCloudDiscoveryengineV1betaCompletionInfo{
                SelectedPosition: sdk.Int(29634),
                SelectedSuggestion: sdk.String("sapiente"),
            },
            DirectUserRequest: sdk.Bool(false),
            Documents: []shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                    ID: sdk.String("1ade008e-6f8c-45f3-90d8-cdb5a3418143"),
                    Name: sdk.String("Alice Bailey"),
                    PromotionIds: []string{
                        "laudantium",
                    },
                    Quantity: sdk.Int(65604),
                },
                shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                    ID: sdk.String("3d5208ec-e7e2-453b-a684-51c6c6e205e1"),
                    Name: sdk.String("Teri Thiel"),
                    PromotionIds: []string{
                        "doloribus",
                    },
                    Quantity: sdk.Int(918092),
                },
                shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                    ID: sdk.String("c9578a64-5842-473a-8418-d162309fb092"),
                    Name: sdk.String("Miss Joey Dach"),
                    PromotionIds: []string{
                        "distinctio",
                        "omnis",
                        "delectus",
                        "minima",
                    },
                    Quantity: sdk.Int(507636),
                },
                shared.GoogleCloudDiscoveryengineV1betaDocumentInfo{
                    ID: sdk.String("c4d86e68-e4be-4056-813f-59da757a59ec"),
                    Name: sdk.String("Alonzo Zemlak"),
                    PromotionIds: []string{
                        "delectus",
                        "quae",
                        "minus",
                        "fuga",
                    },
                    Quantity: sdk.Int(675689),
                },
            },
            EventTime: sdk.String("consectetur"),
            EventType: sdk.String("velit"),
            Filter: sdk.String("atque"),
            MediaInfo: &shared.GoogleCloudDiscoveryengineV1betaMediaInfo{
                MediaProgressDuration: sdk.String("ipsum"),
                MediaProgressPercentage: sdk.Float32(7730.35),
            },
            PageInfo: &shared.GoogleCloudDiscoveryengineV1betaPageInfo{
                PageCategory: sdk.String("magni"),
                PageviewID: sdk.String("soluta"),
                ReferrerURI: sdk.String("repudiandae"),
                URI: sdk.String("https://flowery-jug.info"),
            },
            Panel: &shared.GoogleCloudDiscoveryengineV1betaPanelInfo{
                DisplayName: sdk.String("sequi"),
                PanelID: sdk.String("dignissimos"),
                PanelPosition: sdk.Int(205566),
                TotalPanels: sdk.Int(778172),
            },
            PromotionIds: []string{
                "quibusdam",
                "iure",
                "odit",
            },
            SearchInfo: &shared.GoogleCloudDiscoveryengineV1betaSearchInfo{
                Offset: sdk.Int(974990),
                OrderBy: sdk.String("vel"),
                SearchQuery: sdk.String("magnam"),
            },
            SessionID: sdk.String("quibusdam"),
            TagIds: []string{
                "facere",
            },
            TransactionInfo: &shared.GoogleCloudDiscoveryengineV1betaTransactionInfo{
                Cost: sdk.Float32(7268.78),
                Currency: sdk.String("architecto"),
                DiscountValue: sdk.Float32(9754.25),
                Tax: sdk.Float32(1563.83),
                TransactionID: sdk.String("porro"),
                Value: sdk.Float32(3041.98),
            },
            UserInfo: &shared.GoogleCloudDiscoveryengineV1betaUserInfo{
                UserAgent: sdk.String("velit"),
                UserID: sdk.String("illo"),
            },
            UserPseudoID: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("vero"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("eum"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("earum"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1betaUserEvent != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsOperationsGet

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
    res, err := s.Projects.DiscoveryengineProjectsOperationsGet(ctx, operations.DiscoveryengineProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("alias"),
        Name: "Lorena Flatley",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.DiscoveryengineProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DiscoveryengineProjectsOperationsList

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
    res, err := s.Projects.DiscoveryengineProjectsOperationsList(ctx, operations.DiscoveryengineProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("facilis"),
        Name: "Freddie Quitzon",
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(351936),
        PageToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.DiscoveryengineProjectsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
