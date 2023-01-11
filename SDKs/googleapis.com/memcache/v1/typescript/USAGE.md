<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MemcacheProjectsLocationsInstancesApplyParametersRequest, MemcacheProjectsLocationsInstancesApplyParametersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MemcacheProjectsLocationsInstancesApplyParametersRequest = {
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
    applyAll: false,
    nodeIds: [
      "voluptatum",
    ],
  },
};

sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req).then((res: MemcacheProjectsLocationsInstancesApplyParametersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->