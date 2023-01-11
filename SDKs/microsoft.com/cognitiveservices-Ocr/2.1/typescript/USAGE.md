<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchReadFileRequest, BatchReadFileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apimKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchReadFileRequest = {
  request: {
    url: "sit",
  },
};

sdk.batchReadFile(req).then((res: BatchReadFileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->