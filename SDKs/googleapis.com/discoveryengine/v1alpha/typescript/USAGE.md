<!-- Start SDK Example Usage -->
```typescript
import {
  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest,
  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDiscoveryengineV1alphaDocument: {
    id: "provident",
    jsonData: "distinctio",
    name: "quibusdam",
    parentDocumentId: "unde",
    schemaId: "nulla",
    structData: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  accessToken: "magnam",
  alt: AltEnum.Proto,
  callback: "ipsa",
  documentId: "delectus",
  fields: "tempora",
  key: "suscipit",
  oauthToken: "molestiae",
  parent: "minus",
  prettyPrint: false,
  quotaUser: "placeat",
  uploadType: "voluptatum",
  uploadProtocol: "iusto",
};

sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req).then((res: DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->