<!-- Start SDK Example Usage -->
```typescript
import {
  CreateBundleCreateBundleRequest,
  CreateBundleResponse
} from "openapi/dist/sdk/models/operations";
import {
  BundleEnumEndUserTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateBundleCreateBundleRequest = {
  email: "Larue_Rau85@yahoo.com",
  endUserType: BundleEnumEndUserTypeEnum.Business,
  friendlyName: "illum",
  isoCountry: "vel",
  numberType: "error",
  regulationSid: "deserunt",
  statusCallback: "http://innocent-effect.org",
};

sdk.createBundle(req).then((res: CreateBundleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->