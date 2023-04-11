<!-- Start SDK Example Usage -->
```typescript
import {
  JobsProjectsTenantsClientEventsCreateRequest,
  JobsProjectsTenantsClientEventsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  JobEventTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: JobsProjectsTenantsClientEventsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  clientEvent: {
    createTime: "provident",
    eventId: "distinctio",
    eventNotes: "quibusdam",
    jobEvent: {
      jobs: [
        "nulla",
        "corrupti",
        "illum",
      ],
      type: JobEventTypeEnum.ApplicationQuickSubmission,
    },
    requestId: "error",
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  parent: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.projects.jobsProjectsTenantsClientEventsCreate(req).then((res: JobsProjectsTenantsClientEventsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->