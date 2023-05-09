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

import(
	"context"
	"log"
	"openapi"
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


### [Gateway](docs/gateway/README.md)

* [GetV05WellKnownOpenidConfiguration](docs/gateway/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [GetV05Certs](docs/gateway/README.md#getv05certs) - Get certs for JWT verification
* [PostV05CareContextsOnDiscoverJSON](docs/gateway/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [PostV05CareContextsOnDiscoverRaw](docs/gateway/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [PostV05ConsentsHipOnNotifyJSON](docs/gateway/README.md#postv05consentshiponnotifyjson) - Consent notification
* [PostV05ConsentsHipOnNotifyRaw](docs/gateway/README.md#postv05consentshiponnotifyraw) - Consent notification
* [PostV05HealthInformationHipOnRequestJSON](docs/gateway/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [PostV05HealthInformationHipOnRequestRaw](docs/gateway/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [PostV05HealthInformationNotifyJSON](docs/gateway/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [PostV05HealthInformationNotifyRaw](docs/gateway/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [PostV05LinksLinkAddContextsJSON](docs/gateway/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](docs/gateway/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkOnConfirmJSON](docs/gateway/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](docs/gateway/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](docs/gateway/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](docs/gateway/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request
* [PostV05PatientsProfileOnShareJSON](docs/gateway/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](docs/gateway/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [PostV05PatientsSmsNotifyJSON](docs/gateway/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](docs/gateway/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05SessionsJSON](docs/gateway/README.md#postv05sessionsjson) - Get access token
* [PostV05SessionsRaw](docs/gateway/README.md#postv05sessionsraw) - Get access token
* [PostV05UsersAuthConfirmJSON](docs/gateway/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](docs/gateway/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](docs/gateway/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](docs/gateway/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](docs/gateway/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](docs/gateway/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](docs/gateway/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [PostV05UsersAuthOnNotifyRaw](docs/gateway/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [ConsentFlow](docs/consentflow/README.md)

* [PostV05ConsentsHipNotifyJSON](docs/consentflow/README.md#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](docs/consentflow/README.md#postv05consentshipnotifyraw) - Consent notification

### [DataFlow](docs/dataflow/README.md)

* [PostV05HealthInformationHipRequestJSON](docs/dataflow/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [PostV05HealthInformationHipRequestRaw](docs/dataflow/README.md#postv05healthinformationhiprequestraw) - Health information data request

### [DataTransfer](docs/datatransfer/README.md)

* [PostV05HealthInformationTransferJSON](docs/datatransfer/README.md#postv05healthinformationtransferjson) - health information transfer API
* [PostV05HealthInformationTransferRaw](docs/datatransfer/README.md#postv05healthinformationtransferraw) - health information transfer API

### [Discovery](docs/discovery/README.md)

* [PostV05CareContextsDiscoverJSON](docs/discovery/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [PostV05CareContextsDiscoverRaw](docs/discovery/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts

### [Link](docs/link/README.md)

* [PostV05LinksLinkConfirmJSON](docs/link/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](docs/link/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](docs/link/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](docs/link/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](docs/link/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](docs/link/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context

### [Monitoring](docs/monitoring/README.md)

* [GetV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [PatientNotification](docs/patientnotification/README.md)

* [PostV05PatientsSmsOnNotifyJSON](docs/patientnotification/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](docs/patientnotification/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

### [Profile](docs/profile/README.md)

* [PostV05PatientsProfileShareJSON](docs/profile/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](docs/profile/README.md#postv05patientsprofileshareraw) - Share patient profile details

### [UserAuth](docs/userauth/README.md)

* [PostV05UsersAuthNotifyJSON](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
