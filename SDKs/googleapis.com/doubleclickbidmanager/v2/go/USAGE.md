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
        Security: operations.DoubleclickbidmanagerQueriesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 645894,
                        Month: 384382,
                        Year: 437587,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 297534,
                        Month: 891773,
                        Year: 56713,
                    },
                    Range: "LAST_60_DAYS",
                },
                Format: "FORMAT_UNSPECIFIED",
                SendNotification: false,
                ShareEmailAddress: []string{
                    "molestiae",
                    "minus",
                },
                Title: "Dr.",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "iusto",
                        Value: "excepturi",
                    },
                    shared.FilterPair{
                        Type: "nisi",
                        Value: "recusandae",
                    },
                    shared.FilterPair{
                        Type: "temporibus",
                        Value: "ab",
                    },
                },
                GroupBys: []string{
                    "veritatis",
                    "deserunt",
                },
                Metrics: []string{
                    "ipsam",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "repellendus",
                            Name: "sapiente",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "at",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "quod",
                                                            "quod",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "esse",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "dolorum",
                                                            "dicta",
                                                            "nam",
                                                            "officia",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "occaecati",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "hic",
                                                            "optio",
                                                            "totam",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "beatae",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "modi",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "impedit",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ipsum",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "perferendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ad",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "iste",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "natus",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "saepe",
                                                            "fuga",
                                                            "in",
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
                                                        Filter: "iure",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "architecto",
                                                            "ipsa",
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
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
                                            },
                                        },
                                    },
                                    Name: "minima",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "iure",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "sapiente",
                                                            "architecto",
                                                            "mollitia",
                                                            "dolorem",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "consequuntur",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "occaecati",
                                                            "numquam",
                                                            "commodi",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quam",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "error",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quia",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "laborum",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "enim",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "sequi",
                                                            "tenetur",
                                                            "ipsam",
                                                            "id",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "possimus",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "error",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "temporibus",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "voluptatibus",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "praesentium",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "omnis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "voluptate",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "doloremque",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ut",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "corporis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "dolore",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "harum",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
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
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "quasi",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "veritatis",
                                                            "itaque",
                                                            "incidunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "enim",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "quibusdam",
                                                            "explicabo",
                                                            "deserunt",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "distinctio",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "modi",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "aliquid",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "perferendis",
                                                            "magni",
                                                            "assumenda",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "ipsam",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "dolorum",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "facilis",
                                                "tempore",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "ANY",
                            },
                        },
                    },
                },
                Type: "PATH_ATTRIBUTION",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 433288,
                    Month: 248753,
                    Year: 756107,
                },
                Frequency: "SEMI_MONTHLY",
                NextRunTimezoneCode: "aliquid",
                StartDate: &shared.Date{
                    Day: 592042,
                    Month: 896039,
                    Year: 572252,
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->