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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PostV05ConsentRequestsInitJSONRequest{
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
                    "DiagnosticReport",
                    "DischargeSummary",
                    "DiagnosticReport",
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "corrupti",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "illum",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: "STORE",
                    DataEraseAt: "2021-09-16T11:56:06.019Z",
                    DateRange: shared.PermissionDateRange{
                        From: "2022-07-25T06:44:09.184Z",
                        To: "2022-02-09T12:04:06.508Z",
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: 56713,
                        Unit: "YEAR",
                        Value: 272656,
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "suscipit",
                    RefURI: "http://spotted-skyline.name",
                    Text: "iusto",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: "https://www.mciindia.org",
                        Type: "REGNO",
                        Value: "MH1001",
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: "2022-03-20T06:24:36.919Z",
        },
    }

    ctx := context.Background()
    res, err := s.Consent.PostV05ConsentRequestsInitJSON(ctx, req)
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


### Consent

* `PostV05ConsentRequestsInitJSON` - Create consent request
* `PostV05ConsentRequestsInitRaw` - Create consent request
* `PostV05ConsentRequestsStatusJSON` - Get consent request status
* `PostV05ConsentRequestsStatusRaw` - Get consent request status
* `PostV05ConsentsFetch` - Get consent artefact
* `PostV05ConsentsHipOnNotifyJSON` - Consent notification
* `PostV05ConsentsHipOnNotifyRaw` - Consent notification
* `PostV05ConsentsHiuOnNotify` - Consent notification

### DataFlow

* `PostV05HealthInformationNotifyJSON` - Notifications corresponding to events during data flow
* `PostV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `PostV05HealthInformationOnRequestJSON` - Health information data request acknowledgement from HIP
* `PostV05HealthInformationOnRequestRaw` - Health information data request acknowledgement from HIP
* `PostV05HealthInformationRequestJSON` - Health information data request from HIU
* `PostV05HealthInformationRequestRaw` - Health information data request from HIU

### Discovery

* `PostV05CareContextsOnDiscoverJSON` - Response to patient's account discovery request
* `PostV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request

### HipFacing

* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthOnNotifyJSON` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `PostV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### HiuFacing

* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `PostV05UsersAuthOnNotifyJSON` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `PostV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### Identification

* `PostV05PatientsFindJSON` - Identify a patient by her consent-manager user-id
* `PostV05PatientsFindRaw` - Identify a patient by her consent-manager user-id

### Link

* `PostV05LinksLinkAddContextsJSON` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkOnConfirmJSON` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInitJSON` - Response to patient's care context link request
* `PostV05LinksLinkOnInitRaw` - Response to patient's care context link request

### Monitoring

* `GetV05Heartbeat` - Get consent request status

### Profile

* `PostV05PatientsProfileOnShareJSON` - Response to patient's share profile request
* `PostV05PatientsProfileOnShareRaw` - Response to patient's share profile request

### Subscriptions

* `PostV05SubscriptionRequestsCmInitJSON` - Request for subscription
* `PostV05SubscriptionRequestsCmInitRaw` - Request for subscription
* `PostV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `PostV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### UserAuth

* `PostV05UsersAuthConfirmJSON` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInitJSON` - Initialize authentication from HIP
* `PostV05UsersAuthInitRaw` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotifyJSON` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* `PostV05UsersAuthOnNotifyRaw` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
