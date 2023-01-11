<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApigatewayProjectsLocationsApisConfigsCreateRequest, ApigatewayProjectsLocationsApisConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigatewayProjectsLocationsApisConfigsCreateRequest = {
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
    apiConfigId: "consequuntur",
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
    displayName: "debitis",
    gatewayServiceAccount: "voluptatum",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "ut",
          path: "dolorem",
        },
        source: [
          {
            contents: "voluptate",
            path: "iste",
          },
          {
            contents: "vitae",
            path: "totam",
          },
        ],
      },
    ],
    labels: {
      "illum": "debitis",
    },
    managedServiceConfigs: [
      {
        contents: "odio",
        path: "dolore",
      },
      {
        contents: "id",
        path: "aspernatur",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "totam",
          path: "commodi",
        },
      },
      {
        document: {
          contents: "quis",
          path: "est",
        },
      },
      {
        document: {
          contents: "aut",
          path: "odit",
        },
      },
    ],
  },
};

sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req).then((res: ApigatewayProjectsLocationsApisConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->