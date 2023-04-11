<!-- Start SDK Example Usage -->
```typescript
import {
  GetcompanymatchRequest,
  GetcompanymatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcompanymatchRequest = {
  company: "Medhurst - Rau",
  license: "quibusdam",
};

sdk.companyNameSimilarityKey.getcompanymatch(req).then((res: GetcompanymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->