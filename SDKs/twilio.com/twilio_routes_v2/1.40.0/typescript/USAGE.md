<!-- Start SDK Example Usage -->
```typescript
import {
  FetchPhoneNumberRequest,
  FetchPhoneNumberResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FetchPhoneNumberRequest = {
  phoneNumber: "corrupti",
};

sdk.fetchPhoneNumber(req).then((res: FetchPhoneNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->