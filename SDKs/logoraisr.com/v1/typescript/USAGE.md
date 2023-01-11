<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PreviewsReadRequest, PreviewsReadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    token: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PreviewsReadRequest = {
  pathParams: {
    fileId: "sit",
  },
};

sdk.previews.previewsRead(req).then((res: PreviewsReadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->