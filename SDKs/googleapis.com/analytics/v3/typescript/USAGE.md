<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnalyticsDataGaGetRequest, AnalyticsDataGaGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsDataGaGetRequest = {
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
    alt: "json",
    dimensions: "voluptas",
    endDate: "culpa",
    fields: "expedita",
    filters: "consequuntur",
    ids: "dolor",
    includeEmptyRows: true,
    key: "voluptas",
    maxResults: 8274930044578894929,
    metrics: "et",
    oauthToken: "nihil",
    output: "json",
    prettyPrint: false,
    quotaUser: "debitis",
    samplingLevel: "DEFAULT",
    segment: "et",
    sort: "ut",
    startDate: "dolorem",
    startIndex: 7259475919510918339,
    userIp: "voluptate",
  },
};

sdk.data.analyticsDataGaGet(req).then((res: AnalyticsDataGaGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->