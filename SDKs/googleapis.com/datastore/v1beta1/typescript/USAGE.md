<!-- Start SDK Example Usage -->
```typescript
import {
  DatastoreProjectsExportRequest,
  DatastoreProjectsExportResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastoreProjectsExportRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleDatastoreAdminV1beta1ExportEntitiesRequest: {
    entityFilter: {
      kinds: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      namespaceIds: [
        "corrupti",
        "illum",
        "vel",
        "error",
      ],
    },
    labels: {
      "suscipit": "iure",
      "magnam": "debitis",
      "ipsa": "delectus",
    },
    outputUrlPrefix: "tempora",
  },
  accessToken: "suscipit",
  alt: AltEnum.Media,
  callback: "minus",
  fields: "placeat",
  key: "voluptatum",
  oauthToken: "iusto",
  prettyPrint: false,
  projectId: "excepturi",
  quotaUser: "nisi",
  uploadType: "recusandae",
  uploadProtocol: "temporibus",
};

sdk.projects.datastoreProjectsExport(req).then((res: DatastoreProjectsExportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->