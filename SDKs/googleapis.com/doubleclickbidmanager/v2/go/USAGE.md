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
            DollarXgafv: "2",
            AccessToken: "autem",
            Alt: "json",
            Callback: "consequatur",
            Fields: "quia",
            Key: "aliquid",
            OauthToken: "quisquam",
            PrettyPrint: false,
            QuotaUser: "perferendis",
            UploadType: "vero",
            UploadProtocol: "est",
        },
        Request: &shared.QueryInput{
            Metadata: &shared.QueryMetadata{
                DataRange: &shared.DataRange{
                    CustomEndDate: &shared.Date{
                        Day: 6704016312163385261,
                        Month: 8600371065106444358,
                        Year: 2461961287460019287,
                    },
                    CustomStartDate: &shared.Date{
                        Day: 4567510374201875481,
                        Month: 6636597810052724420,
                        Year: 6457918078793888582,
                    },
                    Range: "LAST_90_DAYS",
                },
                Format: "FORMAT_UNSPECIFIED",
                SendNotification: false,
                ShareEmailAddress: []string{
                    "earum",
                },
                Title: "ut",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "architecto",
                        Value: "ipsum",
                    },
                    shared.FilterPair{
                        Type: "excepturi",
                        Value: "sit",
                    },
                },
                GroupBys: []string{
                    "optio",
                },
                Metrics: []string{
                    "occaecati",
                    "quis",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "quaerat",
                            Name: "culpa",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "pariatur",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "itaque",
                                                            "et",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "sint",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "ut",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "est",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "tempora",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "hic",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "fuga",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "qui",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "eos",
                                            Match: "EXACT",
                                            Values: []string{
                                                "ipsum",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "tenetur",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "blanditiis",
                                                "ipsa",
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
                                            Filter: "delectus",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "sint",
                                                "aliquid",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "quos",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "nihil",
                                                "hic",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "saepe",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "aut",
                                                "ut",
                                                "unde",
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
                                            Filter: "et",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "culpa",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "ANY",
                            },
                        },
                    },
                },
                Type: "REPORT_TYPE_UNSPECIFIED",
            },
            Schedule: &shared.QuerySchedule{
                EndDate: &shared.Date{
                    Day: 8367989002648934709,
                    Month: 5382645072164701766,
                    Year: 6059411360258213086,
                },
                Frequency: "QUARTERLY",
                NextRunTimezoneCode: "ut",
                StartDate: &shared.Date{
                    Day: 7350087388602518171,
                    Month: 2960915193202577470,
                    Year: 1333898400016087624,
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