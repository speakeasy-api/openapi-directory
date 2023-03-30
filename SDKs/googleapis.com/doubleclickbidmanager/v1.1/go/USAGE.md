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
        Security: operations.DoubleclickbidmanagerQueriesCreatequerySecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoubleclickbidmanagerQueriesCreatequeryQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Asynchronous: false,
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.Query{
            Kind: "deserunt",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_WEEK",
                Format: "EXCEL_CSV",
                GoogleCloudStoragePathForLatestReport: "magnam",
                GoogleDrivePathForLatestReport: "debitis",
                LatestReportRunTimeMs: "ipsa",
                Locale: "delectus",
                ReportCount: 272656,
                Running: false,
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
                        Type: "FILTER_AMP_PAGE_REQUEST",
                        Value: "excepturi",
                    },
                    shared.FilterPair{
                        Type: "FILTER_AUTHORIZED_SELLER_STATE",
                        Value: "recusandae",
                    },
                    shared.FilterPair{
                        Type: "FILTER_VIDEO_DURATION",
                        Value: "ab",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_PARTNER_CURRENCY",
                    "FILTER_GMAIL_COUNTRY_NAME",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_FEE16_ADVERTISER",
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
                                                        Filter: "FILTER_TRUEVIEW_PLACEMENT_ID",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "quod",
                                                            "quod",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_REGION_NAME",
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
                                                        Filter: "FILTER_GAM_INSERTION_ORDER",
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
                                                        Filter: "FILTER_USER_LIST_THIRD_PARTY",
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
                                                        Filter: "FILTER_NIELSEN_DEVICE_ID",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "perferendis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_REGION",
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
                                                        Filter: "FILTER_EXTENSION_STATUS",
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
                                                        Filter: "FILTER_NIELSEN_RESTATEMENT_DATE",
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
                                                        Filter: "FILTER_NIELSEN_RESTATEMENT_DATE",
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
                                                        Filter: "FILTER_ZIP_CODE",
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
                                                        Filter: "FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "error",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_INVENTORY_FORMAT",
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
                                                        Filter: "FILTER_TRUEVIEW_URL",
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
                                                        Filter: "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "error",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST",
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
                                                        Filter: "FILTER_AUDIENCE_LIST",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "omnis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_DMA_NAME",
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
                                                        Filter: "FILTER_TRUEVIEW_IAR_REGION",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "corporis",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_IAR_PARENTAL_STATUS",
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
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ADVERTISER_TIMEZONE",
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
                                                        Filter: "FILTER_TRUEVIEW_URL",
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
                                                        Filter: "FILTER_LINE_ITEM_STATUS",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "modi",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VIDEO_DURATION_SECONDS_RANGE",
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
                                            Filter: "FILTER_INSERTION_ORDER_INTEGRATION_CODE",
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
                Type: "TYPE_PATH",
            },
            QueryID: "eum",
            ReportDataEndTimeMs: "non",
            ReportDataStartTimeMs: "eligendi",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "sint",
                Frequency: "WEEKLY",
                NextRunMinuteOfDay: 592042,
                NextRunTimezoneCode: "necessitatibus",
                StartTimeMs: "sint",
            },
            TimezoneCode: "officia",
        },
    }

    ctx := context.Background()
    res, err := s.Queries.DoubleclickbidmanagerQueriesCreatequery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Query != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->