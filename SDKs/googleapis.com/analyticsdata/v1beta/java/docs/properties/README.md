# properties

### Available Operations

* [analyticsdataPropertiesBatchRunPivotReports](#analyticsdatapropertiesbatchrunpivotreports) - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesBatchRunReports](#analyticsdatapropertiesbatchrunreports) - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
* [analyticsdataPropertiesCheckCompatibility](#analyticsdatapropertiescheckcompatibility) - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
* [analyticsdataPropertiesGetMetadata](#analyticsdatapropertiesgetmetadata) - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
* [analyticsdataPropertiesRunPivotReport](#analyticsdatapropertiesrunpivotreport) - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
* [analyticsdataPropertiesRunRealtimeReport](#analyticsdatapropertiesrunrealtimereport) - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
* [analyticsdataPropertiesRunReport](#analyticsdatapropertiesrunreport) - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

## analyticsdataPropertiesBatchRunPivotReports

Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.

### Example Usage

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

            AnalyticsdataPropertiesBatchRunPivotReportsRequest req = new AnalyticsdataPropertiesBatchRunPivotReportsRequest("nam") {{
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
                                            endDate = "saepe";
                                            name = "Opal Kozey";
                                            startDate = "minima";
                                        }};
                                        dimension = "distinctio";
                                        name = "Mark Nicolas";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 766964;
                                    granularity = CohortsRangeGranularityEnum.GRANULARITY_UNSPECIFIED;
                                    startOffset = 9766;
                                }};
                            }};
                            currencyCode = "minus";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "sapiente";
                                    name = "Joy Labadie";
                                    startDate = "nulla";
                                }}),
                                add(new DateRange() {{
                                    endDate = "quas";
                                    name = "Joyce Wilderman";
                                    startDate = "pariatur";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
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
                                            doubleValue = 1576.32;
                                            int64Value = "eveniet";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 9924.3;
                                            int64Value = "facere";
                                        }};
                                    }};
                                    fieldName = "veritatis";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("quasi"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN_OR_EQUAL;
                                        value = new NumericValue() {{
                                            doubleValue = 6336.08;
                                            int64Value = "aliquid";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.PARTIAL_REGEXP;
                                        value = "quae";
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
                                            delimiter = "in";
                                            dimensionNames = new String[]{{
                                                add("libero"),
                                                add("illum"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "soluta";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "accusantium";
                                        }};
                                    }};
                                    name = "Miranda Carter";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "ullam";
                                            dimensionNames = new String[]{{
                                                add("aut"),
                                                add("voluptatum"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "qui";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "quibusdam";
                                        }};
                                    }};
                                    name = "Cassandra Ward V";
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
                                            doubleValue = 984.78;
                                            int64Value = "at";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 920.27;
                                            int64Value = "voluptate";
                                        }};
                                    }};
                                    fieldName = "ipsa";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("veritatis"),
                                            add("consectetur"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.EQUAL;
                                        value = new NumericValue() {{
                                            doubleValue = 6144.65;
                                            int64Value = "temporibus";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "rem";
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
                                    expression = "eum";
                                    invisible = false;
                                    name = "Andrew Little I";
                                }}),
                                add(new Metric() {{
                                    expression = "occaecati";
                                    invisible = false;
                                    name = "Leticia Christiansen IV";
                                }}),
                                add(new Metric() {{
                                    expression = "dicta";
                                    invisible = false;
                                    name = "Wendell Frami";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("ea"),
                                    }};
                                    limit = "quaerat";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.COUNT),
                                    }};
                                    offset = "officia";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "dignissimos";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "asperiores";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "nemo";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quaerat";
                                                        dimensionValue = "porro";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "quod";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "ab";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "adipisci";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "id";
                                                        dimensionValue = "suscipit";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "velit";
                                                        dimensionValue = "culpa";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "est";
                                                        dimensionValue = "recusandae";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "totam";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "vel";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "ducimus";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "vel";
                                                        dimensionValue = "labore";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "possimus";
                                                        dimensionValue = "facilis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "cum";
                                                        dimensionValue = "commodi";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "in";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "reiciendis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "assumenda";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "recusandae";
                                                        dimensionValue = "aliquid";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "aperiam";
                                                        dimensionValue = "cum";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("in"),
                                    }};
                                    limit = "exercitationem";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                    }};
                                    offset = "reiciendis";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "saepe";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "dolore";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "sunt";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "adipisci";
                                                        dimensionValue = "non";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "amet";
                                                        dimensionValue = "beatae";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dignissimos";
                                                        dimensionValue = "a";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "debitis";
                                                        dimensionValue = "consectetur";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "corporis";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "laboriosam";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "ipsa";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "libero";
                                                        dimensionValue = "vitae";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "accusamus";
                                                        dimensionValue = "similique";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "tempora";
                                                        dimensionValue = "aspernatur";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "voluptas";
                                                        dimensionValue = "voluptas";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "voluptas";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "nobis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "dolorum";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "minus";
                                                        dimensionValue = "dolores";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("in"),
                                        add("dolore"),
                                        add("aliquam"),
                                    }};
                                    limit = "officiis";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                        add(PivotMetricAggregationsEnum.MINIMUM),
                                    }};
                                    offset = "quas";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "nesciunt";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "corrupti";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "pariatur";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "hic";
                                                        dimensionValue = "exercitationem";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nobis";
                                                        dimensionValue = "sit";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "rerum";
                                                        dimensionValue = "sed";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "reiciendis";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "asperiores";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "facilis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "expedita";
                                                        dimensionValue = "ab";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "iste";
                                                        dimensionValue = "dolore";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "laborum";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "in";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "commodi";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "explicabo";
                                                        dimensionValue = "voluptas";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "unde";
                                                        dimensionValue = "architecto";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "suscipit";
                                                        dimensionValue = "sapiente";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "debitis";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "reiciendis";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "perferendis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "maiores";
                                                        dimensionValue = "incidunt";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sed";
                                                        dimensionValue = "provident";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "eius";
                                                        dimensionValue = "necessitatibus";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("ea"),
                                    }};
                                    limit = "occaecati";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                        add(PivotMetricAggregationsEnum.TOTAL),
                                    }};
                                    offset = "voluptate";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "ex";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "non";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "officiis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "facilis";
                                                        dimensionValue = "quaerat";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "incidunt";
                                                        dimensionValue = "ipsam";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "debitis";
                                                        dimensionValue = "rem";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "sit";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "error";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "veniam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "recusandae";
                                                        dimensionValue = "reiciendis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nulla";
                                                        dimensionValue = "magni";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "aperiam";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "numquam";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "veniam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "officiis";
                                                        dimensionValue = "beatae";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "laudantium";
                                                        dimensionValue = "exercitationem";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "praesentium";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "laboriosam";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "dolorum";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "error";
                                                        dimensionValue = "hic";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "expedita";
                                                        dimensionValue = "debitis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "neque";
                                                        dimensionValue = "dolorum";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "nostrum";
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
                                            endDate = "dolorum";
                                            name = "Caleb Goldner";
                                            startDate = "ut";
                                        }};
                                        dimension = "fugiat";
                                        name = "Cecilia Quitzon IV";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "ipsam";
                                            name = "Nora Lynch";
                                            startDate = "et";
                                        }};
                                        dimension = "blanditiis";
                                        name = "Jane Bailey";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "saepe";
                                            name = "William Gottlieb";
                                            startDate = "harum";
                                        }};
                                        dimension = "dicta";
                                        name = "Violet Greenfelder";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 671957;
                                    granularity = CohortsRangeGranularityEnum.WEEKLY;
                                    startOffset = 948861;
                                }};
                            }};
                            currencyCode = "laboriosam";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "amet";
                                    name = "Karl Miller";
                                    startDate = "repellendus";
                                }}),
                            }};
                            dimensionFilter = new FilterExpression() {{
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
                                            doubleValue = 9147.91;
                                            int64Value = "perferendis";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 6672.85;
                                            int64Value = "quidem";
                                        }};
                                    }};
                                    fieldName = "reprehenderit";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("fuga"),
                                            add("praesentium"),
                                            add("mollitia"),
                                            add("veniam"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                        value = new NumericValue() {{
                                            doubleValue = 7908.4;
                                            int64Value = "repudiandae";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "atque";
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
                                            delimiter = "totam";
                                            dimensionNames = new String[]{{
                                                add("quidem"),
                                                add("maxime"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "et";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "esse";
                                        }};
                                    }};
                                    name = "Angelina Jenkins";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "officiis";
                                            dimensionNames = new String[]{{
                                                add("accusamus"),
                                                add("natus"),
                                                add("minima"),
                                                add("aspernatur"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "ex";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "maiores";
                                        }};
                                    }};
                                    name = "Wilfred Mueller";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "repudiandae";
                                            dimensionNames = new String[]{{
                                                add("atque"),
                                                add("sunt"),
                                                add("recusandae"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "dolorum";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "repellendus";
                                        }};
                                    }};
                                    name = "Lela Baumbach Jr.";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "beatae";
                                            dimensionNames = new String[]{{
                                                add("enim"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "laboriosam";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "velit";
                                        }};
                                    }};
                                    name = "Ross Gusikowski";
                                }}),
                            }};
                            keepEmptyRows = false;
                            metricFilter = new FilterExpression() {{
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
                                            doubleValue = 8863.05;
                                            int64Value = "perspiciatis";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 4463.94;
                                            int64Value = "adipisci";
                                        }};
                                    }};
                                    fieldName = "eveniet";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("consequuntur"),
                                            add("fugit"),
                                            add("id"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN;
                                        value = new NumericValue() {{
                                            doubleValue = 4402.64;
                                            int64Value = "error";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "corporis";
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
                                    expression = "non";
                                    invisible = false;
                                    name = "Ms. Brian Kerluke IV";
                                }}),
                                add(new Metric() {{
                                    expression = "eveniet";
                                    invisible = false;
                                    name = "Karla Kerluke";
                                }}),
                                add(new Metric() {{
                                    expression = "laborum";
                                    invisible = false;
                                    name = "Ken Ledner";
                                }}),
                                add(new Metric() {{
                                    expression = "repellat";
                                    invisible = false;
                                    name = "Renee Metz";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("maiores"),
                                    }};
                                    limit = "reiciendis";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                    }};
                                    offset = "minima";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "dolorum";
                                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "quae";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "recusandae";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quaerat";
                                                        dimensionValue = "molestiae";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "ex";
                                                        dimensionValue = "ut";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "culpa";
                                                        dimensionValue = "adipisci";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "debitis";
                                                orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "eum";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "nemo";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "esse";
                                                        dimensionValue = "provident";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "quis";
                                                        dimensionValue = "eum";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "reiciendis";
                                                        dimensionValue = "provident";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "aspernatur";
                                                        dimensionValue = "ullam";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("animi"),
                                    }};
                                    limit = "nostrum";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add(PivotMetricAggregationsEnum.MINIMUM),
                                        add(PivotMetricAggregationsEnum.COUNT),
                                        add(PivotMetricAggregationsEnum.MAXIMUM),
                                    }};
                                    offset = "ex";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "accusantium";
                                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "doloribus";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "ullam";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "nam";
                                                        dimensionValue = "earum";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "officia";
                                                        dimensionValue = "laborum";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "placeat";
                                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "voluptatibus";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "molestias";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sapiente";
                                                        dimensionValue = "cumque";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "vitae";
                                                        dimensionValue = "rerum";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "tempora";
                                                        dimensionValue = "quis";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "inventore";
                                                        dimensionValue = "fugit";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "cumque";
                            returnPropertyQuota = false;
                        }}),
                    }};
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "aspernatur";
                key = "eum";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "at";
                uploadProtocol = "impedit";
            }};            

            AnalyticsdataPropertiesBatchRunPivotReportsResponse res = sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req, new AnalyticsdataPropertiesBatchRunPivotReportsSecurity() {{
                option1 = new AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1("eos", "sapiente") {{
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

## analyticsdataPropertiesBatchRunReports

Returns multiple reports in a batch. All reports must be for the same GA4 Property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunReportsRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunReportsResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunReportsSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunReportsSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunReportsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchRunReportsRequest;
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
import org.openapis.openapi.models.shared.PivotOrderBy;
import org.openapis.openapi.models.shared.PivotSelection;
import org.openapis.openapi.models.shared.RunReportRequest;
import org.openapis.openapi.models.shared.RunReportRequestMetricAggregationsEnum;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesBatchRunReportsRequest req = new AnalyticsdataPropertiesBatchRunReportsRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                batchRunReportsRequest = new BatchRunReportsRequest() {{
                    requests = new org.openapis.openapi.models.shared.RunReportRequest[]{{
                        add(new RunReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "cupiditate";
                                            name = "Darin Rodriguez";
                                            startDate = "eaque";
                                        }};
                                        dimension = "earum";
                                        name = "Cary Toy";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 380335;
                                    granularity = CohortsRangeGranularityEnum.GRANULARITY_UNSPECIFIED;
                                    startOffset = 147808;
                                }};
                            }};
                            currencyCode = "cumque";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "ratione";
                                    name = "Mr. Santiago Stoltenberg IV";
                                    startDate = "natus";
                                }}),
                                add(new DateRange() {{
                                    endDate = "occaecati";
                                    name = "Josephine Boyer";
                                    startDate = "nulla";
                                }}),
                                add(new DateRange() {{
                                    endDate = "necessitatibus";
                                    name = "Anita Kovacek IV";
                                    startDate = "esse";
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
                                            doubleValue = 9799.63;
                                            int64Value = "reiciendis";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 4237.06;
                                            int64Value = "architecto";
                                        }};
                                    }};
                                    fieldName = "fugiat";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("dicta"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN;
                                        value = new NumericValue() {{
                                            doubleValue = 2712.52;
                                            int64Value = "esse";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.BEGINS_WITH;
                                        value = "consectetur";
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
                                            delimiter = "laborum";
                                            dimensionNames = new String[]{{
                                                add("nostrum"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "fugiat";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "expedita";
                                        }};
                                    }};
                                    name = "Brandi Homenick III";
                                }}),
                            }};
                            keepEmptyRows = false;
                            limit = "voluptas";
                            metricAggregations = new org.openapis.openapi.models.shared.RunReportRequestMetricAggregationsEnum[]{{
                                add(RunReportRequestMetricAggregationsEnum.MAXIMUM),
                                add(RunReportRequestMetricAggregationsEnum.METRIC_AGGREGATION_UNSPECIFIED),
                                add(RunReportRequestMetricAggregationsEnum.MAXIMUM),
                            }};
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
                                            doubleValue = 9139.92;
                                            int64Value = "mollitia";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 6717.94;
                                            int64Value = "libero";
                                        }};
                                    }};
                                    fieldName = "ad";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("enim"),
                                            add("vitae"),
                                            add("repellendus"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN;
                                        value = new NumericValue() {{
                                            doubleValue = 7758.03;
                                            int64Value = "ex";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.EXACT;
                                        value = "ad";
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
                                    expression = "molestias";
                                    invisible = false;
                                    name = "Gene Brekke";
                                }}),
                            }};
                            offset = "veritatis";
                            orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "est";
                                        orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "voluptatem";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "sapiente";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "architecto";
                                                dimensionValue = "fuga";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "pariatur";
                                                dimensionValue = "debitis";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "voluptatem";
                                                dimensionValue = "alias";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "deleniti";
                                                dimensionValue = "earum";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "ex";
                                        orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "rem";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "minus";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "asperiores";
                                                dimensionValue = "ratione";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "ullam";
                                                dimensionValue = "perferendis";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "illum";
                                        orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "impedit";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "quibusdam";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "ipsam";
                                                dimensionValue = "culpa";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "dolor";
                                                dimensionValue = "aliquam";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "inventore";
                                                dimensionValue = "deleniti";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            property = "veritatis";
                            returnPropertyQuota = false;
                        }}),
                        add(new RunReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "dolor";
                                            name = "Alice Bailey";
                                            startDate = "ab";
                                        }};
                                        dimension = "laudantium";
                                        name = "Rosa Stiedemann";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "ipsa";
                                            name = "Conrad Rutherford";
                                            startDate = "necessitatibus";
                                        }};
                                        dimension = "sed";
                                        name = "Robin Ratke";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 528234;
                                    granularity = CohortsRangeGranularityEnum.DAILY;
                                    startOffset = 349440;
                                }};
                            }};
                            currencyCode = "ab";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "autem";
                                    name = "Brent Walter II";
                                    startDate = "necessitatibus";
                                }}),
                                add(new DateRange() {{
                                    endDate = "quasi";
                                    name = "Teri Thiel";
                                    startDate = "sequi";
                                }}),
                                add(new DateRange() {{
                                    endDate = "doloribus";
                                    name = "Earnest McClure";
                                    startDate = "blanditiis";
                                }}),
                                add(new DateRange() {{
                                    endDate = "officia";
                                    name = "Marjorie Hickle";
                                    startDate = "aspernatur";
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
                                            doubleValue = 2005.16;
                                            int64Value = "fuga";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 5140.54;
                                            int64Value = "incidunt";
                                        }};
                                    }};
                                    fieldName = "quasi";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("fugiat"),
                                            add("dicta"),
                                            add("nisi"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                        value = new NumericValue() {{
                                            doubleValue = 2330.78;
                                            int64Value = "aperiam";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.CONTAINS;
                                        value = "reiciendis";
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
                                            delimiter = "omnis";
                                            dimensionNames = new String[]{{
                                                add("occaecati"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "iste";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "magni";
                                        }};
                                    }};
                                    name = "Fannie Tillman";
                                }}),
                            }};
                            keepEmptyRows = false;
                            limit = "omnis";
                            metricAggregations = new org.openapis.openapi.models.shared.RunReportRequestMetricAggregationsEnum[]{{
                                add(RunReportRequestMetricAggregationsEnum.TOTAL),
                                add(RunReportRequestMetricAggregationsEnum.MINIMUM),
                                add(RunReportRequestMetricAggregationsEnum.COUNT),
                                add(RunReportRequestMetricAggregationsEnum.TOTAL),
                            }};
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
                                            doubleValue = 5495.01;
                                            int64Value = "commodi";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 9308.19;
                                            int64Value = "commodi";
                                        }};
                                    }};
                                    fieldName = "totam";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("modi"),
                                            add("nam"),
                                            add("vero"),
                                            add("voluptatem"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = NumericFilterOperationEnum.LESS_THAN;
                                        value = new NumericValue() {{
                                            doubleValue = 4259.46;
                                            int64Value = "alias";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                        value = "non";
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
                                    expression = "sint";
                                    invisible = false;
                                    name = "Gerard Koch";
                                }}),
                                add(new Metric() {{
                                    expression = "est";
                                    invisible = false;
                                    name = "Velma Thompson";
                                }}),
                            }};
                            offset = "necessitatibus";
                            orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "ex";
                                        orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "debitis";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "delectus";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "minus";
                                                dimensionValue = "fuga";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "laborum";
                                        orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "velit";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "atque";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "impedit";
                                                dimensionValue = "magni";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "soluta";
                                        orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "nam";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "dolore";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "voluptate";
                                                dimensionValue = "sequi";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "dignissimos";
                                                dimensionValue = "neque";
                                            }}),
                                        }};
                                    }};
                                }}),
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "quo";
                                        orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "quibusdam";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "iure";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "voluptatibus";
                                                dimensionValue = "vel";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                            property = "magnam";
                            returnPropertyQuota = false;
                        }}),
                    }};
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "libero";
                key = "architecto";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "porro";
                uploadProtocol = "aliquam";
            }};            

            AnalyticsdataPropertiesBatchRunReportsResponse res = sdk.properties.analyticsdataPropertiesBatchRunReports(req, new AnalyticsdataPropertiesBatchRunReportsSecurity() {{
                option1 = new AnalyticsdataPropertiesBatchRunReportsSecurityOption1("velit", "illo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchRunReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsdataPropertiesCheckCompatibility

This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesCheckCompatibilityRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesCheckCompatibilityResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesCheckCompatibilitySecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesCheckCompatibilitySecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesCheckCompatibilitySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BetweenFilter;
import org.openapis.openapi.models.shared.CaseExpression;
import org.openapis.openapi.models.shared.CheckCompatibilityRequest;
import org.openapis.openapi.models.shared.CheckCompatibilityRequestCompatibilityFilterEnum;
import org.openapis.openapi.models.shared.ConcatenateExpression;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.DimensionExpression;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterExpression;
import org.openapis.openapi.models.shared.FilterExpressionList;
import org.openapis.openapi.models.shared.InListFilter;
import org.openapis.openapi.models.shared.Metric;
import org.openapis.openapi.models.shared.NumericFilter;
import org.openapis.openapi.models.shared.NumericFilterOperationEnum;
import org.openapis.openapi.models.shared.NumericValue;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesCheckCompatibilityRequest req = new AnalyticsdataPropertiesCheckCompatibilityRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                checkCompatibilityRequest = new CheckCompatibilityRequest() {{
                    compatibilityFilter = CheckCompatibilityRequestCompatibilityFilterEnum.COMPATIBLE;
                    dimensionFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 8777.51;
                                    int64Value = "excepturi";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 4319.94;
                                    int64Value = "velit";
                                }};;
                            }};;
                            fieldName = "ut";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("earum"),
                                    add("dicta"),
                                    add("impedit"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.GREATER_THAN_OR_EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 6109.87;
                                    int64Value = "itaque";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                value = "nisi";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "laborum";
                                    dimensionNames = new String[]{{
                                        add("dolor"),
                                        add("iusto"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "sit";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "doloremque";
                                }};
                            }};
                            name = "Brandi Walter";
                        }}),
                    }};
                    metricFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 7051.48;
                                    int64Value = "placeat";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 5960.65;
                                    int64Value = "expedita";
                                }};;
                            }};;
                            fieldName = "deleniti";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("voluptate"),
                                    add("ullam"),
                                    add("unde"),
                                    add("necessitatibus"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.LESS_THAN_OR_EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 7699.67;
                                    int64Value = "ipsam";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.BEGINS_WITH;
                                value = "est";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                        add(new Metric() {{
                            expression = "labore";
                            invisible = false;
                            name = "Mr. Eula Feest";
                        }}),
                        add(new Metric() {{
                            expression = "ad";
                            invisible = false;
                            name = "Margarita Jacobson";
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "odio";
                key = "fugit";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "vel";
                uploadProtocol = "quae";
            }};            

            AnalyticsdataPropertiesCheckCompatibilityResponse res = sdk.properties.analyticsdataPropertiesCheckCompatibility(req, new AnalyticsdataPropertiesCheckCompatibilitySecurity() {{
                option1 = new AnalyticsdataPropertiesCheckCompatibilitySecurityOption1("quae", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkCompatibilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsdataPropertiesGetMetadata

Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesGetMetadataRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesGetMetadataResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesGetMetadataSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesGetMetadataSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesGetMetadataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesGetMetadataRequest req = new AnalyticsdataPropertiesGetMetadataRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "unde";
                key = "nulla";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "quia";
                uploadProtocol = "quia";
            }};            

            AnalyticsdataPropertiesGetMetadataResponse res = sdk.properties.analyticsdataPropertiesGetMetadata(req, new AnalyticsdataPropertiesGetMetadataSecurity() {{
                option1 = new AnalyticsdataPropertiesGetMetadataSecurityOption1("nostrum", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.metadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsdataPropertiesRunPivotReport

Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunPivotReportRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunPivotReportResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunPivotReportSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunPivotReportSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunPivotReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
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

            AnalyticsdataPropertiesRunPivotReportRequest req = new AnalyticsdataPropertiesRunPivotReportRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                runPivotReportRequest = new RunPivotReportRequest() {{
                    cohortSpec = new CohortSpec() {{
                        cohortReportSettings = new CohortReportSettings() {{
                            accumulate = false;
                        }};;
                        cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "libero";
                                    name = "Oliver Luettgen IV";
                                    startDate = "ipsa";
                                }};
                                dimension = "voluptates";
                                name = "Deborah Larson";
                            }}),
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "distinctio";
                                    name = "Ella Koch";
                                    startDate = "beatae";
                                }};
                                dimension = "est";
                                name = "Johnnie Kozey";
                            }}),
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "necessitatibus";
                                    name = "Kirk Jast";
                                    startDate = "rerum";
                                }};
                                dimension = "laudantium";
                                name = "Cecelia Wiza";
                            }}),
                        }};
                        cohortsRange = new CohortsRange() {{
                            endOffset = 5152;
                            granularity = CohortsRangeGranularityEnum.GRANULARITY_UNSPECIFIED;
                            startOffset = 694158;
                        }};;
                    }};;
                    currencyCode = "fuga";
                    dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                        add(new DateRange() {{
                            endDate = "accusantium";
                            name = "Erick Dare";
                            startDate = "praesentium";
                        }}),
                        add(new DateRange() {{
                            endDate = "odit";
                            name = "Stacy Mraz";
                            startDate = "recusandae";
                        }}),
                        add(new DateRange() {{
                            endDate = "similique";
                            name = "Miss Alison Hayes";
                            startDate = "delectus";
                        }}),
                        add(new DateRange() {{
                            endDate = "cupiditate";
                            name = "Elaine Gerhold";
                            startDate = "officia";
                        }}),
                    }};
                    dimensionFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 7607.44;
                                    int64Value = "necessitatibus";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 3591.11;
                                    int64Value = "qui";
                                }};;
                            }};;
                            fieldName = "expedita";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("cupiditate"),
                                    add("minima"),
                                    add("placeat"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 2040.72;
                                    int64Value = "in";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.FULL_REGEXP;
                                value = "eum";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "magnam";
                                    dimensionNames = new String[]{{
                                        add("maiores"),
                                        add("tempore"),
                                        add("aperiam"),
                                        add("libero"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "ratione";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "labore";
                                }};
                            }};
                            name = "Sergio Hirthe";
                        }}),
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "minus";
                                    dimensionNames = new String[]{{
                                        add("nostrum"),
                                        add("est"),
                                        add("impedit"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "delectus";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "tempore";
                                }};
                            }};
                            name = "Fred Zieme";
                        }}),
                    }};
                    keepEmptyRows = false;
                    metricFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 452.34;
                                    int64Value = "odio";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 3252.97;
                                    int64Value = "in";
                                }};;
                            }};;
                            fieldName = "ducimus";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("dolores"),
                                    add("error"),
                                    add("veritatis"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.LESS_THAN;
                                value = new NumericValue() {{
                                    doubleValue = 4527.29;
                                    int64Value = "pariatur";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.PARTIAL_REGEXP;
                                value = "similique";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                        add(new Metric() {{
                            expression = "quaerat";
                            invisible = false;
                            name = "Cecelia Schroeder";
                        }}),
                        add(new Metric() {{
                            expression = "quam";
                            invisible = false;
                            name = "Pauline Beier";
                        }}),
                    }};
                    pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                        add(new Pivot() {{
                            fieldNames = new String[]{{
                                add("cum"),
                                add("dicta"),
                                add("earum"),
                                add("veniam"),
                            }};
                            limit = "animi";
                            metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                add(PivotMetricAggregationsEnum.MAXIMUM),
                            }};
                            offset = "dicta";
                            orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                add(new OrderBy() {{
                                    desc = false;
                                    dimension = new DimensionOrderBy() {{
                                        dimensionName = "necessitatibus";
                                        orderType = DimensionOrderByOrderTypeEnum.CASE_INSENSITIVE_ALPHANUMERIC;
                                    }};
                                    metric = new MetricOrderBy() {{
                                        metricName = "ipsa";
                                    }};
                                    pivot = new PivotOrderBy() {{
                                        metricName = "ducimus";
                                        pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                            add(new PivotSelection() {{
                                                dimensionName = "veritatis";
                                                dimensionValue = "quasi";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "laboriosam";
                                                dimensionValue = "pariatur";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "libero";
                                                dimensionValue = "excepturi";
                                            }}),
                                            add(new PivotSelection() {{
                                                dimensionName = "occaecati";
                                                dimensionValue = "nemo";
                                            }}),
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    property = "aliquam";
                    returnPropertyQuota = false;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "sint";
                key = "enim";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "quas";
                uploadProtocol = "totam";
            }};            

            AnalyticsdataPropertiesRunPivotReportResponse res = sdk.properties.analyticsdataPropertiesRunPivotReport(req, new AnalyticsdataPropertiesRunPivotReportSecurity() {{
                option1 = new AnalyticsdataPropertiesRunPivotReportSecurityOption1("molestias", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runPivotReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsdataPropertiesRunRealtimeReport

Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunRealtimeReportRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunRealtimeReportResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunRealtimeReportSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunRealtimeReportSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunRealtimeReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BetweenFilter;
import org.openapis.openapi.models.shared.CaseExpression;
import org.openapis.openapi.models.shared.ConcatenateExpression;
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
import org.openapis.openapi.models.shared.MinuteRange;
import org.openapis.openapi.models.shared.NumericFilter;
import org.openapis.openapi.models.shared.NumericFilterOperationEnum;
import org.openapis.openapi.models.shared.NumericValue;
import org.openapis.openapi.models.shared.OrderBy;
import org.openapis.openapi.models.shared.PivotOrderBy;
import org.openapis.openapi.models.shared.PivotSelection;
import org.openapis.openapi.models.shared.RunRealtimeReportRequest;
import org.openapis.openapi.models.shared.RunRealtimeReportRequestMetricAggregationsEnum;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesRunRealtimeReportRequest req = new AnalyticsdataPropertiesRunRealtimeReportRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                runRealtimeReportRequest = new RunRealtimeReportRequest() {{
                    dimensionFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 5546.45;
                                    int64Value = "iste";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 8268.62;
                                    int64Value = "tempore";
                                }};;
                            }};;
                            fieldName = "libero";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("doloremque"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.GREATER_THAN_OR_EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 7731.1;
                                    int64Value = "cum";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.EXACT;
                                value = "adipisci";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "doloremque";
                                    dimensionNames = new String[]{{
                                        add("veniam"),
                                        add("libero"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "architecto";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "cupiditate";
                                }};
                            }};
                            name = "Sheri Schuppe";
                        }}),
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "itaque";
                                    dimensionNames = new String[]{{
                                        add("asperiores"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "veniam";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "consequuntur";
                                }};
                            }};
                            name = "Dwight Connelly";
                        }}),
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "exercitationem";
                                    dimensionNames = new String[]{{
                                        add("velit"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "facilis";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "tempore";
                                }};
                            }};
                            name = "Tami Hahn";
                        }}),
                    }};
                    limit = "nisi";
                    metricAggregations = new org.openapis.openapi.models.shared.RunRealtimeReportRequestMetricAggregationsEnum[]{{
                        add(RunRealtimeReportRequestMetricAggregationsEnum.TOTAL),
                        add(RunRealtimeReportRequestMetricAggregationsEnum.MAXIMUM),
                    }};
                    metricFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 8152;
                                    int64Value = "facilis";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 2176.63;
                                    int64Value = "ad";
                                }};;
                            }};;
                            fieldName = "voluptatibus";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("consequuntur"),
                                    add("debitis"),
                                    add("labore"),
                                    add("rerum"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 4407.77;
                                    int64Value = "nostrum";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.EXACT;
                                value = "iusto";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                        add(new Metric() {{
                            expression = "eligendi";
                            invisible = false;
                            name = "Fredrick Towne";
                        }}),
                        add(new Metric() {{
                            expression = "dicta";
                            invisible = false;
                            name = "Sherman Brown";
                        }}),
                        add(new Metric() {{
                            expression = "fugiat";
                            invisible = false;
                            name = "Nicole Halvorson";
                        }}),
                    }};
                    minuteRanges = new org.openapis.openapi.models.shared.MinuteRange[]{{
                        add(new MinuteRange() {{
                            endMinutesAgo = 729828;
                            name = "Virginia Goyette";
                            startMinutesAgo = 734814;
                        }}),
                        add(new MinuteRange() {{
                            endMinutesAgo = 334018;
                            name = "Johanna Weimann";
                            startMinutesAgo = 367046;
                        }}),
                    }};
                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "quisquam";
                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "nihil";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "deleniti";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "labore";
                                        dimensionValue = "assumenda";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "aliquam";
                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "provident";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "laudantium";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "consequatur";
                                        dimensionValue = "maxime";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "aspernatur";
                                        dimensionValue = "nam";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "expedita";
                                        dimensionValue = "quas";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "provident";
                                        dimensionValue = "repudiandae";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "rerum";
                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "corporis";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "vero";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "repellendus";
                                        dimensionValue = "iure";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "dolorem";
                                        dimensionValue = "commodi";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "impedit";
                                        dimensionValue = "commodi";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "aut";
                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "ad";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "quae";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "illum";
                                        dimensionValue = "praesentium";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    returnPropertyQuota = false;
                }};;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "quasi";
                key = "dicta";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "earum";
                uploadProtocol = "iusto";
            }};            

            AnalyticsdataPropertiesRunRealtimeReportResponse res = sdk.properties.analyticsdataPropertiesRunRealtimeReport(req, new AnalyticsdataPropertiesRunRealtimeReportSecurity() {{
                option1 = new AnalyticsdataPropertiesRunRealtimeReportSecurityOption1("amet", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runRealtimeReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyticsdataPropertiesRunReport

Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunReportRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunReportResponse;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunReportSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunReportSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesRunReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.PivotOrderBy;
import org.openapis.openapi.models.shared.PivotSelection;
import org.openapis.openapi.models.shared.RunReportRequest;
import org.openapis.openapi.models.shared.RunReportRequestMetricAggregationsEnum;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.StringFilterMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesRunReportRequest req = new AnalyticsdataPropertiesRunReportRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                runReportRequest = new RunReportRequest() {{
                    cohortSpec = new CohortSpec() {{
                        cohortReportSettings = new CohortReportSettings() {{
                            accumulate = false;
                        }};;
                        cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "repudiandae";
                                    name = "Vivian Kreiger";
                                    startDate = "corrupti";
                                }};
                                dimension = "aperiam";
                                name = "Caleb Daugherty Jr.";
                            }}),
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "velit";
                                    name = "Ashley Wilkinson";
                                    startDate = "atque";
                                }};
                                dimension = "beatae";
                                name = "Leroy Schinner Jr.";
                            }}),
                            add(new Cohort() {{
                                dateRange = new DateRange() {{
                                    endDate = "rerum";
                                    name = "Kimberly Kuhn";
                                    startDate = "porro";
                                }};
                                dimension = "provident";
                                name = "Vicky Kuhn";
                            }}),
                        }};
                        cohortsRange = new CohortsRange() {{
                            endOffset = 620500;
                            granularity = CohortsRangeGranularityEnum.MONTHLY;
                            startOffset = 639622;
                        }};;
                    }};;
                    currencyCode = "amet";
                    dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                        add(new DateRange() {{
                            endDate = "aspernatur";
                            name = "Dexter Stanton";
                            startDate = "vero";
                        }}),
                        add(new DateRange() {{
                            endDate = "qui";
                            name = "Jaime Champlin";
                            startDate = "nihil";
                        }}),
                        add(new DateRange() {{
                            endDate = "non";
                            name = "Pamela Welch";
                            startDate = "non";
                        }}),
                        add(new DateRange() {{
                            endDate = "distinctio";
                            name = "Annette Green";
                            startDate = "modi";
                        }}),
                    }};
                    dimensionFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 1272.94;
                                    int64Value = "accusamus";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 5258.09;
                                    int64Value = "aperiam";
                                }};;
                            }};;
                            fieldName = "odit";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("enim"),
                                    add("voluptate"),
                                    add("similique"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.EQUAL;
                                value = new NumericValue() {{
                                    doubleValue = 7275.44;
                                    int64Value = "magnam";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.MATCH_TYPE_UNSPECIFIED;
                                value = "modi";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                        add(new Dimension() {{
                            dimensionExpression = new DimensionExpression() {{
                                concatenate = new ConcatenateExpression() {{
                                    delimiter = "mollitia";
                                    dimensionNames = new String[]{{
                                        add("fugiat"),
                                        add("nostrum"),
                                    }};
                                }};
                                lowerCase = new CaseExpression() {{
                                    dimensionName = "molestiae";
                                }};
                                upperCase = new CaseExpression() {{
                                    dimensionName = "veniam";
                                }};
                            }};
                            name = "Mr. Stephen Gleason";
                        }}),
                    }};
                    keepEmptyRows = false;
                    limit = "odio";
                    metricAggregations = new org.openapis.openapi.models.shared.RunReportRequestMetricAggregationsEnum[]{{
                        add(RunReportRequestMetricAggregationsEnum.TOTAL),
                        add(RunReportRequestMetricAggregationsEnum.MAXIMUM),
                    }};
                    metricFilter = new FilterExpression() {{
                        andGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                        filter = new Filter() {{
                            betweenFilter = new BetweenFilter() {{
                                fromValue = new NumericValue() {{
                                    doubleValue = 4523.99;
                                    int64Value = "consectetur";
                                }};;
                                toValue = new NumericValue() {{
                                    doubleValue = 2006.37;
                                    int64Value = "quaerat";
                                }};;
                            }};;
                            fieldName = "itaque";
                            inListFilter = new InListFilter() {{
                                caseSensitive = false;
                                values = new String[]{{
                                    add("sunt"),
                                    add("distinctio"),
                                    add("iusto"),
                                    add("quas"),
                                }};
                            }};;
                            numericFilter = new NumericFilter() {{
                                operation = NumericFilterOperationEnum.OPERATION_UNSPECIFIED;
                                value = new NumericValue() {{
                                    doubleValue = 7049.48;
                                    int64Value = "amet";
                                }};;
                            }};;
                            stringFilter = new StringFilter() {{
                                caseSensitive = false;
                                matchType = StringFilterMatchTypeEnum.BEGINS_WITH;
                                value = "fuga";
                            }};;
                        }};;
                        notExpression = new FilterExpression();;
                        orGroup = new FilterExpressionList() {{
                            expressions = new org.openapis.openapi.models.shared.FilterExpression[]{{
                                add(new FilterExpression() {{}}),
                            }};
                        }};;
                    }};;
                    metrics = new org.openapis.openapi.models.shared.Metric[]{{
                        add(new Metric() {{
                            expression = "aut";
                            invisible = false;
                            name = "Mr. Dwayne Sipes PhD";
                        }}),
                        add(new Metric() {{
                            expression = "delectus";
                            invisible = false;
                            name = "Orville Nitzsche Jr.";
                        }}),
                        add(new Metric() {{
                            expression = "eveniet";
                            invisible = false;
                            name = "Mark Gottlieb";
                        }}),
                    }};
                    offset = "necessitatibus";
                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "explicabo";
                                orderType = DimensionOrderByOrderTypeEnum.ORDER_TYPE_UNSPECIFIED;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "aliquid";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "modi";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "voluptatibus";
                                        dimensionValue = "molestias";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "officia";
                                        dimensionValue = "libero";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "totam";
                                        dimensionValue = "sequi";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "aliquid";
                                        dimensionValue = "ea";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "impedit";
                                orderType = DimensionOrderByOrderTypeEnum.ALPHANUMERIC;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "odit";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "velit";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "repellat";
                                        dimensionValue = "nulla";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "laborum";
                                        dimensionValue = "natus";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "accusamus";
                                        dimensionValue = "doloremque";
                                    }}),
                                    add(new PivotSelection() {{
                                        dimensionName = "nisi";
                                        dimensionValue = "rerum";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new OrderBy() {{
                            desc = false;
                            dimension = new DimensionOrderBy() {{
                                dimensionName = "recusandae";
                                orderType = DimensionOrderByOrderTypeEnum.NUMERIC;
                            }};
                            metric = new MetricOrderBy() {{
                                metricName = "non";
                            }};
                            pivot = new PivotOrderBy() {{
                                metricName = "rem";
                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                    add(new PivotSelection() {{
                                        dimensionName = "ullam";
                                        dimensionValue = "quisquam";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    property = "dicta";
                    returnPropertyQuota = false;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "officiis";
                key = "architecto";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "optio";
                uploadProtocol = "rem";
            }};            

            AnalyticsdataPropertiesRunReportResponse res = sdk.properties.analyticsdataPropertiesRunReport(req, new AnalyticsdataPropertiesRunReportSecurity() {{
                option1 = new AnalyticsdataPropertiesRunReportSecurityOption1("perferendis", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
