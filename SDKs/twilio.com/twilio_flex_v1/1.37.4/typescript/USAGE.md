<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAssessmentsRequest, CreateAssessmentsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAssessmentsRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
};

sdk.createAssessments(req).then((res: CreateAssessmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->