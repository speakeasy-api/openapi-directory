<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAEAssessmentRequest,
  DeleteAEAssessmentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAEAssessmentRequest = {
  aeAssessmentId: "corrupti",
  apiVersion: "provident",
  authorization: "distinctio",
  employeeId: "quibusdam",
  employerId: "unde",
};

sdk.aeAssessment.deleteAEAssessment(req).then((res: DeleteAEAssessmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->