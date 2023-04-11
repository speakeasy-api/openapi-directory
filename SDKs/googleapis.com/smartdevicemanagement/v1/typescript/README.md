# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/smartdevicemanagement/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/smartdevicemanagement/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### enterprises

* `smartdevicemanagementEnterprisesDevicesExecuteCommand` - Executes a command to device managed by the enterprise.
* `smartdevicemanagementEnterprisesDevicesList` - Lists devices managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresList` - Lists structures managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresRoomsGet` - Gets a room managed by the enterprise.
* `smartdevicemanagementEnterprisesStructuresRoomsList` - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

