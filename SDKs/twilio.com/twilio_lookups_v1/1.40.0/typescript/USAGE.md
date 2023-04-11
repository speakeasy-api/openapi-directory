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
  addOns: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  addOnsData: {
    "nulla": "corrupti",
    "illum": "vel",
    "error": "deserunt",
  },
  countryCode: "suscipit",
  phoneNumber: "iure",
  type: [
    "debitis",
    "ipsa",
  ],
};

sdk.fetchPhoneNumber(req).then((res: FetchPhoneNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->