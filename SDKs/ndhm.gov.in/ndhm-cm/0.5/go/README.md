# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-cm/0.5/go
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
    res, err := s.Consent.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
        Authorization: "corrupti",
        ConsentRequest: shared.ConsentRequest{
            Consent: shared.ConsentRequestConsent{
                CareContexts: []shared.CareContextDefinition{
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                },
                HiTypes: []shared.HITypeEnumEnum{
                    shared.HITypeEnumEnumDiagnosticReport,
                    shared.HITypeEnumEnumDischargeSummary,
                    shared.HITypeEnumEnumDiagnosticReport,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumView,
                    DataEraseAt: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
                        To: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: sdk.Int64(386489),
                        Unit: shared.PermissionFrequencyUnitEnumYear.ToPointer(),
                        Value: sdk.Int64(902599),
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "fuga",
                    RefURI: sdk.String("http://grown-opposite.info"),
                    Text: "saepe",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: sdk.String("https://www.mciindia.org"),
                        Type: "REGNO",
                        Value: "MH1001",
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-10-20T12:36:28.767Z"),
        },
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


### [Consent](docs/consent/README.md)

* [PostV05ConsentRequestsInitJSON](docs/consent/README.md#postv05consentrequestsinitjson) - Create consent request
* [PostV05ConsentRequestsInitRaw](docs/consent/README.md#postv05consentrequestsinitraw) - Create consent request
* [PostV05ConsentRequestsStatusJSON](docs/consent/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [PostV05ConsentRequestsStatusRaw](docs/consent/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [PostV05ConsentsFetch](docs/consent/README.md#postv05consentsfetch) - Get consent artefact
* [PostV05ConsentsHipOnNotifyJSON](docs/consent/README.md#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](docs/consent/README.md#postv05consentshiponnotifyraw) - Consent notification
* [PostV05ConsentsHiuOnNotify](docs/consent/README.md#postv05consentshiuonnotify) - Consent notification

### [DataFlow](docs/dataflow/README.md)

* [PostV05HealthInformationNotifyJSON](docs/dataflow/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/dataflow/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05HealthInformationOnRequestJSON](docs/dataflow/README.md#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [PostV05HealthInformationOnRequestRaw](docs/dataflow/README.md#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [PostV05HealthInformationRequestJSON](docs/dataflow/README.md#postv05healthinformationrequestjson) - Health information data request from HIU
* [PostV05HealthInformationRequestRaw](docs/dataflow/README.md#postv05healthinformationrequestraw) - Health information data request from HIU

### [Discovery](docs/discovery/README.md)

* [PostV05CareContextsOnDiscoverJSON](docs/discovery/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](docs/discovery/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

### [HipFacing](docs/hipfacing/README.md)

* [PostV05UsersAuthFetchModesJSON](docs/hipfacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/hipfacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthOnNotifyJSON](docs/hipfacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [PostV05UsersAuthOnNotifyRaw](docs/hipfacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [HiuFacing](docs/hiufacing/README.md)

* [PostV05SubscriptionsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [PostV05UsersAuthOnNotifyJSON](docs/hiufacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [PostV05UsersAuthOnNotifyRaw](docs/hiufacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [Identification](docs/identification/README.md)

* [PostV05PatientsFindJSON](docs/identification/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](docs/identification/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

### [Link](docs/link/README.md)

* [PostV05LinksLinkAddContextsJSON](docs/link/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](docs/link/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkOnConfirmJSON](docs/link/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](docs/link/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](docs/link/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](docs/link/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request

### [Monitoring](docs/monitoring/README.md)

* [GetV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [Profile](docs/profile/README.md)

* [PostV05PatientsProfileOnShareJSON](docs/profile/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](docs/profile/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request

### [Subscriptions](docs/subscriptions/README.md)

* [PostV05SubscriptionRequestsCmInitJSON](docs/subscriptions/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [PostV05SubscriptionRequestsCmInitRaw](docs/subscriptions/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [PostV05SubscriptionRequestsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [PostV05SubscriptionsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### [UserAuth](docs/userauth/README.md)

* [PostV05UsersAuthConfirmJSON](docs/userauth/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/userauth/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/userauth/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/userauth/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/userauth/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/userauth/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/userauth/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [PostV05UsersAuthOnNotifyRaw](docs/userauth/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
