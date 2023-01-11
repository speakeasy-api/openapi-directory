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
                    accessToken = "dolorem";
                    alt = "json";
                    callback = "natus";
                    fields = "iste";
                    key = "autem";
                    oauthToken = "odio";
                    prettyPrint = false;
                    quotaUser = "porro";
                    uploadType = "omnis";
                    uploadProtocol = "et";
                }};
                request = new QueryInput() {{
                    metadata = new QueryMetadata() {{
                        dataRange = new DataRange() {{
                            customEndDate = new Date() {{
                                day = 676989845990379162;
                                month = 745545820824939100;
                                year = 2299688124540611142;
                            }};
                            customStartDate = new Date() {{
                                day = 1258411738656733580;
                                month = 8750470440494043211;
                                year = 2051679152215644118;
                            }};
                            range = "PREVIOUS_DAY";
                        }};
                        format = "XLSX";
                        sendNotification = true;
                        shareEmailAddress = new String[]() {{
                            add("aut"),
                        }};
                        title = "qui";
                    }};
                    params = new Parameters() {{
                        filters = new openapisdk.models.shared.FilterPair[]() {{
                            add(new FilterPair() {{
                                type = "est";
                                value = "praesentium";
                            }}),
                            add(new FilterPair() {{
                                type = "distinctio";
                                value = "vel";
                            }}),
                        }};
                        groupBys = new String[]() {{
                            add("iure"),
                            add("nulla"),
                        }};
                        metrics = new String[]() {{
                            add("quas"),
                            add("culpa"),
                        }};
                        options = new Options() {{
                            includeOnlyTargetedUserLists = true;
                            pathQueryOptions = new PathQueryOptions() {{
                                channelGrouping = new ChannelGrouping() {{
                                    fallbackName = "consequatur";
                                    name = "reiciendis";
                                    rules = new openapisdk.models.shared.Rule[]() {{
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "aliquam";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("est"),
                                                                    add("et"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "vero";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("doloremque"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "odio";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("enim"),
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
                                                                    add("ut"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "officia";
                                                                match = "EXACT";
                                                                values = new String[]() {{
                                                                    add("quia"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "alias";
                                                                match = "UNKNOWN";
                                                                values = new String[]() {{
                                                                    add("minus"),
                                                                    add("aut"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "qui";
                                        }}),
                                        add(new Rule() {{
                                            disjunctiveMatchStatements = new openapisdk.models.shared.DisjunctiveMatchStatement[]() {{
                                                add(new DisjunctiveMatchStatement() {{
                                                    eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                                        add(new EventFilter() {{
                                                            dimensionFilter = new PathQueryOptionsFilter() {{
                                                                filter = "dolorem";
                                                                match = "PARTIAL";
                                                                values = new String[]() {{
                                                                    add("ad"),
                                                                    add("ipsum"),
                                                                    add("labore"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }};
                                            name = "omnis";
                                        }}),
                                    }};
                                }};
                                pathFilters = new openapisdk.models.shared.PathFilter[]() {{
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "ipsa";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]() {{
                                                        add("illo"),
                                                        add("fuga"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "ANY";
                                    }}),
                                    add(new PathFilter() {{
                                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "neque";
                                                    match = "BEGINS_WITH";
                                                    values = new String[]() {{
                                                        add("distinctio"),
                                                        add("culpa"),
                                                    }};
                                                }};
                                            }}),
                                            add(new EventFilter() {{
                                                dimensionFilter = new PathQueryOptionsFilter() {{
                                                    filter = "sunt";
                                                    match = "EXACT";
                                                    values = new String[]() {{
                                                        add("sed"),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        pathMatchPosition = "LAST";
                                    }}),
                                }};
                            }};
                        }};
                        type = "INVENTORY_AVAILABILITY";
                    }};
                    schedule = new QuerySchedule() {{
                        endDate = new Date() {{
                            day = 1227414933352573253;
                            month = 4509706259727653953;
                            year = 8502553917695735119;
                        }};
                        frequency = "YEARLY";
                        nextRunTimezoneCode = "impedit";
                        startDate = new Date() {{
                            day = 3131963261037629669;
                            month = 7320346362663885968;
                            year = 1371081251618962303;
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
