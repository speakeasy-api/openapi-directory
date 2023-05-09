# gateway

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05ConsentRequestsInitJson](#postv05consentrequestsinitjson) - Create consent request
* [postV05ConsentRequestsInitRaw](#postv05consentrequestsinitraw) - Create consent request
* [postV05ConsentRequestsStatusJson](#postv05consentrequestsstatusjson) - Get consent request status
* [postV05ConsentRequestsStatusRaw](#postv05consentrequestsstatusraw) - Get consent request status
* [postV05ConsentsFetch](#postv05consentsfetch) - Get consent artefact
* [postV05ConsentsHiuOnNotify](#postv05consentshiuonnotify) - Consent notification
* [postV05HealthInformationCmRequestJson](#postv05healthinformationcmrequestjson) - Health information data request
* [postV05HealthInformationCmRequestRaw](#postv05healthinformationcmrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05PatientsFindJson](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [postV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token
* [postV05SubscriptionRequestsCmInitJson](#postv05subscriptionrequestscminitjson) - Request for subscription
* [postV05SubscriptionRequestsCmInitRaw](#postv05subscriptionrequestscminitraw) - Request for subscription
* [postV05SubscriptionRequestsHiuOnNotify](#postv05subscriptionrequestshiuonnotify) - Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
* [postV05SubscriptionsHiuOnNotify](#postv05subscriptionshiuonnotify) - Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

## getV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

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

## getV05Certs

Get certs for JWT verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05CertsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05CertsResponse res = sdk.gateway.getV05Certs();

            if (res.certs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("corrupti",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                                add(HITypeEnumEnum.DIAGNOSTIC_REPORT),
                                                                add(HITypeEnumEnum.DISCHARGE_SUMMARY),
                                                            }},                 new ConsentRequestConsentHiu("nulla");,                 new ConsentRequestConsentPatient("hinapatel@ndhm");,                 new Permission(PermissionAccessModeEnum.QUERY, OffsetDateTime.parse("2021-09-24T02:21:06.409Z"),                 new PermissionDateRange(OffsetDateTime.parse("2021-09-16T11:56:06.019Z"), OffsetDateTime.parse("2022-07-25T06:44:09.184Z"));,                 new PermissionFrequency(297534L, PermissionFrequencyUnitEnum.YEAR, 56713L););,                 new UsePurpose("delectus", "tempora") {{
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
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-03-20T06:24:36.919Z"));, "recusandae");            

            PostV05ConsentRequestsInitJsonResponse res = sdk.gateway.postV05ConsentRequestsInitJson(req);

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

            PostV05ConsentRequestsInitRawRequest req = new PostV05ConsentRequestsInitRawRequest("temporibus", "ab".getBytes(), "quis");            

            PostV05ConsentRequestsInitRawResponse res = sdk.gateway.postV05ConsentRequestsInitRaw(req);

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

            PostV05ConsentRequestsStatusJsonRequest req = new PostV05ConsentRequestsStatusJsonRequest("veritatis",                 new ConsentRequestStatusRequest("deserunt", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-08-19T14:12:14.246Z"));, "repellendus");            

            PostV05ConsentRequestsStatusJsonResponse res = sdk.gateway.postV05ConsentRequestsStatusJson(req);

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

            PostV05ConsentRequestsStatusRawRequest req = new PostV05ConsentRequestsStatusRawRequest("sapiente", "quo".getBytes(), "odit");            

            PostV05ConsentRequestsStatusRawResponse res = sdk.gateway.postV05ConsentRequestsStatusRaw(req);

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

            PostV05ConsentsFetchRequest req = new PostV05ConsentsFetchRequest("at",                 new ConsentFetchRequest("at", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-07-31T09:34:50.024Z"));, "quod");            

            PostV05ConsentsFetchResponse res = sdk.gateway.postV05ConsentsFetch(req);

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

            PostV05ConsentsHiuOnNotifyRequest req = new PostV05ConsentsHiuOnNotifyRequest("quod",                 new HIUConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("78ca1ba9-28fc-4816-b42c-b73920592939");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z")) {{
                                acknowledgement = new org.openapis.openapi.models.shared.ConsentAcknowledgement[]{{
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.OK;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.OK;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                }};
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "reiciendis");;
                            }};, "est");            

            PostV05ConsentsHiuOnNotifyResponse res = sdk.gateway.postV05ConsentsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmRequestJson

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestJsonResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIRequest;
import org.openapis.openapi.models.shared.HIRequestHIRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmRequestJsonRequest req = new PostV05HealthInformationCmRequestJsonRequest("mollitia",                 new HIRequest(                new HIRequestHIRequest(                new Consent("laborum");, "dolores",                 new DateRange(OffsetDateTime.parse("2022-08-23T06:35:12.519Z"), OffsetDateTime.parse("2022-04-01T23:59:21.675Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-05-24T03:24:11.703Z"), "nemo", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-06-06T21:04:34.044Z"));, "accusantium");            

            PostV05HealthInformationCmRequestJsonResponse res = sdk.gateway.postV05HealthInformationCmRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationCmRequestRaw

Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationCmRequestRawResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIRequest;
import org.openapis.openapi.models.shared.HIRequestHIRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationCmRequestRawRequest req = new PostV05HealthInformationCmRequestRawRequest("iure", "culpa".getBytes(), "doloribus");            

            PostV05HealthInformationCmRequestRawResponse res = sdk.gateway.postV05HealthInformationCmRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationNotifyJson

API called by HIU and HIP during data-transfer.
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyJsonResponse;
import org.openapis.openapi.models.shared.HealthInformationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifier;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifierTypeEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("sapiente",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-05-07T17:33:24.154Z"),                 new HealthInformationNotificationNotificationNotifier("tmh", HealthInformationNotificationNotificationNotifierTypeEnum.HIU);,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.FAILED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("occaecati", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "repellat";
                                                                        description = "mollitia";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-08-02T18:07:51.623Z"));, "quam");            

            PostV05HealthInformationNotifyJsonResponse res = sdk.gateway.postV05HealthInformationNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationNotifyRaw

API called by HIU and HIP during data-transfer.
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationNotifyRawResponse;
import org.openapis.openapi.models.shared.HealthInformationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifier;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationNotifierTypeEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotification;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses;
import org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("molestiae", "velit".getBytes(), "error");            

            PostV05HealthInformationNotifyRawResponse res = sdk.gateway.postV05HealthInformationNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsFindJson

This API is meant for identify to patient given her consent-manager-user-id


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsFindJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsFindJsonResponse;
import org.openapis.openapi.models.shared.PatientIdentificationRequest;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQuery;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryPatient;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsFindJsonRequest req = new PostV05PatientsFindJsonRequest("quia",                 new PatientIdentificationRequest(                new PatientIdentificationRequestQuery(                new PatientIdentificationRequestQueryPatient("hinapatel79@ndhm");,                 new PatientIdentificationRequestQueryRequester("100005", PatientIdentificationRequestQueryRequesterTypeEnum.HIU););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-04-29T17:10:10.440Z"));, "animi");            

            PostV05PatientsFindJsonResponse res = sdk.gateway.postV05PatientsFindJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsFindRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsFindRawResponse;
import org.openapis.openapi.models.shared.PatientIdentificationRequest;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQuery;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryPatient;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientIdentificationRequestQueryRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsFindRawRequest req = new PostV05PatientsFindRawRequest("enim", "odit".getBytes(), "quo");            

            PostV05PatientsFindRawResponse res = sdk.gateway.postV05PatientsFindRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SessionsJson

Get access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SessionsJsonResponse;
import org.openapis.openapi.models.shared.SessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SessionRequest req = new SessionRequest("sequi", "tenetur");            

            PostV05SessionsJsonResponse res = sdk.gateway.postV05SessionsJson(req);

            if (res.sessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SessionsRaw

Get access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SessionsRawResponse;
import org.openapis.openapi.models.shared.SessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "ipsam".getBytes()            

            PostV05SessionsRawResponse res = sdk.gateway.postV05SessionsRaw(req);

            if (res.sessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsCmInitJson

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitJsonResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionRequest;
import org.openapis.openapi.models.shared.SubscriptionRequestSubscription;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsCmInitJsonRequest req = new PostV05SubscriptionRequestsCmInitJsonRequest("id",                 new SubscriptionRequest("499a5a4a-7dda-4f20-9b67-e24589627061",                 new SubscriptionRequestSubscription(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                            }},                 new OrganizationRepresentation("aut");,                 new ConsentManagerPatientID("hinapatel@ndhm");,                 new SubscriptionPeriod(OffsetDateTime.parse("2022-05-18T15:52:05.226Z"), OffsetDateTime.parse("2020-12-24T08:13:29.299Z"));,                 new UsePurpose("quasi", "reiciendis") {{
                                                                refUri = "https://twin-intent.name";
                                                            }};) {{
                                                hips = new org.openapis.openapi.models.shared.OrganizationRepresentation[]{{
                                                    add(new OrganizationRepresentation("sint") {{
                                                        id = "097b0074-f154-471b-9e6e-13b99d488e1e";
                                                    }}),
                                                    add(new OrganizationRepresentation("non") {{
                                                        id = "1e450ad2-abd4-4426-9802-d502a94bb4f6";
                                                    }}),
                                                    add(new OrganizationRepresentation("nam") {{
                                                        id = "c969e9a3-efa7-47df-b14c-d66ae395efb9";
                                                    }}),
                                                    add(new OrganizationRepresentation("sint") {{
                                                        id = "a88f3a66-9970-474b-a446-9b6e21419598";
                                                    }}),
                                                }};
                                            }};, OffsetDateTime.parse("2022-05-07T13:57:38.738Z"));, "reiciendis");            

            PostV05SubscriptionRequestsCmInitJsonResponse res = sdk.gateway.postV05SubscriptionRequestsCmInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsCmInitRaw

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitRawRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsCmInitRawResponse;
import org.openapis.openapi.models.shared.ConsentManagerPatientID;
import org.openapis.openapi.models.shared.OrganizationRepresentation;
import org.openapis.openapi.models.shared.SubscriptionCategoryEnum;
import org.openapis.openapi.models.shared.SubscriptionPeriod;
import org.openapis.openapi.models.shared.SubscriptionRequest;
import org.openapis.openapi.models.shared.SubscriptionRequestSubscription;
import org.openapis.openapi.models.shared.UsePurpose;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsCmInitRawRequest req = new PostV05SubscriptionRequestsCmInitRawRequest("mollitia", "ad".getBytes(), "eum");            

            PostV05SubscriptionRequestsCmInitRawResponse res = sdk.gateway.postV05SubscriptionRequestsCmInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionRequestsHiuOnNotify

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnNotifyRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionRequestsHiuOnNotifyResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionRequestsHiuOnNotifyRequest req = new PostV05SubscriptionRequestsHiuOnNotifyRequest("dolor",                 new HIUSubscriptionRequestNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("e2516fe4-c8b7-411e-9b7f-d2ed028921cd");, OffsetDateTime.parse("2020-07-30T23:39:27.609Z")) {{
                                acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement(HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum.OK, "subscription Id");;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "excepturi");;
                            }};, "odit");            

            PostV05SubscriptionRequestsHiuOnNotifyResponse res = sdk.gateway.postV05SubscriptionRequestsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SubscriptionsHiuOnNotify

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuOnNotifyRequest;
import org.openapis.openapi.models.operations.PostV05SubscriptionsHiuOnNotifyResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgment;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgement;
import org.openapis.openapi.models.shared.HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05SubscriptionsHiuOnNotifyRequest req = new PostV05SubscriptionsHiuOnNotifyRequest("ea",                 new HIUSubscriptionNotificationAcknowledgment("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("01fb576b-0d5f-40d3-8c5f-bb2587053202");, OffsetDateTime.parse("2021-08-11T12:30:29.509Z")) {{
                                acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement("subscription event Id", HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "vero");;
                            }};, "nostrum");            

            PostV05SubscriptionsHiuOnNotifyResponse res = sdk.gateway.postV05SubscriptionsHiuOnNotify(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthConfirmJson

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthConfirmJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthConfirmJsonResponse;
import org.openapis.openapi.models.shared.AuthConfirmIdentifier;
import org.openapis.openapi.models.shared.AuthConfirmIdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthConfirmRequest;
import org.openapis.openapi.models.shared.PatientAuthConfirmRequestCredential;
import org.openapis.openapi.models.shared.PatientDemographic;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthConfirmJsonRequest req = new PostV05UsersAuthConfirmJsonRequest("hic",                 new PatientAuthConfirmRequest(                new PatientAuthConfirmRequestCredential() {{
                                                authCode = "recusandae";
                                                demographic = new PatientDemographic("1972-02-29", PatientGenderEnum.O, "janki das") {{
                                                    identifier = new AuthConfirmIdentifier(AuthConfirmIdentifierTypeEnum.MOBILE, "+919800083232");;
                                                }};;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-10-22T10:35:49.400Z"), "voluptatem");, "porro");            

            PostV05UsersAuthConfirmJsonResponse res = sdk.gateway.postV05UsersAuthConfirmJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthConfirmRaw

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthConfirmRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthConfirmRawResponse;
import org.openapis.openapi.models.shared.AuthConfirmIdentifier;
import org.openapis.openapi.models.shared.AuthConfirmIdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthConfirmRequest;
import org.openapis.openapi.models.shared.PatientAuthConfirmRequestCredential;
import org.openapis.openapi.models.shared.PatientDemographic;
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthConfirmRawRequest req = new PostV05UsersAuthConfirmRawRequest("consequuntur", "blanditiis".getBytes(), "error");            

            PostV05UsersAuthConfirmRawResponse res = sdk.gateway.postV05UsersAuthConfirmRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthFetchModesJson

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesJsonResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequest;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("eaque",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.KYC,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIU););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-01-03T18:36:27.259Z"));, "earum");            

            PostV05UsersAuthFetchModesJsonResponse res = sdk.gateway.postV05UsersAuthFetchModesJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthFetchModesRawResponse;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequest;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthModeQueryRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("modi", "iste".getBytes(), "dolorum");            

            PostV05UsersAuthFetchModesRawResponse res = sdk.gateway.postV05UsersAuthFetchModesRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthInitJson

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthInitJsonResponse;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.PatientAuthInitRequest;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthInitJsonRequest req = new PostV05UsersAuthInitJsonRequest("deleniti",                 new PatientAuthInitRequest(                new PatientAuthInitRequestQuery("hinapatel@ndhm", PatientAuthPurposeEnum.KYC_AND_LINK,                 new PatientAuthInitRequestQueryRequester("100005", PatientAuthInitRequestQueryRequesterTypeEnum.HIU);) {{
                                                authMode = AuthenticationModeEnum.AADHAAR_OTP;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-01-26T22:08:21.462Z"));, "quaerat");            

            PostV05UsersAuthInitJsonResponse res = sdk.gateway.postV05UsersAuthInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthInitRaw

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthInitRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthInitRawResponse;
import org.openapis.openapi.models.shared.AuthenticationModeEnum;
import org.openapis.openapi.models.shared.PatientAuthInitRequest;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQuery;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQueryRequester;
import org.openapis.openapi.models.shared.PatientAuthInitRequestQueryRequesterTypeEnum;
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthInitRawRequest req = new PostV05UsersAuthInitRawRequest("quos", "aliquid".getBytes(), "dolorem");            

            PostV05UsersAuthInitRawResponse res = sdk.gateway.postV05UsersAuthInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnNotifyJson

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("dolorem",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("323f9b77-f3a4-4100-a74e-bf69280d1ba7");, OffsetDateTime.parse("2022-04-28T20:45:55.086Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "omnis");;
                            }};, "necessitatibus");            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.gateway.postV05UsersAuthOnNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05UsersAuthOnNotifyRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgement;
import org.openapis.openapi.models.shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("distinctio", "asperiores".getBytes(), "nihil");            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.gateway.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
