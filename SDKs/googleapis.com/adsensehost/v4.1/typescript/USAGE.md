<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AdsensehostAccountsAdclientsGetRequest, AdsensehostAccountsAdclientsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AdsensehostAccountsAdclientsGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "sit",
    adClientId: "voluptas",
  },
  queryParams: {
    alt: "json",
    fields: "expedita",
    key: "consequuntur",
    oauthToken: "dolor",
    prettyPrint: true,
    quotaUser: "voluptas",
    userIp: "fugit",
  },
};

sdk.accounts.adsensehostAccountsAdclientsGet(req).then((res: AdsensehostAccountsAdclientsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->