<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AndroidpublisherInapppurchasesGetRequest, AndroidpublisherInapppurchasesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidpublisherInapppurchasesGetRequest = {
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
    productId: "voluptas",
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

sdk.inapppurchases.androidpublisherInapppurchasesGet(req).then((res: AndroidpublisherInapppurchasesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->