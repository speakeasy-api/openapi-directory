<!-- Start SDK Example Usage -->
```typescript
import {
  GetProfileRequest,
  GetProfileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetProfileRequest = {
  id: "{{your-member-id}}",
  service: "{{service-identifier}}",
};

sdk.getProfile(req).then((res: GetProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->