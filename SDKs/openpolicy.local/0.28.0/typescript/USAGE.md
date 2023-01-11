<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostCompileRequest, PostCompileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostCompileRequest = {
  queryParams: {
    explain: "sit",
    instrument: false,
    metrics: true,
    pretty: false,
  },
  request: {
    "dolor": "expedita",
    "voluptas": "fugit",
    "et": "nihil",
  },
};

sdk.compileAPI.postCompile(req).then((res: PostCompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->