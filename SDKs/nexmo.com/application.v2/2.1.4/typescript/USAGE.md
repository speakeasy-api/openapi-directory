<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateApplicationRequest, CreateApplicationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: CreateApplicationRequest = {
  request: "sit",
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->