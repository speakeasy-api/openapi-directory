<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ImageUrl,
  BatchReadFileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apimKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.ImageUrl = {
  url: "corrupti",
};

sdk.batchReadFile(req).then((res: BatchReadFileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->