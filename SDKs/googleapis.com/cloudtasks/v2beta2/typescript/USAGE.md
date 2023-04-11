<!-- Start SDK Example Usage -->
```typescript
import {
  CloudtasksApiQueueUpdateRequest,
  CloudtasksApiQueueUpdateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudtasksApiQueueUpdateRequest = {
  dollarXgafv: XgafvEnum.Two,
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
  accessToken: "veritatis",
  alt: AltEnum.Media,
  appId: "perferendis",
  callback: "ipsam",
  fields: "repellendus",
  key: "sapiente",
  oauthToken: "quo",
  prettyPrint: false,
  quotaUser: "odit",
  uploadType: "at",
  uploadProtocol: "at",
};

sdk.api.cloudtasksApiQueueUpdate(req).then((res: CloudtasksApiQueueUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->