<!-- Start SDK Example Usage -->
```typescript
import {
  CircuitsChoicesListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.circuits.circuitsChoicesList().then((res: CircuitsChoicesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->