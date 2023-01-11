<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetEnvironmentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.getEnvironment().then((res: GetEnvironmentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->