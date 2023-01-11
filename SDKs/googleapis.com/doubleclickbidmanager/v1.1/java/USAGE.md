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
                    accessToken = "voluptas";
                    alt = "media";
                    asynchronous = false;
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Query() {{
                    kind = "dicta";
                    metadata = new QueryMetadata() {{
                        dataRange = "PREVIOUS_HALF_MONTH";
                        format = "CSV";
                        googleCloudStoragePathForLatestReport = "et";
                        googleDrivePathForLatestReport = "ut";
                        latestReportRunTimeMs = "dolorem";
                        locale = "et";
                        reportCount = 7373105480197164748;
                        running = true;
                        sendNotification = true;
                        shareEmailAddress = new String[]() {{
                            add("dolores"),
                            add("illum"),
                            add("debitis"),
                        }};
                        title = "vel";
                    }};
                    params = new Parameters() {{
                        filters = new openapisdk.models.shared.FilterPair[]() {{
                            add(new FilterPair() {{
                                type = "FILTER_CHANNEL_GROUPING";
                                value = "id";
                            }}),
                        }};
                        groupBys = new openapisdk.models.shared.ParametersGroupBysEnum[]() {{
                            add("FILTER_EXTENSION_TYPE"),
                        }};
                        includeInviteData = false;
                        metrics = new openapisdk.models.shared.ParametersMetricsEnum[]() {{
                            add("METRIC_MEDIA_COST_ADVERTISER"),
                            add("METRIC_PLATFORM_FEE_USD"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = true;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "odit";
                                    name = "non";
                                    rules = new openapisdk.models.shared.Rule[]() {{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TARGETED_DATA_PROVIDERS";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]() {{
                                                                    add("autem"),
                                                                    add("consectetur"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_AD_TYPE_NAME";
                                                                match = "PARTIAL";
                                                                values = new String[]() {{
                                                                    add("at"),
                                                                    add("ipsum"),
                                                                    add("eveniet"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "modi";
                                        }}),
                                    }};
                                }};
                                pathFilters = new openapisdk.models.shared.PathFilter[]() {{
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_DAY_OF_WEEK";
                                                    match = "EXACT";
                                                    values = new String[]() {{
                                                        add("reprehenderit"),
                                                        add("tempore"),
                                                        add("maiores"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "LAST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET";
                    }};
                    queryId = "beatae";
                    reportDataEndTimeMs = "veritatis";
                    reportDataStartTimeMs = "in";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "et";
                        frequency = "WEEKLY";
                        nextRunMinuteOfDay = 4564823113789767141;
                        nextRunTimezoneCode = "ex";
                        startTimeMs = "dolores";
                    }};
                    timezoneCode = "placeat";
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