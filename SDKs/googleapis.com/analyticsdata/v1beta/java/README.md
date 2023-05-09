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
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchRunPivotReportsRequest;
import org.openapis.openapi.models.shared.BetweenFilter;
import org.openapis.openapi.models.shared.CaseExpression;
import org.openapis.openapi.models.shared.Cohort;
import org.openapis.openapi.models.shared.CohortReportSettings;
import org.openapis.openapi.models.shared.CohortSpec;
import org.openapis.openapi.models.shared.CohortsRange;
import org.openapis.openapi.models.shared.CohortsRangeGranularityEnum;
import org.openapis.openapi.models.shared.ConcatenateExpression;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.DimensionExpression;
import org.openapis.openapi.models.shared.DimensionOrderBy;
import org.openapis.openapi.models.shared.DimensionOrderByOrderTypeEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterExpression;
import org.openapis.openapi.models.shared.FilterExpressionList;
import org.openapis.openapi.models.shared.InListFilter;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.MetricOrderBy;
import org.openapis.openapi.models.shared.NumericFilter;
import org.openapis.openapi.models.shared.NumericFilterOperationEnum;
import org.openapis.openapi.models.shared.NumericValue;
import org.openapis.openapi.models.shared.OrderBy;
import org.openapis.openapi.models.shared.Pivot;
import org.openapis.openapi.models.shared.PivotMetricAggregationsEnum;
import org.openapis.openapi.models.shared.PivotOrderBy;
import org.openapis.openapi.models.shared.PivotSelection;
import org.openapis.openapi.models.shared.RunPivotReportRequest;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesBatchRunPivotReportsRequest req = new AnalyticsdataPropertiesBatchRunPivotReportsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
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
                                            endDate = "unde";
                                            name = "Johnnie Stamm";
                                            startDate = "deserunt";
                                        }};
                                        dimension = "suscipit";
                                        name = "Dr. Valerie Toy";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "suscipit";
                                            name = "Alexandra Schulist";
                                            startDate = "excepturi";
                                        }};
                                        dimension = "nisi";
                                        name = "Jake Bernier MD";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "perferendis";
                                            name = "Estelle Will";
                                            startDate = "at";
                                        }};
                                        dimension = "at";
                                        name = "Javier Schmidt";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "totam";
                                            name = "Omar Carroll";
                                            startDate = "occaecati";
                                        }};
                                        dimension = "fugit";
                                        name = "Irvin Rosenbaum III";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 473600;
                                    granularity = CohortsRangeGranularityEnum.DAILY;
                                    startOffset = 186332;
                                }};
                            }};
                            currencyCode = "impedit";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "esse";
                                    name = "Mrs. Miriam Collier";
                                    startDate = "sed";
                                }}),
                                add(new DateRange() {{
                                    endDate = "iste";
                                    name = "Faye Howe";
                                    startDate = "fuga";
                                }}),
                                add(new DateRange() {{
                                    endDate = "in";
                                    name = "Sheryl Kertzmann";
                                    startDate = "architecto";
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
                                            doubleValue = 9698.1;
                                            int64Value = "est";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 6531.4;
                                            int64Value = "laborum";
                                        }};
                                    }};
                                    fieldName = "dolores";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("corporis"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                        value = new NumericValue() {{
                                            doubleValue = 7506.86;
                                            int64Value = "enim";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.CONTAINS;
                                        value = "nemo";
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
                            dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "accusantium";
                                            dimensionNames = new String[]{{
                                                add("culpa"),
                                                add("doloribus"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "sapiente";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "architecto";
                                        }};
                                    }};
                                    name = "Mike Nicolas";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "mollitia";
                                            dimensionNames = new String[]{{
                                                add("numquam"),
                                                add("commodi"),
                                                add("quam"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "molestiae";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "velit";
                                        }};
                                    }};
                                    name = "Miss Eugene Hauck";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "enim";
                                            dimensionNames = new String[]{{
                                                add("quo"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "sequi";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "tenetur";
                                        }};
                                    }};
                                    name = "Mr. Alberta Schuster";
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
                                            doubleValue = 6736.6;
                                            int64Value = "quasi";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 9719.45;
                                            int64Value = "voluptatibus";
                                        }};
                                    }};
                                    fieldName = "vero";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                        value = new NumericValue() {{
                                            doubleValue = 6048.46;
                                            int64Value = "voluptate";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.FULL_REGEXP;
                                        value = "perferendis";
                                    }};
                                }};
                                notExpression = new FilterExpression() {{}};
                                orGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                            }};
                            metrics = new org.openapis.openapi.models.shared.Metric[]{{
                                add(new Metric() {{
                                    expression = "ut";
                                    invisible = false;
                                    name = "Willie Hessel";
                                }}),
                                add(new Metric() {{
                                    expression = "dicta";
                                    invisible = false;
                                    name = "Bill Thompson";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("quidem"),
                                    }};
                                    limit = "molestias";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                        add(PivotMetricAggregationsEnum.MINIMUM),
                                    }};
                                    offset = "rem";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "quasi";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "sint";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "veritatis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "incidunt";
                                                        dimensionValue = "enim";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "consequatur";
                                                        dimensionValue = "est";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quibusdam";
                                                        dimensionValue = "explicabo";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "deserunt";
                                                        dimensionValue = "distinctio";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "quibusdam";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "modi";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "qui";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "cupiditate";
                                                        dimensionValue = "quos";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "perferendis";
                                                        dimensionValue = "magni";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "assumenda";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "alias";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "fugit";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "excepturi";
                                                        dimensionValue = "tempora";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "facilis";
                                                        dimensionValue = "tempore";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "labore";
                                                        dimensionValue = "delectus";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "eum";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eligendi";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "sint";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "provident";
                                                        dimensionValue = "necessitatibus";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sint";
                                                        dimensionValue = "officia";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "dolor";
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
                                            endDate = "a";
                                            name = "Arnold Kirlin";
                                            startDate = "rerum";
                                        }};
                                        dimension = "dicta";
                                        name = "Blanca Schulist";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "laborum";
                                            name = "Alfred McClure";
                                            startDate = "delectus";
                                        }};
                                        dimension = "quidem";
                                        name = "Marco Olson";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "sapiente";
                                            name = "Sandy Huels";
                                            startDate = "omnis";
                                        }};
                                        dimension = "molestiae";
                                        name = "Marcia Gutkowski";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "labore";
                                            name = "Laurie Mosciski";
                                            startDate = "vero";
                                        }};
                                        dimension = "aspernatur";
                                        name = "Danielle Bosco";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 590873;
                                    granularity = CohortsRangeGranularityEnum.WEEKLY;
                                    startOffset = 574325;
                                }};
                            }};
                            currencyCode = "accusantium";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "reiciendis";
                                    name = "Tommy Kemmer";
                                    startDate = "odit";
                                }}),
                                add(new DateRange() {{
                                    endDate = "nemo";
                                    name = "Vera Wyman";
                                    startDate = "maxime";
                                }}),
                                add(new DateRange() {{
                                    endDate = "deleniti";
                                    name = "Dr. Arnold Bradtke";
                                    startDate = "expedita";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 9988.48;
                                            int64Value = "quibusdam";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 1494.48;
                                            int64Value = "saepe";
                                        }};
                                    }};
                                    fieldName = "pariatur";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("consequuntur"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN_OR_EQUAL;
                                        value = new NumericValue() {{
                                            doubleValue = 6155.6;
                                            int64Value = "magni";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "quo";
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
                                            delimiter = "maxime";
                                            dimensionNames = new String[]{{
                                                add("excepturi"),
                                                add("odit"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "ea";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "accusantium";
                                        }};
                                    }};
                                    name = "Ebony Predovic";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "autem";
                                            dimensionNames = new String[]{{
                                                add("eaque"),
                                                add("pariatur"),
                                                add("nemo"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "voluptatibus";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "perferendis";
                                        }};
                                    }};
                                    name = "Vincent Anderson";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "hic";
                                            dimensionNames = new String[]{{
                                                add("nobis"),
                                                add("dolores"),
                                                add("quis"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "totam";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "dignissimos";
                                        }};
                                    }};
                                    name = "Beatrice Dooley Sr.";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "minus";
                                            dimensionNames = new String[]{{
                                                add("dolor"),
                                                add("vero"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "nostrum";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "hic";
                                        }};
                                    }};
                                    name = "Alejandro Purdy DDS";
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
                                            doubleValue = 5000.26;
                                            int64Value = "error";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 503.7;
                                            int64Value = "occaecati";
                                        }};
                                    }};
                                    fieldName = "rerum";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.GREATER_THAN_OR_EQUAL;
                                        value = new NumericValue() {{
                                            doubleValue = 2672.62;
                                            int64Value = "iste";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.CONTAINS;
                                        value = "deleniti";
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
                                    expression = "nobis";
                                    invisible = false;
                                    name = "Toby Hahn";
                                }}),
                                add(new Metric() {{
                                    expression = "dolorem";
                                    invisible = false;
                                    name = "Rosa Dibbert";
                                }}),
                                add(new Metric() {{
                                    expression = "excepturi";
                                    invisible = false;
                                    name = "Adrian Kuhn";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("veritatis"),
                                        add("ipsa"),
                                    }};
                                    limit = "ipsa";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MINIMUM),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                    }};
                                    offset = "accusamus";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "voluptatibus";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "natus";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "eos";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sit";
                                                        dimensionValue = "fugiat";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ab";
                                                        dimensionValue = "soluta";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolorum";
                                                        dimensionValue = "iusto";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "voluptate";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "deleniti";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "omnis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "distinctio";
                                                        dimensionValue = "asperiores";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nihil";
                                                        dimensionValue = "ipsum";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "voluptate";
                                                        dimensionValue = "id";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "saepe";
                                                        dimensionValue = "eius";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "aspernatur";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "amet";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "optio";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ad";
                                                        dimensionValue = "saepe";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "suscipit";
                                                        dimensionValue = "deserunt";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "provident";
                                                        dimensionValue = "minima";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "repellendus";
                                                        dimensionValue = "totam";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("alias"),
                                        add("at"),
                                        add("quaerat"),
                                    }};
                                    limit = "tempora";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                        add(PivotMetricAggregationsEnum.COUNT),
                                    }};
                                    offset = "qui";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "a";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "harum";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "iusto";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quisquam";
                                                        dimensionValue = "tenetur";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "amet";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "accusamus";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "numquam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolorem";
                                                        dimensionValue = "sapiente";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "totam";
                                                        dimensionValue = "nihil";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "sit";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "neque";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "sed";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "libero";
                                                        dimensionValue = "voluptas";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "deserunt";
                                                        dimensionValue = "quam";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("incidunt"),
                                    }};
                                    limit = "qui";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                    }};
                                    offset = "dicta";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "totam";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "aspernatur";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "dolores";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "facilis";
                                                        dimensionValue = "aliquid";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quam";
                                                        dimensionValue = "molestias";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "temporibus";
                                                        dimensionValue = "qui";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "neque";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "magni";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "odio";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ullam";
                                                        dimensionValue = "nam";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "hic";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "cumque";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "soluta";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "et";
                                                        dimensionValue = "saepe";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ipsum";
                                                        dimensionValue = "veritatis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nobis";
                                                        dimensionValue = "quos";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "tempore";
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
                                            endDate = "aperiam";
                                            name = "Mike Greenholt";
                                            startDate = "dolorum";
                                        }};
                                        dimension = "architecto";
                                        name = "Margaret Luettgen MD";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "repellendus";
                                            name = "Domingo Grady";
                                            startDate = "qui";
                                        }};
                                        dimension = "quae";
                                        name = "Darren McClure";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "vero";
                                            name = "Tim Erdman";
                                            startDate = "consectetur";
                                        }};
                                        dimension = "vero";
                                        name = "Julio Weissnat";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 486160;
                                    granularity = CohortsRangeGranularityEnum.WEEKLY;
                                    startOffset = 708548;
                                }};
                            }};
                            currencyCode = "vero";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "dolore";
                                    name = "Gilberto Dickinson";
                                    startDate = "aut";
                                }}),
                                add(new DateRange() {{
                                    endDate = "voluptatibus";
                                    name = "Freda Cormier";
                                    startDate = "doloribus";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
                                andGroup = new FilterExpressionList() {{
                                    expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                        add(new FilterExpression() {{}}),
                                        add(new FilterExpression() {{}}),
                                    }};
                                }};
                                filter = new Filter() {{
                                    betweenFilter = new BetweenFilter() {{
                                        fromValue = new NumericValue() {{
                                            doubleValue = 7535.7;
                                            int64Value = "ducimus";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 40.48;
                                            int64Value = "officia";
                                        }};
                                    }};
                                    fieldName = "tempora";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("ea"),
                                            add("aspernatur"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN;
                                        value = new NumericValue() {{
                                            doubleValue = 8221.18;
                                            int64Value = "magnam";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.EXACT;
                                        value = "ex";
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
                            dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "dolor";
                                            dimensionNames = new String[]{{
                                                add("quasi"),
                                                add("ex"),
                                                add("nulla"),
                                                add("excepturi"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "voluptatibus";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "nostrum";
                                        }};
                                    }};
                                    name = "Devin Ullrich";
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
                                            doubleValue = 3331.45;
                                            int64Value = "aliquid";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 811.01;
                                            int64Value = "magnam";
                                        }};
                                    }};
                                    fieldName = "ea";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("consectetur"),
                                            add("recusandae"),
                                            add("aspernatur"),
                                            add("minima"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                        value = new NumericValue() {{
                                            doubleValue = 9528.71;
                                            int64Value = "libero";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "aut";
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
                                    expression = "aliquam";
                                    invisible = false;
                                    name = "Eloise Block MD";
                                }}),
                                add(new Metric() {{
                                    expression = "laborum";
                                    invisible = false;
                                    name = "Lee Kemmer";
                                }}),
                                add(new Metric() {{
                                    expression = "quas";
                                    invisible = false;
                                    name = "Drew Hoeger I";
                                }}),
                                add(new Metric() {{
                                    expression = "numquam";
                                    invisible = false;
                                    name = "Ramona Bednar";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("esse"),
                                        add("esse"),
                                    }};
                                    limit = "rem";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MINIMUM),
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                        add(PivotMetricAggregationsEnum.COUNT),
                                    }};
                                    offset = "ut";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "suscipit";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eos";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "praesentium";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "veritatis";
                                                        dimensionValue = "ipsa";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "id";
                                                        dimensionValue = "quidem";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "neque";
                                                        dimensionValue = "quo";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "illum";
                                                        dimensionValue = "quo";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "fuga";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eos";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "voluptas";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "cupiditate";
                                                        dimensionValue = "consequatur";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("debitis"),
                                        add("ipsam"),
                                    }};
                                    limit = "aspernatur";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                    }};
                                    offset = "esse";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "aperiam";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "quod";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "dignissimos";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nihil";
                                                        dimensionValue = "totam";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "accusamus";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "odio";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "occaecati";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sapiente";
                                                        dimensionValue = "dolores";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "deserunt";
                                                        dimensionValue = "molestiae";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "accusantium";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eum";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "quas";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "consequuntur";
                                                        dimensionValue = "deleniti";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "fugit";
                                                        dimensionValue = "fuga";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "mollitia";
                                                        dimensionValue = "incidunt";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "atque";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "minima";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "nisi";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sapiente";
                                                        dimensionValue = "consequuntur";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "ratione";
                            returnPropertyQuota = false;
                        }}),
                    }};
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "atque";
                key = "et";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "accusamus";
                uploadProtocol = "veritatis";
            }};            

            AnalyticsdataPropertiesBatchRunPivotReportsResponse res = sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req, new AnalyticsdataPropertiesBatchRunPivotReportsSecurity() {{
                option1 = new AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1("esse", "quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchRunPivotReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [properties](docs/properties/README.md)

* [analyticsdataPropertiesBatchRunPivotReports](docs/properties/README.md#analyticsdatapropertiesbatchrunpivotreports) - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesBatchRunReports](docs/properties/README.md#analyticsdatapropertiesbatchrunreports) - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesCheckCompatibility](docs/properties/README.md#analyticsdatapropertiescheckcompatibility) - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* [analyticsdataPropertiesGetMetadata](docs/properties/README.md#analyticsdatapropertiesgetmetadata) - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* [analyticsdataPropertiesRunPivotReport](docs/properties/README.md#analyticsdatapropertiesrunpivotreport) - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* [analyticsdataPropertiesRunRealtimeReport](docs/properties/README.md#analyticsdatapropertiesrunrealtimereport) - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* [analyticsdataPropertiesRunReport](docs/properties/README.md#analyticsdatapropertiesrunreport) - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
