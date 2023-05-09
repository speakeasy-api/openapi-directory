# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-gateway/0.5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsDiscoverJSON(ctx, operations.PostV05CareContextsDiscoverJSONRequest{
        Authorization: "corrupti",
        PatientDiscoveryRequest: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: shared.PatientGenderEnumO,
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumMr.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                    shared.Identifier{
                        Type: shared.IdentifierTypeEnumNdhmHealthNumber.ToPointer(),
                        Value: sdk.String("+919800083232"),
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-03-26T09:37:56.283Z"),
            TransactionID: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
        },
        XHipID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CmFacing](docs/cmfacing/README.md)

* [PostV05CareContextsDiscoverJSON](docs/cmfacing/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](docs/cmfacing/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [PostV05CareContextsOnDiscoverJSON](docs/cmfacing/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](docs/cmfacing/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [PostV05ConsentRequestsOnInitJSON](docs/cmfacing/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](docs/cmfacing/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](docs/cmfacing/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](docs/cmfacing/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentsHipNotifyJSON](docs/cmfacing/README.md#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](docs/cmfacing/README.md#postv05consentshipnotifyraw) - Consent notification
* [PostV05ConsentsHiuNotify](docs/cmfacing/README.md#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](docs/cmfacing/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](docs/cmfacing/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact
* [PostV05HealthInformationCmOnRequestJSON](docs/cmfacing/README.md#postv05healthinformationcmonrequestjson) - Health information data request
* [PostV05HealthInformationCmOnRequestRaw](docs/cmfacing/README.md#postv05healthinformationcmonrequestraw) - Health information data request
* [PostV05HealthInformationHipRequestJSON](docs/cmfacing/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](docs/cmfacing/README.md#postv05healthinformationhiprequestraw) - Health information data request
* [PostV05LinksLinkConfirmJSON](docs/cmfacing/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](docs/cmfacing/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](docs/cmfacing/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](docs/cmfacing/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](docs/cmfacing/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](docs/cmfacing/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [PostV05PatientsOnFindJSON](docs/cmfacing/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](docs/cmfacing/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id
* [PostV05PatientsProfileShareJSON](docs/cmfacing/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](docs/cmfacing/README.md#postv05patientsprofileshareraw) - Share patient profile details
* [PostV05PatientsSmsOnNotifyJSON](docs/cmfacing/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](docs/cmfacing/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05SubscriptionRequestsCmOnInit](docs/cmfacing/README.md#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionRequestsHiuNotifyJSON](docs/cmfacing/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](docs/cmfacing/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionsHiuNotifyJSON](docs/cmfacing/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](docs/cmfacing/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [PostV05UsersAuthNotifyJSON](docs/cmfacing/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](docs/cmfacing/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](docs/cmfacing/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](docs/cmfacing/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](docs/cmfacing/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](docs/cmfacing/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](docs/cmfacing/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](docs/cmfacing/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

### [ConsentFlow](docs/consentflow/README.md)

* [PostV05ConsentRequestsInitJSON](docs/consentflow/README.md#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](docs/consentflow/README.md#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsOnInitJSON](docs/consentflow/README.md#postv05consentrequestsoninitjson) - Response to consent request
* [PostV05ConsentRequestsOnInitRaw](docs/consentflow/README.md#postv05consentrequestsoninitraw) - Response to consent request
* [PostV05ConsentRequestsOnStatusJSON](docs/consentflow/README.md#postv05consentrequestsonstatusjson) - Result of consent request status
* [PostV05ConsentRequestsOnStatusRaw](docs/consentflow/README.md#postv05consentrequestsonstatusraw) - Result of consent request status
* [PostV05ConsentRequestsStatusJSON](docs/consentflow/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](docs/consentflow/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](docs/consentflow/README.md#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHipNotifyJSON](docs/consentflow/README.md#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](docs/consentflow/README.md#postv05consentshipnotifyraw) - Consent notification
* [PostV05ConsentsHipOnNotifyJSON](docs/consentflow/README.md#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](docs/consentflow/README.md#postv05consentshiponnotifyraw) - Consent notification
* [PostV05ConsentsHiuNotify](docs/consentflow/README.md#postv05consentshiunotify) - Consent notification
* [PostV05ConsentsHiuOnNotify](docs/consentflow/README.md#postv05consentshiuonnotify) - Consent notification
* [PostV05ConsentsOnFetchJSON](docs/consentflow/README.md#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [PostV05ConsentsOnFetchRaw](docs/consentflow/README.md#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

### [DataFlow](docs/dataflow/README.md)

* [PostV05HealthInformationCmOnRequestJSON](docs/dataflow/README.md#postv05healthinformationcmonrequestjson) - Health information data request
* [PostV05HealthInformationCmOnRequestRaw](docs/dataflow/README.md#postv05healthinformationcmonrequestraw) - Health information data request
* [PostV05HealthInformationCmRequestJSON](docs/dataflow/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](docs/dataflow/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationHipOnRequestJSON](docs/dataflow/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [PostV05HealthInformationHipOnRequestRaw](docs/dataflow/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [PostV05HealthInformationHipRequestJSON](docs/dataflow/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](docs/dataflow/README.md#postv05healthinformationhiprequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](docs/dataflow/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/dataflow/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow

### [Discovery](docs/discovery/README.md)

* [PostV05CareContextsDiscoverJSON](docs/discovery/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](docs/discovery/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [PostV05CareContextsOnDiscoverJSON](docs/discovery/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](docs/discovery/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

### [HipFacing](docs/hipfacing/README.md)

* [PostV05ConsentsHipOnNotifyJSON](docs/hipfacing/README.md#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](docs/hipfacing/README.md#postv05consentshiponnotifyraw) - Consent notification
* [PostV05HealthInformationHipOnRequestJSON](docs/hipfacing/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [PostV05HealthInformationHipOnRequestRaw](docs/hipfacing/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](docs/hipfacing/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/hipfacing/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05LinksLinkAddContextsJSON](docs/hipfacing/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](docs/hipfacing/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkOnConfirmJSON](docs/hipfacing/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](docs/hipfacing/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](docs/hipfacing/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](docs/hipfacing/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request
* [PostV05PatientsSmsNotifyJSON](docs/hipfacing/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](docs/hipfacing/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05UsersAuthConfirmJSON](docs/hipfacing/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/hipfacing/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/hipfacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/hipfacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/hipfacing/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/hipfacing/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/hipfacing/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](docs/hipfacing/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [HiuFacing](docs/hiufacing/README.md)

* [PostV05ConsentRequestsInitJSON](docs/hiufacing/README.md#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](docs/hiufacing/README.md#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](docs/hiufacing/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](docs/hiufacing/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](docs/hiufacing/README.md#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHiuOnNotify](docs/hiufacing/README.md#postv05consentshiuonnotify) - Consent notification
* [PostV05HealthInformationCmRequestJSON](docs/hiufacing/README.md#postv05healthinformationcmrequestjson) - Health information data request
* [PostV05HealthInformationCmRequestRaw](docs/hiufacing/README.md#postv05healthinformationcmrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](docs/hiufacing/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/hiufacing/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05PatientsFindJSON](docs/hiufacing/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](docs/hiufacing/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05SubscriptionRequestsCmInitJSON](docs/hiufacing/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](docs/hiufacing/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthConfirmJSON](docs/hiufacing/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/hiufacing/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/hiufacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/hiufacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/hiufacing/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/hiufacing/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/hiufacing/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](docs/hiufacing/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [Identification](docs/identification/README.md)

* [PostV05PatientsFindJSON](docs/identification/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](docs/identification/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05PatientsOnFindJSON](docs/identification/README.md#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](docs/identification/README.md#postv05patientsonfindraw) - Identification result for a consent-manager user-id

### [Link](docs/link/README.md)

* [PostV05LinksLinkAddContextsJSON](docs/link/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](docs/link/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkConfirmJSON](docs/link/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](docs/link/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](docs/link/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](docs/link/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](docs/link/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](docs/link/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnConfirmJSON](docs/link/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](docs/link/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](docs/link/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](docs/link/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request

### [Monitoring](docs/monitoring/README.md)

* [GetV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [PatientNotification](docs/patientnotification/README.md)

* [PostV05PatientsSmsNotifyJSON](docs/patientnotification/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](docs/patientnotification/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsOnNotifyJSON](docs/patientnotification/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](docs/patientnotification/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

### [Profile](docs/profile/README.md)

* [PostV05PatientsProfileOnShareJSON](docs/profile/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](docs/profile/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [PostV05PatientsProfileShareJSON](docs/profile/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](docs/profile/README.md#postv05patientsprofileshareraw) - Share patient profile details

### [Services](docs/services/README.md)

* [GetV05HiServicesServiceID](docs/services/README.md#getv05hiservicesserviceid) - Get bridge service details/profile by the serviceId provided.

### [Sessions](docs/sessions/README.md)

* [GetV05WellKnownOpenidConfiguration](docs/sessions/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](docs/sessions/README.md#getv05certs) - Get certs for JWT verification
* [PostV05SessionsJSON](docs/sessions/README.md#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](docs/sessions/README.md#postv05sessionsraw) - Get access token

### [Subscriptions](docs/subscriptions/README.md)

* [PostV05SubscriptionRequestsCmInitJSON](docs/subscriptions/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](docs/subscriptions/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsCmOnInit](docs/subscriptions/README.md#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [PostV05SubscriptionRequestsHiuNotifyJSON](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [PostV05SubscriptionRequestsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuNotifyJSON](docs/subscriptions/README.md#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuNotifyRaw](docs/subscriptions/README.md#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [PostV05SubscriptionsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### [UserAuth](docs/userauth/README.md)

* [PostV05UsersAuthConfirmJSON](docs/userauth/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/userauth/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/userauth/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/userauth/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/userauth/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/userauth/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthNotifyJSON](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/userauth/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](docs/userauth/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
