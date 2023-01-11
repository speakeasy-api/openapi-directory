<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetProfileRequest, GetProfileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetProfileRequest = {
  queryParams: {
    id: "sit",
    service: "voluptas",
  },
};

sdk.getProfile(req).then((res: GetProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->