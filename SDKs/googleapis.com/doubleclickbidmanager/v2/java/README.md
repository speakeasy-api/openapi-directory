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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new QueryInput() {{
                    metadata = new QueryMetadata() {{
                        dataRange = new DataRange() {{
                            customEndDate = new Date() {{
                                day = 8325060299420976708;
                                month = 7837839688282259259;
                                year = 2518412263346885298;
                            }};
                            customStartDate = new Date() {{
                                day = 5617773211005988520;
                                month = 2339563716805116249;
                                year = 7144924247938981575;
                            }};
                            range = "CUSTOM_DATES";
                        }};
                        format = "CSV";
                        sendNotification = false;
                        shareEmailAddress = new String[]() {{
                            add("vitae"),
                            add("totam"),
                            add("dolores"),
                        }};
                        title = "illum";
                    }};
                    params = new Parameters() {{
                        filters = new openapisdk.models.shared.FilterPair[]() {{
                            add(new FilterPair() {{
                                type = "vel";
                                value = "odio";
                            }}),
                        }};
                        groupBys = new String[]() {{
                            add("id"),
                            add("aspernatur"),
                        }};
                        metrics = new String[]() {{
                            add("totam"),
                            add("commodi"),
                            add("quis"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = false;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "aut";
                                    name = "odit";
                                    rules = new openapisdk.models.shared.Rule[]() {{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "aut";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("officiis"),
                                                                    add("autem"),
                                                                    add("consectetur"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "nobis";
                                                                match = "PARTIAL";
                                                                values = new String[]() {{
                                                                    add("recusandae"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "at";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "modi";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("ut"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "exercitationem";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]() {{
                                                                    add("tempore"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "maiores";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "beatae";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]() {{
                                                                    add("et"),
                                                                    add("omnis"),
                                                                    add("ipsum"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "ex";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]() {{
                                                                    add("vel"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "mollitia";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]() {{
                                                                    add("reprehenderit"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "qui";
                                                                match = "BEGINS_WITH";
                                                                values = new String[]() {{
                                                                    add("in"),
                                                                    add("autem"),
                                                                    add("qui"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "ut";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("neque"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "et";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("architecto"),
                                                                    add("quam"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "velit";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("sunt"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "voluptates";
                                                                match = "WILDCARD_EXPRESSION";
                                                                values = new String[]() {{
                                                                    add("optio"),
                                                                    add("qui"),
                                                                    add("earum"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "illo";
                                        }}),
                                    }};
                                }};
                                pathFilters = new openapisdk.models.shared.PathFilter[]() {{
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "consequatur";
                                                    match = "PARTIAL";
                                                    values = new String[]() {{
                                                        add("error"),
                                                        add("reprehenderit"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "consectetur";
                                                    match = "WILDCARD_EXPRESSION";
                                                    values = new String[]() {{
                                                        add("laboriosam"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "PATH_MATCH_POSITION_UNSPECIFIED";
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "soluta";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]() {{
                                                        add("consequuntur"),
                                                        add("laudantium"),
                                                        add("autem"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "LAST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "STANDARD";
                    }};
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 8204648627352676445;
                            month = 4234137922270959652;
                            year = 8497925768463229012;
                        }};
                        frequency = "YEARLY";
                        nextRunTimezoneCode = "quisquam";
                        startDate = new Date() {{
                            day = 1681876124477381252;
                            month = 1115785012616387305;
                            year = 2629911606854649819;
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
