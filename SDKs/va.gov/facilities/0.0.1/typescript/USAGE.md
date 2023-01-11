<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAllFacilitiesRequest, GetAllFacilitiesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetAllFacilitiesRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    accept: "application/geo+json",
  },
};

sdk.facilities.getAllFacilities(req).then((res: GetAllFacilitiesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->