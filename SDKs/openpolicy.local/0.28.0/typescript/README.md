# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openpolicy.local/0.28.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/openpolicy.local/0.28.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### compileAPI

* `postCompile` - Compile

### configAPI

* `getConfig` - Get configurations

### dataAPI

* `deleteDocument` - Delete a document
* `getDocument` - Get a document
* `getDocumentWithPath` - Get a document (with input)
* `getDocumentWithWebHook` - Get a document (with webhook)
* `patchDocument` - Update a document
* `putDocument` - Create or overwrite a document

### healthAPI

* `getHealth` - Health

### policyAPI

* `deletePolicyModule` - Delete a policy module
* `getPolicies` - List policies
* `getPolicyModule` - Get a policy module
* `putPolicyModule` - Create or update a policy module

### queryAPI

* `getQuery` - Execute an ad-hoc query (simple)
* `postQuery` - Execute an ad-hoc query (complex)
* `postSimpleQuery` - Execute a simple query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

