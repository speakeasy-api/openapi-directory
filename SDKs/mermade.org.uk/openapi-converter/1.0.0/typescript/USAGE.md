<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ConvertRequest, ConvertResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConvertRequest = {
  request: {
    filename: "sit",
    source: "voluptas",
    validate: "on",
  },
};

sdk.conversion.convert(req).then((res: ConvertResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->