<!-- Start SDK Example Usage -->
```typescript
import {
  GetWellKnownMercureRequest,
  GetWellKnownMercureResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetWellKnownMercureRequest = {
  lastEventID: "corrupti",
  lastEventIDQueryParameter: "provident",
  topic: [
    "quibusdam",
    "unde",
    "nulla",
  ],
};

sdk.getWellKnownMercure(req).then((res: GetWellKnownMercureResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->