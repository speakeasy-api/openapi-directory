<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequerySecurity;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryQueryParams;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryResponse;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.QuerySchedule;
import org.openapis.openapi.models.shared.ParametersGroupBysEnum;
import org.openapis.openapi.models.shared.ParametersMetricsEnum;
import org.openapis.openapi.models.shared.ParametersTypeEnum;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.PathQueryOptions;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterFilterEnum;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterMatchEnum;
import org.openapis.openapi.models.shared.PathQueryOptionsFilter;
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.FilterPairTypeEnum;
import org.openapis.openapi.models.shared.FilterPair;
import org.openapis.openapi.models.shared.QueryMetadataDataRangeEnum;
import org.openapis.openapi.models.shared.QueryMetadataFormatEnum;
import org.openapis.openapi.models.shared.QueryMetadata;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    asynchronous = false;
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new Query() {{
                    kind = "deserunt";
                    metadata = new QueryMetadata() {{
                        dataRange = "PREVIOUS_WEEK";
                        format = "EXCEL_CSV";
                        googleCloudStoragePathForLatestReport = "magnam";
                        googleDrivePathForLatestReport = "debitis";
                        latestReportRunTimeMs = "ipsa";
                        locale = "delectus";
                        reportCount = 272656;
                        running = false;
                        sendNotification = false;
                        shareEmailAddress = new String[]{{
                            add("molestiae"),
                            add("minus"),
                        }};
                        title = "Dr.";
                    }};
                    params = new Parameters() {{
                        filters = new org.openapis.openapi.models.shared.FilterPair[]{{
                            add(new FilterPair() {{
                                type = "FILTER_AMP_PAGE_REQUEST";
                                value = "excepturi";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_AUTHORIZED_SELLER_STATE";
                                value = "recusandae";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_VIDEO_DURATION";
                                value = "ab";
                            }}),
                        }};
                        groupBys = new org.openapis.openapi.models.shared.ParametersGroupBysEnum[]{{
                            add("FILTER_PARTNER_CURRENCY"),
                            add("FILTER_GMAIL_COUNTRY_NAME"),
                        }};
                        includeInviteData = false;
                        metrics = new org.openapis.openapi.models.shared.ParametersMetricsEnum[]{{
                            add("METRIC_FEE16_ADVERTISER"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "repellendus";
                                    name = "sapiente";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_PLACEMENT_ID";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("quod"),
                                                                    add("quod"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_REGION_NAME";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("dolorum"),
                                                                    add("dicta"),
                                                                    add("nam"),
                                                                    add("officia"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_GAM_INSERTION_ORDER";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("hic"),
                                                                    add("optio"),
                                                                    add("totam"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_USER_LIST_THIRD_PARTY";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("modi"),
                                                                    add("qui"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "impedit";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_NIELSEN_DEVICE_ID";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("perferendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_REGION";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("iste"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_EXTENSION_STATUS";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("saepe"),
                                                                    add("fuga"),
                                                                    add("in"),
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
                                                                filter = "FILTER_NIELSEN_RESTATEMENT_DATE";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("architecto"),
                                                                    add("ipsa"),
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_HOUSEHOLD_INCOME";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("dolores"),
                                                                    add("dolorem"),
                                                                    add("corporis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_KEYWORD";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                    add("nemo"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "minima";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_NIELSEN_RESTATEMENT_DATE";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("sapiente"),
                                                                    add("architecto"),
                                                                    add("mollitia"),
                                                                    add("dolorem"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_ZIP_CODE";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("occaecati"),
                                                                    add("numquam"),
                                                                    add("commodi"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("error"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_INVENTORY_FORMAT";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("laborum"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_URL";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("sequi"),
                                                                    add("tenetur"),
                                                                    add("ipsam"),
                                                                    add("id"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_VERIFICATION_VIDEO_PLAYER_SIZE";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("error"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "voluptatibus";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_AUDIENCE_LIST";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_DMA_NAME";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("doloremque"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_IAR_REGION";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("corporis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_IAR_PARENTAL_STATUS";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("harum"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_EVENT_TYPE";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("quae"),
                                                                    add("ipsum"),
                                                                    add("quidem"),
                                                                    add("molestias"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_CREATIVE_STATUS";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("praesentium"),
                                                                    add("rem"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_ADVERTISER_TIMEZONE";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("veritatis"),
                                                                    add("itaque"),
                                                                    add("incidunt"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_URL";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("quibusdam"),
                                                                    add("explicabo"),
                                                                    add("deserunt"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_LINE_ITEM_STATUS";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("modi"),
                                                                    add("qui"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_VIDEO_DURATION_SECONDS_RANGE";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("perferendis"),
                                                                    add("magni"),
                                                                    add("assumenda"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "ipsam";
                                        }}),
                                    }};
                                }};
                                pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_INSERTION_ORDER_INTEGRATION_CODE";
                                                    match = "PARTIAL";
                                                    values = new String[]{{
                                                        add("facilis"),
                                                        add("tempore"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "ANY";
                                    }}),
                                }};
                            }};
                        }};
                        type = "TYPE_PATH";
                    }};
                    queryId = "eum";
                    reportDataEndTimeMs = "non";
                    reportDataStartTimeMs = "eligendi";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "sint";
                        frequency = "WEEKLY";
                        nextRunMinuteOfDay = 592042;
                        nextRunTimezoneCode = "necessitatibus";
                        startTimeMs = "sint";
                    }};
                    timezoneCode = "officia";
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