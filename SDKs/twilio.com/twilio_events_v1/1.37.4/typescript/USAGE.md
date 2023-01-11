<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateSinkRequest, CreateSinkResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateSinkRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    description: "sit",
    sinkConfiguration: "voluptas",
    sinkType: "webhook",
  },
};

sdk.createSink(req).then((res: CreateSinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->