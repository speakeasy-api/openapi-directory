# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/oslogin/v1alpha/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/oslogin/v1alpha/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  OsloginUsersGetLoginProfileRequest,
  OsloginUsersGetLoginProfileResponse,
  OsloginUsersGetLoginProfileOperatingSystemTypeEnum,
  OsloginUsersGetLoginProfileViewEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: OsloginUsersGetLoginProfileRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  name: "corrupti",
  oauthToken: "illum",
  operatingSystemType: OsloginUsersGetLoginProfileOperatingSystemTypeEnum.Linux,
  prettyPrint: false,
  projectId: "error",
  quotaUser: "deserunt",
  systemId: "suscipit",
  uploadType: "iure",
  uploadProtocol: "magnam",
  view: OsloginUsersGetLoginProfileViewEnum.SecurityKey,
};

sdk.users.osloginUsersGetLoginProfile(req).then((res: OsloginUsersGetLoginProfileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### users

* `osloginUsersGetLoginProfile` - Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
* `osloginUsersImportSshPublicKey` - Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
* `osloginUsersSshPublicKeysCreate` - Create an SSH public key
* `osloginUsersSshPublicKeysDelete` - Deletes an SSH public key.
* `osloginUsersSshPublicKeysGet` - Retrieves an SSH public key.
* `osloginUsersSshPublicKeysPatch` - Updates an SSH public key and returns the profile information. This method supports patch semantics.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

