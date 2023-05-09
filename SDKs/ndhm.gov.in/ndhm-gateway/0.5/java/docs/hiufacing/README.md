# hiuFacing

### Available Operations

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

            PostV05ConsentRequestsInitJsonRequest req = new PostV05ConsentRequestsInitJsonRequest("vel",                 new ConsentRequest(                new ConsentRequestConsent(                new org.openapis.openapi.models.shared.HITypeEnumEnum[]{{
                                                                add(HITypeEnumEnum.PRESCRIPTION),
                                                            }},                 new ConsentRequestConsentHiu("voluptas");,                 new ConsentRequestConsentPatient() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new Permission(PermissionAccessModeEnum.VIEW, OffsetDateTime.parse("2022-02-12T19:07:29.722Z"),                 new PermissionDateRange() {{
                                                                                from = OffsetDateTime.parse("2022-06-23T03:44:40.400Z");
                                                                                to = OffsetDateTime.parse("2022-06-24T10:43:59.224Z");
                                                                            }};,                 new PermissionFrequency() {{
                                                                                repeats = 978154L;
                                                                                unit = PermissionFrequencyUnitEnum.HOUR;
                                                                                value = 331452L;
                                                                            }};);,                 new UsePurpose("saepe", "neque") {{
                                                                refUri = "https://free-melatonin.org";
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
                                                    add(new CareContextDefinition("Episode1", "batman@tmh") {{
                                                        careContextReference = "Episode1";
                                                        patientReference = "batman@tmh";
                                                    }}),
                                                }};
                                                hip = new ConsentRequestConsentHip("est");;
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-04-07T10:05:43.584Z"));, "vitae");            

            PostV05ConsentRequestsInitJsonResponse res = sdk.hiuFacing.postV05ConsentRequestsInitJson(req);

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

            PostV05ConsentRequestsInitRawRequest req = new PostV05ConsentRequestsInitRawRequest("nesciunt", "similique".getBytes(), "illo");            

            PostV05ConsentRequestsInitRawResponse res = sdk.hiuFacing.postV05ConsentRequestsInitRaw(req);

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

            PostV05ConsentRequestsStatusJsonRequest req = new PostV05ConsentRequestsStatusJsonRequest("repellat",                 new ConsentRequestStatusRequest("nemo", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-07-12T23:46:00.624Z"));, "unde");            

            PostV05ConsentRequestsStatusJsonResponse res = sdk.hiuFacing.postV05ConsentRequestsStatusJson(req);

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

            PostV05ConsentRequestsStatusRawRequest req = new PostV05ConsentRequestsStatusRawRequest("incidunt", "explicabo".getBytes(), "ipsam");            

            PostV05ConsentRequestsStatusRawResponse res = sdk.hiuFacing.postV05ConsentRequestsStatusRaw(req);

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

            PostV05ConsentsFetchRequest req = new PostV05ConsentsFetchRequest("cupiditate",                 new ConsentFetchRequest("optio", "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-04-21T23:30:19.456Z"));, "nesciunt");            

            PostV05ConsentsFetchResponse res = sdk.hiuFacing.postV05ConsentsFetch(req);

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

            PostV05ConsentsHiuOnNotifyRequest req = new PostV05ConsentsHiuOnNotifyRequest("commodi",                 new HIUConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("f25ea944-f3b7-456c-91f6-c37a51262438");, OffsetDateTime.parse("2022-08-26T06:53:46.257Z")) {{
                                acknowledgement = new org.openapis.openapi.models.shared.ConsentAcknowledgement[]{{
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.UNKNOWN) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.OK;
                                    }}),
                                    add(new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK) {{
                                        consentId = "<consent-artefact-id>";
                                        status = ConsentAcknowledgementStatusEnum.UNKNOWN;
                                    }}),
                                }};
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "deserunt";
                                }};;
                            }};, "modi");            

            PostV05ConsentsHiuOnNotifyResponse res = sdk.hiuFacing.postV05ConsentsHiuOnNotify(req);

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

            PostV05HealthInformationCmRequestJsonRequest req = new PostV05HealthInformationCmRequestJsonRequest("veniam",                 new HIRequest(                new HIRequestHIRequest(                new Consent("quod");, "itaque",                 new DateRange(OffsetDateTime.parse("2020-08-20T09:59:23.505Z"), OffsetDateTime.parse("2022-01-05T11:14:11.433Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2020-05-04T08:05:54.832Z"), "architecto", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-05-14T14:19:14.019Z"));, "ipsa");            

            PostV05HealthInformationCmRequestJsonResponse res = sdk.hiuFacing.postV05HealthInformationCmRequestJson(req);

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

            PostV05HealthInformationCmRequestRawRequest req = new PostV05HealthInformationCmRequestRawRequest("nobis", "necessitatibus".getBytes(), "quia");            

            PostV05HealthInformationCmRequestRawResponse res = sdk.hiuFacing.postV05HealthInformationCmRequestRaw(req);

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

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("dicta",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-05-28T14:41:13.872Z"),                 new HealthInformationNotificationNotificationNotifier("tmh", HealthInformationNotificationNotificationNotifierTypeEnum.HIP);,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.TRANSFERRED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("veritatis", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "accusantium";
                                                                        description = "perferendis";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-06-20T22:36:53.570Z"));, "iure");            

            PostV05HealthInformationNotifyJsonResponse res = sdk.hiuFacing.postV05HealthInformationNotifyJson(req);

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

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("quibusdam", "quod".getBytes(), "nemo");            

            PostV05HealthInformationNotifyRawResponse res = sdk.hiuFacing.postV05HealthInformationNotifyRaw(req);

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

            PostV05PatientsFindJsonRequest req = new PostV05PatientsFindJsonRequest("recusandae",                 new PatientIdentificationRequest(                new PatientIdentificationRequestQuery(                new PatientIdentificationRequestQueryPatient() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new PatientIdentificationRequestQueryRequester() {{
                                                                id = "100005";
                                                                type = PatientIdentificationRequestQueryRequesterTypeEnum.HIU;
                                                            }};);, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-07-04T20:08:46.226Z"));, "laboriosam");            

            PostV05PatientsFindJsonResponse res = sdk.hiuFacing.postV05PatientsFindJson(req);

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

            PostV05PatientsFindRawRequest req = new PostV05PatientsFindRawRequest("sed", "odio".getBytes(), "natus");            

            PostV05PatientsFindRawResponse res = sdk.hiuFacing.postV05PatientsFindRaw(req);

            if (res.statusCode == 200) {
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

            PostV05SubscriptionRequestsCmInitJsonRequest req = new PostV05SubscriptionRequestsCmInitJsonRequest("provident",                 new SubscriptionRequest("499a5a4a-7dda-4f20-9b67-e24589627061",                 new SubscriptionRequestSubscription(                new org.openapis.openapi.models.shared.SubscriptionCategoryEnum[]{{
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                                add(SubscriptionCategoryEnum.LINK),
                                                            }},                 new OrganizationRepresentation("doloribus");,                 new ConsentManagerPatientID() {{
                                                                id = "hinapatel79@ndhm";
                                                            }};,                 new SubscriptionPeriod(OffsetDateTime.parse("2021-08-09T22:46:26.305Z"), OffsetDateTime.parse("2021-10-31T10:39:54.499Z"));,                 new UsePurpose("unde", "modi") {{
                                                                refUri = "https://wasteful-reminder.com";
                                                            }};) {{
                                                hips = new org.openapis.openapi.models.shared.OrganizationRepresentation[]{{
                                                    add(new OrganizationRepresentation("laborum") {{
                                                        id = "b4ecae6c-3d5d-4b3a-9ebd-5daea4c506a8";
                                                    }}),
                                                    add(new OrganizationRepresentation("necessitatibus") {{
                                                        id = "a94c0264-4cf5-4e9d-9a45-78adc1ac600d";
                                                    }}),
                                                    add(new OrganizationRepresentation("quasi") {{
                                                        id = "c001ac80-2e2e-4c09-bf8f-0f816ff3477c";
                                                    }}),
                                                }};
                                            }};, OffsetDateTime.parse("2022-02-15T00:33:35.714Z"));, "excepturi");            

            PostV05SubscriptionRequestsCmInitJsonResponse res = sdk.hiuFacing.postV05SubscriptionRequestsCmInitJson(req);

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

            PostV05SubscriptionRequestsCmInitRawRequest req = new PostV05SubscriptionRequestsCmInitRawRequest("accusantium", "qui".getBytes(), "impedit");            

            PostV05SubscriptionRequestsCmInitRawResponse res = sdk.hiuFacing.postV05SubscriptionRequestsCmInitRaw(req);

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

            PostV05SubscriptionRequestsHiuOnNotifyRequest req = new PostV05SubscriptionRequestsHiuOnNotifyRequest("beatae",                 new HIUSubscriptionRequestNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("4125b096-0a66-4815-9a47-2af923c5949f");, OffsetDateTime.parse("2022-07-06T22:48:19.114Z")) {{
                                acknowledgement = new HIUSubscriptionRequestNotificationAcknowledgementAcknowledgement(HIUSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum.OK, "subscription Id");;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "amet";
                                }};;
                            }};, "nemo");            

            PostV05SubscriptionRequestsHiuOnNotifyResponse res = sdk.hiuFacing.postV05SubscriptionRequestsHiuOnNotify(req);

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

            PostV05SubscriptionsHiuOnNotifyRequest req = new PostV05SubscriptionsHiuOnNotifyRequest("ipsa",                 new HIUSubscriptionNotificationAcknowledgment("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("cf876ffb-901c-46ec-bb4e-243cf789ffaf");, OffsetDateTime.parse("2020-06-01T13:23:22.069Z")) {{
                                acknowledgement = new HIUSubscriptionNotificationAcknowledgmentAcknowledgement("subscription event Id", HIUSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "corporis";
                                }};;
                            }};, "velit");            

            PostV05SubscriptionsHiuOnNotifyResponse res = sdk.hiuFacing.postV05SubscriptionsHiuOnNotify(req);

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

            PostV05UsersAuthConfirmJsonRequest req = new PostV05UsersAuthConfirmJsonRequest("officiis",                 new PatientAuthConfirmRequest(                new PatientAuthConfirmRequestCredential() {{
                                                authCode = "enim";
                                                demographic = new PatientDemographic("1972-02-29", PatientGenderEnum.O, "janki das") {{
                                                    identifier = new AuthConfirmIdentifier(AuthConfirmIdentifierTypeEnum.MOBILE, "+919800083232");;
                                                }};;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-09-17T03:41:04.453Z"), "repudiandae");, "accusantium");            

            PostV05UsersAuthConfirmJsonResponse res = sdk.hiuFacing.postV05UsersAuthConfirmJson(req);

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

            PostV05UsersAuthConfirmRawRequest req = new PostV05UsersAuthConfirmRawRequest("officia", "impedit".getBytes(), "quasi");            

            PostV05UsersAuthConfirmRawResponse res = sdk.hiuFacing.postV05UsersAuthConfirmRaw(req);

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

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("blanditiis",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.LINK,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIU););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-04-02T23:19:12.805Z"));, "natus");            

            PostV05UsersAuthFetchModesJsonResponse res = sdk.hiuFacing.postV05UsersAuthFetchModesJson(req);

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

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("minus", "quia".getBytes(), "magnam");            

            PostV05UsersAuthFetchModesRawResponse res = sdk.hiuFacing.postV05UsersAuthFetchModesRaw(req);

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
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthInitJsonRequest req = new PostV05UsersAuthInitJsonRequest("reprehenderit",                 new PatientAuthInitRequest(                new PatientAuthInitRequestQuery("hinapatel@ndhm", PatientAuthPurposeEnum.KYC_AND_LINK,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIU);) {{
                                                authMode = AuthenticationModeEnum.DEMOGRAPHICS;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-07-12T05:39:44.455Z"));, "amet");            

            PostV05UsersAuthInitJsonResponse res = sdk.hiuFacing.postV05UsersAuthInitJson(req);

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
import org.openapis.openapi.models.shared.PatientAuthPurposeEnum;
import org.openapis.openapi.models.shared.PatientAuthRequester;
import org.openapis.openapi.models.shared.PatientAuthRequesterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05UsersAuthInitRawRequest req = new PostV05UsersAuthInitRawRequest("laborum", "modi".getBytes(), "perferendis");            

            PostV05UsersAuthInitRawResponse res = sdk.hiuFacing.postV05UsersAuthInitRaw(req);

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

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("necessitatibus",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("1942f32e-5505-4575-af5d-56d0bd0af2df");, OffsetDateTime.parse("2022-09-13T05:51:54.156Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "pariatur";
                                }};;
                            }};, "harum");            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.hiuFacing.postV05UsersAuthOnNotifyJson(req);

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

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("dolore", "voluptatibus".getBytes(), "iure");            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.hiuFacing.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
