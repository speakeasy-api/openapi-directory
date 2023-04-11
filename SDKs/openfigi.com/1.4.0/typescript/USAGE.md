<!-- Start SDK Example Usage -->
```typescript
import {
  GetMappingValuesKeyRequest,
  GetMappingValuesKeyResponse,
  GetMappingValuesKeyKeyEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetMappingValuesKeyRequest = {
  key: GetMappingValuesKeyKeyEnum.Currency,
};

sdk.getMappingValuesKey(req).then((res: GetMappingValuesKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->