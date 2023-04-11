<!-- Start SDK Example Usage -->
```typescript
import {
  ApikeysKeysLookupKeyRequest,
  ApikeysKeysLookupKeyResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApikeysKeysLookupKeyRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  keyString: "corrupti",
  oauthToken: "illum",
  prettyPrint: false,
  quotaUser: "vel",
  uploadType: "error",
  uploadProtocol: "deserunt",
};

sdk.keys.apikeysKeysLookupKey(req).then((res: ApikeysKeysLookupKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->