<!-- Start SDK Example Usage -->
```typescript
import {
  GetAddressRequest,
  GetAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAddressRequest = {
  address: "5786 Little Streets",
};

sdk.getAddress(req).then((res: GetAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->