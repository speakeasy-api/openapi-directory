<!-- Start SDK Example Usage -->
```typescript
import {
  ApplyYaraRulesRequestBody,
  ApplyYaraRulesResponse,
  ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApplyYaraRulesRequestBody = {
  file: {
    content: "corrupti".encode(),
    file: "provident",
  },
  isUnpackingRequired: ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum.False,
  rules: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
};

sdk.applyYaraRules(req).then((res: ApplyYaraRulesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->