<!-- Start SDK Example Usage -->
```typescript
import {
  FetchUserRequest,
  FetchUserResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchUserRequest = {
  sid: "corrupti",
};

sdk.fetchUser(req).then((res: FetchUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->