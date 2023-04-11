<!-- Start SDK Example Usage -->
```typescript
import {
  GetV05WellKnownOpenidConfigurationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.gateway.getV05WellKnownOpenidConfiguration().then((res: GetV05WellKnownOpenidConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->