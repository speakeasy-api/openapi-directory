# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/iamcredentials/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/iamcredentials/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest,
  IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest = {
  dollarXgafv: XgafvEnum.Two,
  generateAccessTokenRequest: {
    delegates: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
    lifetime: "nulla",
    scope: [
      "illum",
      "vel",
      "error",
    ],
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  name: "ipsa",
  oauthToken: "delectus",
  prettyPrint: false,
  quotaUser: "tempora",
  uploadType: "suscipit",
  uploadProtocol: "molestiae",
};

sdk.projects.iamcredentialsProjectsServiceAccountsGenerateAccessToken(req).then((res: IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `iamcredentialsProjectsServiceAccountsGenerateAccessToken` - Generates an OAuth 2.0 access token for a service account.
* `iamcredentialsProjectsServiceAccountsGenerateIdToken` - Generates an OpenID Connect ID token for a service account.
* `iamcredentialsProjectsServiceAccountsSignBlob` - Signs a blob using a service account's system-managed private key.
* `iamcredentialsProjectsServiceAccountsSignJwt` - Signs a JWT using a service account's system-managed private key.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

