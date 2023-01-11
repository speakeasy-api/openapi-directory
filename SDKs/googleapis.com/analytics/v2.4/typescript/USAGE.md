<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnalyticsDataGetRequest, AnalyticsDataGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsDataGetRequest = {
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
    alt: "atom",
    dimensions: "voluptas",
    endDate: "culpa",
    fields: "expedita",
    filters: "consequuntur",
    ids: "dolor",
    key: "expedita",
    maxResults: 6044372234677422456,
    metrics: "fugit",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "rerum",
    segment: "dicta",
    sort: "debitis",
    startDate: "voluptatum",
    startIndex: 2339563716805116249,
    userIp: "ut",
  },
};

sdk.data.analyticsDataGet(req).then((res: AnalyticsDataGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->