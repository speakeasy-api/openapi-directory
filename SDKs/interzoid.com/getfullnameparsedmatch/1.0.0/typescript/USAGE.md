<!-- Start SDK Example Usage -->
```typescript
import {
  GetfullnameparsedmatchRequest,
  GetfullnameparsedmatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetfullnameparsedmatchRequest = {
  firstname: "Katharina",
  lastname: "Medhurst",
  license: "distinctio",
};

sdk.fullNameParsedSimilarityKey.getfullnameparsedmatch(req).then((res: GetfullnameparsedmatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->