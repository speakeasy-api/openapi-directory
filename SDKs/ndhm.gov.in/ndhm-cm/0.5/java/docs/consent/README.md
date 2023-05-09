# consent

### Available Operations

* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification

## postV05ConsentRequestsInitJson

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("recusandae",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                add(HITypeEnumEnum.PRESCRIPTION),
                                                                add(HITypeEnumEnum.OP_CONSULTATION),
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                            }},                 new ConsentRequestConsentHiu("perferendis");,                 new ConsentRequestConsentPatient("hinapatel79@ndhm");,                 new Permission(PermissionAccessModeEnum.STORE, OffsetDateTime.parse("2020-02-17T21:57:45.117Z"),                 new PermissionDateRange(OffsetDateTime.parse("2022-07-31T07:34:52.790Z"), OffsetDateTime.parse("2020-05-23T06:06:25.221Z"));,                 new PermissionFrequency() {{
                                                                                repeats = 978619L;
                                                                                unit = PermissionFrequencyUnitEnum.DAY;
                                                                                value = 799159L;
                                                                            }};);,                 new UsePurpose("quod", "esse") {{
                                                                refUri = "https://soulful-poppy.com";
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
                                                hip = new ConsentRequestConsentHip("officia");;
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-09-18T08:27:00.721Z")););            

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

## postV05ConsentRequestsInitRaw

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

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

            PostV05ConsentRequestsInitRawRequest req = new PostV05ConsentRequestsInitRawRequest("deleniti", "hic".getBytes());            

            PostV05ConsentRequestsInitRawResponse res = sdk.consent.postV05ConsentRequestsInitRaw(req);

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

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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

            PostV05ConsentRequestsStatusJsonRequest req = new PostV05ConsentRequestsStatusJsonRequest("optio",                 new ConsentRequestStatusRequest("totam", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-08-02T15:33:40.440Z")););            

            PostV05ConsentRequestsStatusJsonResponse res = sdk.consent.postV05ConsentRequestsStatusJson(req);

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

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

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

            PostV05ConsentRequestsStatusRawRequest req = new PostV05ConsentRequestsStatusRawRequest("molestiae", "modi".getBytes());            

            PostV05ConsentRequestsStatusRawResponse res = sdk.consent.postV05ConsentRequestsStatusRaw(req);

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

This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway ***/v0.5/consents/on-fetch***

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

            PostV05ConsentsFetchRequest req = new PostV05ConsentsFetchRequest("qui",                 new ConsentFetchRequest("impedit", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-02-02T00:14:45.467Z")););            

            PostV05ConsentsFetchResponse res = sdk.consent.postV05ConsentsFetch(req);

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

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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

            PostV05ConsentsHipOnNotifyJsonRequest req = new PostV05ConsentsHipOnNotifyJsonRequest("ipsum",                 new HIPConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("92059293-96fe-4a75-96eb-10faaa2352c5");, OffsetDateTime.parse("2022-04-10T11:47:13.463Z")) {{
                                acknowledgement = new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "accusantium");;
                            }};);            

            PostV05ConsentsHipOnNotifyJsonResponse res = sdk.consent.postV05ConsentsHipOnNotifyJson(req);

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

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


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

            PostV05ConsentsHipOnNotifyRawRequest req = new PostV05ConsentsHipOnNotifyRawRequest("iure", "culpa".getBytes());            

            PostV05ConsentsHipOnNotifyRawResponse res = sdk.consent.postV05ConsentsHipOnNotifyRaw(req);

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

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - ***/v0.5/consents/hiu/notify***.


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

            PostV05ConsentsHiuOnNotifyRequest req = new PostV05ConsentsHiuOnNotifyRequest("doloribus",                 new HIUConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("f1a3a2fa-9467-4739-a51a-a52c3f5ad019");, OffsetDateTime.parse("2020-12-24T08:13:29.299Z")) {{
                                acknowledgement = new org.openapis.openapi.models.shared.ConsentAcknowledgement[]{{
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                }};
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "nihil");;
                            }};);            

            PostV05ConsentsHiuOnNotifyResponse res = sdk.consent.postV05ConsentsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
