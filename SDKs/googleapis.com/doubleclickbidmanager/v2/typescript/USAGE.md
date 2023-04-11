<!-- Start SDK Example Usage -->
```typescript
import {
  DoubleclickbidmanagerQueriesCreateRequest,
  DoubleclickbidmanagerQueriesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  QueryScheduleFrequencyEnum,
  ParametersTypeEnum,
  PathFilterPathMatchPositionEnum,
  PathQueryOptionsFilterMatchEnum,
  QueryMetadataFormatEnum,
  DataRangeRangeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DoubleclickbidmanagerQueriesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  queryInput: {
    metadata: {
      dataRange: {
        customEndDate: {
          day: 592845,
          month: 715190,
          year: 844266,
        },
        customStartDate: {
          day: 602763,
          month: 857946,
          year: 544883,
        },
        range: DataRangeRangeEnum.AllTime,
      },
      format: QueryMetadataFormatEnum.Csv,
      sendNotification: false,
      shareEmailAddress: [
        "deserunt",
        "suscipit",
        "iure",
      ],
      title: "Mrs.",
    },
    params: {
      filters: [
        {
          type: "ipsa",
          value: "delectus",
        },
        {
          type: "tempora",
          value: "suscipit",
        },
        {
          type: "molestiae",
          value: "minus",
        },
        {
          type: "placeat",
          value: "voluptatum",
        },
      ],
      groupBys: [
        "excepturi",
        "nisi",
      ],
      metrics: [
        "temporibus",
        "ab",
        "quis",
        "veritatis",
      ],
      options: {
        includeOnlyTargetedUserLists: false,
        pathQueryOptions: {
          channelGrouping: {
            fallbackName: "deserunt",
            name: "perferendis",
            rules: [
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "quo",
                          match: PathQueryOptionsFilterMatchEnum.Unknown,
                          values: [
                            "at",
                            "maiores",
                            "molestiae",
                            "quod",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "quod",
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "porro",
                            "dolorum",
                            "dicta",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "nam",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "fugit",
                            "deleniti",
                            "hic",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "optio",
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "commodi",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "modi",
                          match: PathQueryOptionsFilterMatchEnum.Unknown,
                          values: [
                            "cum",
                            "esse",
                            "ipsum",
                            "excepturi",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "aspernatur",
                          match: PathQueryOptionsFilterMatchEnum.Unknown,
                          values: [
                            "natus",
                            "sed",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "dolor",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "hic",
                            "saepe",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "fuga",
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "iste",
                            "iure",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "saepe",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "ipsa",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "est",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "dolores",
                            "dolorem",
                            "corporis",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "explicabo",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "omnis",
                            "nemo",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "minima",
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "iure",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "culpa",
                          match: PathQueryOptionsFilterMatchEnum.WildcardExpression,
                          values: [
                            "architecto",
                            "mollitia",
                            "dolorem",
                            "culpa",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "consequuntur",
              },
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "occaecati",
                          match: PathQueryOptionsFilterMatchEnum.Exact,
                          values: [
                            "quam",
                            "molestiae",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "velit",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "quis",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "vitae",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "enim",
                            "odit",
                            "quo",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "tenetur",
                          match: PathQueryOptionsFilterMatchEnum.Exact,
                          values: [
                            "possimus",
                            "aut",
                            "quasi",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "temporibus",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "reiciendis",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "voluptatibus",
                          match: PathQueryOptionsFilterMatchEnum.WildcardExpression,
                          values: [
                            "praesentium",
                            "voluptatibus",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "ipsa",
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "cum",
                            "perferendis",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "reprehenderit",
                          match: PathQueryOptionsFilterMatchEnum.Exact,
                          values: [
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "dicta",
              },
            ],
          },
          pathFilters: [
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "accusamus",
                    match: PathQueryOptionsFilterMatchEnum.Partial,
                    values: [
                      "quae",
                      "ipsum",
                      "quidem",
                      "molestias",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "excepturi",
                    match: PathQueryOptionsFilterMatchEnum.WildcardExpression,
                    values: [
                      "praesentium",
                      "rem",
                    ],
                  },
                },
              ],
              pathMatchPosition: PathFilterPathMatchPositionEnum.Last,
            },
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "repudiandae",
                    match: PathQueryOptionsFilterMatchEnum.Partial,
                    values: [
                      "itaque",
                    ],
                  },
                },
              ],
              pathMatchPosition: PathFilterPathMatchPositionEnum.Any,
            },
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "consequatur",
                    match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                    values: [
                      "explicabo",
                      "deserunt",
                      "distinctio",
                      "quibusdam",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "labore",
                    match: PathQueryOptionsFilterMatchEnum.Exact,
                    values: [
                      "aliquid",
                    ],
                  },
                },
              ],
              pathMatchPosition: PathFilterPathMatchPositionEnum.First,
            },
          ],
        },
      },
      type: ParametersTypeEnum.Grp,
    },
    schedule: {
      endDate: {
        day: 20107,
        month: 164940,
        year: 828940,
      },
      frequency: QueryScheduleFrequencyEnum.Daily,
      nextRunTimezoneCode: "alias",
      startDate: {
        day: 146441,
        month: 677817,
        year: 569618,
      },
    },
  },
  accessToken: "tempora",
  alt: AltEnum.Proto,
  callback: "tempore",
  fields: "labore",
  key: "delectus",
  oauthToken: "eum",
  prettyPrint: false,
  quotaUser: "non",
  uploadType: "eligendi",
  uploadProtocol: "sint",
};

sdk.queries.doubleclickbidmanagerQueriesCreate(req).then((res: DoubleclickbidmanagerQueriesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->