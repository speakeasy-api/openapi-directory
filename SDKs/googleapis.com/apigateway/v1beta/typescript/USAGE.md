<!-- Start SDK Example Usage -->
```typescript
import {
  ApigatewayProjectsLocationsApisConfigsCreateRequest,
  ApigatewayProjectsLocationsApisConfigsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApigatewayProjectsLocationsApisConfigsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  apigatewayApiConfigInput: {
    displayName: "provident",
    gatewayConfig: {
      backendConfig: {
        googleServiceAccount: "distinctio",
      },
    },
    gatewayServiceAccount: "quibusdam",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "nulla",
          path: "corrupti",
        },
        source: [
          {
            contents: "vel",
            path: "error",
          },
          {
            contents: "deserunt",
            path: "suscipit",
          },
          {
            contents: "iure",
            path: "magnam",
          },
          {
            contents: "debitis",
            path: "ipsa",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "delectus",
          path: "tempora",
        },
        source: [
          {
            contents: "molestiae",
            path: "minus",
          },
          {
            contents: "placeat",
            path: "voluptatum",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "iusto",
          path: "excepturi",
        },
        source: [
          {
            contents: "recusandae",
            path: "temporibus",
          },
          {
            contents: "ab",
            path: "quis",
          },
        ],
      },
    ],
    labels: {
      "deserunt": "perferendis",
    },
    managedServiceConfigs: [
      {
        contents: "repellendus",
        path: "sapiente",
      },
      {
        contents: "quo",
        path: "odit",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "at",
          path: "maiores",
        },
      },
      {
        document: {
          contents: "molestiae",
          path: "quod",
        },
      },
      {
        document: {
          contents: "quod",
          path: "esse",
        },
      },
      {
        document: {
          contents: "totam",
          path: "porro",
        },
      },
    ],
  },
  accessToken: "dolorum",
  alt: AltEnum.Json,
  apiConfigId: "nam",
  callback: "officia",
  fields: "occaecati",
  key: "fugit",
  oauthToken: "deleniti",
  parent: "hic",
  prettyPrint: false,
  quotaUser: "optio",
  uploadType: "totam",
  uploadProtocol: "beatae",
};

sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req).then((res: ApigatewayProjectsLocationsApisConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->