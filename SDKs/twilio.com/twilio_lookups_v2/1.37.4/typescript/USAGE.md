<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchPhoneNumberRequest, FetchPhoneNumberResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchPhoneNumberRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    phoneNumber: "sit",
  },
  queryParams: {
    addressCountryCode: "voluptas",
    addressLine1: "culpa",
    addressLine2: "expedita",
    city: "consequuntur",
    countryCode: "dolor",
    dateOfBirth: "expedita",
    fields: "voluptas",
    firstName: "fugit",
    lastName: "et",
    nationalId: "nihil",
    postalCode: "rerum",
    state: "dicta",
  },
};

sdk.fetchPhoneNumber(req).then((res: FetchPhoneNumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->