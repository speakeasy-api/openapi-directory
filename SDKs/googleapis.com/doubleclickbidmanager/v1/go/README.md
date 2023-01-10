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
            AccessToken: "minus",
            Alt: "json",
            Asynchronous: true,
            Callback: "consequatur",
            Fields: "ut",
            Key: "ullam",
            OauthToken: "optio",
            PrettyPrint: true,
            QuotaUser: "labore",
            UploadType: "labore",
            UploadProtocol: "reprehenderit",
        },
        Request: &shared.Query{
            Kind: "consectetur",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_HALF_MONTH",
                Format: "CSV",
                GoogleCloudStoragePathForLatestReport: "rerum",
                GoogleDrivePathForLatestReport: "aut",
                LatestReportRunTimeMs: "voluptas",
                Locale: "dolorem",
                ReportCount: 8825723527975253661,
                Running: false,
                SendNotification: true,
                ShareEmailAddress: []string{
                    "aliquam",
                    "sit",
                    "quam",
                },
                Title: "vero",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
                        Value: "sed",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_VIDEO_CONTINUOUS_PLAY",
                    "FILTER_PAGE_LAYOUT",
                    "FILTER_BILLABLE_OUTCOME",
                },
                IncludeInviteData: true,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_UNIQUE_REACH_TOTAL_REACH",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "qui",
                            Name: "earum",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_INVENTORY_SOURCE_ID",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "tempore",
                                                            "dolores",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_INSERTION_ORDER_GOAL_VALUE",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "id",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "incidunt",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_IAR_REGION",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "atque",
                                                            "porro",
                                                            "doloremque",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_BRAND_LIFT_TYPE",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "iste",
                                                            "distinctio",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "magnam",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VERIFICATION_VIDEO_POSITION",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "quam",
                                                            "non",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VARIANT_NAME",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "qui",
                                                            "tenetur",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "occaecati",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_TRUEVIEW_IAR_CATEGORY",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "repudiandae",
                                                "et",
                                                "labore",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_COMPANION_CREATIVE_NAME",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "cum",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_CAMPAIGN_DAILY_FREQUENCY",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "sunt",
                                                "ipsam",
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
                                            Filter: "FILTER_NIELSEN_COUNTRY_CODE",
                                            Match: "PARTIAL",
                                            Values: []string{
                                                "sit",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_INVENTORY_SOURCE_GROUP",
                                            Match: "EXACT",
                                            Values: []string{
                                                "minus",
                                                "corporis",
                                                "culpa",
                                            },
                                        },
                                    },
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_CREATIVE_SOURCE",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "repellat",
                                                "libero",
                                                "voluptas",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "ANY",
                            },
                        },
                    },
                },
                Type: "TYPE_CLIENT_SAFE",
            },
            QueryID: "et",
            ReportDataEndTimeMs: "enim",
            ReportDataStartTimeMs: "molestiae",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "minus",
                Frequency: "YEARLY",
                NextRunMinuteOfDay: 1930123300368458661,
                NextRunTimezoneCode: "adipisci",
                StartTimeMs: "laudantium",
            },
            TimezoneCode: "omnis",
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
