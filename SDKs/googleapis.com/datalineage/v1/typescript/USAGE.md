<!-- Start SDK Example Usage -->
```typescript
import {
  DatalineageProjectsLocationsBatchSearchLinkProcessesRequest,
  DatalineageProjectsLocationsBatchSearchLinkProcessesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatalineageProjectsLocationsBatchSearchLinkProcessesRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: {
    links: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    pageSize: 857946,
    pageToken: "corrupti",
  },
  accessToken: "illum",
  alt: AltEnum.Media,
  callback: "error",
  fields: "deserunt",
  key: "suscipit",
  oauthToken: "iure",
  parent: "magnam",
  prettyPrint: false,
  quotaUser: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req).then((res: DatalineageProjectsLocationsBatchSearchLinkProcessesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->