<!-- Start SDK Example Usage -->
```typescript
import {
  DoubleclickbidmanagerQueriesCreatequeryRequest,
  DoubleclickbidmanagerQueriesCreatequeryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  QueryScheduleFrequencyEnum,
  ParametersGroupBysEnum,
  ParametersMetricsEnum,
  ParametersTypeEnum,
  PathFilterPathMatchPositionEnum,
  PathQueryOptionsFilterFilterEnum,
  PathQueryOptionsFilterMatchEnum,
  FilterPairTypeEnum,
  QueryMetadataDataRangeEnum,
  QueryMetadataFormatEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DoubleclickbidmanagerQueriesCreatequeryRequest = {
  dollarXgafv: XgafvEnum.Two,
  query: {
    kind: "provident",
    metadata: {
      dataRange: QueryMetadataDataRangeEnum.Last90Days,
      format: QueryMetadataFormatEnum.Xlsx,
      googleCloudStoragePathForLatestReport: "unde",
      googleDrivePathForLatestReport: "nulla",
      latestReportRunTimeMs: "corrupti",
      locale: "illum",
      reportCount: 423655,
      running: false,
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
          type: FilterPairTypeEnum.FilterRegion,
          value: "delectus",
        },
        {
          type: FilterPairTypeEnum.FilterTrueviewIarCategory,
          value: "suscipit",
        },
        {
          type: FilterPairTypeEnum.FilterAlgorithmId,
          value: "minus",
        },
        {
          type: FilterPairTypeEnum.FilterVariantId,
          value: "voluptatum",
        },
      ],
      groupBys: [
        ParametersGroupBysEnum.FilterDataProviderName,
        ParametersGroupBysEnum.FilterAuthorizedSellerState,
      ],
      includeInviteData: false,
      metrics: [
        ParametersMetricsEnum.MetricStopsAudio,
        ParametersMetricsEnum.MetricTotalMediaCostAdvertiser,
        ParametersMetricsEnum.MetricCpmFee4Partner,
        ParametersMetricsEnum.MetricProfitEcpmAdvertiser,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterTargetedDataProviders,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterTrueviewHouseholdIncome,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterMatchRatio,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterRefundReason,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterTrueviewIarLanguage,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterCampaignDailyFrequency,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterNielsenAge,
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "hic",
                            "saepe",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterInsertionOrderStatus,
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "iste",
                            "iure",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterVideoContentDuration,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterHouseholdIncome,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterKeyword,
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "omnis",
                            "nemo",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterTrueviewRegion,
                          match: PathQueryOptionsFilterMatchEnum.Partial,
                          values: [
                            "iure",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterFormat,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterGamInsertionOrder,
                          match: PathQueryOptionsFilterMatchEnum.Exact,
                          values: [
                            "quam",
                            "molestiae",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterTrueviewGender,
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "quis",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterTargetedUserList,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterOmidCapable,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterYoutubeAdaptedAudienceList,
                          match: PathQueryOptionsFilterMatchEnum.BeginsWith,
                          values: [
                            "reiciendis",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterVerificationVideoResized,
                          match: PathQueryOptionsFilterMatchEnum.WildcardExpression,
                          values: [
                            "praesentium",
                            "voluptatibus",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: PathQueryOptionsFilterFilterEnum.FilterRegion,
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
                          filter: PathQueryOptionsFilterFilterEnum.FilterNielsenDateRange,
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
                    filter: PathQueryOptionsFilterFilterEnum.FilterEventType,
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
                    filter: PathQueryOptionsFilterFilterEnum.FilterCreativeStatus,
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
                    filter: PathQueryOptionsFilterFilterEnum.FilterBudgetSegmentStartDate,
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
                    filter: PathQueryOptionsFilterFilterEnum.FilterDayOfWeek,
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
                    filter: PathQueryOptionsFilterFilterEnum.FilterTrueviewIarRemarketingList,
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
      type: ParametersTypeEnum.TypeNielsenAudienceProfile,
    },
    queryId: "perferendis",
    reportDataEndTimeMs: "magni",
    reportDataStartTimeMs: "assumenda",
    schedule: {
      endTimeMs: "ipsam",
      frequency: QueryScheduleFrequencyEnum.OneTime,
      nextRunMinuteOfDay: 146441,
      nextRunTimezoneCode: "dolorum",
      startTimeMs: "excepturi",
    },
    timezoneCode: "tempora",
  },
  accessToken: "facilis",
  alt: AltEnum.Proto,
  asynchronous: false,
  callback: "labore",
  fields: "delectus",
  key: "eum",
  oauthToken: "non",
  prettyPrint: false,
  quotaUser: "eligendi",
  uploadType: "sint",
  uploadProtocol: "aliquid",
};

sdk.queries.doubleclickbidmanagerQueriesCreatequery(req).then((res: DoubleclickbidmanagerQueriesCreatequeryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->