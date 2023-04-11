<!-- Start SDK Example Usage -->
```typescript
import {
  YoutubereportingJobsCreateRequest,
  YoutubereportingJobsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: YoutubereportingJobsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  job: {
    createTime: "provident",
    expireTime: "distinctio",
    id: "quibusdam",
    name: "unde",
    reportTypeId: "nulla",
    systemManaged: false,
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  onBehalfOfContentOwner: "iure",
  prettyPrint: false,
  quotaUser: "magnam",
  uploadType: "debitis",
  uploadProtocol: "ipsa",
};

sdk.jobs.youtubereportingJobsCreate(req).then((res: YoutubereportingJobsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->