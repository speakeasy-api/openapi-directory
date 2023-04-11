<!-- Start SDK Example Usage -->
```typescript
import {
  PostCompileRequest,
  PostCompileResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostCompileRequest = {
  requestBody: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  explain: "illum",
  instrument: false,
  metrics: false,
  pretty: false,
};

sdk.compileAPI.postCompile(req).then((res: PostCompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->