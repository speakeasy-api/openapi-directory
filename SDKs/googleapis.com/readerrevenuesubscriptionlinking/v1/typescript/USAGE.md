<!-- Start SDK Example Usage -->
```typescript
import {
  ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest,
  ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  force: false,
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req).then((res: ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->