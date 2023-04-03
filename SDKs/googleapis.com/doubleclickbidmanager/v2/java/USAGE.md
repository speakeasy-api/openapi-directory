<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateSecurity;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryInput;
import org.openapis.openapi.models.shared.QueryScheduleFrequencyEnum;
import org.openapis.openapi.models.shared.QuerySchedule;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.ParametersTypeEnum;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.PathQueryOptions;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterMatchEnum;
import org.openapis.openapi.models.shared.PathQueryOptionsFilter;
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.FilterPair;
import org.openapis.openapi.models.shared.QueryMetadataFormatEnum;
import org.openapis.openapi.models.shared.QueryMetadata;
import org.openapis.openapi.models.shared.DataRangeRangeEnum;
import org.openapis.openapi.models.shared.DataRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesCreateRequest req = new DoubleclickbidmanagerQueriesCreateRequest() {{
                dollarXgafv = "2";
                queryInput = new QueryInput() {{
                    metadata = new QueryMetadata() {{
                        dataRange = new DataRange() {{
                            customEndDate = new Date() {{
                                day = 592845;
                                month = 715190;
                                year = 844266;
                            }};
                            customStartDate = new Date() {{
                                day = 602763;
                                month = 857946;
                                year = 544883;
                            }};
                            range = "ALL_TIME";
                        }};
                        format = "CSV";
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
                                type = "ipsa";
                                value = "delectus";
                            }}),
                            add(new FilterPair() {{
                                type = "tempora";
                                value = "suscipit";
                            }}),
                            add(new FilterPair() {{
                                type = "molestiae";
                                value = "minus";
                            }}),
                            add(new FilterPair() {{
                                type = "placeat";
                                value = "voluptatum";
                            }}),
                        }};
                        groupBys = new String[]{{
                            add("excepturi"),
                            add("nisi"),
                        }};
                        metrics = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
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
                                                                filter = "quo";
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
                                                                filter = "quod";
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
                                                                filter = "nam";
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
                                                                filter = "optio";
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
                                                                filter = "modi";
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
                                                                filter = "aspernatur";
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
                                                                filter = "dolor";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("hic"),
                                                                    add("saepe"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "fuga";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("iste"),
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "saepe";
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
                                                                filter = "est";
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
                                                                filter = "explicabo";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                    add("nemo"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "minima";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("iure"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "culpa";
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
                                                                filter = "occaecati";
                                                                match = "EXACT";
                                                                values = new String[]{{
                                                                    add("quam"),
                                                                    add("molestiae"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "velit";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("quis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "vitae";
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
                                                                filter = "tenetur";
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
                                                                filter = "temporibus";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]{{
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "voluptatibus";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("praesentium"),
                                                                    add("voluptatibus"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "ipsa";
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
                                                                filter = "reprehenderit";
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
                                                    filter = "accusamus";
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
                                                    filter = "excepturi";
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
                                                    filter = "repudiandae";
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
                                                    filter = "consequatur";
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
                                                    filter = "labore";
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
                        type = "GRP";
                    }};
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 20107;
                            month = 164940;
                            year = 828940;
                        }};
                        frequency = "DAILY";
                        nextRunTimezoneCode = "alias";
                        startDate = new Date() {{
                            day = 146441;
                            month = 677817;
                            year = 569618;
                        }};
                    }};
                }};
                accessToken = "tempora";
                alt = "proto";
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }}            

            DoubleclickbidmanagerQueriesCreateResponse res = sdk.queries.doubleclickbidmanagerQueriesCreate(req, new DoubleclickbidmanagerQueriesCreateSecurity() {{
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