<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AnimateImageRequest, AnimateImageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnimateImageRequest = {
  queryParams: {
    type: "sit",
    url: "voluptas",
  },
};

sdk.animateImage(req).then((res: AnimateImageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->