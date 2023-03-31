# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ndhm.gov.in/ndhm-hip/0.5/go
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

    ctx := context.Background()
    res, err := s.Gateway.GetV05WellKnownOpenidConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDConfiguration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Gateway

* `GetV05WellKnownOpenidConfiguration` - Get openid configuration
* `GetV05Certs` - Get certs for JWT verification
* `PostV05CareContextsOnDiscoverJSON` - Response to patient's account discovery request
* `PostV05CareContextsOnDiscoverRaw` - Response to patient's account discovery request
* `PostV05ConsentsHipOnNotifyJSON` - Consent notification
* `PostV05ConsentsHipOnNotifyRaw` - Consent notification
* `PostV05HealthInformationHipOnRequestJSON` - Health information data request
* `PostV05HealthInformationHipOnRequestRaw` - Health information data request
* `PostV05HealthInformationNotifyJSON` - Notifications corresponding to events during data flow
* `PostV05HealthInformationNotifyRaw` - Notifications corresponding to events during data flow
* `PostV05LinksLinkAddContextsJSON` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkAddContextsRaw` - API for HIP initiated care-context linking for patient
* `PostV05LinksLinkOnConfirmJSON` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnConfirmRaw` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `PostV05LinksLinkOnInitJSON` - Response to patient's care context link request
* `PostV05LinksLinkOnInitRaw` - Response to patient's care context link request
* `PostV05PatientsProfileOnShareJSON` - Response to patient's share profile request
* `PostV05PatientsProfileOnShareRaw` - Response to patient's share profile request
* `PostV05PatientsSmsNotifyJSON` - API for HIP to send SMS notifications to patients
* `PostV05PatientsSmsNotifyRaw` - API for HIP to send SMS notifications to patients
* `PostV05SessionsJSON` - Get access token
* `PostV05SessionsRaw` - Get access token
* `PostV05UsersAuthConfirmJSON` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthConfirmRaw` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `PostV05UsersAuthFetchModesJSON` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthFetchModesRaw` - Get a patient's authentication modes relevant to specified purpose
* `PostV05UsersAuthInitJSON` - Initialize authentication from HIP
* `PostV05UsersAuthInitRaw` - Initialize authentication from HIP
* `PostV05UsersAuthOnNotifyJSON` - callback API by HIU/HIPs as acknowledgement of auth notification
* `PostV05UsersAuthOnNotifyRaw` - callback API by HIU/HIPs as acknowledgement of auth notification

### ConsentFlow

* `PostV05ConsentsHipNotifyJSON` - Consent notification
* `PostV05ConsentsHipNotifyRaw` - Consent notification

### DataFlow

* `PostV05HealthInformationHipRequestJSON` - Health information data request
* `PostV05HealthInformationHipRequestRaw` - Health information data request

### DataTransfer

* `PostV05HealthInformationTransferJSON` - health information transfer API
* `PostV05HealthInformationTransferRaw` - health information transfer API

### Discovery

* `PostV05CareContextsDiscoverJSON` - Discover patient's accounts
* `PostV05CareContextsDiscoverRaw` - Discover patient's accounts

### Link

* `PostV05LinksLinkConfirmJSON` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkConfirmRaw` - Token submission by Consent Manager for link confirmation
* `PostV05LinksLinkInitJSON` - Link patient's care contexts
* `PostV05LinksLinkInitRaw` - Link patient's care contexts
* `PostV05LinksLinkOnAddContextsJSON` - callback API for HIP initiated patient linking /link/add-context
* `PostV05LinksLinkOnAddContextsRaw` - callback API for HIP initiated patient linking /link/add-context

### Monitoring

* `GetV05Heartbeat` - Get consent request status

### PatientNotification

* `PostV05PatientsSmsOnNotifyJSON` - Acknowledgment response for SMS notification sent to patient by HIP
* `PostV05PatientsSmsOnNotifyRaw` - Acknowledgment response for SMS notification sent to patient by HIP

### Profile

* `PostV05PatientsProfileShareJSON` - Share patient profile details
* `PostV05PatientsProfileShareRaw` - Share patient profile details

### UserAuth

* `PostV05UsersAuthNotifyJSON` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthNotifyRaw` - notification API in case of DIRECT mode of authentication by the CM
* `PostV05UsersAuthOnConfirmJSON` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnConfirmRaw` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `PostV05UsersAuthOnFetchModesJSON` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnFetchModesRaw` - Identification result for a consent-manager user-id
* `PostV05UsersAuthOnInitJSON` - Response to user authentication initialization from HIP
* `PostV05UsersAuthOnInitRaw` - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
