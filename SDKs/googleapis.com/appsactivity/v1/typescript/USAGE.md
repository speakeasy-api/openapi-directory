<!-- Start SDK Example Usage -->
```typescript
import {
  AppsactivityActivitiesListRequest,
  AppsactivityActivitiesListResponse,
  AppsactivityActivitiesListGroupingStrategyEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppsactivityActivitiesListRequest = {
  alt: AltEnum.Json,
  driveAncestorId: "corrupti",
  driveFileId: "provident",
  fields: "distinctio",
  groupingStrategy: AppsactivityActivitiesListGroupingStrategyEnum.None,
  key: "unde",
  oauthToken: "nulla",
  pageSize: 544883,
  pageToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  source: "error",
  userId: "deserunt",
  userIp: "suscipit",
};

sdk.activities.appsactivityActivitiesList(req).then((res: AppsactivityActivitiesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->