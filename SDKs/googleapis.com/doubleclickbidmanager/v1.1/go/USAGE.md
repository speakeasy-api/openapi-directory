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

    req := operations.DoubleclickbidmanagerQueriesCreatequeryRequest{
        DollarXgafv: "2",
        Query: &shared.Query{
            Kind: "provident",
            Metadata: &shared.QueryMetadata{
                DataRange: "LAST_90_DAYS",
                Format: "XLSX",
                GoogleCloudStoragePathForLatestReport: "unde",
                GoogleDrivePathForLatestReport: "nulla",
                LatestReportRunTimeMs: "corrupti",
                Locale: "illum",
                ReportCount: 423655,
                Running: false,
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
                        Type: "FILTER_REGION",
                        Value: "delectus",
                    },
                    shared.FilterPair{
                        Type: "FILTER_TRUEVIEW_IAR_CATEGORY",
                        Value: "suscipit",
                    },
                    shared.FilterPair{
                        Type: "FILTER_ALGORITHM_ID",
                        Value: "minus",
                    },
                    shared.FilterPair{
                        Type: "FILTER_VARIANT_ID",
                        Value: "voluptatum",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_DATA_PROVIDER_NAME",
                    "FILTER_AUTHORIZED_SELLER_STATE",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_STOPS_AUDIO",
                    "METRIC_TOTAL_MEDIA_COST_ADVERTISER",
                    "METRIC_CPM_FEE4_PARTNER",
                    "METRIC_PROFIT_ECPM_ADVERTISER",
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
                                                        Filter: "FILTER_TARGETED_DATA_PROVIDERS",
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
                                                        Filter: "FILTER_TRUEVIEW_HOUSEHOLD_INCOME",
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
                                                        Filter: "FILTER_MATCH_RATIO",
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
                                                        Filter: "FILTER_REFUND_REASON",
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
                                                        Filter: "FILTER_TRUEVIEW_IAR_LANGUAGE",
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
                                                        Filter: "FILTER_CAMPAIGN_DAILY_FREQUENCY",
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
                                                        Filter: "FILTER_NIELSEN_AGE",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "hic",
                                                            "saepe",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_INSERTION_ORDER_STATUS",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "iste",
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VIDEO_CONTENT_DURATION",
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
                                                        Filter: "FILTER_HOUSEHOLD_INCOME",
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
                                                        Filter: "FILTER_KEYWORD",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "omnis",
                                                            "nemo",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_REGION",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "iure",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_FORMAT",
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
                                                        Filter: "FILTER_GAM_INSERTION_ORDER",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "quam",
                                                            "molestiae",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_GENDER",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "quis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TARGETED_USER_LIST",
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
                                                        Filter: "FILTER_OMID_CAPABLE",
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
                                                        Filter: "FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "reiciendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VERIFICATION_VIDEO_RESIZED",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "praesentium",
                                                            "voluptatibus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_REGION",
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
                                                        Filter: "FILTER_NIELSEN_DATE_RANGE",
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
                                            Filter: "FILTER_EVENT_TYPE",
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
                                            Filter: "FILTER_CREATIVE_STATUS",
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
                                            Filter: "FILTER_BUDGET_SEGMENT_START_DATE",
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
                                            Filter: "FILTER_DAY_OF_WEEK",
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
                                            Filter: "FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
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
                Type: "TYPE_NIELSEN_AUDIENCE_PROFILE",
            },
            QueryID: "perferendis",
            ReportDataEndTimeMs: "magni",
            ReportDataStartTimeMs: "assumenda",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "ipsam",
                Frequency: "ONE_TIME",
                NextRunMinuteOfDay: 146441,
                NextRunTimezoneCode: "dolorum",
                StartTimeMs: "excepturi",
            },
            TimezoneCode: "tempora",
        },
        AccessToken: "facilis",
        Alt: "proto",
        Asynchronous: false,
        Callback: "labore",
        Fields: "delectus",
        Key: "eum",
        OauthToken: "non",
        PrettyPrint: false,
        QuotaUser: "eligendi",
        UploadType: "sint",
        UploadProtocol: "aliquid",
    }

    ctx := context.Background()
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, req, operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
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