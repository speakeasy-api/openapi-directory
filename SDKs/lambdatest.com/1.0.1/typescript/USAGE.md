<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DevicesRequest, DevicesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DevicesRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  queryParams: {
    os: "sit",
  },
};

sdk.getDevices.devices(req).then((res: DevicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->