<!-- Start SDK Example Usage -->
```typescript
import {
  CloudtraceProjectsTraceSinksCreateRequest,
  CloudtraceProjectsTraceSinksCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudtraceProjectsTraceSinksCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  traceSinkInput: {
    name: "provident",
    outputConfig: {
      destination: "distinctio",
    },
  },
  accessToken: "quibusdam",
  alt: AltEnum.Media,
  callback: "nulla",
  fields: "corrupti",
  key: "illum",
  oauthToken: "vel",
  parent: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.projects.cloudtraceProjectsTraceSinksCreate(req).then((res: CloudtraceProjectsTraceSinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->