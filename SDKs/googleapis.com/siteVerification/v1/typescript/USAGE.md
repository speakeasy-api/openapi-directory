<!-- Start SDK Example Usage -->
```typescript
import {
  SiteVerificationWebResourceDeleteRequest,
  SiteVerificationWebResourceDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SiteVerificationWebResourceDeleteRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  id: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  userIp: "nulla",
};

sdk.webResource.siteVerificationWebResourceDelete(req).then((res: SiteVerificationWebResourceDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->