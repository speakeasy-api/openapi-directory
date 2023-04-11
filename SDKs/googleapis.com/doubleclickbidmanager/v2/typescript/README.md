# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/doubleclickbidmanager/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/doubleclickbidmanager/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### queries

* `doubleclickbidmanagerQueriesCreate` - Creates a query.
* `doubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `doubleclickbidmanagerQueriesGet` - Retrieves a query.
* `doubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `doubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `doubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `doubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

