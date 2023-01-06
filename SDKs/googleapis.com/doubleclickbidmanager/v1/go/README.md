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
            AccessToken: "voluptatem",
            Alt: "proto",
            Asynchronous: false,
            Callback: "quas",
            Fields: "ducimus",
            Key: "eos",
            OauthToken: "eos",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "alias",
            UploadProtocol: "odit",
        },
        Request: &shared.Query{
            Kind: "aut",
            Metadata: &shared.QueryMetadata{
                DataRange: "LAST_365_DAYS",
                Format: "EXCEL_CSV",
                GoogleCloudStoragePathForLatestReport: "repellat",
                GoogleDrivePathForLatestReport: "in",
                LatestReportRunTimeMs: "sunt",
                Locale: "error",
                ReportCount: 1557636597289360847,
                Running: false,
                SendNotification: true,
                ShareEmailAddress: []string{
                    "qui",
                    "dolores",
                    "maxime",
                },
                Title: "perspiciatis",
            },
            Params: &shared.Parameters{
                Filters: []shared.FilterPair{
                    shared.FilterPair{
                        Type: "FILTER_NIELSEN_AGE",
                        Value: "eius",
                    },
                },
                GroupBys: []shared.ParametersGroupBysEnum{
                    "FILTER_AUDIENCE_LIST",
                    "FILTER_PUBLISHER_PROPERTY_SECTION_ID",
                },
                IncludeInviteData: false,
                Metrics: []shared.ParametersMetricsEnum{
                    "METRIC_PERCENT_INVALID_IMPRESSIONS_PREBID",
                    "METRIC_FEE2_PARTNER",
                },
                Options: &shared.Options{
                    IncludeOnlyTargetedUserLists: false,
                    PathQueryOptions: &shared.PathQueryOptions{
                        ChannelGrouping: &shared.ChannelGrouping{
                            FallbackName: "optio",
                            Name: "in",
                            Rules: []shared.Rule{
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_VARIANT_VERSION",
                                                        Match: "WILDCARD_EXPRESSION",
                                                        Values: []string{
                                                            "autem",
                                                            "non",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_SERVED_PIXEL_DENSITY",
                                                        Match: "EXACT",
                                                        Values: []string{
                                                            "minus",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_TARGETED_USER_LIST",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "esse",
                                                            "ad",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_EXTENSION_TYPE",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "culpa",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_REGION",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "unde",
                                                            "facilis",
                                                            "eaque",
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
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "exercitationem",
                                                            "eum",
                                                            "quae",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "quae",
                                },
                                shared.Rule{
                                    DisjunctiveMatchStatements: []shared.DisjunctiveMatchStatement{
                                        shared.DisjunctiveMatchStatement{
                                            EventFilters: []shared.EventFilter{
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_ADVERTISER_NAME",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "aut",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_SITE_LANGUAGE",
                                                        Match: "UNKNOWN",
                                                        Values: []string{
                                                            "quidem",
                                                        },
                                                    },
                                                },
                                                shared.EventFilter{
                                                    DimensionFilter: &shared.PathQueryOptionsFilter{
                                                        Filter: "FILTER_CARRIER_NAME",
                                                        Match: "BEGINS_WITH",
                                                        Values: []string{
                                                            "rerum",
                                                            "magni",
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    Name: "sit",
                                },
                            },
                        },
                        PathFilters: []shared.PathFilter{
                            shared.PathFilter{
                                EventFilters: []shared.EventFilter{
                                    shared.EventFilter{
                                        DimensionFilter: &shared.PathQueryOptionsFilter{
                                            Filter: "FILTER_PARTNER_NAME",
                                            Match: "WILDCARD_EXPRESSION",
                                            Values: []string{
                                                "consectetur",
                                                "sed",
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
                                            Filter: "FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID",
                                            Match: "EXACT",
                                            Values: []string{
                                                "hic",
                                            },
                                        },
                                    },
                                },
                                PathMatchPosition: "FIRST",
                            },
                        },
                    },
                },
                Type: "TYPE_CROSS_PARTNER",
            },
            QueryID: "ut",
            ReportDataEndTimeMs: "cumque",
            ReportDataStartTimeMs: "distinctio",
            Schedule: &shared.QuerySchedule{
                EndTimeMs: "expedita",
                Frequency: "SEMI_MONTHLY",
                NextRunMinuteOfDay: 4590317438417502585,
                NextRunTimezoneCode: "aperiam",
                StartTimeMs: "tenetur",
            },
            TimezoneCode: "harum",
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
