# Query

### Available Operations

* [CloudsearchQuerySearch](#cloudsearchquerysearch) - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [CloudsearchQuerySourcesList](#cloudsearchquerysourceslist) - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [CloudsearchQuerySuggest](#cloudsearchquerysuggest) - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

## CloudsearchQuerySearch

The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

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
    res, err := s.Query.CloudsearchQuerySearch(ctx, operations.CloudsearchQuerySearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchRequest: &shared.SearchRequest{
            ContextAttributes: []shared.ContextAttribute{
                shared.ContextAttribute{
                    Name: sdk.String("Myron Haag"),
                    Values: []string{
                        "non",
                    },
                },
            },
            DataSourceRestrictions: []shared.DataSourceRestriction{
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("velit"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(432148),
                                            Month: sdk.Int(420539),
                                            Year: sdk.Int(752135),
                                        },
                                        DoubleValue: sdk.Float64(5573.69),
                                        IntegerValue: sdk.String("assumenda"),
                                        StringValue: sdk.String("nulla"),
                                        TimestampValue: sdk.String("voluptas"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("libero"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("numquam"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(131482),
                                            Month: sdk.Int(591935),
                                            Year: sdk.Int(55374),
                                        },
                                        DoubleValue: sdk.Float64(4764.77),
                                        IntegerValue: sdk.String("magnam"),
                                        StringValue: sdk.String("odio"),
                                        TimestampValue: sdk.String("eius"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("esse"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("fuga"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(442015),
                                            Month: sdk.Int(695626),
                                            Year: sdk.Int(852635),
                                        },
                                        DoubleValue: sdk.Float64(2835.19),
                                        IntegerValue: sdk.String("eum"),
                                        StringValue: sdk.String("suscipit"),
                                        TimestampValue: sdk.String("assumenda"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("eos"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Miss Devin Bogan"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumQueryHistory.ToPointer(),
                    },
                },
            },
            FacetOptions: []shared.FacetOptions{
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "quo",
                            "fuga",
                            "eius",
                            "eos",
                        },
                    },
                    NumFacetBuckets: sdk.Int(373813),
                    ObjectType: sdk.String("ab"),
                    OperatorName: sdk.String("cupiditate"),
                    SourceName: sdk.String("consequatur"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "debitis",
                            "ipsam",
                        },
                    },
                    NumFacetBuckets: sdk.Int(133465),
                    ObjectType: sdk.String("sequi"),
                    OperatorName: sdk.String("quo"),
                    SourceName: sdk.String("esse"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "aperiam",
                            "distinctio",
                            "quod",
                            "dignissimos",
                        },
                    },
                    NumFacetBuckets: sdk.Int(76956),
                    ObjectType: sdk.String("nihil"),
                    OperatorName: sdk.String("totam"),
                    SourceName: sdk.String("accusamus"),
                },
                shared.FacetOptions{
                    IntegerFacetingOptions: &shared.IntegerFacetingOptions{
                        IntegerBuckets: []string{
                            "odio",
                            "occaecati",
                        },
                    },
                    NumFacetBuckets: sdk.Int(414567),
                    ObjectType: sdk.String("sapiente"),
                    OperatorName: sdk.String("dolores"),
                    SourceName: sdk.String("deserunt"),
                },
            },
            PageSize: sdk.Int(475289),
            Query: sdk.String("accusantium"),
            QueryInterpretationOptions: &shared.QueryInterpretationOptions{
                DisableNlInterpretation: sdk.Bool(false),
                DisableSupplementalResults: sdk.Bool(false),
                EnableVerbatimMode: sdk.Bool(false),
            },
            RequestOptions: &shared.RequestOptions{
                DebugOptions: &shared.DebugOptions{
                    EnableDebugging: sdk.Bool(false),
                },
                LanguageCode: sdk.String("porro"),
                SearchApplicationID: sdk.String("eum"),
                TimeZone: sdk.String("quas"),
            },
            SortOptions: &shared.SortOptions{
                OperatorName: sdk.String("praesentium"),
                SortOrder: shared.SortOptionsSortOrderEnumAscending.ToPointer(),
            },
            Start: sdk.Int(536178),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.CloudsearchQuerySearchSecurity{
        Option1: &operations.CloudsearchQuerySearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```

## CloudsearchQuerySourcesList

Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

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
    res, err := s.Query.CloudsearchQuerySourcesList(ctx, operations.CloudsearchQuerySourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("atque"),
        PageToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RequestOptionsDebugOptionsEnableDebugging: sdk.Bool(false),
        RequestOptionsLanguageCode: sdk.String("eveniet"),
        RequestOptionsSearchApplicationID: sdk.String("accusamus"),
        RequestOptionsTimeZone: sdk.String("veritatis"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("quod"),
    }, operations.CloudsearchQuerySourcesListSecurity{
        Option1: &operations.CloudsearchQuerySourcesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQuerySourcesResponse != nil {
        // handle response
    }
}
```

## CloudsearchQuerySuggest

Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

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
    res, err := s.Query.CloudsearchQuerySuggest(ctx, operations.CloudsearchQuerySuggestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SuggestRequest: &shared.SuggestRequest{
            DataSourceRestrictions: []shared.DataSourceRestriction{
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("vel"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(690025),
                                            Month: sdk.Int(473221),
                                            Year: sdk.Int(699622),
                                        },
                                        DoubleValue: sdk.Float64(5801.97),
                                        IntegerValue: sdk.String("minima"),
                                        StringValue: sdk.String("distinctio"),
                                        TimestampValue: sdk.String("eligendi"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("sit"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("adipisci"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(766964),
                                            Month: sdk.Int(160538),
                                            Year: sdk.Int(9766),
                                        },
                                        DoubleValue: sdk.Float64(7963.92),
                                        IntegerValue: sdk.String("quaerat"),
                                        StringValue: sdk.String("sapiente"),
                                        TimestampValue: sdk.String("consectetur"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("esse"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Eduardo Wilkinson"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGmail.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumNot.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("sint"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(863023),
                                            Month: sdk.Int(820767),
                                            Year: sdk.Int(157632),
                                        },
                                        DoubleValue: sdk.Float64(9088.44),
                                        IntegerValue: sdk.String("asperiores"),
                                        StringValue: sdk.String("facere"),
                                        TimestampValue: sdk.String("veritatis"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("consequuntur"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Hattie Nader"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumNone.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("eius"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(727697),
                                            Month: sdk.Int(849039),
                                            Year: sdk.Int(742238),
                                        },
                                        DoubleValue: sdk.Float64(333.04),
                                        IntegerValue: sdk.String("aliquam"),
                                        StringValue: sdk.String("sapiente"),
                                        TimestampValue: sdk.String("dicta"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("ullam"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("nisi"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(16328),
                                            Month: sdk.Int(531849),
                                            Year: sdk.Int(185232),
                                        },
                                        DoubleValue: sdk.Float64(8453.58),
                                        IntegerValue: sdk.String("ex"),
                                        StringValue: sdk.String("deleniti"),
                                        TimestampValue: sdk.String("itaque"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("dolorum"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("tenetur"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(98478),
                                            Month: sdk.Int(869489),
                                            Year: sdk.Int(92027),
                                        },
                                        DoubleValue: sdk.Float64(4541.62),
                                        IntegerValue: sdk.String("ipsa"),
                                        StringValue: sdk.String("minima"),
                                        TimestampValue: sdk.String("veritatis"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("consectetur"),
                        },
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumAnd.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                        shared.Filter{},
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("temporibus"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(33074),
                                            Month: sdk.Int(522371),
                                            Year: sdk.Int(15606),
                                        },
                                        DoubleValue: sdk.Float64(5130.75),
                                        IntegerValue: sdk.String("eum"),
                                        StringValue: sdk.String("mollitia"),
                                        TimestampValue: sdk.String("ab"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("corrupti"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Donna Ernser"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleGroups.ToPointer(),
                    },
                },
                shared.DataSourceRestriction{
                    FilterOptions: []shared.FilterOptions{
                        shared.FilterOptions{
                            Filter: &shared.Filter{
                                CompositeFilter: &shared.CompositeFilter{
                                    LogicOperator: shared.CompositeFilterLogicOperatorEnumOr.ToPointer(),
                                    SubFilters: []shared.Filter{
                                        shared.Filter{},
                                    },
                                },
                                ValueFilter: &shared.ValueFilter{
                                    OperatorName: sdk.String("dignissimos"),
                                    Value: &shared.Value{
                                        BooleanValue: sdk.Bool(false),
                                        DateValue: &shared.Date{
                                            Day: sdk.Int(115484),
                                            Month: sdk.Int(981640),
                                            Year: sdk.Int(618480),
                                        },
                                        DoubleValue: sdk.Float64(2446.51),
                                        IntegerValue: sdk.String("voluptatibus"),
                                        StringValue: sdk.String("voluptas"),
                                        TimestampValue: sdk.String("asperiores"),
                                    },
                                },
                            },
                            ObjectType: sdk.String("aperiam"),
                        },
                    },
                    Source: &shared.Source{
                        Name: sdk.String("Bertha Cruickshank"),
                        PredefinedSource: shared.SourcePredefinedSourceEnumGoogleCalendar.ToPointer(),
                    },
                },
            },
            Query: sdk.String("dignissimos"),
            RequestOptions: &shared.RequestOptions{
                DebugOptions: &shared.DebugOptions{
                    EnableDebugging: sdk.Bool(false),
                },
                LanguageCode: sdk.String("officia"),
                SearchApplicationID: sdk.String("asperiores"),
                TimeZone: sdk.String("nemo"),
            },
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("quod"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("id"),
    }, operations.CloudsearchQuerySuggestSecurity{
        Option1: &operations.CloudsearchQuerySuggestSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestResponse != nil {
        // handle response
    }
}
```
