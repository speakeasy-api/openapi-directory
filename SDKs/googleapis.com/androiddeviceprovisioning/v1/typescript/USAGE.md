<!-- Start SDK Example Usage -->
```typescript
import {
  AndroiddeviceprovisioningCustomersConfigurationsCreateRequest,
  AndroiddeviceprovisioningCustomersConfigurationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroiddeviceprovisioningCustomersConfigurationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  configurationInput: {
    companyName: "provident",
    configurationName: "distinctio",
    contactEmail: "quibusdam",
    contactPhone: "unde",
    customMessage: "nulla",
    dpcExtras: "corrupti",
    dpcResourcePath: "illum",
    isDefault: false,
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  parent: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.customers.androiddeviceprovisioningCustomersConfigurationsCreate(req).then((res: AndroiddeviceprovisioningCustomersConfigurationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->