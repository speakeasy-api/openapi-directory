<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { KeysApiCurrentRequest, KeysApiCurrentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: KeysApiCurrentRequest = {
  pathParams: {
    serial: "sit",
  },
};

sdk.keysApi.keysApiCurrent(req).then((res: KeysApiCurrentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->