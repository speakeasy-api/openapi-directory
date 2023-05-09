# queries

### Available Operations

* [doubleclickbidmanagerQueriesCreate](#doubleclickbidmanagerqueriescreate) - Creates a query.
* [doubleclickbidmanagerQueriesDelete](#doubleclickbidmanagerqueriesdelete) - Deletes a query as well as the associated reports.
* [doubleclickbidmanagerQueriesGet](#doubleclickbidmanagerqueriesget) - Retrieves a query.
* [doubleclickbidmanagerQueriesList](#doubleclickbidmanagerquerieslist) - Lists queries created by the current user.
* [doubleclickbidmanagerQueriesReportsGet](#doubleclickbidmanagerqueriesreportsget) - Retrieves a report.
* [doubleclickbidmanagerQueriesReportsList](#doubleclickbidmanagerqueriesreportslist) - Lists reports associated with a query.
* [doubleclickbidmanagerQueriesRun](#doubleclickbidmanagerqueriesrun) - Runs a stored query to generate a report.

## doubleclickbidmanagerQueriesCreate

Creates a query.

### Example Usage

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
                                day = 55714;
                                month = 604846;
                                year = 451159;
                            }};;
                            customStartDate = new Date() {{
                                day = 739264;
                                month = 19987;
                                year = 39187;
                            }};;
                            range = DataRangeRangeEnum.PREVIOUS_WEEK;
                        }};;
                        format = QueryMetadataFormatEnum.FORMAT_UNSPECIFIED;
                        sendNotification = false;
                        shareEmailAddress = new String[]{{
                            add("dicta"),
                            add("corporis"),
                            add("dolore"),
                            add("iusto"),
                        }};
                        title = "Mr.";
                    }};;
                    params = new Parameters() {{
                        filters = new org.openapis.openapi.models.shared.FilterPair[]{{
                            add(new FilterPair() {{
                                type = "enim";
                                value = "accusamus";
                            }}),
                            add(new FilterPair() {{
                                type = "commodi";
                                value = "repudiandae";
                            }}),
                            add(new FilterPair() {{
                                type = "quae";
                                value = "ipsum";
                            }}),
                        }};
                        groupBys = new String[]{{
                            add("molestias"),
                            add("excepturi"),
                            add("pariatur"),
                        }};
                        metrics = new String[]{{
                            add("praesentium"),
                            add("rem"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "voluptates";
                                    name = "Dr. Casey Mayer";
                                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "quibusdam";
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
                                                                filter = "modi";
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("cupiditate"),
                                                                    add("quos"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "perferendis";
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
                                                                filter = "non";
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
                                                                filter = "sint";
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
                                                                filter = "dolorum";
                                                                match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                                values = new String[]{{
                                                                    add("illum"),
                                                                    add("maiores"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "rerum";
                                                                match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                                values = new String[]{{
                                                                    add("cumque"),
                                                                    add("facere"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "ea";
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
                                                                filter = "enim";
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
                                                                filter = "deleniti";
                                                                match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                                values = new String[]{{
                                                                    add("deserunt"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "nisi";
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
                                                                filter = "nihil";
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
                                                                filter = "natus";
                                                                match = PathQueryOptionsFilterMatchEnum.BEGINS_WITH;
                                                                values = new String[]{{
                                                                    add("vero"),
                                                                    add("aspernatur"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "architecto";
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
                                    }};
                                }};;
                                pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "ad";
                                                    match = PathQueryOptionsFilterMatchEnum.PARTIAL;
                                                    values = new String[]{{
                                                        add("necessitatibus"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "odit";
                                                    match = PathQueryOptionsFilterMatchEnum.EXACT;
                                                    values = new String[]{{
                                                        add("iure"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "doloribus";
                                                    match = PathQueryOptionsFilterMatchEnum.WILDCARD_EXPRESSION;
                                                    values = new String[]{{
                                                        add("maxime"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "architecto";
                                                    match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                    values = new String[]{{
                                                        add("ullam"),
                                                        add("expedita"),
                                                        add("nihil"),
                                                        add("repellat"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "quibusdam";
                                                    match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                    values = new String[]{{
                                                        add("pariatur"),
                                                        add("accusantium"),
                                                        add("consequuntur"),
                                                        add("praesentium"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "sunt";
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
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "accusantium";
                                                    match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                    values = new String[]{{
                                                        add("quidem"),
                                                        add("ipsam"),
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "nam";
                                                    match = PathQueryOptionsFilterMatchEnum.UNKNOWN;
                                                    values = new String[]{{
                                                        add("nemo"),
                                                        add("voluptatibus"),
                                                        add("perferendis"),
                                                        add("fugiat"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                                    }}),
                                }};
                            }};;
                        }};;
                        type = ParametersTypeEnum.REPORT_TYPE_UNSPECIFIED;
                    }};;
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 764912;
                            month = 359978;
                            year = 944124;
                        }};;
                        frequency = QueryScheduleFrequencyEnum.MONTHLY;
                        nextRunTimezoneCode = "nobis";
                        startDate = new Date() {{
                            day = 171629;
                            month = 339404;
                            year = 521037;
                        }};;
                    }};;
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "nesciunt";
                key = "eos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "minus";
                uploadProtocol = "quam";
            }};            

            DoubleclickbidmanagerQueriesCreateResponse res = sdk.queries.doubleclickbidmanagerQueriesCreate(req, new DoubleclickbidmanagerQueriesCreateSecurity("dolor", "vero") {{
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

## doubleclickbidmanagerQueriesDelete

Deletes a query as well as the associated reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeleteRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeleteResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesDeleteRequest req = new DoubleclickbidmanagerQueriesDeleteRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "perspiciatis";
                key = "voluptatem";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            DoubleclickbidmanagerQueriesDeleteResponse res = sdk.queries.doubleclickbidmanagerQueriesDelete(req, new DoubleclickbidmanagerQueriesDeleteSecurity("eaque", "occaecati") {{
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

## doubleclickbidmanagerQueriesGet

Retrieves a query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesGetRequest req = new DoubleclickbidmanagerQueriesGetRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "iste";
                key = "dolorum";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
            }};            

            DoubleclickbidmanagerQueriesGetResponse res = sdk.queries.doubleclickbidmanagerQueriesGet(req, new DoubleclickbidmanagerQueriesGetSecurity("libero", "delectus") {{
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

## doubleclickbidmanagerQueriesList

Lists queries created by the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesListRequest req = new DoubleclickbidmanagerQueriesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "dolorem";
                key = "dolor";
                oauthToken = "qui";
                orderBy = "ipsum";
                pageSize = 944373L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptate";
                uploadProtocol = "dignissimos";
            }};            

            DoubleclickbidmanagerQueriesListResponse res = sdk.queries.doubleclickbidmanagerQueriesList(req, new DoubleclickbidmanagerQueriesListSecurity("reiciendis", "amet") {{
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

## doubleclickbidmanagerQueriesReportsGet

Retrieves a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsGetRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsGetResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesReportsGetRequest req = new DoubleclickbidmanagerQueriesReportsGetRequest("dolorum", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "odio";
                key = "quaerat";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            DoubleclickbidmanagerQueriesReportsGetResponse res = sdk.queries.doubleclickbidmanagerQueriesReportsGet(req, new DoubleclickbidmanagerQueriesReportsGetSecurity("natus", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclickbidmanagerQueriesReportsList

Lists reports associated with a query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsListRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsListResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesReportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesReportsListRequest req = new DoubleclickbidmanagerQueriesReportsListRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "dolorum";
                key = "iusto";
                oauthToken = "voluptate";
                orderBy = "dolorum";
                pageSize = 536579L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "distinctio";
                uploadProtocol = "asperiores";
            }};            

            DoubleclickbidmanagerQueriesReportsListResponse res = sdk.queries.doubleclickbidmanagerQueriesReportsList(req, new DoubleclickbidmanagerQueriesReportsListSecurity("nihil", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclickbidmanagerQueriesRun

Runs a stored query to generate a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DataRange;
import org.openapis.openapi.models.shared.DataRangeRangeEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.RunQueryRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesRunRequest req = new DoubleclickbidmanagerQueriesRunRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                runQueryRequest = new RunQueryRequest() {{
                    dataRange = new DataRange() {{
                        customEndDate = new Date() {{
                            day = 906418;
                            month = 263322;
                            year = 137220;
                        }};;
                        customStartDate = new Date() {{
                            day = 20651;
                            month = 229219;
                            year = 758379;
                        }};;
                        range = DataRangeRangeEnum.ALL_TIME;
                    }};;
                }};;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "deserunt";
                key = "provident";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "repellendus";
                synchronous = false;
                uploadType = "totam";
                uploadProtocol = "similique";
            }};            

            DoubleclickbidmanagerQueriesRunResponse res = sdk.queries.doubleclickbidmanagerQueriesRun(req, new DoubleclickbidmanagerQueriesRunSecurity("alias", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
