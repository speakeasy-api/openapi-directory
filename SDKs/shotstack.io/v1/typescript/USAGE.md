<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetRenderRequest, GetRenderResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetRenderRequest = {
  security: {
    developerKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.edit.getRender(req).then((res: GetRenderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->