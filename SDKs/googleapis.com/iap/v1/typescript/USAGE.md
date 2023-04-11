<!-- Start SDK Example Usage -->
```typescript
import {
  IapProjectsBrandsCreateRequest,
  IapProjectsBrandsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IapProjectsBrandsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  brandInput: {
    applicationTitle: "provident",
    supportEmail: "distinctio",
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

sdk.projects.iapProjectsBrandsCreate(req).then((res: IapProjectsBrandsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->