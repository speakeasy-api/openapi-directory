<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetV05WellKnownOpenidConfigurationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.gateway.getV05WellKnownOpenidConfiguration().then((res: GetV05WellKnownOpenidConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->