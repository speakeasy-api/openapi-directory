<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CompileRequest, CompileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    advSecurityToken: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CompileRequest = {
  pathParams: {
    templateToken: "sit",
  },
  queryParams: {
    docFileName: "voluptas",
    docUrlExpiresIn: 6050128673802995827,
    latexCompiler: "pdflatex",
    latexRuns: 3390393562759376202,
    mainFileName: "dolor",
  },
  headers: {
    contentType: "expedita",
  },
  request: {
    "fugit": "et",
    "nihil": "rerum",
    "dicta": "debitis",
  },
};

sdk.pdfGeneration.compile(req).then((res: CompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->