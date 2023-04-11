<!-- Start SDK Example Usage -->
```typescript
import {
  GetFamilyDetailsRequest,
  GetFamilyDetailsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFamilyDetailsRequest = {
  ocpApimSubscriptionKey: "{{apiKey}}",
  id: "{family_id}",
};

sdk.languageModelDirectAccess.getFamilyDetails(req).then((res: GetFamilyDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->