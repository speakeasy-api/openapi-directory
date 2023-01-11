<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ApplyYaraRulesRequest, ApplyYaraRulesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApplyYaraRulesRequest = {
  request: "sit",
};

sdk.applyYaraRules(req).then((res: ApplyYaraRulesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->