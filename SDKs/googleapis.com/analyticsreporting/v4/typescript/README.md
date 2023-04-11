# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsreporting/v4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsreporting/v4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsreportingReportsBatchGetRequest,
  AnalyticsreportingReportsBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  ReportRequestSamplingLevelEnum,
  SegmentMetricFilterOperatorEnum,
  SegmentMetricFilterScopeEnum,
  SegmentDimensionFilterOperatorEnum,
  SegmentSequenceStepMatchTypeEnum,
  MetricFormattingTypeEnum,
  DimensionFilterClauseOperatorEnum,
  DimensionFilterOperatorEnum,
  OrderByOrderTypeEnum,
  OrderBySortOrderEnum,
  MetricFilterClauseOperatorEnum,
  MetricFilterOperatorEnum,
  CohortTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnalyticsreportingReportsBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  getReportsRequest: {
    reportRequests: [
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "quibusdam",
                startDate: "unde",
              },
              name: "nulla",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "illum",
                startDate: "vel",
              },
              name: "error",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "suscipit",
                startDate: "iure",
              },
              name: "magnam",
              type: CohortTypeEnum.FirstVisitDate,
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "delectus",
            startDate: "tempora",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "minus",
                expressions: [
                  "voluptatum",
                  "iusto",
                  "excepturi",
                  "nisi",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.InList,
              },
              {
                caseSensitive: false,
                dimensionName: "temporibus",
                expressions: [
                  "quis",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.OperatorUnspecified,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.Or,
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "ipsam",
                expressions: [
                  "sapiente",
                  "quo",
                  "odit",
                  "at",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.NumericLessThan,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.And,
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "quod",
              "esse",
              "totam",
              "porro",
            ],
            name: "dolorum",
          },
          {
            histogramBuckets: [
              "nam",
            ],
            name: "officia",
          },
        ],
        filtersExpression: "occaecati",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: false,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "hic",
                metricName: "optio",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "beatae",
                metricName: "commodi",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "modi",
                metricName: "qui",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.And,
          },
        ],
        metrics: [
          {
            alias: "ipsum",
            expression: "excepturi",
            formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
          },
          {
            alias: "perferendis",
            expression: "ad",
            formattingType: MetricFormattingTypeEnum.Currency,
          },
        ],
        orderBys: [
          {
            fieldName: "iste",
            orderType: OrderByOrderTypeEnum.Value,
            sortOrder: OrderBySortOrderEnum.Ascending,
          },
        ],
        pageSize: 386489,
        pageToken: "hic",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "corporis",
                    expressions: [
                      "iure",
                      "saepe",
                      "quidem",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "ipsa",
                    expressions: [
                      "est",
                      "mollitia",
                      "laborum",
                      "dolores",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.BeginsWith,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "nobis",
                    expressions: [
                      "omnis",
                      "nemo",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.EndsWith,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "iure",
                    expressions: [
                      "doloribus",
                      "sapiente",
                      "architecto",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "repellat",
                ],
                name: "mollitia",
              },
              {
                histogramBuckets: [
                  "numquam",
                  "commodi",
                  "quam",
                ],
                name: "molestiae",
              },
              {
                histogramBuckets: [
                  "error",
                ],
                name: "quia",
              },
            ],
            maxGroupCount: 338007,
            metrics: [
              {
                alias: "laborum",
                expression: "animi",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
            ],
            startGroup: 138183,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "tenetur",
                    expressions: [
                      "id",
                      "possimus",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "temporibus",
                    expressions: [
                      "quasi",
                      "reiciendis",
                      "voluptatibus",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericLessThan,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "nihil",
                    expressions: [
                      "voluptatibus",
                      "ipsa",
                      "omnis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "cum",
                    expressions: [
                      "doloremque",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "dicta",
                    expressions: [
                      "dolore",
                      "iusto",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "harum",
                    expressions: [
                      "accusamus",
                      "commodi",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "quae",
                    expressions: [
                      "quidem",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Exact,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "excepturi",
                    expressions: [
                      "modi",
                      "praesentium",
                      "rem",
                      "voluptates",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "veritatis",
                    expressions: [
                      "incidunt",
                      "enim",
                      "consequatur",
                      "est",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericLessThan,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "explicabo",
                    expressions: [
                      "distinctio",
                      "quibusdam",
                      "labore",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.BeginsWith,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "qui",
                    expressions: [
                      "cupiditate",
                      "quos",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "alias",
                  "fugit",
                ],
                name: "dolorum",
              },
              {
                histogramBuckets: [
                  "tempora",
                  "facilis",
                  "tempore",
                ],
                name: "labore",
              },
              {
                histogramBuckets: [
                  "eum",
                  "non",
                  "eligendi",
                  "sint",
                ],
                name: "aliquid",
              },
              {
                histogramBuckets: [
                  "necessitatibus",
                  "sint",
                  "officia",
                ],
                name: "dolor",
              },
            ],
            maxGroupCount: 891555,
            metrics: [
              {
                alias: "dolorum",
                expression: "in",
                formattingType: MetricFormattingTypeEnum.Float,
              },
              {
                alias: "illum",
                expression: "maiores",
                formattingType: MetricFormattingTypeEnum.Percent,
              },
              {
                alias: "dicta",
                expression: "magnam",
                formattingType: MetricFormattingTypeEnum.Percent,
              },
              {
                alias: "facere",
                expression: "ea",
                formattingType: MetricFormattingTypeEnum.Float,
              },
            ],
            startGroup: 675439,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "occaecati",
                    expressions: [
                      "accusamus",
                      "delectus",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "id",
                    expressions: [
                      "deleniti",
                      "sapiente",
                      "amet",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "nisi",
                    expressions: [
                      "natus",
                      "omnis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "perferendis",
                    expressions: [
                      "magnam",
                      "distinctio",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "suscipit",
                    expressions: [
                      "nobis",
                      "eum",
                      "vero",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "architecto",
                    expressions: [
                      "et",
                      "excepturi",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.EndsWith,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "sint",
                    expressions: [
                      "mollitia",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "mollitia",
                    expressions: [
                      "eum",
                      "dolor",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericLessThan,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "odit",
                    expressions: [
                      "quasi",
                      "iure",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "deleniti",
                  "facilis",
                  "in",
                  "architecto",
                ],
                name: "architecto",
              },
              {
                histogramBuckets: [
                  "ullam",
                  "expedita",
                  "nihil",
                  "repellat",
                ],
                name: "quibusdam",
              },
            ],
            maxGroupCount: 149448,
            metrics: [
              {
                alias: "pariatur",
                expression: "accusantium",
                formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
              },
              {
                alias: "praesentium",
                expression: "natus",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
              {
                alias: "sunt",
                expression: "quo",
                formattingType: MetricFormattingTypeEnum.Time,
              },
              {
                alias: "pariatur",
                expression: "maxime",
                formattingType: MetricFormattingTypeEnum.Float,
              },
            ],
            startGroup: 569101,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "accusantium",
                    expressions: [
                      "maiores",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "ipsam",
                    expressions: [
                      "autem",
                      "nam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "perferendis",
                  "fugiat",
                  "amet",
                  "aut",
                ],
                name: "cumque",
              },
              {
                histogramBuckets: [
                  "hic",
                  "libero",
                ],
                name: "nobis",
              },
            ],
            maxGroupCount: 171629,
            metrics: [
              {
                alias: "totam",
                expression: "dignissimos",
                formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
              },
              {
                alias: "quis",
                expression: "nesciunt",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
            ],
            startGroup: 18521,
          },
        ],
        samplingLevel: ReportRequestSamplingLevelEnum.SamplingUnspecified,
        segments: [
          {
            dynamicSegment: {
              name: "quam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "perspiciatis",
                                      "voluptatem",
                                      "porro",
                                    ],
                                    maxComparisonValue: "consequuntur",
                                    minComparisonValue: "blanditiis",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eaque",
                                    maxComparisonValue: "occaecati",
                                    metricName: "rerum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "earum",
                                    expressions: [
                                      "iste",
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "pariatur",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nobis",
                                    maxComparisonValue: "libero",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "qui",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "excepturi",
                                    metricName: "cum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "numquam",
                                    minComparisonValue: "veritatis",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "iure",
                                    metricName: "odio",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatibus",
                                    expressions: [
                                      "natus",
                                      "eos",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "sit",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ab",
                                    maxComparisonValue: "soluta",
                                    metricName: "dolorum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorum",
                                    expressions: [
                                      "omnis",
                                      "necessitatibus",
                                      "distinctio",
                                    ],
                                    maxComparisonValue: "asperiores",
                                    minComparisonValue: "nihil",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptate",
                                    maxComparisonValue: "id",
                                    metricName: "saepe",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "optio",
                                    ],
                                    maxComparisonValue: "accusamus",
                                    minComparisonValue: "ad",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "suscipit",
                                    maxComparisonValue: "deserunt",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "at",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "tempora",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quod",
                                    maxComparisonValue: "officiis",
                                    metricName: "qui",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "esse",
                                    expressions: [
                                      "iusto",
                                      "ipsum",
                                      "quisquam",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "amet",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "numquam",
                                    metricName: "enim",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "totam",
                                    expressions: [
                                      "sit",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "neque",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "voluptas",
                                    metricName: "deserunt",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "maxime",
                                      "pariatur",
                                      "soluta",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "laborum",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "dolores",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "molestias",
                                      "temporibus",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "neque",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "odio",
                                    metricName: "sunt",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "et",
                                      "saepe",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "veritatis",
                                    minComparisonValue: "nobis",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempore",
                                    maxComparisonValue: "cupiditate",
                                    metricName: "aperiam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "adipisci",
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "quae",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "itaque",
                                    metricName: "consequatur",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "porro",
                                    expressions: [
                                      "ut",
                                      "facilis",
                                      "cupiditate",
                                      "qui",
                                    ],
                                    maxComparisonValue: "quae",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "voluptatibus",
                                    metricName: "quisquam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "delectus",
                                    ],
                                    maxComparisonValue: "voluptate",
                                    minComparisonValue: "consectetur",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tenetur",
                                    maxComparisonValue: "dignissimos",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vero",
                                    expressions: [
                                      "dolore",
                                      "quibusdam",
                                    ],
                                    maxComparisonValue: "illum",
                                    minComparisonValue: "sequi",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "impedit",
                                    maxComparisonValue: "aut",
                                    metricName: "voluptatibus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "maiores",
                                      "doloribus",
                                      "iusto",
                                      "eligendi",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempora",
                                    maxComparisonValue: "ipsam",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "ratione",
                                      "ex",
                                    ],
                                    maxComparisonValue: "laudantium",
                                    minComparisonValue: "dicta",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "maiores",
                                    maxComparisonValue: "quasi",
                                    metricName: "ex",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nostrum",
                                    expressions: [
                                      "quisquam",
                                      "saepe",
                                      "ea",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "corporis",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "magnam",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "recusandae",
                                    expressions: [
                                      "minima",
                                    ],
                                    maxComparisonValue: "eaque",
                                    minComparisonValue: "a",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "aut",
                                    metricName: "deleniti",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "inventore",
                                      "non",
                                      "et",
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "placeat",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "autem",
                                    metricName: "nobis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "libero",
                                      "quasi",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "numquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "provident",
                                    maxComparisonValue: "ipsa",
                                    metricName: "molestiae",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "esse",
                                    expressions: [
                                      "rem",
                                      "fuga",
                                    ],
                                    maxComparisonValue: "reprehenderit",
                                    minComparisonValue: "quidem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "eum",
                                    metricName: "suscipit",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "praesentium",
                                    expressions: [
                                      "veritatis",
                                      "ipsa",
                                      "id",
                                      "quidem",
                                    ],
                                    maxComparisonValue: "neque",
                                    minComparisonValue: "quo",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "fuga",
                                    metricName: "eius",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "ipsam",
                                      "aspernatur",
                                      "sequi",
                                      "quo",
                                    ],
                                    maxComparisonValue: "esse",
                                    minComparisonValue: "recusandae",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "distinctio",
                                    maxComparisonValue: "quod",
                                    metricName: "dignissimos",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "odio",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "deserunt",
                                    maxComparisonValue: "molestiae",
                                    metricName: "accusantium",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quas",
                                    expressions: [
                                      "consequuntur",
                                      "deleniti",
                                      "fugit",
                                    ],
                                    maxComparisonValue: "fuga",
                                    minComparisonValue: "mollitia",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "atque",
                                    maxComparisonValue: "explicabo",
                                    metricName: "minima",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sapiente",
                                    expressions: [
                                      "ratione",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "saepe",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "atque",
                                    maxComparisonValue: "et",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "esse",
                                    expressions: [
                                      "nam",
                                      "vero",
                                      "aliquid",
                                      "quasi",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "vel",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "rerum",
                                    metricName: "occaecati",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "culpa",
                                expressions: [
                                  "adipisci",
                                  "cumque",
                                  "consequuntur",
                                ],
                                maxComparisonValue: "consequatur",
                                minComparisonValue: "minus",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "sapiente",
                                maxComparisonValue: "consectetur",
                                metricName: "esse",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nulla",
                                expressions: [
                                  "esse",
                                  "quasi",
                                  "a",
                                ],
                                maxComparisonValue: "error",
                                minComparisonValue: "sint",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "possimus",
                                maxComparisonValue: "quia",
                                metricName: "eveniet",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "veritatis",
                                expressions: [
                                  "quasi",
                                ],
                                maxComparisonValue: "similique",
                                minComparisonValue: "culpa",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "tenetur",
                                maxComparisonValue: "quae",
                                metricName: "earum",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eius",
                                expressions: [
                                  "illum",
                                  "soluta",
                                  "accusantium",
                                ],
                                maxComparisonValue: "aliquam",
                                minComparisonValue: "sapiente",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "ullam",
                                maxComparisonValue: "reprehenderit",
                                metricName: "ullam",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatum",
                                expressions: [
                                  "quibusdam",
                                ],
                                maxComparisonValue: "ex",
                                minComparisonValue: "deleniti",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "dolorum",
                                maxComparisonValue: "architecto",
                                metricName: "omnis",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "et",
                                expressions: [
                                  "ipsa",
                                  "minima",
                                ],
                                maxComparisonValue: "veritatis",
                                minComparisonValue: "consectetur",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "iste",
                                maxComparisonValue: "temporibus",
                                metricName: "accusantium",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "laudantium",
                                expressions: [
                                  "mollitia",
                                  "ab",
                                ],
                                maxComparisonValue: "corrupti",
                                minComparisonValue: "non",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "dolor",
                                maxComparisonValue: "occaecati",
                                metricName: "numquam",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptas",
                                expressions: [
                                  "dignissimos",
                                ],
                                maxComparisonValue: "dicta",
                                minComparisonValue: "maiores",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "velit",
                                maxComparisonValue: "voluptatibus",
                                metricName: "voluptas",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ea",
                                expressions: [
                                  "consequuntur",
                                  "repellendus",
                                ],
                                maxComparisonValue: "officia",
                                minComparisonValue: "maxime",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "officia",
                                maxComparisonValue: "asperiores",
                                metricName: "nemo",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quod",
                                expressions: [
                                  "ab",
                                  "adipisci",
                                ],
                                maxComparisonValue: "fuga",
                                minComparisonValue: "id",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "velit",
                                maxComparisonValue: "culpa",
                                metricName: "est",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "fugiat",
                                expressions: [
                                  "ducimus",
                                  "quos",
                                ],
                                maxComparisonValue: "vel",
                                minComparisonValue: "labore",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "facilis",
                                maxComparisonValue: "cum",
                                metricName: "commodi",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "nemo",
                                  "recusandae",
                                  "aliquid",
                                  "aperiam",
                                ],
                                maxComparisonValue: "cum",
                                minComparisonValue: "consectetur",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "exercitationem",
                                maxComparisonValue: "earum",
                                metricName: "facere",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "suscipit",
                                expressions: [
                                  "quidem",
                                  "saepe",
                                  "necessitatibus",
                                  "dolore",
                                ],
                                maxComparisonValue: "sunt",
                                minComparisonValue: "asperiores",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "amet",
                                metricName: "beatae",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsa",
                                    expressions: [
                                      "libero",
                                      "vitae",
                                      "accusamus",
                                      "similique",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "aspernatur",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "voluptas",
                                    metricName: "minima",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "adipisci",
                                    expressions: [
                                      "dolores",
                                      "blanditiis",
                                      "in",
                                      "dolore",
                                    ],
                                    maxComparisonValue: "aliquam",
                                    minComparisonValue: "officiis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "adipisci",
                                    metricName: "cum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nesciunt",
                                    expressions: [
                                      "corrupti",
                                      "pariatur",
                                      "totam",
                                    ],
                                    maxComparisonValue: "hic",
                                    minComparisonValue: "exercitationem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "rerum",
                                    metricName: "sed",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "voluptate",
                                      "expedita",
                                      "ab",
                                    ],
                                    maxComparisonValue: "iste",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "in",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "architecto",
                                      "suscipit",
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "debitis",
                                    minComparisonValue: "illo",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perferendis",
                                    maxComparisonValue: "corrupti",
                                    metricName: "maiores",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "necessitatibus",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "occaecati",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "tempora",
                                    metricName: "tempora",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "officiis",
                                    ],
                                    maxComparisonValue: "praesentium",
                                    minComparisonValue: "facilis",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "ipsam",
                                    metricName: "debitis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nobis",
                                    expressions: [
                                      "veniam",
                                      "minima",
                                      "recusandae",
                                    ],
                                    maxComparisonValue: "reiciendis",
                                    minComparisonValue: "nulla",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aperiam",
                                    maxComparisonValue: "saepe",
                                    metricName: "numquam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "laudantium",
                                expressions: [
                                  "praesentium",
                                  "cum",
                                ],
                                maxComparisonValue: "laboriosam",
                                minComparisonValue: "dolorum",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "hic",
                                metricName: "expedita",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nostrum",
                                expressions: [
                                  "dolorum",
                                  "corrupti",
                                  "accusamus",
                                ],
                                maxComparisonValue: "tempora",
                                minComparisonValue: "atque",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "fugiat",
                                metricName: "voluptatem",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magnam",
                                expressions: [
                                  "esse",
                                ],
                                maxComparisonValue: "ipsam",
                                minComparisonValue: "sit",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "quas",
                                maxComparisonValue: "repudiandae",
                                metricName: "corporis",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ex",
                                expressions: [
                                  "sit",
                                ],
                                maxComparisonValue: "vel",
                                minComparisonValue: "nostrum",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "consequatur",
                                metricName: "incidunt",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "dicta",
                                expressions: [
                                  "occaecati",
                                ],
                                maxComparisonValue: "labore",
                                minComparisonValue: "quidem",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "laborum",
                                maxComparisonValue: "nam",
                                metricName: "tenetur",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "amet",
                                expressions: [
                                  "voluptate",
                                  "unde",
                                  "reiciendis",
                                ],
                                maxComparisonValue: "provident",
                                minComparisonValue: "repellendus",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "voluptates",
                                maxComparisonValue: "perferendis",
                                metricName: "est",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "facere",
                                expressions: [
                                  "praesentium",
                                  "mollitia",
                                  "veniam",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "quisquam",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "quasi",
                                maxComparisonValue: "atque",
                                metricName: "reprehenderit",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quidem",
                                expressions: [
                                  "et",
                                  "esse",
                                  "amet",
                                  "assumenda",
                                ],
                                maxComparisonValue: "ea",
                                minComparisonValue: "atque",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "officiis",
                                maxComparisonValue: "officiis",
                                metricName: "accusamus",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aspernatur",
                                expressions: [
                                  "maiores",
                                  "corrupti",
                                ],
                                maxComparisonValue: "at",
                                minComparisonValue: "error",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "suscipit",
                                maxComparisonValue: "repudiandae",
                                metricName: "atque",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "accusantium",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolores",
                                    maxComparisonValue: "enim",
                                    metricName: "laboriosam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "molestias",
                                    expressions: [
                                      "saepe",
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "occaecati",
                                    minComparisonValue: "officiis",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "adipisci",
                                    metricName: "eveniet",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "id",
                                    expressions: [
                                      "reprehenderit",
                                      "error",
                                    ],
                                    maxComparisonValue: "illo",
                                    minComparisonValue: "corporis",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eveniet",
                                    maxComparisonValue: "non",
                                    metricName: "vero",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "totam",
                                    expressions: [
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "qui",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iure",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "ratione",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rem",
                                    expressions: [
                                      "ad",
                                      "repellat",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "corporis",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "mollitia",
                                    metricName: "voluptas",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "minima",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nesciunt",
                                    maxComparisonValue: "quae",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "molestiae",
                                    expressions: [
                                      "ut",
                                      "culpa",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "debitis",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "nemo",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "ullam",
                                    ],
                                    maxComparisonValue: "quasi",
                                    minComparisonValue: "animi",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "mollitia",
                                    maxComparisonValue: "provident",
                                    metricName: "possimus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "repellat",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "ullam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nam",
                                    maxComparisonValue: "earum",
                                    metricName: "officia",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "modi",
                                    expressions: [
                                      "molestias",
                                      "officiis",
                                      "sapiente",
                                      "cumque",
                                    ],
                                    maxComparisonValue: "vitae",
                                    minComparisonValue: "rerum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quis",
                                    maxComparisonValue: "inventore",
                                    metricName: "fugit",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "aspernatur",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "eius",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "impedit",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minima",
                                    expressions: [
                                      "cupiditate",
                                    ],
                                    maxComparisonValue: "provident",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "illum",
                                    metricName: "eaque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "porro",
                                    expressions: [
                                      "dolorem",
                                      "fugit",
                                    ],
                                    maxComparisonValue: "cumque",
                                    minComparisonValue: "fuga",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "nulla",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "natus",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "suscipit",
                                    minComparisonValue: "adipisci",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "doloribus",
                                    metricName: "nulla",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nihil",
                                    expressions: [
                                      "dicta",
                                      "iusto",
                                    ],
                                    maxComparisonValue: "esse",
                                    minComparisonValue: "praesentium",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reiciendis",
                                    maxComparisonValue: "vel",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dicta",
                                    expressions: [
                                      "tempora",
                                      "esse",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "consectetur",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "laborum",
                                    metricName: "sunt",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "suscipit",
                                      "aliquid",
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "voluptas",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "id",
                                    maxComparisonValue: "ab",
                                    metricName: "error",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "mollitia",
                                    expressions: [
                                      "libero",
                                      "ad",
                                      "deleniti",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "vitae",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ex",
                                    maxComparisonValue: "quo",
                                    metricName: "ex",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "expedita",
                                    expressions: [
                                      "molestias",
                                    ],
                                    maxComparisonValue: "cum",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "omnis",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "officiis",
                                      "architecto",
                                      "fuga",
                                      "pariatur",
                                    ],
                                    maxComparisonValue: "debitis",
                                    minComparisonValue: "voluptatem",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "deleniti",
                                    maxComparisonValue: "earum",
                                    metricName: "ex",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "asperiores",
                                      "ratione",
                                    ],
                                    maxComparisonValue: "ullam",
                                    minComparisonValue: "perferendis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "totam",
                                    maxComparisonValue: "impedit",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "culpa",
                                    expressions: [
                                      "aliquam",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "deleniti",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempora",
                                    maxComparisonValue: "dolor",
                                    metricName: "consequatur",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laudantium",
                                    expressions: [
                                      "dolor",
                                    ],
                                    maxComparisonValue: "fugiat",
                                    minComparisonValue: "ipsam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "quas",
                                    metricName: "eveniet",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sed",
                                expressions: [
                                  "nesciunt",
                                  "expedita",
                                ],
                                maxComparisonValue: "eum",
                                minComparisonValue: "vel",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "magnam",
                                maxComparisonValue: "exercitationem",
                                metricName: "ab",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nobis",
                                expressions: [
                                  "recusandae",
                                  "consequuntur",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "exercitationem",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "quasi",
                                maxComparisonValue: "nisi",
                                metricName: "at",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "harum",
                                expressions: [
                                  "doloribus",
                                ],
                                maxComparisonValue: "repudiandae",
                                minComparisonValue: "optio",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "nemo",
                                maxComparisonValue: "voluptate",
                                metricName: "blanditiis",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "numquam",
                                expressions: [
                                  "quos",
                                  "eius",
                                ],
                                maxComparisonValue: "aspernatur",
                                minComparisonValue: "ducimus",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "fuga",
                                maxComparisonValue: "laudantium",
                                metricName: "incidunt",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "dicta",
                                expressions: [
                                  "consequuntur",
                                  "consectetur",
                                ],
                                maxComparisonValue: "aperiam",
                                minComparisonValue: "cupiditate",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "soluta",
                                maxComparisonValue: "alias",
                                metricName: "omnis",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "iste",
                                expressions: [
                                  "inventore",
                                ],
                                maxComparisonValue: "fuga",
                                minComparisonValue: "accusamus",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "distinctio",
                                maxComparisonValue: "omnis",
                                metricName: "delectus",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "maxime",
                                expressions: [
                                  "temporibus",
                                  "quos",
                                ],
                                maxComparisonValue: "commodi",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "totam",
                                maxComparisonValue: "earum",
                                metricName: "modi",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "vel",
                                  "alias",
                                ],
                                maxComparisonValue: "quasi",
                                minComparisonValue: "non",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "enim",
                                maxComparisonValue: "sint",
                                metricName: "nulla",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sint",
                                    expressions: [
                                      "impedit",
                                      "hic",
                                      "necessitatibus",
                                      "asperiores",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "voluptas",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "quae",
                                    metricName: "minus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "atque",
                                    ],
                                    maxComparisonValue: "ipsum",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "soluta",
                                    maxComparisonValue: "repudiandae",
                                    metricName: "nam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sequi",
                                    expressions: [
                                      "neque",
                                      "quo",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "quibusdam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "odit",
                                    maxComparisonValue: "voluptatibus",
                                    metricName: "vel",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "inventore",
                                    expressions: [
                                      "libero",
                                      "architecto",
                                      "voluptatibus",
                                      "quia",
                                    ],
                                    maxComparisonValue: "porro",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illo",
                                    maxComparisonValue: "accusantium",
                                    metricName: "vel",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "excepturi",
                                    expressions: [
                                      "velit",
                                      "ut",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "impedit",
                                    maxComparisonValue: "voluptatibus",
                                    metricName: "iste",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nisi",
                                    expressions: [
                                      "velit",
                                      "laborum",
                                      "non",
                                      "dolor",
                                    ],
                                    maxComparisonValue: "iusto",
                                    minComparisonValue: "sit",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "officia",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "placeat",
                                      "perspiciatis",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "a",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "unde",
                                    metricName: "necessitatibus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsam",
                                    expressions: [
                                      "est",
                                      "error",
                                    ],
                                    maxComparisonValue: "esse",
                                    minComparisonValue: "labore",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "consectetur",
                                    metricName: "vitae",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ex",
                                    expressions: [
                                      "soluta",
                                      "libero",
                                    ],
                                    maxComparisonValue: "rem",
                                    minComparisonValue: "dolorum",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugit",
                                    maxComparisonValue: "alias",
                                    metricName: "magni",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quae",
                                    expressions: [
                                      "neque",
                                      "exercitationem",
                                    ],
                                    maxComparisonValue: "itaque",
                                    minComparisonValue: "et",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "unde",
                                    maxComparisonValue: "nulla",
                                    metricName: "distinctio",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quia",
                                    expressions: [
                                      "omnis",
                                      "libero",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "id",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugiat",
                                    maxComparisonValue: "officia",
                                    metricName: "quos",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptates",
                                expressions: [
                                  "aperiam",
                                ],
                                maxComparisonValue: "totam",
                                minComparisonValue: "dolore",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "distinctio",
                                maxComparisonValue: "voluptatem",
                                metricName: "autem",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "beatae",
                                expressions: [
                                  "facere",
                                  "corrupti",
                                  "molestiae",
                                ],
                                maxComparisonValue: "provident",
                                minComparisonValue: "accusamus",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "tempore",
                                maxComparisonValue: "sint",
                                metricName: "ea",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "rerum",
                                expressions: [
                                  "corporis",
                                  "officiis",
                                  "voluptatibus",
                                ],
                                maxComparisonValue: "cum",
                                minComparisonValue: "at",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "quidem",
                                metricName: "fuga",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "expedita",
                                expressions: [
                                  "eos",
                                  "quibusdam",
                                  "odio",
                                  "praesentium",
                                ],
                                maxComparisonValue: "odit",
                                minComparisonValue: "explicabo",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "earum",
                                metricName: "adipisci",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ut",
                                expressions: [
                                  "quis",
                                  "beatae",
                                  "unde",
                                ],
                                maxComparisonValue: "molestiae",
                                minComparisonValue: "delectus",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "fugit",
                                maxComparisonValue: "numquam",
                                metricName: "numquam",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "expedita",
                                    ],
                                    maxComparisonValue: "voluptatum",
                                    minComparisonValue: "cupiditate",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "placeat",
                                    maxComparisonValue: "enim",
                                    metricName: "neque",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eum",
                                    expressions: [
                                      "corporis",
                                      "magnam",
                                    ],
                                    maxComparisonValue: "voluptates",
                                    minComparisonValue: "maiores",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aperiam",
                                    maxComparisonValue: "libero",
                                    metricName: "ratione",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "occaecati",
                                    expressions: [
                                      "quo",
                                      "velit",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "fuga",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "impedit",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "odit",
                                    expressions: [
                                      "pariatur",
                                      "nemo",
                                      "reprehenderit",
                                      "aperiam",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "minima",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ducimus",
                                    maxComparisonValue: "excepturi",
                                    metricName: "dolores",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "itaque",
                                      "similique",
                                      "optio",
                                      "ex",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "placeat",
                                    maxComparisonValue: "quidem",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "modi",
                                    expressions: [
                                      "sint",
                                    ],
                                    maxComparisonValue: "vero",
                                    minComparisonValue: "sequi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cum",
                                    maxComparisonValue: "dicta",
                                    metricName: "earum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nam",
                                    expressions: [
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "nobis",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ducimus",
                                    maxComparisonValue: "maiores",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "libero",
                                    expressions: [
                                      "occaecati",
                                      "nemo",
                                      "aliquam",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "doloribus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "enim",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "totam",
                                    expressions: [
                                      "odio",
                                      "eaque",
                                      "saepe",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "assumenda",
                                    maxComparisonValue: "tempore",
                                    metricName: "libero",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "cum",
                                      "ipsum",
                                      "adipisci",
                                      "saepe",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "doloremque",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "veniam",
                                    maxComparisonValue: "libero",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eligendi",
                                    expressions: [
                                      "non",
                                      "magnam",
                                      "itaque",
                                      "sed",
                                    ],
                                    maxComparisonValue: "asperiores",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "laudantium",
                                    metricName: "odit",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facilis",
                                    expressions: [
                                      "nisi",
                                      "voluptatibus",
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "distinctio",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quis",
                                    maxComparisonValue: "nisi",
                                    metricName: "libero",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatibus",
                                    expressions: [
                                      "consequuntur",
                                      "debitis",
                                      "labore",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "eos",
                                    minComparisonValue: "reprehenderit",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "neque",
                                    maxComparisonValue: "iusto",
                                    metricName: "est",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugiat",
                                    expressions: [
                                      "officiis",
                                      "ducimus",
                                      "dolor",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "error",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "dignissimos",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "delectus",
                                expressions: [
                                  "dignissimos",
                                  "libero",
                                ],
                                maxComparisonValue: "illo",
                                minComparisonValue: "ab",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "accusamus",
                                maxComparisonValue: "saepe",
                                metricName: "tempore",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "reprehenderit",
                                  "praesentium",
                                  "nemo",
                                  "repellat",
                                ],
                                maxComparisonValue: "quisquam",
                                minComparisonValue: "sequi",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "deleniti",
                                maxComparisonValue: "illo",
                                metricName: "labore",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "quisquam",
          },
          {
            dynamicSegment: {
              name: "provident",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nam",
                                    expressions: [
                                      "quas",
                                      "provident",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "dignissimos",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "similique",
                                    metricName: "repellendus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "impedit",
                                    expressions: [
                                      "aut",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "quae",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "praesentium",
                                    metricName: "quidem",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quasi",
                                    expressions: [
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "doloremque",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "provident",
                                    metricName: "dolorum",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequatur",
                                    expressions: [
                                      "molestiae",
                                      "itaque",
                                    ],
                                    maxComparisonValue: "facilis",
                                    minComparisonValue: "corrupti",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "accusamus",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "dolor",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "a",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "atque",
                                    metricName: "beatae",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "voluptatem",
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "ea",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dignissimos",
                                    maxComparisonValue: "repellat",
                                    metricName: "velit",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "dignissimos",
                                      "consectetur",
                                      "soluta",
                                      "natus",
                                    ],
                                    maxComparisonValue: "temporibus",
                                    minComparisonValue: "officia",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tenetur",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "quo",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dignissimos",
                                    expressions: [
                                      "qui",
                                      "consectetur",
                                      "repellat",
                                      "explicabo",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "exercitationem",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "ab",
                                    metricName: "illo",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "distinctio",
                                      "in",
                                    ],
                                    maxComparisonValue: "exercitationem",
                                    minComparisonValue: "labore",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "repudiandae",
                                    maxComparisonValue: "modi",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rem",
                                    expressions: [
                                      "odit",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "similique",
                                    maxComparisonValue: "minima",
                                    metricName: "libero",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "mollitia",
                                    expressions: [
                                      "fugiat",
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "molestiae",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ab",
                                    maxComparisonValue: "modi",
                                    metricName: "aut",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "commodi",
                                    expressions: [
                                      "dolorum",
                                      "possimus",
                                    ],
                                    maxComparisonValue: "voluptate",
                                    minComparisonValue: "consectetur",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "itaque",
                                    metricName: "minus",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iusto",
                                    expressions: [
                                      "et",
                                      "facilis",
                                      "amet",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "fuga",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rem",
                                    maxComparisonValue: "aut",
                                    metricName: "quos",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "mollitia",
                                      "nulla",
                                      "officia",
                                      "sed",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "incidunt",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "modi",
                                      "optio",
                                    ],
                                    maxComparisonValue: "voluptatibus",
                                    minComparisonValue: "molestias",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "totam",
                                    metricName: "sequi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "velit",
                                    ],
                                    maxComparisonValue: "reiciendis",
                                    minComparisonValue: "repellat",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laborum",
                                    maxComparisonValue: "natus",
                                    metricName: "accusamus",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "voluptates",
                                      "non",
                                      "rem",
                                      "quia",
                                    ],
                                    maxComparisonValue: "ullam",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "eligendi",
                                    metricName: "quae",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "architecto",
                                    expressions: [
                                      "optio",
                                      "rem",
                                    ],
                                    maxComparisonValue: "perferendis",
                                    minComparisonValue: "facilis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "iste",
                                    metricName: "dicta",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "itaque",
                                      "maxime",
                                    ],
                                    maxComparisonValue: "modi",
                                    minComparisonValue: "consequuntur",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "doloribus",
                                    metricName: "impedit",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "sint",
                                    ],
                                    maxComparisonValue: "nihil",
                                    minComparisonValue: "esse",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "odio",
                                    maxComparisonValue: "nesciunt",
                                    metricName: "debitis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "consequuntur",
                                      "officia",
                                    ],
                                    maxComparisonValue: "reprehenderit",
                                    minComparisonValue: "distinctio",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "rem",
                                    metricName: "maiores",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "facere",
                                    ],
                                    maxComparisonValue: "aliquam",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugiat",
                                    maxComparisonValue: "est",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "illo",
                                expressions: [
                                  "nemo",
                                  "doloribus",
                                  "possimus",
                                  "unde",
                                ],
                                maxComparisonValue: "incidunt",
                                minComparisonValue: "explicabo",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "cupiditate",
                                maxComparisonValue: "optio",
                                metricName: "alias",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "commodi",
                                expressions: [
                                  "consequuntur",
                                  "veniam",
                                  "debitis",
                                  "officia",
                                ],
                                maxComparisonValue: "sint",
                                minComparisonValue: "ut",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "tenetur",
                                maxComparisonValue: "adipisci",
                                metricName: "libero",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ex",
                                expressions: [
                                  "ab",
                                  "beatae",
                                  "hic",
                                  "nisi",
                                ],
                                maxComparisonValue: "quisquam",
                                minComparisonValue: "dolor",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "fuga",
                                maxComparisonValue: "minima",
                                metricName: "architecto",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "expedita",
                                      "facilis",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "sit",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "culpa",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "amet",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "veniam",
                                    expressions: [
                                      "itaque",
                                      "a",
                                      "quisquam",
                                      "enim",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "assumenda",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "architecto",
                                    maxComparisonValue: "alias",
                                    metricName: "culpa",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "dicta",
                                    ],
                                    maxComparisonValue: "vel",
                                    minComparisonValue: "perspiciatis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "architecto",
                                    metricName: "accusantium",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "iure",
                                expressions: [
                                  "quod",
                                  "nemo",
                                  "recusandae",
                                  "velit",
                                ],
                                maxComparisonValue: "magnam",
                                minComparisonValue: "dignissimos",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "sed",
                                maxComparisonValue: "odio",
                                metricName: "natus",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "doloribus",
                                expressions: [
                                  "quidem",
                                  "itaque",
                                  "laboriosam",
                                ],
                                maxComparisonValue: "unde",
                                minComparisonValue: "modi",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "hic",
                                maxComparisonValue: "cum",
                                metricName: "aspernatur",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "incidunt",
                                expressions: [
                                  "quod",
                                  "id",
                                  "saepe",
                                  "autem",
                                ],
                                maxComparisonValue: "quo",
                                minComparisonValue: "nesciunt",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "nemo",
                                maxComparisonValue: "illum",
                                metricName: "facilis",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "assumenda",
                                expressions: [
                                  "distinctio",
                                  "pariatur",
                                  "ad",
                                  "facere",
                                ],
                                maxComparisonValue: "laborum",
                                minComparisonValue: "eveniet",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "incidunt",
                                maxComparisonValue: "maxime",
                                metricName: "ipsam",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "molestias",
                                expressions: [
                                  "est",
                                  "occaecati",
                                  "labore",
                                ],
                                maxComparisonValue: "quo",
                                minComparisonValue: "perferendis",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "magnam",
                                metricName: "quaerat",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nostrum",
                                expressions: [
                                  "unde",
                                  "nulla",
                                  "error",
                                  "mollitia",
                                ],
                                maxComparisonValue: "magnam",
                                minComparisonValue: "nostrum",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "corrupti",
                                maxComparisonValue: "fuga",
                                metricName: "facere",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "deserunt",
                                expressions: [
                                  "laboriosam",
                                  "doloremque",
                                  "voluptatem",
                                  "facere",
                                ],
                                maxComparisonValue: "necessitatibus",
                                minComparisonValue: "maxime",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "eaque",
                                maxComparisonValue: "architecto",
                                metricName: "similique",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "sed",
                                  "necessitatibus",
                                  "impedit",
                                  "ipsa",
                                ],
                                maxComparisonValue: "excepturi",
                                minComparisonValue: "a",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "laudantium",
                                maxComparisonValue: "maiores",
                                metricName: "alias",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "velit",
                                    expressions: [
                                      "esse",
                                      "in",
                                    ],
                                    maxComparisonValue: "eligendi",
                                    minComparisonValue: "quasi",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "excepturi",
                                    metricName: "accusantium",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "dicta",
                                      "odit",
                                    ],
                                    maxComparisonValue: "corporis",
                                    minComparisonValue: "rerum",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "error",
                                    maxComparisonValue: "vel",
                                    metricName: "accusantium",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ex",
                                    expressions: [
                                      "veritatis",
                                      "ullam",
                                      "quae",
                                    ],
                                    maxComparisonValue: "similique",
                                    minComparisonValue: "incidunt",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "deserunt",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nesciunt",
                                    expressions: [
                                      "quis",
                                      "cupiditate",
                                      "aliquam",
                                      "excepturi",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reiciendis",
                                    maxComparisonValue: "amet",
                                    metricName: "nemo",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quas",
                                    expressions: [
                                      "aliquid",
                                      "asperiores",
                                    ],
                                    maxComparisonValue: "a",
                                    minComparisonValue: "nobis",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusantium",
                                    maxComparisonValue: "dicta",
                                    metricName: "minus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "porro",
                                    expressions: [
                                      "quidem",
                                      "modi",
                                      "voluptates",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "eius",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eligendi",
                                    maxComparisonValue: "asperiores",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repellat",
                                    expressions: [
                                      "animi",
                                      "maiores",
                                      "itaque",
                                      "nulla",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "corporis",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "enim",
                                    metricName: "officia",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repudiandae",
                                    expressions: [
                                      "officia",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "quasi",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eius",
                                    maxComparisonValue: "quisquam",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quia",
                                    expressions: [
                                      "reprehenderit",
                                      "quod",
                                    ],
                                    maxComparisonValue: "quos",
                                    minComparisonValue: "corrupti",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "amet",
                                    metricName: "laborum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "molestias",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "sunt",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "neque",
                                    maxComparisonValue: "odit",
                                    metricName: "earum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eaque",
                                    expressions: [
                                      "veniam",
                                      "nihil",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "nisi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quis",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "nemo",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "repellendus",
                                      "perferendis",
                                      "id",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "repellat",
                                    maxComparisonValue: "repudiandae",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "iure",
                                      "explicabo",
                                      "minus",
                                      "soluta",
                                    ],
                                    maxComparisonValue: "dolorum",
                                    minComparisonValue: "velit",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "praesentium",
                                    maxComparisonValue: "error",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "cumque",
                                      "doloremque",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "eaque",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "excepturi",
                                    metricName: "magni",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "sed",
                                      "accusamus",
                                      "optio",
                                    ],
                                    maxComparisonValue: "delectus",
                                    minComparisonValue: "minus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quos",
                                    maxComparisonValue: "asperiores",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "nostrum",
                                  "at",
                                  "possimus",
                                  "neque",
                                ],
                                maxComparisonValue: "pariatur",
                                minComparisonValue: "vel",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "mollitia",
                                maxComparisonValue: "quae",
                                metricName: "quos",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "inventore",
                                      "aliquid",
                                      "laudantium",
                                      "est",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "rem",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "recusandae",
                                    expressions: [
                                      "blanditiis",
                                      "numquam",
                                    ],
                                    maxComparisonValue: "sequi",
                                    minComparisonValue: "voluptatum",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "veritatis",
                                    metricName: "tenetur",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "totam",
                                    expressions: [
                                      "deserunt",
                                      "magni",
                                      "nihil",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fuga",
                                    maxComparisonValue: "aut",
                                    metricName: "dolore",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ullam",
                                    expressions: [
                                      "placeat",
                                      "voluptas",
                                      "occaecati",
                                      "unde",
                                    ],
                                    maxComparisonValue: "illo",
                                    minComparisonValue: "nihil",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "ipsam",
                                    metricName: "quasi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "harum",
                                    expressions: [
                                      "facilis",
                                      "beatae",
                                      "cumque",
                                      "delectus",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "expedita",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rem",
                                    maxComparisonValue: "atque",
                                    metricName: "officiis",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sapiente",
                                    expressions: [
                                      "incidunt",
                                      "quod",
                                      "minus",
                                      "porro",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "excepturi",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "quo",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "pariatur",
                                    ],
                                    maxComparisonValue: "eligendi",
                                    minComparisonValue: "recusandae",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "laudantium",
                                    metricName: "iusto",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magni",
                                    expressions: [
                                      "doloremque",
                                      "voluptatem",
                                      "eum",
                                    ],
                                    maxComparisonValue: "at",
                                    minComparisonValue: "eum",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "nihil",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deserunt",
                                    expressions: [
                                      "nostrum",
                                      "atque",
                                      "architecto",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "quae",
                                    metricName: "quas",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "natus",
                                      "cumque",
                                      "natus",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "doloribus",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "mollitia",
                                    metricName: "cumque",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eum",
                                    expressions: [
                                      "illum",
                                      "nesciunt",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "odio",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "recusandae",
                                    metricName: "voluptates",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "nesciunt",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deserunt",
                                    expressions: [
                                      "sunt",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "voluptatum",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "dolorem",
                                    metricName: "repellat",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "hic",
                                      "eaque",
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "aperiam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nulla",
                                    maxComparisonValue: "enim",
                                    metricName: "illo",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "optio",
                                    expressions: [
                                      "ex",
                                      "repellat",
                                      "quae",
                                      "deleniti",
                                    ],
                                    maxComparisonValue: "expedita",
                                    minComparisonValue: "hic",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "sed",
                                    metricName: "beatae",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "animi",
                                    expressions: [
                                      "tenetur",
                                      "dignissimos",
                                    ],
                                    maxComparisonValue: "esse",
                                    minComparisonValue: "animi",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "esse",
                                    maxComparisonValue: "eveniet",
                                    metricName: "earum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "dignissimos",
                                      "ipsam",
                                      "explicabo",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "aliquid",
                                    minComparisonValue: "quis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsum",
                                    maxComparisonValue: "ut",
                                    metricName: "quaerat",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eveniet",
                                    expressions: [
                                      "expedita",
                                    ],
                                    maxComparisonValue: "libero",
                                    minComparisonValue: "iste",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "minus",
                                    maxComparisonValue: "quos",
                                    metricName: "temporibus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aperiam",
                                expressions: [
                                  "laudantium",
                                  "tempora",
                                  "quae",
                                  "omnis",
                                ],
                                maxComparisonValue: "illum",
                                minComparisonValue: "rem",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "deleniti",
                                maxComparisonValue: "modi",
                                metricName: "earum",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "labore",
                                expressions: [
                                  "sequi",
                                  "saepe",
                                  "consequatur",
                                  "esse",
                                ],
                                maxComparisonValue: "debitis",
                                minComparisonValue: "facere",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "cumque",
                                maxComparisonValue: "aliquam",
                                metricName: "dolorum",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "porro",
                                ],
                                maxComparisonValue: "laborum",
                                minComparisonValue: "nobis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "aut",
                                metricName: "ipsam",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reprehenderit",
                                expressions: [
                                  "necessitatibus",
                                ],
                                maxComparisonValue: "accusantium",
                                minComparisonValue: "ad",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "molestiae",
                                maxComparisonValue: "quia",
                                metricName: "laudantium",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "expedita",
                                expressions: [
                                  "repellendus",
                                ],
                                maxComparisonValue: "nesciunt",
                                minComparisonValue: "ipsa",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "dolore",
                                maxComparisonValue: "esse",
                                metricName: "accusantium",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quam",
                                expressions: [
                                  "aliquam",
                                  "delectus",
                                  "culpa",
                                ],
                                maxComparisonValue: "voluptatum",
                                minComparisonValue: "iusto",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "voluptatibus",
                                maxComparisonValue: "voluptas",
                                metricName: "non",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "necessitatibus",
                                      "distinctio",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "laboriosam",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "sequi",
                                    metricName: "sunt",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "amet",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "in",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "temporibus",
                                    maxComparisonValue: "ratione",
                                    metricName: "dolor",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "vitae",
                                      "est",
                                      "accusantium",
                                      "quod",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "maiores",
                                    maxComparisonValue: "odio",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "provident",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "repellendus",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "alias",
                                    maxComparisonValue: "impedit",
                                    metricName: "sequi",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "in",
                                    expressions: [
                                      "sunt",
                                      "enim",
                                      "nulla",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "distinctio",
                                    minComparisonValue: "mollitia",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "et",
                                    metricName: "quas",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dicta",
                                    expressions: [
                                      "tempora",
                                      "eveniet",
                                      "repudiandae",
                                      "sed",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "quas",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "eligendi",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "veritatis",
                                    expressions: [
                                      "itaque",
                                      "vero",
                                      "quidem",
                                      "illo",
                                    ],
                                    maxComparisonValue: "quo",
                                    minComparisonValue: "dignissimos",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "distinctio",
                                    maxComparisonValue: "possimus",
                                    metricName: "cum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quod",
                                    expressions: [
                                      "quaerat",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "deserunt",
                                    maxComparisonValue: "odit",
                                    metricName: "ad",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iusto",
                                    expressions: [
                                      "magnam",
                                      "odio",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illo",
                                    maxComparisonValue: "exercitationem",
                                    metricName: "laborum",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maxime",
                                    expressions: [
                                      "repellat",
                                      "nostrum",
                                      "illum",
                                    ],
                                    maxComparisonValue: "quibusdam",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "explicabo",
                                    maxComparisonValue: "consectetur",
                                    metricName: "temporibus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "culpa",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "aspernatur",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officia",
                                    maxComparisonValue: "suscipit",
                                    metricName: "harum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corrupti",
                                    expressions: [
                                      "quis",
                                      "iure",
                                    ],
                                    maxComparisonValue: "ab",
                                    minComparisonValue: "quaerat",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sapiente",
                                    maxComparisonValue: "corporis",
                                    metricName: "est",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "nam",
                                      "nemo",
                                      "enim",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "minima",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perferendis",
                                    maxComparisonValue: "corrupti",
                                    metricName: "doloremque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "similique",
                                      "porro",
                                      "impedit",
                                      "nisi",
                                    ],
                                    maxComparisonValue: "cumque",
                                    minComparisonValue: "soluta",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "nam",
                                    metricName: "enim",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maxime",
                                    expressions: [
                                      "voluptatem",
                                      "provident",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "accusantium",
                                    minComparisonValue: "magnam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "explicabo",
                                    metricName: "vel",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "ipsam",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "sequi",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quasi",
                                    maxComparisonValue: "error",
                                    metricName: "nobis",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "aperiam",
                                      "voluptates",
                                      "possimus",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "voluptatem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "corporis",
                                    maxComparisonValue: "ea",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "asperiores",
                                      "autem",
                                      "nesciunt",
                                      "cupiditate",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "provident",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "mollitia",
                                    metricName: "nam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "commodi",
                                expressions: [
                                  "suscipit",
                                ],
                                maxComparisonValue: "voluptate",
                                minComparisonValue: "nisi",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "provident",
                                maxComparisonValue: "laboriosam",
                                metricName: "accusamus",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quisquam",
                                expressions: [
                                  "alias",
                                ],
                                maxComparisonValue: "qui",
                                minComparisonValue: "consequuntur",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "quidem",
                                maxComparisonValue: "sequi",
                                metricName: "amet",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "praesentium",
                                expressions: [
                                  "similique",
                                  "eligendi",
                                  "tempore",
                                ],
                                maxComparisonValue: "amet",
                                minComparisonValue: "debitis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "asperiores",
                                maxComparisonValue: "temporibus",
                                metricName: "id",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quo",
                                expressions: [
                                  "aliquam",
                                  "provident",
                                ],
                                maxComparisonValue: "vero",
                                minComparisonValue: "earum",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "ipsum",
                                maxComparisonValue: "alias",
                                metricName: "doloremque",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "atque",
                                expressions: [
                                  "ex",
                                  "architecto",
                                  "a",
                                ],
                                maxComparisonValue: "laborum",
                                minComparisonValue: "veritatis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "a",
                                maxComparisonValue: "qui",
                                metricName: "accusantium",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "totam",
                                expressions: [
                                  "voluptate",
                                  "quam",
                                  "quod",
                                  "vitae",
                                ],
                                maxComparisonValue: "sapiente",
                                minComparisonValue: "reiciendis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "voluptate",
                                maxComparisonValue: "inventore",
                                metricName: "facere",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sed",
                                    expressions: [
                                      "sequi",
                                      "eligendi",
                                      "voluptatum",
                                    ],
                                    maxComparisonValue: "perferendis",
                                    minComparisonValue: "laborum",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "tenetur",
                                    metricName: "sapiente",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "non",
                                    expressions: [
                                      "illum",
                                      "at",
                                      "tenetur",
                                      "molestias",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "esse",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "voluptates",
                                    metricName: "eum",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "odio",
                                    expressions: [
                                      "porro",
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "mollitia",
                                    minComparisonValue: "quidem",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "nulla",
                                    metricName: "magni",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "a",
                                    expressions: [
                                      "unde",
                                      "ut",
                                      "facere",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "recusandae",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "dignissimos",
                                    metricName: "iste",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eaque",
                                expressions: [
                                  "laboriosam",
                                  "laborum",
                                ],
                                maxComparisonValue: "autem",
                                minComparisonValue: "assumenda",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "fugiat",
                                maxComparisonValue: "doloremque",
                                metricName: "voluptatem",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quis",
                                expressions: [
                                  "ratione",
                                ],
                                maxComparisonValue: "quas",
                                minComparisonValue: "maxime",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "cumque",
                                maxComparisonValue: "doloremque",
                                metricName: "totam",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "est",
                                expressions: [
                                  "veritatis",
                                ],
                                maxComparisonValue: "necessitatibus",
                                minComparisonValue: "iste",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "ipsam",
                                maxComparisonValue: "consequuntur",
                                metricName: "cumque",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sunt",
                                expressions: [
                                  "beatae",
                                  "autem",
                                  "ducimus",
                                ],
                                maxComparisonValue: "libero",
                                minComparisonValue: "molestias",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "ipsum",
                                maxComparisonValue: "impedit",
                                metricName: "quos",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laudantium",
                                    expressions: [
                                      "commodi",
                                      "quibusdam",
                                      "consectetur",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "assumenda",
                                    maxComparisonValue: "dolore",
                                    metricName: "enim",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ex",
                                    expressions: [
                                      "dicta",
                                      "quia",
                                      "commodi",
                                      "neque",
                                    ],
                                    maxComparisonValue: "quibusdam",
                                    minComparisonValue: "numquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "omnis",
                                    metricName: "neque",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "excepturi",
                                expressions: [
                                  "quos",
                                  "dicta",
                                  "sapiente",
                                  "ipsum",
                                ],
                                maxComparisonValue: "consequatur",
                                minComparisonValue: "soluta",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "sequi",
                                maxComparisonValue: "recusandae",
                                metricName: "labore",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aperiam",
                                expressions: [
                                  "illum",
                                ],
                                maxComparisonValue: "iusto",
                                minComparisonValue: "magni",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "ad",
                                metricName: "voluptate",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sit",
                                expressions: [
                                  "laboriosam",
                                  "quaerat",
                                ],
                                maxComparisonValue: "quasi",
                                minComparisonValue: "rem",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "doloremque",
                                maxComparisonValue: "assumenda",
                                metricName: "provident",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "inventore",
                                expressions: [
                                  "unde",
                                  "deserunt",
                                  "repellendus",
                                  "consequatur",
                                ],
                                maxComparisonValue: "adipisci",
                                minComparisonValue: "doloremque",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "tempora",
                                maxComparisonValue: "debitis",
                                metricName: "cumque",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "beatae",
          },
          {
            dynamicSegment: {
              name: "id",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eos",
                                    expressions: [
                                      "voluptatem",
                                      "suscipit",
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "facilis",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "quia",
                                    metricName: "officia",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "sapiente",
                                      "esse",
                                    ],
                                    maxComparisonValue: "neque",
                                    minComparisonValue: "quidem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "praesentium",
                                    maxComparisonValue: "tempora",
                                    metricName: "ipsam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "amet",
                                      "veritatis",
                                      "error",
                                    ],
                                    maxComparisonValue: "voluptatibus",
                                    minComparisonValue: "numquam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorum",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "earum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "animi",
                                    expressions: [
                                      "aliquid",
                                      "nihil",
                                      "facilis",
                                    ],
                                    maxComparisonValue: "optio",
                                    minComparisonValue: "incidunt",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magnam",
                                    maxComparisonValue: "dolores",
                                    metricName: "aliquid",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ad",
                                    expressions: [
                                      "illo",
                                      "suscipit",
                                      "quibusdam",
                                    ],
                                    maxComparisonValue: "fugiat",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "atque",
                                    maxComparisonValue: "voluptates",
                                    metricName: "maiores",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "expedita",
                                      "modi",
                                      "cumque",
                                      "ipsam",
                                    ],
                                    maxComparisonValue: "occaecati",
                                    minComparisonValue: "ipsum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "quasi",
                                    metricName: "fugit",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "id",
                                    expressions: [
                                      "ipsa",
                                      "accusamus",
                                      "placeat",
                                      "quam",
                                    ],
                                    maxComparisonValue: "similique",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "nobis",
                                    metricName: "at",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "temporibus",
                                    expressions: [
                                      "incidunt",
                                      "numquam",
                                      "corrupti",
                                      "similique",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "esse",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iste",
                                    maxComparisonValue: "amet",
                                    metricName: "occaecati",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minima",
                                    expressions: [
                                      "blanditiis",
                                      "quas",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "provident",
                                    minComparisonValue: "quas",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "fuga",
                                    metricName: "facilis",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "a",
                                    expressions: [
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "voluptatibus",
                                    minComparisonValue: "assumenda",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "delectus",
                                    metricName: "odio",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quam",
                                    expressions: [
                                      "similique",
                                      "asperiores",
                                      "modi",
                                    ],
                                    maxComparisonValue: "facere",
                                    minComparisonValue: "neque",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "sed",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "reiciendis",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "vero",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "quasi",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugiat",
                                    expressions: [
                                      "iure",
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "modi",
                                    minComparisonValue: "magnam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nulla",
                                    maxComparisonValue: "repudiandae",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "unde",
                                    expressions: [
                                      "eum",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "eveniet",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ratione",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "quidem",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "placeat",
                                    expressions: [
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "nesciunt",
                                    minComparisonValue: "quia",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "quo",
                                    metricName: "laudantium",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "quidem",
                                    minComparisonValue: "molestiae",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "dolor",
                                    metricName: "ad",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "itaque",
                                    expressions: [
                                      "eos",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "ex",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "natus",
                                    maxComparisonValue: "vitae",
                                    metricName: "tenetur",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eligendi",
                                    expressions: [
                                      "dicta",
                                      "inventore",
                                      "ullam",
                                      "iusto",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "voluptate",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "eaque",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "minus",
                                      "a",
                                      "fuga",
                                      "totam",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "at",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "quam",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "commodi",
                                    expressions: [
                                      "rem",
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "aperiam",
                                    minComparisonValue: "perspiciatis",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "unde",
                                    metricName: "cumque",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "temporibus",
                                    expressions: [
                                      "minima",
                                      "a",
                                      "beatae",
                                      "vitae",
                                    ],
                                    maxComparisonValue: "veritatis",
                                    minComparisonValue: "facere",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laborum",
                                    maxComparisonValue: "dicta",
                                    metricName: "voluptatem",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "numquam",
                                expressions: [
                                  "est",
                                ],
                                maxComparisonValue: "quaerat",
                                minComparisonValue: "facere",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "alias",
                                metricName: "sapiente",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quia",
                                expressions: [
                                  "odio",
                                ],
                                maxComparisonValue: "quas",
                                minComparisonValue: "ipsa",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "placeat",
                                maxComparisonValue: "quod",
                                metricName: "eligendi",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "distinctio",
                                expressions: [
                                  "illum",
                                  "soluta",
                                  "magnam",
                                  "laudantium",
                                ],
                                maxComparisonValue: "tempora",
                                minComparisonValue: "esse",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "corrupti",
                                maxComparisonValue: "reiciendis",
                                metricName: "facilis",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "amet",
                                expressions: [
                                  "ab",
                                  "officiis",
                                  "eum",
                                ],
                                maxComparisonValue: "rerum",
                                minComparisonValue: "placeat",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "ad",
                                maxComparisonValue: "blanditiis",
                                metricName: "porro",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ut",
                                expressions: [
                                  "ullam",
                                  "numquam",
                                  "enim",
                                  "cupiditate",
                                ],
                                maxComparisonValue: "occaecati",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "consectetur",
                                maxComparisonValue: "modi",
                                metricName: "aspernatur",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eveniet",
                                expressions: [
                                  "nobis",
                                  "qui",
                                  "accusantium",
                                ],
                                maxComparisonValue: "consequatur",
                                minComparisonValue: "impedit",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "voluptate",
                                maxComparisonValue: "deleniti",
                                metricName: "est",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quos",
                                expressions: [
                                  "quidem",
                                  "in",
                                  "culpa",
                                  "doloremque",
                                ],
                                maxComparisonValue: "fuga",
                                minComparisonValue: "dicta",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "suscipit",
                                maxComparisonValue: "eligendi",
                                metricName: "officiis",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ratione",
                                expressions: [
                                  "quaerat",
                                  "aut",
                                  "natus",
                                  "esse",
                                ],
                                maxComparisonValue: "delectus",
                                minComparisonValue: "deserunt",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "ipsa",
                                maxComparisonValue: "debitis",
                                metricName: "iste",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ducimus",
                                expressions: [
                                  "ipsam",
                                ],
                                maxComparisonValue: "libero",
                                minComparisonValue: "quia",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "qui",
                                metricName: "explicabo",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequatur",
                                expressions: [
                                  "voluptatum",
                                  "velit",
                                  "hic",
                                  "ullam",
                                ],
                                maxComparisonValue: "deserunt",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "iusto",
                                maxComparisonValue: "dignissimos",
                                metricName: "provident",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quasi",
                                    expressions: [
                                      "atque",
                                      "magnam",
                                      "perspiciatis",
                                      "amet",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "sunt",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "illum",
                                    metricName: "porro",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cumque",
                                    expressions: [
                                      "in",
                                      "commodi",
                                      "maxime",
                                    ],
                                    maxComparisonValue: "sed",
                                    minComparisonValue: "minus",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "possimus",
                                    maxComparisonValue: "delectus",
                                    metricName: "harum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "illo",
                                      "nobis",
                                      "esse",
                                      "nisi",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "sequi",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reiciendis",
                                    maxComparisonValue: "quos",
                                    metricName: "numquam",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nam",
                                    expressions: [
                                      "rerum",
                                    ],
                                    maxComparisonValue: "assumenda",
                                    minComparisonValue: "eos",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "repellendus",
                                    metricName: "nam",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "expedita",
                                    expressions: [
                                      "tempore",
                                      "recusandae",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "officia",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laudantium",
                                    maxComparisonValue: "corporis",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "dolores",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "vero",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "temporibus",
                                    metricName: "id",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "a",
                                    expressions: [
                                      "sed",
                                      "nam",
                                      "quia",
                                      "iusto",
                                    ],
                                    maxComparisonValue: "ab",
                                    minComparisonValue: "deserunt",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "blanditiis",
                                    maxComparisonValue: "sint",
                                    metricName: "placeat",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "itaque",
                                    expressions: [
                                      "nemo",
                                      "non",
                                      "recusandae",
                                    ],
                                    maxComparisonValue: "omnis",
                                    minComparisonValue: "ipsa",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolor",
                                    maxComparisonValue: "occaecati",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "ipsam",
                                      "vel",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "modi",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "explicabo",
                                    maxComparisonValue: "modi",
                                    metricName: "doloremque",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "delectus",
                                expressions: [
                                  "dolorum",
                                  "libero",
                                ],
                                maxComparisonValue: "ratione",
                                minComparisonValue: "molestiae",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "saepe",
                                maxComparisonValue: "maiores",
                                metricName: "accusantium",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequuntur",
                                expressions: [
                                  "vitae",
                                  "occaecati",
                                ],
                                maxComparisonValue: "labore",
                                minComparisonValue: "fugiat",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "exercitationem",
                                maxComparisonValue: "veniam",
                                metricName: "modi",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "possimus",
                                expressions: [
                                  "suscipit",
                                  "ex",
                                  "sint",
                                  "est",
                                ],
                                maxComparisonValue: "doloribus",
                                minComparisonValue: "provident",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "deserunt",
                                maxComparisonValue: "fugit",
                                metricName: "autem",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "maxime",
                                expressions: [
                                  "impedit",
                                  "cupiditate",
                                  "deleniti",
                                  "quasi",
                                ],
                                maxComparisonValue: "maiores",
                                minComparisonValue: "voluptatem",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "laudantium",
                                maxComparisonValue: "unde",
                                metricName: "corrupti",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ea",
                                expressions: [
                                  "nam",
                                  "amet",
                                  "adipisci",
                                ],
                                maxComparisonValue: "minus",
                                minComparisonValue: "hic",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "fuga",
                                maxComparisonValue: "consectetur",
                                metricName: "labore",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "veritatis",
                                expressions: [
                                  "voluptatibus",
                                  "magnam",
                                  "aperiam",
                                ],
                                maxComparisonValue: "ducimus",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "numquam",
                                maxComparisonValue: "doloribus",
                                metricName: "eligendi",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "impedit",
          },
          {
            dynamicSegment: {
              name: "numquam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vitae",
                                    expressions: [
                                      "nisi",
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "ratione",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "corrupti",
                                    maxComparisonValue: "est",
                                    metricName: "perferendis",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "nisi",
                                      "dolor",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "maxime",
                                    maxComparisonValue: "expedita",
                                    metricName: "accusantium",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "totam",
                                    expressions: [
                                      "est",
                                      "inventore",
                                      "consequuntur",
                                      "repellendus",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "dolores",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "perspiciatis",
                                    metricName: "magni",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quidem",
                                    expressions: [
                                      "possimus",
                                      "ipsam",
                                      "odio",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "aspernatur",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "praesentium",
                                    metricName: "sint",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facilis",
                                    expressions: [
                                      "reiciendis",
                                      "dolores",
                                      "dolore",
                                      "pariatur",
                                    ],
                                    maxComparisonValue: "facilis",
                                    minComparisonValue: "cupiditate",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "natus",
                                    maxComparisonValue: "nisi",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nostrum",
                                    expressions: [
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "molestiae",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "adipisci",
                                    metricName: "cupiditate",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugiat",
                                    expressions: [
                                      "quas",
                                      "repellendus",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "amet",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "iste",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatibus",
                                    expressions: [
                                      "dolorum",
                                      "soluta",
                                    ],
                                    maxComparisonValue: "cum",
                                    minComparisonValue: "in",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "commodi",
                                    metricName: "fugit",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "qui",
                                      "praesentium",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "totam",
                                    minComparisonValue: "qui",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eligendi",
                                    maxComparisonValue: "incidunt",
                                    metricName: "deleniti",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "odit",
                                      "consectetur",
                                      "inventore",
                                      "minima",
                                    ],
                                    maxComparisonValue: "facilis",
                                    minComparisonValue: "facilis",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nisi",
                                    maxComparisonValue: "ipsam",
                                    metricName: "voluptatem",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ea",
                                    expressions: [
                                      "veniam",
                                      "quidem",
                                      "asperiores",
                                      "eum",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "repudiandae",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestias",
                                    maxComparisonValue: "architecto",
                                    metricName: "expedita",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "assumenda",
                                    expressions: [
                                      "maiores",
                                      "ipsum",
                                      "commodi",
                                      "vitae",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "nam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "neque",
                                    maxComparisonValue: "quod",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "a",
                                    expressions: [
                                      "id",
                                      "atque",
                                      "quaerat",
                                      "aperiam",
                                    ],
                                    maxComparisonValue: "dignissimos",
                                    minComparisonValue: "quam",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fuga",
                                    maxComparisonValue: "iure",
                                    metricName: "deleniti",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "ad",
                                    ],
                                    maxComparisonValue: "illum",
                                    minComparisonValue: "sit",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "expedita",
                                    metricName: "voluptas",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "reiciendis",
                                      "consequatur",
                                      "sed",
                                      "accusantium",
                                    ],
                                    maxComparisonValue: "voluptates",
                                    minComparisonValue: "provident",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "numquam",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolores",
                                    expressions: [
                                      "nihil",
                                      "libero",
                                    ],
                                    maxComparisonValue: "omnis",
                                    minComparisonValue: "excepturi",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "corrupti",
                                    metricName: "repellendus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "commodi",
                                    expressions: [
                                      "autem",
                                      "dicta",
                                      "recusandae",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "id",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "iste",
                                    metricName: "atque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "pariatur",
                                      "aut",
                                      "similique",
                                      "iste",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "nam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "voluptate",
                                    metricName: "voluptatibus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorem",
                                    expressions: [
                                      "a",
                                      "perferendis",
                                      "quaerat",
                                      "excepturi",
                                    ],
                                    maxComparisonValue: "aliquid",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "laboriosam",
                                    metricName: "culpa",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "culpa",
                                      "temporibus",
                                    ],
                                    maxComparisonValue: "a",
                                    minComparisonValue: "ad",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "suscipit",
                                    maxComparisonValue: "reiciendis",
                                    metricName: "repellendus",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "mollitia",
                                    expressions: [
                                      "praesentium",
                                      "neque",
                                      "quam",
                                      "animi",
                                    ],
                                    maxComparisonValue: "debitis",
                                    minComparisonValue: "voluptatum",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "vitae",
                                    metricName: "cumque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eligendi",
                                    expressions: [
                                      "quis",
                                      "tempore",
                                      "officia",
                                    ],
                                    maxComparisonValue: "iste",
                                    minComparisonValue: "unde",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "ducimus",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "iure",
                                      "sint",
                                      "autem",
                                      "iste",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "ab",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "dolor",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consectetur",
                                expressions: [
                                  "vitae",
                                  "numquam",
                                ],
                                maxComparisonValue: "incidunt",
                                minComparisonValue: "modi",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "minus",
                                maxComparisonValue: "voluptate",
                                metricName: "error",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequatur",
                                expressions: [
                                  "delectus",
                                  "qui",
                                  "delectus",
                                  "exercitationem",
                                ],
                                maxComparisonValue: "ipsum",
                                minComparisonValue: "laboriosam",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "sed",
                                maxComparisonValue: "voluptatum",
                                metricName: "debitis",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eveniet",
                                expressions: [
                                  "cupiditate",
                                  "adipisci",
                                  "aliquam",
                                  "illo",
                                ],
                                maxComparisonValue: "veniam",
                                minComparisonValue: "sed",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "possimus",
                                maxComparisonValue: "dignissimos",
                                metricName: "itaque",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "non",
                                expressions: [
                                  "incidunt",
                                  "quod",
                                  "sunt",
                                  "ullam",
                                ],
                                maxComparisonValue: "quam",
                                minComparisonValue: "illum",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "officia",
                                maxComparisonValue: "est",
                                metricName: "in",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "delectus",
                                expressions: [
                                  "dolore",
                                  "nemo",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "quo",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "delectus",
                                maxComparisonValue: "laboriosam",
                                metricName: "laboriosam",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "repellat",
                                expressions: [
                                  "soluta",
                                  "tempore",
                                  "culpa",
                                ],
                                maxComparisonValue: "fugiat",
                                minComparisonValue: "inventore",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "ad",
                                maxComparisonValue: "sapiente",
                                metricName: "voluptates",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ab",
                                expressions: [
                                  "suscipit",
                                  "quidem",
                                  "delectus",
                                  "nemo",
                                ],
                                maxComparisonValue: "cumque",
                                minComparisonValue: "voluptatum",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "atque",
                                maxComparisonValue: "maiores",
                                metricName: "expedita",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quod",
                                expressions: [
                                  "eaque",
                                ],
                                maxComparisonValue: "impedit",
                                minComparisonValue: "nam",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "odio",
                                maxComparisonValue: "delectus",
                                metricName: "minus",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "occaecati",
                                    expressions: [
                                      "laboriosam",
                                      "eos",
                                      "amet",
                                      "incidunt",
                                    ],
                                    maxComparisonValue: "porro",
                                    minComparisonValue: "occaecati",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptate",
                                    maxComparisonValue: "tempore",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tenetur",
                                    expressions: [
                                      "expedita",
                                      "iusto",
                                      "esse",
                                      "harum",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "quod",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "totam",
                                    maxComparisonValue: "vero",
                                    metricName: "dolore",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "illo",
                                      "saepe",
                                      "enim",
                                    ],
                                    maxComparisonValue: "eaque",
                                    minComparisonValue: "ex",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "deleniti",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "numquam",
                                      "odio",
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "veritatis",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "earum",
                                    maxComparisonValue: "minima",
                                    metricName: "ex",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corrupti",
                                    expressions: [
                                      "fuga",
                                      "sequi",
                                    ],
                                    maxComparisonValue: "maxime",
                                    minComparisonValue: "numquam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eligendi",
                                    maxComparisonValue: "autem",
                                    metricName: "adipisci",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "fugit",
                                      "autem",
                                      "optio",
                                      "eveniet",
                                    ],
                                    maxComparisonValue: "fugiat",
                                    minComparisonValue: "blanditiis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "natus",
                                    maxComparisonValue: "sapiente",
                                    metricName: "repellendus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "accusantium",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "nisi",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempore",
                                    maxComparisonValue: "expedita",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iusto",
                                    expressions: [
                                      "velit",
                                      "molestiae",
                                      "nam",
                                    ],
                                    maxComparisonValue: "aperiam",
                                    minComparisonValue: "vitae",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "at",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vel",
                                    expressions: [
                                      "labore",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "blanditiis",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "distinctio",
                                    metricName: "incidunt",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "accusantium",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consectetur",
                                    maxComparisonValue: "asperiores",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempore",
                                    expressions: [
                                      "quasi",
                                      "consequuntur",
                                      "nemo",
                                      "nobis",
                                    ],
                                    maxComparisonValue: "debitis",
                                    minComparisonValue: "labore",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "minima",
                                    maxComparisonValue: "magni",
                                    metricName: "itaque",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "temporibus",
                                expressions: [
                                  "earum",
                                  "minima",
                                ],
                                maxComparisonValue: "odit",
                                minComparisonValue: "odit",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "vel",
                                metricName: "dolorum",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ab",
                                expressions: [
                                  "amet",
                                ],
                                maxComparisonValue: "cum",
                                minComparisonValue: "iusto",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "esse",
                                metricName: "vero",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "omnis",
                                expressions: [
                                  "architecto",
                                  "voluptatibus",
                                  "autem",
                                  "in",
                                ],
                                maxComparisonValue: "repellat",
                                minComparisonValue: "amet",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "dolore",
                                maxComparisonValue: "optio",
                                metricName: "quo",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "libero",
                                expressions: [
                                  "illum",
                                  "iusto",
                                ],
                                maxComparisonValue: "aliquid",
                                minComparisonValue: "sint",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "repellat",
                                maxComparisonValue: "sapiente",
                                metricName: "consectetur",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eius",
                                expressions: [
                                  "corporis",
                                  "perferendis",
                                ],
                                maxComparisonValue: "architecto",
                                minComparisonValue: "amet",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "nihil",
                                maxComparisonValue: "officiis",
                                metricName: "dolore",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ipsam",
                                expressions: [
                                  "hic",
                                ],
                                maxComparisonValue: "praesentium",
                                minComparisonValue: "libero",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "totam",
                                maxComparisonValue: "tempora",
                                metricName: "quo",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quam",
                                expressions: [
                                  "dicta",
                                  "excepturi",
                                  "consectetur",
                                  "deserunt",
                                ],
                                maxComparisonValue: "odit",
                                minComparisonValue: "incidunt",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "quaerat",
                                maxComparisonValue: "suscipit",
                                metricName: "ducimus",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "modi",
                                expressions: [
                                  "nihil",
                                  "eius",
                                  "placeat",
                                ],
                                maxComparisonValue: "fugit",
                                minComparisonValue: "facere",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "nobis",
                                maxComparisonValue: "porro",
                                metricName: "labore",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "qui",
                                expressions: [
                                  "consectetur",
                                ],
                                maxComparisonValue: "ratione",
                                minComparisonValue: "saepe",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "cum",
                                metricName: "fugiat",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "excepturi",
                                      "odio",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "officiis",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "velit",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eaque",
                                    expressions: [
                                      "cupiditate",
                                      "aut",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "quod",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "architecto",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "perspiciatis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "beatae",
                                    ],
                                    maxComparisonValue: "sequi",
                                    minComparisonValue: "rerum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "debitis",
                                    maxComparisonValue: "quis",
                                    metricName: "eaque",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "maiores",
                                      "debitis",
                                    ],
                                    maxComparisonValue: "reprehenderit",
                                    minComparisonValue: "eos",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "ut",
                                    metricName: "quae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "assumenda",
                                    expressions: [
                                      "cumque",
                                    ],
                                    maxComparisonValue: "placeat",
                                    minComparisonValue: "adipisci",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "accusantium",
                                    metricName: "corrupti",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "impedit",
                                    expressions: [
                                      "corporis",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "eveniet",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolore",
                                    maxComparisonValue: "illum",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "necessitatibus",
                                      "voluptatem",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "possimus",
                                    metricName: "tenetur",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "soluta",
                                      "cupiditate",
                                      "unde",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "suscipit",
                                    metricName: "facere",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "sint",
                                      "eius",
                                      "vel",
                                    ],
                                    maxComparisonValue: "quasi",
                                    minComparisonValue: "vero",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "numquam",
                                    maxComparisonValue: "fugit",
                                    metricName: "inventore",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "recusandae",
                                    expressions: [
                                      "possimus",
                                      "provident",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "sit",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "consequatur",
                                    metricName: "vero",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "voluptas",
                                      "sint",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "nihil",
                                    minComparisonValue: "fuga",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequuntur",
                                    maxComparisonValue: "maiores",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deleniti",
                                    expressions: [
                                      "sit",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "natus",
                                    minComparisonValue: "voluptatem",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "quasi",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quas",
                                    expressions: [
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "esse",
                                    minComparisonValue: "quas",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laudantium",
                                    maxComparisonValue: "voluptates",
                                    metricName: "minus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "consectetur",
                                      "soluta",
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "perspiciatis",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "unde",
                                    metricName: "debitis",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "earum",
                                      "est",
                                    ],
                                    maxComparisonValue: "earum",
                                    minComparisonValue: "nihil",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "perferendis",
                                    metricName: "nam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eos",
                                    expressions: [
                                      "modi",
                                      "illum",
                                      "error",
                                    ],
                                    maxComparisonValue: "consectetur",
                                    minComparisonValue: "reprehenderit",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cum",
                                    maxComparisonValue: "culpa",
                                    metricName: "culpa",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "quia",
                                      "quod",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "voluptatum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "explicabo",
                                    maxComparisonValue: "eligendi",
                                    metricName: "cupiditate",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "ipsum",
                                      "explicabo",
                                      "nulla",
                                      "est",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "necessitatibus",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quasi",
                                    maxComparisonValue: "mollitia",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "incidunt",
                                    expressions: [
                                      "ut",
                                      "enim",
                                    ],
                                    maxComparisonValue: "nihil",
                                    minComparisonValue: "ratione",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "saepe",
                                    maxComparisonValue: "quod",
                                    metricName: "nulla",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "nesciunt",
                                      "earum",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "dolor",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quos",
                                    maxComparisonValue: "sed",
                                    metricName: "eaque",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "unde",
                                    expressions: [
                                      "id",
                                      "ex",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "optio",
                                    minComparisonValue: "at",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "nam",
                                    metricName: "cumque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "occaecati",
                                    expressions: [
                                      "culpa",
                                      "dicta",
                                      "rem",
                                      "fuga",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "totam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eos",
                                    maxComparisonValue: "harum",
                                    metricName: "voluptatibus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "natus",
                                    expressions: [
                                      "vero",
                                      "nisi",
                                    ],
                                    maxComparisonValue: "praesentium",
                                    minComparisonValue: "eum",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "possimus",
                                    metricName: "libero",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "accusamus",
                                      "ipsam",
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "ullam",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eligendi",
                                    maxComparisonValue: "occaecati",
                                    metricName: "doloribus",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "a",
                                    expressions: [
                                      "veniam",
                                      "aut",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "rerum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nulla",
                                    maxComparisonValue: "quod",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "illo",
                                    expressions: [
                                      "et",
                                      "molestiae",
                                      "autem",
                                      "dolore",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "nostrum",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "voluptate",
                                    metricName: "molestias",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "odit",
                                      "molestiae",
                                      "accusamus",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "inventore",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "praesentium",
                                    maxComparisonValue: "aliquid",
                                    metricName: "consequuntur",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "vel",
                                    ],
                                    maxComparisonValue: "delectus",
                                    minComparisonValue: "maxime",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "distinctio",
                                    maxComparisonValue: "cupiditate",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iusto",
                                    expressions: [
                                      "saepe",
                                      "ad",
                                      "magni",
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "numquam",
                                    metricName: "architecto",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quasi",
                                    expressions: [
                                      "officiis",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "quae",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "libero",
                                    metricName: "ut",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "cumque",
                                expressions: [
                                  "numquam",
                                  "fugit",
                                  "amet",
                                ],
                                maxComparisonValue: "culpa",
                                minComparisonValue: "facilis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "vero",
                                maxComparisonValue: "impedit",
                                metricName: "omnis",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "fuga",
                                expressions: [
                                  "distinctio",
                                  "fugiat",
                                  "nulla",
                                ],
                                maxComparisonValue: "totam",
                                minComparisonValue: "praesentium",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "esse",
                                maxComparisonValue: "vitae",
                                metricName: "delectus",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "labore",
                                expressions: [
                                  "sed",
                                  "veniam",
                                  "sed",
                                ],
                                maxComparisonValue: "quibusdam",
                                minComparisonValue: "reprehenderit",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "reprehenderit",
                                maxComparisonValue: "et",
                                metricName: "eveniet",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "at",
                                expressions: [
                                  "in",
                                ],
                                maxComparisonValue: "eius",
                                minComparisonValue: "aut",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "iste",
                                maxComparisonValue: "accusamus",
                                metricName: "repellat",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "consequuntur",
          },
        ],
        viewId: "natus",
      },
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "voluptates",
                startDate: "illo",
              },
              name: "facere",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "ducimus",
                startDate: "aut",
              },
              name: "provident",
              type: CohortTypeEnum.UnspecifiedCohortType,
            },
            {
              dateRange: {
                endDate: "tempore",
                startDate: "ullam",
              },
              name: "illum",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "ipsa",
                startDate: "quos",
              },
              name: "quo",
              type: CohortTypeEnum.UnspecifiedCohortType,
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "doloribus",
            startDate: "id",
          },
          {
            endDate: "eum",
            startDate: "cumque",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "similique",
                expressions: [
                  "architecto",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Partial,
              },
              {
                caseSensitive: false,
                dimensionName: "accusamus",
                expressions: [
                  "excepturi",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.NumericEqual,
              },
              {
                caseSensitive: false,
                dimensionName: "laborum",
                expressions: [
                  "repudiandae",
                  "minus",
                  "officia",
                  "laboriosam",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.OperatorUnspecified,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.Or,
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "aliquam",
                expressions: [
                  "atque",
                  "dicta",
                  "magnam",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.OperatorUnspecified,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.And,
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "maiores",
              "delectus",
            ],
            name: "quos",
          },
          {
            histogramBuckets: [
              "officiis",
              "ab",
              "voluptate",
            ],
            name: "consequatur",
          },
        ],
        filtersExpression: "itaque",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: false,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "dolor",
                metricName: "distinctio",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.And,
          },
          {
            filters: [
              {
                comparisonValue: "nihil",
                metricName: "recusandae",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.Or,
          },
          {
            filters: [
              {
                comparisonValue: "blanditiis",
                metricName: "suscipit",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "quis",
                metricName: "enim",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
              {
                comparisonValue: "iste",
                metricName: "ea",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.Or,
          },
          {
            filters: [
              {
                comparisonValue: "magni",
                metricName: "animi",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.Or,
          },
        ],
        metrics: [
          {
            alias: "porro",
            expression: "tempore",
            formattingType: MetricFormattingTypeEnum.Float,
          },
          {
            alias: "autem",
            expression: "praesentium",
            formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
          },
          {
            alias: "quisquam",
            expression: "expedita",
            formattingType: MetricFormattingTypeEnum.Float,
          },
          {
            alias: "eaque",
            expression: "delectus",
            formattingType: MetricFormattingTypeEnum.Currency,
          },
        ],
        orderBys: [
          {
            fieldName: "tenetur",
            orderType: OrderByOrderTypeEnum.HistogramBucket,
            sortOrder: OrderBySortOrderEnum.Ascending,
          },
          {
            fieldName: "a",
            orderType: OrderByOrderTypeEnum.HistogramBucket,
            sortOrder: OrderBySortOrderEnum.Ascending,
          },
          {
            fieldName: "earum",
            orderType: OrderByOrderTypeEnum.Smart,
            sortOrder: OrderBySortOrderEnum.SortOrderUnspecified,
          },
          {
            fieldName: "quidem",
            orderType: OrderByOrderTypeEnum.Smart,
            sortOrder: OrderBySortOrderEnum.Descending,
          },
        ],
        pageSize: 563149,
        pageToken: "a",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "dolore",
                    expressions: [
                      "repudiandae",
                      "aspernatur",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericGreaterThan,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "dolorem",
                    expressions: [
                      "ipsa",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Exact,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "repellendus",
                    expressions: [
                      "aut",
                      "ullam",
                      "amet",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "voluptates",
                    expressions: [
                      "ad",
                      "eligendi",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "consequatur",
                    expressions: [
                      "iure",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "quis",
                    expressions: [
                      "omnis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "est",
                ],
                name: "quia",
              },
            ],
            maxGroupCount: 332237,
            metrics: [
              {
                alias: "rem",
                expression: "cum",
                formattingType: MetricFormattingTypeEnum.Time,
              },
              {
                alias: "provident",
                expression: "sunt",
                formattingType: MetricFormattingTypeEnum.Time,
              },
              {
                alias: "excepturi",
                expression: "ducimus",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
            ],
            startGroup: 136292,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "at",
                    expressions: [
                      "laborum",
                      "provident",
                      "hic",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Exact,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "soluta",
                    expressions: [
                      "praesentium",
                      "explicabo",
                      "odit",
                      "illo",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "quia",
                    expressions: [
                      "velit",
                      "ullam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Exact,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "blanditiis",
                    expressions: [
                      "totam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "repellat",
                    expressions: [
                      "culpa",
                      "voluptate",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Exact,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "maxime",
                    expressions: [
                      "nihil",
                      "sed",
                      "optio",
                      "nulla",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "dolore",
                    expressions: [
                      "dolorum",
                      "eos",
                      "sunt",
                      "quam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "omnis",
                    expressions: [
                      "qui",
                      "similique",
                      "eligendi",
                      "numquam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "necessitatibus",
                    expressions: [
                      "exercitationem",
                      "nihil",
                      "quia",
                      "quis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "sint",
                  "id",
                ],
                name: "nobis",
              },
            ],
            maxGroupCount: 94487,
            metrics: [
              {
                alias: "aliquam",
                expression: "vitae",
                formattingType: MetricFormattingTypeEnum.Time,
              },
              {
                alias: "voluptatum",
                expression: "deserunt",
                formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
              },
              {
                alias: "neque",
                expression: "impedit",
                formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
              },
              {
                alias: "neque",
                expression: "saepe",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
            ],
            startGroup: 287020,
          },
        ],
        samplingLevel: ReportRequestSamplingLevelEnum.Large,
        segments: [
          {
            dynamicSegment: {
              name: "quibusdam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perspiciatis",
                                    expressions: [
                                      "a",
                                      "iure",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "recusandae",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "et",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "in",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "error",
                                    metricName: "deleniti",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "reiciendis",
                                      "quis",
                                      "modi",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "pariatur",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nemo",
                                    maxComparisonValue: "dolore",
                                    metricName: "numquam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "quia",
                                      "aspernatur",
                                      "ut",
                                      "non",
                                    ],
                                    maxComparisonValue: "laboriosam",
                                    minComparisonValue: "accusantium",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquam",
                                    maxComparisonValue: "dolorem",
                                    metricName: "expedita",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minima",
                                    expressions: [
                                      "vitae",
                                      "quos",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "corporis",
                                    metricName: "vel",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "at",
                                    expressions: [
                                      "nihil",
                                      "laudantium",
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "odit",
                                    minComparisonValue: "officiis",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "fugiat",
                                    metricName: "voluptas",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eligendi",
                                    expressions: [
                                      "harum",
                                    ],
                                    maxComparisonValue: "aperiam",
                                    minComparisonValue: "pariatur",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "architecto",
                                    maxComparisonValue: "culpa",
                                    metricName: "aliquam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempore",
                                    expressions: [
                                      "nulla",
                                      "corrupti",
                                      "voluptate",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "iure",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "ea",
                                    metricName: "alias",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "pariatur",
                                    expressions: [
                                      "modi",
                                      "vitae",
                                      "delectus",
                                      "delectus",
                                    ],
                                    maxComparisonValue: "nemo",
                                    minComparisonValue: "at",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "sed",
                                    metricName: "mollitia",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "minima",
                                      "impedit",
                                      "facilis",
                                    ],
                                    maxComparisonValue: "amet",
                                    minComparisonValue: "quis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "beatae",
                                    maxComparisonValue: "dignissimos",
                                    metricName: "nisi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "facere",
                                    minComparisonValue: "distinctio",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "atque",
                                    maxComparisonValue: "consectetur",
                                    metricName: "nemo",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "impedit",
                                    expressions: [
                                      "cumque",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "praesentium",
                                    minComparisonValue: "vel",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "quas",
                                    metricName: "impedit",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "praesentium",
                                    expressions: [
                                      "soluta",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "molestiae",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "sunt",
                                    metricName: "aperiam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repellat",
                                    expressions: [
                                      "tempora",
                                      "quaerat",
                                      "magnam",
                                      "voluptate",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "excepturi",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "pariatur",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "illum",
                                    expressions: [
                                      "amet",
                                      "expedita",
                                      "libero",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "repudiandae",
                                    minComparisonValue: "dolores",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "harum",
                                    metricName: "voluptate",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repudiandae",
                                    expressions: [
                                      "asperiores",
                                      "exercitationem",
                                      "voluptatem",
                                      "beatae",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "laboriosam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "veritatis",
                                    metricName: "nobis",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facilis",
                                    expressions: [
                                      "aut",
                                      "itaque",
                                      "rerum",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "distinctio",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "odit",
                                    metricName: "ab",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "tempora",
                                      "quidem",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "nesciunt",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "sequi",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "velit",
                                expressions: [
                                  "veniam",
                                  "provident",
                                  "nostrum",
                                  "dolor",
                                ],
                                maxComparisonValue: "quod",
                                minComparisonValue: "consequatur",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "illo",
                                metricName: "amet",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "sequi",
                                expressions: [
                                  "fuga",
                                  "modi",
                                  "et",
                                ],
                                maxComparisonValue: "eveniet",
                                minComparisonValue: "aliquid",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "adipisci",
                                maxComparisonValue: "ab",
                                metricName: "maxime",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "hic",
                                ],
                                maxComparisonValue: "porro",
                                minComparisonValue: "tempore",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "sunt",
                                maxComparisonValue: "quisquam",
                                metricName: "sint",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "distinctio",
                                  "itaque",
                                  "iste",
                                  "quod",
                                ],
                                maxComparisonValue: "quidem",
                                minComparisonValue: "temporibus",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "natus",
                                maxComparisonValue: "ipsam",
                                metricName: "repudiandae",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "debitis",
                                expressions: [
                                  "esse",
                                ],
                                maxComparisonValue: "aliquid",
                                minComparisonValue: "porro",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "molestiae",
                                maxComparisonValue: "mollitia",
                                metricName: "quidem",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "beatae",
                                expressions: [
                                  "eveniet",
                                  "mollitia",
                                ],
                                maxComparisonValue: "ipsam",
                                minComparisonValue: "porro",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "inventore",
                                maxComparisonValue: "vel",
                                metricName: "modi",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "aspernatur",
                                      "officiis",
                                      "sit",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "ab",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "possimus",
                                    maxComparisonValue: "magni",
                                    metricName: "a",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "earum",
                                      "fugit",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "vitae",
                                    minComparisonValue: "consequatur",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "provident",
                                    maxComparisonValue: "numquam",
                                    metricName: "numquam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "amet",
                                    expressions: [
                                      "illum",
                                      "sed",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "reprehenderit",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ducimus",
                                    maxComparisonValue: "dolores",
                                    metricName: "asperiores",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magnam",
                                    expressions: [
                                      "fugiat",
                                      "laboriosam",
                                      "id",
                                    ],
                                    maxComparisonValue: "itaque",
                                    minComparisonValue: "assumenda",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "id",
                                    maxComparisonValue: "eveniet",
                                    metricName: "optio",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nemo",
                                    expressions: [
                                      "esse",
                                    ],
                                    maxComparisonValue: "placeat",
                                    minComparisonValue: "at",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eos",
                                    maxComparisonValue: "odit",
                                    metricName: "quia",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sapiente",
                                    expressions: [
                                      "exercitationem",
                                      "ducimus",
                                      "dolore",
                                      "iste",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "error",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "harum",
                                    maxComparisonValue: "sapiente",
                                    metricName: "laborum",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eum",
                                    expressions: [
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "accusantium",
                                    minComparisonValue: "quo",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempora",
                                    maxComparisonValue: "pariatur",
                                    metricName: "labore",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vero",
                                    expressions: [
                                      "dicta",
                                      "sit",
                                      "adipisci",
                                      "inventore",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "iure",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "omnis",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ipsa",
                                expressions: [
                                  "saepe",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "aspernatur",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "illum",
                                maxComparisonValue: "veniam",
                                metricName: "exercitationem",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "possimus",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "facere",
                                    metricName: "omnis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "atque",
                                      "explicabo",
                                      "sit",
                                      "eligendi",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "consectetur",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "saepe",
                                    expressions: [
                                      "optio",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "corrupti",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "veritatis",
                                    metricName: "quas",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "labore",
                                    expressions: [
                                      "accusamus",
                                      "consequatur",
                                      "ut",
                                      "laborum",
                                    ],
                                    maxComparisonValue: "hic",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "maxime",
                                    maxComparisonValue: "ad",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quidem",
                                    expressions: [
                                      "commodi",
                                      "mollitia",
                                    ],
                                    maxComparisonValue: "similique",
                                    minComparisonValue: "quasi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "illum",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "blanditiis",
                                    expressions: [
                                      "culpa",
                                      "ipsa",
                                      "inventore",
                                      "nesciunt",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "error",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "qui",
                                    metricName: "unde",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quaerat",
                                expressions: [
                                  "cumque",
                                  "ab",
                                ],
                                maxComparisonValue: "quibusdam",
                                minComparisonValue: "blanditiis",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "delectus",
                                maxComparisonValue: "explicabo",
                                metricName: "iste",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aspernatur",
                                expressions: [
                                  "nemo",
                                  "laboriosam",
                                  "iste",
                                  "quidem",
                                ],
                                maxComparisonValue: "iusto",
                                minComparisonValue: "culpa",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "a",
                                maxComparisonValue: "consequatur",
                                metricName: "voluptates",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "veritatis",
                                expressions: [
                                  "placeat",
                                  "libero",
                                ],
                                maxComparisonValue: "saepe",
                                minComparisonValue: "ipsa",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "veritatis",
                                maxComparisonValue: "harum",
                                metricName: "cumque",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "unde",
                                    expressions: [
                                      "sequi",
                                      "libero",
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorum",
                                    maxComparisonValue: "omnis",
                                    metricName: "occaecati",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quam",
                                    expressions: [
                                      "eaque",
                                      "incidunt",
                                      "asperiores",
                                      "eius",
                                    ],
                                    maxComparisonValue: "ipsa",
                                    minComparisonValue: "quas",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iusto",
                                    maxComparisonValue: "laborum",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ut",
                                expressions: [
                                  "cupiditate",
                                  "nisi",
                                ],
                                maxComparisonValue: "placeat",
                                minComparisonValue: "tempore",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "earum",
                                maxComparisonValue: "debitis",
                                metricName: "impedit",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "tempore",
                                expressions: [
                                  "provident",
                                  "soluta",
                                  "maxime",
                                ],
                                maxComparisonValue: "commodi",
                                minComparisonValue: "consectetur",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "nisi",
                                maxComparisonValue: "aspernatur",
                                metricName: "eveniet",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "temporibus",
                                expressions: [
                                  "enim",
                                  "ipsam",
                                  "porro",
                                  "dolores",
                                ],
                                maxComparisonValue: "iste",
                                minComparisonValue: "labore",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "eaque",
                                maxComparisonValue: "ea",
                                metricName: "consequatur",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "laborum",
                                expressions: [
                                  "fugit",
                                ],
                                maxComparisonValue: "quos",
                                minComparisonValue: "molestiae",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "autem",
                                maxComparisonValue: "numquam",
                                metricName: "voluptates",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "suscipit",
                                expressions: [
                                  "doloremque",
                                  "porro",
                                  "suscipit",
                                  "temporibus",
                                ],
                                maxComparisonValue: "vel",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "excepturi",
                                maxComparisonValue: "quod",
                                metricName: "in",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eum",
                                expressions: [
                                  "ut",
                                ],
                                maxComparisonValue: "nostrum",
                                minComparisonValue: "dignissimos",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "corporis",
                                maxComparisonValue: "ipsa",
                                metricName: "occaecati",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "recusandae",
                                expressions: [
                                  "dignissimos",
                                  "doloremque",
                                  "quibusdam",
                                ],
                                maxComparisonValue: "adipisci",
                                minComparisonValue: "minus",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "id",
                                maxComparisonValue: "architecto",
                                metricName: "maiores",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "fugit",
                                  "quisquam",
                                ],
                                maxComparisonValue: "odio",
                                minComparisonValue: "quidem",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "culpa",
                                metricName: "illo",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "doloremque",
                                expressions: [
                                  "dignissimos",
                                  "non",
                                  "facere",
                                  "repellat",
                                ],
                                maxComparisonValue: "exercitationem",
                                minComparisonValue: "quidem",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "molestiae",
                                maxComparisonValue: "vitae",
                                metricName: "excepturi",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "consequuntur",
                                  "est",
                                ],
                                maxComparisonValue: "tempora",
                                minComparisonValue: "nobis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "modi",
                                maxComparisonValue: "adipisci",
                                metricName: "atque",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minima",
                                    expressions: [
                                      "dicta",
                                      "assumenda",
                                      "reprehenderit",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "ad",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sequi",
                                    maxComparisonValue: "eligendi",
                                    metricName: "consequuntur",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "porro",
                                      "nesciunt",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "autem",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "aperiam",
                                    metricName: "itaque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "suscipit",
                                      "quis",
                                    ],
                                    maxComparisonValue: "nobis",
                                    minComparisonValue: "beatae",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ex",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "debitis",
                                      "architecto",
                                      "reiciendis",
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "odit",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "quod",
                                    metricName: "repudiandae",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deleniti",
                                    expressions: [
                                      "consequuntur",
                                      "enim",
                                      "minus",
                                      "quibusdam",
                                    ],
                                    maxComparisonValue: "accusantium",
                                    minComparisonValue: "nulla",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "adipisci",
                                      "natus",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "velit",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eos",
                                    maxComparisonValue: "nisi",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "temporibus",
                                    expressions: [
                                      "quaerat",
                                      "delectus",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "laborum",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "magnam",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "perspiciatis",
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "temporibus",
                                    minComparisonValue: "et",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nisi",
                                    maxComparisonValue: "aliquid",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eligendi",
                                    expressions: [
                                      "veniam",
                                      "perspiciatis",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "dolores",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "maxime",
                                    metricName: "dolores",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "molestiae",
                                    expressions: [
                                      "voluptate",
                                      "eum",
                                    ],
                                    maxComparisonValue: "consectetur",
                                    minComparisonValue: "velit",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "ad",
                                    metricName: "incidunt",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "asperiores",
                                      "distinctio",
                                      "minima",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "molestiae",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "excepturi",
                                    metricName: "deleniti",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "ullam",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "totam",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "itaque",
                                    metricName: "at",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "in",
                                    expressions: [
                                      "quibusdam",
                                      "culpa",
                                      "dolor",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "exercitationem",
                                    minComparisonValue: "unde",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "pariatur",
                                    maxComparisonValue: "vel",
                                    metricName: "laboriosam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magni",
                                    expressions: [
                                      "officiis",
                                      "aliquam",
                                      "quas",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "autem",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "explicabo",
                                    maxComparisonValue: "rerum",
                                    metricName: "iste",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "iure",
                                      "voluptatibus",
                                      "id",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "explicabo",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "nesciunt",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "explicabo",
                                    expressions: [
                                      "ipsam",
                                      "nemo",
                                      "sequi",
                                    ],
                                    maxComparisonValue: "optio",
                                    minComparisonValue: "libero",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "alias",
                                    maxComparisonValue: "accusantium",
                                    metricName: "doloremque",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "illo",
                                    ],
                                    maxComparisonValue: "recusandae",
                                    minComparisonValue: "quod",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "voluptas",
                                    metricName: "nesciunt",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "amet",
                                      "ex",
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "officia",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eveniet",
                                    maxComparisonValue: "eveniet",
                                    metricName: "voluptatem",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sapiente",
                                    expressions: [
                                      "provident",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "eius",
                                    metricName: "doloremque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sequi",
                                    expressions: [
                                      "neque",
                                      "assumenda",
                                      "saepe",
                                      "nobis",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "quia",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "facilis",
                                    metricName: "earum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "harum",
                                    ],
                                    maxComparisonValue: "nobis",
                                    minComparisonValue: "numquam",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "temporibus",
                                    maxComparisonValue: "doloribus",
                                    metricName: "quos",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "ratione",
                                      "dolore",
                                    ],
                                    maxComparisonValue: "perferendis",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "dolor",
                                    metricName: "nesciunt",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "numquam",
                                    expressions: [
                                      "quia",
                                      "reiciendis",
                                      "modi",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "et",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iusto",
                                    maxComparisonValue: "a",
                                    metricName: "quidem",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "hic",
                                      "beatae",
                                      "delectus",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "fugit",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "sint",
                                    metricName: "dignissimos",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequatur",
                                    expressions: [
                                      "eligendi",
                                      "impedit",
                                      "officia",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "voluptate",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "repudiandae",
                                    maxComparisonValue: "tempore",
                                    metricName: "voluptate",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "est",
                                    ],
                                    maxComparisonValue: "nemo",
                                    minComparisonValue: "magni",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "suscipit",
                                    metricName: "rerum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "excepturi",
                                expressions: [
                                  "facilis",
                                  "doloremque",
                                  "officiis",
                                  "nisi",
                                ],
                                maxComparisonValue: "reprehenderit",
                                minComparisonValue: "necessitatibus",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "provident",
                                maxComparisonValue: "ut",
                                metricName: "hic",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "saepe",
                                expressions: [
                                  "exercitationem",
                                  "exercitationem",
                                  "dolore",
                                  "sit",
                                ],
                                maxComparisonValue: "recusandae",
                                minComparisonValue: "a",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "neque",
                                maxComparisonValue: "mollitia",
                                metricName: "velit",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quasi",
                                expressions: [
                                  "blanditiis",
                                  "sapiente",
                                  "recusandae",
                                ],
                                maxComparisonValue: "perspiciatis",
                                minComparisonValue: "natus",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "dolorem",
                                maxComparisonValue: "sunt",
                                metricName: "fuga",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ad",
                                expressions: [
                                  "quas",
                                  "quis",
                                  "fuga",
                                  "eveniet",
                                ],
                                maxComparisonValue: "consequuntur",
                                minComparisonValue: "illum",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "rerum",
                                maxComparisonValue: "voluptate",
                                metricName: "perferendis",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "molestias",
                                expressions: [
                                  "non",
                                  "magni",
                                ],
                                maxComparisonValue: "sint",
                                minComparisonValue: "consequatur",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "adipisci",
                                maxComparisonValue: "dolorem",
                                metricName: "ex",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "officiis",
                                expressions: [
                                  "culpa",
                                  "architecto",
                                  "iure",
                                  "eveniet",
                                ],
                                maxComparisonValue: "doloribus",
                                minComparisonValue: "praesentium",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "tempora",
                                maxComparisonValue: "ad",
                                metricName: "ab",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "nemo",
                                      "veritatis",
                                      "molestias",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "modi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "similique",
                                    maxComparisonValue: "architecto",
                                    metricName: "asperiores",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "quis",
                                      "quasi",
                                    ],
                                    maxComparisonValue: "odit",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "nulla",
                                    metricName: "dolore",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nam",
                                    expressions: [
                                      "consequuntur",
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "doloribus",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolore",
                                    maxComparisonValue: "corrupti",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "incidunt",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "labore",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "officia",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptates",
                                    expressions: [
                                      "cupiditate",
                                      "modi",
                                      "ratione",
                                    ],
                                    maxComparisonValue: "aliquam",
                                    minComparisonValue: "ea",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "corporis",
                                    maxComparisonValue: "at",
                                    metricName: "ipsa",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "molestias",
                                    expressions: [
                                      "repellat",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "libero",
                                    minComparisonValue: "mollitia",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "cumque",
                                    metricName: "vero",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quod",
                                    expressions: [
                                      "doloremque",
                                      "illo",
                                      "reiciendis",
                                    ],
                                    maxComparisonValue: "debitis",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusamus",
                                    maxComparisonValue: "ipsam",
                                    metricName: "aspernatur",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "mollitia",
                                      "minus",
                                    ],
                                    maxComparisonValue: "quos",
                                    minComparisonValue: "explicabo",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "praesentium",
                                    maxComparisonValue: "ullam",
                                    metricName: "maiores",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "explicabo",
                                    expressions: [
                                      "animi",
                                      "expedita",
                                      "laborum",
                                      "atque",
                                    ],
                                    maxComparisonValue: "assumenda",
                                    minComparisonValue: "laborum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "veritatis",
                                    maxComparisonValue: "fugit",
                                    metricName: "nihil",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nemo",
                                    expressions: [
                                      "iure",
                                      "hic",
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "esse",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "similique",
                                    metricName: "id",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "porro",
                                    expressions: [
                                      "numquam",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "necessitatibus",
                                    maxComparisonValue: "quisquam",
                                    metricName: "impedit",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatibus",
                                    expressions: [
                                      "ducimus",
                                      "nam",
                                    ],
                                    maxComparisonValue: "incidunt",
                                    minComparisonValue: "deleniti",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "totam",
                                    maxComparisonValue: "soluta",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "architecto",
                                      "nulla",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "maxime",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "soluta",
                                    maxComparisonValue: "quos",
                                    metricName: "sit",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "eveniet",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "sit",
                                    metricName: "labore",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "rerum",
                                      "cum",
                                      "est",
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "perferendis",
                                    minComparisonValue: "qui",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "quis",
                                    metricName: "corrupti",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quod",
                                    expressions: [
                                      "et",
                                      "ipsam",
                                      "eos",
                                      "exercitationem",
                                    ],
                                    maxComparisonValue: "minima",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fuga",
                                    maxComparisonValue: "fuga",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "suscipit",
                                    expressions: [
                                      "nulla",
                                      "consequatur",
                                      "qui",
                                      "in",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "vel",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consectetur",
                                    maxComparisonValue: "quis",
                                    metricName: "ut",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "labore",
                                    expressions: [
                                      "ratione",
                                    ],
                                    maxComparisonValue: "cum",
                                    minComparisonValue: "magnam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officiis",
                                    maxComparisonValue: "inventore",
                                    metricName: "esse",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "explicabo",
                                      "alias",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "eligendi",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "recusandae",
                                    metricName: "perspiciatis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magni",
                                    expressions: [
                                      "quas",
                                      "ratione",
                                      "sapiente",
                                      "alias",
                                    ],
                                    maxComparisonValue: "repellendus",
                                    minComparisonValue: "magnam",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "repudiandae",
                                    maxComparisonValue: "soluta",
                                    metricName: "eius",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ea",
                                    expressions: [
                                      "dolore",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "recusandae",
                                    minComparisonValue: "ipsam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "optio",
                                    metricName: "sunt",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "assumenda",
                                    expressions: [
                                      "esse",
                                      "a",
                                      "quam",
                                      "quos",
                                    ],
                                    maxComparisonValue: "dignissimos",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "recusandae",
                                    metricName: "voluptatem",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nesciunt",
                                    expressions: [
                                      "velit",
                                      "necessitatibus",
                                      "facere",
                                      "quae",
                                    ],
                                    maxComparisonValue: "cumque",
                                    minComparisonValue: "ullam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "aut",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "illum",
                                expressions: [
                                  "porro",
                                ],
                                maxComparisonValue: "iste",
                                minComparisonValue: "earum",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "impedit",
                                maxComparisonValue: "eligendi",
                                metricName: "veniam",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "repellat",
                                expressions: [
                                  "quod",
                                  "nesciunt",
                                ],
                                maxComparisonValue: "iste",
                                minComparisonValue: "distinctio",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "assumenda",
                                maxComparisonValue: "alias",
                                metricName: "deserunt",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "perspiciatis",
                                expressions: [
                                  "voluptatibus",
                                ],
                                maxComparisonValue: "occaecati",
                                minComparisonValue: "nemo",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "reiciendis",
                                maxComparisonValue: "nesciunt",
                                metricName: "laudantium",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "atque",
          },
        ],
        viewId: "natus",
      },
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "possimus",
                startDate: "molestiae",
              },
              name: "officiis",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "voluptatum",
                startDate: "aperiam",
              },
              name: "reprehenderit",
              type: CohortTypeEnum.FirstVisitDate,
            },
            {
              dateRange: {
                endDate: "officia",
                startDate: "eveniet",
              },
              name: "quae",
              type: CohortTypeEnum.UnspecifiedCohortType,
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "dolorem",
            startDate: "adipisci",
          },
          {
            endDate: "optio",
            startDate: "similique",
          },
          {
            endDate: "odio",
            startDate: "unde",
          },
          {
            endDate: "asperiores",
            startDate: "nam",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "recusandae",
                expressions: [
                  "aut",
                  "neque",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Regexp,
              },
              {
                caseSensitive: false,
                dimensionName: "soluta",
                expressions: [
                  "qui",
                  "commodi",
                  "a",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.NumericLessThan,
              },
              {
                caseSensitive: false,
                dimensionName: "sequi",
                expressions: [
                  "rem",
                  "expedita",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.NumericEqual,
              },
              {
                caseSensitive: false,
                dimensionName: "excepturi",
                expressions: [
                  "dicta",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.EndsWith,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.And,
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "facilis",
                expressions: [
                  "dicta",
                  "nostrum",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Exact,
              },
              {
                caseSensitive: false,
                dimensionName: "neque",
                expressions: [
                  "optio",
                  "esse",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.BeginsWith,
              },
              {
                caseSensitive: false,
                dimensionName: "autem",
                expressions: [
                  "beatae",
                  "dignissimos",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Regexp,
              },
              {
                caseSensitive: false,
                dimensionName: "ratione",
                expressions: [
                  "amet",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Regexp,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.And,
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "quod",
                expressions: [
                  "modi",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Partial,
              },
              {
                caseSensitive: false,
                dimensionName: "rerum",
                expressions: [
                  "nemo",
                  "architecto",
                  "vel",
                  "amet",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.NumericGreaterThan,
              },
              {
                caseSensitive: false,
                dimensionName: "libero",
                expressions: [
                  "deserunt",
                  "eius",
                  "molestias",
                  "dolores",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Regexp,
              },
              {
                caseSensitive: false,
                dimensionName: "reprehenderit",
                expressions: [
                  "non",
                  "odit",
                  "maxime",
                  "aspernatur",
                ],
                not: false,
                operator: DimensionFilterOperatorEnum.Regexp,
              },
            ],
            operator: DimensionFilterClauseOperatorEnum.And,
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "sequi",
              "quaerat",
            ],
            name: "accusantium",
          },
          {
            histogramBuckets: [
              "cupiditate",
              "minima",
            ],
            name: "quo",
          },
        ],
        filtersExpression: "quis",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: false,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "harum",
                metricName: "adipisci",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
              {
                comparisonValue: "minima",
                metricName: "reprehenderit",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
              {
                comparisonValue: "vitae",
                metricName: "voluptates",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.Or,
          },
          {
            filters: [
              {
                comparisonValue: "beatae",
                metricName: "itaque",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "dolorum",
                metricName: "similique",
                not: false,
                operator: MetricFilterOperatorEnum.OperatorUnspecified,
              },
              {
                comparisonValue: "enim",
                metricName: "quam",
                not: false,
                operator: MetricFilterOperatorEnum.IsMissing,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.And,
          },
          {
            filters: [
              {
                comparisonValue: "quasi",
                metricName: "sint",
                not: false,
                operator: MetricFilterOperatorEnum.OperatorUnspecified,
              },
              {
                comparisonValue: "fugit",
                metricName: "earum",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
              {
                comparisonValue: "at",
                metricName: "debitis",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "non",
                metricName: "nam",
                not: false,
                operator: MetricFilterOperatorEnum.IsMissing,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.And,
          },
          {
            filters: [
              {
                comparisonValue: "veniam",
                metricName: "magnam",
                not: false,
                operator: MetricFilterOperatorEnum.LessThan,
              },
              {
                comparisonValue: "natus",
                metricName: "nulla",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
              {
                comparisonValue: "aut",
                metricName: "architecto",
                not: false,
                operator: MetricFilterOperatorEnum.Equal,
              },
              {
                comparisonValue: "possimus",
                metricName: "reiciendis",
                not: false,
                operator: MetricFilterOperatorEnum.GreaterThan,
              },
            ],
            operator: MetricFilterClauseOperatorEnum.Or,
          },
        ],
        metrics: [
          {
            alias: "ex",
            expression: "odit",
            formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
          },
          {
            alias: "voluptas",
            expression: "libero",
            formattingType: MetricFormattingTypeEnum.Time,
          },
          {
            alias: "hic",
            expression: "consequuntur",
            formattingType: MetricFormattingTypeEnum.Percent,
          },
        ],
        orderBys: [
          {
            fieldName: "animi",
            orderType: OrderByOrderTypeEnum.Value,
            sortOrder: OrderBySortOrderEnum.Descending,
          },
        ],
        pageSize: 250180,
        pageToken: "quia",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "fuga",
                    expressions: [
                      "illo",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "eveniet",
                    expressions: [
                      "fuga",
                      "culpa",
                      "quo",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "necessitatibus",
                    expressions: [
                      "veritatis",
                      "adipisci",
                      "quis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.EndsWith,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "dicta",
                  "quas",
                  "delectus",
                  "sint",
                ],
                name: "voluptatibus",
              },
              {
                histogramBuckets: [
                  "reprehenderit",
                  "est",
                  "numquam",
                ],
                name: "nam",
              },
            ],
            maxGroupCount: 958595,
            metrics: [
              {
                alias: "facere",
                expression: "odit",
                formattingType: MetricFormattingTypeEnum.Percent,
              },
              {
                alias: "asperiores",
                expression: "quam",
                formattingType: MetricFormattingTypeEnum.Time,
              },
              {
                alias: "ea",
                expression: "molestiae",
                formattingType: MetricFormattingTypeEnum.Percent,
              },
            ],
            startGroup: 643453,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "id",
                    expressions: [
                      "excepturi",
                      "unde",
                      "expedita",
                      "eius",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "quibusdam",
                    expressions: [
                      "quasi",
                      "magni",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.BeginsWith,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "nesciunt",
                    expressions: [
                      "blanditiis",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "perferendis",
                    expressions: [
                      "delectus",
                      "ea",
                      "totam",
                      "quidem",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "assumenda",
                    expressions: [
                      "dolores",
                      "beatae",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericGreaterThan,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "repellendus",
                    expressions: [
                      "nesciunt",
                      "facere",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "delectus",
                    expressions: [
                      "quo",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericGreaterThan,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.OperatorUnspecified,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "consequatur",
                ],
                name: "perferendis",
              },
              {
                histogramBuckets: [
                  "earum",
                ],
                name: "facilis",
              },
              {
                histogramBuckets: [
                  "sed",
                ],
                name: "fugiat",
              },
            ],
            maxGroupCount: 576751,
            metrics: [
              {
                alias: "dolorem",
                expression: "dolorum",
                formattingType: MetricFormattingTypeEnum.Float,
              },
              {
                alias: "aperiam",
                expression: "pariatur",
                formattingType: MetricFormattingTypeEnum.Currency,
              },
              {
                alias: "aliquam",
                expression: "voluptatibus",
                formattingType: MetricFormattingTypeEnum.Percent,
              },
            ],
            startGroup: 646495,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "quasi",
                    expressions: [
                      "corporis",
                      "odio",
                      "quibusdam",
                      "dicta",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.InList,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "vero",
                    expressions: [
                      "maxime",
                      "consequuntur",
                      "sit",
                      "nostrum",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.And,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "quos",
                    expressions: [
                      "quo",
                      "sequi",
                      "quo",
                      "repudiandae",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "iusto",
                  "sunt",
                ],
                name: "tenetur",
              },
              {
                histogramBuckets: [
                  "necessitatibus",
                  "necessitatibus",
                  "autem",
                ],
                name: "natus",
              },
            ],
            maxGroupCount: 95666,
            metrics: [
              {
                alias: "ex",
                expression: "error",
                formattingType: MetricFormattingTypeEnum.Currency,
              },
              {
                alias: "tempore",
                expression: "saepe",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
            ],
            startGroup: 294879,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "debitis",
                    expressions: [
                      "porro",
                      "blanditiis",
                      "libero",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Regexp,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "laborum",
                    expressions: [
                      "totam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.Partial,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "nisi",
                    expressions: [
                      "inventore",
                      "voluptatibus",
                      "officiis",
                      "suscipit",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "nisi",
                    expressions: [
                      "alias",
                      "voluptate",
                      "repellendus",
                      "qui",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.NumericEqual,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "error",
                    expressions: [
                      "laudantium",
                      "nihil",
                      "officia",
                      "repudiandae",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.EndsWith,
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "voluptatem",
                    expressions: [
                      "vitae",
                      "vel",
                      "voluptas",
                      "laboriosam",
                    ],
                    not: false,
                    operator: DimensionFilterOperatorEnum.OperatorUnspecified,
                  },
                ],
                operator: DimensionFilterClauseOperatorEnum.Or,
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "excepturi",
                  "veritatis",
                  "ipsum",
                  "iure",
                ],
                name: "similique",
              },
            ],
            maxGroupCount: 472980,
            metrics: [
              {
                alias: "voluptatum",
                expression: "possimus",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
              {
                alias: "non",
                expression: "qui",
                formattingType: MetricFormattingTypeEnum.MetricTypeUnspecified,
              },
              {
                alias: "amet",
                expression: "tenetur",
                formattingType: MetricFormattingTypeEnum.Integer,
              },
              {
                alias: "asperiores",
                expression: "commodi",
                formattingType: MetricFormattingTypeEnum.Float,
              },
            ],
            startGroup: 553805,
          },
        ],
        samplingLevel: ReportRequestSamplingLevelEnum.Default,
        segments: [
          {
            dynamicSegment: {
              name: "fugit",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maxime",
                                    expressions: [
                                      "occaecati",
                                      "asperiores",
                                    ],
                                    maxComparisonValue: "doloremque",
                                    minComparisonValue: "id",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "placeat",
                                    metricName: "necessitatibus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "culpa",
                                    expressions: [
                                      "laborum",
                                      "consequuntur",
                                      "omnis",
                                      "maxime",
                                    ],
                                    maxComparisonValue: "officia",
                                    minComparisonValue: "iusto",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ab",
                                    maxComparisonValue: "deleniti",
                                    metricName: "et",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laboriosam",
                                    expressions: [
                                      "ab",
                                      "ex",
                                    ],
                                    maxComparisonValue: "iure",
                                    minComparisonValue: "dolorem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ad",
                                    maxComparisonValue: "ipsum",
                                    metricName: "ipsa",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vel",
                                    expressions: [
                                      "minima",
                                      "et",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "dolor",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "suscipit",
                                    metricName: "amet",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempore",
                                    expressions: [
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "sunt",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "asperiores",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "esse",
                                    expressions: [
                                      "aliquam",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "reprehenderit",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "officia",
                                    metricName: "modi",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "quis",
                                    ],
                                    maxComparisonValue: "hic",
                                    minComparisonValue: "dolorum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "at",
                                    metricName: "nisi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "laborum",
                                    ],
                                    maxComparisonValue: "sint",
                                    minComparisonValue: "incidunt",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "aperiam",
                                    metricName: "itaque",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "animi",
                                      "aliquam",
                                      "quasi",
                                      "repellendus",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "hic",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nisi",
                                    maxComparisonValue: "voluptas",
                                    metricName: "saepe",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ab",
                                    expressions: [
                                      "nisi",
                                      "repellat",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "a",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "voluptatibus",
                                    metricName: "temporibus",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "facere",
                                      "illum",
                                      "exercitationem",
                                      "saepe",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "sint",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolore",
                                    maxComparisonValue: "sequi",
                                    metricName: "sequi",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "soluta",
                                      "eius",
                                      "dolores",
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "assumenda",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "neque",
                                    metricName: "laudantium",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "incidunt",
                                    expressions: [
                                      "deleniti",
                                      "aut",
                                      "nesciunt",
                                      "error",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "culpa",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "asperiores",
                                    maxComparisonValue: "iste",
                                    metricName: "harum",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "tempora",
                                    ],
                                    maxComparisonValue: "modi",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nisi",
                                    maxComparisonValue: "ab",
                                    metricName: "omnis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iste",
                                    expressions: [
                                      "dolorum",
                                      "maxime",
                                      "assumenda",
                                      "velit",
                                    ],
                                    maxComparisonValue: "voluptatum",
                                    minComparisonValue: "eveniet",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloremque",
                                    maxComparisonValue: "assumenda",
                                    metricName: "nobis",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "temporibus",
                                    expressions: [
                                      "quam",
                                      "delectus",
                                      "quae",
                                      "vero",
                                    ],
                                    maxComparisonValue: "amet",
                                    minComparisonValue: "culpa",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quasi",
                                    maxComparisonValue: "veniam",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "repellendus",
                                    ],
                                    maxComparisonValue: "ab",
                                    minComparisonValue: "cum",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "natus",
                                    maxComparisonValue: "aperiam",
                                    metricName: "dicta",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "harum",
                                    expressions: [
                                      "totam",
                                      "provident",
                                      "maxime",
                                      "totam",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "neque",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "ipsum",
                                    metricName: "occaecati",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "in",
                                      "nobis",
                                      "nisi",
                                    ],
                                    maxComparisonValue: "natus",
                                    minComparisonValue: "eaque",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facilis",
                                    maxComparisonValue: "atque",
                                    metricName: "atque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "maiores",
                                      "ea",
                                    ],
                                    maxComparisonValue: "modi",
                                    minComparisonValue: "sequi",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "autem",
                                    maxComparisonValue: "tempora",
                                    metricName: "mollitia",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "asperiores",
                                expressions: [
                                  "quod",
                                  "commodi",
                                  "natus",
                                ],
                                maxComparisonValue: "beatae",
                                minComparisonValue: "placeat",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "dolor",
                                maxComparisonValue: "quia",
                                metricName: "nulla",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "libero",
                                expressions: [
                                  "tenetur",
                                  "molestias",
                                  "magnam",
                                ],
                                maxComparisonValue: "voluptate",
                                minComparisonValue: "aliquid",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "qui",
                                maxComparisonValue: "animi",
                                metricName: "vero",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "optio",
                                expressions: [
                                  "ullam",
                                  "ipsa",
                                  "placeat",
                                  "quas",
                                ],
                                maxComparisonValue: "culpa",
                                minComparisonValue: "consectetur",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "eos",
                                metricName: "porro",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "provident",
                                    expressions: [
                                      "alias",
                                    ],
                                    maxComparisonValue: "dignissimos",
                                    minComparisonValue: "minima",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "mollitia",
                                    maxComparisonValue: "alias",
                                    metricName: "sit",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "commodi",
                                    expressions: [
                                      "eveniet",
                                      "eligendi",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "dolorem",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "possimus",
                                    maxComparisonValue: "dolore",
                                    metricName: "neque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "omnis",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "optio",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "atque",
                                    maxComparisonValue: "dolor",
                                    metricName: "optio",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "accusamus",
                                      "fugiat",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "amet",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nobis",
                                    maxComparisonValue: "quam",
                                    metricName: "placeat",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "aliquid",
                                      "aliquam",
                                      "error",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "ducimus",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "impedit",
                                    maxComparisonValue: "reiciendis",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "commodi",
                                    expressions: [
                                      "corrupti",
                                      "iste",
                                      "distinctio",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "consequuntur",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "magnam",
                                    metricName: "ad",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iure",
                                    expressions: [
                                      "illum",
                                      "et",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "accusamus",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "ratione",
                                    metricName: "facere",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "quibusdam",
                                      "inventore",
                                      "ut",
                                      "tempore",
                                    ],
                                    maxComparisonValue: "molestias",
                                    minComparisonValue: "fuga",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "minus",
                                    maxComparisonValue: "sunt",
                                    metricName: "sint",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "officiis",
                                      "unde",
                                    ],
                                    maxComparisonValue: "ullam",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "cumque",
                                    metricName: "et",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eveniet",
                                    expressions: [
                                      "magnam",
                                      "unde",
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "eligendi",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "quaerat",
                                    metricName: "sequi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "laborum",
                                expressions: [
                                  "quam",
                                  "totam",
                                  "incidunt",
                                ],
                                maxComparisonValue: "similique",
                                minComparisonValue: "nobis",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "ratione",
                                maxComparisonValue: "illum",
                                metricName: "sed",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptates",
                                expressions: [
                                  "tenetur",
                                  "dignissimos",
                                  "dolor",
                                  "totam",
                                ],
                                maxComparisonValue: "beatae",
                                minComparisonValue: "vitae",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "beatae",
                                maxComparisonValue: "vitae",
                                metricName: "veniam",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequuntur",
                                expressions: [
                                  "nulla",
                                  "ducimus",
                                  "eveniet",
                                ],
                                maxComparisonValue: "repellendus",
                                minComparisonValue: "enim",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "veniam",
                                maxComparisonValue: "voluptatem",
                                metricName: "quam",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "veritatis",
                                expressions: [
                                  "ad",
                                  "deleniti",
                                  "doloribus",
                                  "magnam",
                                ],
                                maxComparisonValue: "nulla",
                                minComparisonValue: "iusto",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "provident",
                                maxComparisonValue: "voluptas",
                                metricName: "nostrum",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "dicta",
                                      "veritatis",
                                    ],
                                    maxComparisonValue: "similique",
                                    minComparisonValue: "omnis",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dicta",
                                    maxComparisonValue: "illum",
                                    metricName: "aspernatur",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dignissimos",
                                    expressions: [
                                      "facilis",
                                      "libero",
                                      "corrupti",
                                      "doloribus",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "velit",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "assumenda",
                                    maxComparisonValue: "atque",
                                    metricName: "perspiciatis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "earum",
                                    expressions: [
                                      "atque",
                                      "sunt",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "placeat",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "exercitationem",
                                    maxComparisonValue: "architecto",
                                    metricName: "consequuntur",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "nobis",
                                    ],
                                    maxComparisonValue: "asperiores",
                                    minComparisonValue: "corporis",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "a",
                                    metricName: "corrupti",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "harum",
                                    ],
                                    maxComparisonValue: "a",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quod",
                                    maxComparisonValue: "totam",
                                    metricName: "officiis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolores",
                                    expressions: [
                                      "eum",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "corporis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "sequi",
                                    metricName: "illo",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aperiam",
                                    expressions: [
                                      "ab",
                                      "voluptatem",
                                      "provident",
                                    ],
                                    maxComparisonValue: "ipsa",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "quae",
                                    metricName: "voluptas",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "minus",
                                    maxComparisonValue: "exercitationem",
                                    metricName: "molestiae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "molestiae",
                                    expressions: [
                                      "explicabo",
                                      "dolore",
                                    ],
                                    maxComparisonValue: "accusantium",
                                    minComparisonValue: "excepturi",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "odit",
                                    maxComparisonValue: "beatae",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "blanditiis",
                                    expressions: [
                                      "aut",
                                      "vitae",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "molestias",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "officia",
                                    maxComparisonValue: "minima",
                                    metricName: "doloribus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "debitis",
                                    expressions: [
                                      "mollitia",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "non",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "natus",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorem",
                                    expressions: [
                                      "vero",
                                    ],
                                    maxComparisonValue: "placeat",
                                    minComparisonValue: "pariatur",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "incidunt",
                                    metricName: "praesentium",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorum",
                                    expressions: [
                                      "id",
                                      "natus",
                                    ],
                                    maxComparisonValue: "quas",
                                    minComparisonValue: "saepe",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "assumenda",
                                    maxComparisonValue: "maiores",
                                    metricName: "neque",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "libero",
                                      "totam",
                                    ],
                                    maxComparisonValue: "omnis",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "aliquam",
                                    metricName: "vitae",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsum",
                                    expressions: [
                                      "numquam",
                                      "praesentium",
                                      "dolores",
                                    ],
                                    maxComparisonValue: "consectetur",
                                    minComparisonValue: "dicta",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "perferendis",
                                    metricName: "iure",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "quo",
                                      "aut",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "sed",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vero",
                                    maxComparisonValue: "nihil",
                                    metricName: "velit",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "numquam",
                                    expressions: [
                                      "pariatur",
                                      "voluptatum",
                                      "vel",
                                    ],
                                    maxComparisonValue: "delectus",
                                    minComparisonValue: "modi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quidem",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "eaque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nostrum",
                                    expressions: [
                                      "provident",
                                      "veritatis",
                                      "sunt",
                                      "quod",
                                    ],
                                    maxComparisonValue: "expedita",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dignissimos",
                                    maxComparisonValue: "magnam",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "enim",
                                expressions: [
                                  "sed",
                                  "molestiae",
                                  "delectus",
                                ],
                                maxComparisonValue: "ex",
                                minComparisonValue: "error",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "consequuntur",
                                maxComparisonValue: "quod",
                                metricName: "occaecati",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "temporibus",
                                expressions: [
                                  "doloremque",
                                ],
                                maxComparisonValue: "debitis",
                                minComparisonValue: "omnis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "quidem",
                                maxComparisonValue: "neque",
                                metricName: "est",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "vel",
                                expressions: [
                                  "doloremque",
                                  "adipisci",
                                  "quasi",
                                ],
                                maxComparisonValue: "accusantium",
                                minComparisonValue: "molestias",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "occaecati",
                                maxComparisonValue: "quisquam",
                                metricName: "nesciunt",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "modi",
                                expressions: [
                                  "velit",
                                  "aut",
                                ],
                                maxComparisonValue: "rem",
                                minComparisonValue: "odit",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "incidunt",
                                metricName: "asperiores",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "distinctio",
                                expressions: [
                                  "earum",
                                ],
                                maxComparisonValue: "possimus",
                                minComparisonValue: "nemo",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "iusto",
                                maxComparisonValue: "veritatis",
                                metricName: "voluptates",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "amet",
                                expressions: [
                                  "commodi",
                                ],
                                maxComparisonValue: "neque",
                                minComparisonValue: "enim",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "officia",
                                maxComparisonValue: "tempora",
                                metricName: "eum",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ipsum",
                                expressions: [
                                  "blanditiis",
                                  "natus",
                                ],
                                maxComparisonValue: "quisquam",
                                minComparisonValue: "itaque",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "recusandae",
                                maxComparisonValue: "iste",
                                metricName: "error",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "unde",
                                expressions: [
                                  "temporibus",
                                  "omnis",
                                ],
                                maxComparisonValue: "amet",
                                minComparisonValue: "deserunt",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "modi",
                                maxComparisonValue: "impedit",
                                metricName: "ipsa",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "a",
                                expressions: [
                                  "dolor",
                                  "quidem",
                                  "quaerat",
                                  "cum",
                                ],
                                maxComparisonValue: "dolore",
                                minComparisonValue: "quibusdam",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "atque",
                                maxComparisonValue: "tempore",
                                metricName: "odio",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "officiis",
                                    expressions: [
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "aspernatur",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ad",
                                    maxComparisonValue: "eaque",
                                    metricName: "aspernatur",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "explicabo",
                                      "eligendi",
                                      "nam",
                                    ],
                                    maxComparisonValue: "placeat",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "adipisci",
                                    maxComparisonValue: "ipsam",
                                    metricName: "fugiat",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "exercitationem",
                                    expressions: [
                                      "culpa",
                                      "alias",
                                      "eos",
                                      "quos",
                                    ],
                                    maxComparisonValue: "quisquam",
                                    minComparisonValue: "dolor",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "enim",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vero",
                                    expressions: [
                                      "aut",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "fugiat",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "eum",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "nam",
                                      "quam",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "laboriosam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "adipisci",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "veritatis",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quasi",
                                    expressions: [
                                      "dolorum",
                                    ],
                                    maxComparisonValue: "vel",
                                    minComparisonValue: "rerum",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "excepturi",
                                    maxComparisonValue: "fugit",
                                    metricName: "eius",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "numquam",
                                      "tempora",
                                      "corrupti",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "asperiores",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cumque",
                                    maxComparisonValue: "praesentium",
                                    metricName: "ut",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rem",
                                    expressions: [
                                      "harum",
                                      "consectetur",
                                    ],
                                    maxComparisonValue: "quisquam",
                                    minComparisonValue: "nulla",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ex",
                                    maxComparisonValue: "dolore",
                                    metricName: "dicta",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "magnam",
                                      "molestias",
                                    ],
                                    maxComparisonValue: "hic",
                                    minComparisonValue: "error",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "dicta",
                                    metricName: "ratione",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "officiis",
                                    expressions: [
                                      "nulla",
                                      "distinctio",
                                      "recusandae",
                                      "in",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "tempore",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "sit",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rem",
                                    expressions: [
                                      "eius",
                                      "necessitatibus",
                                      "culpa",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugiat",
                                    maxComparisonValue: "corporis",
                                    metricName: "impedit",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "quis",
                                      "expedita",
                                      "quam",
                                    ],
                                    maxComparisonValue: "laudantium",
                                    minComparisonValue: "exercitationem",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magnam",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "nulla",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "debitis",
                                    expressions: [
                                      "vel",
                                      "consectetur",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "tempore",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "expedita",
                                    metricName: "maxime",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "unde",
                                    expressions: [
                                      "voluptatem",
                                      "placeat",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "magni",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quod",
                                    maxComparisonValue: "provident",
                                    metricName: "delectus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "labore",
                                    expressions: [
                                      "sunt",
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "voluptates",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "minima",
                                    maxComparisonValue: "expedita",
                                    metricName: "ducimus",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iure",
                                    expressions: [
                                      "cumque",
                                      "eaque",
                                    ],
                                    maxComparisonValue: "earum",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "sapiente",
                                    metricName: "perspiciatis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "deleniti",
                                      "eligendi",
                                      "unde",
                                    ],
                                    maxComparisonValue: "veniam",
                                    minComparisonValue: "nam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "explicabo",
                                    metricName: "corporis",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nihil",
                                    expressions: [
                                      "provident",
                                    ],
                                    maxComparisonValue: "reiciendis",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "eveniet",
                                    maxComparisonValue: "odio",
                                    metricName: "voluptate",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "perferendis",
                                    expressions: [
                                      "dicta",
                                      "delectus",
                                      "voluptas",
                                      "exercitationem",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "quos",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cupiditate",
                                    maxComparisonValue: "excepturi",
                                    metricName: "quod",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "fugit",
                                expressions: [
                                  "optio",
                                  "accusantium",
                                  "earum",
                                ],
                                maxComparisonValue: "excepturi",
                                minComparisonValue: "numquam",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "voluptatum",
                                maxComparisonValue: "ducimus",
                                metricName: "possimus",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "culpa",
                                expressions: [
                                  "recusandae",
                                  "doloremque",
                                  "magnam",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "quibusdam",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "voluptate",
                                maxComparisonValue: "placeat",
                                metricName: "est",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "occaecati",
                                expressions: [
                                  "modi",
                                  "minus",
                                  "id",
                                ],
                                maxComparisonValue: "culpa",
                                minComparisonValue: "beatae",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "a",
                                maxComparisonValue: "eveniet",
                                metricName: "sint",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "minima",
                                expressions: [
                                  "reiciendis",
                                  "molestias",
                                  "ipsa",
                                  "amet",
                                ],
                                maxComparisonValue: "natus",
                                minComparisonValue: "aperiam",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "doloribus",
                                maxComparisonValue: "amet",
                                metricName: "ducimus",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "recusandae",
                                    ],
                                    maxComparisonValue: "minima",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatum",
                                    maxComparisonValue: "corporis",
                                    metricName: "dolore",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "iusto",
                                      "optio",
                                      "ipsam",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "fugit",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nesciunt",
                                    maxComparisonValue: "maxime",
                                    metricName: "inventore",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "vitae",
                                    expressions: [
                                      "veniam",
                                      "et",
                                      "dolorum",
                                      "animi",
                                    ],
                                    maxComparisonValue: "mollitia",
                                    minComparisonValue: "autem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "hic",
                                    metricName: "nemo",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "eius",
                                      "atque",
                                    ],
                                    maxComparisonValue: "reprehenderit",
                                    minComparisonValue: "quo",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reiciendis",
                                    maxComparisonValue: "impedit",
                                    metricName: "aspernatur",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "nobis",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "maiores",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "saepe",
                                    metricName: "illo",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "veritatis",
                                    expressions: [
                                      "ducimus",
                                      "suscipit",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quibusdam",
                                    maxComparisonValue: "fuga",
                                    metricName: "nihil",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quibusdam",
                                    expressions: [
                                      "illum",
                                      "blanditiis",
                                      "tempora",
                                      "similique",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquam",
                                    maxComparisonValue: "beatae",
                                    metricName: "explicabo",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "in",
                                    expressions: [
                                      "ad",
                                    ],
                                    maxComparisonValue: "fuga",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "suscipit",
                                    maxComparisonValue: "officia",
                                    metricName: "saepe",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "expedita",
                                    expressions: [
                                      "maiores",
                                      "provident",
                                      "dignissimos",
                                      "dicta",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "blanditiis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "modi",
                                    maxComparisonValue: "ex",
                                    metricName: "nobis",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "architecto",
                                    expressions: [
                                      "aut",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "ea",
                                    metricName: "ipsam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "pariatur",
                                expressions: [
                                  "blanditiis",
                                ],
                                maxComparisonValue: "eligendi",
                                minComparisonValue: "tenetur",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "deleniti",
                                maxComparisonValue: "necessitatibus",
                                metricName: "cumque",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "nihil",
          },
          {
            dynamicSegment: {
              name: "libero",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "eum",
                                      "quis",
                                      "commodi",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "possimus",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ratione",
                                    maxComparisonValue: "velit",
                                    metricName: "soluta",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quo",
                                    expressions: [
                                      "laudantium",
                                      "est",
                                      "fuga",
                                      "autem",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "modi",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "officia",
                                    metricName: "cupiditate",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "soluta",
                                    expressions: [
                                      "eveniet",
                                      "beatae",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "quisquam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsam",
                                    maxComparisonValue: "autem",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "natus",
                                    expressions: [
                                      "nemo",
                                    ],
                                    maxComparisonValue: "eaque",
                                    minComparisonValue: "aut",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "accusantium",
                                    metricName: "et",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eius",
                                    expressions: [
                                      "delectus",
                                      "blanditiis",
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "earum",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "expedita",
                                    metricName: "hic",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "non",
                                    expressions: [
                                      "consequatur",
                                      "architecto",
                                      "dicta",
                                      "sit",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "temporibus",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laudantium",
                                    maxComparisonValue: "excepturi",
                                    metricName: "alias",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "suscipit",
                                    expressions: [
                                      "recusandae",
                                      "harum",
                                      "nisi",
                                    ],
                                    maxComparisonValue: "blanditiis",
                                    minComparisonValue: "culpa",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloribus",
                                    maxComparisonValue: "vel",
                                    metricName: "enim",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "in",
                                    expressions: [
                                      "alias",
                                      "consectetur",
                                      "mollitia",
                                      "beatae",
                                    ],
                                    maxComparisonValue: "numquam",
                                    minComparisonValue: "praesentium",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "at",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "aut",
                                      "ex",
                                      "cupiditate",
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "beatae",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "architecto",
                                    metricName: "atque",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "sunt",
                                      "ad",
                                      "quia",
                                      "aspernatur",
                                    ],
                                    maxComparisonValue: "iste",
                                    minComparisonValue: "molestiae",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "sit",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "explicabo",
                                    expressions: [
                                      "provident",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "nobis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laboriosam",
                                    maxComparisonValue: "quasi",
                                    metricName: "porro",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "odit",
                                expressions: [
                                  "soluta",
                                  "sint",
                                  "odio",
                                ],
                                maxComparisonValue: "repudiandae",
                                minComparisonValue: "accusamus",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "accusantium",
                                maxComparisonValue: "dolores",
                                metricName: "fugiat",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "recusandae",
                                expressions: [
                                  "minima",
                                ],
                                maxComparisonValue: "tenetur",
                                minComparisonValue: "praesentium",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "sit",
                                maxComparisonValue: "quasi",
                                metricName: "libero",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "adipisci",
                                expressions: [
                                  "similique",
                                  "id",
                                  "quidem",
                                  "ut",
                                ],
                                maxComparisonValue: "veniam",
                                minComparisonValue: "eius",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "dolores",
                                maxComparisonValue: "dolorum",
                                metricName: "quod",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "soluta",
                                  "a",
                                ],
                                maxComparisonValue: "vitae",
                                minComparisonValue: "maxime",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "cupiditate",
                                maxComparisonValue: "asperiores",
                                metricName: "maxime",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "deserunt",
                                expressions: [
                                  "itaque",
                                  "ad",
                                  "voluptates",
                                ],
                                maxComparisonValue: "harum",
                                minComparisonValue: "quaerat",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "sit",
                                maxComparisonValue: "porro",
                                metricName: "labore",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "incidunt",
                                    expressions: [
                                      "doloremque",
                                      "rem",
                                      "dolorum",
                                      "explicabo",
                                    ],
                                    maxComparisonValue: "odit",
                                    minComparisonValue: "laboriosam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "est",
                                    metricName: "accusamus",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "ipsum",
                                      "minus",
                                      "molestiae",
                                      "illo",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "placeat",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "tempore",
                                    metricName: "voluptates",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "magni",
                                      "dolor",
                                      "esse",
                                      "deleniti",
                                    ],
                                    maxComparisonValue: "mollitia",
                                    minComparisonValue: "debitis",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facilis",
                                    maxComparisonValue: "sapiente",
                                    metricName: "maxime",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "eius",
                                      "ad",
                                      "aperiam",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "unde",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iure",
                                    maxComparisonValue: "error",
                                    metricName: "aliquam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "quod",
                                      "nihil",
                                      "quae",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "tenetur",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ex",
                                    maxComparisonValue: "rerum",
                                    metricName: "magni",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "autem",
                                    expressions: [
                                      "unde",
                                      "sunt",
                                    ],
                                    maxComparisonValue: "amet",
                                    minComparisonValue: "laudantium",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "aliquid",
                                    metricName: "qui",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eum",
                                    expressions: [
                                      "eligendi",
                                      "incidunt",
                                      "quisquam",
                                    ],
                                    maxComparisonValue: "quod",
                                    minComparisonValue: "laboriosam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "praesentium",
                                    metricName: "totam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deserunt",
                                    expressions: [
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "illum",
                                    minComparisonValue: "nesciunt",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "corrupti",
                                    maxComparisonValue: "inventore",
                                    metricName: "quibusdam",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "optio",
                                      "consequuntur",
                                      "non",
                                    ],
                                    maxComparisonValue: "fugiat",
                                    minComparisonValue: "voluptatibus",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "amet",
                                    maxComparisonValue: "quae",
                                    metricName: "pariatur",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facere",
                                    expressions: [
                                      "minima",
                                      "vitae",
                                      "repellat",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "facere",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "numquam",
                                    maxComparisonValue: "similique",
                                    metricName: "optio",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquam",
                                    expressions: [
                                      "ullam",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "nesciunt",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "esse",
                                    maxComparisonValue: "magni",
                                    metricName: "ea",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ad",
                                    expressions: [
                                      "quia",
                                    ],
                                    maxComparisonValue: "dicta",
                                    minComparisonValue: "nam",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "ratione",
                                    metricName: "fuga",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facere",
                                    expressions: [
                                      "sint",
                                      "architecto",
                                    ],
                                    maxComparisonValue: "totam",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "tenetur",
                                    maxComparisonValue: "iure",
                                    metricName: "consequatur",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fuga",
                                    expressions: [
                                      "autem",
                                      "nostrum",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "saepe",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestias",
                                    maxComparisonValue: "fuga",
                                    metricName: "non",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "illum",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "totam",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quibusdam",
                                    maxComparisonValue: "harum",
                                    metricName: "itaque",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ad",
                                    expressions: [
                                      "ea",
                                      "corrupti",
                                      "minus",
                                      "autem",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "nisi",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "cupiditate",
                                    maxComparisonValue: "aliquam",
                                    metricName: "suscipit",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "deleniti",
                                      "quas",
                                      "magnam",
                                      "cupiditate",
                                    ],
                                    maxComparisonValue: "expedita",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "explicabo",
                                    maxComparisonValue: "veritatis",
                                    metricName: "incidunt",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "hic",
                                expressions: [
                                  "iure",
                                  "libero",
                                  "cum",
                                ],
                                maxComparisonValue: "eaque",
                                minComparisonValue: "porro",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "recusandae",
                                metricName: "adipisci",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "facere",
                                expressions: [
                                  "vitae",
                                  "non",
                                  "labore",
                                ],
                                maxComparisonValue: "incidunt",
                                minComparisonValue: "tempore",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "error",
                                maxComparisonValue: "doloribus",
                                metricName: "reprehenderit",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facere",
                                    expressions: [
                                      "laborum",
                                      "officia",
                                    ],
                                    maxComparisonValue: "soluta",
                                    minComparisonValue: "suscipit",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "recusandae",
                                    maxComparisonValue: "unde",
                                    metricName: "iusto",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "architecto",
                                    expressions: [
                                      "cum",
                                      "alias",
                                      "quod",
                                      "veniam",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "temporibus",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptate",
                                    maxComparisonValue: "nobis",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "tempore",
                                      "minima",
                                    ],
                                    maxComparisonValue: "expedita",
                                    minComparisonValue: "modi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "accusantium",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "iusto",
                                    expressions: [
                                      "odit",
                                    ],
                                    maxComparisonValue: "tempore",
                                    minComparisonValue: "ducimus",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ducimus",
                                    maxComparisonValue: "similique",
                                    metricName: "expedita",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "inventore",
                                    expressions: [
                                      "vitae",
                                      "sit",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "rem",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "necessitatibus",
                                    metricName: "vero",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "perspiciatis",
                                      "quam",
                                      "earum",
                                    ],
                                    maxComparisonValue: "velit",
                                    minComparisonValue: "fugiat",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "quod",
                                    metricName: "minus",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "amet",
                                    expressions: [
                                      "quasi",
                                      "dicta",
                                      "rerum",
                                      "neque",
                                    ],
                                    maxComparisonValue: "voluptates",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "alias",
                                    maxComparisonValue: "voluptatum",
                                    metricName: "aut",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsa",
                                    expressions: [
                                      "architecto",
                                      "deleniti",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "accusamus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "odio",
                                    maxComparisonValue: "ullam",
                                    metricName: "provident",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "dolor",
                                expressions: [
                                  "doloremque",
                                  "consequuntur",
                                ],
                                maxComparisonValue: "maxime",
                                minComparisonValue: "quis",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "laudantium",
                                maxComparisonValue: "recusandae",
                                metricName: "odit",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "consequatur",
                                expressions: [
                                  "culpa",
                                  "at",
                                  "dolorem",
                                  "sunt",
                                ],
                                maxComparisonValue: "ipsa",
                                minComparisonValue: "incidunt",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "culpa",
                                maxComparisonValue: "dolore",
                                metricName: "eius",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "molestiae",
                                expressions: [
                                  "voluptatibus",
                                  "sequi",
                                  "ducimus",
                                ],
                                maxComparisonValue: "minima",
                                minComparisonValue: "libero",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "tempora",
                                maxComparisonValue: "sed",
                                metricName: "quas",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "fugit",
                                expressions: [
                                  "reiciendis",
                                ],
                                maxComparisonValue: "nulla",
                                minComparisonValue: "libero",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "hic",
                                maxComparisonValue: "eum",
                                metricName: "sint",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
              userSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dignissimos",
                                    expressions: [
                                      "quo",
                                    ],
                                    maxComparisonValue: "optio",
                                    minComparisonValue: "voluptatum",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sequi",
                                    maxComparisonValue: "quo",
                                    metricName: "facere",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "temporibus",
                                      "doloremque",
                                      "amet",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "deleniti",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quas",
                                    maxComparisonValue: "odit",
                                    metricName: "placeat",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "atque",
                                    expressions: [
                                      "eveniet",
                                      "odit",
                                      "quam",
                                      "ullam",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "laborum",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perferendis",
                                    maxComparisonValue: "incidunt",
                                    metricName: "ducimus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "numquam",
                                    expressions: [
                                      "omnis",
                                      "repudiandae",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "quaerat",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "hic",
                                    maxComparisonValue: "natus",
                                    metricName: "laboriosam",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "repellendus",
                                      "incidunt",
                                    ],
                                    maxComparisonValue: "aperiam",
                                    minComparisonValue: "vero",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "laborum",
                                    maxComparisonValue: "quae",
                                    metricName: "quae",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "modi",
                                    expressions: [
                                      "autem",
                                    ],
                                    maxComparisonValue: "repudiandae",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "exercitationem",
                                    maxComparisonValue: "natus",
                                    metricName: "explicabo",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "minima",
                                      "minus",
                                      "provident",
                                    ],
                                    maxComparisonValue: "quibusdam",
                                    minComparisonValue: "explicabo",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iusto",
                                    maxComparisonValue: "ratione",
                                    metricName: "omnis",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nemo",
                                expressions: [
                                  "exercitationem",
                                  "nulla",
                                  "tempore",
                                ],
                                maxComparisonValue: "magnam",
                                minComparisonValue: "maiores",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "voluptatem",
                                metricName: "vitae",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "reiciendis",
                                expressions: [
                                  "tempore",
                                  "vero",
                                  "asperiores",
                                  "ea",
                                ],
                                maxComparisonValue: "voluptate",
                                minComparisonValue: "aliquid",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "reprehenderit",
                                maxComparisonValue: "consequuntur",
                                metricName: "accusantium",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "deserunt",
                                expressions: [
                                  "in",
                                  "ad",
                                  "voluptatem",
                                ],
                                maxComparisonValue: "sit",
                                minComparisonValue: "enim",
                                operator: SegmentDimensionFilterOperatorEnum.Regexp,
                              },
                              metricFilter: {
                                comparisonValue: "dolorum",
                                maxComparisonValue: "ad",
                                metricName: "nisi",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "fugiat",
                                expressions: [
                                  "tempora",
                                  "sequi",
                                  "natus",
                                  "saepe",
                                ],
                                maxComparisonValue: "quibusdam",
                                minComparisonValue: "corrupti",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "aliquam",
                                maxComparisonValue: "adipisci",
                                metricName: "explicabo",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "incidunt",
                                expressions: [
                                  "eos",
                                ],
                                maxComparisonValue: "eius",
                                minComparisonValue: "voluptatem",
                                operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                              },
                              metricFilter: {
                                comparisonValue: "aliquam",
                                maxComparisonValue: "incidunt",
                                metricName: "totam",
                                operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                scope: SegmentMetricFilterScopeEnum.Session,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "porro",
                                expressions: [
                                  "provident",
                                  "neque",
                                ],
                                maxComparisonValue: "expedita",
                                minComparisonValue: "excepturi",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "nobis",
                                maxComparisonValue: "nesciunt",
                                metricName: "quidem",
                                operator: SegmentMetricFilterOperatorEnum.Equal,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "atque",
                                  "blanditiis",
                                ],
                                maxComparisonValue: "quibusdam",
                                minComparisonValue: "odio",
                                operator: SegmentDimensionFilterOperatorEnum.InList,
                              },
                              metricFilter: {
                                comparisonValue: "ad",
                                maxComparisonValue: "officia",
                                metricName: "fuga",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "laboriosam",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "vel",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "quae",
                                    metricName: "doloremque",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "inventore",
                                    expressions: [
                                      "labore",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "dolore",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "atque",
                                    metricName: "quasi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "harum",
                                    ],
                                    maxComparisonValue: "magnam",
                                    minComparisonValue: "illo",
                                    operator: SegmentDimensionFilterOperatorEnum.Exact,
                                  },
                                  metricFilter: {
                                    comparisonValue: "magnam",
                                    maxComparisonValue: "incidunt",
                                    metricName: "consequatur",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "nesciunt",
                                    ],
                                    maxComparisonValue: "veritatis",
                                    minComparisonValue: "ipsa",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "perferendis",
                                    maxComparisonValue: "qui",
                                    metricName: "velit",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "error",
                                    expressions: [
                                      "beatae",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "veniam",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "delectus",
                                    maxComparisonValue: "pariatur",
                                    metricName: "eos",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quo",
                                    expressions: [
                                      "magnam",
                                      "praesentium",
                                    ],
                                    maxComparisonValue: "numquam",
                                    minComparisonValue: "iure",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "molestias",
                                    metricName: "assumenda",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eos",
                                    expressions: [
                                      "amet",
                                      "nobis",
                                    ],
                                    maxComparisonValue: "quos",
                                    minComparisonValue: "provident",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequuntur",
                                    maxComparisonValue: "delectus",
                                    metricName: "quaerat",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "ad",
                                      "et",
                                      "eveniet",
                                      "tempora",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "exercitationem",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugiat",
                                    maxComparisonValue: "dolorem",
                                    metricName: "cumque",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "suscipit",
                                      "quae",
                                      "quam",
                                      "dignissimos",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "animi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "excepturi",
                                    metricName: "ab",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "odio",
                                    expressions: [
                                      "enim",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "iste",
                                    metricName: "aut",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "error",
                                    expressions: [
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "labore",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ullam",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "recusandae",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.Precedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "odio",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "delectus",
                                    metricName: "et",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quis",
                                    expressions: [
                                      "consectetur",
                                      "qui",
                                      "aliquid",
                                    ],
                                    maxComparisonValue: "doloremque",
                                    minComparisonValue: "enim",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsam",
                                    maxComparisonValue: "beatae",
                                    metricName: "repudiandae",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "quia",
                                      "laboriosam",
                                    ],
                                    maxComparisonValue: "deleniti",
                                    minComparisonValue: "molestias",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "provident",
                                    metricName: "omnis",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nulla",
                                    expressions: [
                                      "amet",
                                    ],
                                    maxComparisonValue: "ipsam",
                                    minComparisonValue: "suscipit",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsa",
                                    maxComparisonValue: "accusamus",
                                    metricName: "error",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "recusandae",
                                    expressions: [
                                      "impedit",
                                      "reiciendis",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "perspiciatis",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "ipsam",
                                    metricName: "voluptatum",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "officia",
                                      "officiis",
                                      "ratione",
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "neque",
                                    minComparisonValue: "deserunt",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "tempore",
                                    metricName: "maiores",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "quod",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "molestias",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "inventore",
                                    metricName: "ex",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "minus",
                                    ],
                                    maxComparisonValue: "quisquam",
                                    minComparisonValue: "sint",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "alias",
                                    maxComparisonValue: "placeat",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "assumenda",
                                    expressions: [
                                      "dolores",
                                    ],
                                    maxComparisonValue: "consectetur",
                                    minComparisonValue: "repellat",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "est",
                                    metricName: "autem",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "occaecati",
                                    expressions: [
                                      "asperiores",
                                      "et",
                                      "nobis",
                                      "quas",
                                    ],
                                    maxComparisonValue: "nemo",
                                    minComparisonValue: "commodi",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "libero",
                                    metricName: "id",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusamus",
                                    expressions: [
                                      "odit",
                                      "numquam",
                                      "nemo",
                                      "numquam",
                                    ],
                                    maxComparisonValue: "culpa",
                                    minComparisonValue: "aliquam",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "dolorum",
                                    metricName: "maxime",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "inventore",
                                    expressions: [
                                      "optio",
                                      "fugiat",
                                    ],
                                    maxComparisonValue: "facere",
                                    minComparisonValue: "exercitationem",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolore",
                                    maxComparisonValue: "numquam",
                                    metricName: "officia",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nisi",
                                    expressions: [
                                      "praesentium",
                                    ],
                                    maxComparisonValue: "iusto",
                                    minComparisonValue: "dolorem",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "dignissimos",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "placeat",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "labore",
                                    expressions: [
                                      "at",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "autem",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "consectetur",
                                    maxComparisonValue: "ea",
                                    metricName: "aspernatur",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nesciunt",
                                    expressions: [
                                      "dolor",
                                    ],
                                    maxComparisonValue: "voluptatum",
                                    minComparisonValue: "doloribus",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloremque",
                                    maxComparisonValue: "at",
                                    metricName: "tenetur",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "cum",
                                    expressions: [
                                      "magni",
                                    ],
                                    maxComparisonValue: "aspernatur",
                                    minComparisonValue: "earum",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "id",
                                    maxComparisonValue: "exercitationem",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quidem",
                                    expressions: [
                                      "repellat",
                                      "suscipit",
                                      "veniam",
                                    ],
                                    maxComparisonValue: "consequuntur",
                                    minComparisonValue: "repudiandae",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "perspiciatis",
                                    metricName: "illum",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "deleniti",
                                    expressions: [
                                      "corrupti",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "molestias",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "fugit",
                                    maxComparisonValue: "labore",
                                    metricName: "neque",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "est",
                                      "soluta",
                                      "neque",
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "vero",
                                    minComparisonValue: "excepturi",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "iure",
                                    maxComparisonValue: "doloribus",
                                    metricName: "corporis",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quibusdam",
                                    expressions: [
                                      "alias",
                                      "non",
                                      "porro",
                                    ],
                                    maxComparisonValue: "voluptatum",
                                    minComparisonValue: "libero",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quidem",
                                    maxComparisonValue: "soluta",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "magni",
                                    expressions: [
                                      "consequuntur",
                                      "cum",
                                      "aut",
                                    ],
                                    maxComparisonValue: "expedita",
                                    minComparisonValue: "quo",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "expedita",
                                    metricName: "odio",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "labore",
                                expressions: [
                                  "cum",
                                  "sunt",
                                  "repellendus",
                                  "voluptatem",
                                ],
                                maxComparisonValue: "non",
                                minComparisonValue: "ipsum",
                                operator: SegmentDimensionFilterOperatorEnum.Exact,
                              },
                              metricFilter: {
                                comparisonValue: "totam",
                                maxComparisonValue: "facilis",
                                metricName: "consequatur",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "libero",
                                expressions: [
                                  "architecto",
                                  "in",
                                  "fuga",
                                ],
                                maxComparisonValue: "tenetur",
                                minComparisonValue: "saepe",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "reprehenderit",
                                maxComparisonValue: "incidunt",
                                metricName: "soluta",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quidem",
                                expressions: [
                                  "labore",
                                  "ipsam",
                                  "voluptate",
                                ],
                                maxComparisonValue: "quod",
                                minComparisonValue: "nihil",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "illum",
                                maxComparisonValue: "laborum",
                                metricName: "reiciendis",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "possimus",
                                expressions: [
                                  "autem",
                                ],
                                maxComparisonValue: "tenetur",
                                minComparisonValue: "rerum",
                                operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                              },
                              metricFilter: {
                                comparisonValue: "odio",
                                maxComparisonValue: "nisi",
                                metricName: "hic",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eum",
                                expressions: [
                                  "quidem",
                                ],
                                maxComparisonValue: "sequi",
                                minComparisonValue: "doloremque",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "debitis",
                                maxComparisonValue: "consectetur",
                                metricName: "aperiam",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quidem",
                                expressions: [
                                  "ipsum",
                                  "accusamus",
                                  "consectetur",
                                ],
                                maxComparisonValue: "tempora",
                                minComparisonValue: "sequi",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "placeat",
                                metricName: "sapiente",
                                operator: SegmentMetricFilterOperatorEnum.LessThan,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consectetur",
                                    expressions: [
                                      "ullam",
                                      "consectetur",
                                    ],
                                    maxComparisonValue: "porro",
                                    minComparisonValue: "optio",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "quisquam",
                                    metricName: "fugit",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.ImmediatelyPrecedes,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "illum",
                                    expressions: [
                                      "minus",
                                      "sint",
                                      "occaecati",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "maxime",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "illo",
                                    maxComparisonValue: "provident",
                                    metricName: "exercitationem",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "suscipit",
                                    expressions: [
                                      "praesentium",
                                      "optio",
                                    ],
                                    maxComparisonValue: "officiis",
                                    minComparisonValue: "voluptatibus",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quam",
                                    maxComparisonValue: "deleniti",
                                    metricName: "a",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eos",
                                    expressions: [
                                      "nesciunt",
                                      "libero",
                                      "error",
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "beatae",
                                    minComparisonValue: "saepe",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "corporis",
                                    metricName: "explicabo",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tempora",
                                    expressions: [
                                      "harum",
                                      "quidem",
                                      "inventore",
                                      "iste",
                                    ],
                                    maxComparisonValue: "voluptatibus",
                                    minComparisonValue: "odio",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "neque",
                                    maxComparisonValue: "pariatur",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolore",
                                    expressions: [
                                      "nisi",
                                    ],
                                    maxComparisonValue: "molestias",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nesciunt",
                                    maxComparisonValue: "corrupti",
                                    metricName: "in",
                                    operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dicta",
                                    expressions: [
                                      "vitae",
                                      "quos",
                                      "eveniet",
                                      "officia",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "debitis",
                                    operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "veniam",
                                    maxComparisonValue: "illo",
                                    metricName: "illo",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: SegmentSequenceStepMatchTypeEnum.UnspecifiedMatchType,
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minima",
                                    expressions: [
                                      "tenetur",
                                      "libero",
                                    ],
                                    maxComparisonValue: "repellendus",
                                    minComparisonValue: "aliquid",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "rerum",
                                    maxComparisonValue: "beatae",
                                    metricName: "fuga",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eveniet",
                                    expressions: [
                                      "eos",
                                      "cupiditate",
                                      "est",
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "quaerat",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "animi",
                                    metricName: "totam",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nemo",
                                    expressions: [
                                      "optio",
                                      "fugit",
                                      "at",
                                    ],
                                    maxComparisonValue: "modi",
                                    minComparisonValue: "delectus",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "laudantium",
                                    metricName: "quas",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "labore",
                                    expressions: [
                                      "aspernatur",
                                      "nihil",
                                      "quas",
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "fugiat",
                                    minComparisonValue: "unde",
                                    operator: SegmentDimensionFilterOperatorEnum.Partial,
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "molestiae",
                                    metricName: "accusamus",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "corporis",
                                    expressions: [
                                      "possimus",
                                    ],
                                    maxComparisonValue: "dolores",
                                    minComparisonValue: "voluptatibus",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericBetween,
                                  },
                                  metricFilter: {
                                    comparisonValue: "id",
                                    maxComparisonValue: "fuga",
                                    metricName: "ad",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "minus",
                                    expressions: [
                                      "repellat",
                                      "sed",
                                      "ratione",
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "natus",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "veniam",
                                    maxComparisonValue: "tempore",
                                    metricName: "natus",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "repellat",
                                    expressions: [
                                      "vitae",
                                    ],
                                    maxComparisonValue: "error",
                                    minComparisonValue: "alias",
                                    operator: SegmentDimensionFilterOperatorEnum.InList,
                                  },
                                  metricFilter: {
                                    comparisonValue: "nobis",
                                    maxComparisonValue: "vero",
                                    metricName: "excepturi",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Session,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quisquam",
                                    expressions: [
                                      "magni",
                                      "dignissimos",
                                      "aspernatur",
                                      "ullam",
                                    ],
                                    maxComparisonValue: "saepe",
                                    minComparisonValue: "impedit",
                                    operator: SegmentDimensionFilterOperatorEnum.Regexp,
                                  },
                                  metricFilter: {
                                    comparisonValue: "suscipit",
                                    maxComparisonValue: "ipsam",
                                    metricName: "error",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.User,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quia",
                                    expressions: [
                                      "consequatur",
                                      "corrupti",
                                      "numquam",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "quod",
                                    operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                                  },
                                  metricFilter: {
                                    comparisonValue: "excepturi",
                                    maxComparisonValue: "eveniet",
                                    metricName: "tenetur",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Hit,
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "modi",
                                    expressions: [
                                      "cumque",
                                      "blanditiis",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "quibusdam",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "maiores",
                                    maxComparisonValue: "est",
                                    metricName: "optio",
                                    operator: SegmentMetricFilterOperatorEnum.GreaterThan,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "incidunt",
                                    expressions: [
                                      "ipsa",
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "quaerat",
                                    minComparisonValue: "nesciunt",
                                    operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                                  },
                                  metricFilter: {
                                    comparisonValue: "optio",
                                    maxComparisonValue: "eum",
                                    metricName: "commodi",
                                    operator: SegmentMetricFilterOperatorEnum.LessThan,
                                    scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facilis",
                                    expressions: [
                                      "dolor",
                                      "provident",
                                    ],
                                    maxComparisonValue: "inventore",
                                    minComparisonValue: "sapiente",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericGreaterThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "sapiente",
                                    maxComparisonValue: "ipsa",
                                    metricName: "vitae",
                                    operator: SegmentMetricFilterOperatorEnum.Equal,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "itaque",
                                    expressions: [
                                      "beatae",
                                      "eveniet",
                                      "quas",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "voluptate",
                                    operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                                  },
                                  metricFilter: {
                                    comparisonValue: "quod",
                                    maxComparisonValue: "ea",
                                    metricName: "error",
                                    operator: SegmentMetricFilterOperatorEnum.Between,
                                    scope: SegmentMetricFilterScopeEnum.Product,
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    simpleSegment: {
                      orFiltersForSegment: [
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "est",
                                expressions: [
                                  "dignissimos",
                                  "debitis",
                                ],
                                maxComparisonValue: "quo",
                                minComparisonValue: "saepe",
                                operator: SegmentDimensionFilterOperatorEnum.NumericLessThan,
                              },
                              metricFilter: {
                                comparisonValue: "sunt",
                                maxComparisonValue: "nisi",
                                metricName: "nulla",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.UnspecifiedScope,
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "et",
                                expressions: [
                                  "delectus",
                                  "qui",
                                  "laboriosam",
                                  "neque",
                                ],
                                maxComparisonValue: "ab",
                                minComparisonValue: "quisquam",
                                operator: SegmentDimensionFilterOperatorEnum.Partial,
                              },
                              metricFilter: {
                                comparisonValue: "quisquam",
                                maxComparisonValue: "aperiam",
                                metricName: "delectus",
                                operator: SegmentMetricFilterOperatorEnum.UnspecifiedOperator,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "molestias",
                                expressions: [
                                  "dolorem",
                                  "sapiente",
                                ],
                                maxComparisonValue: "error",
                                minComparisonValue: "facere",
                                operator: SegmentDimensionFilterOperatorEnum.EndsWith,
                              },
                              metricFilter: {
                                comparisonValue: "eligendi",
                                maxComparisonValue: "aspernatur",
                                metricName: "nemo",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.User,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "non",
                                expressions: [
                                  "quae",
                                  "tempore",
                                  "incidunt",
                                  "deserunt",
                                ],
                                maxComparisonValue: "non",
                                minComparisonValue: "officia",
                                operator: SegmentDimensionFilterOperatorEnum.BeginsWith,
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "ullam",
                                metricName: "dolor",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Product,
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ipsa",
                                expressions: [
                                  "ullam",
                                ],
                                maxComparisonValue: "molestiae",
                                minComparisonValue: "architecto",
                                operator: SegmentDimensionFilterOperatorEnum.OperatorUnspecified,
                              },
                              metricFilter: {
                                comparisonValue: "maiores",
                                maxComparisonValue: "labore",
                                metricName: "fugit",
                                operator: SegmentMetricFilterOperatorEnum.Between,
                                scope: SegmentMetricFilterScopeEnum.Hit,
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "recusandae",
          },
        ],
        viewId: "iusto",
      },
    ],
    useResourceQuotas: false,
  },
  accessToken: "pariatur",
  alt: AltEnum.Proto,
  callback: "enim",
  fields: "tempora",
  key: "voluptatum",
  oauthToken: "cum",
  prettyPrint: false,
  quotaUser: "itaque",
  uploadType: "sit",
  uploadProtocol: "excepturi",
};

sdk.reports.analyticsreportingReportsBatchGet(req).then((res: AnalyticsreportingReportsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### reports

* `analyticsreportingReportsBatchGet` - Returns the Analytics data.

### userActivity

* `analyticsreportingUserActivitySearch` - Returns User Activity data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

