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
                    dollarXgafv = "1";
                    accessToken = "dolores";
                    alt = "proto";
                    asynchronous = true;
                    callback = "et";
                    fields = "nisi";
                    key = "ducimus";
                    oauthToken = "totam";
                    prettyPrint = true;
                    quotaUser = "ea";
                    uploadType = "ipsa";
                    uploadProtocol = "sed";
                }};
                request = new Query() {{
                    kind = "voluptatem";
                    metadata = new QueryMetadata() {{
                        dataRange = "TYPE_NOT_SUPPORTED";
                        format = "XLSX";
                        googleCloudStoragePathForLatestReport = "cumque";
                        googleDrivePathForLatestReport = "pariatur";
                        latestReportRunTimeMs = "possimus";
                        locale = "aperiam";
                        reportCount = 5929769420080958335;
                        running = false;
                        sendNotification = false;
                        shareEmailAddress = new String[]() {{
                            add("nisi"),
                        }};
                        title = "pariatur";
                    }};
                    params = new Parameters() {{
                        filters = new openapisdk.models.shared.FilterPair[]() {{
                            add(new FilterPair() {{
                                type = "FILTER_INVENTORY_RATE_TYPE";
                                value = "earum";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_TRUEVIEW_IAR_TIME_OF_DAY";
                                value = "ab";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_TRUEVIEW_IAR_ZIPCODE";
                                value = "earum";
                            }}),
                        }};
                        groupBys = new openapisdk.models.shared.ParametersGroupBysEnum[]() {{
                            add("FILTER_LINE_ITEM_START_DATE"),
                            add("FILTER_VENDOR_MEASUREMENT_MODE"),
                        }};
                        includeInviteData = true;
                        metrics = new openapisdk.models.shared.ParametersMetricsEnum[]() {{
                            add("METRIC_TOTAL_EXPOSURES"),
                            add("METRIC_PROFIT_VIEWABLE_ECPM_PARTNER"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "voluptatibus";
                                    name = "omnis";
                                    rules = new openapisdk.models.shared.Rule[]() {{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_IAR_TIME_OF_DAY";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("qui"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_REMARKETING_LIST";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("minus"),
                                                                    add("laborum"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_DFP_ORDER_ID";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]() {{
                                                                    add("debitis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_CHANNEL_TYPE";
                                                                match = "PARTIAL";
                                                                values = new String[]() {{
                                                                    add("ad"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_CREATIVE_SIZE";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("neque"),
                                                                    add("ea"),
                                                                    add("libero"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "error";
                                        }}),
                                    }};
                                }};
                                pathFilters = new openapisdk.models.shared.PathFilter[]() {{
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_TRUEVIEW_IAR_ZIPCODE";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]() {{
                                                        add("voluptas"),
                                                        add("sapiente"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "ANY";
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_ZIP_CODE";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]() {{
                                                        add("eum"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "FIRST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "TYPE_NIELSEN_DAILY_REACH_BUILD";
                    }};
                    queryId = "nisi";
                    reportDataEndTimeMs = "id";
                    reportDataStartTimeMs = "omnis";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "debitis";
                        frequency = "SEMI_MONTHLY";
                        nextRunMinuteOfDay = 1264816207080619033;
                        nextRunTimezoneCode = "voluptatem";
                        startTimeMs = "quia";
                    }};
                    timezoneCode = "laboriosam";
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
