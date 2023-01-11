<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddressSearchRequest, AddressSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    userToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddressSearchRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
    userToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    filter: "sit",
    licensee: "voluptas",
    limit: 6050128673802995827,
    page: 501233450539197794,
    postcodeOutward: "consequuntur",
    query: "dolor",
  },
};

sdk.addresses.addressSearch(req).then((res: AddressSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->