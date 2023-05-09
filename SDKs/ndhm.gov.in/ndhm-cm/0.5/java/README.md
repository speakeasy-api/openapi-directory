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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitJsonResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentRequest;
import org.openapis.openapi.models.shared.ConsentRequestConsent;
import org.openapis.openapi.models.shared.ConsentRequestConsentHip;
import org.openapis.openapi.models.shared.ConsentRequestConsentHiu;
import org.openapis.openapi.models.shared.ConsentRequestConsentPatient;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.Requester;
import org.openapis.openapi.models.shared.RequesterIdentifier;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("corrupti",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                            }},                 new ConsentRequestConsentHiu("nulla");,                 new ConsentRequestConsentPatient("hinapatel79@ndhm");,                 new Permission(PermissionAccessModeEnum.QUERY, OffsetDateTime.parse("2021-09-24T02:21:06.409Z"),                 new PermissionDateRange(OffsetDateTime.parse("2021-09-16T11:56:06.019Z"), OffsetDateTime.parse("2022-07-25T06:44:09.184Z"));,                 new PermissionFrequency() {{
                                                                                repeats = 297534L;
                                                                                unit = PermissionFrequencyUnitEnum.YEAR;
                                                                                value = 56713L;
                                                                            }};);,                 new UsePurpose("delectus", "tempora") {{
                                                                refUri = "http://lasting-sex.net";
                                                            }};,                 new Requester("Dr. Manju") {{
                                                                identifier = new RequesterIdentifier("REGNO", "MH1001") {{
                                                                    system = "https://www.mciindia.org";
                                                                }};;
                                                            }};) {{
                                                careContexts = new org.openapis.openapi.models.shared.CareContextDefinition[]{{
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                }};
                                                hip = new ConsentRequestConsentHip("iusto");;
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-03-20T06:24:36.919Z")););            

            PostV05ConsentRequestsInitJsonResponse res = sdk.consent.postV05ConsentRequestsInitJson(req);

            if (res.statusCode == 200) {
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


### [consent](docs/consent/README.md)

* [postV05ConsentRequestsInitJson](docs/consent/README.md#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](docs/consent/README.md#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](docs/consent/README.md#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](docs/consent/README.md#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](docs/consent/README.md#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipOnNotifyJson](docs/consent/README.md#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](docs/consent/README.md#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuOnNotify](docs/consent/README.md#postv05consentshiuonnotify) - Consent notification

### [dataFlow](docs/dataflow/README.md)

* [postV05HealthInformationNotifyJson](docs/dataflow/README.md#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](docs/dataflow/README.md#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05HealthInformationOnRequestJson](docs/dataflow/README.md#postv05healthinformationonrequestjson) - Health information data request acknowledgement from HIP
* [postV05HealthInformationOnRequestRaw](docs/dataflow/README.md#postv05healthinformationonrequestraw) - Health information data request acknowledgement from HIP
* [postV05HealthInformationRequestJson](docs/dataflow/README.md#postv05healthinformationrequestjson) - Health information data request from HIU
* [postV05HealthInformationRequestRaw](docs/dataflow/README.md#postv05healthinformationrequestraw) - Health information data request from HIU

### [discovery](docs/discovery/README.md)

* [postV05CareContextsOnDiscoverJson](docs/discovery/README.md#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](docs/discovery/README.md#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

### [hipFacing](docs/hipfacing/README.md)

* [postV05UsersAuthFetchModesJson](docs/hipfacing/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/hipfacing/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthOnNotifyJson](docs/hipfacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/hipfacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [hiuFacing](docs/hiufacing/README.md)

* [postV05SubscriptionsHiuOnNotify](docs/hiufacing/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthOnNotifyJson](docs/hiufacing/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/hiufacing/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### [identification](docs/identification/README.md)

* [postV05PatientsFindJson](docs/identification/README.md#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](docs/identification/README.md#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

### [link](docs/link/README.md)

* [postV05LinksLinkAddContextsJson](docs/link/README.md#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](docs/link/README.md#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](docs/link/README.md#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](docs/link/README.md#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](docs/link/README.md#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](docs/link/README.md#postv05linkslinkoninitraw) - Response to patient's care context link request

### [monitoring](docs/monitoring/README.md)

* [getV05Heartbeat](docs/monitoring/README.md#getv05heartbeat) - Get consent request status

### [profile](docs/profile/README.md)

* [postV05PatientsProfileOnShareJson](docs/profile/README.md#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](docs/profile/README.md#postv05patientsprofileonshareraw) - Response to patient's share profile request

### [subscriptions](docs/subscriptions/README.md)

* [postV05SubscriptionRequestsCmInitJson](docs/subscriptions/README.md#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](docs/subscriptions/README.md#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](docs/subscriptions/README.md#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### [userAuth](docs/userauth/README.md)

* [postV05UsersAuthConfirmJson](docs/userauth/README.md#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](docs/userauth/README.md#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](docs/userauth/README.md#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](docs/userauth/README.md#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](docs/userauth/README.md#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](docs/userauth/README.md#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](docs/userauth/README.md#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [postV05UsersAuthOnNotifyRaw](docs/userauth/README.md#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
