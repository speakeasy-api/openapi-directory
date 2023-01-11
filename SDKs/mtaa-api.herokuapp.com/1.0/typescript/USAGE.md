<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DistrictsInARegionRequest, DistrictsInARegionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DistrictsInARegionRequest = {
  pathParams: {
    country: "sit",
    region: "voluptas",
  },
};

sdk.districtsInRegion.districtsInARegion(req).then((res: DistrictsInARegionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->