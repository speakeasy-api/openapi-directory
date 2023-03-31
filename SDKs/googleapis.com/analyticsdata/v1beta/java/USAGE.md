<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsSecurity;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsPathParams;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsQueryParams;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest;
import org.openapis.openapi.models.operations.AnalyticsdataPropertiesBatchRunPivotReportsResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsdataPropertiesBatchRunPivotReportsRequest req = new AnalyticsdataPropertiesBatchRunPivotReportsRequest() {{
                security = new AnalyticsdataPropertiesBatchRunPivotReportsSecurity() {{
                    option1 = new AnalyticsdataPropertiesBatchRunPivotReportsSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new AnalyticsdataPropertiesBatchRunPivotReportsPathParams() {{
                    property = "corrupti";
                }};
                queryParams = new AnalyticsdataPropertiesBatchRunPivotReportsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BatchRunPivotReportsRequest() {{
                    requests = new org.openapis.openapi.models.shared.RunPivotReportRequest[]{{
                        add(new RunPivotReportRequest() {{
                            cohortSpec = new CohortSpec() {{
                                cohortReportSettings = new CohortReportSettings() {{
                                    accumulate = false;
                                }};
                                cohorts = new org.openapis.openapi.models.shared.Cohort[]{{
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "magnam";
                                            name = "debitis";
                                            startDate = "ipsa";
                                        }};
                                        dimension = "delectus";
                                        name = "tempora";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "suscipit";
                                            name = "molestiae";
                                            startDate = "minus";
                                        }};
                                        dimension = "placeat";
                                        name = "voluptatum";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 479977;
                                    granularity = "WEEKLY";
                                    startOffset = 392785;
                                }};
                            }};
                            currencyCode = "recusandae";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "ab";
                                    name = "quis";
                                    startDate = "veritatis";
                                }}),
                                add(new DateRange() {{
                                    endDate = "deserunt";
                                    name = "perferendis";
                                    startDate = "ipsam";
                                }}),
                                add(new DateRange() {{
                                    endDate = "repellendus";
                                    name = "sapiente";
                                    startDate = "quo";
                                }}),
                                add(new DateRange() {{
                                    endDate = "odit";
                                    name = "at";
                                    startDate = "at";
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
                                            doubleValue = 4736.08;
                                            int64Value = "quod";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 8009.11;
                                            int64Value = "esse";
                                        }};
                                    }};
                                    fieldName = "totam";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("dolorum"),
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "LESS_THAN_OR_EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 1433.53;
                                            int64Value = "deleniti";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "PARTIAL_REGEXP";
                                        value = "optio";
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
                                            doubleValue = 5684.34;
                                            int64Value = "aspernatur";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 187.89;
                                            int64Value = "ad";
                                        }};
                                    }};
                                    fieldName = "natus";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("iste"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 6169.34;
                                            int64Value = "laboriosam";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "PARTIAL_REGEXP";
                                        value = "saepe";
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
                                    expression = "corporis";
                                    invisible = false;
                                    name = "iste";
                                }}),
                                add(new Metric() {{
                                    expression = "iure";
                                    invisible = false;
                                    name = "saepe";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("ipsa"),
                                    }};
                                    limit = "reiciendis";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MAXIMUM"),
                                        add("MAXIMUM"),
                                        add("METRIC_AGGREGATION_UNSPECIFIED"),
                                    }};
                                    offset = "dolorem";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "explicabo";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "enim";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "omnis";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "minima";
                                                        dimensionValue = "excepturi";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "accusantium";
                                                        dimensionValue = "iure";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "culpa";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "sapiente";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "architecto";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolorem";
                                                        dimensionValue = "culpa";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "consequuntur";
                                                        dimensionValue = "repellat";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "mollitia";
                                                        dimensionValue = "occaecati";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                    limit = "molestiae";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MAXIMUM"),
                                    }};
                                    offset = "quia";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
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
                            }};
                            property = "itaque";
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
                                            endDate = "enim";
                                            name = "consequatur";
                                            startDate = "est";
                                        }};
                                        dimension = "quibusdam";
                                        name = "explicabo";
                                    }}),
                                    add(new Cohort() {{
                                        dateRange = new DateRange() {{
                                            endDate = "deserunt";
                                            name = "distinctio";
                                            startDate = "quibusdam";
                                        }};
                                        dimension = "labore";
                                        name = "modi";
                                    }}),
                                }};
                                cohortsRange = new CohortsRange() {{
                                    endOffset = 183191;
                                    granularity = "DAILY";
                                    startOffset = 586513;
                                }};
                            }};
                            currencyCode = "quos";
                            dateRanges = new org.openapis.openapi.models.shared.DateRange[]{{
                                add(new DateRange() {{
                                    endDate = "magni";
                                    name = "assumenda";
                                    startDate = "ipsam";
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
                                            doubleValue = 1464.41;
                                            int64Value = "dolorum";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 5696.18;
                                            int64Value = "tempora";
                                        }};
                                    }};
                                    fieldName = "facilis";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("labore"),
                                            add("delectus"),
                                            add("eum"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 7561.07;
                                            int64Value = "sint";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "BEGINS_WITH";
                                        value = "provident";
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
                                            delimiter = "officia";
                                            dimensionNames = new String[]{{
                                                add("debitis"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "a";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "dolorum";
                                        }};
                                    }};
                                    name = "in";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "in";
                                            dimensionNames = new String[]{{
                                                add("maiores"),
                                                add("rerum"),
                                                add("dicta"),
                                                add("magnam"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "cumque";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "facere";
                                        }};
                                    }};
                                    name = "ea";
                                }}),
                                add(new Dimension() {{
                                    dimensionExpression = new DimensionExpression() {{
                                        concatenate = new ConcatenateExpression() {{
                                            delimiter = "aliquid";
                                            dimensionNames = new String[]{{
                                                add("accusamus"),
                                                add("non"),
                                                add("occaecati"),
                                            }};
                                        }};
                                        lowerCase = new CaseExpression() {{
                                            dimensionName = "enim";
                                        }};
                                        upperCase = new CaseExpression() {{
                                            dimensionName = "accusamus";
                                        }};
                                    }};
                                    name = "delectus";
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
                                            doubleValue = 5884.65;
                                            int64Value = "nam";
                                        }};
                                        toValue = new NumericValue() {{
                                            doubleValue = 6596.69;
                                            int64Value = "blanditiis";
                                        }};
                                    }};
                                    fieldName = "deleniti";
                                    inListFilter = new InListFilter() {{
                                        caseSensitive = false;
                                        values = new String[]{{
                                            add("amet"),
                                            add("deserunt"),
                                            add("nisi"),
                                            add("vel"),
                                        }};
                                    }};
                                    numericFilter = new NumericFilter() {{
                                        operation = "LESS_THAN_OR_EQUAL";
                                        value = new NumericValue() {{
                                            doubleValue = 6063.93;
                                            int64Value = "molestiae";
                                        }};
                                    }};
                                    stringFilter = new StringFilter() {{
                                        caseSensitive = false;
                                        matchType = "MATCH_TYPE_UNSPECIFIED";
                                        value = "nihil";
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
                                    expression = "id";
                                    invisible = false;
                                    name = "labore";
                                }}),
                                add(new Metric() {{
                                    expression = "labore";
                                    invisible = false;
                                    name = "suscipit";
                                }}),
                                add(new Metric() {{
                                    expression = "natus";
                                    invisible = false;
                                    name = "nobis";
                                }}),
                            }};
                            pivots = new org.openapis.openapi.models.shared.Pivot[]{{
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("aspernatur"),
                                        add("architecto"),
                                        add("magnam"),
                                        add("et"),
                                    }};
                                    limit = "excepturi";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("MINIMUM"),
                                        add("MINIMUM"),
                                    }};
                                    offset = "sint";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "mollitia";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "mollitia";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "ad";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "dolor";
                                                        dimensionValue = "necessitatibus";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "odit";
                                                        dimensionValue = "nemo";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                                add(new Pivot() {{
                                    fieldNames = new String[]{{
                                        add("iure"),
                                    }};
                                    limit = "doloribus";
                                    metricAggregations = new org.openapis.openapi.models.shared.PivotMetricAggregationsEnum[]{{
                                        add("TOTAL"),
                                        add("COUNT"),
                                        add("MINIMUM"),
                                        add("MAXIMUM"),
                                    }};
                                    offset = "in";
                                    orderBys = new org.openapis.openapi.models.shared.OrderBy[]{{
                                        add(new OrderBy() {{
                                            desc = false;
                                            dimension = new DimensionOrderBy() {{
                                                dimensionName = "architecto";
                                                orderType = "NUMERIC";
                                            }};
                                            metric = new MetricOrderBy() {{
                                                metricName = "ullam";
                                            }};
                                            pivot = new PivotOrderBy() {{
                                                metricName = "expedita";
                                                pivotSelections = new org.openapis.openapi.models.shared.PivotSelection[]{{
                                                    add(new PivotSelection() {{
                                                        dimensionName = "repellat";
                                                        dimensionValue = "quibusdam";
                                                    }}),
                                                    add(new PivotSelection() {{
                                                        dimensionName = "sed";
                                                        dimensionValue = "saepe";
                                                    }}),
                                                }};
                                            }};
                                        }}),
                                    }};
                                }}),
                            }};
                            property = "pariatur";
                            returnPropertyQuota = false;
                        }}),
                    }};
                }};
            }};            

            AnalyticsdataPropertiesBatchRunPivotReportsResponse res = sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req);

            if (res.batchRunPivotReportsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->