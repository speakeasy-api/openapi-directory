<!-- Start SDK Example Usage -->
```typescript
import {
  AnimateImageRequest,
  AnimateImageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AnimateImageRequest = {
  type: "corrupti",
  url: "provident",
};

sdk.animateImage(req).then((res: AnimateImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->