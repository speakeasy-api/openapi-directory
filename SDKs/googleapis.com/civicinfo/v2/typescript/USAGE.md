<!-- Start SDK Example Usage -->
```typescript
import {
  CivicinfoDivisionsSearchRequest,
  CivicinfoDivisionsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CivicinfoDivisionsSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  query: "illum",
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.divisions.civicinfoDivisionsSearch(req).then((res: CivicinfoDivisionsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->