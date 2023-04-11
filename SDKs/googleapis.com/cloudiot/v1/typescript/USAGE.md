<!-- Start SDK Example Usage -->
```typescript
import {
  CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest,
  CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest = {
  dollarXgafv: XgafvEnum.Two,
  bindDeviceToGatewayRequest: {
    deviceId: "provident",
    gatewayId: "distinctio",
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.cloudiotProjectsLocationsRegistriesBindDeviceToGateway(req).then((res: CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->