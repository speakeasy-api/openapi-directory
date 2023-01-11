<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { WebmastersSearchanalyticsQueryRequest, WebmastersSearchanalyticsQueryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: WebmastersSearchanalyticsQueryRequest = {
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
  pathParams: {
    siteUrl: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
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
    aggregationType: "BY_PAGE",
    dataState: "DATA_STATE_UNSPECIFIED",
    dimensionFilterGroups: [
      {
        filters: [
          {
            dimension: "PAGE",
            expression: "dolorem",
            operator: "INCLUDING_REGEX",
          },
        ],
        groupType: "AND",
      },
    ],
    dimensions: [
      "DATE",
      "PAGE",
      "DATE",
    ],
    endDate: "illum",
    rowLimit: 6392442863481646880,
    searchType: "DISCOVER",
    startDate: "odio",
    startRow: 6303220950515014660,
    type: "DISCOVER",
  },
};

sdk.searchanalytics.webmastersSearchanalyticsQuery(req).then((res: WebmastersSearchanalyticsQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->