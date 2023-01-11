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
                    accessToken = "sunt";
                    alt = "json";
                    callback = "voluptate";
                    fields = "excepturi";
                    key = "illum";
                    oauthToken = "labore";
                    prettyPrint = false;
                    quotaUser = "officia";
                    uploadType = "quo";
                    uploadProtocol = "asperiores";
                }};
                request = new GetReportsRequest() {{
                    reportRequests = new openapisdk.models.shared.ReportRequest[]() {{
                        add(new ReportRequest() {{
                            cohortGroup = new CohortGroup() {{
                                cohorts = new openapisdk.models.shared.Cohort[]() {{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "voluptatem";
                                            startDate = "sit";
                                        }};
                                        name = "eum";
                                        type = "UNSPECIFIED_COHORT_TYPE";
                                    }}),
                                }};
                                lifetimeValue = false;
                            }};
                            dateRanges = new openapisdk.models.shared.DateRange[]() {{
                                add(new DateRange() {{
                                    endDate = "consequatur";
                                    startDate = "quia";
                                }}),
                            }};
                            dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "placeat";
                                            expressions = new String[]() {{
                                                add("dolor"),
                                                add("facilis"),
                                                add("ipsa"),
                                            }};
                                            not = false;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "ex";
                                            expressions = new String[]() {{
                                                add("quaerat"),
                                            }};
                                            not = false;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "ullam";
                                            expressions = new String[]() {{
                                                add("expedita"),
                                                add("error"),
                                                add("omnis"),
                                            }};
                                            not = true;
                                            operator = "NUMERIC_EQUAL";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "commodi";
                                            expressions = new String[]() {{
                                                add("et"),
                                                add("sed"),
                                                add("saepe"),
                                            }};
                                            not = false;
                                            operator = "EXACT";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "tenetur";
                                            expressions = new String[]() {{
                                                add("animi"),
                                                add("facere"),
                                                add("consequatur"),
                                            }};
                                            not = false;
                                            operator = "NUMERIC_EQUAL";
                                        }}),
                                    }};
                                    operator = "AND";
                                }}),
                                add(new DimensionFilterClause() {{
                                    filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                        add(new DimensionFilter() {{
                                            caseSensitive = true;
                                            dimensionName = "et";
                                            expressions = new String[]() {{
                                                add("aut"),
                                                add("beatae"),
                                            }};
                                            not = false;
                                            operator = "OPERATOR_UNSPECIFIED";
                                        }}),
                                        add(new DimensionFilter() {{
                                            caseSensitive = false;
                                            dimensionName = "quia";
                                            expressions = new String[]() {{
                                                add("quaerat"),
                                            }};
                                            not = false;
                                            operator = "NUMERIC_LESS_THAN";
                                        }}),
                                    }};
                                    operator = "OPERATOR_UNSPECIFIED";
                                }}),
                            }};
                            dimensions = new openapisdk.models.shared.Dimension[]() {{
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("non"),
                                    }};
                                    name = "veniam";
                                }}),
                                add(new Dimension() {{
                                    histogramBuckets = new String[]() {{
                                        add("sint"),
                                    }};
                                    name = "eos";
                                }}),
                            }};
                            filtersExpression = "quas";
                            hideTotals = false;
                            hideValueRanges = false;
                            includeEmptyRows = false;
                            metricFilterClauses = new openapisdk.models.shared.MetricFilterClause[]() {{
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "deleniti";
                                            metricName = "eum";
                                            not = false;
                                            operator = "GREATER_THAN";
                                        }}),
                                        add(new MetricFilter() {{
                                            comparisonValue = "quaerat";
                                            metricName = "ab";
                                            not = true;
                                            operator = "EQUAL";
                                        }}),
                                    }};
                                    operator = "AND";
                                }}),
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "libero";
                                            metricName = "sit";
                                            not = false;
                                            operator = "EQUAL";
                                        }}),
                                    }};
                                    operator = "OR";
                                }}),
                                add(new MetricFilterClause() {{
                                    filters = new openapisdk.models.shared.MetricFilter[]() {{
                                        add(new MetricFilter() {{
                                            comparisonValue = "est";
                                            metricName = "cupiditate";
                                            not = true;
                                            operator = "EQUAL";
                                        }}),
                                    }};
                                    operator = "AND";
                                }}),
                            }};
                            metrics = new openapisdk.models.shared.Metric[]() {{
                                add(new Metric() {{
                                    alias = "doloribus";
                                    expression = "ad";
                                    formattingType = "INTEGER";
                                }}),
                            }};
                            orderBys = new openapisdk.models.shared.OrderBy[]() {{
                                add(new OrderBy() {{
                                    fieldName = "est";
                                    orderType = "DIMENSION_AS_INTEGER";
                                    sortOrder = "DESCENDING";
                                }}),
                                add(new OrderBy() {{
                                    fieldName = "ipsum";
                                    orderType = "VALUE";
                                    sortOrder = "SORT_ORDER_UNSPECIFIED";
                                }}),
                            }};
                            pageSize = 6708539092506003158;
                            pageToken = "sunt";
                            pivots = new openapisdk.models.shared.Pivot[]() {{
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "id";
                                                    expressions = new String[]() {{
                                                        add("et"),
                                                        add("et"),
                                                        add("ea"),
                                                    }};
                                                    not = false;
                                                    operator = "BEGINS_WITH";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "tempore";
                                                    expressions = new String[]() {{
                                                        add("nostrum"),
                                                    }};
                                                    not = true;
                                                    operator = "EXACT";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "aut";
                                                    expressions = new String[]() {{
                                                        add("quia"),
                                                        add("ab"),
                                                        add("nemo"),
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
                                                    caseSensitive = false;
                                                    dimensionName = "qui";
                                                    expressions = new String[]() {{
                                                        add("ad"),
                                                        add("et"),
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
                                                    dimensionName = "vero";
                                                    expressions = new String[]() {{
                                                        add("quam"),
                                                        add("iste"),
                                                    }};
                                                    not = false;
                                                    operator = "ENDS_WITH";
                                                }}),
                                            }};
                                            operator = "AND";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("placeat"),
                                                add("cupiditate"),
                                            }};
                                            name = "aperiam";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("molestiae"),
                                                add("explicabo"),
                                                add("cumque"),
                                            }};
                                            name = "sint";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("sunt"),
                                                add("soluta"),
                                                add("cum"),
                                            }};
                                            name = "placeat";
                                        }}),
                                    }};
                                    maxGroupCount = 9114659751428386106;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "exercitationem";
                                            expression = "est";
                                            formattingType = "FLOAT";
                                        }}),
                                    }};
                                    startGroup = 3286029794189066923;
                                }}),
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "voluptatum";
                                                    expressions = new String[]() {{
                                                        add("perferendis"),
                                                        add("temporibus"),
                                                        add("incidunt"),
                                                    }};
                                                    not = true;
                                                    operator = "PARTIAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "maxime";
                                                    expressions = new String[]() {{
                                                        add("dolor"),
                                                        add("non"),
                                                        add("veniam"),
                                                    }};
                                                    not = true;
                                                    operator = "EXACT";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "iste";
                                                    expressions = new String[]() {{
                                                        add("cupiditate"),
                                                        add("omnis"),
                                                        add("iste"),
                                                    }};
                                                    not = true;
                                                    operator = "REGEXP";
                                                }}),
                                            }};
                                            operator = "OR";
                                        }}),
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "omnis";
                                                    expressions = new String[]() {{
                                                        add("animi"),
                                                        add("cum"),
                                                        add("occaecati"),
                                                    }};
                                                    not = false;
                                                    operator = "REGEXP";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "explicabo";
                                                    expressions = new String[]() {{
                                                        add("dolore"),
                                                    }};
                                                    not = false;
                                                    operator = "NUMERIC_EQUAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "consequatur";
                                                    expressions = new String[]() {{
                                                        add("animi"),
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
                                                add("et"),
                                                add("ut"),
                                                add("animi"),
                                            }};
                                            name = "atque";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("unde"),
                                                add("repellat"),
                                                add("impedit"),
                                            }};
                                            name = "tempore";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("quia"),
                                            }};
                                            name = "qui";
                                        }}),
                                    }};
                                    maxGroupCount = 1424107421612846593;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "explicabo";
                                            expression = "qui";
                                            formattingType = "PERCENT";
                                        }}),
                                        add(new Metric() {{
                                            alias = "ipsum";
                                            expression = "autem";
                                            formattingType = "PERCENT";
                                        }}),
                                        add(new Metric() {{
                                            alias = "dolorem";
                                            expression = "odit";
                                            formattingType = "CURRENCY";
                                        }}),
                                    }};
                                    startGroup = 7565197616811157747;
                                }}),
                                add(new Pivot() {{
                                    dimensionFilterClauses = new openapisdk.models.shared.DimensionFilterClause[]() {{
                                        add(new DimensionFilterClause() {{
                                            filters = new openapisdk.models.shared.DimensionFilter[]() {{
                                                add(new DimensionFilter() {{
                                                    caseSensitive = false;
                                                    dimensionName = "velit";
                                                    expressions = new String[]() {{
                                                        add("nam"),
                                                        add("facilis"),
                                                    }};
                                                    not = false;
                                                    operator = "PARTIAL";
                                                }}),
                                                add(new DimensionFilter() {{
                                                    caseSensitive = true;
                                                    dimensionName = "illum";
                                                    expressions = new String[]() {{
                                                        add("quo"),
                                                        add("et"),
                                                    }};
                                                    not = false;
                                                    operator = "REGEXP";
                                                }}),
                                            }};
                                            operator = "AND";
                                        }}),
                                    }};
                                    dimensions = new openapisdk.models.shared.Dimension[]() {{
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("fugit"),
                                                add("quam"),
                                            }};
                                            name = "cum";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("quo"),
                                            }};
                                            name = "delectus";
                                        }}),
                                        add(new Dimension() {{
                                            histogramBuckets = new String[]() {{
                                                add("ipsum"),
                                                add("et"),
                                                add("quis"),
                                            }};
                                            name = "et";
                                        }}),
                                    }};
                                    maxGroupCount = 8022009558530841117;
                                    metrics = new openapisdk.models.shared.Metric[]() {{
                                        add(new Metric() {{
                                            alias = "praesentium";
                                            expression = "excepturi";
                                            formattingType = "CURRENCY";
                                        }}),
                                        add(new Metric() {{
                                            alias = "architecto";
                                            expression = "omnis";
                                            formattingType = "INTEGER";
                                        }}),
                                        add(new Metric() {{
                                            alias = "sunt";
                                            expression = "modi";
                                            formattingType = "PERCENT";
                                        }}),
                                    }};
                                    startGroup = 7964800302216494054;
                                }}),
                            }};
                            samplingLevel = "SMALL";
                            segments = new openapisdk.models.shared.Segment[]() {{
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "in";
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
                                                                                    dimensionName = "velit";
                                                                                    expressions = new String[]() {{
                                                                                        add("mollitia"),
                                                                                    }};
                                                                                    maxComparisonValue = "ad";
                                                                                    minComparisonValue = "error";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "necessitatibus";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "nam";
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
                                                                                    dimensionName = "odio";
                                                                                    expressions = new String[]() {{
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "commodi";
                                                                                    minComparisonValue = "iste";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "blanditiis";
                                                                                    maxComparisonValue = "placeat";
                                                                                    metricName = "odio";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptas"),
                                                                                        add("necessitatibus"),
                                                                                    }};
                                                                                    maxComparisonValue = "iure";
                                                                                    minComparisonValue = "voluptate";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aut";
                                                                                    maxComparisonValue = "ullam";
                                                                                    metricName = "omnis";
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
                                                                            dimensionName = "totam";
                                                                            expressions = new String[]() {{
                                                                                add("voluptatibus"),
                                                                                add("sint"),
                                                                            }};
                                                                            maxComparisonValue = "aut";
                                                                            minComparisonValue = "fugiat";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sunt";
                                                                            maxComparisonValue = "asperiores";
                                                                            metricName = "reprehenderit";
                                                                            operator = "GREATER_THAN";
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
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "omnis";
                                                                                    expressions = new String[]() {{
                                                                                        add("ducimus"),
                                                                                    }};
                                                                                    maxComparisonValue = "consequatur";
                                                                                    minComparisonValue = "non";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "at";
                                                                                    maxComparisonValue = "cumque";
                                                                                    metricName = "occaecati";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "error";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolorem"),
                                                                                        add("ratione"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolor";
                                                                                    minComparisonValue = "excepturi";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quo";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "vel";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "praesentium";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                        add("aut"),
                                                                                        add("dignissimos"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "alias";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ipsum";
                                                                                    maxComparisonValue = "enim";
                                                                                    metricName = "magni";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "assumenda";
                                                                                    expressions = new String[]() {{
                                                                                        add("veniam"),
                                                                                    }};
                                                                                    maxComparisonValue = "sed";
                                                                                    minComparisonValue = "sint";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "explicabo";
                                                                                    maxComparisonValue = "maiores";
                                                                                    metricName = "ducimus";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "libero";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                        add("sit"),
                                                                                        add("quasi"),
                                                                                    }};
                                                                                    maxComparisonValue = "vitae";
                                                                                    minComparisonValue = "voluptate";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "deserunt";
                                                                                    maxComparisonValue = "sed";
                                                                                    metricName = "sint";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "molestias";
                                                                                    expressions = new String[]() {{
                                                                                        add("pariatur"),
                                                                                        add("voluptatum"),
                                                                                    }};
                                                                                    maxComparisonValue = "tenetur";
                                                                                    minComparisonValue = "rem";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "enim";
                                                                                    maxComparisonValue = "quia";
                                                                                    metricName = "voluptas";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "sequi";
                                                                                    expressions = new String[]() {{
                                                                                        add("et"),
                                                                                        add("quia"),
                                                                                    }};
                                                                                    maxComparisonValue = "aliquid";
                                                                                    minComparisonValue = "autem";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "tempora";
                                                                                    maxComparisonValue = "voluptate";
                                                                                    metricName = "est";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "asperiores";
                                                                                    expressions = new String[]() {{
                                                                                        add("repellendus"),
                                                                                        add("deleniti"),
                                                                                        add("corporis"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptas";
                                                                                    minComparisonValue = "architecto";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eum";
                                                                                    maxComparisonValue = "vero";
                                                                                    metricName = "totam";
                                                                                    operator = "EQUAL";
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
                                                                                    dimensionName = "consequatur";
                                                                                    expressions = new String[]() {{
                                                                                        add("numquam"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "minima";
                                                                                    maxComparisonValue = "fugit";
                                                                                    metricName = "accusamus";
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
                                                                                    dimensionName = "sed";
                                                                                    expressions = new String[]() {{
                                                                                        add("harum"),
                                                                                        add("repudiandae"),
                                                                                    }};
                                                                                    maxComparisonValue = "similique";
                                                                                    minComparisonValue = "molestiae";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "occaecati";
                                                                                    maxComparisonValue = "maiores";
                                                                                    metricName = "rerum";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptates";
                                                                                    expressions = new String[]() {{
                                                                                        add("inventore"),
                                                                                        add("quibusdam"),
                                                                                        add("minima"),
                                                                                    }};
                                                                                    maxComparisonValue = "iusto";
                                                                                    minComparisonValue = "adipisci";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sed";
                                                                                    maxComparisonValue = "quo";
                                                                                    metricName = "animi";
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
                                                                                        add("quo"),
                                                                                    }};
                                                                                    maxComparisonValue = "omnis";
                                                                                    minComparisonValue = "reprehenderit";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "veniam";
                                                                                    metricName = "impedit";
                                                                                    operator = "EQUAL";
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
                                                                            dimensionName = "repellendus";
                                                                            expressions = new String[]() {{
                                                                                add("nostrum"),
                                                                            }};
                                                                            maxComparisonValue = "non";
                                                                            minComparisonValue = "nihil";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "nihil";
                                                                            maxComparisonValue = "sed";
                                                                            metricName = "autem";
                                                                            operator = "LESS_THAN";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "corrupti";
                                                                            expressions = new String[]() {{
                                                                                add("eum"),
                                                                                add("voluptatem"),
                                                                                add("optio"),
                                                                            }};
                                                                            maxComparisonValue = "et";
                                                                            minComparisonValue = "consequatur";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "consequatur";
                                                                            maxComparisonValue = "non";
                                                                            metricName = "recusandae";
                                                                            operator = "EQUAL";
                                                                            scope = "UNSPECIFIED_SCOPE";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "sit";
                                                                            expressions = new String[]() {{
                                                                                add("rerum"),
                                                                                add("quisquam"),
                                                                                add("dolor"),
                                                                            }};
                                                                            maxComparisonValue = "itaque";
                                                                            minComparisonValue = "reiciendis";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "itaque";
                                                                            maxComparisonValue = "qui";
                                                                            metricName = "voluptatum";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "USER";
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
                                                                                    dimensionName = "doloremque";
                                                                                    expressions = new String[]() {{
                                                                                        add("sint"),
                                                                                    }};
                                                                                    maxComparisonValue = "iste";
                                                                                    minComparisonValue = "temporibus";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eaque";
                                                                                    maxComparisonValue = "rem";
                                                                                    metricName = "explicabo";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
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
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quisquam";
                                                                                    expressions = new String[]() {{
                                                                                        add("sunt"),
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "quaerat";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "vel";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "ipsam";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "molestiae";
                                                                                    expressions = new String[]() {{
                                                                                        add("dignissimos"),
                                                                                        add("consectetur"),
                                                                                        add("repellendus"),
                                                                                    }};
                                                                                    maxComparisonValue = "molestias";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ipsa";
                                                                                    maxComparisonValue = "sit";
                                                                                    metricName = "repellat";
                                                                                    operator = "LESS_THAN";
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
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "doloribus";
                                                                                    expressions = new String[]() {{
                                                                                        add("eius"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolorum";
                                                                                    minComparisonValue = "ea";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sunt";
                                                                                    maxComparisonValue = "quos";
                                                                                    metricName = "at";
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
                                                                                        add("corrupti"),
                                                                                        add("voluptatem"),
                                                                                        add("quasi"),
                                                                                    }};
                                                                                    maxComparisonValue = "repellat";
                                                                                    minComparisonValue = "rem";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nulla";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "autem";
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
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ex";
                                                                                    expressions = new String[]() {{
                                                                                        add("vel"),
                                                                                    }};
                                                                                    maxComparisonValue = "sunt";
                                                                                    minComparisonValue = "dolor";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ipsa";
                                                                                    maxComparisonValue = "ipsum";
                                                                                    metricName = "ab";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("minima"),
                                                                                        add("pariatur"),
                                                                                        add("nesciunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "ducimus";
                                                                                    minComparisonValue = "dolores";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "inventore";
                                                                                    maxComparisonValue = "qui";
                                                                                    metricName = "ab";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ipsa";
                                                                                    expressions = new String[]() {{
                                                                                        add("odit"),
                                                                                    }};
                                                                                    maxComparisonValue = "repudiandae";
                                                                                    minComparisonValue = "pariatur";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "at";
                                                                                    maxComparisonValue = "consequuntur";
                                                                                    metricName = "libero";
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
                                                    }};
                                                }}),
                                            }};
                                        }};
                                    }};
                                    segmentId = "corrupti";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "eveniet";
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
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "vel";
                                                                                    expressions = new String[]() {{
                                                                                        add("quidem"),
                                                                                        add("et"),
                                                                                        add("nemo"),
                                                                                    }};
                                                                                    maxComparisonValue = "cumque";
                                                                                    minComparisonValue = "ipsam";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "a";
                                                                                    maxComparisonValue = "ullam";
                                                                                    metricName = "dolor";
                                                                                    operator = "BETWEEN";
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
                                                                                    dimensionName = "dolor";
                                                                                    expressions = new String[]() {{
                                                                                        add("consectetur"),
                                                                                    }};
                                                                                    maxComparisonValue = "dolores";
                                                                                    minComparisonValue = "voluptate";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "rerum";
                                                                                    maxComparisonValue = "reiciendis";
                                                                                    metricName = "aut";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "a";
                                                                                    expressions = new String[]() {{
                                                                                        add("veniam"),
                                                                                        add("consequatur"),
                                                                                        add("corporis"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "iure";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "temporibus";
                                                                                    metricName = "consequatur";
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
                                                                                    dimensionName = "saepe";
                                                                                    expressions = new String[]() {{
                                                                                        add("est"),
                                                                                        add("ab"),
                                                                                    }};
                                                                                    maxComparisonValue = "molestias";
                                                                                    minComparisonValue = "molestias";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "animi";
                                                                                    maxComparisonValue = "nesciunt";
                                                                                    metricName = "nihil";
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
                                                                            dimensionName = "pariatur";
                                                                            expressions = new String[]() {{
                                                                                add("doloremque"),
                                                                            }};
                                                                            maxComparisonValue = "architecto";
                                                                            minComparisonValue = "temporibus";
                                                                            operator = "ENDS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rem";
                                                                            maxComparisonValue = "aut";
                                                                            metricName = "voluptate";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "rerum";
                                                                            expressions = new String[]() {{
                                                                                add("eaque"),
                                                                                add("nihil"),
                                                                                add("labore"),
                                                                            }};
                                                                            maxComparisonValue = "minima";
                                                                            minComparisonValue = "iure";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "quia";
                                                                            maxComparisonValue = "molestiae";
                                                                            metricName = "dolor";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "HIT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "pariatur";
                                                                            expressions = new String[]() {{
                                                                                add("sed"),
                                                                                add("aut"),
                                                                            }};
                                                                            maxComparisonValue = "ea";
                                                                            minComparisonValue = "magnam";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "et";
                                                                            maxComparisonValue = "pariatur";
                                                                            metricName = "eum";
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
                                                    }};
                                                }}),
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
                                                                                    dimensionName = "sapiente";
                                                                                    expressions = new String[]() {{
                                                                                        add("incidunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "incidunt";
                                                                                    minComparisonValue = "neque";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "omnis";
                                                                                    maxComparisonValue = "ratione";
                                                                                    metricName = "tempora";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "aut";
                                                                                    expressions = new String[]() {{
                                                                                        add("at"),
                                                                                    }};
                                                                                    maxComparisonValue = "maiores";
                                                                                    minComparisonValue = "rem";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "aliquid";
                                                                                    maxComparisonValue = "iste";
                                                                                    metricName = "at";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("debitis"),
                                                                                        add("in"),
                                                                                        add("at"),
                                                                                    }};
                                                                                    maxComparisonValue = "vero";
                                                                                    minComparisonValue = "quis";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "qui";
                                                                                    maxComparisonValue = "quasi";
                                                                                    metricName = "quis";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "consequuntur";
                                                                                    expressions = new String[]() {{
                                                                                        add("magni"),
                                                                                        add("ipsum"),
                                                                                        add("voluptas"),
                                                                                    }};
                                                                                    maxComparisonValue = "quia";
                                                                                    minComparisonValue = "sit";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "qui";
                                                                                    maxComparisonValue = "assumenda";
                                                                                    metricName = "excepturi";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "corporis";
                                                                                    expressions = new String[]() {{
                                                                                        add("maiores"),
                                                                                        add("quisquam"),
                                                                                        add("animi"),
                                                                                    }};
                                                                                    maxComparisonValue = "minima";
                                                                                    minComparisonValue = "beatae";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "fuga";
                                                                                    metricName = "corporis";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptatem";
                                                                                    expressions = new String[]() {{
                                                                                        add("et"),
                                                                                        add("sunt"),
                                                                                        add("ratione"),
                                                                                    }};
                                                                                    maxComparisonValue = "quidem";
                                                                                    minComparisonValue = "exercitationem";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "incidunt";
                                                                                    maxComparisonValue = "iusto";
                                                                                    metricName = "voluptatibus";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "rerum";
                                                                                    expressions = new String[]() {{
                                                                                        add("aliquam"),
                                                                                        add("non"),
                                                                                        add("quia"),
                                                                                    }};
                                                                                    maxComparisonValue = "est";
                                                                                    minComparisonValue = "velit";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ab";
                                                                                    maxComparisonValue = "consequuntur";
                                                                                    metricName = "commodi";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
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
                                                                                    dimensionName = "aperiam";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptatem"),
                                                                                        add("occaecati"),
                                                                                        add("error"),
                                                                                    }};
                                                                                    maxComparisonValue = "aliquam";
                                                                                    minComparisonValue = "eaque";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "earum";
                                                                                    maxComparisonValue = "voluptatem";
                                                                                    metricName = "impedit";
                                                                                    operator = "EQUAL";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ab";
                                                                                    expressions = new String[]() {{
                                                                                        add("vero"),
                                                                                        add("quae"),
                                                                                        add("fuga"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "neque";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "non";
                                                                                    metricName = "sit";
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
                                                                            dimensionName = "consequuntur";
                                                                            expressions = new String[]() {{
                                                                                add("officia"),
                                                                                add("quidem"),
                                                                                add("quasi"),
                                                                            }};
                                                                            maxComparisonValue = "odit";
                                                                            minComparisonValue = "eligendi";
                                                                            operator = "OPERATOR_UNSPECIFIED";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "omnis";
                                                                            maxComparisonValue = "dicta";
                                                                            metricName = "in";
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
                                                                            dimensionName = "labore";
                                                                            expressions = new String[]() {{
                                                                                add("in"),
                                                                                add("provident"),
                                                                                add("doloribus"),
                                                                            }};
                                                                            maxComparisonValue = "ratione";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "rerum";
                                                                            maxComparisonValue = "possimus";
                                                                            metricName = "quo";
                                                                            operator = "BETWEEN";
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
                                                                matchType = "PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "molestiae";
                                                                                    expressions = new String[]() {{
                                                                                        add("eum"),
                                                                                        add("ducimus"),
                                                                                        add("illo"),
                                                                                    }};
                                                                                    maxComparisonValue = "quas";
                                                                                    minComparisonValue = "in";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "adipisci";
                                                                                    maxComparisonValue = "dolorem";
                                                                                    metricName = "quas";
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
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "blanditiis";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptate"),
                                                                                        add("exercitationem"),
                                                                                        add("et"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "odit";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "aliquid";
                                                                                    metricName = "repellendus";
                                                                                    operator = "EQUAL";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("aut"),
                                                                                        add("cum"),
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "modi";
                                                                                    minComparisonValue = "dolore";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quis";
                                                                                    maxComparisonValue = "in";
                                                                                    metricName = "velit";
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
                                                                                    dimensionName = "assumenda";
                                                                                    expressions = new String[]() {{
                                                                                        add("id"),
                                                                                    }};
                                                                                    maxComparisonValue = "libero";
                                                                                    minComparisonValue = "voluptates";
                                                                                    operator = "EXACT";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sint";
                                                                                    maxComparisonValue = "nostrum";
                                                                                    metricName = "voluptatem";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
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
                                                                            dimensionName = "corrupti";
                                                                            expressions = new String[]() {{
                                                                                add("necessitatibus"),
                                                                            }};
                                                                            maxComparisonValue = "voluptas";
                                                                            minComparisonValue = "quod";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "minima";
                                                                            maxComparisonValue = "eligendi";
                                                                            metricName = "dolorum";
                                                                            operator = "LESS_THAN";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "tenetur";
                                                                            expressions = new String[]() {{
                                                                                add("quam"),
                                                                                add("molestias"),
                                                                            }};
                                                                            maxComparisonValue = "aut";
                                                                            minComparisonValue = "fugiat";
                                                                            operator = "REGEXP";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "ad";
                                                                            maxComparisonValue = "sapiente";
                                                                            metricName = "officiis";
                                                                            operator = "LESS_THAN";
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
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("exercitationem"),
                                                                                        add("deserunt"),
                                                                                    }};
                                                                                    maxComparisonValue = "ex";
                                                                                    minComparisonValue = "est";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "harum";
                                                                                    maxComparisonValue = "magnam";
                                                                                    metricName = "earum";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "in";
                                                                                    expressions = new String[]() {{
                                                                                        add("neque"),
                                                                                        add("sint"),
                                                                                    }};
                                                                                    maxComparisonValue = "non";
                                                                                    minComparisonValue = "qui";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "in";
                                                                                    maxComparisonValue = "dolore";
                                                                                    metricName = "quas";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
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
                                                                                    dimensionName = "accusantium";
                                                                                    expressions = new String[]() {{
                                                                                        add("doloremque"),
                                                                                        add("et"),
                                                                                        add("perspiciatis"),
                                                                                    }};
                                                                                    maxComparisonValue = "suscipit";
                                                                                    minComparisonValue = "inventore";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "soluta";
                                                                                    maxComparisonValue = "ut";
                                                                                    metricName = "ullam";
                                                                                    operator = "EQUAL";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "dolor";
                                                                                    expressions = new String[]() {{
                                                                                        add("ipsam"),
                                                                                    }};
                                                                                    maxComparisonValue = "sed";
                                                                                    minComparisonValue = "nihil";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quisquam";
                                                                                    maxComparisonValue = "expedita";
                                                                                    metricName = "et";
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
                                                                                    dimensionName = "vitae";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptatem"),
                                                                                        add("dolor"),
                                                                                    }};
                                                                                    maxComparisonValue = "expedita";
                                                                                    minComparisonValue = "ea";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "ratione";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "sed";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "molestiae";
                                                                                    expressions = new String[]() {{
                                                                                        add("impedit"),
                                                                                        add("debitis"),
                                                                                    }};
                                                                                    maxComparisonValue = "quae";
                                                                                    minComparisonValue = "rerum";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "corrupti";
                                                                                    maxComparisonValue = "excepturi";
                                                                                    metricName = "et";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "voluptatem";
                                                                                    expressions = new String[]() {{
                                                                                        add("rerum"),
                                                                                        add("id"),
                                                                                        add("facilis"),
                                                                                    }};
                                                                                    maxComparisonValue = "cum";
                                                                                    minComparisonValue = "occaecati";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "dicta";
                                                                                    metricName = "ducimus";
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
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolor"),
                                                                                    }};
                                                                                    maxComparisonValue = "sed";
                                                                                    minComparisonValue = "odio";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "harum";
                                                                                    maxComparisonValue = "est";
                                                                                    metricName = "sequi";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quia";
                                                                                    expressions = new String[]() {{
                                                                                        add("cupiditate"),
                                                                                    }};
                                                                                    maxComparisonValue = "natus";
                                                                                    minComparisonValue = "molestiae";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "consectetur";
                                                                                    maxComparisonValue = "iure";
                                                                                    metricName = "sit";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("distinctio"),
                                                                                        add("est"),
                                                                                        add("necessitatibus"),
                                                                                    }};
                                                                                    maxComparisonValue = "ut";
                                                                                    minComparisonValue = "iusto";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "eos";
                                                                                    maxComparisonValue = "perferendis";
                                                                                    metricName = "et";
                                                                                    operator = "GREATER_THAN";
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
                                                                                    dimensionName = "eligendi";
                                                                                    expressions = new String[]() {{
                                                                                        add("ducimus"),
                                                                                        add("vel"),
                                                                                        add("optio"),
                                                                                    }};
                                                                                    maxComparisonValue = "nam";
                                                                                    minComparisonValue = "sunt";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "autem";
                                                                                    maxComparisonValue = "tenetur";
                                                                                    metricName = "rerum";
                                                                                    operator = "LESS_THAN";
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
                                                                                    dimensionName = "asperiores";
                                                                                    expressions = new String[]() {{
                                                                                        add("laboriosam"),
                                                                                        add("reprehenderit"),
                                                                                    }};
                                                                                    maxComparisonValue = "non";
                                                                                    minComparisonValue = "quis";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "mollitia";
                                                                                    maxComparisonValue = "sequi";
                                                                                    metricName = "maxime";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "in";
                                                                                    expressions = new String[]() {{
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
                                                                            dimensionName = "commodi";
                                                                            expressions = new String[]() {{
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
                                                            add(new OrFiltersForSegment() {{
                                                                segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "rerum";
                                                                            expressions = new String[]() {{
                                                                                add("maiores"),
                                                                                add("non"),
                                                                            }};
                                                                            maxComparisonValue = "autem";
                                                                            minComparisonValue = "deleniti";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "amet";
                                                                            maxComparisonValue = "consequuntur";
                                                                            metricName = "amet";
                                                                            operator = "EQUAL";
                                                                            scope = "USER";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "impedit";
                                                                            expressions = new String[]() {{
                                                                                add("iusto"),
                                                                                add("voluptatibus"),
                                                                                add("explicabo"),
                                                                            }};
                                                                            maxComparisonValue = "iure";
                                                                            minComparisonValue = "est";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "in";
                                                                            maxComparisonValue = "est";
                                                                            metricName = "omnis";
                                                                            operator = "UNSPECIFIED_OPERATOR";
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
                                                                            dimensionName = "similique";
                                                                            expressions = new String[]() {{
                                                                                add("sint"),
                                                                            }};
                                                                            maxComparisonValue = "rerum";
                                                                            minComparisonValue = "quibusdam";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "molestiae";
                                                                            maxComparisonValue = "ut";
                                                                            metricName = "qui";
                                                                            operator = "BETWEEN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = true;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "ea";
                                                                            expressions = new String[]() {{
                                                                                add("quia"),
                                                                                add("nisi"),
                                                                            }};
                                                                            maxComparisonValue = "sunt";
                                                                            minComparisonValue = "magni";
                                                                            operator = "BEGINS_WITH";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "sit";
                                                                            maxComparisonValue = "nulla";
                                                                            metricName = "non";
                                                                            operator = "LESS_THAN";
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
                                    segmentId = "eum";
                                }}),
                                add(new Segment() {{
                                    dynamicSegment = new DynamicSegment() {{
                                        name = "sapiente";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "et";
                                                                                    expressions = new String[]() {{
                                                                                        add("impedit"),
                                                                                        add("quas"),
                                                                                    }};
                                                                                    maxComparisonValue = "impedit";
                                                                                    minComparisonValue = "voluptas";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "rerum";
                                                                                    maxComparisonValue = "aut";
                                                                                    metricName = "qui";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ducimus";
                                                                                    expressions = new String[]() {{
                                                                                        add("excepturi"),
                                                                                        add("sit"),
                                                                                    }};
                                                                                    maxComparisonValue = "porro";
                                                                                    minComparisonValue = "omnis";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "adipisci";
                                                                                    maxComparisonValue = "aut";
                                                                                    metricName = "porro";
                                                                                    operator = "EQUAL";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "quia";
                                                                                    expressions = new String[]() {{
                                                                                        add("recusandae"),
                                                                                        add("corporis"),
                                                                                        add("ut"),
                                                                                    }};
                                                                                    maxComparisonValue = "qui";
                                                                                    minComparisonValue = "aut";
                                                                                    operator = "OPERATOR_UNSPECIFIED";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "maiores";
                                                                                    maxComparisonValue = "rerum";
                                                                                    metricName = "pariatur";
                                                                                    operator = "BETWEEN";
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
                                                                                    dimensionName = "atque";
                                                                                    expressions = new String[]() {{
                                                                                        add("maxime"),
                                                                                        add("pariatur"),
                                                                                        add("amet"),
                                                                                    }};
                                                                                    maxComparisonValue = "cupiditate";
                                                                                    minComparisonValue = "hic";
                                                                                    operator = "PARTIAL";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "voluptatem";
                                                                                    maxComparisonValue = "nostrum";
                                                                                    metricName = "aut";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = true;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "eveniet";
                                                                                    expressions = new String[]() {{
                                                                                        add("voluptas"),
                                                                                        add("sit"),
                                                                                        add("nulla"),
                                                                                    }};
                                                                                    maxComparisonValue = "veritatis";
                                                                                    minComparisonValue = "inventore";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "iure";
                                                                                    maxComparisonValue = "sed";
                                                                                    metricName = "dolores";
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
                                                                                    dimensionName = "doloremque";
                                                                                    expressions = new String[]() {{
                                                                                        add("velit"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "NUMERIC_LESS_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "est";
                                                                                    maxComparisonValue = "dolorem";
                                                                                    metricName = "nulla";
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
                                                                                    dimensionName = "qui";
                                                                                    expressions = new String[]() {{
                                                                                        add("culpa"),
                                                                                        add("voluptatibus"),
                                                                                    }};
                                                                                    maxComparisonValue = "consequuntur";
                                                                                    minComparisonValue = "sapiente";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "fuga";
                                                                                    metricName = "distinctio";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "SESSION";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "pariatur";
                                                                                    expressions = new String[]() {{
                                                                                        add("molestiae"),
                                                                                        add("soluta"),
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "aut";
                                                                                    minComparisonValue = "et";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "architecto";
                                                                                    metricName = "ab";
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
                                                                                    dimensionName = "tempore";
                                                                                    expressions = new String[]() {{
                                                                                        add("explicabo"),
                                                                                        add("aut"),
                                                                                    }};
                                                                                    maxComparisonValue = "sequi";
                                                                                    minComparisonValue = "eum";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "sed";
                                                                                    maxComparisonValue = "sunt";
                                                                                    metricName = "ea";
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
                                                                            dimensionName = "ut";
                                                                            expressions = new String[]() {{
                                                                                add("deserunt"),
                                                                                add("ut"),
                                                                            }};
                                                                            maxComparisonValue = "in";
                                                                            minComparisonValue = "maiores";
                                                                            operator = "PARTIAL";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "qui";
                                                                            maxComparisonValue = "expedita";
                                                                            metricName = "cupiditate";
                                                                            operator = "GREATER_THAN";
                                                                            scope = "SESSION";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = false;
                                                                            dimensionName = "laboriosam";
                                                                            expressions = new String[]() {{
                                                                                add("architecto"),
                                                                                add("voluptatem"),
                                                                            }};
                                                                            maxComparisonValue = "quia";
                                                                            minComparisonValue = "voluptas";
                                                                            operator = "NUMERIC_BETWEEN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "error";
                                                                            maxComparisonValue = "exercitationem";
                                                                            metricName = "quisquam";
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
                                                                matchType = "IMMEDIATELY_PRECEDES";
                                                                orFiltersForSegment = new openapisdk.models.shared.OrFiltersForSegment[]() {{
                                                                    add(new OrFiltersForSegment() {{
                                                                        segmentFilterClauses = new openapisdk.models.shared.SegmentFilterClause[]() {{
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "voluptas";
                                                                                    expressions = new String[]() {{
                                                                                        add("quia"),
                                                                                        add("facere"),
                                                                                        add("sed"),
                                                                                    }};
                                                                                    maxComparisonValue = "accusantium";
                                                                                    minComparisonValue = "repellat";
                                                                                    operator = "BEGINS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quo";
                                                                                    maxComparisonValue = "vero";
                                                                                    metricName = "incidunt";
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
                                                                                    dimensionName = "dolore";
                                                                                    expressions = new String[]() {{
                                                                                        add("qui"),
                                                                                    }};
                                                                                    maxComparisonValue = "omnis";
                                                                                    minComparisonValue = "modi";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "dolor";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "ea";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "ut";
                                                                                    expressions = new String[]() {{
                                                                                        add("molestias"),
                                                                                        add("fuga"),
                                                                                    }};
                                                                                    maxComparisonValue = "accusamus";
                                                                                    minComparisonValue = "quisquam";
                                                                                    operator = "REGEXP";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "recusandae";
                                                                                    maxComparisonValue = "error";
                                                                                    metricName = "hic";
                                                                                    operator = "LESS_THAN";
                                                                                    scope = "PRODUCT";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "reiciendis";
                                                                                    expressions = new String[]() {{
                                                                                        add("modi"),
                                                                                        add("cum"),
                                                                                        add("similique"),
                                                                                    }};
                                                                                    maxComparisonValue = "voluptatibus";
                                                                                    minComparisonValue = "quisquam";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "autem";
                                                                                    maxComparisonValue = "molestias";
                                                                                    metricName = "in";
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
                                                                                    dimensionName = "dicta";
                                                                                    expressions = new String[]() {{
                                                                                        add("numquam"),
                                                                                    }};
                                                                                    maxComparisonValue = "et";
                                                                                    minComparisonValue = "ducimus";
                                                                                    operator = "NUMERIC_BETWEEN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "nisi";
                                                                                    maxComparisonValue = "et";
                                                                                    metricName = "nam";
                                                                                    operator = "GREATER_THAN";
                                                                                    scope = "USER";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "facere";
                                                                                    expressions = new String[]() {{
                                                                                        add("illo"),
                                                                                    }};
                                                                                    maxComparisonValue = "tempore";
                                                                                    minComparisonValue = "velit";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "quidem";
                                                                                    maxComparisonValue = "fuga";
                                                                                    metricName = "officiis";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
                                                                                    scope = "HIT";
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
                                                                                    dimensionName = "recusandae";
                                                                                    expressions = new String[]() {{
                                                                                        add("iusto"),
                                                                                        add("assumenda"),
                                                                                        add("iusto"),
                                                                                    }};
                                                                                    maxComparisonValue = "distinctio";
                                                                                    minComparisonValue = "ut";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "expedita";
                                                                                    maxComparisonValue = "repellendus";
                                                                                    metricName = "commodi";
                                                                                    operator = "UNSPECIFIED_OPERATOR";
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
                                                                                    caseSensitive = false;
                                                                                    dimensionName = "soluta";
                                                                                    expressions = new String[]() {{
                                                                                        add("vel"),
                                                                                        add("aut"),
                                                                                        add("accusamus"),
                                                                                    }};
                                                                                    maxComparisonValue = "ex";
                                                                                    minComparisonValue = "quisquam";
                                                                                    operator = "ENDS_WITH";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "et";
                                                                                    maxComparisonValue = "deleniti";
                                                                                    metricName = "minima";
                                                                                    operator = "BETWEEN";
                                                                                    scope = "UNSPECIFIED_SCOPE";
                                                                                }};
                                                                                not = false;
                                                                            }}),
                                                                            add(new SegmentFilterClause() {{
                                                                                dimensionFilter = new SegmentDimensionFilter() {{
                                                                                    caseSensitive = true;
                                                                                    dimensionName = "magni";
                                                                                    expressions = new String[]() {{
                                                                                        add("ipsa"),
                                                                                        add("explicabo"),
                                                                                        add("quod"),
                                                                                    }};
                                                                                    maxComparisonValue = "corporis";
                                                                                    minComparisonValue = "modi";
                                                                                    operator = "IN_LIST";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "odio";
                                                                                    maxComparisonValue = "expedita";
                                                                                    metricName = "aliquid";
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
                                                                                    dimensionName = "suscipit";
                                                                                    expressions = new String[]() {{
                                                                                        add("dolor"),
                                                                                        add("ipsa"),
                                                                                    }};
                                                                                    maxComparisonValue = "quos";
                                                                                    minComparisonValue = "voluptas";
                                                                                    operator = "NUMERIC_GREATER_THAN";
                                                                                }};
                                                                                metricFilter = new SegmentMetricFilter() {{
                                                                                    comparisonValue = "a";
                                                                                    maxComparisonValue = "iusto";
                                                                                    metricName = "et";
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
                                                                            dimensionName = "omnis";
                                                                            expressions = new String[]() {{
                                                                                add("expedita"),
                                                                                add("enim"),
                                                                                add("quo"),
                                                                            }};
                                                                            maxComparisonValue = "consectetur";
                                                                            minComparisonValue = "sequi";
                                                                            operator = "NUMERIC_LESS_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "illo";
                                                                            maxComparisonValue = "enim";
                                                                            metricName = "et";
                                                                            operator = "EQUAL";
                                                                            scope = "PRODUCT";
                                                                        }};
                                                                        not = false;
                                                                    }}),
                                                                    add(new SegmentFilterClause() {{
                                                                        dimensionFilter = new SegmentDimensionFilter() {{
                                                                            caseSensitive = true;
                                                                            dimensionName = "est";
                                                                            expressions = new String[]() {{
                                                                                add("quo"),
                                                                                add("rerum"),
                                                                            }};
                                                                            maxComparisonValue = "error";
                                                                            minComparisonValue = "suscipit";
                                                                            operator = "EXACT";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "minus";
                                                                            maxComparisonValue = "ullam";
                                                                            metricName = "vero";
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
                                                                            dimensionName = "nobis";
                                                                            expressions = new String[]() {{
                                                                                add("est"),
                                                                            }};
                                                                            maxComparisonValue = "in";
                                                                            minComparisonValue = "maiores";
                                                                            operator = "NUMERIC_GREATER_THAN";
                                                                        }};
                                                                        metricFilter = new SegmentMetricFilter() {{
                                                                            comparisonValue = "repellendus";
                                                                            maxComparisonValue = "error";
                                                                            metricName = "ea";
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
                                    }};
                                    segmentId = "aut";
                                }}),
                            }};
                            viewId = "nam";
                        }}),
                    }};
                    useResourceQuotas = true;
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
