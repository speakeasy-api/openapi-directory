<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFamilyDetailsRequest, GetFamilyDetailsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFamilyDetailsRequest = {
  queryParams: {
    id: "sit",
  },
};

sdk.languageModelDirectAccess.getFamilyDetails(req).then((res: GetFamilyDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->