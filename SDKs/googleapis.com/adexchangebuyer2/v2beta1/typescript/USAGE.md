<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { Adexchangebuyer2AccountsClientsCreateRequest, Adexchangebuyer2AccountsClientsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: Adexchangebuyer2AccountsClientsCreateRequest = {
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
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    clientAccountId: "dicta",
    clientName: "debitis",
    entityId: "voluptatum",
    entityName: "et",
    entityType: "ADVERTISER",
    partnerClientId: "dolorem",
    role: "CLIENT_DEAL_NEGOTIATOR",
    status: "CLIENT_STATUS_UNSPECIFIED",
    visibleToSeller: true,
  },
};

sdk.accounts.adexchangebuyer2AccountsClientsCreate(req).then((res: Adexchangebuyer2AccountsClientsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->