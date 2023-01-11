<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeploymentmanagerDeploymentsCancelPreviewRequest, DeploymentmanagerDeploymentsCancelPreviewResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeploymentmanagerDeploymentsCancelPreviewRequest = {
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
    deployment: "sit",
    project: "voluptas",
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
  request: {
    fingerprint: "debitis",
  },
};

sdk.deployments.deploymentmanagerDeploymentsCancelPreview(req).then((res: DeploymentmanagerDeploymentsCancelPreviewResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->