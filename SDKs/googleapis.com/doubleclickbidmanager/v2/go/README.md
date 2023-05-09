# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/doubleclickbidmanager/v2/go
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
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, operations.DoubleclickbidmanagerQueriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryInput: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: sdk.Int(592845),
                        Month: sdk.Int(715190),
                        Year: sdk.Int(844266),
                    },
                    CustomStartDate: &shared.Date{
                        Day: sdk.Int(602763),
                        Month: sdk.Int(857946),
                        Year: sdk.Int(544883),
                    },
                    Range: shared.DataRangeRangeEnumAllTime.ToPointer(),
                },
                Format: shared.QueryMetadataFormatEnumCsv.ToPointer(),
                SendNotification: sdk.Bool(false),
                ShareEmailAddress: []string{
                    "deserunt",
                    "suscipit",
                    "iure",
                },
                Title: sdk.String("Mrs."),
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: sdk.String("ipsa"),
                        Value: sdk.String("delectus"),
                    },
                    shared.FilterPair{
                        Type: sdk.String("tempora"),
                        Value: sdk.String("suscipit"),
                    },
                    shared.FilterPair{
                        Type: sdk.String("molestiae"),
                        Value: sdk.String("minus"),
                    },
                    shared.FilterPair{
                        Type: sdk.String("placeat"),
                        Value: sdk.String("voluptatum"),
                    },
                },
                GroupBys: []string{
                    "excepturi",
                    "nisi",
                },
                Metrics: []string{
                    "temporibus",
                    "ab",
                    "quis",
                    "veritatis",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: sdk.Bool(false),
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: sdk.String("deserunt"),
                            Name: sdk.String("Roberta Sipes"),
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("maiores"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                                        Values: []string{
                                                            "quod",
                                                            "esse",
                                                            "totam",
                                                            "porro",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("dolorum"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "officia",
                                                            "occaecati",
                                                            "fugit",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("deleniti"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "totam",
                                                            "beatae",
                                                            "commodi",
                                                            "molestiae",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("modi"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumUnknown.ToPointer(),
                                                        Values: []string{
                                                            "cum",
                                                            "esse",
                                                            "ipsum",
                                                            "excepturi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("perferendis"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "sed",
                                                            "iste",
                                                            "dolor",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("laboriosam"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "fuga",
                                                            "in",
                                                            "corporis",
                                                            "iste",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("iure"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumWildcardExpression.ToPointer(),
                                                        Values: []string{
                                                            "architecto",
                                                            "ipsa",
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("est"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                                        Values: []string{
                                                            "dolores",
                                                            "dolorem",
                                                            "corporis",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: sdk.String("nobis"),
                                                        Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                                        Values: []string{
                                                            "nemo",
                                                            "minima",
                                                            "excepturi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: sdk.String("Charlene Nicolas"),
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("dolorem"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumBeginsWith.ToPointer(),
                                            Values: []string{
                                                "repellat",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("mollitia"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumPartial.ToPointer(),
                                            Values: []string{
                                                "commodi",
                                                "quam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: sdk.String("molestiae"),
                                            Match: shared.PathQueryOptionsFilterMatchEnumExact.ToPointer(),
                                            Values: []string{
                                                "quia",
                                                "quis",
                                                "vitae",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: shared.PathFilterPathMatchPositionEnumFirst.ToPointer(),
                            },
                        },
                    },
                },
                Type: shared.ParametersTypeEnumYoutubeProgrammaticGuaranteed.ToPointer(),
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: sdk.Int(317202),
                    Month: sdk.Int(138183),
                    Year: sdk.Int(778346),
                },
                Frequency: shared.QueryScheduleFrequencyEnumOneTime.ToPointer(),
                NextRunTimezoneCode: sdk.String("tenetur"),
                StartDate: &shared.Date{
                    Day: sdk.Int(368725),
                    Month: sdk.Int(662527),
                    Year: sdk.Int(820994),
                },
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Queries](docs/queries/README.md)

* [DoubleclickbidmanagerQueriesCreate](docs/queries/README.md#doubleclickbidmanagerqueriescreate) - Creates a query.
* [DoubleclickbidmanagerQueriesDelete](docs/queries/README.md#doubleclickbidmanagerqueriesdelete) - Deletes a query as well as the associated reports.
* [DoubleclickbidmanagerQueriesGet](docs/queries/README.md#doubleclickbidmanagerqueriesget) - Retrieves a query.
* [DoubleclickbidmanagerQueriesList](docs/queries/README.md#doubleclickbidmanagerquerieslist) - Lists queries created by the current user.
* [DoubleclickbidmanagerQueriesReportsGet](docs/queries/README.md#doubleclickbidmanagerqueriesreportsget) - Retrieves a report.
* [DoubleclickbidmanagerQueriesReportsList](docs/queries/README.md#doubleclickbidmanagerqueriesreportslist) - Lists reports associated with a query.
* [DoubleclickbidmanagerQueriesRun](docs/queries/README.md#doubleclickbidmanagerqueriesrun) - Runs a stored query to generate a report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
