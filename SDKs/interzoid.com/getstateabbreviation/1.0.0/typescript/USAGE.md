<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetstateabbreviationRequest, GetstateabbreviationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetstateabbreviationRequest = {
  queryParams: {
    license: "sit",
    state: "voluptas",
  },
};

sdk.stateDataStandardization.getstateabbreviation(req).then((res: GetstateabbreviationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->