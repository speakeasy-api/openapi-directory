<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.DataRange;
import org.openapis.openapi.models.shared.DataRangeRangeEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.FilterPair;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.Parameters;
import org.openapis.openapi.models.shared.ParametersTypeEnum;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathQueryOptions;
import org.openapis.openapi.models.shared.PathQueryOptionsFilter;
import org.openapis.openapi.models.shared.PathQueryOptionsFilterMatchEnum;
import org.openapis.openapi.models.shared.QueryInput;
import org.openapis.openapi.models.shared.QueryMetadata;
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

            DoubleclickbidmanagerQueriesCreateRequest req = new DoubleclickbidmanagerQueriesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                queryInput = new QueryInput() {{
                    metadata = new QueryMetadata() {{
                        dataRange = new DataRange() {{
                            customEndDate = new Date() {{
                                day = 592845;
                                month = 715190;
                                year = 844266;
                            }};;
                            customStartDate = new Date() {{
                                day = 602763;
                                month = 857946;
                                year = 544883;
                            }};;
                            range = DataRangeRangeEnum.ALL_TIME;
                        }};;
                        format = QueryMetadataFormatEnum.CSV;
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
                                    name = "Roberta Sipes";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "maiores";
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
                                                                filter = "dolorum";
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
                                                                filter = "deleniti";
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
                                                                filter = "modi";
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
                                                                filter = "perferendis";
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
                                                                filter = "laboriosam";
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
                                                                filter = "iure";
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
                                                                filter = "est";
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
                                                                filter = "nobis";
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
                                                    filter = "dolorem";
                                                    match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                    values = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "mollitia";
                                                    match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                    values = new String[]{{
                                                        add("commodi"),
                                                        add("quam"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "molestiae";
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("quia"),
                                                        add("quis"),
                                                        add("vitae"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                                    }}),
                                }};
                            }};;
                        }};;
                        type = ParametersTypeEnum.YOUTUBE_PROGRAMMATIC_GUARANTEED;
                    }};;
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 317202;
                            month = 138183;
                            year = 778346;
                        }};;
                        frequency = QueryScheduleFrequencyEnum.ONE_TIME;
                        nextRunTimezoneCode = "tenetur";
                        startDate = new Date() {{
                            day = 368725;
                            month = 662527;
                            year = 820994;
                        }};;
                    }};;
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            DoubleclickbidmanagerQueriesCreateResponse res = sdk.queries.doubleclickbidmanagerQueriesCreate(req, new DoubleclickbidmanagerQueriesCreateSecurity("nihil", "praesentium") {{
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