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
    
    req := operations.DoubleclickbidmanagerQueriesCreatequeryRequest{
        Security: operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreatequeryQueryParams{
            DollarXgafv: "1",
            AccessToken: "esse",
            Alt: "media",
            Asynchronous: true,
            Callback: "vitae",
            Fields: "consequuntur",
            Key: "et",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "fugiat",
            UploadType: "adipisci",
            UploadProtocol: "quis",
        },
        Request: &shared.Query{
            Kind: "expedita",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_QUARTER",
                Format: "EXCEL_CSV",
                GoogleCloudStoragePathForLatestReport: "ut",
                GoogleDrivePathForLatestReport: "facilis",
                LatestReportRunTimeMs: "et",
                Locale: "amet",
                ReportCount: 7497250674156608171,
                Running: false,
                SendNotification: false,
                ShareEmailAddress: []string{
                    "optio",
                    "voluptatum",
                },
                Title: "ut",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_TRUEVIEW_ZIPCODE",
                        Value: "accusantium",
                    },
                    shared.FilterPair{
                        Type: "FILTER_TRUEVIEW_AD",
                        Value: "ducimus",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT",
                    "FILTER_TRUEVIEW_DMA",
                },
                IncludeInviteData: true,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_WIN_LOSS_LINEITEM_AVAILABLE_REQUESTS",
                    "METRIC_CUSTOM_FEE_1_ADVERTISER_CURRENCY",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "eos",
                            Name: "dolor",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "ratione",
                                                            "repudiandae",
                                                            "velit",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "ipsa",
                                                            "accusantium",
                                                            "error",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_INTEREST",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "aut",
                                                            "minima",
                                                            "unde",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_BUDGET_SEGMENT_TYPE",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "unde",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "voluptatem",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_PUBLISHER_PROPERTY_SECTION_ID",
                                                        Match: "WILDCARD_EXPRESSION",
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
                                                        Filter: "FILTER_DATA_PROVIDER",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "aliquam",
                                                            "quia",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_BUDGET_SEGMENT_TYPE",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "nihil",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "impedit",
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
                                            Filter: "FILTER_GAM_LINE_ITEM_ID",
                                            Match: "EXACT",
                                            Values: []string{
                                                "aut",
                                                "itaque",
                                                "praesentium",
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
                                            Filter: "FILTER_YEAR",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "similique",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_MRAID_SUPPORT",
                                            Match: "EXACT",
                                            Values: []string{
                                                "voluptas",
                                                "corrupti",
                                                "sunt",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_YEAR",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "eos",
                                                "omnis",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "TYPE_TRUEVIEW",
            },
            QueryID: "deserunt",
            ReportDataEndTimeMs: "maiores",
            ReportDataStartTimeMs: "aspernatur",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "eos",
                Frequency: "QUARTERLY",
                NextRunMinuteOfDay: 3358088818695073581,
                NextRunTimezoneCode: "perferendis",
                StartTimeMs: "est",
            },
            TimezoneCode: "enim",
        },
    }
    
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->