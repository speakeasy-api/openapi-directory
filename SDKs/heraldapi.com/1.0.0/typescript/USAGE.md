<!-- Start SDK Example Usage -->
```typescript
import {
  GetApplicationsApplicationIdRequest,
  GetApplicationsApplicationIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    bearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetApplicationsApplicationIdRequest = {
  applicationId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.applications.getApplicationsApplicationId(req).then((res: GetApplicationsApplicationIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->