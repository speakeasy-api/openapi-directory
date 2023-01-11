<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddExpiryListingsRequest, AddExpiryListingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AddExpiryListingsRequest = {
  request: {
    aftermarketListingExpiryCreates: [
      "voluptas",
    ],
    applicationXML: "culpa".encode(),
    textXML: "expedita".encode(),
  },
};

sdk.v1.addExpiryListings(req).then((res: AddExpiryListingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->