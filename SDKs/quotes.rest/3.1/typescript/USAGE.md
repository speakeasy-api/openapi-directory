<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteQuoteRequest, DeleteQuoteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteQuoteRequest = {
  security: {
    xTheySaidSoApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    id: "sit",
  },
};

sdk.privateQuotes.deleteQuote(req).then((res: DeleteQuoteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->