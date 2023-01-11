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

            AnalyticsreportingReportsBatchGetRequest req = new AnalyticsreportingReportsBatchGetRequest() {{
                security = new AnalyticsreportingReportsBatchGetSecurity() {{
                    option1 = new AnalyticsreportingReportsBatchGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new AnalyticsreportingReportsBatchGetQueryParams() {{
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
                request = new GetReportsRequest() {{
                    reportRequests = new openapisdk.models.shared.ReportRequest[]() {{
                        add(new ReportRequest() {{
                            cohortGroup = new CohortGroup() {{
                                cohorts = new openapisdk.models.shared.Cohort[]() {{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "debitis";
                                            startDate = "voluptatum";
                                        }};
                                        name = "et";
                                        type = "FIRST_VISIT_DATE";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "dolorem";
                                            startDate = "et";
                                        }};
                                        name = "voluptate";
                                        type = "FIRST_VISIT_DATE";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "vitae";
                                            startDate = "totam";
                                        }};
                                        name = "dolores";
                                        type = "FIRST_VISIT_DATE";
                                    }}),
                                }};
                                lifetimeValue = true;
                            }};
                            dateRanges = new openapisdk.models.shared.DateRange[]() {{
                                add(new DateRange() {{
                                    endDate = "odio";
                                    startDate = "dolore";
                                }}),
                                add(new DateRange() {{
                                    endDate = "id";
                                    startDate = "aspernatur";
                                }}),
                            }};
                            dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "quis";
                                            expressions = new String[]() {{
                                                add("aut"),
                                                add("odit"),
                                            }};
                                            not = true;
                                            operator = "PARTIAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "aut";
                                            expressions = new String[]() {{
                                                add("sed"),
                                            }};
                                            not = false;
                                            operator = "NUMERIC_GREATER_THAN";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "nobis";
                                            expressions = new String[]() {{
                                                add("qui"),
                                            }};
                                            not = true;
                                            operator = "NUMERIC_LESS_THAN";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "sint";
                                            expressions = new String[]() {{
                                                add("ut"),
                                            }};
                                            not = false;
                                            operator = "PARTIAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "tempore";
                                            expressions = new String[]() {{
                                                add("incidunt"),
                                            }};
                                            not = false;
                                            operator = "ENDS_WITH";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "omnis";
                                            expressions = new String[]() {{
                                                add("ex"),
                                            }};
                                            not = true;
                                            operator = "NUMERIC_GREATER_THAN";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "rerum";
                                            expressions = new String[]() {{
                                                add("voluptas"),
                                                add("quam"),
                                            }};
                                            not = false;
                                            operator = "PARTIAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "unde";
                                            expressions = new String[]() {{
                                                add("autem"),
                                                add("qui"),
                                            }};
                                            not = false;
                                            operator = "NUMERIC_EQUAL";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                            }};
                            dimensions = new openapisdk.models.shared.Dimension[]() {{
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("et"),
                                        add("accusantium"),
                                        add("esse"),
                                    }};
                                    name = "architecto";
                                }}),
                            }};
                            filtersExpression = "quam";
                            hideTotals = false;
                            hideValueRanges = false;
                            includeEmptyRows = true;
                            metricFilterClauses = new openapisdk.models.shared.MetricFilterClause[]() {{
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "magni";
                                            metricName = "et";
                                            not = true;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "earum";
                                            metricName = "illo";
                                            not = true;
                                            operator = "IS_MISSING";
                                        }}),
                                    }};
                                    operator = "AND";
                                }}),
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "commodi";
                                            metricName = "error";
                                            not = false;
                                            operator = "GREATER_THAN";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "nostrum";
                                            metricName = "ut";
                                            not = false;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                            }};
                            metrics = new openapisdk.models.shared.Metric[]() {{
                                add(new Metric() {{
                                    alias = "aut";
                                    expression = "quas";
                                    formattingType = "FLOAT";
                                }}),
                            }};
                            orderBys = new openapisdk.models.shared.OrderBy[]() {{
                                add(new OrderBy() {{
                                    fieldName = "autem";
                                    orderType = "SMART";
                                    sortOrder = "ASCENDING";
                                }}),
                            }};
                            pageSize = 8204648627352676445;
                            pageToken = "perferendis";
                            pivots = new openapisdk.models.shared.Pivot[]() {{
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "ea";
                                                    expressions = new String[]() {{
                                                        add("eum"),
                                                    }};
                                                    not = false;
                                                    operator = "NUMERIC_EQUAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "reiciendis";
                                                    expressions = new String[]() {{
                                                        add("cumque"),
                                                        add("minima"),
                                                        add("necessitatibus"),
                                                    }};
                                                    not = true;
                                                    operator = "OPERATOR_UNSPECIFIED";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "labore";
                                                    expressions = new String[]() {{
                                                        add("impedit"),
                                                        add("ad"),
                                                    }};
                                                    not = true;
                                                    operator = "OPERATOR_UNSPECIFIED";
                                                }}),
                                            }};
                                            operator = "OR";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("tempora"),
                                            }};
                                            name = "deserunt";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("sunt"),
                                                add("sit"),
                                                add("autem"),
                                            }};
                                            name = "quis";
                                        }}),
                                    }};
                                    maxGroupCount = 952897656927189675;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "placeat";
                                            expression = "qui";
                                            formattingType = "INTEGER";
                                        }}),
                                        add(new Metric() {{
                                            alias = "quis";
                                            expression = "adipisci";
                                            formattingType = "TIME";
                                        }}),
                                    }};
                                    startGroup = 4230816687517220040;
                                }}),
                            }};
                            samplingLevel = "SMALL";
                            segments = new openapisdk.models.shared.Segment[]() {{
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "numquam";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aperiam";
                                                                                    expressions = new String[]() {{
                                                                                        add("excepturi"),
                                                                                        add("mollitia"),
                                                                                        add("inventore"),
                                                                                    }};
                                                                                    maxComparisonValue = "delectus";
                                                                                    minComparisonValue = "ipsa";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "animi";
                                                                                    maxComparisonValue = "ut";
                                                                                    metricName = "aliquam";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "consequuntur";
                                                                                    expressions = new String[]() {{
                                                                                        add("cupiditate"),
                                                                                        add("provident"),
                                                                                        add("molestiae"),
                                                                                    }};
                                                                                    maxComparisonValue = "pariatur";
                                                                                    minComparisonValue = "quasi";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "enim";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "sit";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("occaecati"),
                                                                                    }};
                                                                                    maxComparisonValue = "ex";
                                                                                    minComparisonValue = "voluptatem";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "temporibus";
                                                                                    maxComparisonValue = "velit";
                                                                                    metricName = "quae";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "possimus";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolorum"),
                                                                                        add("doloribus"),
                                                                                        add("saepe"),
                                                                                    }};
                                                                                    maxComparisonValue = "sunt";
                                                                                    minComparisonValue = "earum";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "asperiores";
                                                                                    metricName = "et";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "nihil";
                                                                                    expressions = new String[]() {{
                                                                                        add("suscipit"),
                                                                                    }};
                                                                                    maxComparisonValue = "impedit";
                                                                                    minComparisonValue = "non";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "possimus";
                                                                                    metricName = "illo";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "blanditiis";
                                                                                    expressions = new String[]() {{
                                                                                        add("delectus"),
                                                                                    }};
                                                                                    maxComparisonValue = "rerum";
                                                                                    minComparisonValue = "dolore";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "velit";
                                                                                    maxComparisonValue = "officia";
                                                                                    metricName = "modi";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "a";
                                                                                    expressions = new String[]() {{
                                                                                        add("excepturi"),
                                                                                        add("autem"),
                                                                                    }};
                                                                                    maxComparisonValue = "corporis";
                                                                                    minComparisonValue = "dicta";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "doloremque";
                                                                                    maxComparisonValue = "quae";
                                                                                    metricName = "nisi";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "eos";
                                                                                    expressions = new String[]() {{
                                                                                        add("reiciendis"),
                                                                                    }};
                                                                                    maxComparisonValue = "aspernatur";
                                                                                    minComparisonValue = "praesentium";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nihil";
                                                                                    maxComparisonValue = "adipisci";
                                                                                    metricName = "consequatur";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "nisi";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                        add("quo"),
                                                                                        add("vero"),
                                                                                    }};
                                                                                    maxComparisonValue = "alias";
                                                                                    minComparisonValue = "totam";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eius";
                                                                                    maxComparisonValue = "repellat";
                                                                                    metricName = "beatae";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "necessitatibus";
                                                                                    expressions = new String[]() {{
                                                                                        add("culpa"),
                                                                                        add("repellendus"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptas";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "architecto";
                                                                                    maxComparisonValue = "molestias";
                                                                                    metricName = "rerum";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quibusdam";
                                                                                    expressions = new String[]() {{
                                                                                        add("quo"),
                                                                                    }};
                                                                                    maxComparisonValue = "ea";
                                                                                    minComparisonValue = "soluta";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "commodi";
                                                                                    maxComparisonValue = "blanditiis";
                                                                                    metricName = "facere";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "id";
                                                                                    expressions = new String[]() {{
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "perspiciatis";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "ex";
                                                                                    metricName = "magni";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "beatae";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "magni";
                                                                                    minComparisonValue = "minus";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "neque";
                                                                                    metricName = "iusto";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "odit";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                        add("non"),
                                                                                        add("nihil"),
                                                                                    }};
                                                                                    maxComparisonValue = "laborum";
                                                                                    minComparisonValue = "recusandae";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "exercitationem";
                                                                                    maxComparisonValue = "iste";
                                                                                    metricName = "perferendis";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "omnis";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                        add("omnis"),
                                                                                        add("minus"),
                                                                                    }};
                                                                                    maxComparisonValue = "nostrum";
                                                                                    minComparisonValue = "non";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "repellat";
                                                                                    maxComparisonValue = "quo";
                                                                                    metricName = "dolorum";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("aliquid"),
                                                                                        add("mollitia"),
                                                                                        add("non"),
                                                                                    }};
                                                                                    maxComparisonValue = "magni";
                                                                                    minComparisonValue = "recusandae";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consequatur";
                                                                                    maxComparisonValue = "dolores";
                                                                                    metricName = "hic";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "explicabo";
                                                                                    minComparisonValue = "necessitatibus";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "qui";
                                                                                    maxComparisonValue = "in";
                                                                                    metricName = "odit";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "similique";
                                                                                    expressions = new String[]() {{
                                                                                        add("id"),
                                                                                        add("laboriosam"),
                                                                                    }};
                                                                                    maxComparisonValue = "quam";
                                                                                    minComparisonValue = "maiores";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "iusto";
                                                                                    maxComparisonValue = "aperiam";
                                                                                    metricName = "repellendus";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("quia"),
                                                                                        add("quaerat"),
                                                                                    }};
                                                                                    maxComparisonValue = "ea";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "recusandae";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "qui";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "voluptatem";
                                                                            expressions = new String[]() {{
                                                                                add("fugiat"),
                                                                                add("nesciunt"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "qui";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "eligendi";
                                                                            maxComparisonValue = "velit";
                                                                            metricName = "fuga";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatem";
                                                                            expressions = new String[]() {{
                                                                                add("quae"),
                                                                            }};
                                                                            maxComparisonValue = "placeat";
                                                                            minComparisonValue = "vitae";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "officiis";
                                                                            maxComparisonValue = "commodi";
                                                                            metricName = "sed";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "cum";
                                                                            expressions = new String[]() {{
                                                                                add("aut"),
                                                                            }};
                                                                            maxComparisonValue = "eaque";
                                                                            minComparisonValue = "facilis";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "et";
                                                                            metricName = "quam";
                                                                            operator = "BETWEEN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "amet";
                                                                            expressions = new String[]() {{
                                                                                add("in"),
                                                                            }};
                                                                            maxComparisonValue = "consectetur";
                                                                            minComparisonValue = "minima";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "consequatur";
                                                                            metricName = "eum";
                                                                            operator = "EQUAL";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "dolores";
                                                                            expressions = new String[]() {{
                                                                                add("ullam"),
                                                                            }};
                                                                            maxComparisonValue = "architecto";
                                                                            minComparisonValue = "architecto";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "consequatur";
                                                                            maxComparisonValue = "veniam";
                                                                            metricName = "hic";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatibus";
                                                                            expressions = new String[]() {{
                                                                                add("consectetur"),
                                                                            }};
                                                                            maxComparisonValue = "modi";
                                                                            minComparisonValue = "eos";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "itaque";
                                                                            maxComparisonValue = "ipsum";
                                                                            metricName = "natus";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "eius";
                                                                            expressions = new String[]() {{
                                                                                add("amet"),
                                                                                add("blanditiis"),
                                                                                add("unde"),
                                                                            }};
                                                                            maxComparisonValue = "nihil";
                                                                            minComparisonValue = "asperiores";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "hic";
                                                                            maxComparisonValue = "quo";
                                                                            metricName = "est";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "possimus";
                                                                            expressions = new String[]() {{
                                                                                add("laborum"),
                                                                                add("voluptas"),
                                                                                add("modi"),
                                                                            }};
                                                                            maxComparisonValue = "atque";
                                                                            minComparisonValue = "soluta";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "qui";
                                                                            maxComparisonValue = "nihil";
                                                                            metricName = "quas";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("sit"),
                                                                                        add("saepe"),
                                                                                        add("est"),
                                                                                    }};
                                                                                    maxComparisonValue = "odio";
                                                                                    minComparisonValue = "delectus";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "et";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "asperiores";
                                                                                    expressions = new String[]() {{
                                                                                        add("hic"),
                                                                                        add("doloribus"),
                                                                                    }};
                                                                                    maxComparisonValue = "corrupti";
                                                                                    minComparisonValue = "nemo";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "neque";
                                                                                    maxComparisonValue = "autem";
                                                                                    metricName = "saepe";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "autem";
                                                                                    expressions = new String[]() {{
                                                                                        add("consequuntur"),
                                                                                    }};
                                                                                    maxComparisonValue = "autem";
                                                                                    minComparisonValue = "vitae";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "non";
                                                                                    maxComparisonValue = "aut";
                                                                                    metricName = "autem";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quaerat";
                                                                                    expressions = new String[]() {{
                                                                                        add("harum"),
                                                                                        add("laudantium"),
                                                                                        add("odio"),
                                                                                    }};
                                                                                    maxComparisonValue = "deserunt";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "omnis";
                                                                                    maxComparisonValue = "veritatis";
                                                                                    metricName = "minus";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "doloribus";
                                                                                    expressions = new String[]() {{
                                                                                        add("cupiditate"),
                                                                                        add("similique"),
                                                                                    }};
                                                                                    maxComparisonValue = "omnis";
                                                                                    minComparisonValue = "voluptatem";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "maiores";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "expedita";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("itaque"),
                                                                                        add("provident"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "omnis";
                                                                                    maxComparisonValue = "corporis";
                                                                                    metricName = "quasi";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "iure";
                                                                            expressions = new String[]() {{
                                                                                add("occaecati"),
                                                                                add("aut"),
                                                                                add("repudiandae"),
                                                                            }};
                                                                            maxComparisonValue = "voluptas";
                                                                            minComparisonValue = "eligendi";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dolorem";
                                                                            maxComparisonValue = "similique";
                                                                            metricName = "ad";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "aut";
                                                                            expressions = new String[]() {{
                                                                                add("dolores"),
                                                                                add("et"),
                                                                                add("quos"),
                                                                            }};
                                                                            maxComparisonValue = "est";
                                                                            minComparisonValue = "est";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "explicabo";
                                                                            maxComparisonValue = "quis";
                                                                            metricName = "eius";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "debitis";
                                                                            expressions = new String[]() {{
                                                                                add("mollitia"),
                                                                            }};
                                                                            maxComparisonValue = "officiis";
                                                                            minComparisonValue = "repellendus";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "repellat";
                                                                            maxComparisonValue = "eveniet";
                                                                            metricName = "ad";
                                                                            operator = "EQUAL";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "nostrum";
                                                                            expressions = new String[]() {{
                                                                                add("nemo"),
                                                                            }};
                                                                            maxComparisonValue = "recusandae";
                                                                            minComparisonValue = "nostrum";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "aut";
                                                                            maxComparisonValue = "quo";
                                                                            metricName = "minus";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "magni";
                                                                            expressions = new String[]() {{
                                                                                add("ut"),
                                                                                add("ut"),
                                                                                add("distinctio"),
                                                                            }};
                                                                            maxComparisonValue = "dolor";
                                                                            minComparisonValue = "nemo";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "reiciendis";
                                                                            maxComparisonValue = "in";
                                                                            metricName = "voluptatem";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "sit";
                                                                                    expressions = new String[]() {{
                                                                                        add("aperiam"),
                                                                                    }};
                                                                                    maxComparisonValue = "nulla";
                                                                                    minComparisonValue = "odit";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ea";
                                                                                    maxComparisonValue = "mollitia";
                                                                                    metricName = "eveniet";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "vel";
                                                                                    expressions = new String[]() {{
                                                                                        add("nesciunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "tenetur";
                                                                                    minComparisonValue = "fugiat";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolor";
                                                                                    maxComparisonValue = "enim";
                                                                                    metricName = "animi";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("ea"),
                                                                                        add("omnis"),
                                                                                    }};
                                                                                    maxComparisonValue = "pariatur";
                                                                                    minComparisonValue = "id";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "esse";
                                                                                    maxComparisonValue = "in";
                                                                                    metricName = "amet";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "sapiente";
                                                                                    expressions = new String[]() {{
                                                                                        add("autem"),
                                                                                        add("placeat"),
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "minus";
                                                                                    minComparisonValue = "praesentium";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptas";
                                                                                    maxComparisonValue = "consequatur";
                                                                                    metricName = "aut";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "minus";
                                                                                    expressions = new String[]() {{
                                                                                        add("enim"),
                                                                                        add("eaque"),
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "maxime";
                                                                                    minComparisonValue = "libero";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ea";
                                                                                    maxComparisonValue = "porro";
                                                                                    metricName = "labore";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("hic"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "cum";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consequatur";
                                                                                    maxComparisonValue = "molestiae";
                                                                                    metricName = "laudantium";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "porro";
                                                                            expressions = new String[]() {{
                                                                                add("ipsa"),
                                                                            }};
                                                                            maxComparisonValue = "ipsa";
                                                                            minComparisonValue = "rerum";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rem";
                                                                            maxComparisonValue = "dolore";
                                                                            metricName = "doloribus";
                                                                            operator = "EQUAL";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "eos";
                                                                            expressions = new String[]() {{
                                                                                add("vitae"),
                                                                                add("sit"),
                                                                                add("asperiores"),
                                                                            }};
                                                                            maxComparisonValue = "earum";
                                                                            minComparisonValue = "distinctio";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "alias";
                                                                            metricName = "in";
                                                                            operator = "EQUAL";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "cum";
                                                                            expressions = new String[]() {{
                                                                                add("odit"),
                                                                            }};
                                                                            maxComparisonValue = "alias";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ratione";
                                                                            maxComparisonValue = "dolore";
                                                                            metricName = "est";
                                                                            operator = "BETWEEN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "odit";
                                                                            expressions = new String[]() {{
                                                                                add("voluptate"),
                                                                                add("ut"),
                                                                                add("inventore"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "enim";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "hic";
                                                                            maxComparisonValue = "cumque";
                                                                            metricName = "quia";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "non";
                                                                                    expressions = new String[]() {{
                                                                                        add("mollitia"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolorum";
                                                                                    minComparisonValue = "at";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "voluptate";
                                                                                    metricName = "excepturi";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quo";
                                                                                    expressions = new String[]() {{
                                                                                        add("maxime"),
                                                                                    }};
                                                                                    maxComparisonValue = "ratione";
                                                                                    minComparisonValue = "voluptatem";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eum";
                                                                                    maxComparisonValue = "sed";
                                                                                    metricName = "expedita";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ratione";
                                                                                    expressions = new String[]() {{
                                                                                        add("ipsam"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolor";
                                                                                    minComparisonValue = "facilis";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "doloremque";
                                                                                    metricName = "minus";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "harum";
                                                                                    expressions = new String[]() {{
                                                                                        add("natus"),
                                                                                        add("quibusdam"),
                                                                                    }};
                                                                                    maxComparisonValue = "ullam";
                                                                                    minComparisonValue = "veniam";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "error";
                                                                                    maxComparisonValue = "omnis";
                                                                                    metricName = "aliquid";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("saepe"),
                                                                                        add("sit"),
                                                                                        add("esse"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptate";
                                                                                    minComparisonValue = "tenetur";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "animi";
                                                                                    maxComparisonValue = "facere";
                                                                                    metricName = "consequatur";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("incidunt"),
                                                                                        add("est"),
                                                                                        add("a"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "sit";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "pariatur";
                                                                                    maxComparisonValue = "sunt";
                                                                                    metricName = "nobis";
                                                                                    operator = "EQUAL";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ex";
                                                                                    expressions = new String[]() {{
                                                                                        add("eos"),
                                                                                        add("quas"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "temporibus";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "tempora";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "deleniti";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ab";
                                                                                    expressions = new String[]() {{
                                                                                        add("exercitationem"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptas";
                                                                                    minComparisonValue = "neque";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sit";
                                                                                    maxComparisonValue = "quibusdam";
                                                                                    metricName = "dolore";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "qui";
                                                                                    expressions = new String[]() {{
                                                                                        add("ad"),
                                                                                        add("minus"),
                                                                                    }};
                                                                                    maxComparisonValue = "sit";
                                                                                    minComparisonValue = "est";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quisquam";
                                                                                    maxComparisonValue = "ipsum";
                                                                                    metricName = "dolor";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "sed";
                                                                                    expressions = new String[]() {{
                                                                                        add("quae"),
                                                                                        add("id"),
                                                                                        add("eaque"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aliquid";
                                                                                    maxComparisonValue = "voluptate";
                                                                                    metricName = "beatae";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "illo";
                                                                                    expressions = new String[]() {{
                                                                                        add("quis"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "ab";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eveniet";
                                                                                    maxComparisonValue = "id";
                                                                                    metricName = "placeat";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "nemo";
                                                                            expressions = new String[]() {{
                                                                                add("animi"),
                                                                            }};
                                                                            maxComparisonValue = "earum";
                                                                            minComparisonValue = "neque";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "quam";
                                                                            metricName = "iste";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "enim";
                                                                            expressions = new String[]() {{
                                                                                add("cupiditate"),
                                                                            }};
                                                                            maxComparisonValue = "aperiam";
                                                                            minComparisonValue = "id";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "explicabo";
                                                                            maxComparisonValue = "cumque";
                                                                            metricName = "sint";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "placeat";
                                                                            expressions = new String[]() {{
                                                                                add("minima"),
                                                                                add("exercitationem"),
                                                                                add("est"),
                                                                            }};
                                                                            maxComparisonValue = "unde";
                                                                            minComparisonValue = "modi";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "omnis";
                                                                            maxComparisonValue = "explicabo";
                                                                            metricName = "voluptatum";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "velit";
                                                                            expressions = new String[]() {{
                                                                                add("maxime"),
                                                                                add("omnis"),
                                                                            }};
                                                                            maxComparisonValue = "dolor";
                                                                            minComparisonValue = "non";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dolorem";
                                                                            maxComparisonValue = "minima";
                                                                            metricName = "sint";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "iste";
                                                                            expressions = new String[]() {{
                                                                                add("adipisci"),
                                                                                add("impedit"),
                                                                                add("tempora"),
                                                                            }};
                                                                            maxComparisonValue = "aut";
                                                                            minComparisonValue = "omnis";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "animi";
                                                                            maxComparisonValue = "cum";
                                                                            metricName = "occaecati";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "distinctio";
                                                                            expressions = new String[]() {{
                                                                                add("non"),
                                                                                add("accusantium"),
                                                                            }};
                                                                            maxComparisonValue = "ut";
                                                                            minComparisonValue = "consequatur";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "animi";
                                                                            maxComparisonValue = "exercitationem";
                                                                            metricName = "quia";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "et";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "ut";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quia";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptates"),
                                                                                        add("consequatur"),
                                                                                    }};
                                                                                    maxComparisonValue = "explicabo";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ipsum";
                                                                                    maxComparisonValue = "autem";
                                                                                    metricName = "perferendis";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ipsa";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "eveniet";
                                                                                    minComparisonValue = "nam";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "omnis";
                                                                                    maxComparisonValue = "mollitia";
                                                                                    metricName = "velit";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "non";
                                                                                    expressions = new String[]() {{
                                                                                        add("tempora"),
                                                                                        add("aliquid"),
                                                                                        add("molestiae"),
                                                                                    }};
                                                                                    maxComparisonValue = "fugit";
                                                                                    minComparisonValue = "quam";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "a";
                                                                                    maxComparisonValue = "quo";
                                                                                    metricName = "delectus";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "cupiditate";
                                                                                    expressions = new String[]() {{
                                                                                        add("praesentium"),
                                                                                        add("excepturi"),
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "architecto";
                                                                                    minComparisonValue = "omnis";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "modi";
                                                                                    metricName = "nisi";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("id"),
                                                                                    }};
                                                                                    maxComparisonValue = "repellat";
                                                                                    minComparisonValue = "repellendus";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aspernatur";
                                                                                    maxComparisonValue = "ad";
                                                                                    metricName = "velit";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "enim";
                                                                                    expressions = new String[]() {{
                                                                                        add("non"),
                                                                                        add("nam"),
                                                                                    }};
                                                                                    maxComparisonValue = "in";
                                                                                    minComparisonValue = "eum";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "odio";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "odio";
                                                                                    expressions = new String[]() {{
                                                                                        add("eligendi"),
                                                                                    }};
                                                                                    maxComparisonValue = "animi";
                                                                                    minComparisonValue = "est";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ea";
                                                                                    maxComparisonValue = "voluptas";
                                                                                    metricName = "necessitatibus";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ullam";
                                                                                    expressions = new String[]() {{
                                                                                        add("debitis"),
                                                                                        add("nihil"),
                                                                                        add("magni"),
                                                                                    }};
                                                                                    maxComparisonValue = "vitae";
                                                                                    minComparisonValue = "excepturi";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "totam";
                                                                                    maxComparisonValue = "blanditiis";
                                                                                    metricName = "voluptatibus";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "asperiores";
                                                                                    expressions = new String[]() {{
                                                                                        add("consectetur"),
                                                                                    }};
                                                                                    maxComparisonValue = "sequi";
                                                                                    minComparisonValue = "reprehenderit";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "libero";
                                                                                    maxComparisonValue = "enim";
                                                                                    metricName = "sint";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quo";
                                                                                    expressions = new String[]() {{
                                                                                        add("illo"),
                                                                                        add("enim"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "aut";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "mollitia";
                                                                                    maxComparisonValue = "praesentium";
                                                                                    metricName = "inventore";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "consequatur";
                                                                                    expressions = new String[]() {{
                                                                                        add("vel"),
                                                                                        add("at"),
                                                                                        add("cumque"),
                                                                                    }};
                                                                                    maxComparisonValue = "occaecati";
                                                                                    minComparisonValue = "iusto";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "deserunt";
                                                                                    maxComparisonValue = "maiores";
                                                                                    metricName = "error";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptates";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                    }};
                                                                                    maxComparisonValue = "vel";
                                                                                    minComparisonValue = "optio";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "a";
                                                                                    maxComparisonValue = "rerum";
                                                                                    metricName = "repudiandae";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "dignissimos";
                                                                                    expressions = new String[]() {{
                                                                                        add("alias"),
                                                                                        add("vitae"),
                                                                                        add("ipsum"),
                                                                                    }};
                                                                                    maxComparisonValue = "enim";
                                                                                    minComparisonValue = "magni";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ea";
                                                                                    maxComparisonValue = "dolor";
                                                                                    metricName = "consequatur";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "explicabo";
                                                                            expressions = new String[]() {{
                                                                                add("ducimus"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "explicabo";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "libero";
                                                                            metricName = "consequatur";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "ut";
                                                                            expressions = new String[]() {{
                                                                                add("sed"),
                                                                            }};
                                                                            maxComparisonValue = "sint";
                                                                            minComparisonValue = "est";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "omnis";
                                                                            maxComparisonValue = "reiciendis";
                                                                            metricName = "ipsam";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatum";
                                                                            expressions = new String[]() {{
                                                                                add("rem"),
                                                                                add("autem"),
                                                                                add("enim"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "numquam";
                                                                            maxComparisonValue = "et";
                                                                            metricName = "officiis";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "aliquid";
                                                                            expressions = new String[]() {{
                                                                                add("asperiores"),
                                                                                add("tempora"),
                                                                            }};
                                                                            maxComparisonValue = "voluptate";
                                                                            minComparisonValue = "est";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "mollitia";
                                                                            maxComparisonValue = "aut";
                                                                            metricName = "recusandae";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "totam";
                                                                                    expressions = new String[]() {{
                                                                                        add("veritatis"),
                                                                                    }};
                                                                                    maxComparisonValue = "fuga";
                                                                                    minComparisonValue = "atque";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consequatur";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "numquam";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "fugit";
                                                                                    expressions = new String[]() {{
                                                                                        add("et"),
                                                                                        add("autem"),
                                                                                        add("quod"),
                                                                                    }};
                                                                                    maxComparisonValue = "ut";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quibusdam";
                                                                                    maxComparisonValue = "harum";
                                                                                    metricName = "repudiandae";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "rerum";
                                                                                    expressions = new String[]() {{
                                                                                        add("libero"),
                                                                                    }};
                                                                                    maxComparisonValue = "cumque";
                                                                                    minComparisonValue = "accusamus";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "inventore";
                                                                                    metricName = "quibusdam";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "animi";
                                                                            expressions = new String[]() {{
                                                                                add("labore"),
                                                                                add("est"),
                                                                                add("quod"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "sit";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "omnis";
                                                                            maxComparisonValue = "reprehenderit";
                                                                            metricName = "quod";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "ipsum";
                                                                            expressions = new String[]() {{
                                                                                add("sunt"),
                                                                                add("incidunt"),
                                                                                add("sed"),
                                                                            }};
                                                                            maxComparisonValue = "repellendus";
                                                                            minComparisonValue = "error";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "non";
                                                                            maxComparisonValue = "nihil";
                                                                            metricName = "ipsa";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "vitae";
                                                                            expressions = new String[]() {{
                                                                                add("assumenda"),
                                                                                add("corrupti"),
                                                                            }};
                                                                            maxComparisonValue = "ad";
                                                                            minComparisonValue = "eum";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "optio";
                                                                            maxComparisonValue = "et";
                                                                            metricName = "consequatur";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "eius";
                                                                            expressions = new String[]() {{
                                                                                add("nisi"),
                                                                                add("sit"),
                                                                                add("est"),
                                                                            }};
                                                                            maxComparisonValue = "rerum";
                                                                            minComparisonValue = "quisquam";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "itaque";
                                                                            maxComparisonValue = "reiciendis";
                                                                            metricName = "expedita";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "modi";
                                                                            expressions = new String[]() {{
                                                                                add("suscipit"),
                                                                                add("tempora"),
                                                                            }};
                                                                            maxComparisonValue = "illum";
                                                                            minComparisonValue = "quae";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "consectetur";
                                                                            maxComparisonValue = "voluptatibus";
                                                                            metricName = "doloremque";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "explicabo";
                                                                            expressions = new String[]() {{
                                                                                add("rem"),
                                                                                add("explicabo"),
                                                                                add("veritatis"),
                                                                            }};
                                                                            maxComparisonValue = "ducimus";
                                                                            minComparisonValue = "ut";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "inventore";
                                                                            maxComparisonValue = "voluptatem";
                                                                            metricName = "voluptates";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("impedit"),
                                                                                    }};
                                                                                    maxComparisonValue = "molestiae";
                                                                                    minComparisonValue = "aut";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consectetur";
                                                                                    maxComparisonValue = "repellendus";
                                                                                    metricName = "molestias";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "repellat";
                                                                                    expressions = new String[]() {{
                                                                                        add("facilis"),
                                                                                        add("id"),
                                                                                        add("reprehenderit"),
                                                                                    }};
                                                                                    maxComparisonValue = "sit";
                                                                                    minComparisonValue = "at";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "doloribus";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "eius";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quos";
                                                                                    expressions = new String[]() {{
                                                                                        add("iusto"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "praesentium";
                                                                                    minComparisonValue = "consectetur";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "itaque";
                                                                                    maxComparisonValue = "corrupti";
                                                                                    metricName = "voluptatem";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("laudantium"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "eaque";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "cum";
                                                                                    maxComparisonValue = "vel";
                                                                                    metricName = "sunt";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "dolores";
                                                                                    expressions = new String[]() {{
                                                                                        add("perferendis"),
                                                                                    }};
                                                                                    maxComparisonValue = "quas";
                                                                                    minComparisonValue = "aut";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "minima";
                                                                                    maxComparisonValue = "pariatur";
                                                                                    metricName = "nesciunt";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "accusantium";
                                                                            expressions = new String[]() {{
                                                                                add("rem"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "ipsa";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "odit";
                                                                            maxComparisonValue = "repudiandae";
                                                                            metricName = "pariatur";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quas";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptas";
                                                                                    minComparisonValue = "quisquam";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptas";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "deleniti";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("soluta"),
                                                                                        add("enim"),
                                                                                    }};
                                                                                    maxComparisonValue = "commodi";
                                                                                    minComparisonValue = "quia";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "placeat";
                                                                                    maxComparisonValue = "rem";
                                                                                    metricName = "laudantium";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "minima";
                                                                                    expressions = new String[]() {{
                                                                                        add("sit"),
                                                                                        add("dolorem"),
                                                                                    }};
                                                                                    maxComparisonValue = "earum";
                                                                                    minComparisonValue = "fugiat";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "molestias";
                                                                                    maxComparisonValue = "asperiores";
                                                                                    metricName = "suscipit";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "magnam";
                                                                                    expressions = new String[]() {{
                                                                                        add("corporis"),
                                                                                    }};
                                                                                    maxComparisonValue = "accusamus";
                                                                                    minComparisonValue = "fugit";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "vel";
                                                                                    maxComparisonValue = "veniam";
                                                                                    metricName = "quidem";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "consequatur";
                                                                                    expressions = new String[]() {{
                                                                                        add("ullam"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolor";
                                                                                    minComparisonValue = "dolor";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "in";
                                                                                    maxComparisonValue = "enim";
                                                                                    metricName = "iusto";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "voluptate";
                                                                                    expressions = new String[]() {{
                                                                                        add("rerum"),
                                                                                        add("reiciendis"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "unde";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ratione";
                                                                                    maxComparisonValue = "autem";
                                                                                    metricName = "a";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "iure";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                        add("temporibus"),
                                                                                    }};
                                                                                    maxComparisonValue = "consequatur";
                                                                                    minComparisonValue = "non";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "inventore";
                                                                                    maxComparisonValue = "reprehenderit";
                                                                                    metricName = "quos";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "voluptas";
                                                                            expressions = new String[]() {{
                                                                                add("nesciunt"),
                                                                                add("nihil"),
                                                                            }};
                                                                            maxComparisonValue = "aspernatur";
                                                                            minComparisonValue = "hic";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "libero";
                                                                            maxComparisonValue = "accusantium";
                                                                            metricName = "facere";
                                                                            operator = "BETWEEN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "temporibus";
                                                                            expressions = new String[]() {{
                                                                                add("rem"),
                                                                                add("aut"),
                                                                                add("voluptate"),
                                                                            }};
                                                                            maxComparisonValue = "a";
                                                                            minComparisonValue = "consequatur";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "assumenda";
                                                                            maxComparisonValue = "rerum";
                                                                            metricName = "non";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "iure";
                                                                            expressions = new String[]() {{
                                                                                add("quia"),
                                                                                add("molestiae"),
                                                                                add("dolor"),
                                                                            }};
                                                                            maxComparisonValue = "nostrum";
                                                                            minComparisonValue = "aut";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "neque";
                                                                            maxComparisonValue = "pariatur";
                                                                            metricName = "enim";
                                                                            operator = "EQUAL";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "magnam";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "et";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("praesentium"),
                                                                                        add("labore"),
                                                                                        add("accusamus"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "alias";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aperiam";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "dolorum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "laborum";
                                                                                    expressions = new String[]() {{
                                                                                        add("delectus"),
                                                                                    }};
                                                                                    maxComparisonValue = "tenetur";
                                                                                    minComparisonValue = "expedita";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "sed";
                                                                                    metricName = "qui";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aliquid";
                                                                                    expressions = new String[]() {{
                                                                                        add("nihil"),
                                                                                        add("consequatur"),
                                                                                        add("quae"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "quae";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "corrupti";
                                                                                    metricName = "ipsum";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "eaque";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolore"),
                                                                                    }};
                                                                                    maxComparisonValue = "sapiente";
                                                                                    minComparisonValue = "eum";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "incidunt";
                                                                                    maxComparisonValue = "neque";
                                                                                    metricName = "quo";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "eveniet";
                                                                                    expressions = new String[]() {{
                                                                                        add("hic"),
                                                                                        add("porro"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "minima";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "maiores";
                                                                                    maxComparisonValue = "rem";
                                                                                    metricName = "aperiam";
                                                                                    operator = "EQUAL";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ea";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptas"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "debitis";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "at";
                                                                                    maxComparisonValue = "vero";
                                                                                    metricName = "quis";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "vitae";
                                                                                    expressions = new String[]() {{
                                                                                        add("fugit"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "consequuntur";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "magni";
                                                                                    maxComparisonValue = "ipsum";
                                                                                    metricName = "voluptas";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "assumenda";
                                                                                    expressions = new String[]() {{
                                                                                        add("sapiente"),
                                                                                    }};
                                                                                    maxComparisonValue = "doloribus";
                                                                                    minComparisonValue = "accusantium";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "rem";
                                                                                    maxComparisonValue = "corporis";
                                                                                    metricName = "pariatur";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "iste";
                                                                                    expressions = new String[]() {{
                                                                                        add("fuga"),
                                                                                        add("corporis"),
                                                                                        add("quo"),
                                                                                    }};
                                                                                    maxComparisonValue = "laborum";
                                                                                    minComparisonValue = "ex";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "accusantium";
                                                                                    metricName = "et";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "iusto";
                                                                            expressions = new String[]() {{
                                                                                add("voluptates"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "tenetur";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rerum";
                                                                            maxComparisonValue = "accusamus";
                                                                            metricName = "aliquam";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "ab";
                                                                            expressions = new String[]() {{
                                                                                add("commodi"),
                                                                                add("fugiat"),
                                                                                add("quis"),
                                                                            }};
                                                                            maxComparisonValue = "saepe";
                                                                            minComparisonValue = "illo";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "qui";
                                                                            maxComparisonValue = "quia";
                                                                            metricName = "aperiam";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "aliquam";
                                                                            expressions = new String[]() {{
                                                                                add("non"),
                                                                                add("earum"),
                                                                                add("voluptatem"),
                                                                            }};
                                                                            maxComparisonValue = "impedit";
                                                                            minComparisonValue = "in";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "sint";
                                                                            metricName = "ab";
                                                                            operator = "LESS_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "neque";
                                                                            expressions = new String[]() {{
                                                                                add("est"),
                                                                                add("non"),
                                                                            }};
                                                                            maxComparisonValue = "sit";
                                                                            minComparisonValue = "est";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "in";
                                                                            maxComparisonValue = "mollitia";
                                                                            metricName = "minima";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "dicta";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                        add("expedita"),
                                                                                    }};
                                                                                    maxComparisonValue = "assumenda";
                                                                                    minComparisonValue = "autem";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "labore";
                                                                                    maxComparisonValue = "amet";
                                                                                    metricName = "in";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "omnis";
                                                                                    expressions = new String[]() {{
                                                                                        add("possimus"),
                                                                                        add("quo"),
                                                                                        add("odio"),
                                                                                    }};
                                                                                    maxComparisonValue = "eos";
                                                                                    minComparisonValue = "enim";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "exercitationem";
                                                                                    maxComparisonValue = "debitis";
                                                                                    metricName = "ut";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "eum";
                                                                                    expressions = new String[]() {{
                                                                                        add("illo"),
                                                                                        add("quas"),
                                                                                    }};
                                                                                    maxComparisonValue = "in";
                                                                                    minComparisonValue = "ipsum";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolorem";
                                                                                    maxComparisonValue = "quas";
                                                                                    metricName = "eum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "mollitia";
                                                                                    expressions = new String[]() {{
                                                                                        add("sit"),
                                                                                        add("et"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "praesentium";
                                                                                    minComparisonValue = "voluptates";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "deleniti";
                                                                                    metricName = "facere";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "exercitationem";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "odit";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aliquid";
                                                                                    maxComparisonValue = "repellendus";
                                                                                    metricName = "sint";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ipsam";
                                                                                    expressions = new String[]() {{
                                                                                        add("cum"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "modi";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quia";
                                                                                    maxComparisonValue = "quis";
                                                                                    metricName = "in";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "dolorem";
                                                                                    expressions = new String[]() {{
                                                                                        add("assumenda"),
                                                                                    }};
                                                                                    maxComparisonValue = "labore";
                                                                                    minComparisonValue = "id";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptates";
                                                                                    maxComparisonValue = "amet";
                                                                                    metricName = "sint";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ab";
                                                                                    expressions = new String[]() {{
                                                                                        add("facilis"),
                                                                                        add("quis"),
                                                                                        add("sunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "quis";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "temporibus";
                                                                                    maxComparisonValue = "nemo";
                                                                                    metricName = "ea";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "dolor";
                                                                                    expressions = new String[]() {{
                                                                                        add("corrupti"),
                                                                                    }};
                                                                                    maxComparisonValue = "iusto";
                                                                                    minComparisonValue = "necessitatibus";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quod";
                                                                                    maxComparisonValue = "maxime";
                                                                                    metricName = "minima";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "nostrum";
                                                                                    expressions = new String[]() {{
                                                                                        add("tenetur"),
                                                                                    }};
                                                                                    maxComparisonValue = "numquam";
                                                                                    minComparisonValue = "quam";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "fugiat";
                                                                                    metricName = "cumque";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "ab";
                                                                            expressions = new String[]() {{
                                                                                add("delectus"),
                                                                            }};
                                                                            maxComparisonValue = "recusandae";
                                                                            minComparisonValue = "voluptate";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "autem";
                                                                            maxComparisonValue = "sed";
                                                                            metricName = "voluptas";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "vel";
                                                                                    expressions = new String[]() {{
                                                                                        add("ipsum"),
                                                                                    }};
                                                                                    maxComparisonValue = "in";
                                                                                    minComparisonValue = "dolorem";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sint";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "qui";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "adipisci";
                                                                                    expressions = new String[]() {{
                                                                                        add("accusantium"),
                                                                                        add("exercitationem"),
                                                                                        add("doloremque"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "perspiciatis";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "inventore";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "soluta";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolor"),
                                                                                    }};
                                                                                    maxComparisonValue = "nobis";
                                                                                    minComparisonValue = "ipsam";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nihil";
                                                                                    maxComparisonValue = "harum";
                                                                                    metricName = "quisquam";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "vel";
                                                                            expressions = new String[]() {{
                                                                                add("nulla"),
                                                                            }};
                                                                            maxComparisonValue = "voluptatem";
                                                                            minComparisonValue = "dolor";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ea";
                                                                            maxComparisonValue = "iure";
                                                                            metricName = "ratione";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "officia";
                                                                            expressions = new String[]() {{
                                                                                add("molestiae"),
                                                                                add("voluptatem"),
                                                                            }};
                                                                            maxComparisonValue = "impedit";
                                                                            minComparisonValue = "debitis";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rerum";
                                                                            maxComparisonValue = "ut";
                                                                            metricName = "corrupti";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "perspiciatis";
                                                                            expressions = new String[]() {{
                                                                                add("voluptatem"),
                                                                            }};
                                                                            maxComparisonValue = "quidem";
                                                                            minComparisonValue = "rerum";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "facilis";
                                                                            maxComparisonValue = "cum";
                                                                            metricName = "occaecati";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "nostrum";
                                                                            expressions = new String[]() {{
                                                                                add("eos"),
                                                                            }};
                                                                            maxComparisonValue = "sit";
                                                                            minComparisonValue = "et";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "voluptatum";
                                                                            metricName = "dolor";
                                                                            operator = "BETWEEN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "est";
                                                                            expressions = new String[]() {{
                                                                                add("iure"),
                                                                                add("provident"),
                                                                            }};
                                                                            maxComparisonValue = "eum";
                                                                            minComparisonValue = "repellat";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "repellendus";
                                                                            maxComparisonValue = "cupiditate";
                                                                            metricName = "natus";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "sit";
                                                                            expressions = new String[]() {{
                                                                                add("est"),
                                                                                add("at"),
                                                                            }};
                                                                            maxComparisonValue = "ut";
                                                                            minComparisonValue = "incidunt";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "est";
                                                                            maxComparisonValue = "necessitatibus";
                                                                            metricName = "ut";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("sed"),
                                                                                        add("ducimus"),
                                                                                    }};
                                                                                    maxComparisonValue = "vel";
                                                                                    minComparisonValue = "optio";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "consequuntur";
                                                                                    metricName = "autem";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "modi";
                                                                                    expressions = new String[]() {{
                                                                                        add("repellendus"),
                                                                                        add("asperiores"),
                                                                                        add("molestiae"),
                                                                                    }};
                                                                                    maxComparisonValue = "laboriosam";
                                                                                    minComparisonValue = "reprehenderit";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quis";
                                                                                    maxComparisonValue = "facilis";
                                                                                    metricName = "mollitia";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ea";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                        add("sit"),
                                                                                        add("fuga"),
                                                                                    }};
                                                                                    maxComparisonValue = "eveniet";
                                                                                    minComparisonValue = "culpa";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "repudiandae";
                                                                                    maxComparisonValue = "aspernatur";
                                                                                    metricName = "consequuntur";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("neque"),
                                                                                        add("quia"),
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "dolores";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quisquam";
                                                                                    maxComparisonValue = "iure";
                                                                                    metricName = "hic";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("ipsa"),
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "quisquam";
                                                                                    minComparisonValue = "quibusdam";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "corporis";
                                                                                    maxComparisonValue = "laboriosam";
                                                                                    metricName = "hic";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "beatae";
                                                                                    expressions = new String[]() {{
                                                                                        add("sunt"),
                                                                                        add("sequi"),
                                                                                        add("corrupti"),
                                                                                    }};
                                                                                    maxComparisonValue = "porro";
                                                                                    minComparisonValue = "at";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "id";
                                                                                    maxComparisonValue = "consequatur";
                                                                                    metricName = "quis";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "neque";
                                                                                    expressions = new String[]() {{
                                                                                        add("ab"),
                                                                                    }};
                                                                                    maxComparisonValue = "earum";
                                                                                    minComparisonValue = "omnis";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aliquid";
                                                                                    maxComparisonValue = "quia";
                                                                                    metricName = "animi";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "maiores";
                                                                                    expressions = new String[]() {{
                                                                                        add("autem"),
                                                                                        add("deleniti"),
                                                                                        add("quam"),
                                                                                    }};
                                                                                    maxComparisonValue = "amet";
                                                                                    minComparisonValue = "consequuntur";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "blanditiis";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("in"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "omnis";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "omnis";
                                                                                    maxComparisonValue = "quidem";
                                                                                    metricName = "id";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "rerum";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptas"),
                                                                                        add("molestiae"),
                                                                                    }};
                                                                                    maxComparisonValue = "ut";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "sit";
                                                                                    metricName = "aspernatur";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "sunt";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptates"),
                                                                                        add("sit"),
                                                                                        add("nulla"),
                                                                                    }};
                                                                                    maxComparisonValue = "non";
                                                                                    minComparisonValue = "est";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "maxime";
                                                                                    maxComparisonValue = "eum";
                                                                                    metricName = "sapiente";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "quidem";
                                                                            expressions = new String[]() {{
                                                                                add("et"),
                                                                            }};
                                                                            maxComparisonValue = "doloribus";
                                                                            minComparisonValue = "impedit";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "impedit";
                                                                            maxComparisonValue = "voluptas";
                                                                            metricName = "eligendi";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "at";
                                                                            expressions = new String[]() {{
                                                                                add("qui"),
                                                                            }};
                                                                            maxComparisonValue = "ducimus";
                                                                            minComparisonValue = "facere";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sit";
                                                                            maxComparisonValue = "porro";
                                                                            metricName = "omnis";
                                                                            operator = "BETWEEN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "qui";
                                                                            expressions = new String[]() {{
                                                                                add("qui"),
                                                                                add("officia"),
                                                                                add("quia"),
                                                                            }};
                                                                            maxComparisonValue = "laborum";
                                                                            minComparisonValue = "recusandae";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "qui";
                                                                            metricName = "aut";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "ut";
                                                                            expressions = new String[]() {{
                                                                                add("incidunt"),
                                                                                add("amet"),
                                                                            }};
                                                                            maxComparisonValue = "voluptatem";
                                                                            minComparisonValue = "dolorum";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "maxime";
                                                                            metricName = "pariatur";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatem";
                                                                            expressions = new String[]() {{
                                                                                add("aut"),
                                                                            }};
                                                                            maxComparisonValue = "error";
                                                                            minComparisonValue = "excepturi";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quia";
                                                                            maxComparisonValue = "eveniet";
                                                                            metricName = "ut";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "inventore";
                                                                            expressions = new String[]() {{
                                                                                add("iure"),
                                                                                add("sed"),
                                                                            }};
                                                                            maxComparisonValue = "dolores";
                                                                            minComparisonValue = "rem";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "molestias";
                                                                            maxComparisonValue = "repellendus";
                                                                            metricName = "doloremque";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "eaque";
                                                                            expressions = new String[]() {{
                                                                                add("dolorem"),
                                                                                add("nulla"),
                                                                            }};
                                                                            maxComparisonValue = "nam";
                                                                            minComparisonValue = "velit";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "culpa";
                                                                            maxComparisonValue = "in";
                                                                            metricName = "qui";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "reiciendis";
                                                                                    expressions = new String[]() {{
                                                                                        add("quas"),
                                                                                        add("pariatur"),
                                                                                        add("omnis"),
                                                                                    }};
                                                                                    maxComparisonValue = "molestiae";
                                                                                    minComparisonValue = "soluta";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "omnis";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ab";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "tempore";
                                                                                    minComparisonValue = "molestiae";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "sequi";
                                                                                    metricName = "eum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "officiis";
                                                                                    expressions = new String[]() {{
                                                                                        add("delectus"),
                                                                                    }};
                                                                                    maxComparisonValue = "harum";
                                                                                    minComparisonValue = "esse";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "autem";
                                                                                    maxComparisonValue = "deserunt";
                                                                                    metricName = "ut";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "cupiditate";
                                                                                    expressions = new String[]() {{
                                                                                        add("id"),
                                                                                    }};
                                                                                    maxComparisonValue = "suscipit";
                                                                                    minComparisonValue = "dicta";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "facere";
                                                                                    maxComparisonValue = "architecto";
                                                                                    metricName = "voluptatem";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "maiores";
                                                                            expressions = new String[]() {{
                                                                                add("earum"),
                                                                                add("alias"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "ut";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quas";
                                                                            maxComparisonValue = "magni";
                                                                            metricName = "fuga";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "facere";
                                                                            expressions = new String[]() {{
                                                                                add("accusantium"),
                                                                                add("repellat"),
                                                                                add("quam"),
                                                                            }};
                                                                            maxComparisonValue = "quo";
                                                                            minComparisonValue = "vero";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "vel";
                                                                            maxComparisonValue = "exercitationem";
                                                                            metricName = "laudantium";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "qui";
                                                                            expressions = new String[]() {{
                                                                                add("modi"),
                                                                                add("occaecati"),
                                                                                add("dolor"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "ea";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sed";
                                                                            maxComparisonValue = "dolorem";
                                                                            metricName = "accusamus";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "fuga";
                                }}),
                            }};
                            viewId = "accusamus";
                        }}),
                        add(new ReportRequest() {{
                            cohortGroup = new CohortGroup() {{
                                cohorts = new openapisdk.models.shared.Cohort[]() {{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "similique";
                                            startDate = "recusandae";
                                        }};
                                        name = "error";
                                        type = "FIRST_VISIT_DATE";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "atque";
                                            startDate = "rerum";
                                        }};
                                        name = "voluptates";
                                        type = "FIRST_VISIT_DATE";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "reiciendis";
                                            startDate = "ipsam";
                                        }};
                                        name = "modi";
                                        type = "UNSPECIFIED_COHORT_TYPE";
                                    }}),
                                }};
                                lifetimeValue = false;
                            }};
                            dateRanges = new openapisdk.models.shared.DateRange[]() {{
                                add(new DateRange() {{
                                    endDate = "quisquam";
                                    startDate = "quis";
                                }}),
                            }};
                            dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "ducimus";
                                            expressions = new String[]() {{
                                                add("commodi"),
                                                add("ut"),
                                                add("molestias"),
                                            }};
                                            not = false;
                                            operator = "REGEXP";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "et";
                                            expressions = new String[]() {{
                                                add("ducimus"),
                                                add("nisi"),
                                            }};
                                            not = true;
                                            operator = "REGEXP";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "cum";
                                            expressions = new String[]() {{
                                                add("ab"),
                                                add("facere"),
                                            }};
                                            not = true;
                                            operator = "PARTIAL";
                                        }}),
                                    }};
                                    operator = "AND";
                                }}),
                            }};
                            dimensions = new openapisdk.models.shared.Dimension[]() {{
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("quidem"),
                                    }};
                                    name = "fuga";
                                }}),
                            }};
                            filtersExpression = "officiis";
                            hideTotals = true;
                            hideValueRanges = true;
                            includeEmptyRows = false;
                            metricFilterClauses = new openapisdk.models.shared.MetricFilterClause[]() {{
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "qui";
                                            metricName = "debitis";
                                            not = false;
                                            operator = "GREATER_THAN";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                            }};
                            metrics = new openapisdk.models.shared.Metric[]() {{
                                add(new Metric() {{
                                    alias = "iusto";
                                    expression = "distinctio";
                                    formattingType = "INTEGER";
                                }}),
                                add(new Metric() {{
                                    alias = "ut";
                                    expression = "expedita";
                                    formattingType = "CURRENCY";
                                }}),
                                add(new Metric() {{
                                    alias = "commodi";
                                    expression = "exercitationem";
                                    formattingType = "CURRENCY";
                                }}),
                            }};
                            orderBys = new openapisdk.models.shared.OrderBy[]() {{
                                add(new OrderBy() {{
                                    fieldName = "odit";
                                    orderType = "HISTOGRAM_BUCKET";
                                    sortOrder = "ASCENDING";
                                }}),
                                add(new OrderBy() {{
                                    fieldName = "aliquam";
                                    orderType = "SMART";
                                    sortOrder = "DESCENDING";
                                }}),
                            }};
                            pageSize = 7824488412278888279;
                            pageToken = "aut";
                            pivots = new openapisdk.models.shared.Pivot[]() {{
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "et";
                                                    expressions = new String[]() {{
                                                        add("minima"),
                                                    }};
                                                    not = false;
                                                    operator = "OPERATOR_UNSPECIFIED";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "error";
                                                    expressions = new String[]() {{
                                                        add("sed"),
                                                        add("ipsa"),
                                                        add("explicabo"),
                                                    }};
                                                    not = false;
                                                    operator = "NUMERIC_LESS_THAN";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "soluta";
                                                    expressions = new String[]() {{
                                                        add("expedita"),
                                                    }};
                                                    not = true;
                                                    operator = "OPERATOR_UNSPECIFIED";
                                                }}),
                                            }};
                                            operator = "AND";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("delectus"),
                                            }};
                                            name = "suscipit";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("dolor"),
                                                add("ipsa"),
                                            }};
                                            name = "quos";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("laborum"),
                                            }};
                                            name = "a";
                                        }}),
                                    }};
                                    maxGroupCount = 7045185900456319079;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "eos";
                                            expression = "voluptas";
                                            formattingType = "INTEGER";
                                        }}),
                                        add(new Metric() {{
                                            alias = "quia";
                                            expression = "voluptas";
                                            formattingType = "CURRENCY";
                                        }}),
                                        add(new Metric() {{
                                            alias = "omnis";
                                            expression = "dolores";
                                            formattingType = "PERCENT";
                                        }}),
                                    }};
                                    startGroup = 4835771613389976289;
                                }}),
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "et";
                                                    expressions = new String[]() {{
                                                        add("enim"),
                                                    }};
                                                    not = true;
                                                    operator = "ENDS_WITH";
                                                }}),
                                            }};
                                            operator = "AND";
                                        }}),
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "est";
                                                    expressions = new String[]() {{
                                                        add("quo"),
                                                        add("rerum"),
                                                    }};
                                                    not = false;
                                                    operator = "EXACT";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "minus";
                                                    expressions = new String[]() {{
                                                        add("vero"),
                                                        add("est"),
                                                        add("et"),
                                                    }};
                                                    not = true;
                                                    operator = "IN_LIST";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "nobis";
                                                    expressions = new String[]() {{
                                                        add("est"),
                                                    }};
                                                    not = true;
                                                    operator = "IN_LIST";
                                                }}),
                                            }};
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "ea";
                                                    expressions = new String[]() {{
                                                        add("est"),
                                                    }};
                                                    not = false;
                                                    operator = "REGEXP";
                                                }}),
                                            }};
                                            operator = "OR";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("et"),
                                                add("cumque"),
                                                add("aut"),
                                            }};
                                            name = "deserunt";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("provident"),
                                                add("aut"),
                                            }};
                                            name = "ullam";
                                        }}),
                                    }};
                                    maxGroupCount = 7948683775972459905;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "aut";
                                            expression = "possimus";
                                            formattingType = "CURRENCY";
                                        }}),
                                    }};
                                    startGroup = 4333862210572785286;
                                }}),
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "ut";
                                                    expressions = new String[]() {{
                                                        add("nam"),
                                                    }};
                                                    not = true;
                                                    operator = "NUMERIC_LESS_THAN";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "possimus";
                                                    expressions = new String[]() {{
                                                        add("deserunt"),
                                                    }};
                                                    not = false;
                                                    operator = "NUMERIC_EQUAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "tempore";
                                                    expressions = new String[]() {{
                                                        add("cum"),
                                                        add("ut"),
                                                    }};
                                                    not = true;
                                                    operator = "NUMERIC_EQUAL";
                                                }}),
                                            }};
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "hic";
                                                    expressions = new String[]() {{
                                                        add("qui"),
                                                    }};
                                                    not = false;
                                                    operator = "ENDS_WITH";
                                                }}),
                                            }};
                                            operator = "OR";
                                        }}),
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "hic";
                                                    expressions = new String[]() {{
                                                        add("iste"),
                                                        add("qui"),
                                                        add("veritatis"),
                                                    }};
                                                    not = false;
                                                    operator = "EXACT";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "iste";
                                                    expressions = new String[]() {{
                                                        add("libero"),
                                                    }};
                                                    not = true;
                                                    operator = "NUMERIC_EQUAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "a";
                                                    expressions = new String[]() {{
                                                        add("numquam"),
                                                        add("dolores"),
                                                        add("tempore"),
                                                    }};
                                                    not = false;
                                                    operator = "BEGINS_WITH";
                                                }}),
                                            }};
                                            operator = "OR";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("omnis"),
                                                add("adipisci"),
                                                add("praesentium"),
                                            }};
                                            name = "qui";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("in"),
                                                add("et"),
                                                add("est"),
                                            }};
                                            name = "eos";
                                        }}),
                                    }};
                                    maxGroupCount = 2145358840908556445;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "eum";
                                            expression = "ex";
                                            formattingType = "PERCENT";
                                        }}),
                                        add(new Metric() {{
                                            alias = "deleniti";
                                            expression = "quam";
                                            formattingType = "TIME";
                                        }}),
                                    }};
                                    startGroup = 5670313331134481218;
                                }}),
                            }};
                            samplingLevel = "DEFAULT";
                            segments = new openapisdk.models.shared.Segment[]() {{
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "molestias";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ratione";
                                                                                    expressions = new String[]() {{
                                                                                        add("in"),
                                                                                        add("corporis"),
                                                                                        add("dolores"),
                                                                                    }};
                                                                                    maxComparisonValue = "perferendis";
                                                                                    minComparisonValue = "laboriosam";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "necessitatibus";
                                                                                    maxComparisonValue = "aperiam";
                                                                                    metricName = "veniam";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "eveniet";
                                                                            expressions = new String[]() {{
                                                                                add("reiciendis"),
                                                                                add("non"),
                                                                                add("dolor"),
                                                                            }};
                                                                            maxComparisonValue = "maiores";
                                                                            minComparisonValue = "itaque";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ad";
                                                                            maxComparisonValue = "aperiam";
                                                                            metricName = "earum";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "sint";
                                                                            expressions = new String[]() {{
                                                                                add("qui"),
                                                                                add("mollitia"),
                                                                                add("neque"),
                                                                            }};
                                                                            maxComparisonValue = "autem";
                                                                            minComparisonValue = "ab";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "fugit";
                                                                            maxComparisonValue = "saepe";
                                                                            metricName = "enim";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "eum";
                                                                            expressions = new String[]() {{
                                                                                add("assumenda"),
                                                                                add("fuga"),
                                                                            }};
                                                                            maxComparisonValue = "aut";
                                                                            minComparisonValue = "corrupti";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "iusto";
                                                                            metricName = "voluptatem";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "quod";
                                                                            expressions = new String[]() {{
                                                                                add("quod"),
                                                                            }};
                                                                            maxComparisonValue = "impedit";
                                                                            minComparisonValue = "nostrum";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dicta";
                                                                            maxComparisonValue = "vero";
                                                                            metricName = "ea";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "facilis";
                                                                                    expressions = new String[]() {{
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "id";
                                                                                    minComparisonValue = "sequi";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quis";
                                                                                    maxComparisonValue = "molestiae";
                                                                                    metricName = "aliquam";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "id";
                                                                                    expressions = new String[]() {{
                                                                                        add("possimus"),
                                                                                        add("eius"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "adipisci";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "illum";
                                                                                    maxComparisonValue = "in";
                                                                                    metricName = "fuga";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ratione";
                                                                                    expressions = new String[]() {{
                                                                                        add("inventore"),
                                                                                        add("reprehenderit"),
                                                                                        add("autem"),
                                                                                    }};
                                                                                    maxComparisonValue = "tenetur";
                                                                                    minComparisonValue = "facilis";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "magnam";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "alias";
                                                                                    expressions = new String[]() {{
                                                                                        add("vel"),
                                                                                    }};
                                                                                    maxComparisonValue = "cumque";
                                                                                    minComparisonValue = "ea";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quisquam";
                                                                                    maxComparisonValue = "explicabo";
                                                                                    metricName = "id";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "consequuntur";
                                                                                    expressions = new String[]() {{
                                                                                        add("quia"),
                                                                                        add("cupiditate"),
                                                                                    }};
                                                                                    maxComparisonValue = "sed";
                                                                                    minComparisonValue = "maxime";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consequatur";
                                                                                    maxComparisonValue = "excepturi";
                                                                                    metricName = "ut";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "accusantium";
                                                                                    expressions = new String[]() {{
                                                                                        add("iusto"),
                                                                                        add("voluptatum"),
                                                                                    }};
                                                                                    maxComparisonValue = "illo";
                                                                                    minComparisonValue = "exercitationem";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nemo";
                                                                                    maxComparisonValue = "voluptate";
                                                                                    metricName = "harum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quidem";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolores"),
                                                                                        add("cum"),
                                                                                        add("dicta"),
                                                                                    }};
                                                                                    maxComparisonValue = "cupiditate";
                                                                                    minComparisonValue = "impedit";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "reprehenderit";
                                                                                    maxComparisonValue = "nesciunt";
                                                                                    metricName = "aut";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("odit"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "debitis";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "mollitia";
                                                                                    maxComparisonValue = "odio";
                                                                                    metricName = "molestiae";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "rem";
                                                                                    expressions = new String[]() {{
                                                                                        add("eum"),
                                                                                        add("at"),
                                                                                    }};
                                                                                    maxComparisonValue = "tempora";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sit";
                                                                                    maxComparisonValue = "maiores";
                                                                                    metricName = "aliquid";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "in";
                                                                                    expressions = new String[]() {{
                                                                                        add("velit"),
                                                                                        add("architecto"),
                                                                                        add("dolor"),
                                                                                    }};
                                                                                    maxComparisonValue = "tempora";
                                                                                    minComparisonValue = "velit";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "nobis";
                                                                                    metricName = "iste";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "assumenda";
                                                                            expressions = new String[]() {{
                                                                                add("quos"),
                                                                                add("vel"),
                                                                            }};
                                                                            maxComparisonValue = "aut";
                                                                            minComparisonValue = "beatae";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "rem";
                                                                            metricName = "provident";
                                                                            operator = "EQUAL";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "aut";
                                                                            expressions = new String[]() {{
                                                                                add("fugiat"),
                                                                                add("doloribus"),
                                                                            }};
                                                                            maxComparisonValue = "saepe";
                                                                            minComparisonValue = "ut";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "minus";
                                                                            maxComparisonValue = "accusantium";
                                                                            metricName = "reiciendis";
                                                                            operator = "BETWEEN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "aut";
                                                                            expressions = new String[]() {{
                                                                                add("ea"),
                                                                            }};
                                                                            maxComparisonValue = "quis";
                                                                            minComparisonValue = "culpa";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rem";
                                                                            maxComparisonValue = "non";
                                                                            metricName = "aperiam";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "quasi";
                                                                            expressions = new String[]() {{
                                                                                add("dolor"),
                                                                                add("ut"),
                                                                            }};
                                                                            maxComparisonValue = "sit";
                                                                            minComparisonValue = "ut";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "iusto";
                                                                            maxComparisonValue = "sed";
                                                                            metricName = "numquam";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "molestiae";
                                                                            expressions = new String[]() {{
                                                                                add("eaque"),
                                                                                add("voluptatum"),
                                                                                add("debitis"),
                                                                            }};
                                                                            maxComparisonValue = "perspiciatis";
                                                                            minComparisonValue = "aut";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "est";
                                                                            maxComparisonValue = "nisi";
                                                                            metricName = "voluptatibus";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("officia"),
                                                                                        add("optio"),
                                                                                        add("omnis"),
                                                                                    }};
                                                                                    maxComparisonValue = "sit";
                                                                                    minComparisonValue = "quas";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "maxime";
                                                                                    maxComparisonValue = "quibusdam";
                                                                                    metricName = "asperiores";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "beatae";
                                                                                    expressions = new String[]() {{
                                                                                        add("blanditiis"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    minComparisonValue = "ea";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "at";
                                                                                    maxComparisonValue = "fugit";
                                                                                    metricName = "dolore";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "vel";
                                                                                    expressions = new String[]() {{
                                                                                        add("atque"),
                                                                                        add("repellendus"),
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "possimus";
                                                                                    minComparisonValue = "cumque";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "tempore";
                                                                                    maxComparisonValue = "maiores";
                                                                                    metricName = "dignissimos";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "qui";
                                                                            expressions = new String[]() {{
                                                                                add("est"),
                                                                                add("consequatur"),
                                                                                add("quia"),
                                                                            }};
                                                                            maxComparisonValue = "ad";
                                                                            minComparisonValue = "nemo";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "neque";
                                                                            maxComparisonValue = "totam";
                                                                            metricName = "dolores";
                                                                            operator = "LESS_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "odio";
                                                                            expressions = new String[]() {{
                                                                                add("placeat"),
                                                                            }};
                                                                            maxComparisonValue = "nostrum";
                                                                            minComparisonValue = "repellat";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "eum";
                                                                            maxComparisonValue = "impedit";
                                                                            metricName = "est";
                                                                            operator = "LESS_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatibus";
                                                                            expressions = new String[]() {{
                                                                                add("cupiditate"),
                                                                                add("minus"),
                                                                            }};
                                                                            maxComparisonValue = "in";
                                                                            minComparisonValue = "debitis";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "animi";
                                                                            maxComparisonValue = "distinctio";
                                                                            metricName = "hic";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "labore";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "totam";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "qui";
                                                                                    expressions = new String[]() {{
                                                                                        add("explicabo"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "maiores";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "molestiae";
                                                                                    maxComparisonValue = "voluptas";
                                                                                    metricName = "officia";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "nemo";
                                                                                    expressions = new String[]() {{
                                                                                        add("quae"),
                                                                                        add("odit"),
                                                                                        add("expedita"),
                                                                                    }};
                                                                                    maxComparisonValue = "ut";
                                                                                    minComparisonValue = "occaecati";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "itaque";
                                                                                    maxComparisonValue = "harum";
                                                                                    metricName = "nulla";
                                                                                    operator = "EQUAL";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "doloribus";
                                                                                    expressions = new String[]() {{
                                                                                        add("quis"),
                                                                                        add("vel"),
                                                                                        add("magni"),
                                                                                    }};
                                                                                    maxComparisonValue = "architecto";
                                                                                    minComparisonValue = "est";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolores";
                                                                                    maxComparisonValue = "in";
                                                                                    metricName = "aperiam";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                        add("velit"),
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "totam";
                                                                                    minComparisonValue = "doloribus";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "quae";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "at";
                                                                            expressions = new String[]() {{
                                                                                add("fugit"),
                                                                                add("repellat"),
                                                                                add("non"),
                                                                            }};
                                                                            maxComparisonValue = "blanditiis";
                                                                            minComparisonValue = "omnis";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "nemo";
                                                                            maxComparisonValue = "corporis";
                                                                            metricName = "cupiditate";
                                                                            operator = "LESS_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "expedita";
                                                                            expressions = new String[]() {{
                                                                                add("quibusdam"),
                                                                                add("magni"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "earum";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "alias";
                                                                            maxComparisonValue = "culpa";
                                                                            metricName = "rerum";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "iusto";
                                                                            expressions = new String[]() {{
                                                                                add("provident"),
                                                                                add("voluptatem"),
                                                                                add("veniam"),
                                                                            }};
                                                                            maxComparisonValue = "aspernatur";
                                                                            minComparisonValue = "sed";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "numquam";
                                                                            maxComparisonValue = "explicabo";
                                                                            metricName = "et";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "hic";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "eius";
                                                                                    minComparisonValue = "voluptas";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "officiis";
                                                                                    metricName = "aliquid";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptate";
                                                                                    expressions = new String[]() {{
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "maiores";
                                                                                    minComparisonValue = "sunt";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "reprehenderit";
                                                                                    metricName = "totam";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "veritatis";
                                                                                    expressions = new String[]() {{
                                                                                        add("et"),
                                                                                        add("nisi"),
                                                                                        add("cupiditate"),
                                                                                    }};
                                                                                    maxComparisonValue = "vitae";
                                                                                    minComparisonValue = "quos";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "perspiciatis";
                                                                                    maxComparisonValue = "quo";
                                                                                    metricName = "nulla";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("sunt"),
                                                                                        add("iusto"),
                                                                                        add("nihil"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "a";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "at";
                                                                                    maxComparisonValue = "aliquam";
                                                                                    metricName = "incidunt";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "fugit";
                                                                                    expressions = new String[]() {{
                                                                                        add("quia"),
                                                                                        add("neque"),
                                                                                        add("incidunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "neque";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "tempore";
                                                                                    maxComparisonValue = "ipsum";
                                                                                    metricName = "omnis";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "labore";
                                                                                    expressions = new String[]() {{
                                                                                        add("saepe"),
                                                                                        add("libero"),
                                                                                    }};
                                                                                    maxComparisonValue = "nobis";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "qui";
                                                                                    maxComparisonValue = "hic";
                                                                                    metricName = "sed";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("nisi"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "unde";
                                                                                    minComparisonValue = "in";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "vel";
                                                                                    maxComparisonValue = "rerum";
                                                                                    metricName = "minus";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "sit";
                                                                                    expressions = new String[]() {{
                                                                                        add("excepturi"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "dolore";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptas";
                                                                                    maxComparisonValue = "quis";
                                                                                    metricName = "dolor";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "voluptatem";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                    }};
                                                                                    maxComparisonValue = "ducimus";
                                                                                    minComparisonValue = "adipisci";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "vel";
                                                                                    metricName = "dolores";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptates"),
                                                                                    }};
                                                                                    maxComparisonValue = "repellat";
                                                                                    minComparisonValue = "eligendi";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sit";
                                                                                    maxComparisonValue = "optio";
                                                                                    metricName = "atque";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("aliquid"),
                                                                                        add("quasi"),
                                                                                        add("impedit"),
                                                                                    }};
                                                                                    maxComparisonValue = "tempora";
                                                                                    minComparisonValue = "consequatur";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "non";
                                                                                    maxComparisonValue = "nesciunt";
                                                                                    metricName = "dolorem";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "perferendis";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "quas";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "harum";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "accusantium";
                                                                                    expressions = new String[]() {{
                                                                                        add("veritatis"),
                                                                                        add("qui"),
                                                                                        add("facere"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "nesciunt";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consequatur";
                                                                                    maxComparisonValue = "praesentium";
                                                                                    metricName = "temporibus";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "enim";
                                                                                    expressions = new String[]() {{
                                                                                        add("impedit"),
                                                                                        add("ratione"),
                                                                                        add("adipisci"),
                                                                                    }};
                                                                                    maxComparisonValue = "eius";
                                                                                    minComparisonValue = "quisquam";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quia";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "voluptatem";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ipsum";
                                                                                    expressions = new String[]() {{
                                                                                        add("iusto"),
                                                                                        add("quis"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "soluta";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "laborum";
                                                                                    maxComparisonValue = "quibusdam";
                                                                                    metricName = "eum";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatem";
                                                                            expressions = new String[]() {{
                                                                                add("est"),
                                                                                add("natus"),
                                                                                add("et"),
                                                                            }};
                                                                            maxComparisonValue = "ea";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ipsa";
                                                                            maxComparisonValue = "in";
                                                                            metricName = "quibusdam";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "nemo";
                                                                            expressions = new String[]() {{
                                                                                add("ut"),
                                                                                add("dicta"),
                                                                            }};
                                                                            maxComparisonValue = "inventore";
                                                                            minComparisonValue = "perspiciatis";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "esse";
                                                                            maxComparisonValue = "facere";
                                                                            metricName = "commodi";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "nisi";
                                                                            expressions = new String[]() {{
                                                                                add("dolorem"),
                                                                            }};
                                                                            maxComparisonValue = "impedit";
                                                                            minComparisonValue = "laboriosam";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "soluta";
                                                                            maxComparisonValue = "ut";
                                                                            metricName = "est";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "aut";
                                                                            expressions = new String[]() {{
                                                                                add("dolorum"),
                                                                            }};
                                                                            maxComparisonValue = "nostrum";
                                                                            minComparisonValue = "laboriosam";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quidem";
                                                                            maxComparisonValue = "doloribus";
                                                                            metricName = "at";
                                                                            operator = "EQUAL";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "quis";
                                                                            expressions = new String[]() {{
                                                                                add("tenetur"),
                                                                                add("alias"),
                                                                            }};
                                                                            maxComparisonValue = "similique";
                                                                            minComparisonValue = "iure";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "deleniti";
                                                                            metricName = "laudantium";
                                                                            operator = "BETWEEN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "debitis";
                                                                            expressions = new String[]() {{
                                                                                add("minus"),
                                                                            }};
                                                                            maxComparisonValue = "sed";
                                                                            minComparisonValue = "magnam";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "fuga";
                                                                            maxComparisonValue = "voluptatem";
                                                                            metricName = "officia";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "nobis";
                                                                            expressions = new String[]() {{
                                                                                add("aperiam"),
                                                                                add("enim"),
                                                                            }};
                                                                            maxComparisonValue = "sequi";
                                                                            minComparisonValue = "laborum";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "aliquid";
                                                                            maxComparisonValue = "maiores";
                                                                            metricName = "velit";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "doloremque";
                                }}),
                            }};
                            viewId = "cum";
                        }}),
                        add(new ReportRequest() {{
                            cohortGroup = new CohortGroup() {{
                                cohorts = new openapisdk.models.shared.Cohort[]() {{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "illum";
                                            startDate = "enim";
                                        }};
                                        name = "aspernatur";
                                        type = "UNSPECIFIED_COHORT_TYPE";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "quasi";
                                            startDate = "omnis";
                                        }};
                                        name = "sapiente";
                                        type = "UNSPECIFIED_COHORT_TYPE";
                                    }}),
                                }};
                                lifetimeValue = false;
                            }};
                            dateRanges = new openapisdk.models.shared.DateRange[]() {{
                                add(new DateRange() {{
                                    endDate = "et";
                                    startDate = "accusamus";
                                }}),
                                add(new DateRange() {{
                                    endDate = "voluptatibus";
                                    startDate = "enim";
                                }}),
                                add(new DateRange() {{
                                    endDate = "in";
                                    startDate = "reiciendis";
                                }}),
                            }};
                            dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "fugit";
                                            expressions = new String[]() {{
                                                add("fugit"),
                                            }};
                                            not = false;
                                            operator = "PARTIAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "veritatis";
                                            expressions = new String[]() {{
                                                add("possimus"),
                                                add("ipsum"),
                                            }};
                                            not = true;
                                            operator = "ENDS_WITH";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "maiores";
                                            expressions = new String[]() {{
                                                add("qui"),
                                            }};
                                            not = false;
                                            operator = "ENDS_WITH";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "aut";
                                            expressions = new String[]() {{
                                                add("et"),
                                            }};
                                            not = true;
                                            operator = "ENDS_WITH";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "natus";
                                            expressions = new String[]() {{
                                                add("incidunt"),
                                                add("voluptatem"),
                                            }};
                                            not = false;
                                            operator = "PARTIAL";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "neque";
                                            expressions = new String[]() {{
                                                add("et"),
                                                add("aut"),
                                            }};
                                            not = true;
                                            operator = "BEGINS_WITH";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "minus";
                                            expressions = new String[]() {{
                                                add("tempora"),
                                                add("officia"),
                                                add("ducimus"),
                                            }};
                                            not = false;
                                            operator = "PARTIAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "nostrum";
                                            expressions = new String[]() {{
                                                add("qui"),
                                                add("enim"),
                                                add("corporis"),
                                            }};
                                            not = true;
                                            operator = "BEGINS_WITH";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                            }};
                            dimensions = new openapisdk.models.shared.Dimension[]() {{
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("consequatur"),
                                    }};
                                    name = "laborum";
                                }}),
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("laboriosam"),
                                        add("fugiat"),
                                        add("et"),
                                    }};
                                    name = "nesciunt";
                                }}),
                            }};
                            filtersExpression = "tempore";
                            hideTotals = false;
                            hideValueRanges = false;
                            includeEmptyRows = true;
                            metricFilterClauses = new openapisdk.models.shared.MetricFilterClause[]() {{
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "a";
                                            metricName = "quis";
                                            not = true;
                                            operator = "LESS_THAN";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "est";
                                            metricName = "blanditiis";
                                            not = false;
                                            operator = "LESS_THAN";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "tempore";
                                            metricName = "tempore";
                                            not = false;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "ea";
                                            metricName = "aut";
                                            not = true;
                                            operator = "EQUAL";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "atque";
                                            metricName = "vel";
                                            not = false;
                                            operator = "GREATER_THAN";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "ut";
                                            metricName = "unde";
                                            not = false;
                                            operator = "IS_MISSING";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "maiores";
                                            metricName = "repellendus";
                                            not = false;
                                            operator = "IS_MISSING";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                            }};
                            metrics = new openapisdk.models.shared.Metric[]() {{
                                add(new Metric() {{
                                    alias = "rem";
                                    expression = "quas";
                                    formattingType = "PERCENT";
                                }}),
                                add(new Metric() {{
                                    alias = "saepe";
                                    expression = "harum";
                                    formattingType = "PERCENT";
                                }}),
                            }};
                            orderBys = new openapisdk.models.shared.OrderBy[]() {{
                                add(new OrderBy() {{
                                    fieldName = "necessitatibus";
                                    orderType = "DIMENSION_AS_INTEGER";
                                    sortOrder = "DESCENDING";
                                }}),
                                add(new OrderBy() {{
                                    fieldName = "eaque";
                                    orderType = "SMART";
                                    sortOrder = "ASCENDING";
                                }}),
                            }};
                            pageSize = 6642368765562709634;
                            pageToken = "adipisci";
                            pivots = new openapisdk.models.shared.Pivot[]() {{
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "sed";
                                                    expressions = new String[]() {{
                                                        add("saepe"),
                                                    }};
                                                    not = true;
                                                    operator = "OPERATOR_UNSPECIFIED";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "facere";
                                                    expressions = new String[]() {{
                                                        add("voluptate"),
                                                        add("assumenda"),
                                                    }};
                                                    not = true;
                                                    operator = "ENDS_WITH";
                                                }}),
                                            }};
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("aut"),
                                            }};
                                            name = "ullam";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("laudantium"),
                                            }};
                                            name = "iure";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("doloribus"),
                                                add("rem"),
                                            }};
                                            name = "sit";
                                        }}),
                                    }};
                                    maxGroupCount = 2527312800803801365;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "quod";
                                            expression = "ut";
                                            formattingType = "TIME";
                                        }}),
                                        add(new Metric() {{
                                            alias = "atque";
                                            expression = "et";
                                            formattingType = "METRIC_TYPE_UNSPECIFIED";
                                        }}),
                                        add(new Metric() {{
                                            alias = "ipsum";
                                            expression = "dolor";
                                            formattingType = "INTEGER";
                                        }}),
                                    }};
                                    startGroup = 7766695469374726972;
                                }}),
                            }};
                            samplingLevel = "DEFAULT";
                            segments = new openapisdk.models.shared.Segment[]() {{
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "fuga";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "atque";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptas";
                                                                                    minComparisonValue = "sunt";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "excepturi";
                                                                                    metricName = "vel";
                                                                                    operator = "EQUAL";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "voluptatibus";
                                                                            expressions = new String[]() {{
                                                                                add("nam"),
                                                                            }};
                                                                            maxComparisonValue = "dolor";
                                                                            minComparisonValue = "itaque";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sapiente";
                                                                            maxComparisonValue = "molestiae";
                                                                            metricName = "aut";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "incidunt";
                                                                            expressions = new String[]() {{
                                                                                add("suscipit"),
                                                                                add("officiis"),
                                                                            }};
                                                                            maxComparisonValue = "cum";
                                                                            minComparisonValue = "totam";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quo";
                                                                            maxComparisonValue = "quos";
                                                                            metricName = "beatae";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "consequatur";
                                                                            expressions = new String[]() {{
                                                                                add("distinctio"),
                                                                                add("ipsam"),
                                                                            }};
                                                                            maxComparisonValue = "dolor";
                                                                            minComparisonValue = "aut";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ullam";
                                                                            maxComparisonValue = "assumenda";
                                                                            metricName = "blanditiis";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "est";
                                                                            expressions = new String[]() {{
                                                                                add("consequatur"),
                                                                                add("fugiat"),
                                                                            }};
                                                                            maxComparisonValue = "tenetur";
                                                                            minComparisonValue = "nihil";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "aspernatur";
                                                                            maxComparisonValue = "dignissimos";
                                                                            metricName = "inventore";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "optio";
                                                                            expressions = new String[]() {{
                                                                                add("ut"),
                                                                                add("est"),
                                                                                add("a"),
                                                                            }};
                                                                            maxComparisonValue = "id";
                                                                            minComparisonValue = "facere";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ut";
                                                                            maxComparisonValue = "voluptatum";
                                                                            metricName = "alias";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "magni";
                                                                            expressions = new String[]() {{
                                                                                add("omnis"),
                                                                            }};
                                                                            maxComparisonValue = "velit";
                                                                            minComparisonValue = "molestiae";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quia";
                                                                            maxComparisonValue = "dolor";
                                                                            metricName = "sit";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "non";
                                                                            expressions = new String[]() {{
                                                                                add("molestias"),
                                                                                add("voluptas"),
                                                                                add("deserunt"),
                                                                            }};
                                                                            maxComparisonValue = "amet";
                                                                            minComparisonValue = "optio";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "dolorem";
                                                                            metricName = "minus";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "quia";
                                                                            expressions = new String[]() {{
                                                                                add("sint"),
                                                                                add("distinctio"),
                                                                                add("maiores"),
                                                                            }};
                                                                            maxComparisonValue = "exercitationem";
                                                                            minComparisonValue = "sunt";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "nobis";
                                                                            maxComparisonValue = "quos";
                                                                            metricName = "facilis";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "possimus";
                                                                                    expressions = new String[]() {{
                                                                                        add("eveniet"),
                                                                                        add("alias"),
                                                                                        add("tenetur"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolorem";
                                                                                    minComparisonValue = "porro";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sed";
                                                                                    maxComparisonValue = "cum";
                                                                                    metricName = "repellat";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "quisquam";
                                                                                    expressions = new String[]() {{
                                                                                        add("nihil"),
                                                                                        add("laudantium"),
                                                                                    }};
                                                                                    maxComparisonValue = "magni";
                                                                                    minComparisonValue = "vel";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "incidunt";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "magnam";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "omnis";
                                                                                    expressions = new String[]() {{
                                                                                        add("labore"),
                                                                                        add("sapiente"),
                                                                                        add("accusamus"),
                                                                                    }};
                                                                                    maxComparisonValue = "velit";
                                                                                    minComparisonValue = "amet";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "molestias";
                                                                                    metricName = "quis";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "culpa";
                                                                                    expressions = new String[]() {{
                                                                                        add("nihil"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "alias";
                                                                                    metricName = "qui";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aliquam";
                                                                                    expressions = new String[]() {{
                                                                                        add("repellat"),
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "necessitatibus";
                                                                                    minComparisonValue = "deserunt";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "veritatis";
                                                                                    maxComparisonValue = "sed";
                                                                                    metricName = "praesentium";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("eum"),
                                                                                        add("non"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "eum";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "magni";
                                                                                    maxComparisonValue = "illum";
                                                                                    metricName = "occaecati";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "laboriosam";
                                                                                    expressions = new String[]() {{
                                                                                        add("distinctio"),
                                                                                        add("vel"),
                                                                                        add("est"),
                                                                                    }};
                                                                                    maxComparisonValue = "incidunt";
                                                                                    minComparisonValue = "aut";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "molestiae";
                                                                                    maxComparisonValue = "tenetur";
                                                                                    metricName = "nemo";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "voluptatem";
                                                                                    expressions = new String[]() {{
                                                                                        add("excepturi"),
                                                                                        add("maxime"),
                                                                                        add("ipsa"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "autem";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "recusandae";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "dolorem";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "sit";
                                                                                    expressions = new String[]() {{
                                                                                        add("minima"),
                                                                                        add("eos"),
                                                                                    }};
                                                                                    maxComparisonValue = "accusantium";
                                                                                    minComparisonValue = "minima";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consectetur";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "tempora";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "est";
                                                                                    expressions = new String[]() {{
                                                                                        add("omnis"),
                                                                                    }};
                                                                                    maxComparisonValue = "sint";
                                                                                    minComparisonValue = "quidem";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quae";
                                                                                    maxComparisonValue = "ut";
                                                                                    metricName = "labore";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "modi";
                                                                                    expressions = new String[]() {{
                                                                                        add("placeat"),
                                                                                    }};
                                                                                    maxComparisonValue = "doloribus";
                                                                                    minComparisonValue = "quibusdam";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sint";
                                                                                    maxComparisonValue = "ipsam";
                                                                                    metricName = "qui";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "et";
                                                                            expressions = new String[]() {{
                                                                                add("sapiente"),
                                                                            }};
                                                                            maxComparisonValue = "consequatur";
                                                                            minComparisonValue = "et";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dolore";
                                                                            maxComparisonValue = "dignissimos";
                                                                            metricName = "quia";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "maxime";
                                                                            expressions = new String[]() {{
                                                                                add("aut"),
                                                                                add("autem"),
                                                                            }};
                                                                            maxComparisonValue = "deleniti";
                                                                            minComparisonValue = "impedit";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "omnis";
                                                                            maxComparisonValue = "velit";
                                                                            metricName = "commodi";
                                                                            operator = "BETWEEN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "sed";
                                                                                    expressions = new String[]() {{
                                                                                        add("soluta"),
                                                                                        add("vel"),
                                                                                    }};
                                                                                    maxComparisonValue = "fuga";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nulla";
                                                                                    maxComparisonValue = "numquam";
                                                                                    metricName = "quia";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "delectus";
                                                                                    expressions = new String[]() {{
                                                                                        add("incidunt"),
                                                                                        add("delectus"),
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "iste";
                                                                                    minComparisonValue = "fuga";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ex";
                                                                                    maxComparisonValue = "magnam";
                                                                                    metricName = "a";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("saepe"),
                                                                                        add("dolores"),
                                                                                        add("quasi"),
                                                                                    }};
                                                                                    maxComparisonValue = "recusandae";
                                                                                    minComparisonValue = "numquam";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "occaecati";
                                                                                    maxComparisonValue = "aut";
                                                                                    metricName = "est";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("consequuntur"),
                                                                                    }};
                                                                                    maxComparisonValue = "exercitationem";
                                                                                    minComparisonValue = "hic";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "porro";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "deserunt";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quam";
                                                                                    expressions = new String[]() {{
                                                                                        add("omnis"),
                                                                                        add("qui"),
                                                                                        add("neque"),
                                                                                    }};
                                                                                    maxComparisonValue = "officia";
                                                                                    minComparisonValue = "quo";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "reprehenderit";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "quia";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aliquid";
                                                                                    expressions = new String[]() {{
                                                                                        add("unde"),
                                                                                        add("ducimus"),
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolor";
                                                                                    minComparisonValue = "quidem";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolores";
                                                                                    maxComparisonValue = "fuga";
                                                                                    metricName = "et";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "tenetur";
                                                                                    expressions = new String[]() {{
                                                                                        add("cupiditate"),
                                                                                        add("quia"),
                                                                                    }};
                                                                                    maxComparisonValue = "facere";
                                                                                    minComparisonValue = "sequi";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "enim";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "unde";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "provident";
                                                                            expressions = new String[]() {{
                                                                                add("perspiciatis"),
                                                                            }};
                                                                            maxComparisonValue = "dolorem";
                                                                            minComparisonValue = "magni";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "non";
                                                                            maxComparisonValue = "a";
                                                                            metricName = "recusandae";
                                                                            operator = "LESS_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "et";
                                                                            expressions = new String[]() {{
                                                                                add("ratione"),
                                                                            }};
                                                                            maxComparisonValue = "voluptas";
                                                                            minComparisonValue = "quas";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "incidunt";
                                                                            maxComparisonValue = "sapiente";
                                                                            metricName = "dolore";
                                                                            operator = "LESS_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "amet";
                                                                            expressions = new String[]() {{
                                                                                add("quod"),
                                                                                add("quisquam"),
                                                                            }};
                                                                            maxComparisonValue = "ex";
                                                                            minComparisonValue = "id";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "non";
                                                                            maxComparisonValue = "non";
                                                                            metricName = "quam";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "nisi";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "repudiandae";
                                        sessionSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "nesciunt";
                                                                                    expressions = new String[]() {{
                                                                                        add("quos"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "magni";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ad";
                                                                                    maxComparisonValue = "sapiente";
                                                                                    metricName = "at";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "eum";
                                                                                    expressions = new String[]() {{
                                                                                        add("non"),
                                                                                    }};
                                                                                    maxComparisonValue = "corrupti";
                                                                                    minComparisonValue = "nam";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "adipisci";
                                                                                    maxComparisonValue = "enim";
                                                                                    metricName = "laborum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "doloremque";
                                                                                    expressions = new String[]() {{
                                                                                        add("quaerat"),
                                                                                    }};
                                                                                    maxComparisonValue = "natus";
                                                                                    minComparisonValue = "illo";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "reprehenderit";
                                                                                    maxComparisonValue = "hic";
                                                                                    metricName = "commodi";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "nostrum";
                                                                                    expressions = new String[]() {{
                                                                                        add("iusto"),
                                                                                        add("esse"),
                                                                                        add("architecto"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "aliquam";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "corporis";
                                                                                    maxComparisonValue = "tempora";
                                                                                    metricName = "quas";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "doloremque";
                                                                                    expressions = new String[]() {{
                                                                                        add("ut"),
                                                                                        add("omnis"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "voluptate";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "numquam";
                                                                                    maxComparisonValue = "voluptates";
                                                                                    metricName = "voluptatem";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "qui";
                                                                                    expressions = new String[]() {{
                                                                                        add("sapiente"),
                                                                                        add("exercitationem"),
                                                                                    }};
                                                                                    maxComparisonValue = "consequatur";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "repellendus";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "harum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "amet";
                                                                            expressions = new String[]() {{
                                                                                add("quia"),
                                                                            }};
                                                                            maxComparisonValue = "nihil";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quia";
                                                                            maxComparisonValue = "voluptas";
                                                                            metricName = "laboriosam";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "soluta";
                                                                            expressions = new String[]() {{
                                                                                add("explicabo"),
                                                                                add("corporis"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "sunt";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "placeat";
                                                                            maxComparisonValue = "voluptatem";
                                                                            metricName = "voluptas";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "totam";
                                                                            expressions = new String[]() {{
                                                                                add("rerum"),
                                                                            }};
                                                                            maxComparisonValue = "natus";
                                                                            minComparisonValue = "facilis";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "odio";
                                                                            maxComparisonValue = "fuga";
                                                                            metricName = "aut";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "cupiditate";
                                                                            expressions = new String[]() {{
                                                                                add("et"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "cupiditate";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "vero";
                                                                            maxComparisonValue = "quis";
                                                                            metricName = "consequatur";
                                                                            operator = "EQUAL";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "ad";
                                                                            expressions = new String[]() {{
                                                                                add("molestias"),
                                                                                add("perspiciatis"),
                                                                            }};
                                                                            maxComparisonValue = "molestiae";
                                                                            minComparisonValue = "voluptatem";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sit";
                                                                            maxComparisonValue = "aspernatur";
                                                                            metricName = "molestias";
                                                                            operator = "EQUAL";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "magni";
                                                                            expressions = new String[]() {{
                                                                                add("itaque"),
                                                                                add("tempora"),
                                                                            }};
                                                                            maxComparisonValue = "vitae";
                                                                            minComparisonValue = "quo";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "iusto";
                                                                            maxComparisonValue = "dolores";
                                                                            metricName = "nobis";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = false;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = true;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptatem"),
                                                                                    }};
                                                                                    maxComparisonValue = "adipisci";
                                                                                    minComparisonValue = "nobis";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "necessitatibus";
                                                                                    maxComparisonValue = "sequi";
                                                                                    metricName = "velit";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "qui";
                                                                                    expressions = new String[]() {{
                                                                                        add("tempora"),
                                                                                        add("voluptatem"),
                                                                                    }};
                                                                                    maxComparisonValue = "dignissimos";
                                                                                    minComparisonValue = "velit";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "vitae";
                                                                                    maxComparisonValue = "quasi";
                                                                                    metricName = "ipsum";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "aperiam";
                                                                                    expressions = new String[]() {{
                                                                                        add("aut"),
                                                                                        add("in"),
                                                                                    }};
                                                                                    maxComparisonValue = "eum";
                                                                                    minComparisonValue = "quibusdam";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "totam";
                                                                                    maxComparisonValue = "similique";
                                                                                    metricName = "sunt";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "amet";
                                                                                    expressions = new String[]() {{
                                                                                        add("perspiciatis"),
                                                                                        add("cupiditate"),
                                                                                        add("asperiores"),
                                                                                    }};
                                                                                    maxComparisonValue = "quasi";
                                                                                    minComparisonValue = "eius";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "pariatur";
                                                                                    maxComparisonValue = "eligendi";
                                                                                    metricName = "sit";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quis";
                                                                                    expressions = new String[]() {{
                                                                                        add("sint"),
                                                                                        add("enim"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "voluptatem";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolorem";
                                                                                    maxComparisonValue = "beatae";
                                                                                    metricName = "at";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aliquam";
                                                                                    expressions = new String[]() {{
                                                                                        add("laboriosam"),
                                                                                        add("totam"),
                                                                                    }};
                                                                                    maxComparisonValue = "atque";
                                                                                    minComparisonValue = "corrupti";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolorum";
                                                                                    maxComparisonValue = "placeat";
                                                                                    metricName = "ut";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "autem";
                                                                                    expressions = new String[]() {{
                                                                                        add("consequatur"),
                                                                                    }};
                                                                                    maxComparisonValue = "delectus";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quaerat";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "et";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "illo";
                                                                                    expressions = new String[]() {{
                                                                                        add("rerum"),
                                                                                        add("fugit"),
                                                                                        add("impedit"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "modi";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatibus";
                                                                                    maxComparisonValue = "illo";
                                                                                    metricName = "aut";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "dolor";
                                                                                    expressions = new String[]() {{
                                                                                        add("doloremque"),
                                                                                    }};
                                                                                    maxComparisonValue = "sit";
                                                                                    minComparisonValue = "aspernatur";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatibus";
                                                                                    maxComparisonValue = "ea";
                                                                                    metricName = "tempora";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "excepturi";
                                                                                    expressions = new String[]() {{
                                                                                        add("animi"),
                                                                                        add("odio"),
                                                                                    }};
                                                                                    maxComparisonValue = "officia";
                                                                                    minComparisonValue = "odio";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "corrupti";
                                                                                    metricName = "perspiciatis";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "aliquid";
                                                                            expressions = new String[]() {{
                                                                                add("atque"),
                                                                                add("non"),
                                                                            }};
                                                                            maxComparisonValue = "dicta";
                                                                            minComparisonValue = "recusandae";
                                                                            operator = "IN_LIST";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "inventore";
                                                                            maxComparisonValue = "natus";
                                                                            metricName = "voluptatibus";
                                                                            operator = "LESS_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "dolor";
                                                                            expressions = new String[]() {{
                                                                                add("in"),
                                                                            }};
                                                                            maxComparisonValue = "dolore";
                                                                            minComparisonValue = "laudantium";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "repellendus";
                                                                            maxComparisonValue = "corrupti";
                                                                            metricName = "ex";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "eos";
                                                                                    expressions = new String[]() {{
                                                                                        add("consectetur"),
                                                                                        add("rerum"),
                                                                                    }};
                                                                                    maxComparisonValue = "magnam";
                                                                                    minComparisonValue = "dicta";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "accusantium";
                                                                                    maxComparisonValue = "architecto";
                                                                                    metricName = "omnis";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "laboriosam";
                                                                            expressions = new String[]() {{
                                                                                add("dolorem"),
                                                                                add("et"),
                                                                            }};
                                                                            maxComparisonValue = "quibusdam";
                                                                            minComparisonValue = "cupiditate";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dolorem";
                                                                            maxComparisonValue = "quos";
                                                                            metricName = "deleniti";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "aperiam";
                                                                            expressions = new String[]() {{
                                                                                add("accusantium"),
                                                                                add("fuga"),
                                                                            }};
                                                                            maxComparisonValue = "ut";
                                                                            minComparisonValue = "delectus";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "vitae";
                                                                            maxComparisonValue = "neque";
                                                                            metricName = "est";
                                                                            operator = "LESS_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "consectetur";
                                                                            expressions = new String[]() {{
                                                                                add("ut"),
                                                                                add("et"),
                                                                                add("culpa"),
                                                                            }};
                                                                            maxComparisonValue = "officia";
                                                                            minComparisonValue = "veritatis";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ad";
                                                                            maxComparisonValue = "aut";
                                                                            metricName = "esse";
                                                                            operator = "EQUAL";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "rerum";
                                                                            expressions = new String[]() {{
                                                                                add("debitis"),
                                                                                add("blanditiis"),
                                                                            }};
                                                                            maxComparisonValue = "dolorum";
                                                                            minComparisonValue = "saepe";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "eligendi";
                                                                            maxComparisonValue = "alias";
                                                                            metricName = "deleniti";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "veniam";
                                                                            expressions = new String[]() {{
                                                                                add("inventore"),
                                                                                add("voluptas"),
                                                                            }};
                                                                            maxComparisonValue = "minus";
                                                                            minComparisonValue = "dicta";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "eum";
                                                                            maxComparisonValue = "nesciunt";
                                                                            metricName = "ea";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        userSegment = new SegmentDefinition() {{
                                            segmentFilters = new openapisdk.models.shared.SegmentFilter[]() {{
                                                add(new SegmentFilter() {{
                                                    not = true;
                                                    sequenceSegment = new SequenceSegment() {{
                                                        firstStepShouldMatchFirstHit = false;
                                                        segmentSequenceSteps = new openapisdk.models.shared.SegmentSequenceStep[]() {{
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "facere";
                                                                                    expressions = new String[]() {{
                                                                                        add("accusamus"),
                                                                                        add("placeat"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "natus";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "iure";
                                                                                    maxComparisonValue = "exercitationem";
                                                                                    metricName = "delectus";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ducimus";
                                                                                    expressions = new String[]() {{
                                                                                        add("modi"),
                                                                                    }};
                                                                                    maxComparisonValue = "amet";
                                                                                    minComparisonValue = "modi";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "incidunt";
                                                                                    maxComparisonValue = "ab";
                                                                                    metricName = "sequi";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "hic";
                                                                                    expressions = new String[]() {{
                                                                                        add("id"),
                                                                                    }};
                                                                                    maxComparisonValue = "in";
                                                                                    minComparisonValue = "doloribus";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "occaecati";
                                                                                    maxComparisonValue = "iste";
                                                                                    metricName = "asperiores";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "sint";
                                                                                    expressions = new String[]() {{
                                                                                        add("consequatur"),
                                                                                        add("adipisci"),
                                                                                    }};
                                                                                    maxComparisonValue = "quod";
                                                                                    minComparisonValue = "sed";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ipsum";
                                                                                    maxComparisonValue = "saepe";
                                                                                    metricName = "velit";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "rem";
                                                                                    expressions = new String[]() {{
                                                                                        add("sint"),
                                                                                        add("quia"),
                                                                                        add("adipisci"),
                                                                                    }};
                                                                                    maxComparisonValue = "ad";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "doloribus";
                                                                                    maxComparisonValue = "iste";
                                                                                    metricName = "distinctio";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptatum";
                                                                                    expressions = new String[]() {{
                                                                                        add("consectetur"),
                                                                                    }};
                                                                                    maxComparisonValue = "nihil";
                                                                                    minComparisonValue = "libero";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "possimus";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "rerum";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "culpa";
                                                                                    expressions = new String[]() {{
                                                                                        add("quae"),
                                                                                        add("incidunt"),
                                                                                        add("voluptas"),
                                                                                    }};
                                                                                    maxComparisonValue = "nam";
                                                                                    minComparisonValue = "optio";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ratione";
                                                                                    maxComparisonValue = "quaerat";
                                                                                    metricName = "qui";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "cum";
                                                                                    expressions = new String[]() {{
                                                                                        add("maxime"),
                                                                                        add("sunt"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolore";
                                                                                    minComparisonValue = "placeat";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ut";
                                                                                    maxComparisonValue = "sapiente";
                                                                                    metricName = "laborum";
                                                                                    operator = "EQUAL";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "UNSPECIFIED_MATCH_TYPE";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "velit";
                                                                                    expressions = new String[]() {{
                                                                                        add("quo"),
                                                                                        add("maiores"),
                                                                                    }};
                                                                                    maxComparisonValue = "nesciunt";
                                                                                    minComparisonValue = "velit";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "repellat";
                                                                                    maxComparisonValue = "placeat";
                                                                                    metricName = "accusantium";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "modi";
                                                                                    expressions = new String[]() {{
                                                                                        add("quia"),
                                                                                        add("eaque"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "assumenda";
                                                                                    minComparisonValue = "incidunt";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quia";
                                                                                    maxComparisonValue = "unde";
                                                                                    metricName = "ipsam";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "error";
                                                                                    expressions = new String[]() {{
                                                                                        add("sit"),
                                                                                        add("sapiente"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "nobis";
                                                                                    minComparisonValue = "possimus";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "illum";
                                                                                    maxComparisonValue = "iusto";
                                                                                    metricName = "sunt";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "esse";
                                                                                    expressions = new String[]() {{
                                                                                        add("non"),
                                                                                        add("nam"),
                                                                                    }};
                                                                                    maxComparisonValue = "enim";
                                                                                    minComparisonValue = "enim";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quo";
                                                                                    maxComparisonValue = "sint";
                                                                                    metricName = "quis";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new SegmentSequenceStep() {{
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aperiam";
                                                                                    expressions = new String[]() {{
                                                                                        add("illum"),
                                                                                        add("hic"),
                                                                                    }};
                                                                                    maxComparisonValue = "quisquam";
                                                                                    minComparisonValue = "sit";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sed";
                                                                                    maxComparisonValue = "itaque";
                                                                                    metricName = "qui";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                        }};
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    simpleSegment = new SimpleSegment() {{
                                                        orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "illum";
                                                                            expressions = new String[]() {{
                                                                                add("eos"),
                                                                            }};
                                                                            maxComparisonValue = "asperiores";
                                                                            minComparisonValue = "dicta";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "accusantium";
                                                                            maxComparisonValue = "omnis";
                                                                            metricName = "nobis";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "expedita";
                                                                            expressions = new String[]() {{
                                                                                add("soluta"),
                                                                            }};
                                                                            maxComparisonValue = "ut";
                                                                            minComparisonValue = "aperiam";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "repellendus";
                                                                            maxComparisonValue = "officia";
                                                                            metricName = "in";
                                                                            operator = "UNSPECIFIED_OPERATOR";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "et";
                                                                            expressions = new String[]() {{
                                                                                add("ea"),
                                                                                add("magnam"),
                                                                                add("a"),
                                                                            }};
                                                                            maxComparisonValue = "nulla";
                                                                            minComparisonValue = "harum";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quaerat";
                                                                            maxComparisonValue = "ut";
                                                                            metricName = "sed";
                                                                            operator = "EQUAL";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "labore";
                                                                            expressions = new String[]() {{
                                                                                add("magni"),
                                                                                add("voluptatum"),
                                                                                add("minima"),
                                                                            }};
                                                                            maxComparisonValue = "necessitatibus";
                                                                            minComparisonValue = "totam";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ea";
                                                                            maxComparisonValue = "labore";
                                                                            metricName = "quasi";
                                                                            operator = "BETWEEN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "quibusdam";
                                                                            expressions = new String[]() {{
                                                                                add("quisquam"),
                                                                            }};
                                                                            maxComparisonValue = "est";
                                                                            minComparisonValue = "necessitatibus";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "dolores";
                                                                            maxComparisonValue = "perspiciatis";
                                                                            metricName = "ab";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "possimus";
                                                                            expressions = new String[]() {{
                                                                                add("facere"),
                                                                            }};
                                                                            maxComparisonValue = "accusamus";
                                                                            minComparisonValue = "veritatis";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "praesentium";
                                                                            maxComparisonValue = "omnis";
                                                                            metricName = "qui";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "nam";
                                }}),
                            }};
                            viewId = "quia";
                        }}),
                    }};
                    useResourceQuotas = false;
                }};
            }};

            AnalyticsreportingReportsBatchGetResponse res = sdk.reports.analyticsreportingReportsBatchGet(req);

            if (res.getReportsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### reports

* `analyticsreportingReportsBatchGet` - Returns the Analytics data.

### userActivity

* `analyticsreportingUserActivitySearch` - Returns User Activity data.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
