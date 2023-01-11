<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVeteranStatusRequest, GetVeteranStatusResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVeteranStatusRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    birthDate: "sit",
    firstName: "voluptas",
    gender: "F",
    lastName: "expedita",
    middleName: "consequuntur",
    ssn: "dolor",
  },
};

sdk.veteranConfirmationStatus.getVeteranStatus(req).then((res: GetVeteranStatusResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->