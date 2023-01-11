<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAssetRequest, CreateAssetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAssetRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    serviceSid: "sit",
  },
  request: {
    friendlyName: "voluptas",
  },
};

sdk.createAsset(req).then((res: CreateAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->