<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.FilterPair;
import org.openapis.openapi.models.shared.FilterPairTypeEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.ParametersGroupBysEnum;
import org.openapis.openapi.models.shared.ParametersMetricsEnum;
import org.openapis.openapi.models.shared.ParametersTypeEnum;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathQueryOptions;
import org.openapis.openapi.models.shared.PathQueryOptionsFilter;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterFilterEnum;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterMatchEnum;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryMetadata;
import org.openapis.openapi.models.shared.QueryMetadataDataRangeEnum;
import org.openapis.openapi.models.shared.QueryMetadataFormatEnum;
import org.openapis.openapi.models.shared.QuerySchedule;
import org.openapis.openapi.models.shared.QueryScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesCreatequeryRequest req = new DoubleclickbidmanagerQueriesCreatequeryRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                query = new Query() {{
                    kind = "provident";
                    metadata = new QueryMetadata() {{
                        dataRange = QueryMetadataDataRangeEnum.LAST90_DAYS;
                        format = QueryMetadataFormatEnum.XLSX;
                        googleCloudStoragePathForLatestReport = "unde";
                        googleDrivePathForLatestReport = "nulla";
                        latestReportRunTimeMs = "corrupti";
                        locale = "illum";
                        reportCount = 423655;
                        running = false;
                        sendNotification = false;
                        shareEmailAddress = new String[]{{
                            add("deserunt"),
                            add("suscipit"),
                            add("iure"),
                        }};
                        title = "Mrs.";
                    }};;
                    params = new Parameters() {{
                        filters = new org.openapis.openapi.models.shared.FilterPair[]{{
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_REGION;
                                value = "delectus";
                            }}),
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_TRUEVIEW_IAR_CATEGORY;
                                value = "suscipit";
                            }}),
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_ALGORITHM_ID;
                                value = "minus";
                            }}),
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_VARIANT_ID;
                                value = "voluptatum";
                            }}),
                        }};
                        groupBys = new org.openapis.openapi.models.shared.ParametersGroupBysEnum[]{{
                            add(ParametersGroupBysEnum.FILTER_DATA_PROVIDER_NAME),
                            add(ParametersGroupBysEnum.FILTER_AUTHORIZED_SELLER_STATE),
                        }};
                        includeInviteData = false;
                        metrics = new org.openapis.openapi.models.shared.ParametersMetricsEnum[]{{
                            add(ParametersMetricsEnum.METRIC_STOPS_AUDIO),
                            add(ParametersMetricsEnum.METRIC_TOTAL_MEDIA_COST_ADVERTISER),
                            add(ParametersMetricsEnum.METRIC_CPM_FEE4_PARTNER),
                            add(ParametersMetricsEnum.METRIC_PROFIT_ECPM_ADVERTISER),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "deserunt";
                                    name = "Roberta Sipes";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_VERIFICATION_VIDEO_RESIZED;
                                                                match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                                values = new String[]{{
                                                                    add("quod"),
                                                                    add("esse"),
                                                                    add("totam"),
                                                                    add("porro"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_INSERTION_ORDER_INTEGRATION_CODE;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("officia"),
                                                                    add("occaecati"),
                                                                    add("fugit"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_CM_PLACEMENT_ID;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("totam"),
                                                                    add("beatae"),
                                                                    add("commodi"),
                                                                    add("molestiae"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_IAR_LANGUAGE;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("cum"),
                                                                    add("esse"),
                                                                    add("ipsum"),
                                                                    add("excepturi"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_YEAR;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("sed"),
                                                                    add("iste"),
                                                                    add("dolor"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_INVENTORY_DELIVERY_METHOD;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("fuga"),
                                                                    add("in"),
                                                                    add("corporis"),
                                                                    add("iste"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_NIELSEN_RESTATEMENT_DATE;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("architecto"),
                                                                    add("ipsa"),
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_HOUSEHOLD_INCOME;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("dolores"),
                                                                    add("dolorem"),
                                                                    add("corporis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_PUBLISHER_PROPERTY_ID;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("nemo"),
                                                                    add("minima"),
                                                                    add("excepturi"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "Charlene Nicolas";
                                        }}),
                                    }};
                                }};;
                                pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE;
                                                    match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                    values = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_GMAIL_DEVICE_TYPE_NAME;
                                                    match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                    values = new String[]{{
                                                        add("commodi"),
                                                        add("quam"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_ALGORITHM;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("quia"),
                                                        add("quis"),
                                                        add("vitae"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                                    }}),
                                }};
                            }};;
                        }};;
                        type = ParametersTypeEnum.TYPE_ESTIMATED_CONVERSION;
                    }};;
                    queryId = "enim";
                    reportDataEndTimeMs = "odit";
                    reportDataStartTimeMs = "quo";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "sequi";
                        frequency = QueryScheduleFrequencyEnum.YEARLY;
                        nextRunMinuteOfDay = 368725;
                        nextRunTimezoneCode = "id";
                        startTimeMs = "possimus";
                    }};;
                    timezoneCode = "aut";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                asynchronous = false;
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            DoubleclickbidmanagerQueriesCreatequeryResponse res = sdk.queries.doubleclickbidmanagerQueriesCreatequery(req, new DoubleclickbidmanagerQueriesCreatequerySecurity("praesentium", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.query != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->