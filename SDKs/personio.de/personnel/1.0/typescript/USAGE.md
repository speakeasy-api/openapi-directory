<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteCompanyAttendancesIdRequest,
  DeleteCompanyAttendancesIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteCompanyAttendancesIdRequest = {
  id: 548814,
};

sdk.deleteCompanyAttendancesId(req).then((res: DeleteCompanyAttendancesIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->