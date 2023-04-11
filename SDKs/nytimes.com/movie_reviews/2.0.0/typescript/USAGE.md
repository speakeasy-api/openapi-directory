<!-- Start SDK Example Usage -->
```typescript
import {
  GetCriticsResourceTypeJsonRequest,
  GetCriticsResourceTypeJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apikey: "YOUR_API_KEY_HERE",
  },
});

const req: GetCriticsResourceTypeJsonRequest = {
  resourceType: "corrupti",
};

sdk.getCriticsResourceTypeJson(req).then((res: GetCriticsResourceTypeJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->