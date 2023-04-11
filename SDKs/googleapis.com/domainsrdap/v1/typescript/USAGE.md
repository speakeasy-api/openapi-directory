<!-- Start SDK Example Usage -->
```typescript
import {
  DomainsrdapAutnumGetRequest,
  DomainsrdapAutnumGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DomainsrdapAutnumGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  autnumId: "quibusdam",
  callback: "unde",
  fields: "nulla",
  key: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.autnum.domainsrdapAutnumGet(req).then((res: DomainsrdapAutnumGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->