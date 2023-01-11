<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetglobalnumberinfoRequest, GetglobalnumberinfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetglobalnumberinfoRequest = {
  queryParams: {
    intlnumber: "sit",
    license: "voluptas",
  },
};

sdk.globalPhoneNumberInformation.getglobalnumberinfo(req).then((res: GetglobalnumberinfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->