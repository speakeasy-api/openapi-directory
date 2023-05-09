# gateway

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request
* [postV05ConsentsHipOnNotifyJson](#postv05consentshiponnotifyjson) - Consent notification
* [postV05ConsentsHipOnNotifyRaw](#postv05consentshiponnotifyraw) - Consent notification
* [postV05HealthInformationHipOnRequestJson](#postv05healthinformationhiponrequestjson) - Health information data request
* [postV05HealthInformationHipOnRequestRaw](#postv05healthinformationhiponrequestraw) - Health information data request
* [postV05HealthInformationNotifyJson](#postv05healthinformationnotifyjson) - Notifications corresponding to events during data flow
* [postV05HealthInformationNotifyRaw](#postv05healthinformationnotifyraw) - Notifications corresponding to events during data flow
* [postV05LinksLinkAddContextsJson](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkOnConfirmJson](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request
* [postV05PatientsProfileOnShareJson](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [postV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token
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

            PostV05CareContextsOnDiscoverJsonRequest req = new PostV05CareContextsOnDiscoverJsonRequest("corrupti",                 new PatientDiscoveryResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("9bd9d8d6-9a67-44e0-b467-cc8796ed151a");, OffsetDateTime.parse("2022-08-19T14:12:14.246Z"), "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7") {{
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "excepturi");;
                                patient = new PatientRepresentation(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                    add(new CareContextRepresentation("natus", "sed") {{
                                                        display = "perferendis";
                                                        referenceNumber = "ad";
                                                    }}),
                                                }}, "iste", "dolor") {{
                                    matchedBy = new org.openapis.openapi.models.shared.IdentifierTypeEnum[]{{
                                        add(IdentifierTypeEnum.MR),
                                        add(IdentifierTypeEnum.HEALTH_ID),
                                        add(IdentifierTypeEnum.HEALTH_ID),
                                    }};
                                }};;
                            }};, "fuga");            

            PostV05CareContextsOnDiscoverJsonResponse res = sdk.gateway.postV05CareContextsOnDiscoverJson(req);

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

            PostV05CareContextsOnDiscoverRawRequest req = new PostV05CareContextsOnDiscoverRawRequest("in", "corporis".getBytes(), "iste");            

            PostV05CareContextsOnDiscoverRawResponse res = sdk.gateway.postV05CareContextsOnDiscoverRaw(req);

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

            PostV05ConsentsHipOnNotifyJsonRequest req = new PostV05ConsentsHipOnNotifyJsonRequest("iure",                 new HIPConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("eb10faaa-2352-4c59-9590-7aff1a3a2fa9");, OffsetDateTime.parse("2022-08-02T18:07:51.623Z")) {{
                                acknowledgement = new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "velit");;
                            }};, "error");            

            PostV05ConsentsHipOnNotifyJsonResponse res = sdk.gateway.postV05ConsentsHipOnNotifyJson(req);

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

            PostV05ConsentsHipOnNotifyRawRequest req = new PostV05ConsentsHipOnNotifyRawRequest("quia", "quis".getBytes(), "vitae");            

            PostV05ConsentsHipOnNotifyRawResponse res = sdk.gateway.postV05ConsentsHipOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipOnRequestJson

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgement;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipOnRequestJsonRequest req = new PostV05HealthInformationHipOnRequestJsonRequest("laborum",                 new HIPHealthInformationRequestAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("a52c3f5a-d019-4da1-bfe7-8f097b0074f1");, OffsetDateTime.parse("2022-09-14T21:48:41.971Z")) {{
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "dicta");;
                                hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest(HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum.ACKNOWLEDGED, "b5e6e13b-99d4-488e-9e91-e450ad2abd44");;
                            }};, "qui");            

            PostV05HealthInformationHipOnRequestJsonResponse res = sdk.gateway.postV05HealthInformationHipOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipOnRequestRaw

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipOnRequestRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgement;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipOnRequestRawRequest req = new PostV05HealthInformationHipOnRequestRawRequest("aliquid", "cupiditate".getBytes(), "quos");            

            PostV05HealthInformationHipOnRequestRawResponse res = sdk.gateway.postV05HealthInformationHipOnRequestRaw(req);

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

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("perferendis",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2022-03-04T10:29:07.095Z"),                 new HealthInformationNotificationNotificationNotifier() {{
                                                                id = "tmh";
                                                                type = HealthInformationNotificationNotificationNotifierTypeEnum.HIU;
                                                            }};,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.TRANSFERRED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("tempora", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "dolorum";
                                                                        description = "excepturi";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2021-07-13T07:24:02.478Z"));, "labore");            

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

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("delectus", "eum".getBytes(), "non");            

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

## postV05LinksLinkAddContextsJson

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkAddContextsJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkAddContextsJsonResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.PatientCareContextLink;
import org.openapis.openapi.models.shared.PatientCareContextLinkPatient;
import org.openapis.openapi.models.shared.PatientCareContextLinkRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkAddContextsJsonRequest req = new PostV05LinksLinkAddContextsJsonRequest("eligendi",                 new PatientCareContextLinkRequest(                new PatientCareContextLink("sint",                 new PatientCareContextLinkPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                                                add(new CareContextRepresentation("sint", "officia") {{
                                                                                    display = "provident";
                                                                                    referenceNumber = "necessitatibus";
                                                                                }}),
                                                                                add(new CareContextRepresentation("a", "dolorum") {{
                                                                                    display = "dolor";
                                                                                    referenceNumber = "debitis";
                                                                                }}),
                                                                            }}, "in", "TMH-PUID-001"););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-02-26T01:27:36.152Z"));, "maiores");            

            PostV05LinksLinkAddContextsJsonResponse res = sdk.gateway.postV05LinksLinkAddContextsJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkAddContextsRaw

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkAddContextsRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkAddContextsRawResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.PatientCareContextLink;
import org.openapis.openapi.models.shared.PatientCareContextLinkPatient;
import org.openapis.openapi.models.shared.PatientCareContextLinkRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkAddContextsRawRequest req = new PostV05LinksLinkAddContextsRawRequest("rerum", "dicta".getBytes(), "magnam");            

            PostV05LinksLinkAddContextsRawResponse res = sdk.gateway.postV05LinksLinkAddContextsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnConfirmJson

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnConfirmJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnConfirmJsonResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientLinkResult;
import org.openapis.openapi.models.shared.PatientLinkResultPatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnConfirmJsonRequest req = new PostV05LinksLinkOnConfirmJsonRequest("cumque",                 new PatientLinkResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("d66ae395-efb9-4ba8-8f3a-66997074ba44");, OffsetDateTime.parse("2022-05-20T10:11:05.115Z")) {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "eum");;
                                patient = new PatientLinkResultPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                    add(new CareContextRepresentation("magnam", "et") {{
                                                        display = "aspernatur";
                                                        referenceNumber = "architecto";
                                                    }}),
                                                    add(new CareContextRepresentation("provident", "quos") {{
                                                        display = "excepturi";
                                                        referenceNumber = "ullam";
                                                    }}),
                                                    add(new CareContextRepresentation("mollitia", "reiciendis") {{
                                                        display = "sint";
                                                        referenceNumber = "accusantium";
                                                    }}),
                                                    add(new CareContextRepresentation("eum", "dolor") {{
                                                        display = "mollitia";
                                                        referenceNumber = "ad";
                                                    }}),
                                                }}, "necessitatibus", "odit");;
                            }};, "nemo");            

            PostV05LinksLinkOnConfirmJsonResponse res = sdk.gateway.postV05LinksLinkOnConfirmJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnConfirmRaw

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnConfirmRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnConfirmRawResponse;
import org.openapis.openapi.models.shared.CareContextRepresentation;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.PatientLinkResult;
import org.openapis.openapi.models.shared.PatientLinkResultPatient;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnConfirmRawRequest req = new PostV05LinksLinkOnConfirmRawRequest("quasi", "iure".getBytes(), "doloribus");            

            PostV05LinksLinkOnConfirmRawResponse res = sdk.gateway.postV05LinksLinkOnConfirmRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnInitJson

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnInitJsonRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnInitJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.Meta;
import org.openapis.openapi.models.shared.MetaCommunicationMediumEnum;
import org.openapis.openapi.models.shared.PatientLinkReferenceResult;
import org.openapis.openapi.models.shared.PatientLinkReferenceResultLink;
import org.openapis.openapi.models.shared.PatientLinkReferenceResultLinkAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnInitJsonRequest req = new PostV05LinksLinkOnInitJsonRequest("debitis",                 new PatientLinkReferenceResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("4c8b711e-5b7f-4d2e-9028-921cddc69260");, OffsetDateTime.parse("2022-01-07T08:38:36.147Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d") {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "ipsam");;
                                link = new PatientLinkReferenceResultLink(PatientLinkReferenceResultLinkAuthenticationTypeEnum.DIRECT, "autem") {{
                                    meta = new Meta(MetaCommunicationMediumEnum.EMAIL) {{
                                        communicationExpiry = "2019-12-30T12:01:55Z";
                                        communicationHint = "eaque";
                                    }};;
                                }};;
                            }};, "pariatur");            

            PostV05LinksLinkOnInitJsonResponse res = sdk.gateway.postV05LinksLinkOnInitJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05LinksLinkOnInitRaw

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnInitRawRequest;
import org.openapis.openapi.models.operations.PostV05LinksLinkOnInitRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.Meta;
import org.openapis.openapi.models.shared.MetaCommunicationMediumEnum;
import org.openapis.openapi.models.shared.PatientLinkReferenceResult;
import org.openapis.openapi.models.shared.PatientLinkReferenceResultLink;
import org.openapis.openapi.models.shared.PatientLinkReferenceResultLinkAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05LinksLinkOnInitRawRequest req = new PostV05LinksLinkOnInitRawRequest("nemo", "voluptatibus".getBytes(), "perferendis");            

            PostV05LinksLinkOnInitRawResponse res = sdk.gateway.postV05LinksLinkOnInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileOnShareJson

Result of patient share profile request at HIP end.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgement;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.ShareProfileResult;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileOnShareJsonRequest req = new PostV05PatientsProfileOnShareJsonRequest("fugiat",                 new ShareProfileResult(                new ShareProfileAcknowledgement("<username>@<suffix>", ShareProfileAcknowledgementStatusEnum.SUCCESS);, "5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("0c5fbb25-8705-4320-ac73-d5fe9b90c289");, OffsetDateTime.parse("2022-06-04T07:28:38.912Z")) {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "adipisci");;
                            }};, "asperiores");            

            PostV05PatientsProfileOnShareJsonResponse res = sdk.gateway.postV05PatientsProfileOnShareJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsProfileOnShareRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.RequestReference;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgement;
import org.openapis.openapi.models.shared.ShareProfileAcknowledgementStatusEnum;
import org.openapis.openapi.models.shared.ShareProfileResult;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsProfileOnShareRawRequest req = new PostV05PatientsProfileOnShareRawRequest("earum", "modi".getBytes(), "iste");            

            PostV05PatientsProfileOnShareRawResponse res = sdk.gateway.postV05PatientsProfileOnShareRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsNotifyJson

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyJsonRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyJsonResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequest;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotification;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotificationHip;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsNotifyJsonRequest req = new PostV05PatientsSmsNotifyJsonRequest("dolorum",                 new PatientSMSNotifcationRequest(                new PatientSMSNotifcationRequestNotification("X-Ray on 22nd Dec",                 new PatientSMSNotifcationRequestNotificationHip("HIP_001") {{
                                                                name = "Max Healthcare (Optional)";
                                                            }};, "+91-9999999999") {{
                                                deeplinkUrl = "https://link.to.health.records/ (Optional)";
                                                receiverName = "Ramesh Singh (Optional)";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-04-10T01:47:20.724Z"));, "provident");            

            PostV05PatientsSmsNotifyJsonResponse res = sdk.gateway.postV05PatientsSmsNotifyJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05PatientsSmsNotifyRaw

API to send SMS notifications to patient with custom deeplink.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyRawRequest;
import org.openapis.openapi.models.operations.PostV05PatientsSmsNotifyRawResponse;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequest;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotification;
import org.openapis.openapi.models.shared.PatientSMSNotifcationRequestNotificationHip;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05PatientsSmsNotifyRawRequest req = new PostV05PatientsSmsNotifyRawRequest("nobis", "libero".getBytes(), "delectus");            

            PostV05PatientsSmsNotifyRawResponse res = sdk.gateway.postV05PatientsSmsNotifyRaw(req);

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

            org.openapis.openapi.models.shared.SessionRequest req = new SessionRequest("quaerat", "quos");            

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

            org.openapis.openapi.models.. req = "aliquid".getBytes()            

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

            PostV05UsersAuthConfirmJsonRequest req = new PostV05UsersAuthConfirmJsonRequest("dolorem",                 new PatientAuthConfirmRequest(                new PatientAuthConfirmRequestCredential() {{
                                                authCode = "dolorem";
                                                demographic = new PatientDemographic("1972-02-29", PatientGenderEnum.M, "Janki Das") {{
                                                    identifier = new AuthConfirmIdentifier(AuthConfirmIdentifierTypeEnum.MOBILE, "+919800083232");;
                                                }};;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-10-13T03:45:19.154Z"), "hic");, "excepturi");            

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

            PostV05UsersAuthConfirmRawRequest req = new PostV05UsersAuthConfirmRawRequest("cum", "voluptate".getBytes(), "dignissimos");            

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

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("reiciendis",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.LINK,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIU););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-11-30T20:48:38.083Z"));, "ipsa");            

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

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("ipsa", "iure".getBytes(), "odio");            

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

            PostV05UsersAuthInitJsonRequest req = new PostV05UsersAuthInitJsonRequest("quaerat",                 new PatientAuthInitRequest(                new PatientAuthInitRequestQuery("hinapatel@ndhm", PatientAuthPurposeEnum.KYC_AND_LINK,                 new PatientAuthInitRequestQueryRequester("100005", PatientAuthInitRequestQueryRequesterTypeEnum.HIU);) {{
                                                authMode = AuthenticationModeEnum.AADHAAR_OTP;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-05-20T13:18:59.478Z"));, "eos");            

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

            PostV05UsersAuthInitRawRequest req = new PostV05UsersAuthInitRawRequest("atque", "sit".getBytes(), "fugiat");            

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

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("ab",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("ba77a89e-bf73-47ae-8203-ce5e6a95d8a0");, OffsetDateTime.parse("2022-01-24T12:18:47.570Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "vel");;
                            }};, "quod");            

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

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("officiis", "qui".getBytes(), "dolorum");            

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
