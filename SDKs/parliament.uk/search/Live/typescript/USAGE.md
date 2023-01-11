<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDescriptionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.description.getDescription().then((res: GetDescriptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->