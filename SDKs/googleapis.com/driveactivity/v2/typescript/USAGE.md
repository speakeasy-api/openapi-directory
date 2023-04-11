<!-- Start SDK Example Usage -->
```typescript
import {
  DriveactivityActivityQueryRequest,
  DriveactivityActivityQueryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DriveactivityActivityQueryRequest = {
  dollarXgafv: XgafvEnum.Two,
  queryDriveActivityRequest: {
    ancestorName: "provident",
    consolidationStrategy: {
      legacy: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      none: {
        "deserunt": "suscipit",
        "iure": "magnam",
        "debitis": "ipsa",
      },
    },
    filter: "delectus",
    itemName: "tempora",
    pageSize: 383441,
    pageToken: "molestiae",
  },
  accessToken: "minus",
  alt: AltEnum.Proto,
  callback: "voluptatum",
  fields: "iusto",
  key: "excepturi",
  oauthToken: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  uploadType: "temporibus",
  uploadProtocol: "ab",
};

sdk.activity.driveactivityActivityQuery(req).then((res: DriveactivityActivityQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->