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
                    authorization = "at";
                }};
                request = new PostV05ConsentRequestsInitRequests() {{
                    applicationXML = "distinctio".getBytes();
                    consentRequest = new ConsentRequest() {{
                        consent = new ConsentRequestConsent() {{
                            careContexts = new openapisdk.models.shared.CareContextDefinition[]() {{
                                add(new CareContextDefinition() {{
                                    careContextReference = "dolores";
                                    patientReference = "aut";
                                }}),
                                add(new CareContextDefinition() {{
                                    careContextReference = "asperiores";
                                    patientReference = "qui";
                                }}),
                            }};
                            hiTypes = new openapisdk.models.shared.HiTypeEnumEnum[]() {{
                                add("OPConsultation"),
                                add("Prescription"),
                            }};
                            hip = new ConsentRequestConsentHip() {{
                                id = "sunt";
                            }};
                            hiu = new ConsentRequestConsentHiu() {{
                                id = "corporis";
                            }};
                            patient = new ConsentRequestConsentPatient() {{
                                id = "cupiditate";
                            }};
                            permission = new Permission() {{
                                accessMode = "STREAM";
                                dataEraseAt = "1992-05-19T13:25:30Z";
                                dateRange = new PermissionDateRange() {{
                                    from = "1985-10-15T05:05:36Z";
                                    to = "1992-12-10T10:45:58Z";
                                }};
                                frequency = new PermissionFrequency() {{
                                    repeats = 4746888211219605305;
                                    unit = "MONTH";
                                    value = 4865214569509404234;
                                }};
                            }};
                            purpose = new UsePurpose() {{
                                code = "deleniti";
                                refUri = "tempora";
                                text = "ut";
                            }};
                            requester = new Requester() {{
                                identifier = new RequesterIdentifier() {{
                                    system = "consequatur";
                                    type = "molestiae";
                                    value = "quisquam";
                                }};
                                name = "aliquid";
                            }};
                        }};
                        requestId = "quia";
                        timestamp = "1976-06-02T21:23:01Z";
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
