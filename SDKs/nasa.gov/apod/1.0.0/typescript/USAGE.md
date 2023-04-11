<!-- Start SDK Example Usage -->
```typescript
import {
  GetApodRequest,
  GetApodResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetApodRequest = {
  date: "corrupti",
  hd: false,
};

sdk.requestTag.getApod(req).then((res: GetApodResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->