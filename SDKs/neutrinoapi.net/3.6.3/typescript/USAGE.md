<!-- Start SDK Example Usage -->
```typescript
import {
  BadWordFilterRequestBody,
  BadWordFilterResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
    userId: "YOUR_API_KEY_HERE",
  },
});

const req: BadWordFilterRequestBody = {
  catalog: "corrupti",
  censorCharacter: "provident",
  content: "distinctio",
};

sdk.dataTools.badWordFilter(req).then((res: BadWordFilterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->