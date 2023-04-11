<!-- Start SDK Example Usage -->
```typescript
import {
  PlusActivitiesGetRequest,
  PlusActivitiesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PlusActivitiesGetRequest = {
  activityId: "corrupti",
  alt: AltEnum.Json,
  fields: "provident",
  key: "distinctio",
  oauthToken: "quibusdam",
  prettyPrint: false,
  quotaUser: "unde",
  userIp: "nulla",
};

sdk.activities.plusActivitiesGet(req).then((res: PlusActivitiesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->