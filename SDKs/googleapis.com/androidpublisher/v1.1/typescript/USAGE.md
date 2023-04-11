<!-- Start SDK Example Usage -->
```typescript
import {
  AndroidpublisherInapppurchasesGetRequest,
  AndroidpublisherInapppurchasesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AndroidpublisherInapppurchasesGetRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  key: "provident",
  oauthToken: "distinctio",
  packageName: "quibusdam",
  prettyPrint: false,
  productId: "unde",
  quotaUser: "nulla",
  token: "corrupti",
  userIp: "illum",
};

sdk.inapppurchases.androidpublisherInapppurchasesGet(req).then((res: AndroidpublisherInapppurchasesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->