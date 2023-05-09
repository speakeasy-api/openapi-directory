# Queries

### Available Operations

* [DoubleclickbidmanagerQueriesCreate](#doubleclickbidmanagerqueriescreate) - Creates a query.
* [DoubleclickbidmanagerQueriesDelete](#doubleclickbidmanagerqueriesdelete) - Deletes a query as well as the associated reports.
* [DoubleclickbidmanagerQueriesGet](#doubleclickbidmanagerqueriesget) - Retrieves a query.
* [DoubleclickbidmanagerQueriesList](#doubleclickbidmanagerquerieslist) - Lists queries created by the current user.
* [DoubleclickbidmanagerQueriesReportsGet](#doubleclickbidmanagerqueriesreportsget) - Retrieves a report.
* [DoubleclickbidmanagerQueriesReportsList](#doubleclickbidmanagerqueriesreportslist) - Lists reports associated with a query.
* [DoubleclickbidmanagerQueriesRun](#doubleclickbidmanagerqueriesrun) - Runs a stored query to generate a report.

## DoubleclickbidmanagerQueriesCreate

Creates a query.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, operations.DoubleclickbidmanagerQueriesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        QueryInput: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: sdk.Int(509624),
                        Month: sdk.Int(976762),
                        Year: sdk.Int(55714),
                    },
                    CustomStartDate: &shared.Date{
                        Day: sdk.Int(604846),
                        Month: sdk.Int(451159),
                        Year: sdk.Int(739264),
                    },
                    Range: shared.DataRangeRangeEnumRangeUnspecified.ToPointer(),
                },
                Format: shared.QueryMetadataFormatEnumFormatUnspecified.ToPointer(),
                SendNotification: sdk.Bool(false),
                ShareEmailAddress: []string{
                    "ut",
                    "maiores",
                },
                Title: sdk.String("Mr."),
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: sdk.String("dolore"),
                        Value: sdk.String("iusto"),
                    },
                    shared.FilterPair{
                        Type: sdk.String("dicta"),
                        Value: sdk.String("harum"),
                    },
                },
                GroupBys: []string{
                    "accusamus",
                    "commodi",
                },
                Metrics: []string{
                    "quae",
                    "ipsum",
                    "quidem",
                    "molestias",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: sdk.Bool(false),
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: sdk.String("excepturi"),
                            Name: sdk.String("Joel Lang"),
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("veritatis"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "enim",
                                                            "consequatur",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("est"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "deserunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("distinctio"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "modi",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("cupiditate"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "magni",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("assumenda"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "fugit",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("excepturi"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "tempore",
                                                            "labore",
                                                            "delectus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("eum"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "sint",
                                                            "aliquid",
                                                            "provident",
                                                            "necessitatibus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("sint"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                                        Values: []string{
                                                            "debitis",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("dolorum"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "illum",
                                                            "maiores",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("rerum"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "cumque",
                                                            "facere",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("ea"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "accusamus",
                                                            "non",
                                                            "occaecati",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("enim"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "quidem",
                                                            "provident",
                                                            "nam",
                                                            "id",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: sdk.String("Jaime Will"),
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("natus"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                            Values: []string{
                                                "perferendis",
                                                "nihil",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("magnam"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                            Values: []string{
                                                "labore",
                                                "labore",
                                                "suscipit",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("eum"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                            Values: []string{
                                                "architecto",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("magnam"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                            Values: []string{
                                                "ullam",
                                                "provident",
                                                "quos",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("sint"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                            Values: []string{
                                                "reiciendis",
                                                "mollitia",
                                                "ad",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: shared.PathFilterPathMatchPositionEnumAny.ToPointer(),
                            },
                        },
                    },
                },
                Type: shared.ParametersTypeEnumInventoryAvailability.ToPointer(),
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: sdk.Int(896547),
                    Month: sdk.Int(141264),
                    Year: sdk.Int(367562),
                },
                Frequency: shared.QueryScheduleFrequencyEnumFrequencyUnspecified.ToPointer(),
                NextRunTimezoneCode: sdk.String("iure"),
                StartDate: &shared.Date{
                    Day: sdk.Int(984043),
                    Month: sdk.Int(891924),
                    Year: sdk.Int(260341),
                },
            },
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.DoubleclickbidmanagerQueriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesDelete

Deletes a query as well as the associated reports.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesDelete(ctx, operations.DoubleclickbidmanagerQueriesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "consequuntur",
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DoubleclickbidmanagerQueriesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesGet

Retrieves a query.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesGet(ctx, operations.DoubleclickbidmanagerQueriesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "odit",
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DoubleclickbidmanagerQueriesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesList

Lists queries created by the current user.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesList(ctx, operations.DoubleclickbidmanagerQueriesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("autem"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("eaque"),
        OrderBy: sdk.String("pariatur"),
        PageSize: sdk.Int64(365496),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.DoubleclickbidmanagerQueriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueriesResponse != nil {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesReportsGet

Retrieves a report.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesReportsGet(ctx, operations.DoubleclickbidmanagerQueriesReportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("libero"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "quis",
        QuotaUser: sdk.String("totam"),
        ReportID: "dignissimos",
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("quis"),
    }, operations.DoubleclickbidmanagerQueriesReportsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesReportsList

Lists reports associated with a query.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesReportsList(ctx, operations.DoubleclickbidmanagerQueriesReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("minus"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("dolor"),
        OrderBy: sdk.String("vero"),
        PageSize: sdk.Int64(345352),
        PageToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "recusandae",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DoubleclickbidmanagerQueriesReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsResponse != nil {
        // handle response
    }
}
```

## DoubleclickbidmanagerQueriesRun

Runs a stored query to generate a report.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesRun(ctx, operations.DoubleclickbidmanagerQueriesRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunQueryRequest: &shared.RunQueryRequest{
            DataRange: &shared.DataRange{
                CustomEndDate: &shared.Date{
                    Day: sdk.Int(783645),
                    Month: sdk.Int(164694),
                    Year: sdk.Int(500026),
                },
                CustomStartDate: &shared.Date{
                    Day: sdk.Int(621479),
                    Month: sdk.Int(50370),
                    Year: sdk.Int(577229),
                },
                Range: shared.DataRangeRangeEnumLast30Days.ToPointer(),
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("modi"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "deleniti",
        QuotaUser: sdk.String("pariatur"),
        Synchronous: sdk.Bool(false),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DoubleclickbidmanagerQueriesRunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```
