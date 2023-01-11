<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVaccineStatusRequest, GetVaccineStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVaccineStatusRequest = {
  headers: {
    accept: "sit",
    authorization: "voluptas",
    contentType: "culpa",
  },
  request: {
    patientId: "expedita",
  },
};

sdk.brasilApi.getVaccineStatus(req).then((res: GetVaccineStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->