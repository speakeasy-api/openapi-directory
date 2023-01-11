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
    gatewayConfig: {
      backendConfig: {
        googleServiceAccount: "voluptatum",
      },
    },
    gatewayServiceAccount: "et",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "dolorem",
          path: "et",
        },
        source: [
          {
            contents: "iste",
            path: "vitae",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "totam",
          path: "dolores",
        },
        source: [
          {
            contents: "debitis",
            path: "vel",
          },
          {
            contents: "odio",
            path: "dolore",
          },
          {
            contents: "id",
            path: "aspernatur",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "accusantium",
          path: "totam",
        },
        source: [
          {
            contents: "quis",
            path: "est",
          },
          {
            contents: "aut",
            path: "odit",
          },
        ],
      },
    ],
    labels: {
      "voluptas": "omnis",
      "aut": "illo",
      "sed": "officiis",
    },
    managedServiceConfigs: [
      {
        contents: "consectetur",
        path: "nobis",
      },
      {
        contents: "odio",
        path: "qui",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "at",
          path: "ipsum",
        },
      },
      {
        document: {
          contents: "eveniet",
          path: "modi",
        },
      },
      {
        document: {
          contents: "sint",
          path: "inventore",
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