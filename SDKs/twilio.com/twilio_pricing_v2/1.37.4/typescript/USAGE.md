<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FetchTrunkingCountryRequest, FetchTrunkingCountryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FetchTrunkingCountryRequest = {
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

sdk.fetchTrunkingCountry(req).then((res: FetchTrunkingCountryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->