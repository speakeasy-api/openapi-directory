<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetareacodefromnumberRequest, GetareacodefromnumberResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetareacodefromnumberRequest = {
  queryParams: {
    license: "sit",
    number: "voluptas",
  },
};

sdk.areaCodeInformation.getareacodefromnumber(req).then((res: GetareacodefromnumberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->