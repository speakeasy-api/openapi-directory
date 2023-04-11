# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudasset/v1p4beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudasset/v1p4beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudassetAnalyzeIamPolicyRequest,
  CloudassetAnalyzeIamPolicyResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudassetAnalyzeIamPolicyRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  analysisQueryAccessSelectorPermissions: [
    "unde",
    "nulla",
    "corrupti",
    "illum",
  ],
  analysisQueryAccessSelectorRoles: [
    "error",
    "deserunt",
  ],
  analysisQueryIdentitySelectorIdentity: "suscipit",
  analysisQueryResourceSelectorFullResourceName: "iure",
  callback: "magnam",
  fields: "debitis",
  key: "ipsa",
  oauthToken: "delectus",
  optionsAnalyzeServiceAccountImpersonation: false,
  optionsExecutionTimeout: "tempora",
  optionsExpandGroups: false,
  optionsExpandResources: false,
  optionsExpandRoles: false,
  optionsOutputGroupEdges: false,
  optionsOutputResourceEdges: false,
  parent: "suscipit",
  prettyPrint: false,
  quotaUser: "molestiae",
  uploadType: "minus",
  uploadProtocol: "placeat",
};

sdk.v1p4beta1.cloudassetAnalyzeIamPolicy(req).then((res: CloudassetAnalyzeIamPolicyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1p4beta1

* `cloudassetAnalyzeIamPolicy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `cloudassetExportIamPolicyAnalysis` - Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

