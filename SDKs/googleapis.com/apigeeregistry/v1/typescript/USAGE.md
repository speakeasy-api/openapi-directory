<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApigeeregistryProjectsLocationsApisCreateRequest, ApigeeregistryProjectsLocationsApisCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigeeregistryProjectsLocationsApisCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    apiId: "consequuntur",
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
    annotations: {
      "voluptatum": "et",
    },
    availability: "ut",
    description: "dolorem",
    displayName: "et",
    labels: {
      "iste": "vitae",
    },
    name: "totam",
    recommendedDeployment: "dolores",
    recommendedVersion: "illum",
  },
};

sdk.projects.apigeeregistryProjectsLocationsApisCreate(req).then((res: ApigeeregistryProjectsLocationsApisCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->