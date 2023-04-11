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
    gatewayServiceAccount: "distinctio",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "unde",
          path: "nulla",
        },
        source: [
          {
            contents: "illum",
            path: "vel",
          },
          {
            contents: "error",
            path: "deserunt",
          },
          {
            contents: "suscipit",
            path: "iure",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "magnam",
          path: "debitis",
        },
        source: [
          {
            contents: "delectus",
            path: "tempora",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "suscipit",
          path: "molestiae",
        },
        source: [
          {
            contents: "placeat",
            path: "voluptatum",
          },
          {
            contents: "iusto",
            path: "excepturi",
          },
          {
            contents: "nisi",
            path: "recusandae",
          },
          {
            contents: "temporibus",
            path: "ab",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "quis",
          path: "veritatis",
        },
        source: [
          {
            contents: "perferendis",
            path: "ipsam",
          },
          {
            contents: "repellendus",
            path: "sapiente",
          },
          {
            contents: "quo",
            path: "odit",
          },
        ],
      },
    ],
    labels: {
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
      "totam": "porro",
    },
    managedServiceConfigs: [
      {
        contents: "dicta",
        path: "nam",
      },
      {
        contents: "officia",
        path: "occaecati",
      },
      {
        contents: "fugit",
        path: "deleniti",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "optio",
          path: "totam",
        },
      },
      {
        document: {
          contents: "beatae",
          path: "commodi",
        },
      },
      {
        document: {
          contents: "molestiae",
          path: "modi",
        },
      },
      {
        document: {
          contents: "qui",
          path: "impedit",
        },
      },
    ],
  },
  accessToken: "cum",
  alt: AltEnum.Media,
  apiConfigId: "ipsum",
  callback: "excepturi",
  fields: "aspernatur",
  key: "perferendis",
  oauthToken: "ad",
  parent: "natus",
  prettyPrint: false,
  quotaUser: "sed",
  uploadType: "iste",
  uploadProtocol: "dolor",
};

sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req).then((res: ApigatewayProjectsLocationsApisConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->