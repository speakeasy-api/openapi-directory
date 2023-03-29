# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/doubleclickbidmanager/v1.1/go
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
            AccessToken: "deserunt",
            Alt: "proto",
            Asynchronous: false,
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.Query{
            Kind: "facilis",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_WEEK",
                Format: "EXCEL_CSV",
                GoogleCloudStoragePathForLatestReport: "ullam",
                GoogleDrivePathForLatestReport: "saepe",
                LatestReportRunTimeMs: "inventore",
                Locale: "sapiente",
                ReportCount: 272656,
                Running: false,
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
                        Type: "FILTER_AUTHORIZED_SELLER_STATE",
                        Value: "molestiae",
                    },
                    shared.FilterPair{
                        Type: "FILTER_VIDEO_DURATION",
                        Value: "quasi",
                    },
                    shared.FilterPair{
                        Type: "FILTER_NOT_SUPPORTED",
                        Value: "dicta",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_YEAR",
                    "FILTER_DEVICE_MAKE",
                    "FILTER_VIDEO_CONTINUOUS_PLAY",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE",
                    "METRIC_MEDIA_COST_ECPA_USD",
                    "METRIC_UNIQUE_REACH_TOTAL_REACH",
                    "METRIC_UNIQUE_REACH_TOTAL_REACH",
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
                                                        Filter: "FILTER_AUDIENCE_TYPE",
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
                                                        Filter: "FILTER_GAM_INSERTION_ORDER",
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
                                                        Filter: "FILTER_ADVERTISER_INTEGRATION_STATUS",
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
                                                        Filter: "FILTER_TRUEVIEW_DMA_NAME",
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
                                                        Filter: "FILTER_EXTENSION_STATUS",
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
                                                        Filter: "FILTER_LINE_ITEM_PACING_PERCENTAGE",
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
                                                        Filter: "FILTER_VIDEO_CONTENT_DURATION",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "inventore",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE",
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
                                                        Filter: "FILTER_TRUEVIEW_PLACEMENT",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "quia",
                                                            "similique",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_EXCHANGE_ID",
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
                                                        Filter: "FILTER_GMAIL_DEVICE_TYPE",
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
                                                        Filter: "FILTER_GAM_INSERTION_ORDER",
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
                                                        Filter: "FILTER_NOT_SUPPORTED",
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
                                                        Filter: "FILTER_TRUEVIEW_CONVERSION_TYPE",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "distinctio",
                                                            "qui",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_WEEK",
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
                                                        Filter: "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE",
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
                                                        Filter: "FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST",
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
                                                        Filter: "FILTER_VERIFICATION_VIDEO_RESIZED",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "exercitationem",
                                                            "deleniti",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ORDER_ID",
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
                                                        Filter: "FILTER_INVENTORY_SOURCE_GROUP_ID",
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
                                            Filter: "FILTER_BUDGET_SEGMENT_START_DATE",
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
                                            Filter: "FILTER_DAY_OF_WEEK",
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
                                            Filter: "FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
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
                                            Filter: "FILTER_YEAR",
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
                                            Filter: "FILTER_DATA_PROVIDER_NAME",
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
                                            Filter: "FILTER_USER_LIST_THIRD_PARTY_NAME",
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
                                            Filter: "FILTER_NIELSEN_AGE",
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
                                            Filter: "FILTER_VERIFICATION_VIDEO_RESIZED",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "ullam",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_REWARDED",
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
                Type: "TYPE_THIRD_PARTY_DATA_PROVIDER",
            },
            QueryID: "culpa",
            ReportDataEndTimeMs: "enim",
            ReportDataStartTimeMs: "aut",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "delectus",
                Frequency: "MONTHLY",
                NextRunMinuteOfDay: 588465,
                NextRunTimezoneCode: "est",
                StartTimeMs: "distinctio",
            },
            TimezoneCode: "et",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Queries

* `DoubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `DoubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `DoubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `DoubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `DoubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### Reports

* `DoubleclickbidmanagerReportsListreports` - Retrieves stored reports.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
