<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { HomegraphAgentUsersDeleteRequest, HomegraphAgentUsersDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: HomegraphAgentUsersDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    agentUserId: "sit",
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
    requestId: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.agentUsers.homegraphAgentUsersDelete(req).then((res: HomegraphAgentUsersDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->