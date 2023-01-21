# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DoubleclickbidmanagerQueriesCreateRequest{
        Security: operations.DoubleclickbidmanagerQueriesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 8325060299420976708,
                        Month: 7837839688282259259,
                        Year: 2518412263346885298,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 5617773211005988520,
                        Month: 2339563716805116249,
                        Year: 7144924247938981575,
                    },
                    Range: "CUSTOM_DATES",
                },
                Format: "CSV",
                SendNotification: false,
                ShareEmailAddress: []string{
                    "vitae",
                    "totam",
                    "dolores",
                },
                Title: "illum",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "vel",
                        Value: "odio",
                    },
                },
                GroupBys: []string{
                    "id",
                    "aspernatur",
                },
                Metrics: []string{
                    "totam",
                    "commodi",
                    "quis",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "aut",
                            Name: "odit",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "aut",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "officiis",
                                                            "autem",
                                                            "consectetur",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "nobis",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "recusandae",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "at",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "modi",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "ut",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "exercitationem",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "tempore",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "maiores",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "beatae",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "et",
                                                            "omnis",
                                                            "ipsum",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ex",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "vel",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "mollitia",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "reprehenderit",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "qui",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "in",
                                                            "autem",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ut",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "neque",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "et",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "architecto",
                                                            "quam",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "velit",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "sunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "voluptates",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "optio",
                                                            "qui",
                                                            "earum",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "illo",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "consequatur",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "error",
                                                "reprehenderit",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "consectetur",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "laboriosam",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "PATH_MATCH_POSITION_UNSPECIFIED",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "soluta",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "consequuntur",
                                                "laudantium",
                                                "autem",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                        },
                    },
                },
                Type: "STANDARD",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 8204648627352676445,
                    Month: 4234137922270959652,
                    Year: 8497925768463229012,
                },
                Frequency: "YEARLY",
                NextRunTimezoneCode: "quisquam",
                StartDate: &shared.Date{
                    Day: 1681876124477381252,
                    Month: 1115785012616387305,
                    Year: 2629911606854649819,
                },
            },
        },
    }
    
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `DoubleclickbidmanagerQueriesCreate` - Creates a query.
* `DoubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `DoubleclickbidmanagerQueriesGet` - Retrieves a query.
* `DoubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `DoubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `DoubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `DoubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
