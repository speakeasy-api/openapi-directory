<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SendAnSmsRequest, SendAnSmsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SendAnSmsRequest = {
  pathParams: {
    format: "json",
  },
  request: "voluptas",
};

sdk.sendAnSms(req).then((res: SendAnSmsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->