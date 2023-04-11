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
  addressCountryCode: "corrupti",
  addressLine1: "provident",
  addressLine2: "distinctio",
  city: "New Orleans",
  countryCode: "nulla",
  dateOfBirth: "corrupti",
  fields: "illum",
  firstName: "Henry",
  lastName: "Mueller",
  nationalId: "deserunt",
  phoneNumber: "suscipit",
  postalCode: "28092",
  state: "suscipit",
};

sdk.fetchPhoneNumber(req).then((res: FetchPhoneNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->