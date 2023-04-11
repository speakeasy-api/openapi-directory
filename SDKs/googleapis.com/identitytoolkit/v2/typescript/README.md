# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/identitytoolkit/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest,
  IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: {
    displayName: "provident",
    idToken: "distinctio",
    phoneVerificationInfo: {
      androidVerificationProof: "quibusdam",
      code: "unde",
      phoneNumber: "nulla",
      sessionInfo: "corrupti",
    },
    tenantId: "illum",
    totpVerificationInfo: {
      sessionInfo: "vel",
      verificationCode: "error",
    },
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "magnam",
  key: "debitis",
  oauthToken: "ipsa",
  prettyPrint: false,
  quotaUser: "delectus",
  uploadType: "tempora",
  uploadProtocol: "suscipit",
};

sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req).then((res: IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `identitytoolkitAccountsMfaEnrollmentFinalize` - Finishes enrolling a second factor for the user.
* `identitytoolkitAccountsMfaEnrollmentStart` - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
* `identitytoolkitAccountsMfaEnrollmentWithdraw` - Revokes one second factor from the enrolled second factors for an account.
* `identitytoolkitAccountsMfaSignInFinalize` - Verifies the MFA challenge and performs sign-in
* `identitytoolkitAccountsMfaSignInStart` - Sends the MFA challenge

### defaultSupportedIdps

* `identitytoolkitDefaultSupportedIdpsList` - List all default supported Idps.

### projects

* `identitytoolkitProjectsIdentityPlatformInitializeAuth` - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
* `identitytoolkitProjectsTenantsCreate` - Create a tenant. Requires write permission on the Agent project.
* `identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate` - Create a default supported Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList` - List all default supported Idp configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsGetIamPolicy` - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
* `identitytoolkitProjectsTenantsInboundSamlConfigsCreate` - Create an inbound SAML configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsInboundSamlConfigsList` - List all inbound SAML configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsList` - List tenants under the given agent project. Requires read permission on the Agent project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsCreate` - Create an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsDelete` - Delete an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsGet` - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsList` - List all Oidc Idp configurations for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsOauthIdpConfigsPatch` - Update an Oidc Idp configuration for an Identity Toolkit project.
* `identitytoolkitProjectsTenantsSetIamPolicy` - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
* `identitytoolkitProjectsTenantsTestIamPermissions` - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

