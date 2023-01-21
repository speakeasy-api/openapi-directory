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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Asynchronous: false,
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.Query{
            Kind: "dicta",
            Metadata: &shared.QueryMetadata{
                DataRange: "PREVIOUS_HALF_MONTH",
                Format: "CSV",
                GoogleCloudStoragePathForLatestReport: "et",
                GoogleDrivePathForLatestReport: "ut",
                LatestReportRunTimeMs: "dolorem",
                Locale: "et",
                ReportCount: 7373105480197164748,
                Running: true,
                SendNotification: true,
                ShareEmailAddress: []string{
                    "dolores",
                    "illum",
                    "debitis",
                },
                Title: "vel",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_CHANNEL_GROUPING",
                        Value: "id",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_EXTENSION_TYPE",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_MEDIA_COST_ADVERTISER",
                    "METRIC_PLATFORM_FEE_USD",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: true,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "odit",
                            Name: "non",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TARGETED_DATA_PROVIDERS",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "autem",
                                                            "consectetur",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TRUEVIEW_AD_TYPE_NAME",
                                                        Match: "PARTIAL",
                                                        Values: []string{
                                                            "at",
                                                            "ipsum",
                                                            "eveniet",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "modi",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_DAY_OF_WEEK",
                                            Match: "EXACT",
                                            Values: []string{
                                                "reprehenderit",
                                                "tempore",
                                                "maiores",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "LAST",
                            },
                        },
                    },
                },
                Type: "TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET",
            },
            QueryID: "beatae",
            ReportDataEndTimeMs: "veritatis",
            ReportDataStartTimeMs: "in",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "et",
                Frequency: "WEEKLY",
                NextRunMinuteOfDay: 4564823113789767141,
                NextRunTimezoneCode: "ex",
                StartTimeMs: "dolores",
            },
            TimezoneCode: "placeat",
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
