<!-- Start SDK Example Usage -->
```typescript
import {
  shared.VeteranStatusRequest,
  GetVeteranStatusResponse
} from "openapi/dist/sdk/models/operations";
import {
  VeteranStatusRequestGenderEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.VeteranStatusRequest = {
  birthDate: "1965-01-01",
  firstName: "John",
  gender: VeteranStatusRequestGenderEnum.M,
  lastName: "Doe",
  middleName: "Theodore",
  ssn: "555-55-5555",
};

sdk.veteranConfirmationStatus.getVeteranStatus(req).then((res: GetVeteranStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->