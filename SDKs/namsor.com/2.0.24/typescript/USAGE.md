<!-- Start SDK Example Usage -->
```typescript
import {
  AnonymizeRequest,
  AnonymizeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AnonymizeRequest = {
  anonymized: false,
  source: "corrupti",
  token: "provident",
};

sdk.admin.anonymize(req).then((res: AnonymizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->