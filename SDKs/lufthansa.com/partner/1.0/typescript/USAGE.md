<!-- Start SDK Example Usage -->
```typescript
import {
  BaggageTripAndContactRequest,
  BaggageTripAndContactResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BaggageTripAndContactRequest = {
  accept: "corrupti",
  searchID: "provident",
};

sdk.baggage.baggageTripAndContact(req).then((res: BaggageTripAndContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->