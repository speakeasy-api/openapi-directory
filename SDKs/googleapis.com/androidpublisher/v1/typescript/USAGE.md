<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidpublisherPurchasesCancelRequest,
  AndroidpublisherPurchasesCancelResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidpublisherPurchasesCancelRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  key: "provident",
  oauthToken: "distinctio",
  packageName: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  subscriptionId: "nulla",
  token: "corrupti",
  userIp: "illum",
};

sdk.purchases.androidpublisherPurchasesCancel(req).then((res: AndroidpublisherPurchasesCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->