# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05WellKnownOpenidConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05WellKnownOpenidConfigurationResponse res = sdk.gateway.getV05WellKnownOpenidConfiguration();

            if (res.openIdConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [gateway](docs/gateway/README.md)

* [getV05WellKnownOpenidConfiguration](docs/gateway/README.md#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](docs/gateway/README.md#getv05certs) - Get certs for JWT verification
* [postV05CareContextsOnDiscoverJson](docs/gateway/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](docs/gateway/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [postV05ConsentsHipOnNotifyJson](docs/gateway/README.md#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](docs/gateway/README.md#postv05consentshiponnotifyraw) - Consent notification
* [postV05HealthInformationHipOnRequestJson](docs/gateway/README.md#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](docs/gateway/README.md#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](docs/gateway/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/gateway/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05LinksLinkAddContextsJson](docs/gateway/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](docs/gateway/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](docs/gateway/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](docs/gateway/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](docs/gateway/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](docs/gateway/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request
* [postV05PatientsProfileOnShareJson](docs/gateway/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](docs/gateway/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsSmsNotifyJson](docs/gateway/README.md#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](docs/gateway/README.md#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05SessionsJson](docs/gateway/README.md#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](docs/gateway/README.md#postv05sessionsraw) - Get access token
* [postV05UsersAuthConfirmJson](docs/gateway/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/gateway/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/gateway/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/gateway/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/gateway/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/gateway/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/gateway/README.md#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](docs/gateway/README.md#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

### [consentFlow](docs/consentflow/README.md)

* [postV05ConsentsHipNotifyJson](docs/consentflow/README.md#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](docs/consentflow/README.md#postv05consentshipnotifyraw) - Consent notification

### [dataFlow](docs/dataflow/README.md)

* [postV05HealthInformationHipRequestJson](docs/dataflow/README.md#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](docs/dataflow/README.md#postv05healthinformationhiprequestraw) - Health information data request

### [dataTransfer](docs/datatransfer/README.md)

* [postV05HealthInformationTransferJson](docs/datatransfer/README.md#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](docs/datatransfer/README.md#postv05healthinformationtransferraw) - health information transfer API

### [discovery](docs/discovery/README.md)

* [postV05CareContextsDiscoverJson](docs/discovery/README.md#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](docs/discovery/README.md#postv05carecontextsdiscoverraw) - Discover patient's accounts

### [link](docs/link/README.md)

* [postV05LinksLinkConfirmJson](docs/link/README.md#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](docs/link/README.md#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](docs/link/README.md#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](docs/link/README.md#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](docs/link/README.md#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](docs/link/README.md#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context

### [monitoring](docs/monitoring/README.md)

* [getV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [patientNotification](docs/patientnotification/README.md)

* [postV05PatientsSmsOnNotifyJson](docs/patientnotification/README.md#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](docs/patientnotification/README.md#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

### [profile](docs/profile/README.md)

* [postV05PatientsProfileShareJson](docs/profile/README.md#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](docs/profile/README.md#postv05patientsprofileshareraw) - Share patient profile details

### [userAuth](docs/userauth/README.md)

* [postV05UsersAuthNotifyJson](docs/userauth/README.md#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](docs/userauth/README.md#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](docs/userauth/README.md#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](docs/userauth/README.md#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](docs/userauth/README.md#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](docs/userauth/README.md#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](docs/userauth/README.md#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](docs/userauth/README.md#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
