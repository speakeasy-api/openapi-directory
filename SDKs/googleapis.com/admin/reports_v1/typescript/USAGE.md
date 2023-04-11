<!-- Start SDK Example Usage -->
```typescript
import {
  ReportsActivitiesListRequest,
  ReportsActivitiesListResponse,
  ReportsActivitiesListApplicationNameEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ReportsActivitiesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  actorIpAddress: "distinctio",
  alt: AltEnum.Proto,
  applicationName: ReportsActivitiesListApplicationNameEnum.Mobile,
  callback: "nulla",
  customerId: "corrupti",
  endTime: "illum",
  eventName: "vel",
  fields: "error",
  filters: "deserunt",
  groupIdFilter: "suscipit",
  key: "iure",
  maxResults: 297534,
  oauthToken: "debitis",
  orgUnitID: "ipsa",
  pageToken: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  startTime: "suscipit",
  uploadType: "molestiae",
  uploadProtocol: "minus",
  userKey: "placeat",
};

sdk.activities.reportsActivitiesList(req).then((res: ReportsActivitiesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->