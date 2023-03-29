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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
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
                    "voluptatum",
                    "autem",
                },
                Title: "Forward Operations Architect",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "reprehenderit",
                        Value: "molestiae",
                    },
                    shared.FilterPair{
                        Type: "quo",
                        Value: "quasi",
                    },
                    shared.FilterPair{
                        Type: "laboriosam",
                        Value: "dicta",
                    },
                },
                GroupBys: []string{
                    "voluptatem",
                    "consequatur",
                    "fugiat",
                },
                Metrics: []string{
                    "omnis",
                    "eos",
                    "accusamus",
                    "accusamus",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "reiciendis",
                            Name: "rem",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "occaecati",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "sed",
                                                            "quisquam",
                                                            "rerum",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "culpa",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "rerum",
                                                            "possimus",
                                                            "occaecati",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "esse",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "amet",
                                                            "est",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "blanditiis",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "dolores",
                                                            "sit",
                                                            "quia",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "et",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "modi",
                                                            "et",
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "earum",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "qui",
                                                            "ea",
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
                                                        Filter: "ut",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "inventore",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ut",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "libero",
                                                            "ipsum",
                                                            "non",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "ea",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "ipsam",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "quia",
                                                            "similique",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "eaque",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "doloribus",
                                                            "a",
                                                            "aut",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "et",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "neque",
                                                            "asperiores",
                                                            "et",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "culpa",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "totam",
                                                            "voluptatum",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "et",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "laboriosam",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "expedita",
                                                            "ipsam",
                                                            "eos",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "adipisci",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "distinctio",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "perferendis",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "quo",
                                                            "tempore",
                                                            "explicabo",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "aut",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "totam",
                                                            "molestias",
                                                            "reiciendis",
                                                            "illo",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "id",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "sit",
                                                            "eaque",
                                                            "odio",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "reiciendis",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "exercitationem",
                                                            "deleniti",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "sed",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "aut",
                                                            "esse",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "sint",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "eligendi",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "et",
                                                            "ut",
                                                            "molestias",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "cupiditate",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "et",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "non",
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
                                            Filter: "aut",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "magni",
                                                "est",
                                                "porro",
                                                "voluptas",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "nostrum",
                                            Match: "EXACT",
                                            Values: []string{
                                                "in",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "voluptatem",
                                            Match: "UNKNOWN",
                                            Values: []string{
                                                "quis",
                                                "consequatur",
                                                "ratione",
                                                "cum",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "similique",
                                            Match: "EXACT",
                                            Values: []string{
                                                "id",
                                                "quis",
                                                "sapiente",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "et",
                                            Match: "EXACT",
                                            Values: []string{
                                                "in",
                                                "qui",
                                                "deserunt",
                                                "eveniet",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "modi",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "soluta",
                                                "ducimus",
                                                "ducimus",
                                                "nulla",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "reiciendis",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "ullam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "voluptas",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "qui",
                                                "cum",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                        },
                    },
                },
                Type: "INVENTORY_AVAILABILITY",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 581273,
                    Month: 313218,
                    Year: 881736,
                },
                Frequency: "YEARLY",
                NextRunTimezoneCode: "eligendi",
                StartDate: &shared.Date{
                    Day: 588465,
                    Month: 725255,
                    Year: 659669,
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