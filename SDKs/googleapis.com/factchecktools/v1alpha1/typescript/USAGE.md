<!-- Start SDK Example Usage -->
```typescript
import {
  FactchecktoolsClaimsSearchRequest,
  FactchecktoolsClaimsSearchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FactchecktoolsClaimsSearchRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  languageCode: "corrupti",
  maxAgeDays: 847252,
  oauthToken: "vel",
  offset: 623564,
  pageSize: 645894,
  pageToken: "suscipit",
  prettyPrint: false,
  query: "iure",
  quotaUser: "magnam",
  reviewPublisherSiteFilter: "debitis",
  uploadType: "ipsa",
  uploadProtocol: "delectus",
};

sdk.claims.factchecktoolsClaimsSearch(req).then((res: FactchecktoolsClaimsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->