# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsdata/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsdata/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsdataPropertiesBatchRunPivotReportsRequest,
  AnalyticsdataPropertiesBatchRunPivotReportsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  PivotMetricAggregationsEnum,
  DimensionOrderByOrderTypeEnum,
  StringFilterMatchTypeEnum,
  NumericFilterOperationEnum,
  CohortsRangeGranularityEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsdataPropertiesBatchRunPivotReportsRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchRunPivotReportsRequest: {
    requests: [
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: false,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "quibusdam",
                name: "unde",
                startDate: "nulla",
              },
              dimension: "corrupti",
              name: "illum",
            },
            {
              dateRange: {
                endDate: "vel",
                name: "error",
                startDate: "deserunt",
              },
              dimension: "suscipit",
              name: "iure",
            },
            {
              dateRange: {
                endDate: "magnam",
                name: "debitis",
                startDate: "ipsa",
              },
              dimension: "delectus",
              name: "tempora",
            },
          ],
          cohortsRange: {
            endOffset: 383441,
            granularity: CohortsRangeGranularityEnum.Daily,
            startOffset: 791725,
          },
        },
        currencyCode: "placeat",
        dateRanges: [
          {
            endDate: "iusto",
            name: "excepturi",
            startDate: "nisi",
          },
          {
            endDate: "recusandae",
            name: "temporibus",
            startDate: "ab",
          },
          {
            endDate: "quis",
            name: "veritatis",
            startDate: "deserunt",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 3682.41,
                int64Value: "repellendus",
              },
              toValue: {
                doubleValue: 9571.56,
                int64Value: "quo",
              },
            },
            fieldName: "odit",
            inListFilter: {
              caseSensitive: false,
              values: [
                "at",
                "maiores",
                "molestiae",
                "quod",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.GreaterThan,
              value: {
                doubleValue: 4614.79,
                int64Value: "totam",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.FullRegexp,
              value: "dolorum",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "officia",
                dimensionNames: [
                  "fugit",
                  "deleniti",
                  "hic",
                ],
              },
              lowerCase: {
                dimensionName: "optio",
              },
              upperCase: {
                dimensionName: "totam",
              },
            },
            name: "beatae",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "commodi",
                dimensionNames: [
                  "modi",
                  "qui",
                ],
              },
              lowerCase: {
                dimensionName: "impedit",
              },
              upperCase: {
                dimensionName: "cum",
              },
            },
            name: "esse",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "ipsum",
                dimensionNames: [
                  "aspernatur",
                  "perferendis",
                  "ad",
                ],
              },
              lowerCase: {
                dimensionName: "natus",
              },
              upperCase: {
                dimensionName: "sed",
              },
            },
            name: "iste",
          },
        ],
        keepEmptyRows: false,
        metricFilter: {
          andGroup: {
            expressions: [
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 6169.34,
                int64Value: "laboriosam",
              },
              toValue: {
                doubleValue: 9437.49,
                int64Value: "saepe",
              },
            },
            fieldName: "fuga",
            inListFilter: {
              caseSensitive: false,
              values: [
                "corporis",
                "iste",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.LessThan,
              value: {
                doubleValue: 9023.49,
                int64Value: "quidem",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.MatchTypeUnspecified,
              value: "ipsa",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
              {},
              {},
              {},
            ],
          },
        },
        metrics: [
          {
            expression: "mollitia",
            invisible: false,
            name: "laborum",
          },
          {
            expression: "dolores",
            invisible: false,
            name: "dolorem",
          },
          {
            expression: "corporis",
            invisible: false,
            name: "explicabo",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "omnis",
              "nemo",
            ],
            limit: "minima",
            metricAggregations: [
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
              PivotMetricAggregationsEnum.Minimum,
              PivotMetricAggregationsEnum.Maximum,
            ],
            offset: "doloribus",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "architecto",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "dolorem",
                },
                pivot: {
                  metricName: "culpa",
                  pivotSelections: [
                    {
                      dimensionName: "repellat",
                      dimensionValue: "mollitia",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "occaecati",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "commodi",
                },
                pivot: {
                  metricName: "quam",
                  pivotSelections: [
                    {
                      dimensionName: "velit",
                      dimensionValue: "error",
                    },
                    {
                      dimensionName: "quia",
                      dimensionValue: "quis",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "vitae",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "animi",
                },
                pivot: {
                  metricName: "enim",
                  pivotSelections: [
                    {
                      dimensionName: "quo",
                      dimensionValue: "sequi",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "tenetur",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "id",
                },
                pivot: {
                  metricName: "possimus",
                  pivotSelections: [
                    {
                      dimensionName: "quasi",
                      dimensionValue: "error",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "laborum",
              "quasi",
              "reiciendis",
              "voluptatibus",
            ],
            limit: "vero",
            metricAggregations: [
              PivotMetricAggregationsEnum.Minimum,
              PivotMetricAggregationsEnum.Count,
            ],
            offset: "ipsa",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "voluptate",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "perferendis",
                },
                pivot: {
                  metricName: "doloremque",
                  pivotSelections: [
                    {
                      dimensionName: "ut",
                      dimensionValue: "maiores",
                    },
                    {
                      dimensionName: "dicta",
                      dimensionValue: "corporis",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "dolore",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "dicta",
                },
                pivot: {
                  metricName: "harum",
                  pivotSelections: [
                    {
                      dimensionName: "accusamus",
                      dimensionValue: "commodi",
                    },
                    {
                      dimensionName: "repudiandae",
                      dimensionValue: "quae",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "ipsum",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "molestias",
                },
                pivot: {
                  metricName: "excepturi",
                  pivotSelections: [
                    {
                      dimensionName: "modi",
                      dimensionValue: "praesentium",
                    },
                    {
                      dimensionName: "rem",
                      dimensionValue: "voluptates",
                    },
                    {
                      dimensionName: "quasi",
                      dimensionValue: "repudiandae",
                    },
                    {
                      dimensionName: "sint",
                      dimensionValue: "veritatis",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "incidunt",
              "enim",
              "consequatur",
              "est",
            ],
            limit: "quibusdam",
            metricAggregations: [
              PivotMetricAggregationsEnum.Maximum,
            ],
            offset: "distinctio",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "labore",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "qui",
                },
                pivot: {
                  metricName: "aliquid",
                  pivotSelections: [
                    {
                      dimensionName: "quos",
                      dimensionValue: "perferendis",
                    },
                    {
                      dimensionName: "magni",
                      dimensionValue: "assumenda",
                    },
                    {
                      dimensionName: "ipsam",
                      dimensionValue: "alias",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "fugit",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "excepturi",
                },
                pivot: {
                  metricName: "tempora",
                  pivotSelections: [
                    {
                      dimensionName: "tempore",
                      dimensionValue: "labore",
                    },
                    {
                      dimensionName: "delectus",
                      dimensionValue: "eum",
                    },
                    {
                      dimensionName: "non",
                      dimensionValue: "eligendi",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "sint",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "provident",
                },
                pivot: {
                  metricName: "necessitatibus",
                  pivotSelections: [
                    {
                      dimensionName: "officia",
                      dimensionValue: "dolor",
                    },
                    {
                      dimensionName: "debitis",
                      dimensionValue: "a",
                    },
                    {
                      dimensionName: "dolorum",
                      dimensionValue: "in",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "in",
                  orderType: DimensionOrderByOrderTypeEnum.Numeric,
                },
                metric: {
                  metricName: "maiores",
                },
                pivot: {
                  metricName: "rerum",
                  pivotSelections: [
                    {
                      dimensionName: "magnam",
                      dimensionValue: "cumque",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "ea",
              "aliquid",
              "laborum",
              "accusamus",
            ],
            limit: "non",
            metricAggregations: [
              PivotMetricAggregationsEnum.Total,
              PivotMetricAggregationsEnum.Count,
              PivotMetricAggregationsEnum.Count,
            ],
            offset: "quidem",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "nam",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "blanditiis",
                },
                pivot: {
                  metricName: "deleniti",
                  pivotSelections: [
                    {
                      dimensionName: "amet",
                      dimensionValue: "deserunt",
                    },
                    {
                      dimensionName: "nisi",
                      dimensionValue: "vel",
                    },
                    {
                      dimensionName: "natus",
                      dimensionValue: "omnis",
                    },
                    {
                      dimensionName: "molestiae",
                      dimensionValue: "perferendis",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "nihil",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "distinctio",
                },
                pivot: {
                  metricName: "id",
                  pivotSelections: [
                    {
                      dimensionName: "labore",
                      dimensionValue: "suscipit",
                    },
                    {
                      dimensionName: "natus",
                      dimensionValue: "nobis",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "eum",
                  orderType: DimensionOrderByOrderTypeEnum.Numeric,
                },
                metric: {
                  metricName: "aspernatur",
                },
                pivot: {
                  metricName: "architecto",
                  pivotSelections: [
                    {
                      dimensionName: "et",
                      dimensionValue: "excepturi",
                    },
                    {
                      dimensionName: "ullam",
                      dimensionValue: "provident",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "quos",
        returnPropertyQuota: false,
      },
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: false,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "accusantium",
                name: "mollitia",
                startDate: "reiciendis",
              },
              dimension: "mollitia",
              name: "ad",
            },
            {
              dateRange: {
                endDate: "eum",
                name: "dolor",
                startDate: "necessitatibus",
              },
              dimension: "odit",
              name: "nemo",
            },
            {
              dateRange: {
                endDate: "quasi",
                name: "iure",
                startDate: "doloribus",
              },
              dimension: "debitis",
              name: "eius",
            },
          ],
          cohortsRange: {
            endOffset: 806194,
            granularity: CohortsRangeGranularityEnum.Weekly,
            startOffset: 703889,
          },
        },
        currencyCode: "in",
        dateRanges: [
          {
            endDate: "architecto",
            name: "repudiandae",
            startDate: "ullam",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {},
              {},
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 4692.49,
                int64Value: "repellat",
              },
              toValue: {
                doubleValue: 8411.4,
                int64Value: "sed",
              },
            },
            fieldName: "saepe",
            inListFilter: {
              caseSensitive: false,
              values: [
                "accusantium",
                "consequuntur",
                "praesentium",
                "natus",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.Equal,
              value: {
                doubleValue: 1238.2,
                int64Value: "quo",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.FullRegexp,
              value: "pariatur",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
              {},
              {},
              {},
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "excepturi",
                dimensionNames: [
                  "ea",
                ],
              },
              lowerCase: {
                dimensionName: "accusantium",
              },
              upperCase: {
                dimensionName: "ab",
              },
            },
            name: "maiores",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "quidem",
                dimensionNames: [
                  "voluptate",
                  "autem",
                ],
              },
              lowerCase: {
                dimensionName: "nam",
              },
              upperCase: {
                dimensionName: "eaque",
              },
            },
            name: "pariatur",
          },
        ],
        keepEmptyRows: false,
        metricFilter: {
          andGroup: {
            expressions: [
              {},
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 9755.22,
                int64Value: "perferendis",
              },
              toValue: {
                doubleValue: 8558.04,
                int64Value: "amet",
              },
            },
            fieldName: "aut",
            inListFilter: {
              caseSensitive: false,
              values: [
                "corporis",
                "hic",
                "libero",
                "nobis",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.Equal,
              value: {
                doubleValue: 3394.04,
                int64Value: "totam",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.EndsWith,
              value: "eaque",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
              {},
            ],
          },
        },
        metrics: [
          {
            expression: "eos",
            invisible: false,
            name: "perferendis",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "quam",
              "dolor",
              "vero",
              "nostrum",
            ],
            limit: "hic",
            metricAggregations: [
              PivotMetricAggregationsEnum.Maximum,
              PivotMetricAggregationsEnum.Maximum,
              PivotMetricAggregationsEnum.Minimum,
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
            ],
            offset: "porro",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "blanditiis",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "eaque",
                },
                pivot: {
                  metricName: "occaecati",
                  pivotSelections: [
                    {
                      dimensionName: "adipisci",
                      dimensionValue: "asperiores",
                    },
                    {
                      dimensionName: "earum",
                      dimensionValue: "modi",
                    },
                    {
                      dimensionName: "iste",
                      dimensionValue: "dolorum",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "deleniti",
        returnPropertyQuota: false,
      },
      {
        cohortSpec: {
          cohortReportSettings: {
            accumulate: false,
          },
          cohorts: [
            {
              dateRange: {
                endDate: "provident",
                name: "nobis",
                startDate: "libero",
              },
              dimension: "delectus",
              name: "quaerat",
            },
            {
              dateRange: {
                endDate: "quos",
                name: "aliquid",
                startDate: "dolorem",
              },
              dimension: "dolorem",
              name: "dolor",
            },
            {
              dateRange: {
                endDate: "qui",
                name: "ipsum",
                startDate: "hic",
              },
              dimension: "excepturi",
              name: "cum",
            },
            {
              dateRange: {
                endDate: "voluptate",
                name: "dignissimos",
                startDate: "reiciendis",
              },
              dimension: "amet",
              name: "dolorum",
            },
          ],
          cohortsRange: {
            endOffset: 254356,
            granularity: CohortsRangeGranularityEnum.GranularityUnspecified,
            startOffset: 58029,
          },
        },
        currencyCode: "ipsa",
        dateRanges: [
          {
            endDate: "odio",
            name: "quaerat",
            startDate: "accusamus",
          },
          {
            endDate: "quidem",
            name: "voluptatibus",
            startDate: "voluptas",
          },
        ],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {},
              {},
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 1796.03,
                int64Value: "atque",
              },
              toValue: {
                doubleValue: 246.78,
                int64Value: "fugiat",
              },
            },
            fieldName: "ab",
            inListFilter: {
              caseSensitive: false,
              values: [
                "dolorum",
                "iusto",
                "voluptate",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.GreaterThan,
              value: {
                doubleValue: 5365.79,
                int64Value: "omnis",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.PartialRegexp,
              value: "distinctio",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
              {},
              {},
              {},
            ],
          },
        },
        dimensions: [
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "ipsum",
                dimensionNames: [
                  "id",
                  "saepe",
                ],
              },
              lowerCase: {
                dimensionName: "eius",
              },
              upperCase: {
                dimensionName: "aspernatur",
              },
            },
            name: "perferendis",
          },
          {
            dimensionExpression: {
              concatenate: {
                delimiter: "amet",
                dimensionNames: [
                  "accusamus",
                  "ad",
                  "saepe",
                  "suscipit",
                ],
              },
              lowerCase: {
                dimensionName: "deserunt",
              },
              upperCase: {
                dimensionName: "provident",
              },
            },
            name: "minima",
          },
        ],
        keepEmptyRows: false,
        metricFilter: {
          andGroup: {
            expressions: [
              {},
              {},
              {},
              {},
            ],
          },
          filter: {
            betweenFilter: {
              fromValue: {
                doubleValue: 5197.11,
                int64Value: "similique",
              },
              toValue: {
                doubleValue: 0.55,
                int64Value: "at",
              },
            },
            fieldName: "quaerat",
            inListFilter: {
              caseSensitive: false,
              values: [
                "vel",
                "quod",
              ],
            },
            numericFilter: {
              operation: NumericFilterOperationEnum.GreaterThanOrEqual,
              value: {
                doubleValue: 1856.36,
                int64Value: "dolorum",
              },
            },
            stringFilter: {
              caseSensitive: false,
              matchType: StringFilterMatchTypeEnum.PartialRegexp,
              value: "esse",
            },
          },
          notExpression: {},
          orGroup: {
            expressions: [
              {},
              {},
              {},
            ],
          },
        },
        metrics: [
          {
            expression: "ipsum",
            invisible: false,
            name: "quisquam",
          },
          {
            expression: "tenetur",
            invisible: false,
            name: "amet",
          },
        ],
        pivots: [
          {
            fieldNames: [
              "numquam",
              "enim",
              "dolorem",
              "sapiente",
            ],
            limit: "totam",
            metricAggregations: [
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
              PivotMetricAggregationsEnum.Maximum,
            ],
            offset: "neque",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "vel",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "voluptas",
                },
                pivot: {
                  metricName: "deserunt",
                  pivotSelections: [
                    {
                      dimensionName: "ipsum",
                      dimensionValue: "incidunt",
                    },
                    {
                      dimensionName: "qui",
                      dimensionValue: "cupiditate",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "pariatur",
              "soluta",
              "dicta",
              "laborum",
            ],
            limit: "totam",
            metricAggregations: [
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
            ],
            offset: "distinctio",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "aliquid",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "molestias",
                },
                pivot: {
                  metricName: "temporibus",
                  pivotSelections: [
                    {
                      dimensionName: "neque",
                      dimensionValue: "fugit",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "magni",
                  orderType: DimensionOrderByOrderTypeEnum.Alphanumeric,
                },
                metric: {
                  metricName: "sunt",
                },
                pivot: {
                  metricName: "ullam",
                  pivotSelections: [
                    {
                      dimensionName: "hic",
                      dimensionValue: "voluptatem",
                    },
                    {
                      dimensionName: "cumque",
                      dimensionValue: "soluta",
                    },
                    {
                      dimensionName: "nobis",
                      dimensionValue: "et",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "saepe",
                  orderType: DimensionOrderByOrderTypeEnum.OrderTypeUnspecified,
                },
                metric: {
                  metricName: "veritatis",
                },
                pivot: {
                  metricName: "nobis",
                  pivotSelections: [
                    {
                      dimensionName: "tempore",
                      dimensionValue: "cupiditate",
                    },
                    {
                      dimensionName: "aperiam",
                      dimensionValue: "delectus",
                    },
                    {
                      dimensionName: "dolorem",
                      dimensionValue: "dolore",
                    },
                  ],
                },
              },
            ],
          },
          {
            fieldNames: [
              "adipisci",
              "dolorum",
            ],
            limit: "architecto",
            metricAggregations: [
              PivotMetricAggregationsEnum.MetricAggregationUnspecified,
            ],
            offset: "quas",
            orderBys: [
              {
                desc: false,
                dimension: {
                  dimensionName: "consequatur",
                  orderType: DimensionOrderByOrderTypeEnum.CaseInsensitiveAlphanumeric,
                },
                metric: {
                  metricName: "repellendus",
                },
                pivot: {
                  metricName: "porro",
                  pivotSelections: [
                    {
                      dimensionName: "ut",
                      dimensionValue: "facilis",
                    },
                    {
                      dimensionName: "cupiditate",
                      dimensionValue: "qui",
                    },
                    {
                      dimensionName: "quae",
                      dimensionValue: "laudantium",
                    },
                    {
                      dimensionName: "odio",
                      dimensionValue: "occaecati",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "voluptatibus",
                  orderType: DimensionOrderByOrderTypeEnum.Numeric,
                },
                metric: {
                  metricName: "vero",
                },
                pivot: {
                  metricName: "omnis",
                  pivotSelections: [
                    {
                      dimensionName: "ipsum",
                      dimensionValue: "delectus",
                    },
                    {
                      dimensionName: "voluptate",
                      dimensionValue: "consectetur",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "vero",
                  orderType: DimensionOrderByOrderTypeEnum.Numeric,
                },
                metric: {
                  metricName: "dignissimos",
                },
                pivot: {
                  metricName: "hic",
                  pivotSelections: [
                    {
                      dimensionName: "quod",
                      dimensionValue: "odio",
                    },
                    {
                      dimensionName: "similique",
                      dimensionValue: "facilis",
                    },
                    {
                      dimensionName: "vero",
                      dimensionValue: "ducimus",
                    },
                  ],
                },
              },
              {
                desc: false,
                dimension: {
                  dimensionName: "dolore",
                  orderType: DimensionOrderByOrderTypeEnum.Numeric,
                },
                metric: {
                  metricName: "illum",
                },
                pivot: {
                  metricName: "sequi",
                  pivotSelections: [
                    {
                      dimensionName: "impedit",
                      dimensionValue: "aut",
                    },
                    {
                      dimensionName: "voluptatibus",
                      dimensionValue: "exercitationem",
                    },
                    {
                      dimensionName: "nulla",
                      dimensionValue: "fugit",
                    },
                  ],
                },
              },
            ],
          },
        ],
        property: "porro",
        returnPropertyQuota: false,
      },
    ],
  },
  accessToken: "maiores",
  alt: AltEnum.Proto,
  callback: "iusto",
  fields: "eligendi",
  key: "ducimus",
  oauthToken: "alias",
  prettyPrint: false,
  property: "officia",
  quotaUser: "tempora",
  uploadType: "ipsam",
  uploadProtocol: "ea",
};

sdk.properties.analyticsdataPropertiesBatchRunPivotReports(req).then((res: AnalyticsdataPropertiesBatchRunPivotReportsResponse | AxiosError) => {
   // handle response
});
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

