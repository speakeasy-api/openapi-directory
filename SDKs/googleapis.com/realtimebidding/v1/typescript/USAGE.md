<!-- Start SDK Example Usage -->
```typescript
import {
  RealtimebiddingBiddersCreativesWatchRequest,
  RealtimebiddingBiddersCreativesWatchResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RealtimebiddingBiddersCreativesWatchRequest = {
  dollarXgafv: XgafvEnum.Two,
  requestBody: {
    "distinctio": "quibusdam",
    "unde": "nulla",
    "corrupti": "illum",
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  oauthToken: "magnam",
  parent: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.bidders.realtimebiddingBiddersCreativesWatch(req).then((res: RealtimebiddingBiddersCreativesWatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->