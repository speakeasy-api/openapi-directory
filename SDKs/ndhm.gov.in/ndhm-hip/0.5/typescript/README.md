# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hip/0.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hip/0.5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetV05WellKnownOpenidConfigurationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.gateway.getV05WellKnownOpenidConfiguration().then((res: GetV05WellKnownOpenidConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### gateway

* `getV05WellKnownOpenidConfiguration` - Get openid configuration
* `getV05Certs` - Get certs for JWT verification
* `postV05CareContextsOnDiscoverJson` - Response to patient's account discovery request
* `postV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request
* `postV05ConsentsHipOnNotifyJson` - Consent notification
* `postV05ConsentsHipOnNotifyRaw` - Consent notification
* `postV05HealthInformationHipOnRequestJson` - Health information data request
* `postV05HealthInformationHipOnRequestRaw` - Health information data request
* `postV05HealthInformationNotifyJson` - Notifications corresponding to events during data flow
* `postV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `postV05LinksLinkAddContextsJson` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkOnConfirmJson` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInitJson` - Response to patient's care context link request
* `postV05LinksLinkOnInitRaw` - Response to patient's care context link request
* `postV05PatientsProfileOnShareJson` - Response to patient's share profile request
* `postV05PatientsProfileOnShareRaw` - Response to patient's share profile request
* `postV05PatientsSmsNotifyJson` - API for HIP to send SMS notifications to patients
* `postV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `postV05SessionsJson` - Get access token
* `postV05SessionsRaw` - Get access token
* `postV05UsersAuthConfirmJson` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInitJson` - Initialize authentication from HIP
* `postV05UsersAuthInitRaw` - Initialize authentication from HIP
* `postV05UsersAuthOnNotifyJson` - callback API by HIU/HIPs as acknowledgement of auth notification
* `postV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### consentFlow

* `postV05ConsentsHipNotifyJson` - Consent notification
* `postV05ConsentsHipNotifyRaw` - Consent notification

### dataFlow

* `postV05HealthInformationHipRequestJson` - Health information data request
* `postV05HealthInformationHipRequestRaw` - Health information data request

### dataTransfer

* `postV05HealthInformationTransferJson` - health information transfer API
* `postV05HealthInformationTransferRaw` - health information transfer API

### discovery

* `postV05CareContextsDiscoverJson` - Discover patient's accounts
* `postV05CareContextsDiscoverRaw` - Discover patient's accounts

### link

* `postV05LinksLinkConfirmJson` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkInitJson` - Link patient's care contexts
* `postV05LinksLinkInitRaw` - Link patient's care contexts
* `postV05LinksLinkOnAddContextsJson` - callback API for HIP initiated patient linking /link/add-context
* `postV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context

### monitoring

* `getV05Heartbeat` - Get consent request status

### patientNotification

* `postV05PatientsSmsOnNotifyJson` - Acknowledgment response for SMS notification sent to patient by HIP
* `postV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP

### profile

* `postV05PatientsProfileShareJson` - Share patient profile details
* `postV05PatientsProfileShareRaw` - Share patient profile details

### userAuth

* `postV05UsersAuthNotifyJson` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthOnConfirmJson` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnFetchModesJson` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnInitJson` - Response to user authentication initialization from HIP
* `postV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

