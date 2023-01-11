<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteCompanyAttendancesIdRequest, DeleteCompanyAttendancesIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteCompanyAttendancesIdRequest = {
  pathParams: {
    id: 8717895732742165505,
  },
};

sdk.deleteCompanyAttendancesId(req).then((res: DeleteCompanyAttendancesIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->