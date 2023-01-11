<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AlertcenterAlertsBatchDeleteRequest, AlertcenterAlertsBatchDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AlertcenterAlertsBatchDeleteRequest = {
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
    alertId: [
      "dicta",
      "debitis",
      "voluptatum",
    ],
    customerId: "et",
  },
};

sdk.alerts.alertcenterAlertsBatchDelete(req).then((res: AlertcenterAlertsBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->