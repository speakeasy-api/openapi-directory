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

            PostV05ConsentRequestsInitRequest req = new PostV05ConsentRequestsInitRequest() {{
                headers = new PostV05ConsentRequestsInitHeaders() {{
                    authorization = "sit";
                }};
                request = new PostV05ConsentRequestsInitRequests() {{
                    applicationXML = "voluptas".getBytes();
                    consentRequest = new ConsentRequest() {{
                        consent = new ConsentRequestConsent() {{
                            careContexts = new openapisdk.models.shared.CareContextDefinition[]() {{
                                add(new CareContextDefinition() {{
                                    careContextReference = "expedita";
                                    patientReference = "consequuntur";
                                }}),
                                add(new CareContextDefinition() {{
                                    careContextReference = "dolor";
                                    patientReference = "expedita";
                                }}),
                            }};
                            hiTypes = new openapisdk.models.shared.HiTypeEnumEnum[]() {{
                                add("OPConsultation"),
                                add("OPConsultation"),
                                add("OPConsultation"),
                            }};
                            hip = new ConsentRequestConsentHip() {{
                                id = "rerum";
                            }};
                            hiu = new ConsentRequestConsentHiu() {{
                                id = "dicta";
                            }};
                            patient = new ConsentRequestConsentPatient() {{
                                id = "debitis";
                            }};
                            permission = new Permission() {{
                                accessMode = "VIEW";
                                dataEraseAt = "2005-09-27T09:17:54Z";
                                dateRange = new PermissionDateRange() {{
                                    from = "1970-04-14T21:44:49Z";
                                    to = "2021-10-23T13:19:10Z";
                                }};
                                frequency = new PermissionFrequency() {{
                                    repeats = 7259475919510918339;
                                    unit = "YEAR";
                                    value = 3287288577352441706;
                                }};
                            }};
                            purpose = new UsePurpose() {{
                                code = "vitae";
                                refUri = "totam";
                                text = "dolores";
                            }};
                            requester = new Requester() {{
                                identifier = new RequesterIdentifier() {{
                                    system = "illum";
                                    type = "debitis";
                                    value = "vel";
                                }};
                                name = "odio";
                            }};
                        }};
                        requestId = "dolore";
                        timestamp = "1993-03-23T22:53:08Z";
                    }};
                }};
            }};

            PostV05ConsentRequestsInitResponse res = sdk.consent.postV05ConsentRequestsInit(req);

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

### consent

* `postV05ConsentRequestsInit` - Create consent request
* `postV05ConsentRequestsStatus` - Get consent request status
* `postV05ConsentsFetch` - Get consent artefact
* `postV05ConsentsHipOnNotify` - Consent notification
* `postV05ConsentsHiuOnNotify` - Consent notification

### data flow

* `postV05HealthInformationNotify` - Notifications corresponding to events during data flow
* `postV05HealthInformationOnRequest` - Health information data request acknowledgement from HIP
* `postV05HealthInformationRequest` - Health information data request from HIU

### discovery

* `postV05CareContextsOnDiscover` - Response to patient's account discovery request

### hip facing

* `postV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### hiu facing

* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* `postV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

### identification

* `postV05PatientsFind` - Identify a patient by her consent-manager user-id

### link

* `postV05LinksLinkAddContexts` - API for HIP initiated care-context linking for patient
* `postV05LinksLinkOnConfirm` - Token authenticated by HIP, indicating completion of linkage of care-contexts
* `postV05LinksLinkOnInit` - Response to patient's care context link request

### monitoring

* `getV05Heartbeat` - Get consent request status

### profile

* `postV05PatientsProfileOnShare` - Response to patient's share profile request

### subscriptions

* `postV05SubscriptionRequestsCmInit` - Request for subscription
* `postV05SubscriptionRequestsHiuOnNotify` - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* `postV05SubscriptionsHiuOnNotify` - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

### user auth

* `postV05UsersAuthConfirm` - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* `postV05UsersAuthFetchModes` - Get a patient's authentication modes relevant to specified purpose
* `postV05UsersAuthInit` - Initialize authentication from HIP
* `postV05UsersAuthOnNotify` - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
