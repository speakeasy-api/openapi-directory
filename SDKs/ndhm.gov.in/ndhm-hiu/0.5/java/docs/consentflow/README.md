# consentFlow

### Available Operations

* [postV05ConsentRequestsOnInitJson](#postv05consentrequestsoninitjson) - Response to consent request
* [postV05ConsentRequestsOnInitRaw](#postv05consentrequestsoninitraw) - Response to consent request
* [postV05ConsentRequestsOnStatusJson](#postv05consentrequestsonstatusjson) - Result of consent request status
* [postV05ConsentRequestsOnStatusRaw](#postv05consentrequestsonstatusraw) - Result of consent request status
* [postV05ConsentsHiuNotify](#postv05consentshiunotify) - Consent notification
* [postV05ConsentsOnFetchJson](#postv05consentsonfetchjson) - Result of fetch request for a consent artefact
* [postV05ConsentsOnFetchRaw](#postv05consentsonfetchraw) - Result of fetch request for a consent artefact

## postV05ConsentRequestsOnInitJson

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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

            PostV05ConsentRequestsOnInitJsonRequest req = new PostV05ConsentRequestsOnInitJsonRequest("ipsum",                 new ConsentRequestInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("7ae4203c-e5e6-4a95-98a0-d446ce2af7a7");, OffsetDateTime.parse("2022-03-19T02:38:33.395Z")) {{
                                consentRequest = new ConsentRequestInitResponseConsentRequest("f29f0e59-8388-4698-9fe6-05db67aeac46");;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "amet");;
                            }};, "tempore");            

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

Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
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

            PostV05ConsentRequestsOnInitRawRequest req = new PostV05ConsentRequestsOnInitRawRequest("accusamus", "numquam".getBytes(), "enim");            

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

            PostV05ConsentRequestsOnStatusJsonRequest req = new PostV05ConsentRequestsOnStatusJsonRequest("dolorem",                 new HIUConsentRequestStatus("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("f870b326-b5a7-4342-9cdb-1a8422bb679d");, OffsetDateTime.parse("2022-10-18T05:22:32.548Z")) {{
                                consentRequest = new HIUConsentRequestStatusConsentRequest(                new org.openapis.openapi.models.shared.ConsentArtefactReference[]{{
                                                    add(new ConsentArtefactReference("<consent-artefact-id>") {{
                                                        id = "<consent-artefact-id>";
                                                    }}),
                                                }}, "<consent-request-id>", ConsentStatusEnum.GRANTED);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "sunt");;
                            }};, "ullam");            

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

            PostV05ConsentRequestsOnStatusRawRequest req = new PostV05ConsentRequestsOnStatusRawRequest("nam", "hic".getBytes(), "voluptatem");            

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

            PostV05ConsentsHiuNotifyRequest req = new PostV05ConsentsHiuNotifyRequest("cumque",                 new HIUConsentNotificationEvent(                new HIUConsentNotificationEventNotification("<consent-request-id>", ConsentStatusEnum.REQUESTED) {{
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
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-02-05T03:24:54.198Z"));, "ipsum");            

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

## postV05ConsentsOnFetchJson

Must contain either consent or error. Possible reason of errors are 
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

            PostV05ConsentsOnFetchJsonRequest req = new PostV05ConsentsOnFetchJsonRequest("veritatis",                 new ConsentArtefactResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("b8b90f34-43a1-4108-a0ad-cf4b921879fc");, OffsetDateTime.parse("2021-03-07T21:49:29.078Z")) {{
                                consent = new ConsentArtefactResponseConsent(                new ConsentArtefactResponseConsentConsentDetail(                new org.openapis.openapi.models.shared.ConsentArtefactResponseConsentConsentDetailCareContexts[]{{
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                    add(new ConsentArtefactResponseConsentConsentDetailCareContexts("Episode1", "hinapatel79@hospital") {{
                                                                        careContextReference = "Episode1";
                                                                        patientReference = "hinapatel79@hospital";
                                                                    }}),
                                                                }}, "3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c",                 new ConsentArtefactResponseConsentConsentDetailConsentManager("ducimus");, OffsetDateTime.parse("2022-05-12T14:13:14.359Z"),                 new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                    add(HITypeEnumEnum.PRESCRIPTION),
                                                                }},                 new ConsentArtefactResponseConsentConsentDetailHip("aspernatur");,                 new ConsentArtefactResponseConsentConsentDetailHiu("vel");,                 new ConsentManagerPatientID("hinapatel@ndhm");,                 new Permission(PermissionAccessModeEnum.STREAM, OffsetDateTime.parse("2022-10-23T16:55:55.380Z"),                 new PermissionDateRange(OffsetDateTime.parse("2022-06-28T08:50:44.084Z"), OffsetDateTime.parse("2022-10-11T02:58:57.556Z"));,                 new PermissionFrequency(980700L, PermissionFrequencyUnitEnum.HOUR, 406120L););,                 new UsePurpose("nulla", "excepturi") {{
                                                                    refUri = "https://gracious-vista.net";
                                                                }};,                 new Requester("Dr. Manju") {{
                                                                    identifier = new RequesterIdentifier("REGNO", "MH1001") {{
                                                                        system = "https://www.mciindia.org";
                                                                    }};;
                                                                }};) {{
                                                    schemaVersion = "saepe";
                                                }};, "Signature of CM as defined in W3C standards; Base64 encoded", ConsentStatusEnum.DENIED);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "corporis");;
                            }};, "veniam");            

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

Must contain either consent or error. Possible reason of errors are 
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

            PostV05ConsentsOnFetchRawRequest req = new PostV05ConsentsOnFetchRawRequest("aliquid", "inventore".getBytes(), "magnam");            

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
