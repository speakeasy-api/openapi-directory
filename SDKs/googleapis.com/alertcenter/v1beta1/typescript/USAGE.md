<!-- Start SDK Example Usage -->
```typescript
import {
  AlertcenterAlertsBatchDeleteRequest,
  AlertcenterAlertsBatchDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AlertcenterAlertsBatchDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchDeleteAlertsRequest: {
    alertId: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    customerId: "nulla",
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.alerts.alertcenterAlertsBatchDelete(req).then((res: AlertcenterAlertsBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->