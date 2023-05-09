# consentFlow

### Available Operations

* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipNotifyJson](#postv05consentshipnotifyjson) - Consent notification
* [postV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification
* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## postV05ConsentRequestsInitJson

Creates a consent request to get data about a patient by HIU user.

### Example Usage

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

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("dolore",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                            }},                 new ConsentRequestConsentHiu("omnis");,                 new ConsentRequestConsentPatient() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new Permission(PermissionAccessModeEnum.STORE, OffsetDateTime.parse("2022-08-06T19:48:35.360Z"),                 new PermissionDateRange() {{
                                                                                from = OffsetDateTime.parse("2022-05-14T22:22:36.102Z");
                                                                                to = OffsetDateTime.parse("2022-02-09T21:52:52.867Z");
                                                                            }};,                 new PermissionFrequency() {{
                                                                                repeats = 514513L;
                                                                                unit = PermissionFrequencyUnitEnum.DAY;
                                                                                value = 367927L;
                                                                            }};);,                 new UsePurpose("recusandae", "esse") {{
                                                                refUri = "https://gloomy-homework.org";
                                                            }};,                 new Requester("Dr. Manju") {{
                                                                identifier = new RequesterIdentifier() {{
                                                                    system = "https://www.mciindia.org";
                                                                    type = "REGNO";
                                                                    value = "MH1001";
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
                                                hip = new ConsentRequestConsentHip("aspernatur");;
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-11-26T15:59:49.659Z"));, "animi");            

            PostV05ConsentRequestsInitJsonResponse res = sdk.consentFlow.postV05ConsentRequestsInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsInitRawResponse;
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

            PostV05ConsentRequestsInitRawRequest req = new PostV05ConsentRequestsInitRawRequest("nostrum", "mollitia".getBytes(), "provident");            

            PostV05ConsentRequestsInitRawResponse res = sdk.consentFlow.postV05ConsentRequestsInitRaw(req);

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

            PostV05ConsentRequestsOnInitJsonRequest req = new PostV05ConsentRequestsOnInitJsonRequest("possimus",                 new ConsentRequestInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("a660ff57-bfaa-4d4f-9efc-1b4512c10326");, OffsetDateTime.parse("2022-06-24T11:18:45.161Z")) {{
                                consentRequest = new ConsentRequestInitResponseConsentRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "impedit";
                                }};;
                            }};, "eos");            

            PostV05ConsentRequestsOnInitJsonResponse res = sdk.consentFlow.postV05ConsentRequestsOnInitJson(req);

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

            PostV05ConsentRequestsOnInitRawRequest req = new PostV05ConsentRequestsOnInitRawRequest("sapiente", "eum".getBytes(), "dicta");            

            PostV05ConsentRequestsOnInitRawResponse res = sdk.consentFlow.postV05ConsentRequestsOnInitRaw(req);

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

            PostV05ConsentRequestsOnStatusJsonRequest req = new PostV05ConsentRequestsOnStatusJsonRequest("minima",                 new HIUConsentRequestStatus("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("199ebfd0-e9fe-46c6-b2ca-3aed01179963");, OffsetDateTime.parse("2022-10-31T07:20:14.068Z")) {{
                                consentRequest = new HIUConsentRequestStatusConsentRequest("<consent-request-id>", ConsentStatusEnum.REVOKED) {{
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
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "ipsa";
                                }};;
                            }};, "tempora");            

            PostV05ConsentRequestsOnStatusJsonResponse res = sdk.consentFlow.postV05ConsentRequestsOnStatusJson(req);

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

            PostV05ConsentRequestsOnStatusRawRequest req = new PostV05ConsentRequestsOnStatusRawRequest("nihil", "molestiae".getBytes(), "dicta");            

            PostV05ConsentRequestsOnStatusRawResponse res = sdk.consentFlow.postV05ConsentRequestsOnStatusRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsStatusJson

Get status of consent request done previously

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsStatusJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsStatusJsonResponse;
import org.openapis.openapi.models.shared.ConsentRequestStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsStatusJsonRequest req = new PostV05ConsentRequestsStatusJsonRequest("iusto",                 new ConsentRequestStatusRequest("esse", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-01-15T15:03:36.543Z"));, "reiciendis");            

            PostV05ConsentRequestsStatusJsonResponse res = sdk.consentFlow.postV05ConsentRequestsStatusJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentRequestsStatusRaw

Get status of consent request done previously

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsStatusRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentRequestsStatusRawResponse;
import org.openapis.openapi.models.shared.ConsentRequestStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentRequestsStatusRawRequest req = new PostV05ConsentRequestsStatusRawRequest("vel", "architecto".getBytes(), "fugiat");            

            PostV05ConsentRequestsStatusRawResponse res = sdk.consentFlow.postV05ConsentRequestsStatusRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsFetch

Get consent artefact

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsFetchRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsFetchResponse;
import org.openapis.openapi.models.shared.ConsentFetchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsFetchRequest req = new PostV05ConsentsFetchRequest("doloremque",                 new ConsentFetchRequest("dicta", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-09-23T23:49:53.776Z"));, "esse");            

            PostV05ConsentsFetchResponse res = sdk.consentFlow.postV05ConsentsFetch(req);

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

            PostV05ConsentsHipNotifyJsonRequest req = new PostV05ConsentsHipNotifyJsonRequest("ex",                 new HIPConsentNotification(                new HIPConsentNotificationNotification(                new HIPConsentNotificationNotificationConsentDetail(                new org.openapis.openapi.models.shared.HIPConsentNotificationNotificationConsentDetailCareContexts[]{{
                                                                                add(new HIPConsentNotificationNotificationConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                                    careContextReference = "Episode1";
                                                                                    patientReference = "hinapatel79@hospital";
                                                                                }}),
                                                                            }}, "60a15db6-a660-4659-a1ad-eaab5851d6c6",                 new HIPConsentNotificationNotificationConsentDetailConsentManager("ut");, OffsetDateTime.parse("2022-04-15T09:59:51.518Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                            }},                 new HIPConsentNotificationNotificationConsentDetailHIP("cum");,                 new ConsentManagerPatientID() {{
                                                                                id = "hinapatel79@ndhm";
                                                                            }};,                 new Permission(PermissionAccessModeEnum.STORE, OffsetDateTime.parse("2022-06-21T05:39:54.582Z"),                 new PermissionDateRange() {{
                                                                                                from = OffsetDateTime.parse("2022-10-30T18:42:59.470Z");
                                                                                                to = OffsetDateTime.parse("2021-09-02T01:19:33.894Z");
                                                                                            }};,                 new PermissionFrequency() {{
                                                                                                repeats = 634786L;
                                                                                                unit = PermissionFrequencyUnitEnum.HOUR;
                                                                                                value = 959143L;
                                                                                            }};);,                 new UsePurpose("officiis", "architecto") {{
                                                                                refUri = "https://trained-technologist.com";
                                                                            }};) {{
                                                                schemaVersion = "alias";
                                                            }};, "8e6f8c5f-350d-48cd-b5a3-418143010421", "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.DENIED);, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-10-11T17:30:58.651Z"));, "fugiat");            

            PostV05ConsentsHipNotifyJsonResponse res = sdk.consentFlow.postV05ConsentsHipNotifyJson(req);

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

            PostV05ConsentsHipNotifyRawRequest req = new PostV05ConsentsHipNotifyRawRequest("ipsam", "consequuntur".getBytes(), "ipsa");            

            PostV05ConsentsHipNotifyRawResponse res = sdk.consentFlow.postV05ConsentsHipNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHipOnNotifyJson

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipOnNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipOnNotifyJsonResponse;
import org.openapis.openapi.models.shared.ConsentAcknowledgement;
import org.openapis.openapi.models.shared.ConsentAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPConsentNotificationResponse;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipOnNotifyJsonRequest req = new PostV05ConsentsHipOnNotifyJsonRequest("quas",                 new HIPConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("ece7e253-b668-4451-86c6-e205e16deab3");, OffsetDateTime.parse("2020-03-31T16:32:36.866Z")) {{
                                acknowledgement = new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "nemo";
                                }};;
                            }};, "voluptate");            

            PostV05ConsentsHipOnNotifyJsonResponse res = sdk.consentFlow.postV05ConsentsHipOnNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHipOnNotifyRaw

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHipOnNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHipOnNotifyRawResponse;
import org.openapis.openapi.models.shared.ConsentAcknowledgement;
import org.openapis.openapi.models.shared.ConsentAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPConsentNotificationResponse;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHipOnNotifyRawRequest req = new PostV05ConsentsHipOnNotifyRawRequest("blanditiis", "officia".getBytes(), "voluptas");            

            PostV05ConsentsHipOnNotifyRawResponse res = sdk.consentFlow.postV05ConsentsHipOnNotifyRaw(req);

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

            PostV05ConsentsHiuNotifyRequest req = new PostV05ConsentsHiuNotifyRequest("numquam",                 new HIUConsentNotificationEvent(                new HIUConsentNotificationEventNotification("<consent-request-id>", ConsentStatusEnum.EXPIRED) {{
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
                                                }};
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-11-13T20:31:38.306Z"));, "ducimus");            

            PostV05ConsentsHiuNotifyResponse res = sdk.consentFlow.postV05ConsentsHiuNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05ConsentsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05ConsentsHiuOnNotifyRequest;
import org.openapis.openapi.models.operations.PostV05ConsentsHiuOnNotifyResponse;
import org.openapis.openapi.models.shared.ConsentAcknowledgement;
import org.openapis.openapi.models.shared.ConsentAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUConsentNotificationResponse;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05ConsentsHiuOnNotifyRequest req = new PostV05ConsentsHiuOnNotifyRequest("nesciunt",                 new HIUConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("a8418d16-2309-4fb0-9299-21aefb9f58c4");, OffsetDateTime.parse("2021-05-09T07:07:29.255Z")) {{
                                acknowledgement = new org.openapis.openapi.models.shared.ConsentAcknowledgement[]{{
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                }};
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "nam";
                                }};;
                            }};, "vero");            

            PostV05ConsentsHiuOnNotifyResponse res = sdk.consentFlow.postV05ConsentsHiuOnNotify(req);

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

            PostV05ConsentsOnFetchJsonRequest req = new PostV05ConsentsOnFetchJsonRequest("voluptatem",                 new ConsentArtefactResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("56013f59-da75-47a5-9ecf-ef66ef1caa33");, OffsetDateTime.parse("2022-07-26T23:40:06.851Z")) {{
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
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                }}, "2beb4773-73c8-4d72-b64d-1db1f2c43106",                 new ConsentArtefactResponseConsentConsentDetailConsentManager("ea");, OffsetDateTime.parse("2022-02-14T14:54:11.075Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                    add(HITypeEnumEnum.OP_CONSULTATION),
                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                }},                 new ConsentArtefactResponseConsentConsentDetailHip("perspiciatis");,                 new ConsentArtefactResponseConsentConsentDetailHiu("earum");,                 new ConsentManagerPatientID() {{
                                                                    id = "hinapatel79@ndhm";
                                                                }};,                 new Permission(PermissionAccessModeEnum.VIEW, OffsetDateTime.parse("2020-01-28T09:46:18.788Z"),                 new PermissionDateRange() {{
                                                                                    from = OffsetDateTime.parse("2021-02-19T05:31:39.522Z");
                                                                                    to = OffsetDateTime.parse("2022-08-10T23:51:31.143Z");
                                                                                }};,                 new PermissionFrequency() {{
                                                                                    repeats = 931505L;
                                                                                    unit = PermissionFrequencyUnitEnum.WEEK;
                                                                                    value = 673838L;
                                                                                }};);,                 new UsePurpose("non", "dolor") {{
                                                                    refUri = "http://alert-architect.com";
                                                                }};) {{
                                                    requester = new Requester("Dr. Manju") {{
                                                        identifier = new RequesterIdentifier() {{
                                                            system = "https://www.mciindia.org";
                                                            type = "REGNO";
                                                            value = "MH1001";
                                                        }};;
                                                    }};;
                                                    schemaVersion = "officia";
                                                }};, "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.REVOKED);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "quidem";
                                }};;
                            }};, "voluptas");            

            PostV05ConsentsOnFetchJsonResponse res = sdk.consentFlow.postV05ConsentsOnFetchJson(req);

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

            PostV05ConsentsOnFetchRawRequest req = new PostV05ConsentsOnFetchRawRequest("facilis", "placeat".getBytes(), "perspiciatis");            

            PostV05ConsentsOnFetchRawResponse res = sdk.consentFlow.postV05ConsentsOnFetchRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
