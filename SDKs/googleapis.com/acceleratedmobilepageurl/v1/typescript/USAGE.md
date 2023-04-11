<!-- Start SDK Example Usage -->
```typescript
import {
  AcceleratedmobilepageurlAmpUrlsBatchGetRequest,
  AcceleratedmobilepageurlAmpUrlsBatchGetResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  BatchGetAmpUrlsRequestLookupStrategyEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AcceleratedmobilepageurlAmpUrlsBatchGetRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchGetAmpUrlsRequest: {
    lookupStrategy: BatchGetAmpUrlsRequestLookupStrategyEnum.InIndexDoc,
    urls: [
      "quibusdam",
      "unde",
      "nulla",
    ],
  },
  accessToken: "corrupti",
  alt: AltEnum.Proto,
  callback: "vel",
  fields: "error",
  key: "deserunt",
  oauthToken: "suscipit",
  prettyPrint: false,
  quotaUser: "iure",
  uploadType: "magnam",
  uploadProtocol: "debitis",
};

sdk.ampUrls.acceleratedmobilepageurlAmpUrlsBatchGet(req).then((res: AcceleratedmobilepageurlAmpUrlsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->