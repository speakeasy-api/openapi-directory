<!-- Start SDK Example Usage -->
```typescript
import {
  BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest,
  BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest = {
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

sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req).then((res: BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->