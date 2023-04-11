# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/certificates/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/certificates/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CertificateActionRetrieveRequest,
  CertificateActionRetrieveResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CertificateActionRetrieveRequest = {
  certificateId: "corrupti",
};

sdk.v1.certificateActionRetrieve(req).then((res: CertificateActionRetrieveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `certificateActionRetrieve` - Retrieve all certificate actions
* `certificateAlternateEmailAddress` - Add alternate email address
* `certificateCallbackDelete` - Unregister system callback
* `certificateCallbackGet` - Retrieve system stateful action callback url
* `certificateCallbackReplace` - Register of certificate action callback
* `certificateCancel` - Cancel a pending certificate
* `certificateCreate` - Create a pending order for certificate
* `certificateDownload` - Download certificate
* `certificateDownloadEntitlement` - Download certificate by entitlement
* `certificateEmailHistory` - Retrieve email history
* `certificateGet` - Retrieve certificate details
* `certificateGetEntitlement` - Search for certificate details by entitlement
* `certificateReissue` - Reissue active certificate
* `certificateRenew` - Renew active certificate
* `certificateResendEmail` - Resend an email
* `certificateResendEmailAddress` - Resend email to email address
* `certificateRevoke` - Revoke active certificate
* `certificateSitesealGet` - Get Site seal
* `certificateValidate` - Validate a pending order for certificate
* `certificateVerifydomaincontrol` - Check Domain Control

### v2

* `getAcmeExternalAccountBinding` - Retrieves the external account binding for the specified customer
* `getCertificateDetailByCertIdentifier` - Retrieve individual certificate details
* `getCustomerCertificatesByCustomerId` - Retrieve customer's certificates
* `getDomainDetailsByDomain` - Retrieve detailed information for supplied domain
* `getDomainInformationByCertificateId` - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

