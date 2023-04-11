<!-- Start SDK Example Usage -->
```typescript
import {
  GetApiVersionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.apiInformation.getApiVersion().then((res: GetApiVersionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->