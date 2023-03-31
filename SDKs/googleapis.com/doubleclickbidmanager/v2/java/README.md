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

import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateSecurity;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateQueryParams;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerQueriesCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerQueriesCreateRequest req = new DoubleclickbidmanagerQueriesCreateRequest() {{
                security = new DoubleclickbidmanagerQueriesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DoubleclickbidmanagerQueriesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new QueryInput() {{
                    metadata = new QueryMetadata() {{
                        dataRange = new DataRange() {{
                            customEndDate = new Date() {{
                                day = 645894;
                                month = 384382;
                                year = 437587;
                            }};
                            customStartDate = new Date() {{
                                day = 297534;
                                month = 891773;
                                year = 56713;
                            }};
                            range = "LAST_60_DAYS";
                        }};
                        format = "FORMAT_UNSPECIFIED";
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
                                type = "iusto";
                                value = "excepturi";
                            }}),
                            add(new FilterPair() {{
                                type = "nisi";
                                value = "recusandae";
                            }}),
                            add(new FilterPair() {{
                                type = "temporibus";
                                value = "ab";
                            }}),
                        }};
                        groupBys = new String[]{{
                            add("veritatis"),
                            add("deserunt"),
                        }};
                        metrics = new String[]{{
                            add("ipsam"),
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
                                                                filter = "at";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("quod"),
                                                                    add("quod"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "esse";
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
                                                                filter = "occaecati";
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
                                                                filter = "beatae";
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
                                                                filter = "ipsum";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("perferendis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "ad";
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
                                                                filter = "natus";
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
                                                                filter = "iure";
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
                                                                filter = "iure";
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
                                                                filter = "consequuntur";
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
                                                                filter = "quam";
                                                                match = "PARTIAL";
                                                                values = new String[]{{
                                                                    add("error"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "quia";
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
                                                                filter = "enim";
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
                                                                filter = "possimus";
                                                                match = "UNKNOWN";
                                                                values = new String[]{{
                                                                    add("error"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "temporibus";
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
                                                                filter = "praesentium";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "voluptate";
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
                                                                filter = "ut";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("corporis"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "dolore";
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
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "quasi";
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
                                                                filter = "enim";
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
                                                                filter = "distinctio";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]{{
                                                                    add("modi"),
                                                                    add("qui"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "aliquid";
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
                                                    filter = "dolorum";
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
                        type = "PATH_ATTRIBUTION";
                    }};
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 433288;
                            month = 248753;
                            year = 756107;
                        }};
                        frequency = "SEMI_MONTHLY";
                        nextRunTimezoneCode = "aliquid";
                        startDate = new Date() {{
                            day = 592042;
                            month = 896039;
                            year = 572252;
                        }};
                    }};
                }};
            }};            

            DoubleclickbidmanagerQueriesCreateResponse res = sdk.queries.doubleclickbidmanagerQueriesCreate(req);

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

* `doubleclickbidmanagerQueriesCreate` - Creates a query.
* `doubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `doubleclickbidmanagerQueriesGet` - Retrieves a query.
* `doubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `doubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `doubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `doubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
