# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### consent

* `postV05ConsentRequestsInitJson` - Create consent request
* `postV05ConsentRequestsInitRaw` - Create consent request
* `postV05ConsentRequestsStatusJson` - Get consent request status
* `postV05ConsentRequestsStatusRaw` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHipOnNotifyJson` - Consent notification
* `postV05ConsentsHipOnNotifyRaw` - Consent notification
* `postV05ConsentsHiuOnNotify` - Consent notification

### dataFlow

* `postV05HealthInformationNotifyJson` - Notifications corresponding to events during data flow
* `postV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `postV05HealthInformationOnRequestJson` - Health information data request acknowledgement from HIP
* `postV05HealthInformationOnRequestRaw` - Health information data request acknowledgement from HIP
* `postV05HealthInformationRequestJson` - Health information data request from HIU
* `postV05HealthInformationRequestRaw` - Health information data request from HIU

### discovery

* `postV05CareContextsOnDiscoverJson` - Response to patient's account discovery request
* `postV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request

### hipFacing

* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthOnNotifyJson` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `postV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### hiuFacing

* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `postV05UsersAuthOnNotifyJson` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `postV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### identification

* `postV05PatientsFindJson` - Identify a patient by her consent-manager user-id
* `postV05PatientsFindRaw` - Identify a patient by her consent-manager user-id

### link

* `postV05LinksLinkAddContextsJson` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkOnConfirmJson` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInitJson` - Response to patient's care context link request
* `postV05LinksLinkOnInitRaw` - Response to patient's care context link request

### monitoring

* `getV05Heartbeat` - Get consent request status

### profile

* `postV05PatientsProfileOnShareJson` - Response to patient's share profile request
* `postV05PatientsProfileOnShareRaw` - Response to patient's share profile request

### subscriptions

* `postV05SubscriptionRequestsCmInitJson` - Request for subscription
* `postV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### userAuth

* `postV05UsersAuthConfirmJson` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModesJson` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInitJson` - Initialize authentication from HIP
* `postV05UsersAuthInitRaw` - Initialize authentication from HIP
* `postV05UsersAuthOnNotifyJson` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `postV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
