<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DoubleclickbidmanagerQueriesCreatequeryRequest, DoubleclickbidmanagerQueriesCreatequeryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DoubleclickbidmanagerQueriesCreatequeryRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    asynchronous: false,
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    kind: "dicta",
    metadata: {
      dataRange: "PREVIOUS_HALF_MONTH",
      format: "CSV",
      googleCloudStoragePathForLatestReport: "et",
      googleDrivePathForLatestReport: "ut",
      latestReportRunTimeMs: "dolorem",
      locale: "et",
      reportCount: 7373105480197164748,
      running: true,
      sendNotification: true,
      shareEmailAddress: [
        "dolores",
        "illum",
        "debitis",
      ],
      title: "vel",
    },
    params: {
      filters: [
        {
          type: "FILTER_DATE",
          value: "id",
        },
      ],
      groupBys: [
        "FILTER_PARTNER_STATUS",
      ],
      includeInviteData: false,
      metrics: [
        "METRIC_NIELSEN_POPULATION_REACH",
        "METRIC_RICH_MEDIA_ENGAGEMENTS",
      ],
      options: {
        includeOnlyTargetedUserLists: true,
        pathQueryOptions: {
          channelGrouping: {
            fallbackName: "odit",
            name: "non",
            rules: [
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_QUARTER",
                          match: "BEGINS_WITH",
                          values: [
                            "autem",
                            "consectetur",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_AD_POSITION",
                          match: "PARTIAL",
                          values: [
                            "at",
                            "ipsum",
                            "eveniet",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "modi",
              },
            ],
          },
          pathFilters: [
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "FILTER_REMARKETING_LIST",
                    match: "EXACT",
                    values: [
                      "reprehenderit",
                      "tempore",
                      "maiores",
                    ],
                  },
                },
              ],
              pathMatchPosition: "LAST",
            },
          ],
        },
      },
      type: "TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET",
    },
    queryId: "beatae",
    reportDataEndTimeMs: "veritatis",
    reportDataStartTimeMs: "in",
    schedule: {
      endTimeMs: "et",
      frequency: "WEEKLY",
      nextRunMinuteOfDay: 4564823113789767141,
      nextRunTimezoneCode: "ex",
      startTimeMs: "dolores",
    },
    timezoneCode: "placeat",
  },
};

sdk.queries.doubleclickbidmanagerQueriesCreatequery(req).then((res: DoubleclickbidmanagerQueriesCreatequeryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->