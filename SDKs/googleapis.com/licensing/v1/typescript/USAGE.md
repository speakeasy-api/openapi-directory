<!-- Start SDK Example Usage -->
```typescript
import {
  LicensingLicenseAssignmentsDeleteRequest,
  LicensingLicenseAssignmentsDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: LicensingLicenseAssignmentsDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  productId: "illum",
  quotaUser: "vel",
  skuId: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.licenseAssignments.licensingLicenseAssignmentsDelete(req).then((res: LicensingLicenseAssignmentsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->