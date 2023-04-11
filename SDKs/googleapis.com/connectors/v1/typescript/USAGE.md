<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest,
  ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
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

sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req).then((res: ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->