# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hiu/0.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hiu/0.5/typescript
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
* `postV05ConsentRequestsInitJson` - Create consent request
* `postV05ConsentRequestsInitRaw` - Create consent request
* `postV05ConsentRequestsStatusJson` - Get consent request status
* `postV05ConsentRequestsStatusRaw` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHiuOnNotify` - Consent notification
* `postV05HealthInformationCmRequestJson` - Health information data request
* `postV05HealthInformationCmRequestRaw` - Health information data request
* `postV05HealthInformationNotifyJson` - Notifications corresponding to events during data flow
* `postV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `postV05PatientsFindJson` - Identify a patient by her consent-manager user-id
* `postV05PatientsFindRaw` - Identify a patient by her consent-manager user-id
* `postV05SessionsJson` - Get access token
* `postV05SessionsRaw` - Get access token
* `postV05SubscriptionRequestsCmInitJson` - Request for subscription
* `postV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `postV05UsersAuthConfirmJson` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInitJson` - Initialize authentication from HIP
* `postV05UsersAuthInitRaw` - Initialize authentication from HIP
* `postV05UsersAuthOnNotifyJson` - callback API by HIU/HIPs as acknowledgement of auth notification
* `postV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### consentFlow

* `postV05ConsentRequestsOnInitJson` - Response to consent request
* `postV05ConsentRequestsOnInitRaw` - Response to consent request
* `postV05ConsentRequestsOnStatusJson` - Result of consent request status
* `postV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `postV05ConsentsHiuNotify` - Consent notification
* `postV05ConsentsOnFetchJson` - Result of fetch request for a consent artefact
* `postV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact

### dataFlow

* `postV05HealthInformationHiuOnRequestJson` - Health information data request
* `postV05HealthInformationHiuOnRequestRaw` - Health information data request
* `postV05HealthInformationTransferJson` - health information transfer API
* `postV05HealthInformationTransferRaw` - health information transfer API

### identification

* `postV05PatientsOnFindJson` - Identification result for a consent-manager user-id
* `postV05PatientsOnFindRaw` - Identification result for a consent-manager user-id

### monitoring

* `getV05Heartbeat` - Get consent request status

### subscriptions

* `postV05SubscriptionRequestsHiuNotifyJson` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `postV05SubscriptionsHiuNotifyJson` - Notification to HIU on basis of a granted subscription
* `postV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription

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

