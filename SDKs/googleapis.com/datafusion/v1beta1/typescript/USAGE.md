<!-- Start SDK Example Usage -->
```typescript
import {
  DatafusionProjectsLocationsInstancesCreateRequest,
  DatafusionProjectsLocationsInstancesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  InstanceTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatafusionProjectsLocationsInstancesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  instanceInput: {
    cryptoKeyConfig: {
      keyReference: "provident",
    },
    dataprocServiceAccount: "distinctio",
    description: "quibusdam",
    displayName: "unde",
    enableRbac: false,
    enableStackdriverLogging: false,
    enableStackdriverMonitoring: false,
    enableZoneSeparation: false,
    eventPublishConfig: {
      enabled: false,
      topic: "nulla",
    },
    labels: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
    networkConfig: {
      ipAllocation: "magnam",
      network: "debitis",
    },
    options: {
      "delectus": "tempora",
    },
    privateInstance: false,
    type: InstanceTypeEnum.Basic,
    version: "molestiae",
    zone: "minus",
  },
  accessToken: "placeat",
  alt: AltEnum.Media,
  callback: "iusto",
  fields: "excepturi",
  instanceId: "nisi",
  key: "recusandae",
  oauthToken: "temporibus",
  parent: "ab",
  prettyPrint: false,
  quotaUser: "quis",
  uploadType: "veritatis",
  uploadProtocol: "deserunt",
};

sdk.projects.datafusionProjectsLocationsInstancesCreate(req).then((res: DatafusionProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->