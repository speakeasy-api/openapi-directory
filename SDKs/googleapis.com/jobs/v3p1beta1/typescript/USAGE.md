<!-- Start SDK Example Usage -->
```typescript
import {
  JobsProjectsClientEventsCreateRequest,
  JobsProjectsClientEventsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  JobEventTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: JobsProjectsClientEventsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  createClientEventRequest: {
    clientEvent: {
      createTime: "provident",
      eventId: "distinctio",
      extraInfo: {
        "unde": "nulla",
        "corrupti": "illum",
        "vel": "error",
        "deserunt": "suscipit",
      },
      jobEvent: {
        jobs: [
          "magnam",
          "debitis",
        ],
        type: JobEventTypeEnum.JobEventTypeUnspecified,
      },
      parentEventId: "delectus",
      requestId: "tempora",
    },
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "minus",
  fields: "placeat",
  key: "voluptatum",
  oauthToken: "iusto",
  parent: "excepturi",
  prettyPrint: false,
  quotaUser: "nisi",
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.projects.jobsProjectsClientEventsCreate(req).then((res: JobsProjectsClientEventsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->