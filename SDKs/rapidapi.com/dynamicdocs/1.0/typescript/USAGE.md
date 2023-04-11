<!-- Start SDK Example Usage -->
```typescript
import {
  CompileRequest,
  CompileResponse,
  CompileLatexCompilerEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    advSecurityToken: "YOUR_API_KEY_HERE",
  },
});

const req: CompileRequest = {
  contentType: "application/json",
  requestBody: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  docFileName: "brilliantDocument",
  docUrlExpiresIn: 3600,
  latexCompiler: CompileLatexCompilerEnum.Lualatex,
  latexRuns: 423655,
  mainFileName: "inputFile.tex",
  templateToken: "7a582350acb835ed",
};

sdk.pdfGeneration.compile(req).then((res: CompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->