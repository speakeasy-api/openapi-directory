# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/policytroubleshooter/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/policytroubleshooter/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PolicytroubleshooterIamTroubleshootRequest,
  PolicytroubleshooterIamTroubleshootResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PolicytroubleshooterIamTroubleshootRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest: {
    accessTuple: {
      fullResourceName: "provident",
      permission: "distinctio",
      principal: "quibusdam",
    },
  },
  accessToken: "unde",
  alt: AltEnum.Proto,
  callback: "corrupti",
  fields: "illum",
  key: "vel",
  oauthToken: "error",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "suscipit",
  uploadProtocol: "iure",
};

sdk.iam.policytroubleshooterIamTroubleshoot(req).then((res: PolicytroubleshooterIamTroubleshootResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### iam

* `policytroubleshooterIamTroubleshoot` - Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

