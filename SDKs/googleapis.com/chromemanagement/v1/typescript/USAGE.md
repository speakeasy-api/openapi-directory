<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ChromemanagementCustomersAppsCountChromeAppRequestsRequest, ChromemanagementCustomersAppsCountChromeAppRequestsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ChromemanagementCustomersAppsCountChromeAppRequestsRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    customer: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    orderBy: "fugit",
    orgUnitId: "et",
    pageSize: 2661732831099943416,
    pageToken: "rerum",
    prettyPrint: false,
    quotaUser: "debitis",
    uploadType: "voluptatum",
    uploadProtocol: "et",
  },
};

sdk.customers.chromemanagementCustomersAppsCountChromeAppRequests(req).then((res: ChromemanagementCustomersAppsCountChromeAppRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->