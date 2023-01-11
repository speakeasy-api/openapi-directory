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
    alt: "json",
    fields: "culpa",
    key: "expedita",
    oauthToken: "consequuntur",
    prettyPrint: false,
    quotaUser: "expedita",
    userIp: "voluptas",
  },
  request: {
    aggregationType: "fugit",
    dataState: "et",
    dimensionFilterGroups: [
      {
        filters: [
          {
            dimension: "dicta",
            expression: "debitis",
            operator: "voluptatum",
          },
          {
            dimension: "et",
            expression: "ut",
            operator: "dolorem",
          },
          {
            dimension: "et",
            expression: "voluptate",
            operator: "iste",
          },
        ],
        groupType: "vitae",
      },
    ],
    dimensions: [
      "dolores",
      "illum",
      "debitis",
    ],
    endDate: "vel",
    rowLimit: 2627038740284806767,
    searchType: "dolore",
    startDate: "id",
    startRow: 959367522974354090,
  },
};

sdk.searchanalytics.webmastersSearchanalyticsQuery(req).then((res: WebmastersSearchanalyticsQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->