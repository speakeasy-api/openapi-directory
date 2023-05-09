# queries

### Available Operations

* [doubleclickbidmanagerQueriesCreatequery](#doubleclickbidmanagerqueriescreatequery) - Creates a query.
* [doubleclickbidmanagerQueriesDeletequery](#doubleclickbidmanagerqueriesdeletequery) - Deletes a stored query as well as the associated stored reports.
* [doubleclickbidmanagerQueriesGetquery](#doubleclickbidmanagerqueriesgetquery) - Retrieves a stored query.
* [doubleclickbidmanagerQueriesListqueries](#doubleclickbidmanagerquerieslistqueries) - Retrieves stored queries.
* [doubleclickbidmanagerQueriesRunquery](#doubleclickbidmanagerqueriesrunquery) - Runs a stored query to generate a report.

## doubleclickbidmanagerQueriesCreatequery

Creates a query.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                query = new Query() {{
                    kind = "omnis";
                    metadata = new QueryMetadata() {{
                        dataRange = QueryMetadataDataRangeEnum.PREVIOUS_MONTH;
                        format = QueryMetadataFormatEnum.XLSX;
                        googleCloudStoragePathForLatestReport = "perferendis";
                        googleDrivePathForLatestReport = "doloremque";
                        latestReportRunTimeMs = "reprehenderit";
                        locale = "ut";
                        reportCount = 979587;
                        running = false;
                        sendNotification = false;
                        shareEmailAddress = new String[]{{
                            add("corporis"),
                        }};
                        title = "Mrs.";
                    }};;
                    params = new Parameters() {{
                        filters = new org.openapis.openapi.models.shared.FilterPair[]{{
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_ORDER_ID;
                                value = "harum";
                            }}),
                            add(new FilterPair() {{
                                type = FilterPairTypeEnum.FILTER_TRUEVIEW_URL;
                                value = "accusamus";
                            }}),
                        }};
                        groupBys = new org.openapis.openapi.models.shared.ParametersGroupBysEnum[]{{
                            add(ParametersGroupBysEnum.FILTER_BUDGET_SEGMENT_BUDGET),
                            add(ParametersGroupBysEnum.FILTER_COUNTRY),
                        }};
                        includeInviteData = false;
                        metrics = new org.openapis.openapi.models.shared.ParametersMetricsEnum[]{{
                            add(ParametersMetricsEnum.METRIC_BRAND_LIFT_RELATIVE_BRAND_LIFT),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "molestias";
                                    name = "Ervin Gleason";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_DETAILED_DEMOGRAPHICS_ID;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("incidunt"),
                                                                    add("enim"),
                                                                    add("consequatur"),
                                                                    add("est"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_YOUTUBE_AD_VIDEO;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("distinctio"),
                                                                    add("quibusdam"),
                                                                    add("labore"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_IAR_LANGUAGE;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("cupiditate"),
                                                                    add("quos"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_YEAR;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("ipsam"),
                                                                    add("alias"),
                                                                    add("fugit"),
                                                                    add("dolorum"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "Eddie Prosacco";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_REMARKETING_LIST;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("aliquid"),
                                                                    add("provident"),
                                                                    add("necessitatibus"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_DETAILED_DEMOGRAPHICS;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("debitis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_INSERTION_ORDER_INTEGRATION_CODE;
                                                                match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                                values = new String[]{{
                                                                    add("illum"),
                                                                    add("maiores"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_INVENTORY_SOURCE_NAME;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("cumque"),
                                                                    add("facere"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_ADVERTISER_INTEGRATION_STATUS;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("accusamus"),
                                                                    add("non"),
                                                                    add("occaecati"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_PLACEMENT;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("quidem"),
                                                                    add("provident"),
                                                                    add("nam"),
                                                                    add("id"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_CHANNEL_TYPE;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("deserunt"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_VIDEO_DURATION_SECONDS_RANGE;
                                                                match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                    add("molestiae"),
                                                                    add("perferendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_AD_TYPE;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("id"),
                                                                    add("labore"),
                                                                    add("labore"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_EXTENSION_STATUS;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("vero"),
                                                                    add("aspernatur"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_USER_LIST_FIRST_PARTY;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("excepturi"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "Ramona Lueilwitz MD";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_COUNTRY;
                                                                match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                                values = new String[]{{
                                                                    add("necessitatibus"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_LINE_ITEM_LIFETIME_FREQUENCY;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_VERIFICATION_AUDIBILITY_COMPLETE;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("maxime"),
                                                                    add("deleniti"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_REGION_NAME;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("repudiandae"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_SKIPPABLE_SUPPORT;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("repellat"),
                                                                    add("quibusdam"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_BROWSER;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("accusantium"),
                                                                    add("consequuntur"),
                                                                    add("praesentium"),
                                                                    add("natus"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_VIDEO_DURATION_SECONDS;
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("pariatur"),
                                                                    add("maxime"),
                                                                    add("ea"),
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
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_ADVERTISER_NAME;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("maiores"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "Clyde Kling";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_DEVICE_MODEL;
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("fugiat"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_CREATIVE_WIDTH;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("corporis"),
                                                                    add("hic"),
                                                                    add("libero"),
                                                                    add("nobis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_VIDEO_SKIPPABLE_SUPPORT;
                                                                match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                                values = new String[]{{
                                                                    add("dignissimos"),
                                                                    add("eaque"),
                                                                    add("quis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = PathQueryOptionsFilterFilterEnum.FILTER_MOBILE_GEO;
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("dolores"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "Darryl Fadel";
                                        }}),
                                    }};
                                }};;
                                pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_EXCHANGE;
                                                    match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                    values = new String[]{{
                                                        add("voluptatem"),
                                                        add("porro"),
                                                        add("consequuntur"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_ATTRIBUTED_USERLIST_TYPE;
                                                    match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                    values = new String[]{{
                                                        add("occaecati"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_INVENTORY_SOURCE_NAME;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("earum"),
                                                        add("modi"),
                                                        add("iste"),
                                                        add("dolorum"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_CM_PLACEMENT_ID;
                                                    match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                    values = new String[]{{
                                                        add("nobis"),
                                                        add("libero"),
                                                        add("delectus"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_PARTNER_NAME;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_AGE;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("excepturi"),
                                                        add("cum"),
                                                        add("voluptate"),
                                                        add("dignissimos"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("numquam"),
                                                        add("veritatis"),
                                                        add("ipsa"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_APP_URL;
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("quidem"),
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                        add("natus"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_PAGE_LAYOUT;
                                                    match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                    values = new String[]{{
                                                        add("fugiat"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_INSERTION_ORDER_INTEGRATION_CODE;
                                                    match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                    values = new String[]{{
                                                        add("dolorum"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_EXCHANGE;
                                                    match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                    values = new String[]{{
                                                        add("asperiores"),
                                                        add("nihil"),
                                                        add("ipsum"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = PathQueryOptionsFilterFilterEnum.FILTER_TRUEVIEW_DMA_NAME;
                                                    match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                    values = new String[]{{
                                                        add("eius"),
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                        add("amet"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                                    }}),
                                }};
                            }};;
                        }};;
                        type = ParametersTypeEnum.TYPE_NOT_SUPPORTED;
                    }};;
                    queryId = "ad";
                    reportDataEndTimeMs = "saepe";
                    reportDataStartTimeMs = "suscipit";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "deserunt";
                        frequency = QueryScheduleFrequencyEnum.MONTHLY;
                        nextRunMinuteOfDay = 324683;
                        nextRunTimezoneCode = "repellendus";
                        startTimeMs = "totam";
                    }};;
                    timezoneCode = "similique";
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                asynchronous = false;
                callback = "quaerat";
                fields = "tempora";
                key = "vel";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "qui";
                uploadProtocol = "dolorum";
            }};            

            DoubleclickbidmanagerQueriesCreatequeryResponse res = sdk.queries.doubleclickbidmanagerQueriesCreatequery(req, new DoubleclickbidmanagerQueriesCreatequerySecurity("a", "esse") {{
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

## doubleclickbidmanagerQueriesDeletequery

Deletes a stored query as well as the associated stored reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeletequeryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeletequeryResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeletequerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesDeletequeryRequest req = new DoubleclickbidmanagerQueriesDeletequeryRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "amet";
                key = "tempore";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "enim";
                uploadProtocol = "dolorem";
            }};            

            DoubleclickbidmanagerQueriesDeletequeryResponse res = sdk.queries.doubleclickbidmanagerQueriesDeletequery(req, new DoubleclickbidmanagerQueriesDeletequerySecurity("sapiente", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclickbidmanagerQueriesGetquery

Retrieves a stored query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetqueryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetqueryResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetquerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesGetqueryRequest req = new DoubleclickbidmanagerQueriesGetqueryRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "vel";
                key = "libero";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "quam";
                uploadProtocol = "ipsum";
            }};            

            DoubleclickbidmanagerQueriesGetqueryResponse res = sdk.queries.doubleclickbidmanagerQueriesGetquery(req, new DoubleclickbidmanagerQueriesGetquerySecurity("incidunt", "qui") {{
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

## doubleclickbidmanagerQueriesListqueries

Retrieves stored queries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListqueriesRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListqueriesResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListqueriesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesListqueriesRequest req = new DoubleclickbidmanagerQueriesListqueriesRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "dicta";
                key = "laborum";
                oauthToken = "totam";
                pageSize = 276894L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "distinctio";
                uploadProtocol = "facilis";
            }};            

            DoubleclickbidmanagerQueriesListqueriesResponse res = sdk.queries.doubleclickbidmanagerQueriesListqueries(req, new DoubleclickbidmanagerQueriesListqueriesSecurity("aliquid", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclickbidmanagerQueriesRunquery

Runs a stored query to generate a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunqueryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunqueryResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunquerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RunQueryRequest;
import org.openapis.openapi.models.shared.RunQueryRequestDataRangeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesRunqueryRequest req = new DoubleclickbidmanagerQueriesRunqueryRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                runQueryRequest = new RunQueryRequest() {{
                    dataRange = RunQueryRequestDataRangeEnum.WEEK_TO_DATE;
                    reportDataEndTimeMs = "neque";
                    reportDataStartTimeMs = "fugit";
                    timezoneCode = "magni";
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                asynchronous = false;
                callback = "ullam";
                fields = "nam";
                key = "hic";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "soluta";
                uploadProtocol = "nobis";
            }};            

            DoubleclickbidmanagerQueriesRunqueryResponse res = sdk.queries.doubleclickbidmanagerQueriesRunquery(req, new DoubleclickbidmanagerQueriesRunquerySecurity("et", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
