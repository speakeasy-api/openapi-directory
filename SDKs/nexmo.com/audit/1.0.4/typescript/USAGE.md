<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEventRequest, GetEventResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetEventRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    id: "sit",
  },
};

sdk.getEvent(req).then((res: GetEventResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->