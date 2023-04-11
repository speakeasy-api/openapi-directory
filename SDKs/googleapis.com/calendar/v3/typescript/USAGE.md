<!-- Start SDK Example Usage -->
```typescript
import {
  CalendarAclDeleteRequest,
  CalendarAclDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CalendarAclDeleteRequest = {
  alt: AltEnum.Json,
  calendarId: "corrupti",
  fields: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  ruleId: "nulla",
  userIp: "corrupti",
};

sdk.acl.calendarAclDelete(req).then((res: CalendarAclDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->