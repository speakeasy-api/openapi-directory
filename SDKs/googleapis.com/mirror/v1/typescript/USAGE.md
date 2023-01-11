<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MirrorAccountsInsertRequest, MirrorAccountsInsertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MirrorAccountsInsertRequest = {
  pathParams: {
    accountName: "sit",
    accountType: "voluptas",
    userToken: "culpa",
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
  request: {
    authTokens: [
      {
        authToken: "rerum",
        type: "dicta",
      },
    ],
    features: [
      "voluptatum",
    ],
    password: "et",
    userData: [
      {
        key: "dolorem",
        value: "et",
      },
      {
        key: "voluptate",
        value: "iste",
      },
      {
        key: "vitae",
        value: "totam",
      },
    ],
  },
};

sdk.accounts.mirrorAccountsInsert(req).then((res: MirrorAccountsInsertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->