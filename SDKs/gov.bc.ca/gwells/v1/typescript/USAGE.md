<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AquiferCodesDemandListRequest, AquiferCodesDemandListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    bearer: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AquiferCodesDemandListRequest = {
  queryParams: {
    limit: 8717895732742165505,
    offset: 2259404117704393152,
  },
};

sdk.aquiferCodes.aquiferCodesDemandList(req).then((res: AquiferCodesDemandListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->