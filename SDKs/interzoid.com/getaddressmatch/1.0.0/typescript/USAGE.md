<!-- Start SDK Example Usage -->
```typescript
import {
  GetaddressmatchRequest,
  GetaddressmatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetaddressmatchRequest = {
  address: "5786 Little Streets",
  license: "vel",
};

sdk.streetAddressSimilarityKey.getaddressmatch(req).then((res: GetaddressmatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->