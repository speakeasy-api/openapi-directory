# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/okta.local/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/okta.local/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ClearUserSessionsRequest,
  ClearUserSessionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClearUserSessionsRequest = {
  requestBody: "corrupti".encode(),
  userId: "provident",
};

sdk.clearUserSessions(req).then((res: ClearUserSessionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `clearUserSessions` - Clear User Sessions
* `resetFactors` - Reset Factors

### createUser

* `createUserInGroup` - Create User in Group

### credentialOperations

* `changePassword` - Change Password
* `changeRecoveryQuestion` - Change Recovery Question
* `forgotPasswordOneTimeCode` - Forgot Password (One Time Code)
* `setRecoveryCredential` - Set Recovery Credential

### lifecycleOperations

* `activateUser` - Activate User
* `deactivateUser` - Deactivate User
* `resetPassword` - Reset Password
* `setTempPassword` - Set Temp Password
* `suspendUser` - Suspend User
* `unlockUser` - Unlock User
* `unsuspendUser` - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

