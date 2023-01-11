<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AndroidpublisherPurchasesCancelRequest, AndroidpublisherPurchasesCancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidpublisherPurchasesCancelRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    packageName: "sit",
    subscriptionId: "voluptas",
    token: "culpa",
  },
  queryParams: {
    alt: "json",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    userIp: "et",
  },
};

sdk.purchases.androidpublisherPurchasesCancel(req).then((res: AndroidpublisherPurchasesCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->