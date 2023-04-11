<!-- Start SDK Example Usage -->
```typescript
import {
  SafebrowsingEncodedFullHashesGetRequest,
  SafebrowsingEncodedFullHashesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SafebrowsingEncodedFullHashesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  clientId: "unde",
  clientVersion: "nulla",
  encodedRequest: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req).then((res: SafebrowsingEncodedFullHashesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->