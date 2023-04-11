<!-- Start SDK Example Usage -->
```typescript
import {
  PreviewsReadRequest,
  PreviewsReadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    token: "YOUR_API_KEY_HERE",
  },
});

const req: PreviewsReadRequest = {
  fileId: "corrupti",
};

sdk.previews.previewsRead(req).then((res: PreviewsReadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->