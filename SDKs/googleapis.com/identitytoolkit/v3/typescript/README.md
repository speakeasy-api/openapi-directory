# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  IdentitytoolkitRelyingpartyCreateAuthUriRequest,
  IdentitytoolkitRelyingpartyCreateAuthUriResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdentitytoolkitRelyingpartyCreateAuthUriRequest = {
  identitytoolkitRelyingpartyCreateAuthUriRequest: {
    appId: "corrupti",
    authFlowType: "provident",
    clientId: "distinctio",
    context: "quibusdam",
    continueUri: "unde",
    customParameter: {
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
    },
    hostedDomain: "debitis",
    identifier: "ipsa",
    oauthConsumerKey: "delectus",
    oauthScope: "tempora",
    openidRealm: "suscipit",
    otaApp: "molestiae",
    providerId: "minus",
    sessionId: "placeat",
    tenantId: "voluptatum",
    tenantProjectNumber: "iusto",
  },
  alt: AltEnum.Json,
  fields: "excepturi",
  key: "nisi",
  oauthToken: "recusandae",
  prettyPrint: false,
  quotaUser: "temporibus",
  userIp: "ab",
};

sdk.relyingparty.identitytoolkitRelyingpartyCreateAuthUri(req).then((res: IdentitytoolkitRelyingpartyCreateAuthUriResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### relyingparty

* `identitytoolkitRelyingpartyCreateAuthUri` - Creates the URI used by the IdP to authenticate the user.
* `identitytoolkitRelyingpartyDeleteAccount` - Delete user account.
* `identitytoolkitRelyingpartyDownloadAccount` - Batch download user accounts.
* `identitytoolkitRelyingpartyEmailLinkSignin` - Reset password for a user.
* `identitytoolkitRelyingpartyGetAccountInfo` - Returns the account info.
* `identitytoolkitRelyingpartyGetOobConfirmationCode` - Get a code for user action confirmation.
* `identitytoolkitRelyingpartyGetProjectConfig` - Get project configuration.
* `identitytoolkitRelyingpartyGetPublicKeys` - Get token signing public key.
* `identitytoolkitRelyingpartyGetRecaptchaParam` - Get recaptcha secure param.
* `identitytoolkitRelyingpartyResetPassword` - Reset password for a user.
* `identitytoolkitRelyingpartySendVerificationCode` - Send SMS verification code.
* `identitytoolkitRelyingpartySetAccountInfo` - Set account info for a user.
* `identitytoolkitRelyingpartySetProjectConfig` - Set project configuration.
* `identitytoolkitRelyingpartySignOutUser` - Sign out user.
* `identitytoolkitRelyingpartySignupNewUser` - Signup new user.
* `identitytoolkitRelyingpartyUploadAccount` - Batch upload existing user accounts.
* `identitytoolkitRelyingpartyVerifyAssertion` - Verifies the assertion returned by the IdP.
* `identitytoolkitRelyingpartyVerifyCustomToken` - Verifies the developer asserted ID token.
* `identitytoolkitRelyingpartyVerifyPassword` - Verifies the user entered password.
* `identitytoolkitRelyingpartyVerifyPhoneNumber` - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

