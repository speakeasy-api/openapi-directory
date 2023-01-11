# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DoubleclickbidmanagerQueriesCreatequeryRequest req = new DoubleclickbidmanagerQueriesCreatequeryRequest() {{
                security = new DoubleclickbidmanagerQueriesCreatequerySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DoubleclickbidmanagerQueriesCreatequeryQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aut";
                    alt = "media";
                    asynchronous = false;
                    callback = "dolorem";
                    fields = "illo";
                    key = "sunt";
                    oauthToken = "in";
                    prettyPrint = true;
                    quotaUser = "commodi";
                    uploadType = "deleniti";
                    uploadProtocol = "incidunt";
                }};
                request = new Query() {{
                    kind = "dolorum";
                    metadata = new QueryMetadata() {{
                        dataRange = "WEEK_TO_DATE";
                        format = "EXCEL_CSV";
                        googleCloudStoragePathForLatestReport = "sed";
                        googleDrivePathForLatestReport = "tempora";
                        latestReportRunTimeMs = "distinctio";
                        locale = "occaecati";
                        reportCount = 7630801898266405980;
                        running = false;
                        sendNotification = true;
                        shareEmailAddress = new String[]() {{
                            add("veritatis"),
                            add("et"),
                            add("sunt"),
                        }};
                        title = "et";
                    }};
                    params = new Parameters() {{
                        filters = new openapisdk.models.shared.FilterPair[]() {{
                            add(new FilterPair() {{
                                type = "FILTER_LINE_ITEM_PACING_PERCENTAGE";
                                value = "ex";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_MEDIA_PLAN";
                                value = "recusandae";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_REWARDED";
                                value = "voluptatem";
                            }}),
                        }};
                        groupBys = new openapisdk.models.shared.ParametersGroupBysEnum[]() {{
                            add("FILTER_INSERTION_ORDER"),
                            add("FILTER_AUDIENCE_NAME"),
                            add("FILTER_EXCHANGE"),
                        }};
                        includeInviteData = false;
                        metrics = new openapisdk.models.shared.ParametersMetricsEnum[]() {{
                            add("METRIC_CM360_POST_CLICK_REVENUE_CROSS_ENVIRONMENT"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "hic";
                                    name = "laboriosam";
                                    rules = new openapisdk.models.shared.Rule[]() {{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_GMAIL_AGE";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]() {{
                                                                    add("debitis"),
                                                                    add("id"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_COUNTRY_ID";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("velit"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_PUBLISHER_TRAFFIC_SOURCE";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("molestiae"),
                                                                    add("tempore"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_DMA";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("non"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_IAR_ZIPCODE";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("nihil"),
                                                                    add("enim"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "quis";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("et"),
                                                                    add("sequi"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_INVENTORY_RATE_TYPE";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]() {{
                                                                    add("adipisci"),
                                                                    add("sit"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_LINE_ITEM_TYPE";
                                                                match = "PARTIAL";
                                                                values = new String[]() {{
                                                                    add("consequatur"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "et";
                                        }}),
                                    }};
                                }};
                                pathFilters = new openapisdk.models.shared.PathFilter[]() {{
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_AUDIO_FEED_TYPE_NAME";
                                                    match = "UNKNOWN";
                                                    values = new String[]() {{
                                                        add("sint"),
                                                        add("quis"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_LINE_ITEM_LIFETIME_FREQUENCY";
                                                    match = "PARTIAL";
                                                    values = new String[]() {{
                                                        add("quidem"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "LAST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "TYPE_PATH_ATTRIBUTION";
                    }};
                    queryId = "ut";
                    reportDataEndTimeMs = "cumque";
                    reportDataStartTimeMs = "dolor";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "magni";
                        frequency = "QUARTERLY";
                        nextRunMinuteOfDay = 3962649315398329850;
                        nextRunTimezoneCode = "officiis";
                        startTimeMs = "quo";
                    }};
                    timezoneCode = "aut";
                }};
            }};

            DoubleclickbidmanagerQueriesCreatequeryResponse res = sdk.queries.doubleclickbidmanagerQueriesCreatequery(req);

            if (res.query.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `doubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `doubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `doubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `doubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### reports

* `doubleclickbidmanagerReportsListreports` - Retrieves stored reports.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
