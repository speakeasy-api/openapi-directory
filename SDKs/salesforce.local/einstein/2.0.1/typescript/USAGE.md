<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GenerateTokenV2Request, GenerateTokenV2Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GenerateTokenV2Request = {
  request: {
    assertion: "sit",
    grantType: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    refreshToken: "culpa",
    scope: "expedita",
    validFor: 3390393562759376202,
  },
};

sdk.authorization.generateTokenV2(req).then((res: GenerateTokenV2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->