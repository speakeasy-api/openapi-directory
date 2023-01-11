<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConvertRequest, ConvertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConvertRequest = {
  request: {
    hundredsForm: "sit",
    theNumber: "voluptas",
    unit: "culpa",
  },
};

sdk.convert(req).then((res: ConvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->