<!-- Start SDK Example Usage -->
```typescript
import {
  CreateLicenseRequestBody,
  CreateLicenseResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateLicenseRequestBody = {
  active: false,
  currency: "corrupti",
  hidden: false,
  licenseTemplateNumber: "provident",
  licenseeNumber: "distinctio",
  name: "quibusdam",
  number: "unde",
  parentfeature: "nulla",
  price: 5448.83,
  quantity: "illum",
  startDate: "2022-05-18T09:34:54.894Z",
  timeVolume: "deserunt",
  timeVolumePeriod: "suscipit",
  usedQuantity: "iure",
};

sdk.license.createLicense(req).then((res: CreateLicenseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->