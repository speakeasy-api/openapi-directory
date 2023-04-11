<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectorsProjectsLocationsConnectionsActionsExecuteRequest,
  ConnectorsProjectsLocationsConnectionsActionsExecuteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectorsProjectsLocationsConnectionsActionsExecuteRequest = {
  dollarXgafv: XgafvEnum.Two,
  executeActionRequest: {
    parameters: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req).then((res: ConnectorsProjectsLocationsConnectionsActionsExecuteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->