<!-- Start SDK Example Usage -->
```typescript
import {
  CloudidentityCustomersUserinvitationsCancelRequest,
  CloudidentityCustomersUserinvitationsCancelResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudidentityCustomersUserinvitationsCancelRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.customers.cloudidentityCustomersUserinvitationsCancel(req).then((res: CloudidentityCustomersUserinvitationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->