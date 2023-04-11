<!-- Start SDK Example Usage -->
```typescript
import {
  DlpInfoTypesListRequest,
  DlpInfoTypesListResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DlpInfoTypesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  filter: "nulla",
  key: "corrupti",
  languageCode: "illum",
  locationId: "vel",
  oauthToken: "error",
  parent: "deserunt",
  prettyPrint: false,
  quotaUser: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
};

sdk.infoTypes.dlpInfoTypesList(req).then((res: DlpInfoTypesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->