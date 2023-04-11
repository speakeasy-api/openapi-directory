<!-- Start SDK Example Usage -->
```typescript
import {
  DocumentaiProjectsLocationsFetchProcessorTypesRequest,
  DocumentaiProjectsLocationsFetchProcessorTypesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DocumentaiProjectsLocationsFetchProcessorTypesRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  parent: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req).then((res: DocumentaiProjectsLocationsFetchProcessorTypesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->