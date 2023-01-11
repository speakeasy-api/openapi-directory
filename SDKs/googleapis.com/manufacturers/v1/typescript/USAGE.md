<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ManufacturersAccountsProductsDeleteRequest, ManufacturersAccountsProductsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ManufacturersAccountsProductsDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "sit",
    parent: "voluptas",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "expedita",
    alt: "proto",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.accounts.manufacturersAccountsProductsDelete(req).then((res: ManufacturersAccountsProductsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->