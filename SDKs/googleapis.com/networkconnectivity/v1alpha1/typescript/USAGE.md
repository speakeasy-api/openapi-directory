<!-- Start SDK Example Usage -->
```typescript
import {
  NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest,
  NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  hubInput: {
    createTime: "provident",
    description: "distinctio",
    labels: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
    name: "iure",
    updateTime: "magnam",
  },
  accessToken: "debitis",
  alt: AltEnum.Json,
  callback: "delectus",
  fields: "tempora",
  hubId: "suscipit",
  key: "molestiae",
  oauthToken: "minus",
  parent: "placeat",
  prettyPrint: false,
  quotaUser: "voluptatum",
  requestId: "iusto",
  uploadType: "excepturi",
  uploadProtocol: "nisi",
};

sdk.projects.networkconnectivityProjectsLocationsGlobalHubsCreate(req).then((res: NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->