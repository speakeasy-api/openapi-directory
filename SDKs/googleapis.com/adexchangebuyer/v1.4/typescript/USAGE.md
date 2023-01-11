<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AdexchangebuyerAccountsGetRequest, AdexchangebuyerAccountsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AdexchangebuyerAccountsGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: 8717895732742165505,
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
};

sdk.accounts.adexchangebuyerAccountsGet(req).then((res: AdexchangebuyerAccountsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->