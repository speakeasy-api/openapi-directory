<!-- Start SDK Example Usage -->
```typescript
import {
  DriveAboutGetRequest,
  DriveAboutGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DriveAboutGetRequest = {
  alt: AltEnum.Json,
  fields: "corrupti",
  includeSubscribed: false,
  key: "provident",
  maxChangeIdCount: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  startChangeId: "nulla",
  userIp: "corrupti",
};

sdk.about.driveAboutGet(req).then((res: DriveAboutGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->