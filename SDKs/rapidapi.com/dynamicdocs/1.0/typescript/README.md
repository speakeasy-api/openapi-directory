# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/rapidapi.com/dynamicdocs/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/rapidapi.com/dynamicdocs/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pdfGeneration

* `compile` - Compile New Document PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

