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

import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchRunPivotReportsRequest;
import org.openapis.openapi.models.shared.RunPivotReportRequest;
import org.openapis.openapi.models.shared.PivotMetricAggregationsEnum;
import org.openapis.openapi.models.shared.Pivot;
import org.openapis.openapi.models.shared.OrderBy;
import org.openapis.openapi.models.shared.PivotOrderBy;
import org.openapis.openapi.models.shared.PivotSelection;
import org.openapis.openapi.models.shared.MetricOrderBy;
import org.openapis.openapi.models.shared.DimensionOrderByOrderTypeEnum;
import org.openapis.openapi.models.shared.DimensionOrderBy;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.FilterExpression;
import org.openapis.openapi.models.shared.FilterExpressionList;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.NumericFilterOperationEnum;
import org.openapis.openapi.models.shared.NumericFilter;
import org.openapis.openapi.models.shared.NumericValue;
import org.openapis.openapi.models.shared.InListFilter;
import org.openapis.openapi.models.shared.BetweenFilter;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.DimensionExpression;
import org.openapis.openapi.models.shared.CaseExpression;
import org.openapis.openapi.models.shared.ConcatenateExpression;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.CohortSpec;
import org.openapis.openapi.models.shared.CohortsRangeGranularityEnum;
import org.openapis.openapi.models.shared.CohortsRange;
import org.openapis.openapi.models.shared.Cohort;
import org.openapis.openapi.models.shared.CohortReportSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesBatchRunPivotReportsRequest req = new AnalyticsdataPropertiesBatchRunPivotReportsRequest() {{
                dollarXgafv = "2";
                batchRunPivotReportsRequest = new BatchRunPivotReportsRequest() {{
                    requests = new org.openapis.openapi.models.shared.RunPivotReportRequest[]{{
                        add(new RunPivotReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "quibusdam";
                                            name = "unde";
                                            startDate = "nulla";
                                        }};
                                        dimension = "corrupti";
                                        name = "illum";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "vel";
                                            name = "error";
                                            startDate = "deserunt";
                                        }};
                                        dimension = "suscipit";
                                        name = "iure";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "magnam";
                                            name = "debitis";
                                            startDate = "ipsa";
                                        }};
                                        dimension = "delectus";
                                        name = "tempora";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 383441;
                                    granularity = "DAILY";
                                    startOffset = 791725;
                                }};
                            }};
                            currencyCode = "placeat";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "iusto";
                                    name = "excepturi";
                                    startDate = "nisi";
                                }}),
                                add(new DateRange() {{
                                    endDate = "recusandae";
                                    name = "temporibus";
                                    startDate = "ab";
                                }}),
                                add(new DateRange() {{
                                    endDate = "quis";
                                    name = "veritatis";
                                    startDate = "deserunt";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 3682.41;
                                            int64Value = "repellendus";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 9571.56;
                                            int64Value = "quo";
                                        }};
                                    }};
                                    fieldName = "odit";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("at"),
                                            add("maiores"),
                                            add("molestiae"),
                                            add("quod"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "GREATER_THAN";
                                        value = new NumericValue() {{
                                            doubleValue = 4614.79;
                                            int64Value = "totam";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "FULL_REGEXP";
                                        value = "dolorum";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "officia";
                                            dimensionNames = new String[]{{
                                                add("fugit"),
                                                add("deleniti"),
                                                add("hic"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "optio";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "totam";
                                        }};
                                    }};
                                    name = "beatae";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "commodi";
                                            dimensionNames = new String[]{{
                                                add("modi"),
                                                add("qui"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "impedit";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "cum";
                                        }};
                                    }};
                                    name = "esse";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "ipsum";
                                            dimensionNames = new String[]{{
                                                add("aspernatur"),
                                                add("perferendis"),
                                                add("ad"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "natus";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "sed";
                                        }};
                                    }};
                                    name = "iste";
                                }}),
                            }};
                            keepEmptyRows = false;
                            metricFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 6169.34;
                                            int64Value = "laboriosam";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 9437.49;
                                            int64Value = "saepe";
                                        }};
                                    }};
                                    fieldName = "fuga";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "LESS_THAN";
                                        value = new NumericValue() {{
                                            doubleValue = 9023.49;
                                            int64Value = "quidem";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "MATCH_TYPE_UNSPECIFIED";
                                        value = "ipsa";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    expression = "mollitia";
                                    invisible = false;
                                    name = "laborum";
                                }}),
                                add(new Metric() {{
                                    expression = "dolores";
                                    invisible = false;
                                    name = "dolorem";
                                }}),
                                add(new Metric() {{
                                    expression = "corporis";
                                    invisible = false;
                                    name = "explicabo";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("omnis"),
                                        add("nemo"),
                                    }};
                                    limit = "minima";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                        add("MINIMUM"),
                                        add("MAXIMUM"),
                                    }};
                                    offset = "doloribus";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "architecto";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "dolorem";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "culpa";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "repellat";
                                                        dimensionValue = "mollitia";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "occaecati";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "commodi";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "quam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "velit";
                                                        dimensionValue = "error";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quia";
                                                        dimensionValue = "quis";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "vitae";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "animi";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "enim";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quo";
                                                        dimensionValue = "sequi";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "tenetur";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "id";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "possimus";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quasi";
                                                        dimensionValue = "error";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("laborum"),
                                        add("quasi"),
                                        add("reiciendis"),
                                        add("voluptatibus"),
                                    }};
                                    limit = "vero";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MINIMUM"),
                                        add("COUNT"),
                                    }};
                                    offset = "ipsa";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "voluptate";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "perferendis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "doloremque";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ut";
                                                        dimensionValue = "maiores";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dicta";
                                                        dimensionValue = "corporis";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "dolore";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "dicta";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "harum";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "accusamus";
                                                        dimensionValue = "commodi";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "repudiandae";
                                                        dimensionValue = "quae";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "ipsum";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "molestias";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "excepturi";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "modi";
                                                        dimensionValue = "praesentium";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "rem";
                                                        dimensionValue = "voluptates";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quasi";
                                                        dimensionValue = "repudiandae";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sint";
                                                        dimensionValue = "veritatis";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("incidunt"),
                                        add("enim"),
                                        add("consequatur"),
                                        add("est"),
                                    }};
                                    limit = "quibusdam";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MAXIMUM"),
                                    }};
                                    offset = "distinctio";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "labore";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "qui";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "aliquid";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quos";
                                                        dimensionValue = "perferendis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "magni";
                                                        dimensionValue = "assumenda";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ipsam";
                                                        dimensionValue = "alias";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "fugit";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "excepturi";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "tempora";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "tempore";
                                                        dimensionValue = "labore";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "delectus";
                                                        dimensionValue = "eum";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "non";
                                                        dimensionValue = "eligendi";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "sint";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "provident";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "necessitatibus";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "officia";
                                                        dimensionValue = "dolor";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "debitis";
                                                        dimensionValue = "a";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolorum";
                                                        dimensionValue = "in";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "in";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "maiores";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "rerum";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "magnam";
                                                        dimensionValue = "cumque";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                        add("accusamus"),
                                    }};
                                    limit = "non";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("TOTAL"),
                                        add("COUNT"),
                                        add("COUNT"),
                                    }};
                                    offset = "quidem";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "nam";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "blanditiis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "deleniti";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "amet";
                                                        dimensionValue = "deserunt";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nisi";
                                                        dimensionValue = "vel";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "natus";
                                                        dimensionValue = "omnis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "molestiae";
                                                        dimensionValue = "perferendis";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "nihil";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "distinctio";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "id";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "labore";
                                                        dimensionValue = "suscipit";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "natus";
                                                        dimensionValue = "nobis";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "eum";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "aspernatur";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "architecto";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "et";
                                                        dimensionValue = "excepturi";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ullam";
                                                        dimensionValue = "provident";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "quos";
                            returnPropertyQuota = false;
                        }}),
                        add(new RunPivotReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "accusantium";
                                            name = "mollitia";
                                            startDate = "reiciendis";
                                        }};
                                        dimension = "mollitia";
                                        name = "ad";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "eum";
                                            name = "dolor";
                                            startDate = "necessitatibus";
                                        }};
                                        dimension = "odit";
                                        name = "nemo";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "quasi";
                                            name = "iure";
                                            startDate = "doloribus";
                                        }};
                                        dimension = "debitis";
                                        name = "eius";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 806194;
                                    granularity = "WEEKLY";
                                    startOffset = 703889;
                                }};
                            }};
                            currencyCode = "in";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "architecto";
                                    name = "repudiandae";
                                    startDate = "ullam";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 4692.49;
                                            int64Value = "repellat";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 8411.4;
                                            int64Value = "sed";
                                        }};
                                    }};
                                    fieldName = "saepe";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("accusantium"),
                                            add("consequuntur"),
                                            add("praesentium"),
                                            add("natus"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 1238.2;
                                            int64Value = "quo";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "FULL_REGEXP";
                                        value = "pariatur";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "excepturi";
                                            dimensionNames = new String[]{{
                                                add("ea"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "accusantium";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "ab";
                                        }};
                                    }};
                                    name = "maiores";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "quidem";
                                            dimensionNames = new String[]{{
                                                add("voluptate"),
                                                add("autem"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "nam";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "eaque";
                                        }};
                                    }};
                                    name = "pariatur";
                                }}),
                            }};
                            keepEmptyRows = false;
                            metricFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 9755.22;
                                            int64Value = "perferendis";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 8558.04;
                                            int64Value = "amet";
                                        }};
                                    }};
                                    fieldName = "aut";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("corporis"),
                                            add("hic"),
                                            add("libero"),
                                            add("nobis"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 3394.04;
                                            int64Value = "totam";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "ENDS_WITH";
                                        value = "eaque";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    expression = "eos";
                                    invisible = false;
                                    name = "perferendis";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("quam"),
                                        add("dolor"),
                                        add("vero"),
                                        add("nostrum"),
                                    }};
                                    limit = "hic";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MAXIMUM"),
                                        add("MAXIMUM"),
                                        add("MINIMUM"),
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                    }};
                                    offset = "porro";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "blanditiis";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eaque";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "occaecati";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "adipisci";
                                                        dimensionValue = "asperiores";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "earum";
                                                        dimensionValue = "modi";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "iste";
                                                        dimensionValue = "dolorum";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "deleniti";
                            returnPropertyQuota = false;
                        }}),
                        add(new RunPivotReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "provident";
                                            name = "nobis";
                                            startDate = "libero";
                                        }};
                                        dimension = "delectus";
                                        name = "quaerat";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "quos";
                                            name = "aliquid";
                                            startDate = "dolorem";
                                        }};
                                        dimension = "dolorem";
                                        name = "dolor";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "qui";
                                            name = "ipsum";
                                            startDate = "hic";
                                        }};
                                        dimension = "excepturi";
                                        name = "cum";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "voluptate";
                                            name = "dignissimos";
                                            startDate = "reiciendis";
                                        }};
                                        dimension = "amet";
                                        name = "dolorum";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 254356;
                                    granularity = "GRANULARITY_UNSPECIFIED";
                                    startOffset = 58029;
                                }};
                            }};
                            currencyCode = "ipsa";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "odio";
                                    name = "quaerat";
                                    startDate = "accusamus";
                                }}),
                                add(new DateRange() {{
                                    endDate = "quidem";
                                    name = "voluptatibus";
                                    startDate = "voluptas";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 1796.03;
                                            int64Value = "atque";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 246.78;
                                            int64Value = "fugiat";
                                        }};
                                    }};
                                    fieldName = "ab";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("dolorum"),
                                            add("iusto"),
                                            add("voluptate"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "GREATER_THAN";
                                        value = new NumericValue() {{
                                            doubleValue = 5365.79;
                                            int64Value = "omnis";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "PARTIAL_REGEXP";
                                        value = "distinctio";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "ipsum";
                                            dimensionNames = new String[]{{
                                                add("id"),
                                                add("saepe"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "eius";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "aspernatur";
                                        }};
                                    }};
                                    name = "perferendis";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "amet";
                                            dimensionNames = new String[]{{
                                                add("accusamus"),
                                                add("ad"),
                                                add("saepe"),
                                                add("suscipit"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "deserunt";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "provident";
                                        }};
                                    }};
                                    name = "minima";
                                }}),
                            }};
                            keepEmptyRows = false;
                            metricFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 5197.11;
                                            int64Value = "similique";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 0.55;
                                            int64Value = "at";
                                        }};
                                    }};
                                    fieldName = "quaerat";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("vel"),
                                            add("quod"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "GREATER_THAN_OR_EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 1856.36;
                                            int64Value = "dolorum";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "PARTIAL_REGEXP";
                                        value = "esse";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    expression = "ipsum";
                                    invisible = false;
                                    name = "quisquam";
                                }}),
                                add(new Metric() {{
                                    expression = "tenetur";
                                    invisible = false;
                                    name = "amet";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("numquam"),
                                        add("enim"),
                                        add("dolorem"),
                                        add("sapiente"),
                                    }};
                                    limit = "totam";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                        add("MAXIMUM"),
                                    }};
                                    offset = "neque";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "vel";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "voluptas";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "deserunt";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ipsum";
                                                        dimensionValue = "incidunt";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "qui";
                                                        dimensionValue = "cupiditate";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("pariatur"),
                                        add("soluta"),
                                        add("dicta"),
                                        add("laborum"),
                                    }};
                                    limit = "totam";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                    }};
                                    offset = "distinctio";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "aliquid";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "molestias";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "temporibus";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "neque";
                                                        dimensionValue = "fugit";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "magni";
                                                orderType = "ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "sunt";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "ullam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "hic";
                                                        dimensionValue = "voluptatem";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "cumque";
                                                        dimensionValue = "soluta";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nobis";
                                                        dimensionValue = "et";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "saepe";
                                                orderType = "ORDER_TYPE_UNSPECIFIED";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "veritatis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "nobis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "tempore";
                                                        dimensionValue = "cupiditate";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "aperiam";
                                                        dimensionValue = "delectus";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolorem";
                                                        dimensionValue = "dolore";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("adipisci"),
                                        add("dolorum"),
                                    }};
                                    limit = "architecto";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                    }};
                                    offset = "quas";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "consequatur";
                                                orderType = "CASE_INSENSITIVE_ALPHANUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "repellendus";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "porro";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ut";
                                                        dimensionValue = "facilis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "cupiditate";
                                                        dimensionValue = "qui";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quae";
                                                        dimensionValue = "laudantium";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "odio";
                                                        dimensionValue = "occaecati";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "voluptatibus";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "vero";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "omnis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ipsum";
                                                        dimensionValue = "delectus";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "voluptate";
                                                        dimensionValue = "consectetur";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "vero";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "dignissimos";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "hic";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quod";
                                                        dimensionValue = "odio";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "similique";
                                                        dimensionValue = "facilis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "vero";
                                                        dimensionValue = "ducimus";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "dolore";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "illum";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "sequi";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "impedit";
                                                        dimensionValue = "aut";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "voluptatibus";
                                                        dimensionValue = "exercitationem";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nulla";
                                                        dimensionValue = "fugit";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "porro";
                            returnPropertyQuota = false;
                        }}),
                    }};
                }};
                accessToken = "maiores";
                alt = "proto";
                callback = "iusto";
                fields = "eligendi";
                key = "ducimus";
                oauthToken = "alias";
                prettyPrint = false;
                property = "officia";
                quotaUser = "tempora";
                uploadType = "ipsam";
                uploadProtocol = "ea";
            }}            

            AnalyticsdataPropertiesBatchRunPivotReportsResponse res = sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req, new AnalyticsdataPropertiesBatchRunPivotReportsSecurity() {{
                option1 = new AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchRunPivotReportsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### properties

* `analyticsdataPropertiesBatchRunPivotReports` - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* `analyticsdataPropertiesBatchRunReports` - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* `analyticsdataPropertiesCheckCompatibility` - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* `analyticsdataPropertiesGetMetadata` - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* `analyticsdataPropertiesRunPivotReport` - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* `analyticsdataPropertiesRunRealtimeReport` - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* `analyticsdataPropertiesRunReport` - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
