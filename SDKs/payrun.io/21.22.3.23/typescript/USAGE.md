<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAeAssessmentRequest, DeleteAeAssessmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAeAssessmentRequest = {
  pathParams: {
    aeAssessmentId: "sit",
    employeeId: "voluptas",
    employerId: "culpa",
  },
  headers: {
    apiVersion: "expedita",
    authorization: "consequuntur",
  },
};

sdk.aeAssessment.deleteAeAssessment(req).then((res: DeleteAeAssessmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->