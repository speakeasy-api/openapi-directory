# cmFacing

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact
* [postV05HealthInformationCmOnRequestJson](#postv05healthinformationcmonrequestjson) - Health information data request
* [postV05HealthInformationCmOnRequestRaw](#postv05healthinformationcmonrequestraw) - Health information data request
* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request
* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05PatientsOnFindJson](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [postV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id
* [postV05PatientsProfileShareJson](#postv05patientsprofilesharejson) - Share patient profile details
* [postV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details
* [postV05PatientsSmsOnNotifyJson](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP
* [postV05SubscriptionRequestsCmOnInit](#postv05subscriptionrequestscmoninit) - callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
* [postV05SubscriptionRequestsHiuNotifyJson](#postv05subscriptionrequestshiunotifyjson) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionRequestsHiuNotifyRaw](#postv05subscriptionrequestshiunotifyraw) - Notification for subscription grant/deny/revoke
* [postV05SubscriptionsHiuNotifyJson](#postv05subscriptionshiunotifyjson) - Notification to HIU on basis of a granted subscription
* [postV05SubscriptionsHiuNotifyRaw](#postv05subscriptionshiunotifyraw) - Notification to HIU on basis of a granted subscription
* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

## postV05CareContextsDiscoverJson

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryRequest;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatient;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverJsonRequest req = new PostV05CareContextsDiscoverJsonRequest("esse",                 new PatientDiscoveryRequest(                new PatientDiscoveryRequestPatient(PatientGenderEnum.O, "<patient-id>@<consent-manager-id>", "chandler bing",                 new org.openapis.openapi.models.shared.Identifier[]{{
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                    value = "+919800083232";
                                                                }}),
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.MOBILE;
                                                                    value = "+919800083232";
                                                                }}),
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                    value = "+919800083232";
                                                                }}),
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                    value = "+919800083232";
                                                                }}),
                                                            }}, 2000L) {{
                                                unverifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                    add(new Identifier() {{
                                                        type = IdentifierTypeEnum.MOBILE;
                                                        value = "+919800083232";
                                                    }}),
                                                    add(new Identifier() {{
                                                        type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                        value = "+919800083232";
                                                    }}),
                                                    add(new Identifier() {{
                                                        type = IdentifierTypeEnum.HEALTH_ID;
                                                        value = "+919800083232";
                                                    }}),
                                                }};
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-06-08T13:49:32.889Z"), "16742cb7-3920-4592-9396-fea7596eb10f");, "est");            

            PostV05CareContextsDiscoverJsonResponse res = sdk.cmFacing.postV05CareContextsDiscoverJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05CareContextsDiscoverRaw

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverRawRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverRawResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryRequest;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatient;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverRawRequest req = new PostV05CareContextsDiscoverRawRequest("mollitia", "laborum".getBytes(), "dolores");            

            PostV05CareContextsDiscoverRawResponse res = sdk.cmFacing.postV05CareContextsDiscoverRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05CareContextsOnDiscoverJson

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsOnDiscoverJsonRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsOnDiscoverJsonResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryResult;
import org.openapis.openapi.models.shared.PatientRepresentation;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsOnDiscoverJsonRequest req = new PostV05CareContextsOnDiscoverJsonRequest("dolorem",                 new PatientDiscoveryResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("52c59559-07af-4f1a-ba2f-a9467739251a");, OffsetDateTime.parse("2022-05-14T10:37:30.872Z"), "2c3f5ad0-19da-41ff-a78f-097b0074f154") {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "dicta";
                                }};;
                                patient = new PatientRepresentation("harum", "enim") {{
                                    careContexts = new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                        add(new CareContextRepresentation("quae", "ipsum") {{
                                            display = "commodi";
                                            referenceNumber = "repudiandae";
                                        }}),
                                        add(new CareContextRepresentation("excepturi", "pariatur") {{
                                            display = "quidem";
                                            referenceNumber = "molestias";
                                        }}),
                                        add(new CareContextRepresentation("rem", "voluptates") {{
                                            display = "modi";
                                            referenceNumber = "praesentium";
                                        }}),
                                        add(new CareContextRepresentation("sint", "veritatis") {{
                                            display = "quasi";
                                            referenceNumber = "repudiandae";
                                        }}),
                                    }};
                                    matchedBy = new org.openapis.openapi.models.shared.IdentifierTypeEnum[]{{
                                        add(IdentifierTypeEnum.MR),
                                        add(IdentifierTypeEnum.MR),
                                        add(IdentifierTypeEnum.MOBILE),
                                        add(IdentifierTypeEnum.NDHM_HEALTH_NUMBER),
                                    }};
                                }};;
                            }};, "quibusdam");            

            PostV05CareContextsOnDiscoverJsonResponse res = sdk.cmFacing.postV05CareContextsOnDiscoverJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05CareContextsOnDiscoverRaw

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsOnDiscoverRawRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsOnDiscoverRawResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryResult;
import org.openapis.openapi.models.shared.PatientRepresentation;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsOnDiscoverRawRequest req = new PostV05CareContextsOnDiscoverRawRequest("explicabo", "deserunt".getBytes(), "distinctio");            

            PostV05CareContextsOnDiscoverRawResponse res = sdk.cmFacing.postV05CareContextsOnDiscoverRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsOnInitJson

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnInitJsonResponse;
import org.openapis.openapi.models.shared.ConsentRequestInitResponse;
import org.openapis.openapi.models.shared.ConsentRequestInitResponseConsentRequest;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsOnInitJsonRequest req = new PostV05ConsentRequestsOnInitJsonRequest("quibusdam",                 new ConsentRequestInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("44269802-d502-4a94-bb4f-63c969e9a3ef");, OffsetDateTime.parse("2022-02-08T14:21:47.573Z")) {{
                                consentRequest = new ConsentRequestInitResponseConsentRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "illum";
                                }};;
                            }};, "maiores");            

            PostV05ConsentRequestsOnInitJsonResponse res = sdk.cmFacing.postV05ConsentRequestsOnInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsOnInitRaw

Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
  Reasons for error may be
  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnInitRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnInitRawResponse;
import org.openapis.openapi.models.shared.ConsentRequestInitResponse;
import org.openapis.openapi.models.shared.ConsentRequestInitResponseConsentRequest;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsOnInitRawRequest req = new PostV05ConsentRequestsOnInitRawRequest("rerum", "dicta".getBytes(), "magnam");            

            PostV05ConsentRequestsOnInitRawResponse res = sdk.cmFacing.postV05ConsentRequestsOnInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsOnStatusJson

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnStatusJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnStatusJsonResponse;
import org.openapis.openapi.models.shared.ConsentArtefactReference;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUConsentRequestStatus;
import org.openapis.openapi.models.shared.HIUConsentRequestStatusConsentRequest;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsOnStatusJsonRequest req = new PostV05ConsentRequestsOnStatusJsonRequest("cumque",                 new HIUConsentRequestStatus("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("d66ae395-efb9-4ba8-8f3a-66997074ba44");, OffsetDateTime.parse("2022-05-20T10:11:05.115Z")) {{
                                consentRequest = new HIUConsentRequestStatusConsentRequest("<consent-request-id>", ConsentStatusEnum.REQUESTED) {{
                                    consentArtefacts = new org.openapis.openapi.models.shared.ConsentArtefactReference[]{{
                                        add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                            id = "<consent-artefact-id>";
                                        }}),
                                        add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                            id = "<consent-artefact-id>";
                                        }}),
                                    }};
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "aspernatur";
                                }};;
                            }};, "architecto");            

            PostV05ConsentRequestsOnStatusJsonResponse res = sdk.cmFacing.postV05ConsentRequestsOnStatusJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsOnStatusRaw

Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnStatusRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsOnStatusRawResponse;
import org.openapis.openapi.models.shared.ConsentArtefactReference;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUConsentRequestStatus;
import org.openapis.openapi.models.shared.HIUConsentRequestStatusConsentRequest;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsOnStatusRawRequest req = new PostV05ConsentRequestsOnStatusRawRequest("magnam", "et".getBytes(), "excepturi");            

            PostV05ConsentRequestsOnStatusRawResponse res = sdk.cmFacing.postV05ConsentRequestsOnStatusRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHipNotifyJson

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.HIPConsentNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetail;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailConsentManager;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailHIP;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipNotifyJsonRequest req = new PostV05ConsentsHipNotifyJsonRequest("ullam",                 new HIPConsentNotification(                new HIPConsentNotificationNotification(                new HIPConsentNotificationNotificationConsentDetail(                new org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts[]{{
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                            }}, "890afa56-3e25-416f-a4c8-b711e5b7fd2e",                 new HIPConsentNotificationNotificationConsentDetailConsentManager("pariatur");, OffsetDateTime.parse("2022-11-02T16:33:42.080Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                            }},                 new HIPConsentNotificationNotificationConsentDetailHIP("quo");,                 new ConsentManagerPatientID() {{
                                                                                id = "hinapatel79@ndhm";
                                                                            }};,                 new Permission(PermissionAccessModeEnum.STREAM, OffsetDateTime.parse("2020-07-30T23:39:27.609Z"),                 new PermissionDateRange() {{
                                                                                                from = OffsetDateTime.parse("2022-06-07T06:40:38.496Z");
                                                                                                to = OffsetDateTime.parse("2022-08-05T09:04:26.932Z");
                                                                                            }};,                 new PermissionFrequency() {{
                                                                                                repeats = 33222L;
                                                                                                unit = PermissionFrequencyUnitEnum.HOUR;
                                                                                                value = 982575L;
                                                                                            }};);,                 new UsePurpose("quidem", "ipsam") {{
                                                                                refUri = "http://impolite-rat.com";
                                                                            }};) {{
                                                                schemaVersion = "pariatur";
                                                            }};, "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9", "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.GRANTED);, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-07-04T15:50:14.407Z"));, "blanditiis");            

            PostV05ConsentsHipNotifyJsonResponse res = sdk.cmFacing.postV05ConsentsHipNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 
  3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipNotifyRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.HIPConsentNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotification;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetail;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailConsentManager;
import org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailHIP;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipNotifyRawRequest req = new PostV05ConsentsHipNotifyRawRequest("error", "eaque".getBytes(), "occaecati");            

            PostV05ConsentsHipNotifyRawResponse res = sdk.cmFacing.postV05ConsentsHipNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHiuNotify

Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. 
1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHiuNotifyRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHiuNotifyResponse;
import org.openapis.openapi.models.shared.ConsentArtefactReference;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.HIUConsentNotificationEvent;
import org.openapis.openapi.models.shared.HIUConsentNotificationEventNotification;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHiuNotifyRequest req = new PostV05ConsentsHiuNotifyRequest("rerum",                 new HIUConsentNotificationEvent(                new HIUConsentNotificationEventNotification("<consent-request-id>", ConsentStatusEnum.EXPIRED) {{
                                                consentArtefacts = new org.openapis.openapi.models.shared.ConsentArtefactReference[]{{
                                                    add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                                        id = "<consent-artefact-id>";
                                                    }}),
                                                    add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                                        id = "<consent-artefact-id>";
                                                    }}),
                                                    add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                                        id = "<consent-artefact-id>";
                                                    }}),
                                                    add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                                        id = "<consent-artefact-id>";
                                                    }}),
                                                }};
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-03-14T08:20:25.450Z"));, "iste");            

            PostV05ConsentsHiuNotifyResponse res = sdk.cmFacing.postV05ConsentsHiuNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsOnFetchJson

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsOnFetchJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsOnFetchJsonResponse;
import org.openapis.openapi.models.shared.ConsentArtefactResponse;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsent;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetail;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailCareContexts;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailConsentManager;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailHip;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailHiu;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.Requester;
import org.openapis.openapi.models.shared.RequesterIdentifier;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsOnFetchJsonRequest req = new PostV05ConsentsOnFetchJsonRequest("dolorum",                 new ConsentArtefactResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("8d9cbf48-6333-423f-9b77-f3a4100674eb");, OffsetDateTime.parse("2021-11-13T08:40:53.559Z")) {{
                                consent = new ConsentArtefactResponseConsent(                new ConsentArtefactResponseConsentConsentDetail(                new org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailCareContexts[]{{
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                }}, "280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9",                 new ConsentArtefactResponseConsentConsentDetailConsentManager("minima");, OffsetDateTime.parse("2021-06-10T21:59:23.045Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                    add(HITypeEnumEnum.OP_CONSULTATION),
                                                                    add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                }},                 new ConsentArtefactResponseConsentConsentDetailHip("tempora");,                 new ConsentArtefactResponseConsentConsentDetailHiu("vel");,                 new ConsentManagerPatientID() {{
                                                                    id = "hinapatel79@ndhm";
                                                                }};,                 new Permission(PermissionAccessModeEnum.STREAM, OffsetDateTime.parse("2022-06-11T17:29:13.872Z"),                 new PermissionDateRange() {{
                                                                                    from = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
                                                                                    to = OffsetDateTime.parse("2022-04-25T01:36:09.517Z");
                                                                                }};,                 new PermissionFrequency() {{
                                                                                    repeats = 483409L;
                                                                                    unit = PermissionFrequencyUnitEnum.WEEK;
                                                                                    value = 788740L;
                                                                                }};);,                 new UsePurpose("tenetur", "amet") {{
                                                                    refUri = "https://unacceptable-destiny.biz";
                                                                }};) {{
                                                    requester = new Requester("Dr. Manju") {{
                                                        identifier = new RequesterIdentifier() {{
                                                            system = "https://www.mciindia.org";
                                                            type = "REGNO";
                                                            value = "MH1001";
                                                        }};;
                                                    }};;
                                                    schemaVersion = "dolorem";
                                                }};, "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.REVOKED);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "nihil";
                                }};;
                            }};, "sit");            

            PostV05ConsentsOnFetchJsonResponse res = sdk.cmFacing.postV05ConsentsOnFetchJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsOnFetchRaw

Must contain either consentDetail or error. Possible reason of errors are 
1. consentId passed through /fetch is invalid


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsOnFetchRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsOnFetchRawResponse;
import org.openapis.openapi.models.shared.ConsentArtefactResponse;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsent;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetail;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailCareContexts;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailConsentManager;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailHip;
import org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailHiu;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.ConsentStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.PermissionAccessModeEnum;
import org.openapis.openapi.models.shared.PermissionDateRange;
import org.openapis.openapi.models.shared.PermissionFrequency;
import org.openapis.openapi.models.shared.PermissionFrequencyUnitEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.Requester;
import org.openapis.openapi.models.shared.RequesterIdentifier;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsOnFetchRawRequest req = new PostV05ConsentsOnFetchRawRequest("expedita", "neque".getBytes(), "sed");            

            PostV05ConsentsOnFetchRawResponse res = sdk.cmFacing.postV05ConsentsOnFetchRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmOnRequestJson

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmOnRequestJsonRequest req = new PostV05HealthInformationCmOnRequestJsonRequest("vel",                 new HIUHealthInformationRequestResponse("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",                 new RequestReference("b5a73429-cdb1-4a84-a2bb-679d2322715b");, OffsetDateTime.parse("2022-11-28T15:41:44.846Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "soluta";
                                }};;
                                hiRequest = new HIUHealthInformationRequestResponseHiRequest(HIUHealthInformationRequestResponseHiRequestSessionStatusEnum.ACKNOWLEDGED, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");;
                            }};, "et");            

            PostV05HealthInformationCmOnRequestJsonResponse res = sdk.cmFacing.postV05HealthInformationCmOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmOnRequestRaw

Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmOnRequestRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmOnRequestRawRequest req = new PostV05HealthInformationCmOnRequestRawRequest("saepe", "ipsum".getBytes(), "veritatis");            

            PostV05HealthInformationCmOnRequestRawResponse res = sdk.cmFacing.postV05HealthInformationCmOnRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipRequestJson

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHIRequest;
import org.openapis.openapi.models.shared.HIPHIRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestJsonRequest req = new PostV05HealthInformationHipRequestJsonRequest("nobis",                 new HIPHIRequest(                new HIPHIRequestHiRequest(                new Consent("quos");, "tempore",                 new DateRange(OffsetDateTime.parse("2022-11-28T16:49:52.722Z"), OffsetDateTime.parse("2022-05-16T23:21:11.104Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-09-18T06:37:26.413Z"), "adipisci", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-10-19T18:50:59.428Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "quae");            

            PostV05HealthInformationHipRequestJsonResponse res = sdk.cmFacing.postV05HealthInformationHipRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipRequestRaw

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHIRequest;
import org.openapis.openapi.models.shared.HIPHIRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestRawRequest req = new PostV05HealthInformationHipRequestRawRequest("aut", "quas".getBytes(), "itaque");            

            PostV05HealthInformationHipRequestRawResponse res = sdk.cmFacing.postV05HealthInformationHipRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkConfirmJson

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkConfirmJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkConfirmJsonResponse;
import org.openapis.openapi.models.shared.LinkConfirmationRequest;
import org.openapis.openapi.models.shared.LinkConfirmationRequestConfirmation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkConfirmJsonRequest req = new PostV05LinksLinkConfirmJsonRequest("consequatur",                 new LinkConfirmationRequest(                new LinkConfirmationRequestConfirmation("est", "repellendus");, "cf4b9218-79fc-4e95-bf73-ef7fbc7abd74", OffsetDateTime.parse("2020-06-15T09:45:48.083Z"));, "sequi");            

            PostV05LinksLinkConfirmJsonResponse res = sdk.cmFacing.postV05LinksLinkConfirmJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkConfirmRaw

API to submit the token that was sent by HIP during the link request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkConfirmRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkConfirmRawResponse;
import org.openapis.openapi.models.shared.LinkConfirmationRequest;
import org.openapis.openapi.models.shared.LinkConfirmationRequestConfirmation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkConfirmRawRequest req = new PostV05LinksLinkConfirmRawRequest("natus", "impedit".getBytes(), "aut");            

            PostV05LinksLinkConfirmRawResponse res = sdk.cmFacing.postV05LinksLinkConfirmRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkInitJson

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkInitJsonResponse;
import org.openapis.openapi.models.shared.CareContext;
import org.openapis.openapi.models.shared.PatientLinkReferenceRequest;
import org.openapis.openapi.models.shared.PatientLinkReferenceRequestPatient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkInitJsonRequest req = new PostV05LinksLinkInitJsonRequest("voluptatibus",                 new PatientLinkReferenceRequest(                new PatientLinkReferenceRequestPatient(                new org.openapis.openapi.models.shared.CareContext[]{{
                                                                add(new CareContext("fugit") {{
                                                                    referenceNumber = "nulla";
                                                                }}),
                                                                add(new CareContext("maiores") {{
                                                                    referenceNumber = "porro";
                                                                }}),
                                                            }}, "hinapatel79@ndhm", "TMH-PUID-001");, "f7c70a45-626d-4436-813f-16d9f5fce6c5", OffsetDateTime.parse("2022-08-08T04:23:21.555Z"), "146c3e25-0fb0-408c-82e1-41aac366c8dd");, "voluptas");            

            PostV05LinksLinkInitJsonResponse res = sdk.cmFacing.postV05LinksLinkInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkInitRaw

Request from CM to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkInitRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkInitRawResponse;
import org.openapis.openapi.models.shared.CareContext;
import org.openapis.openapi.models.shared.PatientLinkReferenceRequest;
import org.openapis.openapi.models.shared.PatientLinkReferenceRequestPatient;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkInitRawRequest req = new PostV05LinksLinkInitRawRequest("libero", "quasi".getBytes(), "tempora");            

            PostV05LinksLinkInitRawResponse res = sdk.cmFacing.postV05LinksLinkInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnAddContextsJson

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnAddContextsJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnAddContextsJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponse;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponseAcknowledgement;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponseAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnAddContextsJsonRequest req = new PostV05LinksLinkOnAddContextsJsonRequest("numquam",                 new PatientCareContextLinkResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("29074747-78a7-4bd4-a6d2-8c10ab3cdca4");, OffsetDateTime.parse("2022-08-17T13:23:48.206Z")) {{
                                acknowledgement = new PatientCareContextLinkResponseAcknowledgement(PatientCareContextLinkResponseAcknowledgementStatusEnum.SUCCESS);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "cupiditate";
                                }};;
                            }};, "consequatur");            

            PostV05LinksLinkOnAddContextsJsonResponse res = sdk.cmFacing.postV05LinksLinkOnAddContextsJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnAddContextsRaw

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnAddContextsRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnAddContextsRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponse;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponseAcknowledgement;
import org.openapis.openapi.models.shared.PatientCareContextLinkResponseAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnAddContextsRawRequest req = new PostV05LinksLinkOnAddContextsRawRequest("tempora", "debitis".getBytes(), "ipsam");            

            PostV05LinksLinkOnAddContextsRawResponse res = sdk.cmFacing.postV05LinksLinkOnAddContextsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsOnFindJson

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientIdentificationResponse;
import org.openapis.openapi.models.shared.PatientIdentificationResponsePatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsOnFindJsonRequest req = new PostV05PatientsOnFindJsonRequest("aspernatur",                 new PatientIdentificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("3c7e0bc7-178e-4479-af2a-70c688282aa4");, OffsetDateTime.parse("2022-09-28T22:21:45.403Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "nisi";
                                }};;
                                patient = new PatientIdentificationResponsePatient("hinapatel79@ndhm", "Hina Patel");;
                            }};);            

            PostV05PatientsOnFindJsonResponse res = sdk.cmFacing.postV05PatientsOnFindJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsOnFindRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientIdentificationResponse;
import org.openapis.openapi.models.shared.PatientIdentificationResponsePatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsOnFindRawRequest req = new PostV05PatientsOnFindRawRequest("fugit", "sapiente".getBytes());            

            PostV05PatientsOnFindRawResponse res = sdk.cmFacing.postV05PatientsOnFindRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileShareJson

Request for sharing patient's profile details to HIP


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareJsonResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.ShareProfileRequest;
import org.openapis.openapi.models.shared.ShareProfileRequestPatient;
import org.openapis.openapi.models.shared.ShareProfileRequestPatientUserDemographics;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileShareJsonRequest req = new PostV05PatientsProfileShareJsonRequest("consequuntur",                 new ShareProfileRequest(                new ShareProfileRequestPatient(                new ShareProfileRequestPatientUserDemographics(PatientGenderEnum.M, "<username>@<suffix>", "1111-1111-1111-11", "Jane Doe", 2000L) {{
                                                                address = new PatientAddress() {{
                                                                    district = "explicabo";
                                                                    line = "saepe";
                                                                    pincode = "occaecati";
                                                                    state = "atque";
                                                                }};;
                                                                dayOfBirth = 92260L;
                                                                identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                                    add(new Identifier() {{
                                                                        type = IdentifierTypeEnum.HEALTH_ID;
                                                                        value = "+919800083232";
                                                                    }}),
                                                                    add(new Identifier() {{
                                                                        type = IdentifierTypeEnum.HEALTH_ID;
                                                                        value = "+919800083232";
                                                                    }}),
                                                                }};
                                                                monthOfBirth = 82971L;
                                                            }};) {{
                                                hipCode = "12345 (CounterId)";
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-03-14T20:41:04.723Z"));, "nam");            

            PostV05PatientsProfileShareJsonResponse res = sdk.cmFacing.postV05PatientsProfileShareJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileShareRawResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.ShareProfileRequest;
import org.openapis.openapi.models.shared.ShareProfileRequestPatient;
import org.openapis.openapi.models.shared.ShareProfileRequestPatientUserDemographics;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileShareRawRequest req = new PostV05PatientsProfileShareRawRequest("vero", "aliquid".getBytes(), "quasi");            

            PostV05PatientsProfileShareRawResponse res = sdk.cmFacing.postV05PatientsProfileShareRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsOnNotifyJson

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponseStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsOnNotifyJsonRequest req = new PostV05PatientsSmsOnNotifyJsonRequest("saepe",                 new PatientSMSNotifcationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("6b7b95bc-0ab3-4c20-84f3-789fd871f99d");, OffsetDateTime.parse("2022-07-12T09:25:25.257Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "asperiores";
                                }};;
                                status = PatientSMSNotifcationResponseStatusEnum.ERRORED;
                            }};, "veritatis");            

            PostV05PatientsSmsOnNotifyJsonResponse res = sdk.cmFacing.postV05PatientsSmsOnNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsOnNotifyRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationResponseStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsOnNotifyRawRequest req = new PostV05PatientsSmsOnNotifyRawRequest("consequuntur", "quasi".getBytes(), "similique");            

            PostV05PatientsSmsOnNotifyRawResponse res = sdk.cmFacing.postV05PatientsSmsOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsCmOnInit

This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmOnInitRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmOnInitResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestReceipt;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestReceiptSubscriptionRequest;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsCmOnInitRequest req = new PostV05SubscriptionRequestsCmOnInitRequest("culpa",                 new HIUSubscriptionRequestReceipt("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("6f1e674b-db04-4f15-b560-82d68ea19f1d");, OffsetDateTime.parse("2022-07-19T05:32:14.038Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "minima";
                                }};;
                                subscriptionRequest = new HIUSubscriptionRequestReceiptSubscriptionRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                            }};, "veritatis");            

            PostV05SubscriptionRequestsCmOnInitResponse res = sdk.cmFacing.postV05SubscriptionRequestsCmOnInit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuNotifyJson

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.HIUSubscription;
import org.openapis.openapi.models.shared.HIUSubscriptionContext;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotification;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotificationNotification;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuNotifyJsonRequest req = new PostV05SubscriptionRequestsHiuNotifyJsonRequest("consectetur",                 new SubscriptionApprovalNotification(                new SubscriptionApprovalNotificationNotification(SubscriptionStatusEnum.GRANTED) {{
                                                subscription = new HIUSubscription(                new OrganizationRepresentation("iste");, "subscription Id",                 new ConsentManagerPatientID() {{
                                                                    id = "hinapatel79@ndhm";
                                                                }};,                 new org.openapis.openapi.models.shared.HIUSubscriptionContext[]{{
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-04-26T11:54:02.741Z"), OffsetDateTime.parse("2022-03-29T01:37:24.454Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("dignissimos") {{
                                                                            id = "8086a184-0394-4c26-871f-93f5f0642dac";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-03-21T02:51:58.534Z"), OffsetDateTime.parse("2022-02-19T04:53:13.708Z")) {{
                                                                            from = OffsetDateTime.parse("2021-01-08T17:32:26.674Z");
                                                                            to = OffsetDateTime.parse("2022-12-08T03:56:05.618Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-07-06T07:53:53.511Z"), OffsetDateTime.parse("2020-04-29T18:47:01.945Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("reiciendis") {{
                                                                            id = "aae8d678-64db-4b67-9fd5-e60b375ed4f6";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2022-01-03T21:58:53.395Z"), OffsetDateTime.parse("2022-10-01T23:04:48.771Z")) {{
                                                                            from = OffsetDateTime.parse("2021-03-11T09:18:18.070Z");
                                                                            to = OffsetDateTime.parse("2022-02-10T06:30:04.103Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2022-09-14T08:30:37.763Z"), OffsetDateTime.parse("2022-08-09T14:55:41.766Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("hic") {{
                                                                            id = "5b60eb1e-a426-4555-ba3c-28744ed53b88";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2021-02-13T15:31:34.151Z"), OffsetDateTime.parse("2022-04-01T23:17:58.998Z")) {{
                                                                            from = OffsetDateTime.parse("2022-05-14T14:10:48.315Z");
                                                                            to = OffsetDateTime.parse("2021-04-07T21:05:22.480Z");
                                                                        }};
                                                                    }}),
                                                                    add(new HIUSubscriptionContext(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                        add(SubscriptionCategoryEnum.LINK),
                                                                                    }},                 new SubscriptionPeriod(OffsetDateTime.parse("2021-08-01T17:10:22.856Z"), OffsetDateTime.parse("2022-09-21T14:42:08.721Z"));) {{
                                                                        categories = new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                            add(SubscriptionCategoryEnum.LINK),
                                                                        }};
                                                                        hip = new OrganizationRepresentation("quos") {{
                                                                            id = "b7b194a2-76b2-4691-afe1-f08f4294e369";
                                                                        }};
                                                                        period = new SubscriptionPeriod(OffsetDateTime.parse("2021-10-18T02:58:04.604Z"), OffsetDateTime.parse("2022-10-02T07:53:52.364Z")) {{
                                                                            from = OffsetDateTime.parse("2022-03-09T12:57:54.030Z");
                                                                            to = OffsetDateTime.parse("2022-07-18T18:18:32.854Z");
                                                                        }};
                                                                    }}),
                                                                }});;
                                                subscriptionRequestId = "request id of the subscription";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-02-08T08:59:54.184Z"));, "rem");            

            PostV05SubscriptionRequestsHiuNotifyJsonResponse res = sdk.cmFacing.postV05SubscriptionRequestsHiuNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuNotifyRaw

This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuNotifyRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.HIUSubscription;
import org.openapis.openapi.models.shared.HIUSubscriptionContext;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotification;
import org.openapis.openapi.models.shared.SubscriptionApprovalNotificationNotification;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuNotifyRawRequest req = new PostV05SubscriptionRequestsHiuNotifyRawRequest("sit", "nobis".getBytes(), "error");            

            PostV05SubscriptionRequestsHiuNotifyRawResponse res = sdk.cmFacing.postV05SubscriptionRequestsHiuNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionsHiuNotifyJson

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyJsonResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.EventCategoryDetail;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionEventContent;
import org.openapis.openapi.models.shared.HIUSubscriptionNotification;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationEvent;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuNotifyJsonRequest req = new PostV05SubscriptionsHiuNotifyJsonRequest("veniam",                 new HIUSubscriptionNotification(                new HIUSubscriptionNotificationEvent(SubscriptionCategoryEnum.LINK,                 new HIUSubscriptionEventContent(                new org.openapis.openapi.models.shared.EventCategoryDetail[]{{
                                                                                add(new EventCategoryDetail(                new CareContextDefinition("Episode1", "batman@tmh");,                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                                                    add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                                }}) {{
                                                                                    careContext = new CareContextDefinition("Episode1", "batman@tmh") {{
                                                                                        careContextReference = "Episode1";
                                                                                        patientReference = "batman@tmh";
                                                                                    }};
                                                                                    hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                        add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                        add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                        add(HITypeEnumEnum.OP_CONSULTATION),
                                                                                    }};
                                                                                }}),
                                                                                add(new EventCategoryDetail(                new CareContextDefinition("Episode1", "batman@tmh");,                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                                    add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                                    add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                                }}) {{
                                                                                    careContext = new CareContextDefinition("Episode1", "batman@tmh") {{
                                                                                        careContextReference = "Episode1";
                                                                                        patientReference = "batman@tmh";
                                                                                    }};
                                                                                    hiTypes = new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                        add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                                    }};
                                                                                }}),
                                                                            }},                 new OrganizationRepresentation("laboriosam");,                 new ConsentManagerPatientID() {{
                                                                                id = "hinapatel79@ndhm";
                                                                            }};);, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-12-10T00:50:30.454Z"), "subscription Id");, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-02-10T08:43:29.852Z"));, "expedita");            

            PostV05SubscriptionsHiuNotifyJsonResponse res = sdk.cmFacing.postV05SubscriptionsHiuNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionsHiuNotifyRaw

This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. 
1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. 
2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuNotifyRawResponse;
import org.openapis.openapi.models.shared.CareContextDefinition;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.EventCategoryDetail;
import org.openapis.openapi.models.shared.HITypeEnumEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionEventContent;
import org.openapis.openapi.models.shared.HIUSubscriptionNotification;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationEvent;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuNotifyRawRequest req = new PostV05SubscriptionsHiuNotifyRawRequest("debitis", "neque".getBytes(), "dolorum");            

            PostV05SubscriptionsHiuNotifyRawResponse res = sdk.cmFacing.postV05SubscriptionsHiuNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthNotifyJson

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthNotifyJsonResponse;
import org.openapis.openapi.models.shared.AccessTokenValidity;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientAuthNotification;
import org.openapis.openapi.models.shared.PatientAuthNotificationAuth;
import org.openapis.openapi.models.shared.PatientAuthNotificationAuthStatusEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientDemographicResponse;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthNotifyJsonRequest req = new PostV05UsersAuthNotifyJsonRequest("nostrum",                 new PatientAuthNotification("5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-08-25T08:13:54.077Z")) {{
                                auth = new PatientAuthNotificationAuth(PatientAuthNotificationAuthStatusEnum.DENIED, "accusamus") {{
                                    accessToken = "tempora";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.O, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "fugit";
                                            line = "ut";
                                            pincode = "fugiat";
                                            state = "voluptatem";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MR;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MOBILE;
                                                value = "+919800083232";
                                            }}),
                                        }};
                                    }};;
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2022-08-17T23:19:52.079Z"), 1L, PatientAuthPurposeEnum.LINK,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIU););;
                                }};;
                            }};, "quas", "repudiandae");            

            PostV05UsersAuthNotifyJsonResponse res = sdk.cmFacing.postV05UsersAuthNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthNotifyRaw

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthNotifyRawResponse;
import org.openapis.openapi.models.shared.AccessTokenValidity;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientAuthNotification;
import org.openapis.openapi.models.shared.PatientAuthNotificationAuth;
import org.openapis.openapi.models.shared.PatientAuthNotificationAuthStatusEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientDemographicResponse;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthNotifyRawRequest req = new PostV05UsersAuthNotifyRawRequest("corporis", "et".getBytes(), "blanditiis", "ex");            

            PostV05UsersAuthNotifyRawResponse res = sdk.cmFacing.postV05UsersAuthNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnConfirmJson

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnConfirmJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnConfirmJsonResponse;
import org.openapis.openapi.models.shared.AccessTokenValidity;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientAuthConfirmResponse;
import org.openapis.openapi.models.shared.PatientAuthConfirmResponseAuth;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientDemographicResponse;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnConfirmJsonRequest req = new PostV05UsersAuthOnConfirmJsonRequest("sed",                 new PatientAuthConfirmResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("065e904f-3b11-494b-8abf-603a79f9dfe0");, OffsetDateTime.parse("2021-08-10T13:37:39.961Z")) {{
                                auth = new PatientAuthConfirmResponseAuth() {{
                                    accessToken = "reprehenderit";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.U, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "fuga";
                                            line = "praesentium";
                                            pincode = "mollitia";
                                            state = "veniam";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.HEALTH_ID;
                                                value = "+919800083232";
                                            }}),
                                        }};
                                    }};;
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2022-09-16T12:27:20.507Z"), 1L, PatientAuthPurposeEnum.KYC,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIP););;
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "totam";
                                }};;
                            }};, "suscipit", "quidem");            

            PostV05UsersAuthOnConfirmJsonResponse res = sdk.cmFacing.postV05UsersAuthOnConfirmJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnConfirmRaw

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnConfirmRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnConfirmRawResponse;
import org.openapis.openapi.models.shared.AccessTokenValidity;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAddress;
import org.openapis.openapi.models.shared.PatientAuthConfirmResponse;
import org.openapis.openapi.models.shared.PatientAuthConfirmResponseAuth;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientDemographicResponse;
import org.openapis.openapi.models.shared.PatientGenderEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnConfirmRawRequest req = new PostV05UsersAuthOnConfirmRawRequest("maxime", "et".getBytes(), "esse", "amet");            

            PostV05UsersAuthOnConfirmRawResponse res = sdk.cmFacing.postV05UsersAuthOnConfirmRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnFetchModesJson

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnFetchModesJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnFetchModesJsonResponse;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthModeQueryResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryResponseAuth;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnFetchModesJsonRequest req = new PostV05UsersAuthOnFetchModesJsonRequest("assumenda",                 new PatientAuthModeQueryResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("689eee95-26f8-4d98-ae88-1ead4f0e1012");, OffsetDateTime.parse("2022-08-11T23:10:48.145Z")) {{
                                auth = new PatientAuthModeQueryResponseAuth(                new org.openapis.openapi.models.shared.AuthenticationModeEnum[]{{
                                                    add(AuthenticationModeEnum.AADHAAR_OTP),
                                                }}, PatientAuthPurposeEnum.KYC);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "saepe";
                                }};;
                            }};, "consequuntur", "occaecati");            

            PostV05UsersAuthOnFetchModesJsonResponse res = sdk.cmFacing.postV05UsersAuthOnFetchModesJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnFetchModesRaw

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnFetchModesRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnFetchModesRawResponse;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthModeQueryResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryResponseAuth;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnFetchModesRawRequest req = new PostV05UsersAuthOnFetchModesRawRequest("officiis", "perspiciatis".getBytes(), "in", "adipisci");            

            PostV05UsersAuthOnFetchModesRawResponse res = sdk.cmFacing.postV05UsersAuthOnFetchModesRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnInitJson

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnInitJsonResponse;
import org.openapis.openapi.models.shared.AuthMeta;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthInitResponse;
import org.openapis.openapi.models.shared.PatientAuthInitResponseAuth;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnInitJsonRequest req = new PostV05UsersAuthOnInitJsonRequest("eveniet",                 new PatientAuthInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("922a57a1-5be3-4e06-8807-e2b6e3ab8845");, OffsetDateTime.parse("2022-12-28T14:32:37.413Z")) {{
                                auth = new PatientAuthInitResponseAuth(AuthenticationModeEnum.DIRECT, "perspiciatis") {{
                                    meta = new AuthMeta() {{
                                        expiry = "2019-12-30T12:01:55Z";
                                        hint = "nihil";
                                    }};;
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "voluptas";
                                }};;
                            }};, "alias", "maiores");            

            PostV05UsersAuthOnInitJsonResponse res = sdk.cmFacing.postV05UsersAuthOnInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnInitRaw

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnInitRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnInitRawResponse;
import org.openapis.openapi.models.shared.AuthMeta;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthInitResponse;
import org.openapis.openapi.models.shared.PatientAuthInitResponseAuth;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnInitRawRequest req = new PostV05UsersAuthOnInitRawRequest("reiciendis", "dolores".getBytes(), "id", "minima");            

            PostV05UsersAuthOnInitRawResponse res = sdk.cmFacing.postV05UsersAuthOnInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
