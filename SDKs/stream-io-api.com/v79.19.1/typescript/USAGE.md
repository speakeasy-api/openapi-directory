<!-- Start SDK Example Usage -->
```typescript
import {
  shared.GetCallTokenRequest,
  GetCallToken1Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    option1: {
      jwt: "YOUR_API_KEY_HERE",
      apiKey: "YOUR_API_KEY_HERE",
      streamAuthType: "YOUR_API_KEY_HERE",
    },
  },
});

const req: shared.GetCallTokenRequest = {
  user: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  userId: "illum",
};

sdk.getCallToken1(req).then((res: GetCallToken1Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->