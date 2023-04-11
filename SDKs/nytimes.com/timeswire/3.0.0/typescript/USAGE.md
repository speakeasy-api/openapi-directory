<!-- Start SDK Example Usage -->
```typescript
import {
  GetContentJsonRequest,
  GetContentJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetContentJsonRequest = {
  url: "corrupti",
};

sdk.getContentJson(req).then((res: GetContentJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->