# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequerySecurity;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreatequeryResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesCreatequeryRequest req = new DoubleclickbidmanagerQueriesCreatequeryRequest() {{
                dollarXgafv = "2";
                query = new Query() {{
                    kind = "provident";
                    metadata = new QueryMetadata() {{
                        dataRange = "LAST_90_DAYS";
                        format = "XLSX";
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
                    }};
                    params = new Parameters() {{
                        filters = new org.openapis.openapi.models.shared.FilterPair[]{{
                            add(new FilterPair() {{
                                type = "FILTER_REGION";
                                value = "delectus";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_TRUEVIEW_IAR_CATEGORY";
                                value = "suscipit";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_ALGORITHM_ID";
                                value = "minus";
                            }}),
                            add(new FilterPair() {{
                                type = "FILTER_VARIANT_ID";
                                value = "voluptatum";
                            }}),
                        }};
                        groupBys = new org.openapis.openapi.models.shared.ParametersGroupBysEnum[]{{
                            add("FILTER_DATA_PROVIDER_NAME"),
                            add("FILTER_AUTHORIZED_SELLER_STATE"),
                        }};
                        includeInviteData = false;
                        metrics = new org.openapis.openapi.models.shared.ParametersMetricsEnum[]{{
                            add("METRIC_STOPS_AUDIO"),
                            add("METRIC_TOTAL_MEDIA_COST_ADVERTISER"),
                            add("METRIC_CPM_FEE4_PARTNER"),
                            add("METRIC_PROFIT_ECPM_ADVERTISER"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "deserunt";
                                    name = "perferendis";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TARGETED_DATA_PROVIDERS";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("at"),
                                                                    add("maiores"),
                                                                    add("molestiae"),
                                                                    add("quod"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_HOUSEHOLD_INCOME";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("porro"),
                                                                    add("dolorum"),
                                                                    add("dicta"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_MATCH_RATIO";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("fugit"),
                                                                    add("deleniti"),
                                                                    add("hic"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_REFUND_REASON";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("commodi"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_IAR_LANGUAGE";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("cum"),
                                                                    add("esse"),
                                                                    add("ipsum"),
                                                                    add("excepturi"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_CAMPAIGN_DAILY_FREQUENCY";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("natus"),
                                                                    add("sed"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_NIELSEN_AGE";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("hic"),
                                                                    add("saepe"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_INSERTION_ORDER_STATUS";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("iste"),
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_VIDEO_CONTENT_DURATION";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("ipsa"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
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
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_REGION";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_FORMAT";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("architecto"),
                                                                    add("mollitia"),
                                                                    add("dolorem"),
                                                                    add("culpa"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "consequuntur";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_GAM_INSERTION_ORDER";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("quam"),
                                                                    add("molestiae"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TRUEVIEW_GENDER";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("quis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_TARGETED_USER_LIST";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("enim"),
                                                                    add("odit"),
                                                                    add("quo"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_OMID_CAPABLE";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("possimus"),
                                                                    add("aut"),
                                                                    add("quasi"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_VERIFICATION_VIDEO_RESIZED";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("praesentium"),
                                                                    add("voluptatibus"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_REGION";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("cum"),
                                                                    add("perferendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "FILTER_NIELSEN_DATE_RANGE";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("dicta"),
                                                                    add("corporis"),
                                                                    add("dolore"),
                                                                    add("iusto"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "dicta";
                                        }}),
                                    }};
                                }};
                                pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                                    add(new PathFilter() {{
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
                                        pathMatchPosition = "LAST";
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_BUDGET_SEGMENT_START_DATE";
                                                    match = "PARTIAL";
                                                    values = new String[]{{
                                                        add("itaque"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "ANY";
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_DAY_OF_WEEK";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]{{
                                                        add("explicabo"),
                                                        add("deserunt"),
                                                        add("distinctio"),
                                                        add("quibusdam"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "FILTER_TRUEVIEW_IAR_REMARKETING_LIST";
                                                    match = "EXACT";
                                                    values = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "FIRST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "TYPE_NIELSEN_AUDIENCE_PROFILE";
                    }};
                    queryId = "perferendis";
                    reportDataEndTimeMs = "magni";
                    reportDataStartTimeMs = "assumenda";
                    schedule = new QuerySchedule() {{
                        endTimeMs = "ipsam";
                        frequency = "ONE_TIME";
                        nextRunMinuteOfDay = 146441;
                        nextRunTimezoneCode = "dolorum";
                        startTimeMs = "excepturi";
                    }};
                    timezoneCode = "tempora";
                }};
                accessToken = "facilis";
                alt = "proto";
                asynchronous = false;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }}            

            DoubleclickbidmanagerQueriesCreatequeryResponse res = sdk.queries.doubleclickbidmanagerQueriesCreatequery(req, new DoubleclickbidmanagerQueriesCreatequerySecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.query.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### queries

* `doubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `doubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `doubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `doubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `doubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### reports

* `doubleclickbidmanagerReportsListreports` - Retrieves stored reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
