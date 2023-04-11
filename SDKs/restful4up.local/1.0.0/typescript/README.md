# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/restful4up.local/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/restful4up.local/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `applyYaraRules` - apply given YARA rules to the given executable. (upto 10 rules)
* `clean` - clean up the uploaded files
* `emulationOutput` - try to get the emulation output after unpacking the file
* `generatePartialYaraRule` - generate partial YARA rules for give executable. (Rule without the condition section)
* `unpack` - try to unpack the given file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

