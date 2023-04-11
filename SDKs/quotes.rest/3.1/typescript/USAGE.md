<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteQuoteRequest,
  DeleteQuoteResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteQuoteRequest = {
  id: "corrupti",
};

sdk.privateQuotes.deleteQuote(req).then((res: DeleteQuoteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->