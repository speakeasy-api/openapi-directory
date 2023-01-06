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
            AccessToken: "voluptatem",
            Alt: "proto",
            Callback: "ut",
            Fields: "dolorem",
            Key: "est",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "quia",
            UploadType: "voluptatem",
            UploadProtocol: "doloremque",
        },
        Request: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 2854160533723993438,
                        Month: 4333142927948137677,
                        Year: 782988781588668671,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 3585929577210151539,
                        Month: 4884585508191509271,
                        Year: 7922268105250499989,
                    },
                    Range: "PREVIOUS_YEAR",
                },
                Format: "FORMAT_UNSPECIFIED",
                SendNotification: true,
                ShareEmailAddress: []string{
                    "beatae",
                },
                Title: "illo",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "atque",
                        Value: "qui",
                    },
                    shared.FilterPair{
                        Type: "incidunt",
                        Value: "at",
                    },
                    shared.FilterPair{
                        Type: "dolor",
                        Value: "totam",
                    },
                },
                GroupBys: []string{
                    "consequatur",
                },
                Metrics: []string{
                    "qui",
                    "vel",
                    "accusamus",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "architecto",
                            Name: "harum",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "eum",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "unde",
                                                            "id",
                                                            "itaque",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "voluptatibus",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "aliquam",
                                                            "omnis",
                                                            "in",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "iusto",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "et",
                                                            "et",
                                                            "nisi",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "laboriosam",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "velit",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "facilis",
                                                "deleniti",
                                                "in",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "reiciendis",
                                            Match: "EXACT",
                                            Values: []string{
                                                "nemo",
                                                "officiis",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "sed",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "quo",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "FULL_PATH",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 1484522708020359980,
                    Month: 2769641103013381022,
                    Year: 154072379343606070,
                },
                Frequency: "QUARTERLY",
                NextRunTimezoneCode: "incidunt",
                StartDate: &shared.Date{
                    Day: 5464428400347090066,
                    Month: 9136781607006472501,
                    Year: 6351368281535303786,
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
