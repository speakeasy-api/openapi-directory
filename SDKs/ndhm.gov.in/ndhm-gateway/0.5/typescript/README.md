# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-gateway/0.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-gateway/0.5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PostV05CareContextsDiscoverJsonRequest,
  PostV05CareContextsDiscoverJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  IdentifierTypeEnum,
  PatientGenderEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostV05CareContextsDiscoverJsonRequest = {
  authorization: "corrupti",
  patientDiscoveryRequest: {
    patient: {
      gender: PatientGenderEnum.O,
      id: "<patient-id>@<consent-manager-id>",
      name: "chandler bing",
      unverifiedIdentifiers: [
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.NdhmHealthNumber,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
      ],
      verifiedIdentifiers: [
        {
          type: IdentifierTypeEnum.HealthId,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.Mr,
          value: "+919800083232",
        },
        {
          type: IdentifierTypeEnum.NdhmHealthNumber,
          value: "+919800083232",
        },
      ],
      yearOfBirth: 2000,
    },
    requestId: "499a5a4a-7dda-4f20-9b67-e24589627061",
    timestamp: "2022-03-26T09:37:56.283Z",
    transactionId: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
  },
  xHipId: "quod",
};

sdk.cmFacing.postV05CareContextsDiscoverJson(req).then((res: PostV05CareContextsDiscoverJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cmFacing

* `postV05CareContextsDiscoverJson` - Discover patient's accounts
* `postV05CareContextsDiscoverRaw` - Discover patient's accounts
* `postV05CareContextsOnDiscoverJson` - Response to patient's account discovery request
* `postV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request
* `postV05ConsentRequestsOnInitJson` - Response to consent request
* `postV05ConsentRequestsOnInitRaw` - Response to consent request
* `postV05ConsentRequestsOnStatusJson` - Result of consent request status
* `postV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `postV05ConsentsHipNotifyJson` - Consent notification
* `postV05ConsentsHipNotifyRaw` - Consent notification
* `postV05ConsentsHiuNotify` - Consent notification
* `postV05ConsentsOnFetchJson` - Result of fetch request for a consent artefact
* `postV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact
* `postV05HealthInformationCmOnRequestJson` - Health information data request
* `postV05HealthInformationCmOnRequestRaw` - Health information data request
* `postV05HealthInformationHipRequestJson` - Health information data request
* `postV05HealthInformationHipRequestRaw` - Health information data request
* `postV05LinksLinkConfirmJson` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkInitJson` - Link patient's care contexts
* `postV05LinksLinkInitRaw` - Link patient's care contexts
* `postV05LinksLinkOnAddContextsJson` - callback API for HIP initiated patient linking /link/add-context
* `postV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context
* `postV05PatientsOnFindJson` - Identification result for a consent-manager user-id
* `postV05PatientsOnFindRaw` - Identification result for a consent-manager user-id
* `postV05PatientsProfileShareJson` - Share patient profile details
* `postV05PatientsProfileShareRaw` - Share patient profile details
* `postV05PatientsSmsOnNotifyJson` - Acknowledgment response for SMS notification sent to patient by HIP
* `postV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP
* `postV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `postV05SubscriptionRequestsHiuNotifyJson` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionsHiuNotifyJson` - Notification to HIU on basis of a granted subscription
* `postV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription
* `postV05UsersAuthNotifyJson` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthOnConfirmJson` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnFetchModesJson` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnInitJson` - Response to user authentication initialization from HIP
* `postV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP

### consentFlow

* `postV05ConsentRequestsInitJson` - Create consent request
* `postV05ConsentRequestsInitRaw` - Create consent request
* `postV05ConsentRequestsOnInitJson` - Response to consent request
* `postV05ConsentRequestsOnInitRaw` - Response to consent request
* `postV05ConsentRequestsOnStatusJson` - Result of consent request status
* `postV05ConsentRequestsOnStatusRaw` - Result of consent request status
* `postV05ConsentRequestsStatusJson` - Get consent request status
* `postV05ConsentRequestsStatusRaw` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHipNotifyJson` - Consent notification
* `postV05ConsentsHipNotifyRaw` - Consent notification
* `postV05ConsentsHipOnNotifyJson` - Consent notification
* `postV05ConsentsHipOnNotifyRaw` - Consent notification
* `postV05ConsentsHiuNotify` - Consent notification
* `postV05ConsentsHiuOnNotify` - Consent notification
* `postV05ConsentsOnFetchJson` - Result of fetch request for a consent artefact
* `postV05ConsentsOnFetchRaw` - Result of fetch request for a consent artefact

### dataFlow

* `postV05HealthInformationCmOnRequestJson` - Health information data request
* `postV05HealthInformationCmOnRequestRaw` - Health information data request
* `postV05HealthInformationCmRequestJson` - Health information data request
* `postV05HealthInformationCmRequestRaw` - Health information data request
* `postV05HealthInformationHipOnRequestJson` - Health information data request
* `postV05HealthInformationHipOnRequestRaw` - Health information data request
* `postV05HealthInformationHipRequestJson` - Health information data request
* `postV05HealthInformationHipRequestRaw` - Health information data request
* `postV05HealthInformationNotifyJson` - Notifications corresponding to events during data flow
* `postV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow

### discovery

* `postV05CareContextsDiscoverJson` - Discover patient's accounts
* `postV05CareContextsDiscoverRaw` - Discover patient's accounts
* `postV05CareContextsOnDiscoverJson` - Response to patient's account discovery request
* `postV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request

### hipFacing

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
* `postV05PatientsSmsNotifyJson` - API for HIP to send SMS notifications to patients
* `postV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `postV05UsersAuthConfirmJson` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInitJson` - Initialize authentication from HIP
* `postV05UsersAuthInitRaw` - Initialize authentication from HIP
* `postV05UsersAuthOnNotifyJson` - callback API by HIU/HIPs as acknowledgement of auth notification
* `postV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### hiuFacing

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

### identification

* `postV05PatientsFindJson` - Identify a patient by her consent-manager user-id
* `postV05PatientsFindRaw` - Identify a patient by her consent-manager user-id
* `postV05PatientsOnFindJson` - Identification result for a consent-manager user-id
* `postV05PatientsOnFindRaw` - Identification result for a consent-manager user-id

### link

* `postV05LinksLinkAddContextsJson` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkConfirmJson` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkInitJson` - Link patient's care contexts
* `postV05LinksLinkInitRaw` - Link patient's care contexts
* `postV05LinksLinkOnAddContextsJson` - callback API for HIP initiated patient linking /link/add-context
* `postV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context
* `postV05LinksLinkOnConfirmJson` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInitJson` - Response to patient's care context link request
* `postV05LinksLinkOnInitRaw` - Response to patient's care context link request

### monitoring

* `getV05Heartbeat` - Get consent request status

### patientNotification

* `postV05PatientsSmsNotifyJson` - API for HIP to send SMS notifications to patients
* `postV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `postV05PatientsSmsOnNotifyJson` - Acknowledgment response for SMS notification sent to patient by HIP
* `postV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP

### profile

* `postV05PatientsProfileOnShareJson` - Response to patient's share profile request
* `postV05PatientsProfileOnShareRaw` - Response to patient's share profile request
* `postV05PatientsProfileShareJson` - Share patient profile details
* `postV05PatientsProfileShareRaw` - Share patient profile details

### services

* `getV05HiServicesServiceId` - Get bridge service details/profile by the serviceId provided.

### sessions

* `getV05WellKnownOpenidConfiguration` - Get openid configuration
* `getV05Certs` - Get certs for JWT verification
* `postV05SessionsJson` - Get access token
* `postV05SessionsRaw` - Get access token

### subscriptions

* `postV05SubscriptionRequestsCmInitJson` - Request for subscription
* `postV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `postV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `postV05SubscriptionRequestsHiuNotifyJson` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuNotifyRaw` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuNotifyJson` - Notification to HIU on basis of a granted subscription
* `postV05SubscriptionsHiuNotifyRaw` - Notification to HIU on basis of a granted subscription
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### userAuth

* `postV05UsersAuthConfirmJson` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInitJson` - Initialize authentication from HIP
* `postV05UsersAuthInitRaw` - Initialize authentication from HIP
* `postV05UsersAuthNotifyJson` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthOnConfirmJson` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnFetchModesJson` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnInitJson` - Response to user authentication initialization from HIP
* `postV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP
* `postV05UsersAuthOnNotifyJson` - callback API by HIU/HIPs as acknowledgement of auth notification
* `postV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

