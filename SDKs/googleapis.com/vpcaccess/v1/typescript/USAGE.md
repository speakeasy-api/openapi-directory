<!-- Start SDK Example Usage -->
```typescript
import {
  VpcaccessProjectsLocationsConnectorsCreateRequest,
  VpcaccessProjectsLocationsConnectorsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: VpcaccessProjectsLocationsConnectorsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectorInput: {
    ipCidrRange: "provident",
    machineType: "distinctio",
    maxInstances: 844266,
    maxThroughput: 602763,
    minInstances: 857946,
    minThroughput: 544883,
    name: "illum",
    network: "vel",
    subnet: {
      name: "error",
      projectId: "deserunt",
    },
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "magnam",
  connectorId: "debitis",
  fields: "ipsa",
  key: "delectus",
  oauthToken: "tempora",
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.projects.vpcaccessProjectsLocationsConnectorsCreate(req).then((res: VpcaccessProjectsLocationsConnectorsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->