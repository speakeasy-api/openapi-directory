<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchMessagingCountryRequest, FetchMessagingCountryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchMessagingCountryRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    isoCountry: "sit",
  },
};

sdk.fetchMessagingCountry(req).then((res: FetchMessagingCountryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->