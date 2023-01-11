<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddonsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.addons.addonsList().then((res: AddonsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->