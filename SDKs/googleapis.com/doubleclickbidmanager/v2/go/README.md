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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DoubleclickbidmanagerQueriesCreateRequest{
        DollarXgafv: "2",
        QueryInput: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 592845,
                        Month: 715190,
                        Year: 844266,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 602763,
                        Month: 857946,
                        Year: 544883,
                    },
                    Range: "ALL_TIME",
                },
                Format: "CSV",
                SendNotification: false,
                ShareEmailAddress: []string{
                    "deserunt",
                    "suscipit",
                    "iure",
                },
                Title: "Mrs.",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "ipsa",
                        Value: "delectus",
                    },
                    shared.FilterPair{
                        Type: "tempora",
                        Value: "suscipit",
                    },
                    shared.FilterPair{
                        Type: "molestiae",
                        Value: "minus",
                    },
                    shared.FilterPair{
                        Type: "placeat",
                        Value: "voluptatum",
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
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "deserunt",
                            Name: "perferendis",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quo",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "at",
                                                            "maiores",
                                                            "molestiae",
                                                            "quod",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quod",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "porro",
                                                            "dolorum",
                                                            "dicta",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "nam",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "fugit",
                                                            "deleniti",
                                                            "hic",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "optio",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "commodi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "modi",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "cum",
                                                            "esse",
                                                            "ipsum",
                                                            "excepturi",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "aspernatur",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "natus",
                                                            "sed",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "dolor",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "hic",
                                                            "saepe",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "fuga",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "iste",
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "saepe",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "ipsa",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "est",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "dolores",
                                                            "dolorem",
                                                            "corporis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "explicabo",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "omnis",
                                                            "nemo",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "minima",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "culpa",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "architecto",
                                                            "mollitia",
                                                            "dolorem",
                                                            "culpa",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "consequuntur",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "occaecati",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "quam",
                                                            "molestiae",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "velit",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "quis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "vitae",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "enim",
                                                            "odit",
                                                            "quo",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "tenetur",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "possimus",
                                                            "aut",
                                                            "quasi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "temporibus",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "voluptatibus",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "praesentium",
                                                            "voluptatibus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ipsa",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "cum",
                                                            "perferendis",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "reprehenderit",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "dicta",
                                                            "corporis",
                                                            "dolore",
                                                            "iusto",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "dicta",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "accusamus",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "quae",
                                                "ipsum",
                                                "quidem",
                                                "molestias",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "excepturi",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "praesentium",
                                                "rem",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "repudiandae",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "itaque",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "ANY",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "consequatur",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "explicabo",
                                                "deserunt",
                                                "distinctio",
                                                "quibusdam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "labore",
                                            Match: "EXACT",
                                            Values: []string{
                                                "aliquid",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "GRP",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 20107,
                    Month: 164940,
                    Year: 828940,
                },
                Frequency: "DAILY",
                NextRunTimezoneCode: "alias",
                StartDate: &shared.Date{
                    Day: 146441,
                    Month: 677817,
                    Year: 569618,
                },
            },
        },
        AccessToken: "tempora",
        Alt: "proto",
        Callback: "tempore",
        Fields: "labore",
        Key: "delectus",
        OauthToken: "eum",
        PrettyPrint: false,
        QuotaUser: "non",
        UploadType: "eligendi",
        UploadProtocol: "sint",
    }

    ctx := context.Background()
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, req, operations.DoubleclickbidmanagerQueriesCreateSecurity{
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


### Queries

* `DoubleclickbidmanagerQueriesCreate` - Creates a query.
* `DoubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `DoubleclickbidmanagerQueriesGet` - Retrieves a query.
* `DoubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `DoubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `DoubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `DoubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
