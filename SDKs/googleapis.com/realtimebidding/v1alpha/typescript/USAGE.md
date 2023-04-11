<!-- Start SDK Example Usage -->
```typescript
import {
  RealtimebiddingBiddersBiddingFunctionsActivateRequest,
  RealtimebiddingBiddersBiddingFunctionsActivateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RealtimebiddingBiddersBiddingFunctionsActivateRequest = {
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
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.bidders.realtimebiddingBiddersBiddingFunctionsActivate(req).then((res: RealtimebiddingBiddersBiddingFunctionsActivateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->