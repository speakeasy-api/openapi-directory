<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteContentRequest, DeleteContentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteContentRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    sid: "sit",
  },
};

sdk.deleteContent(req).then((res: DeleteContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->