<!-- Start SDK Example Usage -->
```typescript
import {
  BooksBookshelvesGetRequest,
  BooksBookshelvesGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BooksBookshelvesGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  prettyPrint: false,
  quotaUser: "illum",
  shelf: "vel",
  source: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userId: "iure",
};

sdk.bookshelves.booksBookshelvesGet(req).then((res: BooksBookshelvesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->