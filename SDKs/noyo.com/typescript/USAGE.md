<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.ping().then((res: PingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->