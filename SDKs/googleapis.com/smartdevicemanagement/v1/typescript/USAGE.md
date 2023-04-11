<!-- Start SDK Example Usage -->
```typescript
import {
  SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest,
  SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest: {
    command: "provident",
    params: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
  },
  accessToken: "error",
  alt: AltEnum.Media,
  callback: "suscipit",
  fields: "iure",
  key: "magnam",
  name: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.enterprises.smartdevicemanagementEnterprisesDevicesExecuteCommand(req).then((res: SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->