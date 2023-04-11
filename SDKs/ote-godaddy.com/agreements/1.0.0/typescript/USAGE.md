<!-- Start SDK Example Usage -->
```typescript
import {
  GetRequest,
  GetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetRequest = {
  xMarketId: "corrupti",
  xPrivateLabelId: 592845,
  keys: [
    "quibusdam",
    "unde",
    "nulla",
  ],
};

sdk.v1.get(req).then((res: GetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->