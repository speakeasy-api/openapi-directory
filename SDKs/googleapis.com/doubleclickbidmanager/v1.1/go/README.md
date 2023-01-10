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
            AccessToken: "reprehenderit",
            Alt: "proto",
            Asynchronous: true,
            Callback: "recusandae",
            Fields: "soluta",
            Key: "error",
            OauthToken: "reprehenderit",
            PrettyPrint: true,
            QuotaUser: "aperiam",
            UploadType: "temporibus",
            UploadProtocol: "quisquam",
        },
        Request: &shared.Query{
            Kind: "ab",
            Metadata: &shared.QueryMetadata{
                DataRange: "CURRENT_DAY",
                Format: "EXCEL_CSV",
                GoogleCloudStoragePathForLatestReport: "eum",
                GoogleDrivePathForLatestReport: "soluta",
                LatestReportRunTimeMs: "dolore",
                Locale: "excepturi",
                ReportCount: 272458188829119136,
                Running: false,
                SendNotification: true,
                ShareEmailAddress: []string{
                    "odit",
                    "repudiandae",
                },
                Title: "aut",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_APP_URL",
                        Value: "occaecati",
                    },
                    shared.FilterPair{
                        Type: "FILTER_BUDGET_SEGMENT_BUDGET",
                        Value: "voluptate",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_YOUTUBE_AD_VIDEO",
                    "FILTER_TRUEVIEW_INTEREST",
                },
                IncludeInviteData: true,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_FEE6_PARTNER",
                    "METRIC_ACTIVE_VIEW_PERCENT_IN_BACKGROUND",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "repellendus",
                            Name: "alias",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_CAMPAIGN_DAILY_FREQUENCY",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "voluptas",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "amet",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_USER_LIST_THIRD_PARTY_NAME",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "omnis",
                                                "commodi",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_SKIPPABLE_SUPPORT",
                                            Match: "BEGINS_WITH",
                                            Values: []string{
                                                "nesciunt",
                                                "dolores",
                                                "impedit",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_TRUEVIEW_REGION",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "quas",
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
                                            Filter: "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "sint",
                                                "nihil",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_VARIANT_NAME",
                                            Match: "UNKNOWN",
                                            Values: []string{
                                                "in",
                                                "cumque",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                        },
                    },
                },
                Type: "TYPE_KEYWORD",
            },
            QueryID: "nihil",
            ReportDataEndTimeMs: "vel",
            ReportDataStartTimeMs: "minima",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "dolor",
                Frequency: "YEARLY",
                NextRunMinuteOfDay: 1221540791052924616,
                NextRunTimezoneCode: "doloribus",
                StartTimeMs: "veritatis",
            },
            TimezoneCode: "dolor",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `DoubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `DoubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `DoubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `DoubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `DoubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### reports

* `DoubleclickbidmanagerReportsListreports` - Retrieves stored reports.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
