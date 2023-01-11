<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnalyticsreportingReportsBatchGetRequest, AnalyticsreportingReportsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsreportingReportsBatchGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    reportRequests: [
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "debitis",
                startDate: "voluptatum",
              },
              name: "et",
              type: "FIRST_VISIT_DATE",
            },
            {
              dateRange: {
                endDate: "dolorem",
                startDate: "et",
              },
              name: "voluptate",
              type: "FIRST_VISIT_DATE",
            },
            {
              dateRange: {
                endDate: "vitae",
                startDate: "totam",
              },
              name: "dolores",
              type: "FIRST_VISIT_DATE",
            },
          ],
          lifetimeValue: true,
        },
        dateRanges: [
          {
            endDate: "odio",
            startDate: "dolore",
          },
          {
            endDate: "id",
            startDate: "aspernatur",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "quis",
                expressions: [
                  "aut",
                  "odit",
                ],
                not: true,
                operator: "PARTIAL",
              },
              {
                caseSensitive: true,
                dimensionName: "aut",
                expressions: [
                  "sed",
                ],
                not: false,
                operator: "NUMERIC_GREATER_THAN",
              },
              {
                caseSensitive: true,
                dimensionName: "nobis",
                expressions: [
                  "qui",
                ],
                not: true,
                operator: "NUMERIC_LESS_THAN",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "sint",
                expressions: [
                  "ut",
                ],
                not: false,
                operator: "PARTIAL",
              },
              {
                caseSensitive: false,
                dimensionName: "tempore",
                expressions: [
                  "incidunt",
                ],
                not: false,
                operator: "ENDS_WITH",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "omnis",
                expressions: [
                  "ex",
                ],
                not: true,
                operator: "NUMERIC_GREATER_THAN",
              },
              {
                caseSensitive: true,
                dimensionName: "rerum",
                expressions: [
                  "voluptas",
                  "quam",
                ],
                not: false,
                operator: "PARTIAL",
              },
              {
                caseSensitive: false,
                dimensionName: "unde",
                expressions: [
                  "autem",
                  "qui",
                ],
                not: false,
                operator: "NUMERIC_EQUAL",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "et",
              "accusantium",
              "esse",
            ],
            name: "architecto",
          },
        ],
        filtersExpression: "quam",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: true,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "magni",
                metricName: "et",
                not: true,
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                comparisonValue: "earum",
                metricName: "illo",
                not: true,
                operator: "IS_MISSING",
              },
            ],
            operator: "AND",
          },
          {
            filters: [
              {
                comparisonValue: "commodi",
                metricName: "error",
                not: false,
                operator: "GREATER_THAN",
              },
              {
                comparisonValue: "nostrum",
                metricName: "ut",
                not: false,
                operator: "OPERATOR_UNSPECIFIED",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
        ],
        metrics: [
          {
            alias: "aut",
            expression: "quas",
            formattingType: "FLOAT",
          },
        ],
        orderBys: [
          {
            fieldName: "autem",
            orderType: "SMART",
            sortOrder: "ASCENDING",
          },
        ],
        pageSize: 8204648627352676445,
        pageToken: "perferendis",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "ea",
                    expressions: [
                      "eum",
                    ],
                    not: false,
                    operator: "NUMERIC_EQUAL",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "reiciendis",
                    expressions: [
                      "cumque",
                      "minima",
                      "necessitatibus",
                    ],
                    not: true,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "labore",
                    expressions: [
                      "impedit",
                      "ad",
                    ],
                    not: true,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                ],
                operator: "OR",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "tempora",
                ],
                name: "deserunt",
              },
              {
                histogramBuckets: [
                  "sunt",
                  "sit",
                  "autem",
                ],
                name: "quis",
              },
            ],
            maxGroupCount: 952897656927189675,
            metrics: [
              {
                alias: "placeat",
                expression: "qui",
                formattingType: "INTEGER",
              },
              {
                alias: "quis",
                expression: "adipisci",
                formattingType: "TIME",
              },
            ],
            startGroup: 4230816687517220040,
          },
        ],
        samplingLevel: "SMALL",
        segments: [
          {
            dynamicSegment: {
              name: "numquam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aperiam",
                                    expressions: [
                                      "excepturi",
                                      "mollitia",
                                      "inventore",
                                    ],
                                    maxComparisonValue: "delectus",
                                    minComparisonValue: "ipsa",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "ut",
                                    metricName: "aliquam",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "cupiditate",
                                      "provident",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "quasi",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "enim",
                                    maxComparisonValue: "qui",
                                    metricName: "sit",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "et",
                                    expressions: [
                                      "occaecati",
                                    ],
                                    maxComparisonValue: "ex",
                                    minComparisonValue: "voluptatem",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "temporibus",
                                    maxComparisonValue: "velit",
                                    metricName: "quae",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "dolorum",
                                      "doloribus",
                                      "saepe",
                                    ],
                                    maxComparisonValue: "sunt",
                                    minComparisonValue: "earum",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "asperiores",
                                    metricName: "et",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "nihil",
                                    expressions: [
                                      "suscipit",
                                    ],
                                    maxComparisonValue: "impedit",
                                    minComparisonValue: "non",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "possimus",
                                    metricName: "illo",
                                    operator: "EQUAL",
                                    scope: "USER",
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
                                      "delectus",
                                    ],
                                    maxComparisonValue: "rerum",
                                    minComparisonValue: "dolore",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "velit",
                                    maxComparisonValue: "officia",
                                    metricName: "modi",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "a",
                                    expressions: [
                                      "excepturi",
                                      "autem",
                                    ],
                                    maxComparisonValue: "corporis",
                                    minComparisonValue: "dicta",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloremque",
                                    maxComparisonValue: "quae",
                                    metricName: "nisi",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "eos",
                                    expressions: [
                                      "reiciendis",
                                    ],
                                    maxComparisonValue: "aspernatur",
                                    minComparisonValue: "praesentium",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "adipisci",
                                    metricName: "consequatur",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nisi",
                                    expressions: [
                                      "est",
                                      "quo",
                                      "vero",
                                    ],
                                    maxComparisonValue: "alias",
                                    minComparisonValue: "totam",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eius",
                                    maxComparisonValue: "repellat",
                                    metricName: "beatae",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
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
                                    dimensionName: "necessitatibus",
                                    expressions: [
                                      "culpa",
                                      "repellendus",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "ut",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "architecto",
                                    maxComparisonValue: "molestias",
                                    metricName: "rerum",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quibusdam",
                                    expressions: [
                                      "quo",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "soluta",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "commodi",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "facere",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "id",
                                    expressions: [
                                      "aut",
                                    ],
                                    maxComparisonValue: "perspiciatis",
                                    minComparisonValue: "et",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "ex",
                                    metricName: "magni",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "qui",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "minus",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "neque",
                                    metricName: "iusto",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "odit",
                                    expressions: [
                                      "ut",
                                      "non",
                                      "nihil",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "recusandae",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "exercitationem",
                                    maxComparisonValue: "iste",
                                    metricName: "perferendis",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "qui",
                                      "omnis",
                                      "minus",
                                    ],
                                    maxComparisonValue: "nostrum",
                                    minComparisonValue: "non",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repellat",
                                    maxComparisonValue: "quo",
                                    metricName: "dolorum",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "aliquid",
                                      "mollitia",
                                      "non",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "recusandae",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "dolores",
                                    metricName: "hic",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "et",
                                    expressions: [
                                      "et",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "necessitatibus",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "in",
                                    metricName: "odit",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "similique",
                                    expressions: [
                                      "id",
                                      "laboriosam",
                                    ],
                                    maxComparisonValue: "quam",
                                    minComparisonValue: "maiores",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "iusto",
                                    maxComparisonValue: "aperiam",
                                    metricName: "repellendus",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "quia",
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "ea",
                                    minComparisonValue: "et",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "recusandae",
                                    maxComparisonValue: "qui",
                                    metricName: "qui",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
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
                                caseSensitive: true,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "fugiat",
                                  "nesciunt",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "qui",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "eligendi",
                                maxComparisonValue: "velit",
                                metricName: "fuga",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "quae",
                                ],
                                maxComparisonValue: "placeat",
                                minComparisonValue: "vitae",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "officiis",
                                maxComparisonValue: "commodi",
                                metricName: "sed",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "cum",
                                expressions: [
                                  "aut",
                                ],
                                maxComparisonValue: "eaque",
                                minComparisonValue: "facilis",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "et",
                                metricName: "quam",
                                operator: "BETWEEN",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "amet",
                                expressions: [
                                  "in",
                                ],
                                maxComparisonValue: "consectetur",
                                minComparisonValue: "minima",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "consequatur",
                                metricName: "eum",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "dolores",
                                expressions: [
                                  "ullam",
                                ],
                                maxComparisonValue: "architecto",
                                minComparisonValue: "architecto",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "consequatur",
                                maxComparisonValue: "veniam",
                                metricName: "hic",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatibus",
                                expressions: [
                                  "consectetur",
                                ],
                                maxComparisonValue: "modi",
                                minComparisonValue: "eos",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "itaque",
                                maxComparisonValue: "ipsum",
                                metricName: "natus",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                                  "amet",
                                  "blanditiis",
                                  "unde",
                                ],
                                maxComparisonValue: "nihil",
                                minComparisonValue: "asperiores",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "hic",
                                maxComparisonValue: "quo",
                                metricName: "est",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "possimus",
                                expressions: [
                                  "laborum",
                                  "voluptas",
                                  "modi",
                                ],
                                maxComparisonValue: "atque",
                                minComparisonValue: "soluta",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "qui",
                                maxComparisonValue: "nihil",
                                metricName: "quas",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "sit",
                                      "saepe",
                                      "est",
                                    ],
                                    maxComparisonValue: "odio",
                                    minComparisonValue: "delectus",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "et",
                                    metricName: "et",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "hic",
                                      "doloribus",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "nemo",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "neque",
                                    maxComparisonValue: "autem",
                                    metricName: "saepe",
                                    operator: "BETWEEN",
                                    scope: "USER",
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
                                    dimensionName: "autem",
                                    expressions: [
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "autem",
                                    minComparisonValue: "vitae",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "aut",
                                    metricName: "autem",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quaerat",
                                    expressions: [
                                      "harum",
                                      "laudantium",
                                      "odio",
                                    ],
                                    maxComparisonValue: "deserunt",
                                    minComparisonValue: "qui",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "veritatis",
                                    metricName: "minus",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "cupiditate",
                                      "similique",
                                    ],
                                    maxComparisonValue: "omnis",
                                    minComparisonValue: "voluptatem",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "maiores",
                                    maxComparisonValue: "est",
                                    metricName: "expedita",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
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
                                      "itaque",
                                      "provident",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "qui",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "corporis",
                                    metricName: "quasi",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
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
                                caseSensitive: true,
                                dimensionName: "iure",
                                expressions: [
                                  "occaecati",
                                  "aut",
                                  "repudiandae",
                                ],
                                maxComparisonValue: "voluptas",
                                minComparisonValue: "eligendi",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "dolorem",
                                maxComparisonValue: "similique",
                                metricName: "ad",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "aut",
                                expressions: [
                                  "dolores",
                                  "et",
                                  "quos",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "est",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "explicabo",
                                maxComparisonValue: "quis",
                                metricName: "eius",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "debitis",
                                expressions: [
                                  "mollitia",
                                ],
                                maxComparisonValue: "officiis",
                                minComparisonValue: "repellendus",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "repellat",
                                maxComparisonValue: "eveniet",
                                metricName: "ad",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nostrum",
                                expressions: [
                                  "nemo",
                                ],
                                maxComparisonValue: "recusandae",
                                minComparisonValue: "nostrum",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "aut",
                                maxComparisonValue: "quo",
                                metricName: "minus",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "ut",
                                  "ut",
                                  "distinctio",
                                ],
                                maxComparisonValue: "dolor",
                                minComparisonValue: "nemo",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "reiciendis",
                                maxComparisonValue: "in",
                                metricName: "voluptatem",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "aperiam",
                                    ],
                                    maxComparisonValue: "nulla",
                                    minComparisonValue: "odit",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "mollitia",
                                    metricName: "eveniet",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vel",
                                    expressions: [
                                      "nesciunt",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "fugiat",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolor",
                                    maxComparisonValue: "enim",
                                    metricName: "animi",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "ea",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "pariatur",
                                    minComparisonValue: "id",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "esse",
                                    maxComparisonValue: "in",
                                    metricName: "amet",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
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
                                      "autem",
                                      "placeat",
                                      "velit",
                                    ],
                                    maxComparisonValue: "minus",
                                    minComparisonValue: "praesentium",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "consequatur",
                                    metricName: "aut",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "minus",
                                    expressions: [
                                      "enim",
                                      "eaque",
                                      "qui",
                                    ],
                                    maxComparisonValue: "maxime",
                                    minComparisonValue: "libero",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "porro",
                                    metricName: "labore",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "hic",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "cum",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "molestiae",
                                    metricName: "laudantium",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
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
                                caseSensitive: true,
                                dimensionName: "porro",
                                expressions: [
                                  "ipsa",
                                ],
                                maxComparisonValue: "ipsa",
                                minComparisonValue: "rerum",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "rem",
                                maxComparisonValue: "dolore",
                                metricName: "doloribus",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "eos",
                                expressions: [
                                  "vitae",
                                  "sit",
                                  "asperiores",
                                ],
                                maxComparisonValue: "earum",
                                minComparisonValue: "distinctio",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "alias",
                                metricName: "in",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "cum",
                                expressions: [
                                  "odit",
                                ],
                                maxComparisonValue: "alias",
                                minComparisonValue: "voluptas",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "ratione",
                                maxComparisonValue: "dolore",
                                metricName: "est",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "odit",
                                expressions: [
                                  "voluptate",
                                  "ut",
                                  "inventore",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "enim",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "hic",
                                maxComparisonValue: "cumque",
                                metricName: "quia",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "non",
                                    expressions: [
                                      "mollitia",
                                    ],
                                    maxComparisonValue: "dolorum",
                                    minComparisonValue: "at",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "voluptate",
                                    metricName: "excepturi",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quo",
                                    expressions: [
                                      "maxime",
                                    ],
                                    maxComparisonValue: "ratione",
                                    minComparisonValue: "voluptatem",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eum",
                                    maxComparisonValue: "sed",
                                    metricName: "expedita",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "ipsam",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "facilis",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "doloremque",
                                    metricName: "minus",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "harum",
                                    expressions: [
                                      "natus",
                                      "quibusdam",
                                    ],
                                    maxComparisonValue: "ullam",
                                    minComparisonValue: "veniam",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "error",
                                    maxComparisonValue: "omnis",
                                    metricName: "aliquid",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "et",
                                    expressions: [
                                      "saepe",
                                      "sit",
                                      "esse",
                                    ],
                                    maxComparisonValue: "voluptate",
                                    minComparisonValue: "tenetur",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "animi",
                                    maxComparisonValue: "facere",
                                    metricName: "consequatur",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "incidunt",
                                      "est",
                                      "a",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "sit",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "pariatur",
                                    maxComparisonValue: "sunt",
                                    metricName: "nobis",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ex",
                                    expressions: [
                                      "eos",
                                      "quas",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "temporibus",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempora",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "deleniti",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ab",
                                    expressions: [
                                      "exercitationem",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "neque",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "dolore",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "ad",
                                      "minus",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "est",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "ipsum",
                                    metricName: "dolor",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sed",
                                    expressions: [
                                      "quae",
                                      "id",
                                      "eaque",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "et",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "voluptate",
                                    metricName: "beatae",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "illo",
                                    expressions: [
                                      "quis",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "ab",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "eveniet",
                                    maxComparisonValue: "id",
                                    metricName: "placeat",
                                    operator: "BETWEEN",
                                    scope: "HIT",
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
                                  "animi",
                                ],
                                maxComparisonValue: "earum",
                                minComparisonValue: "neque",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "quam",
                                metricName: "iste",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "enim",
                                expressions: [
                                  "cupiditate",
                                ],
                                maxComparisonValue: "aperiam",
                                minComparisonValue: "id",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "explicabo",
                                maxComparisonValue: "cumque",
                                metricName: "sint",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "placeat",
                                expressions: [
                                  "minima",
                                  "exercitationem",
                                  "est",
                                ],
                                maxComparisonValue: "unde",
                                minComparisonValue: "modi",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "explicabo",
                                metricName: "voluptatum",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "velit",
                                expressions: [
                                  "maxime",
                                  "omnis",
                                ],
                                maxComparisonValue: "dolor",
                                minComparisonValue: "non",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "dolorem",
                                maxComparisonValue: "minima",
                                metricName: "sint",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "iste",
                                expressions: [
                                  "adipisci",
                                  "impedit",
                                  "tempora",
                                ],
                                maxComparisonValue: "aut",
                                minComparisonValue: "omnis",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "animi",
                                maxComparisonValue: "cum",
                                metricName: "occaecati",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "distinctio",
                                expressions: [
                                  "non",
                                  "accusantium",
                                ],
                                maxComparisonValue: "ut",
                                minComparisonValue: "consequatur",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "animi",
                                maxComparisonValue: "exercitationem",
                                metricName: "quia",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "et",
          },
          {
            dynamicSegment: {
              name: "ut",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quia",
                                    expressions: [
                                      "voluptates",
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "explicabo",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsum",
                                    maxComparisonValue: "autem",
                                    metricName: "perferendis",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsa",
                                    expressions: [
                                      "est",
                                      "velit",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "nam",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "mollitia",
                                    metricName: "velit",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "non",
                                    expressions: [
                                      "tempora",
                                      "aliquid",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "fugit",
                                    minComparisonValue: "quam",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "quo",
                                    metricName: "delectus",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "praesentium",
                                      "excepturi",
                                      "aut",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "omnis",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "modi",
                                    metricName: "nisi",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "repellendus",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aspernatur",
                                    maxComparisonValue: "ad",
                                    metricName: "velit",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "enim",
                                    expressions: [
                                      "non",
                                      "nam",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "eum",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "et",
                                    metricName: "odio",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "odio",
                                    expressions: [
                                      "eligendi",
                                    ],
                                    maxComparisonValue: "animi",
                                    minComparisonValue: "est",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "voluptas",
                                    metricName: "necessitatibus",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ullam",
                                    expressions: [
                                      "debitis",
                                      "nihil",
                                      "magni",
                                    ],
                                    maxComparisonValue: "vitae",
                                    minComparisonValue: "excepturi",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "totam",
                                    maxComparisonValue: "blanditiis",
                                    metricName: "voluptatibus",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "asperiores",
                                    expressions: [
                                      "consectetur",
                                    ],
                                    maxComparisonValue: "sequi",
                                    minComparisonValue: "reprehenderit",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "libero",
                                    maxComparisonValue: "enim",
                                    metricName: "sint",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quo",
                                    expressions: [
                                      "illo",
                                      "enim",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "aut",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "mollitia",
                                    maxComparisonValue: "praesentium",
                                    metricName: "inventore",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequatur",
                                    expressions: [
                                      "vel",
                                      "at",
                                      "cumque",
                                    ],
                                    maxComparisonValue: "occaecati",
                                    minComparisonValue: "iusto",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "deserunt",
                                    maxComparisonValue: "maiores",
                                    metricName: "error",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptates",
                                    expressions: [
                                      "est",
                                    ],
                                    maxComparisonValue: "vel",
                                    minComparisonValue: "optio",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "a",
                                    maxComparisonValue: "rerum",
                                    metricName: "repudiandae",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dignissimos",
                                    expressions: [
                                      "alias",
                                      "vitae",
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "magni",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ea",
                                    maxComparisonValue: "dolor",
                                    metricName: "consequatur",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
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
                                dimensionName: "explicabo",
                                expressions: [
                                  "ducimus",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "explicabo",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "libero",
                                metricName: "consequatur",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ut",
                                expressions: [
                                  "sed",
                                ],
                                maxComparisonValue: "sint",
                                minComparisonValue: "est",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "reiciendis",
                                metricName: "ipsam",
                                operator: "EQUAL",
                                scope: "PRODUCT",
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
                                dimensionName: "voluptatum",
                                expressions: [
                                  "rem",
                                  "autem",
                                  "enim",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "voluptas",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "numquam",
                                maxComparisonValue: "et",
                                metricName: "officiis",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aliquid",
                                expressions: [
                                  "asperiores",
                                  "tempora",
                                ],
                                maxComparisonValue: "voluptate",
                                minComparisonValue: "est",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "mollitia",
                                maxComparisonValue: "aut",
                                metricName: "recusandae",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "totam",
                                    expressions: [
                                      "veritatis",
                                    ],
                                    maxComparisonValue: "fuga",
                                    minComparisonValue: "atque",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "qui",
                                    metricName: "numquam",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "et",
                                      "autem",
                                      "quod",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "ut",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quibusdam",
                                    maxComparisonValue: "harum",
                                    metricName: "repudiandae",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "libero",
                                    ],
                                    maxComparisonValue: "cumque",
                                    minComparisonValue: "accusamus",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "inventore",
                                    metricName: "quibusdam",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
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
                                dimensionName: "animi",
                                expressions: [
                                  "labore",
                                  "est",
                                  "quod",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "sit",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "reprehenderit",
                                metricName: "quod",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "ipsum",
                                expressions: [
                                  "sunt",
                                  "incidunt",
                                  "sed",
                                ],
                                maxComparisonValue: "repellendus",
                                minComparisonValue: "error",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "nihil",
                                metricName: "ipsa",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "vitae",
                                expressions: [
                                  "assumenda",
                                  "corrupti",
                                ],
                                maxComparisonValue: "ad",
                                minComparisonValue: "eum",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "optio",
                                maxComparisonValue: "et",
                                metricName: "consequatur",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                                  "nisi",
                                  "sit",
                                  "est",
                                ],
                                maxComparisonValue: "rerum",
                                minComparisonValue: "quisquam",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "itaque",
                                maxComparisonValue: "reiciendis",
                                metricName: "expedita",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "modi",
                                expressions: [
                                  "suscipit",
                                  "tempora",
                                ],
                                maxComparisonValue: "illum",
                                minComparisonValue: "quae",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "consectetur",
                                maxComparisonValue: "voluptatibus",
                                metricName: "doloremque",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "explicabo",
                                expressions: [
                                  "rem",
                                  "explicabo",
                                  "veritatis",
                                ],
                                maxComparisonValue: "ducimus",
                                minComparisonValue: "ut",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "inventore",
                                maxComparisonValue: "voluptatem",
                                metricName: "voluptates",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
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
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "impedit",
                                    ],
                                    maxComparisonValue: "molestiae",
                                    minComparisonValue: "aut",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consectetur",
                                    maxComparisonValue: "repellendus",
                                    metricName: "molestias",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "repellat",
                                    expressions: [
                                      "facilis",
                                      "id",
                                      "reprehenderit",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "at",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloribus",
                                    maxComparisonValue: "qui",
                                    metricName: "eius",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quos",
                                    expressions: [
                                      "iusto",
                                      "et",
                                    ],
                                    maxComparisonValue: "praesentium",
                                    minComparisonValue: "consectetur",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "corrupti",
                                    metricName: "voluptatem",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "eaque",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "cum",
                                    maxComparisonValue: "vel",
                                    metricName: "sunt",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                    dimensionName: "dolores",
                                    expressions: [
                                      "perferendis",
                                    ],
                                    maxComparisonValue: "quas",
                                    minComparisonValue: "aut",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "minima",
                                    maxComparisonValue: "pariatur",
                                    metricName: "nesciunt",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
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
                                dimensionName: "accusantium",
                                expressions: [
                                  "rem",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "ipsa",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "odit",
                                maxComparisonValue: "repudiandae",
                                metricName: "pariatur",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quas",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "quisquam",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "non",
                                    metricName: "deleniti",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "soluta",
                                      "enim",
                                    ],
                                    maxComparisonValue: "commodi",
                                    minComparisonValue: "quia",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "placeat",
                                    maxComparisonValue: "rem",
                                    metricName: "laudantium",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "minima",
                                    expressions: [
                                      "sit",
                                      "dolorem",
                                    ],
                                    maxComparisonValue: "earum",
                                    minComparisonValue: "fugiat",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestias",
                                    maxComparisonValue: "asperiores",
                                    metricName: "suscipit",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "magnam",
                                    expressions: [
                                      "corporis",
                                    ],
                                    maxComparisonValue: "accusamus",
                                    minComparisonValue: "fugit",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "veniam",
                                    metricName: "quidem",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "consequatur",
                                    expressions: [
                                      "ullam",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "dolor",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "in",
                                    maxComparisonValue: "enim",
                                    metricName: "iusto",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "rerum",
                                      "reiciendis",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "unde",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ratione",
                                    maxComparisonValue: "autem",
                                    metricName: "a",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
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
                                      "est",
                                      "temporibus",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "non",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "reprehenderit",
                                    metricName: "quos",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
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
                                caseSensitive: true,
                                dimensionName: "voluptas",
                                expressions: [
                                  "nesciunt",
                                  "nihil",
                                ],
                                maxComparisonValue: "aspernatur",
                                minComparisonValue: "hic",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "libero",
                                maxComparisonValue: "accusantium",
                                metricName: "facere",
                                operator: "BETWEEN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "temporibus",
                                expressions: [
                                  "rem",
                                  "aut",
                                  "voluptate",
                                ],
                                maxComparisonValue: "a",
                                minComparisonValue: "consequatur",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "assumenda",
                                maxComparisonValue: "rerum",
                                metricName: "non",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "iure",
                                expressions: [
                                  "quia",
                                  "molestiae",
                                  "dolor",
                                ],
                                maxComparisonValue: "nostrum",
                                minComparisonValue: "aut",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "neque",
                                maxComparisonValue: "pariatur",
                                metricName: "enim",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "magnam",
          },
          {
            dynamicSegment: {
              name: "et",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "praesentium",
                                      "labore",
                                      "accusamus",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "alias",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aperiam",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "dolorum",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "laborum",
                                    expressions: [
                                      "delectus",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "expedita",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "sed",
                                    metricName: "qui",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "nihil",
                                      "consequatur",
                                      "quae",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "quae",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "corrupti",
                                    metricName: "ipsum",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eaque",
                                    expressions: [
                                      "dolore",
                                    ],
                                    maxComparisonValue: "sapiente",
                                    minComparisonValue: "eum",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "neque",
                                    metricName: "quo",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eveniet",
                                    expressions: [
                                      "hic",
                                      "porro",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "minima",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "maiores",
                                    maxComparisonValue: "rem",
                                    metricName: "aperiam",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ea",
                                    expressions: [
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "debitis",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "vero",
                                    metricName: "quis",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vitae",
                                    expressions: [
                                      "fugit",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "consequuntur",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "ipsum",
                                    metricName: "voluptas",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "assumenda",
                                    expressions: [
                                      "sapiente",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "accusantium",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "rem",
                                    maxComparisonValue: "corporis",
                                    metricName: "pariatur",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "iste",
                                    expressions: [
                                      "fuga",
                                      "corporis",
                                      "quo",
                                    ],
                                    maxComparisonValue: "laborum",
                                    minComparisonValue: "ex",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "accusantium",
                                    metricName: "et",
                                    operator: "BETWEEN",
                                    scope: "HIT",
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
                                dimensionName: "iusto",
                                expressions: [
                                  "voluptates",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "tenetur",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "rerum",
                                maxComparisonValue: "accusamus",
                                metricName: "aliquam",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ab",
                                expressions: [
                                  "commodi",
                                  "fugiat",
                                  "quis",
                                ],
                                maxComparisonValue: "saepe",
                                minComparisonValue: "illo",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "qui",
                                maxComparisonValue: "quia",
                                metricName: "aperiam",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "aliquam",
                                expressions: [
                                  "non",
                                  "earum",
                                  "voluptatem",
                                ],
                                maxComparisonValue: "impedit",
                                minComparisonValue: "in",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "sint",
                                metricName: "ab",
                                operator: "LESS_THAN",
                                scope: "UNSPECIFIED_SCOPE",
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
                                dimensionName: "neque",
                                expressions: [
                                  "est",
                                  "non",
                                ],
                                maxComparisonValue: "sit",
                                minComparisonValue: "est",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "in",
                                maxComparisonValue: "mollitia",
                                metricName: "minima",
                                operator: "BETWEEN",
                                scope: "SESSION",
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
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dicta",
                                    expressions: [
                                      "ut",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "assumenda",
                                    minComparisonValue: "autem",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "labore",
                                    maxComparisonValue: "amet",
                                    metricName: "in",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "possimus",
                                      "quo",
                                      "odio",
                                    ],
                                    maxComparisonValue: "eos",
                                    minComparisonValue: "enim",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "exercitationem",
                                    maxComparisonValue: "debitis",
                                    metricName: "ut",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
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
                                      "illo",
                                      "quas",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "ipsum",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "quas",
                                    metricName: "eum",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "mollitia",
                                    expressions: [
                                      "sit",
                                      "et",
                                      "et",
                                    ],
                                    maxComparisonValue: "praesentium",
                                    minComparisonValue: "voluptates",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "deleniti",
                                    metricName: "facere",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "exercitationem",
                                    expressions: [
                                      "qui",
                                    ],
                                    maxComparisonValue: "odit",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "repellendus",
                                    metricName: "sint",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ipsam",
                                    expressions: [
                                      "cum",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "modi",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quia",
                                    maxComparisonValue: "quis",
                                    metricName: "in",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolorem",
                                    expressions: [
                                      "assumenda",
                                    ],
                                    maxComparisonValue: "labore",
                                    minComparisonValue: "id",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptates",
                                    maxComparisonValue: "amet",
                                    metricName: "sint",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                    dimensionName: "ab",
                                    expressions: [
                                      "facilis",
                                      "quis",
                                      "sunt",
                                    ],
                                    maxComparisonValue: "quis",
                                    minComparisonValue: "qui",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "temporibus",
                                    maxComparisonValue: "nemo",
                                    metricName: "ea",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "corrupti",
                                    ],
                                    maxComparisonValue: "iusto",
                                    minComparisonValue: "necessitatibus",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quod",
                                    maxComparisonValue: "maxime",
                                    metricName: "minima",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nostrum",
                                    expressions: [
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "numquam",
                                    minComparisonValue: "quam",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "fugiat",
                                    metricName: "cumque",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
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
                                caseSensitive: true,
                                dimensionName: "ab",
                                expressions: [
                                  "delectus",
                                ],
                                maxComparisonValue: "recusandae",
                                minComparisonValue: "voluptate",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "autem",
                                maxComparisonValue: "sed",
                                metricName: "voluptas",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
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
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vel",
                                    expressions: [
                                      "ipsum",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "dolorem",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "non",
                                    metricName: "qui",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "adipisci",
                                    expressions: [
                                      "accusantium",
                                      "exercitationem",
                                      "doloremque",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "perspiciatis",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "inventore",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "soluta",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "est",
                                    expressions: [
                                      "dolor",
                                    ],
                                    maxComparisonValue: "nobis",
                                    minComparisonValue: "ipsam",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nihil",
                                    maxComparisonValue: "harum",
                                    metricName: "quisquam",
                                    operator: "BETWEEN",
                                    scope: "HIT",
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
                                caseSensitive: true,
                                dimensionName: "vel",
                                expressions: [
                                  "nulla",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "dolor",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "ea",
                                maxComparisonValue: "iure",
                                metricName: "ratione",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "officia",
                                expressions: [
                                  "molestiae",
                                  "voluptatem",
                                ],
                                maxComparisonValue: "impedit",
                                minComparisonValue: "debitis",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "rerum",
                                maxComparisonValue: "ut",
                                metricName: "corrupti",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "perspiciatis",
                                expressions: [
                                  "voluptatem",
                                ],
                                maxComparisonValue: "quidem",
                                minComparisonValue: "rerum",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "facilis",
                                maxComparisonValue: "cum",
                                metricName: "occaecati",
                                operator: "EQUAL",
                                scope: "PRODUCT",
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
                                  "eos",
                                ],
                                maxComparisonValue: "sit",
                                minComparisonValue: "et",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "voluptatum",
                                metricName: "dolor",
                                operator: "BETWEEN",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "est",
                                expressions: [
                                  "iure",
                                  "provident",
                                ],
                                maxComparisonValue: "eum",
                                minComparisonValue: "repellat",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "repellendus",
                                maxComparisonValue: "cupiditate",
                                metricName: "natus",
                                operator: "GREATER_THAN",
                                scope: "HIT",
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
                                  "est",
                                  "at",
                                ],
                                maxComparisonValue: "ut",
                                minComparisonValue: "incidunt",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "est",
                                maxComparisonValue: "necessitatibus",
                                metricName: "ut",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: true,
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
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "sed",
                                      "ducimus",
                                    ],
                                    maxComparisonValue: "vel",
                                    minComparisonValue: "optio",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "consequuntur",
                                    metricName: "autem",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "modi",
                                    expressions: [
                                      "repellendus",
                                      "asperiores",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "laboriosam",
                                    minComparisonValue: "reprehenderit",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quis",
                                    maxComparisonValue: "facilis",
                                    metricName: "mollitia",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ea",
                                    expressions: [
                                      "ut",
                                      "sit",
                                      "fuga",
                                    ],
                                    maxComparisonValue: "eveniet",
                                    minComparisonValue: "culpa",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repudiandae",
                                    maxComparisonValue: "aspernatur",
                                    metricName: "consequuntur",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "est",
                                    expressions: [
                                      "neque",
                                      "quia",
                                      "qui",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "dolores",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "iure",
                                    metricName: "hic",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "est",
                                    expressions: [
                                      "ipsa",
                                      "aut",
                                    ],
                                    maxComparisonValue: "quisquam",
                                    minComparisonValue: "quibusdam",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "corporis",
                                    maxComparisonValue: "laboriosam",
                                    metricName: "hic",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "sunt",
                                      "sequi",
                                      "corrupti",
                                    ],
                                    maxComparisonValue: "porro",
                                    minComparisonValue: "at",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "id",
                                    maxComparisonValue: "consequatur",
                                    metricName: "quis",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "neque",
                                    expressions: [
                                      "ab",
                                    ],
                                    maxComparisonValue: "earum",
                                    minComparisonValue: "omnis",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aliquid",
                                    maxComparisonValue: "quia",
                                    metricName: "animi",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "maiores",
                                    expressions: [
                                      "autem",
                                      "deleniti",
                                      "quam",
                                    ],
                                    maxComparisonValue: "amet",
                                    minComparisonValue: "consequuntur",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "non",
                                    metricName: "blanditiis",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "est",
                                    expressions: [
                                      "in",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "omnis",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "omnis",
                                    maxComparisonValue: "quidem",
                                    metricName: "id",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rerum",
                                    expressions: [
                                      "voluptas",
                                      "molestiae",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "qui",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatem",
                                    maxComparisonValue: "sit",
                                    metricName: "aspernatur",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sunt",
                                    expressions: [
                                      "voluptates",
                                      "sit",
                                      "nulla",
                                    ],
                                    maxComparisonValue: "non",
                                    minComparisonValue: "est",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "maxime",
                                    maxComparisonValue: "eum",
                                    metricName: "sapiente",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                caseSensitive: true,
                                dimensionName: "quidem",
                                expressions: [
                                  "et",
                                ],
                                maxComparisonValue: "doloribus",
                                minComparisonValue: "impedit",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "impedit",
                                maxComparisonValue: "voluptas",
                                metricName: "eligendi",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "at",
                                expressions: [
                                  "qui",
                                ],
                                maxComparisonValue: "ducimus",
                                minComparisonValue: "facere",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "sit",
                                maxComparisonValue: "porro",
                                metricName: "omnis",
                                operator: "BETWEEN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "qui",
                                expressions: [
                                  "qui",
                                  "officia",
                                  "quia",
                                ],
                                maxComparisonValue: "laborum",
                                minComparisonValue: "recusandae",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "qui",
                                metricName: "aut",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ut",
                                expressions: [
                                  "incidunt",
                                  "amet",
                                ],
                                maxComparisonValue: "voluptatem",
                                minComparisonValue: "dolorum",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "maxime",
                                metricName: "pariatur",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatem",
                                expressions: [
                                  "aut",
                                ],
                                maxComparisonValue: "error",
                                minComparisonValue: "excepturi",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "eveniet",
                                metricName: "ut",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "inventore",
                                expressions: [
                                  "iure",
                                  "sed",
                                ],
                                maxComparisonValue: "dolores",
                                minComparisonValue: "rem",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "molestias",
                                maxComparisonValue: "repellendus",
                                metricName: "doloremque",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "eaque",
                                expressions: [
                                  "dolorem",
                                  "nulla",
                                ],
                                maxComparisonValue: "nam",
                                minComparisonValue: "velit",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "culpa",
                                maxComparisonValue: "in",
                                metricName: "qui",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "reiciendis",
                                    expressions: [
                                      "quas",
                                      "pariatur",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "molestiae",
                                    minComparisonValue: "soluta",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "et",
                                    metricName: "omnis",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ab",
                                    expressions: [
                                      "ut",
                                    ],
                                    maxComparisonValue: "tempore",
                                    minComparisonValue: "molestiae",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "sequi",
                                    metricName: "eum",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                      "delectus",
                                    ],
                                    maxComparisonValue: "harum",
                                    minComparisonValue: "esse",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "autem",
                                    maxComparisonValue: "deserunt",
                                    metricName: "ut",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "cupiditate",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "suscipit",
                                    minComparisonValue: "dicta",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "facere",
                                    maxComparisonValue: "architecto",
                                    metricName: "voluptatem",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
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
                                dimensionName: "maiores",
                                expressions: [
                                  "earum",
                                  "alias",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "ut",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "quas",
                                maxComparisonValue: "magni",
                                metricName: "fuga",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "facere",
                                expressions: [
                                  "accusantium",
                                  "repellat",
                                  "quam",
                                ],
                                maxComparisonValue: "quo",
                                minComparisonValue: "vero",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "vel",
                                maxComparisonValue: "exercitationem",
                                metricName: "laudantium",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "qui",
                                expressions: [
                                  "modi",
                                  "occaecati",
                                  "dolor",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "ea",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "sed",
                                maxComparisonValue: "dolorem",
                                metricName: "accusamus",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
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
            segmentId: "fuga",
          },
        ],
        viewId: "accusamus",
      },
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "similique",
                startDate: "recusandae",
              },
              name: "error",
              type: "FIRST_VISIT_DATE",
            },
            {
              dateRange: {
                endDate: "atque",
                startDate: "rerum",
              },
              name: "voluptates",
              type: "FIRST_VISIT_DATE",
            },
            {
              dateRange: {
                endDate: "reiciendis",
                startDate: "ipsam",
              },
              name: "modi",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "quisquam",
            startDate: "quis",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: true,
                dimensionName: "ducimus",
                expressions: [
                  "commodi",
                  "ut",
                  "molestias",
                ],
                not: false,
                operator: "REGEXP",
              },
              {
                caseSensitive: false,
                dimensionName: "et",
                expressions: [
                  "ducimus",
                  "nisi",
                ],
                not: true,
                operator: "REGEXP",
              },
              {
                caseSensitive: false,
                dimensionName: "cum",
                expressions: [
                  "ab",
                  "facere",
                ],
                not: true,
                operator: "PARTIAL",
              },
            ],
            operator: "AND",
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "quidem",
            ],
            name: "fuga",
          },
        ],
        filtersExpression: "officiis",
        hideTotals: true,
        hideValueRanges: true,
        includeEmptyRows: false,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "qui",
                metricName: "debitis",
                not: false,
                operator: "GREATER_THAN",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
        ],
        metrics: [
          {
            alias: "iusto",
            expression: "distinctio",
            formattingType: "INTEGER",
          },
          {
            alias: "ut",
            expression: "expedita",
            formattingType: "CURRENCY",
          },
          {
            alias: "commodi",
            expression: "exercitationem",
            formattingType: "CURRENCY",
          },
        ],
        orderBys: [
          {
            fieldName: "odit",
            orderType: "HISTOGRAM_BUCKET",
            sortOrder: "ASCENDING",
          },
          {
            fieldName: "aliquam",
            orderType: "SMART",
            sortOrder: "DESCENDING",
          },
        ],
        pageSize: 7824488412278888279,
        pageToken: "aut",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "et",
                    expressions: [
                      "minima",
                    ],
                    not: false,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "error",
                    expressions: [
                      "sed",
                      "ipsa",
                      "explicabo",
                    ],
                    not: false,
                    operator: "NUMERIC_LESS_THAN",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "soluta",
                    expressions: [
                      "expedita",
                    ],
                    not: true,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                ],
                operator: "AND",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "delectus",
                ],
                name: "suscipit",
              },
              {
                histogramBuckets: [
                  "dolor",
                  "ipsa",
                ],
                name: "quos",
              },
              {
                histogramBuckets: [
                  "laborum",
                ],
                name: "a",
              },
            ],
            maxGroupCount: 7045185900456319079,
            metrics: [
              {
                alias: "eos",
                expression: "voluptas",
                formattingType: "INTEGER",
              },
              {
                alias: "quia",
                expression: "voluptas",
                formattingType: "CURRENCY",
              },
              {
                alias: "omnis",
                expression: "dolores",
                formattingType: "PERCENT",
              },
            ],
            startGroup: 4835771613389976289,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "et",
                    expressions: [
                      "enim",
                    ],
                    not: true,
                    operator: "ENDS_WITH",
                  },
                ],
                operator: "AND",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "est",
                    expressions: [
                      "quo",
                      "rerum",
                    ],
                    not: false,
                    operator: "EXACT",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "minus",
                    expressions: [
                      "vero",
                      "est",
                      "et",
                    ],
                    not: true,
                    operator: "IN_LIST",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "nobis",
                    expressions: [
                      "est",
                    ],
                    not: true,
                    operator: "IN_LIST",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "ea",
                    expressions: [
                      "est",
                    ],
                    not: false,
                    operator: "REGEXP",
                  },
                ],
                operator: "OR",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "et",
                  "cumque",
                  "aut",
                ],
                name: "deserunt",
              },
              {
                histogramBuckets: [
                  "provident",
                  "aut",
                ],
                name: "ullam",
              },
            ],
            maxGroupCount: 7948683775972459905,
            metrics: [
              {
                alias: "aut",
                expression: "possimus",
                formattingType: "CURRENCY",
              },
            ],
            startGroup: 4333862210572785286,
          },
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "ut",
                    expressions: [
                      "nam",
                    ],
                    not: true,
                    operator: "NUMERIC_LESS_THAN",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "possimus",
                    expressions: [
                      "deserunt",
                    ],
                    not: false,
                    operator: "NUMERIC_EQUAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "tempore",
                    expressions: [
                      "cum",
                      "ut",
                    ],
                    not: true,
                    operator: "NUMERIC_EQUAL",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "hic",
                    expressions: [
                      "qui",
                    ],
                    not: false,
                    operator: "ENDS_WITH",
                  },
                ],
                operator: "OR",
              },
              {
                filters: [
                  {
                    caseSensitive: true,
                    dimensionName: "hic",
                    expressions: [
                      "iste",
                      "qui",
                      "veritatis",
                    ],
                    not: false,
                    operator: "EXACT",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "iste",
                    expressions: [
                      "libero",
                    ],
                    not: true,
                    operator: "NUMERIC_EQUAL",
                  },
                  {
                    caseSensitive: false,
                    dimensionName: "a",
                    expressions: [
                      "numquam",
                      "dolores",
                      "tempore",
                    ],
                    not: false,
                    operator: "BEGINS_WITH",
                  },
                ],
                operator: "OR",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "omnis",
                  "adipisci",
                  "praesentium",
                ],
                name: "qui",
              },
              {
                histogramBuckets: [
                  "in",
                  "et",
                  "est",
                ],
                name: "eos",
              },
            ],
            maxGroupCount: 2145358840908556445,
            metrics: [
              {
                alias: "eum",
                expression: "ex",
                formattingType: "PERCENT",
              },
              {
                alias: "deleniti",
                expression: "quam",
                formattingType: "TIME",
              },
            ],
            startGroup: 5670313331134481218,
          },
        ],
        samplingLevel: "DEFAULT",
        segments: [
          {
            dynamicSegment: {
              name: "molestias",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "in",
                                      "corporis",
                                      "dolores",
                                    ],
                                    maxComparisonValue: "perferendis",
                                    minComparisonValue: "laboriosam",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "necessitatibus",
                                    maxComparisonValue: "aperiam",
                                    metricName: "veniam",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: true,
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
                                dimensionName: "eveniet",
                                expressions: [
                                  "reiciendis",
                                  "non",
                                  "dolor",
                                ],
                                maxComparisonValue: "maiores",
                                minComparisonValue: "itaque",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "ad",
                                maxComparisonValue: "aperiam",
                                metricName: "earum",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "sint",
                                expressions: [
                                  "qui",
                                  "mollitia",
                                  "neque",
                                ],
                                maxComparisonValue: "autem",
                                minComparisonValue: "ab",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "fugit",
                                maxComparisonValue: "saepe",
                                metricName: "enim",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "eum",
                                expressions: [
                                  "assumenda",
                                  "fuga",
                                ],
                                maxComparisonValue: "aut",
                                minComparisonValue: "corrupti",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "iusto",
                                metricName: "voluptatem",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quod",
                                expressions: [
                                  "quod",
                                ],
                                maxComparisonValue: "impedit",
                                minComparisonValue: "nostrum",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "dicta",
                                maxComparisonValue: "vero",
                                metricName: "ea",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facilis",
                                    expressions: [
                                      "aut",
                                    ],
                                    maxComparisonValue: "id",
                                    minComparisonValue: "sequi",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quis",
                                    maxComparisonValue: "molestiae",
                                    metricName: "aliquam",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "id",
                                    expressions: [
                                      "possimus",
                                      "eius",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "adipisci",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "in",
                                    metricName: "fuga",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ratione",
                                    expressions: [
                                      "inventore",
                                      "reprehenderit",
                                      "autem",
                                    ],
                                    maxComparisonValue: "tenetur",
                                    minComparisonValue: "facilis",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "magnam",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "alias",
                                    expressions: [
                                      "vel",
                                    ],
                                    maxComparisonValue: "cumque",
                                    minComparisonValue: "ea",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quisquam",
                                    maxComparisonValue: "explicabo",
                                    metricName: "id",
                                    operator: "GREATER_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "consequuntur",
                                    expressions: [
                                      "quia",
                                      "cupiditate",
                                    ],
                                    maxComparisonValue: "sed",
                                    minComparisonValue: "maxime",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "excepturi",
                                    metricName: "ut",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "iusto",
                                      "voluptatum",
                                    ],
                                    maxComparisonValue: "illo",
                                    minComparisonValue: "exercitationem",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nemo",
                                    maxComparisonValue: "voluptate",
                                    metricName: "harum",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quidem",
                                    expressions: [
                                      "dolores",
                                      "cum",
                                      "dicta",
                                    ],
                                    maxComparisonValue: "cupiditate",
                                    minComparisonValue: "impedit",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "nesciunt",
                                    metricName: "aut",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aut",
                                    expressions: [
                                      "odit",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "debitis",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "mollitia",
                                    maxComparisonValue: "odio",
                                    metricName: "molestiae",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "rem",
                                    expressions: [
                                      "eum",
                                      "at",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "ut",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "maiores",
                                    metricName: "aliquid",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "in",
                                    expressions: [
                                      "velit",
                                      "architecto",
                                      "dolor",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "velit",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "nobis",
                                    metricName: "iste",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                dimensionName: "assumenda",
                                expressions: [
                                  "quos",
                                  "vel",
                                ],
                                maxComparisonValue: "aut",
                                minComparisonValue: "beatae",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "rem",
                                metricName: "provident",
                                operator: "EQUAL",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "fugiat",
                                  "doloribus",
                                ],
                                maxComparisonValue: "saepe",
                                minComparisonValue: "ut",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "minus",
                                maxComparisonValue: "accusantium",
                                metricName: "reiciendis",
                                operator: "BETWEEN",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "aut",
                                expressions: [
                                  "ea",
                                ],
                                maxComparisonValue: "quis",
                                minComparisonValue: "culpa",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "rem",
                                maxComparisonValue: "non",
                                metricName: "aperiam",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
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
                                  "dolor",
                                  "ut",
                                ],
                                maxComparisonValue: "sit",
                                minComparisonValue: "ut",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "iusto",
                                maxComparisonValue: "sed",
                                metricName: "numquam",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "molestiae",
                                expressions: [
                                  "eaque",
                                  "voluptatum",
                                  "debitis",
                                ],
                                maxComparisonValue: "perspiciatis",
                                minComparisonValue: "aut",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "est",
                                maxComparisonValue: "nisi",
                                metricName: "voluptatibus",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "officia",
                                      "optio",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "quas",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "maxime",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "asperiores",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "beatae",
                                    expressions: [
                                      "blanditiis",
                                    ],
                                    maxComparisonValue: "voluptatem",
                                    minComparisonValue: "ea",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "fugit",
                                    metricName: "dolore",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "vel",
                                    expressions: [
                                      "atque",
                                      "repellendus",
                                      "ut",
                                    ],
                                    maxComparisonValue: "possimus",
                                    minComparisonValue: "cumque",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempore",
                                    maxComparisonValue: "maiores",
                                    metricName: "dignissimos",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                dimensionName: "qui",
                                expressions: [
                                  "est",
                                  "consequatur",
                                  "quia",
                                ],
                                maxComparisonValue: "ad",
                                minComparisonValue: "nemo",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "neque",
                                maxComparisonValue: "totam",
                                metricName: "dolores",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "odio",
                                expressions: [
                                  "placeat",
                                ],
                                maxComparisonValue: "nostrum",
                                minComparisonValue: "repellat",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "eum",
                                maxComparisonValue: "impedit",
                                metricName: "est",
                                operator: "LESS_THAN",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "voluptatibus",
                                expressions: [
                                  "cupiditate",
                                  "minus",
                                ],
                                maxComparisonValue: "in",
                                minComparisonValue: "debitis",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "animi",
                                maxComparisonValue: "distinctio",
                                metricName: "hic",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "labore",
          },
          {
            dynamicSegment: {
              name: "totam",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "explicabo",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "maiores",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "voluptas",
                                    metricName: "officia",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nemo",
                                    expressions: [
                                      "quae",
                                      "odit",
                                      "expedita",
                                    ],
                                    maxComparisonValue: "ut",
                                    minComparisonValue: "occaecati",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "itaque",
                                    maxComparisonValue: "harum",
                                    metricName: "nulla",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloribus",
                                    expressions: [
                                      "quis",
                                      "vel",
                                      "magni",
                                    ],
                                    maxComparisonValue: "architecto",
                                    minComparisonValue: "est",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolores",
                                    maxComparisonValue: "in",
                                    metricName: "aperiam",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "ut",
                                      "velit",
                                      "velit",
                                    ],
                                    maxComparisonValue: "totam",
                                    minComparisonValue: "doloribus",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "quae",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
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
                                caseSensitive: true,
                                dimensionName: "at",
                                expressions: [
                                  "fugit",
                                  "repellat",
                                  "non",
                                ],
                                maxComparisonValue: "blanditiis",
                                minComparisonValue: "omnis",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "nemo",
                                maxComparisonValue: "corporis",
                                metricName: "cupiditate",
                                operator: "LESS_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "expedita",
                                expressions: [
                                  "quibusdam",
                                  "magni",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "earum",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "alias",
                                maxComparisonValue: "culpa",
                                metricName: "rerum",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "iusto",
                                expressions: [
                                  "provident",
                                  "voluptatem",
                                  "veniam",
                                ],
                                maxComparisonValue: "aspernatur",
                                minComparisonValue: "sed",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "numquam",
                                maxComparisonValue: "explicabo",
                                metricName: "et",
                                operator: "EQUAL",
                                scope: "SESSION",
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
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "qui",
                                      "qui",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "voluptas",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "aut",
                                    maxComparisonValue: "officiis",
                                    metricName: "aliquid",
                                    operator: "EQUAL",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptate",
                                    expressions: [
                                      "velit",
                                    ],
                                    maxComparisonValue: "maiores",
                                    minComparisonValue: "sunt",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "reprehenderit",
                                    metricName: "totam",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "veritatis",
                                    expressions: [
                                      "et",
                                      "nisi",
                                      "cupiditate",
                                    ],
                                    maxComparisonValue: "vitae",
                                    minComparisonValue: "quos",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "perspiciatis",
                                    maxComparisonValue: "quo",
                                    metricName: "nulla",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "ut",
                                    expressions: [
                                      "sunt",
                                      "iusto",
                                      "nihil",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "a",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "at",
                                    maxComparisonValue: "aliquam",
                                    metricName: "incidunt",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "fugit",
                                    expressions: [
                                      "quia",
                                      "neque",
                                      "incidunt",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "neque",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "tempore",
                                    maxComparisonValue: "ipsum",
                                    metricName: "omnis",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "labore",
                                    expressions: [
                                      "saepe",
                                      "libero",
                                    ],
                                    maxComparisonValue: "nobis",
                                    minComparisonValue: "ut",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "qui",
                                    maxComparisonValue: "hic",
                                    metricName: "sed",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "et",
                                    expressions: [
                                      "nisi",
                                      "et",
                                    ],
                                    maxComparisonValue: "unde",
                                    minComparisonValue: "in",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vel",
                                    maxComparisonValue: "rerum",
                                    metricName: "minus",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sit",
                                    expressions: [
                                      "excepturi",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "dolore",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptas",
                                    maxComparisonValue: "quis",
                                    metricName: "dolor",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
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
                                      "est",
                                    ],
                                    maxComparisonValue: "ducimus",
                                    minComparisonValue: "adipisci",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "et",
                                    maxComparisonValue: "vel",
                                    metricName: "dolores",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "voluptates",
                                    ],
                                    maxComparisonValue: "repellat",
                                    minComparisonValue: "eligendi",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sit",
                                    maxComparisonValue: "optio",
                                    metricName: "atque",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptas",
                                    expressions: [
                                      "aliquid",
                                      "quasi",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "tempora",
                                    minComparisonValue: "consequatur",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "non",
                                    maxComparisonValue: "nesciunt",
                                    metricName: "dolorem",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
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
                                      "ut",
                                    ],
                                    maxComparisonValue: "quas",
                                    minComparisonValue: "qui",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "qui",
                                    metricName: "harum",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "accusantium",
                                    expressions: [
                                      "veritatis",
                                      "qui",
                                      "facere",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "nesciunt",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consequatur",
                                    maxComparisonValue: "praesentium",
                                    metricName: "temporibus",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "enim",
                                    expressions: [
                                      "impedit",
                                      "ratione",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "eius",
                                    minComparisonValue: "quisquam",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quia",
                                    maxComparisonValue: "est",
                                    metricName: "voluptatem",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ipsum",
                                    expressions: [
                                      "iusto",
                                      "quis",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "soluta",
                                    operator: "NUMERIC_LESS_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "laborum",
                                    maxComparisonValue: "quibusdam",
                                    metricName: "eum",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                dimensionName: "voluptatem",
                                expressions: [
                                  "est",
                                  "natus",
                                  "et",
                                ],
                                maxComparisonValue: "ea",
                                minComparisonValue: "voluptas",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "ipsa",
                                maxComparisonValue: "in",
                                metricName: "quibusdam",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "nemo",
                                expressions: [
                                  "ut",
                                  "dicta",
                                ],
                                maxComparisonValue: "inventore",
                                minComparisonValue: "perspiciatis",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "esse",
                                maxComparisonValue: "facere",
                                metricName: "commodi",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
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
                                dimensionName: "nisi",
                                expressions: [
                                  "dolorem",
                                ],
                                maxComparisonValue: "impedit",
                                minComparisonValue: "laboriosam",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "soluta",
                                maxComparisonValue: "ut",
                                metricName: "est",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "aut",
                                expressions: [
                                  "dolorum",
                                ],
                                maxComparisonValue: "nostrum",
                                minComparisonValue: "laboriosam",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "quidem",
                                maxComparisonValue: "doloribus",
                                metricName: "at",
                                operator: "EQUAL",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quis",
                                expressions: [
                                  "tenetur",
                                  "alias",
                                ],
                                maxComparisonValue: "similique",
                                minComparisonValue: "iure",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "deleniti",
                                metricName: "laudantium",
                                operator: "BETWEEN",
                                scope: "USER",
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
                                  "minus",
                                ],
                                maxComparisonValue: "sed",
                                minComparisonValue: "magnam",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "fuga",
                                maxComparisonValue: "voluptatem",
                                metricName: "officia",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "nobis",
                                expressions: [
                                  "aperiam",
                                  "enim",
                                ],
                                maxComparisonValue: "sequi",
                                minComparisonValue: "laborum",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "aliquid",
                                maxComparisonValue: "maiores",
                                metricName: "velit",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "doloremque",
          },
        ],
        viewId: "cum",
      },
      {
        cohortGroup: {
          cohorts: [
            {
              dateRange: {
                endDate: "illum",
                startDate: "enim",
              },
              name: "aspernatur",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
            {
              dateRange: {
                endDate: "quasi",
                startDate: "omnis",
              },
              name: "sapiente",
              type: "UNSPECIFIED_COHORT_TYPE",
            },
          ],
          lifetimeValue: false,
        },
        dateRanges: [
          {
            endDate: "et",
            startDate: "accusamus",
          },
          {
            endDate: "voluptatibus",
            startDate: "enim",
          },
          {
            endDate: "in",
            startDate: "reiciendis",
          },
        ],
        dimensionFilterClauses: [
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "fugit",
                expressions: [
                  "fugit",
                ],
                not: false,
                operator: "PARTIAL",
              },
              {
                caseSensitive: true,
                dimensionName: "veritatis",
                expressions: [
                  "possimus",
                  "ipsum",
                ],
                not: true,
                operator: "ENDS_WITH",
              },
              {
                caseSensitive: false,
                dimensionName: "maiores",
                expressions: [
                  "qui",
                ],
                not: false,
                operator: "ENDS_WITH",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                caseSensitive: false,
                dimensionName: "aut",
                expressions: [
                  "et",
                ],
                not: true,
                operator: "ENDS_WITH",
              },
              {
                caseSensitive: true,
                dimensionName: "natus",
                expressions: [
                  "incidunt",
                  "voluptatem",
                ],
                not: false,
                operator: "PARTIAL",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                caseSensitive: true,
                dimensionName: "neque",
                expressions: [
                  "et",
                  "aut",
                ],
                not: true,
                operator: "BEGINS_WITH",
              },
              {
                caseSensitive: true,
                dimensionName: "minus",
                expressions: [
                  "tempora",
                  "officia",
                  "ducimus",
                ],
                not: false,
                operator: "PARTIAL",
              },
              {
                caseSensitive: false,
                dimensionName: "nostrum",
                expressions: [
                  "qui",
                  "enim",
                  "corporis",
                ],
                not: true,
                operator: "BEGINS_WITH",
              },
            ],
            operator: "OR",
          },
        ],
        dimensions: [
          {
            histogramBuckets: [
              "consequatur",
            ],
            name: "laborum",
          },
          {
            histogramBuckets: [
              "laboriosam",
              "fugiat",
              "et",
            ],
            name: "nesciunt",
          },
        ],
        filtersExpression: "tempore",
        hideTotals: false,
        hideValueRanges: false,
        includeEmptyRows: true,
        metricFilterClauses: [
          {
            filters: [
              {
                comparisonValue: "a",
                metricName: "quis",
                not: true,
                operator: "LESS_THAN",
              },
            ],
            operator: "OPERATOR_UNSPECIFIED",
          },
          {
            filters: [
              {
                comparisonValue: "est",
                metricName: "blanditiis",
                not: false,
                operator: "LESS_THAN",
              },
              {
                comparisonValue: "tempore",
                metricName: "tempore",
                not: false,
                operator: "OPERATOR_UNSPECIFIED",
              },
              {
                comparisonValue: "ea",
                metricName: "aut",
                not: true,
                operator: "EQUAL",
              },
            ],
            operator: "OR",
          },
          {
            filters: [
              {
                comparisonValue: "atque",
                metricName: "vel",
                not: false,
                operator: "GREATER_THAN",
              },
              {
                comparisonValue: "ut",
                metricName: "unde",
                not: false,
                operator: "IS_MISSING",
              },
              {
                comparisonValue: "maiores",
                metricName: "repellendus",
                not: false,
                operator: "IS_MISSING",
              },
            ],
            operator: "OR",
          },
        ],
        metrics: [
          {
            alias: "rem",
            expression: "quas",
            formattingType: "PERCENT",
          },
          {
            alias: "saepe",
            expression: "harum",
            formattingType: "PERCENT",
          },
        ],
        orderBys: [
          {
            fieldName: "necessitatibus",
            orderType: "DIMENSION_AS_INTEGER",
            sortOrder: "DESCENDING",
          },
          {
            fieldName: "eaque",
            orderType: "SMART",
            sortOrder: "ASCENDING",
          },
        ],
        pageSize: 6642368765562709634,
        pageToken: "adipisci",
        pivots: [
          {
            dimensionFilterClauses: [
              {
                filters: [
                  {
                    caseSensitive: false,
                    dimensionName: "sed",
                    expressions: [
                      "saepe",
                    ],
                    not: true,
                    operator: "OPERATOR_UNSPECIFIED",
                  },
                  {
                    caseSensitive: true,
                    dimensionName: "facere",
                    expressions: [
                      "voluptate",
                      "assumenda",
                    ],
                    not: true,
                    operator: "ENDS_WITH",
                  },
                ],
                operator: "OPERATOR_UNSPECIFIED",
              },
            ],
            dimensions: [
              {
                histogramBuckets: [
                  "aut",
                ],
                name: "ullam",
              },
              {
                histogramBuckets: [
                  "laudantium",
                ],
                name: "iure",
              },
              {
                histogramBuckets: [
                  "doloribus",
                  "rem",
                ],
                name: "sit",
              },
            ],
            maxGroupCount: 2527312800803801365,
            metrics: [
              {
                alias: "quod",
                expression: "ut",
                formattingType: "TIME",
              },
              {
                alias: "atque",
                expression: "et",
                formattingType: "METRIC_TYPE_UNSPECIFIED",
              },
              {
                alias: "ipsum",
                expression: "dolor",
                formattingType: "INTEGER",
              },
            ],
            startGroup: 7766695469374726972,
          },
        ],
        samplingLevel: "DEFAULT",
        segments: [
          {
            dynamicSegment: {
              name: "fuga",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "atque",
                                    expressions: [
                                      "qui",
                                    ],
                                    maxComparisonValue: "voluptas",
                                    minComparisonValue: "sunt",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "est",
                                    maxComparisonValue: "excepturi",
                                    metricName: "vel",
                                    operator: "EQUAL",
                                    scope: "SESSION",
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
                                dimensionName: "voluptatibus",
                                expressions: [
                                  "nam",
                                ],
                                maxComparisonValue: "dolor",
                                minComparisonValue: "itaque",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "sapiente",
                                maxComparisonValue: "molestiae",
                                metricName: "aut",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "incidunt",
                                expressions: [
                                  "suscipit",
                                  "officiis",
                                ],
                                maxComparisonValue: "cum",
                                minComparisonValue: "totam",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "quo",
                                maxComparisonValue: "quos",
                                metricName: "beatae",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "consequatur",
                                expressions: [
                                  "distinctio",
                                  "ipsam",
                                ],
                                maxComparisonValue: "dolor",
                                minComparisonValue: "aut",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "ullam",
                                maxComparisonValue: "assumenda",
                                metricName: "blanditiis",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                                  "consequatur",
                                  "fugiat",
                                ],
                                maxComparisonValue: "tenetur",
                                minComparisonValue: "nihil",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "aspernatur",
                                maxComparisonValue: "dignissimos",
                                metricName: "inventore",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "optio",
                                expressions: [
                                  "ut",
                                  "est",
                                  "a",
                                ],
                                maxComparisonValue: "id",
                                minComparisonValue: "facere",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "ut",
                                maxComparisonValue: "voluptatum",
                                metricName: "alias",
                                operator: "BETWEEN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "omnis",
                                ],
                                maxComparisonValue: "velit",
                                minComparisonValue: "molestiae",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "dolor",
                                metricName: "sit",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "non",
                                expressions: [
                                  "molestias",
                                  "voluptas",
                                  "deserunt",
                                ],
                                maxComparisonValue: "amet",
                                minComparisonValue: "optio",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "et",
                                maxComparisonValue: "dolorem",
                                metricName: "minus",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "quia",
                                expressions: [
                                  "sint",
                                  "distinctio",
                                  "maiores",
                                ],
                                maxComparisonValue: "exercitationem",
                                minComparisonValue: "sunt",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "nobis",
                                maxComparisonValue: "quos",
                                metricName: "facilis",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: false,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "possimus",
                                    expressions: [
                                      "eveniet",
                                      "alias",
                                      "tenetur",
                                    ],
                                    maxComparisonValue: "dolorem",
                                    minComparisonValue: "porro",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "cum",
                                    metricName: "repellat",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "quisquam",
                                    expressions: [
                                      "nihil",
                                      "laudantium",
                                    ],
                                    maxComparisonValue: "magni",
                                    minComparisonValue: "vel",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "qui",
                                    metricName: "magnam",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "omnis",
                                    expressions: [
                                      "labore",
                                      "sapiente",
                                      "accusamus",
                                    ],
                                    maxComparisonValue: "velit",
                                    minComparisonValue: "amet",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "molestias",
                                    metricName: "quis",
                                    operator: "GREATER_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "culpa",
                                    expressions: [
                                      "nihil",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "et",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "alias",
                                    metricName: "qui",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aliquam",
                                    expressions: [
                                      "repellat",
                                      "ut",
                                    ],
                                    maxComparisonValue: "necessitatibus",
                                    minComparisonValue: "deserunt",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "veritatis",
                                    maxComparisonValue: "sed",
                                    metricName: "praesentium",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: true,
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
                                      "eum",
                                      "non",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "eum",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "magni",
                                    maxComparisonValue: "illum",
                                    metricName: "occaecati",
                                    operator: "LESS_THAN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "laboriosam",
                                    expressions: [
                                      "distinctio",
                                      "vel",
                                      "est",
                                    ],
                                    maxComparisonValue: "incidunt",
                                    minComparisonValue: "aut",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "molestiae",
                                    maxComparisonValue: "tenetur",
                                    metricName: "nemo",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "voluptatem",
                                    expressions: [
                                      "excepturi",
                                      "maxime",
                                      "ipsa",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "autem",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "recusandae",
                                    maxComparisonValue: "et",
                                    metricName: "dolorem",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "sit",
                                    expressions: [
                                      "minima",
                                      "eos",
                                    ],
                                    maxComparisonValue: "accusantium",
                                    minComparisonValue: "minima",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "consectetur",
                                    maxComparisonValue: "est",
                                    metricName: "tempora",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "est",
                                    expressions: [
                                      "omnis",
                                    ],
                                    maxComparisonValue: "sint",
                                    minComparisonValue: "quidem",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quae",
                                    maxComparisonValue: "ut",
                                    metricName: "labore",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
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
                                      "placeat",
                                    ],
                                    maxComparisonValue: "doloribus",
                                    minComparisonValue: "quibusdam",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sint",
                                    maxComparisonValue: "ipsam",
                                    metricName: "qui",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
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
                                dimensionName: "et",
                                expressions: [
                                  "sapiente",
                                ],
                                maxComparisonValue: "consequatur",
                                minComparisonValue: "et",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "dolore",
                                maxComparisonValue: "dignissimos",
                                metricName: "quia",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "maxime",
                                expressions: [
                                  "aut",
                                  "autem",
                                ],
                                maxComparisonValue: "deleniti",
                                minComparisonValue: "impedit",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "omnis",
                                maxComparisonValue: "velit",
                                metricName: "commodi",
                                operator: "BETWEEN",
                                scope: "PRODUCT",
                              },
                              not: true,
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
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "IMMEDIATELY_PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sed",
                                    expressions: [
                                      "soluta",
                                      "vel",
                                    ],
                                    maxComparisonValue: "fuga",
                                    minComparisonValue: "ut",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "nulla",
                                    maxComparisonValue: "numquam",
                                    metricName: "quia",
                                    operator: "BETWEEN",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "delectus",
                                    expressions: [
                                      "incidunt",
                                      "delectus",
                                      "qui",
                                    ],
                                    maxComparisonValue: "iste",
                                    minComparisonValue: "fuga",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ex",
                                    maxComparisonValue: "magnam",
                                    metricName: "a",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "et",
                                    expressions: [
                                      "saepe",
                                      "dolores",
                                      "quasi",
                                    ],
                                    maxComparisonValue: "recusandae",
                                    minComparisonValue: "numquam",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "aut",
                                    metricName: "est",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aut",
                                    expressions: [
                                      "consequuntur",
                                    ],
                                    maxComparisonValue: "exercitationem",
                                    minComparisonValue: "hic",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "porro",
                                    maxComparisonValue: "est",
                                    metricName: "deserunt",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quam",
                                    expressions: [
                                      "omnis",
                                      "qui",
                                      "neque",
                                    ],
                                    maxComparisonValue: "officia",
                                    minComparisonValue: "quo",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "non",
                                    metricName: "quia",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "USER",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aliquid",
                                    expressions: [
                                      "unde",
                                      "ducimus",
                                      "ut",
                                    ],
                                    maxComparisonValue: "dolor",
                                    minComparisonValue: "quidem",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolores",
                                    maxComparisonValue: "fuga",
                                    metricName: "et",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "tenetur",
                                    expressions: [
                                      "cupiditate",
                                      "quia",
                                    ],
                                    maxComparisonValue: "facere",
                                    minComparisonValue: "sequi",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "enim",
                                    maxComparisonValue: "qui",
                                    metricName: "unde",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: true,
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
                                dimensionName: "provident",
                                expressions: [
                                  "perspiciatis",
                                ],
                                maxComparisonValue: "dolorem",
                                minComparisonValue: "magni",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "a",
                                metricName: "recusandae",
                                operator: "LESS_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "et",
                                expressions: [
                                  "ratione",
                                ],
                                maxComparisonValue: "voluptas",
                                minComparisonValue: "quas",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "incidunt",
                                maxComparisonValue: "sapiente",
                                metricName: "dolore",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "amet",
                                expressions: [
                                  "quod",
                                  "quisquam",
                                ],
                                maxComparisonValue: "ex",
                                minComparisonValue: "id",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "non",
                                maxComparisonValue: "non",
                                metricName: "quam",
                                operator: "EQUAL",
                                scope: "PRODUCT",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
              },
            },
            segmentId: "nisi",
          },
          {
            dynamicSegment: {
              name: "repudiandae",
              sessionSegment: {
                segmentFilters: [
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nesciunt",
                                    expressions: [
                                      "quos",
                                    ],
                                    maxComparisonValue: "et",
                                    minComparisonValue: "magni",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ad",
                                    maxComparisonValue: "sapiente",
                                    metricName: "at",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "eum",
                                    expressions: [
                                      "non",
                                    ],
                                    maxComparisonValue: "corrupti",
                                    minComparisonValue: "nam",
                                    operator: "OPERATOR_UNSPECIFIED",
                                  },
                                  metricFilter: {
                                    comparisonValue: "adipisci",
                                    maxComparisonValue: "enim",
                                    metricName: "laborum",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "quaerat",
                                    ],
                                    maxComparisonValue: "natus",
                                    minComparisonValue: "illo",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "reprehenderit",
                                    maxComparisonValue: "hic",
                                    metricName: "commodi",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "nostrum",
                                    expressions: [
                                      "iusto",
                                      "esse",
                                      "architecto",
                                    ],
                                    maxComparisonValue: "est",
                                    minComparisonValue: "aliquam",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "corporis",
                                    maxComparisonValue: "tempora",
                                    metricName: "quas",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "doloremque",
                                    expressions: [
                                      "ut",
                                      "omnis",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "voluptate",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "numquam",
                                    maxComparisonValue: "voluptates",
                                    metricName: "voluptatem",
                                    operator: "LESS_THAN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "qui",
                                    expressions: [
                                      "sapiente",
                                      "exercitationem",
                                    ],
                                    maxComparisonValue: "consequatur",
                                    minComparisonValue: "ut",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repellendus",
                                    maxComparisonValue: "et",
                                    metricName: "harum",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
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
                                caseSensitive: true,
                                dimensionName: "amet",
                                expressions: [
                                  "quia",
                                ],
                                maxComparisonValue: "nihil",
                                minComparisonValue: "voluptas",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "quia",
                                maxComparisonValue: "voluptas",
                                metricName: "laboriosam",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "soluta",
                                expressions: [
                                  "explicabo",
                                  "corporis",
                                ],
                                maxComparisonValue: "quia",
                                minComparisonValue: "sunt",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "placeat",
                                maxComparisonValue: "voluptatem",
                                metricName: "voluptas",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "totam",
                                expressions: [
                                  "rerum",
                                ],
                                maxComparisonValue: "natus",
                                minComparisonValue: "facilis",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "odio",
                                maxComparisonValue: "fuga",
                                metricName: "aut",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "cupiditate",
                                expressions: [
                                  "et",
                                ],
                                maxComparisonValue: "et",
                                minComparisonValue: "cupiditate",
                                operator: "NUMERIC_BETWEEN",
                              },
                              metricFilter: {
                                comparisonValue: "vero",
                                maxComparisonValue: "quis",
                                metricName: "consequatur",
                                operator: "EQUAL",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: false,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "ad",
                                expressions: [
                                  "molestias",
                                  "perspiciatis",
                                ],
                                maxComparisonValue: "molestiae",
                                minComparisonValue: "voluptatem",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "sit",
                                maxComparisonValue: "aspernatur",
                                metricName: "molestias",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "magni",
                                expressions: [
                                  "itaque",
                                  "tempora",
                                ],
                                maxComparisonValue: "vitae",
                                minComparisonValue: "quo",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "iusto",
                                maxComparisonValue: "dolores",
                                metricName: "nobis",
                                operator: "GREATER_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: false,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: true,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ut",
                                    expressions: [
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "adipisci",
                                    minComparisonValue: "nobis",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "necessitatibus",
                                    maxComparisonValue: "sequi",
                                    metricName: "velit",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "qui",
                                    expressions: [
                                      "tempora",
                                      "voluptatem",
                                    ],
                                    maxComparisonValue: "dignissimos",
                                    minComparisonValue: "velit",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "vitae",
                                    maxComparisonValue: "quasi",
                                    metricName: "ipsum",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "aperiam",
                                    expressions: [
                                      "aut",
                                      "in",
                                    ],
                                    maxComparisonValue: "eum",
                                    minComparisonValue: "quibusdam",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "totam",
                                    maxComparisonValue: "similique",
                                    metricName: "sunt",
                                    operator: "LESS_THAN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "amet",
                                    expressions: [
                                      "perspiciatis",
                                      "cupiditate",
                                      "asperiores",
                                    ],
                                    maxComparisonValue: "quasi",
                                    minComparisonValue: "eius",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "pariatur",
                                    maxComparisonValue: "eligendi",
                                    metricName: "sit",
                                    operator: "GREATER_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "quis",
                                    expressions: [
                                      "sint",
                                      "enim",
                                    ],
                                    maxComparisonValue: "quia",
                                    minComparisonValue: "voluptatem",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorem",
                                    maxComparisonValue: "beatae",
                                    metricName: "at",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "HIT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aliquam",
                                    expressions: [
                                      "laboriosam",
                                      "totam",
                                    ],
                                    maxComparisonValue: "atque",
                                    minComparisonValue: "corrupti",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "dolorum",
                                    maxComparisonValue: "placeat",
                                    metricName: "ut",
                                    operator: "LESS_THAN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "autem",
                                    expressions: [
                                      "consequatur",
                                    ],
                                    maxComparisonValue: "delectus",
                                    minComparisonValue: "qui",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quaerat",
                                    maxComparisonValue: "voluptatem",
                                    metricName: "et",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "illo",
                                    expressions: [
                                      "rerum",
                                      "fugit",
                                      "impedit",
                                    ],
                                    maxComparisonValue: "aut",
                                    minComparisonValue: "modi",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "illo",
                                    metricName: "aut",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "dolor",
                                    expressions: [
                                      "doloremque",
                                    ],
                                    maxComparisonValue: "sit",
                                    minComparisonValue: "aspernatur",
                                    operator: "ENDS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "voluptatibus",
                                    maxComparisonValue: "ea",
                                    metricName: "tempora",
                                    operator: "LESS_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "excepturi",
                                    expressions: [
                                      "animi",
                                      "odio",
                                    ],
                                    maxComparisonValue: "officia",
                                    minComparisonValue: "odio",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sunt",
                                    maxComparisonValue: "corrupti",
                                    metricName: "perspiciatis",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
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
                                caseSensitive: true,
                                dimensionName: "aliquid",
                                expressions: [
                                  "atque",
                                  "non",
                                ],
                                maxComparisonValue: "dicta",
                                minComparisonValue: "recusandae",
                                operator: "IN_LIST",
                              },
                              metricFilter: {
                                comparisonValue: "inventore",
                                maxComparisonValue: "natus",
                                metricName: "voluptatibus",
                                operator: "LESS_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "dolor",
                                expressions: [
                                  "in",
                                ],
                                maxComparisonValue: "dolore",
                                minComparisonValue: "laudantium",
                                operator: "REGEXP",
                              },
                              metricFilter: {
                                comparisonValue: "repellendus",
                                maxComparisonValue: "corrupti",
                                metricName: "ex",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "eos",
                                    expressions: [
                                      "consectetur",
                                      "rerum",
                                    ],
                                    maxComparisonValue: "magnam",
                                    minComparisonValue: "dicta",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "accusantium",
                                    maxComparisonValue: "architecto",
                                    metricName: "omnis",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: true,
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
                                dimensionName: "laboriosam",
                                expressions: [
                                  "dolorem",
                                  "et",
                                ],
                                maxComparisonValue: "quibusdam",
                                minComparisonValue: "cupiditate",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "dolorem",
                                maxComparisonValue: "quos",
                                metricName: "deleniti",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "aperiam",
                                expressions: [
                                  "accusantium",
                                  "fuga",
                                ],
                                maxComparisonValue: "ut",
                                minComparisonValue: "delectus",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "vitae",
                                maxComparisonValue: "neque",
                                metricName: "est",
                                operator: "LESS_THAN",
                                scope: "SESSION",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "consectetur",
                                expressions: [
                                  "ut",
                                  "et",
                                  "culpa",
                                ],
                                maxComparisonValue: "officia",
                                minComparisonValue: "veritatis",
                                operator: "NUMERIC_GREATER_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "ad",
                                maxComparisonValue: "aut",
                                metricName: "esse",
                                operator: "EQUAL",
                                scope: "SESSION",
                              },
                              not: true,
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
                                  "debitis",
                                  "blanditiis",
                                ],
                                maxComparisonValue: "dolorum",
                                minComparisonValue: "saepe",
                                operator: "BEGINS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "eligendi",
                                maxComparisonValue: "alias",
                                metricName: "deleniti",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "veniam",
                                expressions: [
                                  "inventore",
                                  "voluptas",
                                ],
                                maxComparisonValue: "minus",
                                minComparisonValue: "dicta",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "eum",
                                maxComparisonValue: "nesciunt",
                                metricName: "ea",
                                operator: "GREATER_THAN",
                                scope: "HIT",
                              },
                              not: true,
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
                    not: true,
                    sequenceSegment: {
                      firstStepShouldMatchFirstHit: false,
                      segmentSequenceSteps: [
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "facere",
                                    expressions: [
                                      "accusamus",
                                      "placeat",
                                    ],
                                    maxComparisonValue: "qui",
                                    minComparisonValue: "natus",
                                    operator: "NUMERIC_BETWEEN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "iure",
                                    maxComparisonValue: "exercitationem",
                                    metricName: "delectus",
                                    operator: "GREATER_THAN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "ducimus",
                                    expressions: [
                                      "modi",
                                    ],
                                    maxComparisonValue: "amet",
                                    minComparisonValue: "modi",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "incidunt",
                                    maxComparisonValue: "ab",
                                    metricName: "sequi",
                                    operator: "GREATER_THAN",
                                    scope: "SESSION",
                                  },
                                  not: true,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "hic",
                                    expressions: [
                                      "id",
                                    ],
                                    maxComparisonValue: "in",
                                    minComparisonValue: "doloribus",
                                    operator: "IN_LIST",
                                  },
                                  metricFilter: {
                                    comparisonValue: "occaecati",
                                    maxComparisonValue: "iste",
                                    metricName: "asperiores",
                                    operator: "BETWEEN",
                                    scope: "PRODUCT",
                                  },
                                  not: true,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "sint",
                                    expressions: [
                                      "consequatur",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "quod",
                                    minComparisonValue: "sed",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ipsum",
                                    maxComparisonValue: "saepe",
                                    metricName: "velit",
                                    operator: "EQUAL",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "rem",
                                    expressions: [
                                      "sint",
                                      "quia",
                                      "adipisci",
                                    ],
                                    maxComparisonValue: "ad",
                                    minComparisonValue: "et",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "doloribus",
                                    maxComparisonValue: "iste",
                                    metricName: "distinctio",
                                    operator: "BETWEEN",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "voluptatum",
                                    expressions: [
                                      "consectetur",
                                    ],
                                    maxComparisonValue: "nihil",
                                    minComparisonValue: "libero",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "possimus",
                                    maxComparisonValue: "non",
                                    metricName: "rerum",
                                    operator: "UNSPECIFIED_OPERATOR",
                                    scope: "PRODUCT",
                                  },
                                  not: false,
                                },
                              ],
                            },
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "culpa",
                                    expressions: [
                                      "quae",
                                      "incidunt",
                                      "voluptas",
                                    ],
                                    maxComparisonValue: "nam",
                                    minComparisonValue: "optio",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ratione",
                                    maxComparisonValue: "quaerat",
                                    metricName: "qui",
                                    operator: "BETWEEN",
                                    scope: "SESSION",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "cum",
                                    expressions: [
                                      "maxime",
                                      "sunt",
                                      "et",
                                    ],
                                    maxComparisonValue: "dolore",
                                    minComparisonValue: "placeat",
                                    operator: "BEGINS_WITH",
                                  },
                                  metricFilter: {
                                    comparisonValue: "ut",
                                    maxComparisonValue: "sapiente",
                                    metricName: "laborum",
                                    operator: "EQUAL",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "UNSPECIFIED_MATCH_TYPE",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "velit",
                                    expressions: [
                                      "quo",
                                      "maiores",
                                    ],
                                    maxComparisonValue: "nesciunt",
                                    minComparisonValue: "velit",
                                    operator: "EXACT",
                                  },
                                  metricFilter: {
                                    comparisonValue: "repellat",
                                    maxComparisonValue: "placeat",
                                    metricName: "accusantium",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: true,
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
                                      "quia",
                                      "eaque",
                                      "et",
                                    ],
                                    maxComparisonValue: "assumenda",
                                    minComparisonValue: "incidunt",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quia",
                                    maxComparisonValue: "unde",
                                    metricName: "ipsam",
                                    operator: "EQUAL",
                                    scope: "USER",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "error",
                                    expressions: [
                                      "sit",
                                      "sapiente",
                                      "et",
                                    ],
                                    maxComparisonValue: "nobis",
                                    minComparisonValue: "possimus",
                                    operator: "REGEXP",
                                  },
                                  metricFilter: {
                                    comparisonValue: "illum",
                                    maxComparisonValue: "iusto",
                                    metricName: "sunt",
                                    operator: "EQUAL",
                                    scope: "HIT",
                                  },
                                  not: false,
                                },
                                {
                                  dimensionFilter: {
                                    caseSensitive: true,
                                    dimensionName: "esse",
                                    expressions: [
                                      "non",
                                      "nam",
                                    ],
                                    maxComparisonValue: "enim",
                                    minComparisonValue: "enim",
                                    operator: "NUMERIC_GREATER_THAN",
                                  },
                                  metricFilter: {
                                    comparisonValue: "quo",
                                    maxComparisonValue: "sint",
                                    metricName: "quis",
                                    operator: "BETWEEN",
                                    scope: "UNSPECIFIED_SCOPE",
                                  },
                                  not: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          matchType: "PRECEDES",
                          orFiltersForSegment: [
                            {
                              segmentFilterClauses: [
                                {
                                  dimensionFilter: {
                                    caseSensitive: false,
                                    dimensionName: "aperiam",
                                    expressions: [
                                      "illum",
                                      "hic",
                                    ],
                                    maxComparisonValue: "quisquam",
                                    minComparisonValue: "sit",
                                    operator: "PARTIAL",
                                  },
                                  metricFilter: {
                                    comparisonValue: "sed",
                                    maxComparisonValue: "itaque",
                                    metricName: "qui",
                                    operator: "BETWEEN",
                                    scope: "USER",
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
                                  "eos",
                                ],
                                maxComparisonValue: "asperiores",
                                minComparisonValue: "dicta",
                                operator: "NUMERIC_LESS_THAN",
                              },
                              metricFilter: {
                                comparisonValue: "accusantium",
                                maxComparisonValue: "omnis",
                                metricName: "nobis",
                                operator: "GREATER_THAN",
                                scope: "USER",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "expedita",
                                expressions: [
                                  "soluta",
                                ],
                                maxComparisonValue: "ut",
                                minComparisonValue: "aperiam",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "repellendus",
                                maxComparisonValue: "officia",
                                metricName: "in",
                                operator: "UNSPECIFIED_OPERATOR",
                                scope: "HIT",
                              },
                              not: false,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "et",
                                expressions: [
                                  "ea",
                                  "magnam",
                                  "a",
                                ],
                                maxComparisonValue: "nulla",
                                minComparisonValue: "harum",
                                operator: "ENDS_WITH",
                              },
                              metricFilter: {
                                comparisonValue: "quaerat",
                                maxComparisonValue: "ut",
                                metricName: "sed",
                                operator: "EQUAL",
                                scope: "USER",
                              },
                              not: true,
                            },
                          ],
                        },
                        {
                          segmentFilterClauses: [
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "labore",
                                expressions: [
                                  "magni",
                                  "voluptatum",
                                  "minima",
                                ],
                                maxComparisonValue: "necessitatibus",
                                minComparisonValue: "totam",
                                operator: "OPERATOR_UNSPECIFIED",
                              },
                              metricFilter: {
                                comparisonValue: "ea",
                                maxComparisonValue: "labore",
                                metricName: "quasi",
                                operator: "BETWEEN",
                                scope: "HIT",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: false,
                                dimensionName: "quibusdam",
                                expressions: [
                                  "quisquam",
                                ],
                                maxComparisonValue: "est",
                                minComparisonValue: "necessitatibus",
                                operator: "PARTIAL",
                              },
                              metricFilter: {
                                comparisonValue: "dolores",
                                maxComparisonValue: "perspiciatis",
                                metricName: "ab",
                                operator: "GREATER_THAN",
                                scope: "UNSPECIFIED_SCOPE",
                              },
                              not: true,
                            },
                            {
                              dimensionFilter: {
                                caseSensitive: true,
                                dimensionName: "possimus",
                                expressions: [
                                  "facere",
                                ],
                                maxComparisonValue: "accusamus",
                                minComparisonValue: "veritatis",
                                operator: "EXACT",
                              },
                              metricFilter: {
                                comparisonValue: "praesentium",
                                maxComparisonValue: "omnis",
                                metricName: "qui",
                                operator: "GREATER_THAN",
                                scope: "PRODUCT",
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
            segmentId: "nam",
          },
        ],
        viewId: "quia",
      },
    ],
    useResourceQuotas: false,
  },
};

sdk.reports.analyticsreportingReportsBatchGet(req).then((res: AnalyticsreportingReportsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->