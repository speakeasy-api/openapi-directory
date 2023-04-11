<!-- Start SDK Example Usage -->
```typescript
import {
  GetfullnamematchRequest,
  GetfullnamematchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetfullnamematchRequest = {
  fullname: "corrupti",
  license: "provident",
};

sdk.fullNameMatchSimilarityKey.getfullnamematch(req).then((res: GetfullnamematchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->