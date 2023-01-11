<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ReplicapoolPoolsDeleteRequest, ReplicapoolPoolsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ReplicapoolPoolsDeleteRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  pathParams: {
    poolName: "sit",
    projectName: "voluptas",
    zone: "culpa",
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
    abandonInstances: [
      "rerum",
    ],
  },
};

sdk.pools.replicapoolPoolsDelete(req).then((res: ReplicapoolPoolsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->