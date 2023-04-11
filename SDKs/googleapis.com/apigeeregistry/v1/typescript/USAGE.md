<!-- Start SDK Example Usage -->
```typescript
import {
  ApigeeregistryProjectsLocationsApisCreateRequest,
  ApigeeregistryProjectsLocationsApisCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApigeeregistryProjectsLocationsApisCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  apiInput: {
    annotations: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    availability: "vel",
    description: "error",
    displayName: "deserunt",
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    name: "delectus",
    recommendedDeployment: "tempora",
    recommendedVersion: "suscipit",
  },
  accessToken: "molestiae",
  alt: AltEnum.Proto,
  apiId: "placeat",
  callback: "voluptatum",
  fields: "iusto",
  key: "excepturi",
  oauthToken: "nisi",
  parent: "recusandae",
  prettyPrint: false,
  quotaUser: "temporibus",
  uploadType: "ab",
  uploadProtocol: "quis",
};

sdk.projects.apigeeregistryProjectsLocationsApisCreate(req).then((res: ApigeeregistryProjectsLocationsApisCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->