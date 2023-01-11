<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetOpenApiSpecResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.general.getOpenApiSpec().then((res: GetOpenApiSpecResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->