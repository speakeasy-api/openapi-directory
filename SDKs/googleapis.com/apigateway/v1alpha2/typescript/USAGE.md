<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest, ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    resource: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    optionsRequestedPolicyVersion: 8274930044578894929,
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
};

sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req).then((res: ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->