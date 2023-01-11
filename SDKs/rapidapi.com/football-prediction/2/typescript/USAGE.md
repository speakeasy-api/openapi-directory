<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetApiV2ListFederationsRequest, GetApiV2ListFederationsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetApiV2ListFederationsRequest = {
  headers: {
    xRapidApiKey: "sit",
  },
};

sdk.getApiV2ListFederations(req).then((res: GetApiV2ListFederationsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->