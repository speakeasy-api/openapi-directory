<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BaggageTripAndContactRequest, BaggageTripAndContactResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BaggageTripAndContactRequest = {
  security: {
    auth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    searchID: "sit",
  },
  headers: {
    accept: "voluptas",
  },
};

sdk.baggage.baggageTripAndContact(req).then((res: BaggageTripAndContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->