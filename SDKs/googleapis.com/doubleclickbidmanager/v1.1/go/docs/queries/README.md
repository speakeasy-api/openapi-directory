# Queries

### Available Operations

* [DoubleclickbidmanagerQueriesCreatequery](#doubleclickbidmanagerqueriescreatequery) - Creates a query.
* [DoubleclickbidmanagerQueriesDeletequery](#doubleclickbidmanagerqueriesdeletequery) - Deletes a stored query as well as the associated stored reports.
* [DoubleclickbidmanagerQueriesGetquery](#doubleclickbidmanagerqueriesgetquery) - Retrieves a stored query.
* [DoubleclickbidmanagerQueriesListqueries](#doubleclickbidmanagerquerieslistqueries) - Retrieves stored queries.
* [DoubleclickbidmanagerQueriesRunquery](#doubleclickbidmanagerqueriesrunquery) - Runs a stored query to generate a report.

## DoubleclickbidmanagerQueriesCreatequery

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, operations.DoubleclickbidmanagerQueriesCreatequeryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Query: &shared.Query{
            Kind: sdk.String("voluptatibus"),
            Metadata: &shared.QueryMetadata{
                DataRange: shared.QueryMetadataDataRangeEnumCurrentDay.ToPointer(),
                Format: shared.QueryMetadataFormatEnumExcelCsv.ToPointer(),
                GoogleCloudStoragePathForLatestReport: sdk.String("voluptate"),
                GoogleDrivePathForLatestReport: sdk.String("cum"),
                LatestReportRunTimeMs: sdk.String("perferendis"),
                Locale: sdk.String("doloremque"),
                ReportCount: sdk.Int(441711),
                Running: sdk.Bool(false),
                SendNotification: sdk.Bool(false),
                ShareEmailAddress: []string{
                    "maiores",
                    "dicta",
                },
                Title: sdk.String("Mrs."),
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterAmpPageRequest.ToPointer(),
                        Value: sdk.String("dicta"),
                    },
                    shared.FilterPair{
                        Type: shared.FilterPairTypeEnumFilterInventorySourceGroup.ToPointer(),
                        Value: sdk.String("enim"),
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    shared.ParametersGroupBysEnumFilterAdvertiserIntegrationStatus,
                    shared.ParametersGroupBysEnumFilterBudgetSegmentBudget,
                    shared.ParametersGroupBysEnumFilterCountry,
                    shared.ParametersGroupBysEnumFilterNielsenDeviceID,
                },
                IncludeInviteData: sdk.Bool(false),
                Metrics: []shared.ParametersMetricsEnum{
                    shared.ParametersMetricsEnumMetricFloodlightImpressions,
                    shared.ParametersMetricsEnumMetricFloodlightImpressions,
                    shared.ParametersMetricsEnumMetricUniqueReachAverageImpressionFrequency,
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: sdk.Bool(false),
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: sdk.String("modi"),
                            Name: sdk.String("Dr. Jordan Von"),
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterTrueviewURL.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "quibusdam",
                                                            "explicabo",
                                                            "deserunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterLineItemStatus.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterGamLineItem.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "magni",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterVideoCompanionCreativeSize.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterDataProviderName.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterUserListThirdPartyName.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterDetailedDemographics.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterInsertionOrderIntegrationCode.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "illum",
                                                            "maiores",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterInventorySourceName.ToPointer(),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "cumque",
                                                            "facere",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterAdvertiserIntegrationStatus.ToPointer(),
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
                                                        Filter: shared.PathQueryOptionsFilterFilterEnumFilterTrueviewPlacement.ToPointer(),
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
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterExtensionStatus.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                            Values: []string{
                                                "perferendis",
                                                "nihil",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterTrueviewIarTimeOfDay.ToPointer(),
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
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterUserListFirstPartyName.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                            Values: []string{
                                                "architecto",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterTrueviewIarParentalStatus.ToPointer(),
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
                                            Filter: shared.PathQueryOptionsFilterFilterEnumFilterDetailedDemographics.ToPointer(),
                                            Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                            Values: []string{
                                                "reiciendis",
                                                "mollitia",
                                                "ad",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                            },
                        },
                    },
                },
                Type: shared.ParametersTypeEnumTypePageCategory.ToPointer(),
            },
            QueryID: sdk.String("necessitatibus"),
            ReportDataEndTimeMs: sdk.String("odit"),
            ReportDataStartTimeMs: sdk.String("nemo"),
            Schedule: &shared.QuerySchedule{
                EndTimeMs: sdk.String("quasi"),
                Frequency: shared.QueryScheduleFrequencyEnumSemiMonthly.ToPointer(),
                NextRunMinuteOfDay: sdk.Int(984043),
                NextRunTimezoneCode: sdk.String("debitis"),
                StartTimeMs: sdk.String("eius"),
            },
            TimezoneCode: sdk.String("maxime"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Asynchronous: sdk.Bool(false),
        Callback: sdk.String("in"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
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

## DoubleclickbidmanagerQueriesDeletequery

Deletes a stored query as well as the associated stored reports.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesDeletequery(ctx, operations.DoubleclickbidmanagerQueriesDeletequeryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "praesentium",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DoubleclickbidmanagerQueriesDeletequerySecurity{
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

## DoubleclickbidmanagerQueriesGetquery

Retrieves a stored query.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesGetquery(ctx, operations.DoubleclickbidmanagerQueriesGetqueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("ea"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "ea",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DoubleclickbidmanagerQueriesGetquerySecurity{
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

## DoubleclickbidmanagerQueriesListqueries

Retrieves stored queries.

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesListqueries(ctx, operations.DoubleclickbidmanagerQueriesListqueriesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("nam"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(365496),
        PageToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("amet"),
    }, operations.DoubleclickbidmanagerQueriesListqueriesSecurity{
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

## DoubleclickbidmanagerQueriesRunquery

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
    res, err := s.Queries.DoubleclickbidmanagerQueriesRunquery(ctx, operations.DoubleclickbidmanagerQueriesRunqueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunQueryRequest: &shared.RunQueryRequest{
            DataRange: shared.RunQueryRequestDataRangeEnumLast365Days.ToPointer(),
            ReportDataEndTimeMs: sdk.String("corporis"),
            ReportDataStartTimeMs: sdk.String("hic"),
            TimezoneCode: sdk.String("libero"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Asynchronous: sdk.Bool(false),
        Callback: sdk.String("quis"),
        Fields: sdk.String("totam"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QueryID: "quis",
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DoubleclickbidmanagerQueriesRunquerySecurity{
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
