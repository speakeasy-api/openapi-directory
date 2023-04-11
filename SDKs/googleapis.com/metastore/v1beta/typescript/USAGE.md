<!-- Start SDK Example Usage -->
```typescript
import {
  MetastoreProjectsLocationsFederationsCreateRequest,
  MetastoreProjectsLocationsFederationsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  BackendMetastoreMetastoreTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MetastoreProjectsLocationsFederationsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  federationInput: {
    backendMetastores: {
      "distinctio": {
        metastoreType: BackendMetastoreMetastoreTypeEnum.DataprocMetastore,
        name: "unde",
      },
      "nulla": {
        metastoreType: BackendMetastoreMetastoreTypeEnum.Bigquery,
        name: "illum",
      },
      "vel": {
        metastoreType: BackendMetastoreMetastoreTypeEnum.Bigquery,
        name: "deserunt",
      },
    },
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    name: "delectus",
    version: "tempora",
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "minus",
  federationId: "placeat",
  fields: "voluptatum",
  key: "iusto",
  oauthToken: "excepturi",
  parent: "nisi",
  prettyPrint: false,
  quotaUser: "recusandae",
  requestId: "temporibus",
  uploadType: "ab",
  uploadProtocol: "quis",
};

sdk.projects.metastoreProjectsLocationsFederationsCreate(req).then((res: MetastoreProjectsLocationsFederationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->