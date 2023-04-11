<!-- Start SDK Example Usage -->
```typescript
import {
  GetcountrymatchRequest,
  GetcountrymatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetcountrymatchRequest = {
  country: "Malta",
  license: "provident",
};

sdk.countryMatchSimilarityKey.getcountrymatch(req).then((res: GetcountrymatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->