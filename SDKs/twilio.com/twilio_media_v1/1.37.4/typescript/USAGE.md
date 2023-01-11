<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateMediaProcessorRequest, CreateMediaProcessorResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateMediaProcessorRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    extension: "sit",
    extensionContext: "voluptas",
    extensionEnvironment: "culpa",
    maxDuration: 501233450539197794,
    statusCallback: "consequuntur",
    statusCallbackMethod: "PUT",
  },
};

sdk.createMediaProcessor(req).then((res: CreateMediaProcessorResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->