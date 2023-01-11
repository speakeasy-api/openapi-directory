<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetMappingValuesKeyRequest, GetMappingValuesKeyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetMappingValuesKeyRequest = {
  pathParams: {
    key: "securityType",
  },
};

sdk.getMappingValuesKey(req).then((res: GetMappingValuesKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->