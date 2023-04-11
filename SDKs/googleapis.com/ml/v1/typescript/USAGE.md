<!-- Start SDK Example Usage -->
```typescript
import {
  MlProjectsExplainRequest,
  MlProjectsExplainResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MlProjectsExplainRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudMlV1ExplainRequest: {
    httpBody: {
      contentType: "provident",
      data: "distinctio",
      extensions: [
        {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
        {
          "iure": "magnam",
          "debitis": "ipsa",
        },
        {
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
          "iusto": "excepturi",
        },
        {
          "recusandae": "temporibus",
          "ab": "quis",
        },
      ],
    },
  },
  accessToken: "veritatis",
  alt: AltEnum.Media,
  callback: "perferendis",
  fields: "ipsam",
  key: "repellendus",
  name: "sapiente",
  oauthToken: "quo",
  prettyPrint: false,
  quotaUser: "odit",
  uploadType: "at",
  uploadProtocol: "at",
};

sdk.projects.mlProjectsExplain(req).then((res: MlProjectsExplainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->