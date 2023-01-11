<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFrontendSettingsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.frontend.getFrontendSettings().then((res: GetFrontendSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->