<!-- Start SDK Example Usage -->
```typescript
import {
  KgsearchEntitiesSearchRequest,
  KgsearchEntitiesSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KgsearchEntitiesSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  ids: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  indent: false,
  key: "deserunt",
  languages: [
    "iure",
    "magnam",
  ],
  limit: 891773,
  oauthToken: "ipsa",
  prefix: false,
  prettyPrint: false,
  query: "delectus",
  quotaUser: "tempora",
  types: [
    "molestiae",
    "minus",
  ],
  uploadType: "placeat",
  uploadProtocol: "voluptatum",
};

sdk.entities.kgsearchEntitiesSearch(req).then((res: KgsearchEntitiesSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->