# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostV05CareContextsDiscoverRequest req = new PostV05CareContextsDiscoverRequest() {{
                headers = new PostV05CareContextsDiscoverHeaders() {{
                    authorization = "consequatur";
                    xHIPID = "itaque";
                }};
                request = new PostV05CareContextsDiscoverRequests() {{
                    applicationXML = "repellat".getBytes();
                    patientDiscoveryRequest = new PatientDiscoveryRequest() {{
                        patient = new PatientDiscoveryRequestPatient() {{
                            gender = "U";
                            id = "autem";
                            name = "dolores";
                            unverifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "MR";
                                    value = "qui";
                                }}),
                                add(new Identifier() {{
                                    type = "HEALTH_ID";
                                    value = "velit";
                                }}),
                                add(new Identifier() {{
                                    type = "MOBILE";
                                    value = "blanditiis";
                                }}),
                            }};
                            verifiedIdentifiers = new openapisdk.models.shared.Identifier[]() {{
                                add(new Identifier() {{
                                    type = "MR";
                                    value = "id";
                                }}),
                                add(new Identifier() {{
                                    type = "NDHM_HEALTH_NUMBER";
                                    value = "quaerat";
                                }}),
                            }};
                            yearOfBirth = 7991929692006849534;
                        }};
                        requestId = "et";
                        timestamp = "1978-06-02T13:05:46Z";
                        transactionId = "libero";
                    }};
                }};
            }};

            PostV05CareContextsDiscoverResponse res = sdk.cmFacing.postV05CareContextsDiscover(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### cm facing

* `postV05CareContextsDiscover` - Discover patient's accounts
* `postV05CareContextsOnDiscover` - Response to patient's account discovery request
* `postV05ConsentRequestsOnInit` - Response to consent request
* `postV05ConsentRequestsOnStatus` - Result of consent request status
* `postV05ConsentsHipNotify` - Consent notification
* `postV05ConsentsHiuNotify` - Consent notification
* `postV05ConsentsOnFetch` - Result of fetch request for a consent artefact
* `postV05HealthInformationCmOnRequest` - Health information data request
* `postV05HealthInformationHipRequest` - Health information data request
* `postV05LinksLinkConfirm` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkInit` - Link patient's care contexts
* `postV05LinksLinkOnAddContexts` - callback API for HIP initiated patient linking /link/add-context
* `postV05PatientsOnFind` - Identification result for a consent-manager user-id
* `postV05PatientsProfileShare` - Share patient profile details
* `postV05PatientsSmsOnNotify` - Acknowledgment response for SMS notification sent to patient by HIP
* `postV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `postV05SubscriptionRequestsHiuNotify` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionsHiuNotify` - Notification to HIU on basis of a granted subscription
* `postV05UsersAuthNotify` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthOnConfirm` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnFetchModes` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnInit` - Response to user authentication initialization from HIP

### consent flow

* `postV05ConsentRequestsInit` - Create consent request
* `postV05ConsentRequestsOnInit` - Response to consent request
* `postV05ConsentRequestsOnStatus` - Result of consent request status
* `postV05ConsentRequestsStatus` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHipNotify` - Consent notification
* `postV05ConsentsHipOnNotify` - Consent notification
* `postV05ConsentsHiuNotify` - Consent notification
* `postV05ConsentsHiuOnNotify` - Consent notification
* `postV05ConsentsOnFetch` - Result of fetch request for a consent artefact

### data flow

* `postV05HealthInformationCmOnRequest` - Health information data request
* `postV05HealthInformationCmRequest` - Health information data request
* `postV05HealthInformationHipOnRequest` - Health information data request
* `postV05HealthInformationHipRequest` - Health information data request
* `postV05HealthInformationNotify` - Notifications corresponding to events during data flow

### discovery

* `postV05CareContextsDiscover` - Discover patient's accounts
* `postV05CareContextsOnDiscover` - Response to patient's account discovery request

### hip facing

* `postV05ConsentsHipOnNotify` - Consent notification
* `postV05HealthInformationHipOnRequest` - Health information data request
* `postV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `postV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInit` - Response to patient's care context link request
* `postV05PatientsSmsNotify` - API for HIP to send SMS notifications to patients
* `postV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInit` - Initialize authentication from HIP
* `postV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

### hiu facing

* `postV05ConsentRequestsInit` - Create consent request
* `postV05ConsentRequestsStatus` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHiuOnNotify` - Consent notification
* `postV05HealthInformationCmRequest` - Health information data request
* `postV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `postV05PatientsFind` - Identify a patient by her consent-manager user-id
* `postV05SubscriptionRequestsCmInit` - Request for subscription
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `postV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInit` - Initialize authentication from HIP
* `postV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

### identification

* `postV05PatientsFind` - Identify a patient by her consent-manager user-id
* `postV05PatientsOnFind` - Identification result for a consent-manager user-id

### link

* `postV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkConfirm` - Token submission by Consent Manager for link confirmation
* `postV05LinksLinkInit` - Link patient's care contexts
* `postV05LinksLinkOnAddContexts` - callback API for HIP initiated patient linking /link/add-context
* `postV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInit` - Response to patient's care context link request

### monitoring

* `getV05Heartbeat` - Get consent request status

### patient notification

* `postV05PatientsSmsNotify` - API for HIP to send SMS notifications to patients
* `postV05PatientsSmsOnNotify` - Acknowledgment response for SMS notification sent to patient by HIP

### profile

* `postV05PatientsProfileOnShare` - Response to patient's share profile request
* `postV05PatientsProfileShare` - Share patient profile details

### services

* `getV05HiServicesServiceId` - Get bridge service details/profile by the serviceId provided.

### sessions

* `getV05WellKnownOpenidConfiguration` - Get openid configuration
* `getV05Certs` - Get certs for JWT verification
* `postV05Sessions` - Get access token

### subscriptions

* `postV05SubscriptionRequestsCmInit` - Request for subscription
* `postV05SubscriptionRequestsCmOnInit` - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* `postV05SubscriptionRequestsHiuNotify` - Notification for subscription grant/deny/revoke
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuNotify` - Notification to HIU on basis of a granted subscription
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user auth

* `postV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInit` - Initialize authentication from HIP
* `postV05UsersAuthNotify` - notification API in case of DIRECT mode of authentication by the CM
* `postV05UsersAuthOnConfirm` - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* `postV05UsersAuthOnFetchModes` - Identification result for a consent-manager user-id
* `postV05UsersAuthOnInit` - Response to user authentication initialization from HIP
* `postV05UsersAuthOnNotify` - callback API by HIU/HIPs as acknowledgement of auth notification

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
