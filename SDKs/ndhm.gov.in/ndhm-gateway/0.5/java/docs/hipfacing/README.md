# hipFacing

### Available Operations

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
* [postV05PatientsSmsNotifyJson](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [postV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

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

            PostV05ConsentsHipOnNotifyJsonRequest req = new PostV05ConsentsHipOnNotifyJsonRequest("rerum",                 new HIPConsentNotificationResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("27537a8c-d9e7-4319-8177-d525f77b114e");, OffsetDateTime.parse("2020-10-18T09:05:37.895Z")) {{
                                acknowledgement = new ConsentAcknowledgement("<consent-artefact-id>", ConsentAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "reiciendis";
                                }};;
                            }};, "earum");            

            PostV05ConsentsHipOnNotifyJsonResponse res = sdk.hipFacing.postV05ConsentsHipOnNotifyJson(req);

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

            PostV05ConsentsHipOnNotifyRawRequest req = new PostV05ConsentsHipOnNotifyRawRequest("reprehenderit", "praesentium".getBytes(), "nemo");            

            PostV05ConsentsHipOnNotifyRawResponse res = sdk.hipFacing.postV05ConsentsHipOnNotifyRaw(req);

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

            PostV05HealthInformationHipOnRequestJsonRequest req = new PostV05HealthInformationHipOnRequestJsonRequest("repellat",                 new HIPHealthInformationRequestAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("c37814d4-c98e-40c2-bb89-eb75dad636c6");, OffsetDateTime.parse("2022-12-20T07:11:32.953Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "quae";
                                }};;
                                hiRequest = new HIPHealthInformationRequestAcknowledgementHiRequest(HIPHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum.ACKNOWLEDGED, "3d8bb311-80f7-439a-a9e0-57eb809e2810");;
                            }};, "velit");            

            PostV05HealthInformationHipOnRequestJsonResponse res = sdk.hipFacing.postV05HealthInformationHipOnRequestJson(req);

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

            PostV05HealthInformationHipOnRequestRawRequest req = new PostV05HealthInformationHipOnRequestRawRequest("dolor", "sunt".getBytes(), "a");            

            PostV05HealthInformationHipOnRequestRawResponse res = sdk.hipFacing.postV05HealthInformationHipOnRequestRaw(req);

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

            PostV05HealthInformationNotifyJsonRequest req = new PostV05HealthInformationNotifyJsonRequest("dolor",                 new HealthInformationNotification(                new HealthInformationNotificationNotification("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-12-02T22:28:09.993Z"),                 new HealthInformationNotificationNotificationNotifier("tmh", HealthInformationNotificationNotificationNotifierTypeEnum.HIU);,                 new HealthInformationNotificationNotificationStatusNotification("max", HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum.FAILED) {{
                                                                statusResponses = new org.openapis.openapi.models.shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses[]{{
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("voluptatem", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "minus";
                                                                        description = "esse";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                    add(new HealthInformationNotificationNotificationStatusNotificationStatusResponses("ea", HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK) {{
                                                                        careContextReference = "perferendis";
                                                                        description = "rerum";
                                                                        hiStatus = HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum.OK;
                                                                    }}),
                                                                }};
                                                            }};, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-07-06T08:20:32.050Z"));, "repellat");            

            PostV05HealthInformationNotifyJsonResponse res = sdk.hipFacing.postV05HealthInformationNotifyJson(req);

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

            PostV05HealthInformationNotifyRawRequest req = new PostV05HealthInformationNotifyRawRequest("velit", "porro".getBytes(), "provident");            

            PostV05HealthInformationNotifyRawResponse res = sdk.hipFacing.postV05HealthInformationNotifyRaw(req);

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

            PostV05LinksLinkAddContextsJsonRequest req = new PostV05LinksLinkAddContextsJsonRequest("consectetur",                 new PatientCareContextLinkRequest(                new PatientCareContextLink("eligendi",                 new PatientCareContextLinkPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                                                add(new CareContextRepresentation("natus", "temporibus") {{
                                                                                    display = "consectetur";
                                                                                    referenceNumber = "soluta";
                                                                                }}),
                                                                                add(new CareContextRepresentation("tenetur", "aspernatur") {{
                                                                                    display = "officia";
                                                                                    referenceNumber = "amet";
                                                                                }}),
                                                                            }}, "quo", "TMH-PUID-001"););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-06-16T01:29:10.948Z"));, "laborum");            

            PostV05LinksLinkAddContextsJsonResponse res = sdk.hipFacing.postV05LinksLinkAddContextsJson(req);

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

            PostV05LinksLinkAddContextsRawRequest req = new PostV05LinksLinkAddContextsRawRequest("dignissimos", "vero".getBytes(), "qui");            

            PostV05LinksLinkAddContextsRawResponse res = sdk.hipFacing.postV05LinksLinkAddContextsRaw(req);

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

            PostV05LinksLinkOnConfirmJsonRequest req = new PostV05LinksLinkOnConfirmJsonRequest("consectetur",                 new PatientLinkResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("f2257411-faf4-4b75-84e4-72e802857a5b");, OffsetDateTime.parse("2022-12-23T03:22:14.898Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "eum";
                                }};;
                                patient = new PatientLinkResultPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                    add(new CareContextRepresentation("fugiat", "nostrum") {{
                                                        display = "mollitia";
                                                        referenceNumber = "dignissimos";
                                                    }}),
                                                }}, "molestiae", "veniam");;
                            }};, "reiciendis");            

            PostV05LinksLinkOnConfirmJsonResponse res = sdk.hipFacing.postV05LinksLinkOnConfirmJson(req);

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

            PostV05LinksLinkOnConfirmRawRequest req = new PostV05LinksLinkOnConfirmRawRequest("ab", "modi".getBytes(), "aut");            

            PostV05LinksLinkOnConfirmRawResponse res = sdk.hipFacing.postV05LinksLinkOnConfirmRaw(req);

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

            PostV05LinksLinkOnInitJsonRequest req = new PostV05LinksLinkOnInitJsonRequest("aut",                 new PatientLinkReferenceResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("e764ad73-34ec-41b7-81b3-6a08088d100e");, OffsetDateTime.parse("2021-01-17T21:44:22.334Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d") {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "officia";
                                }};;
                                link = new PatientLinkReferenceResultLink(PatientLinkReferenceResultLinkAuthenticationTypeEnum.DIRECT, "voluptatem") {{
                                    meta = new Meta() {{
                                        communicationExpiry = "2019-12-30T12:01:55Z";
                                        communicationHint = "alias";
                                        communicationMedium = MetaCommunicationMediumEnum.EMAIL;
                                    }};;
                                }};;
                            }};, "hic");            

            PostV05LinksLinkOnInitJsonResponse res = sdk.hipFacing.postV05LinksLinkOnInitJson(req);

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

            PostV05LinksLinkOnInitRawRequest req = new PostV05LinksLinkOnInitRawRequest("voluptatem", "incidunt".getBytes(), "qui");            

            PostV05LinksLinkOnInitRawResponse res = sdk.hipFacing.postV05LinksLinkOnInitRaw(req);

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

            PostV05PatientsSmsNotifyJsonRequest req = new PostV05PatientsSmsNotifyJsonRequest("qui",                 new PatientSMSNotifcationRequest(                new PatientSMSNotifcationRequestNotification("X-Ray on 22nd Dec",                 new PatientSMSNotifcationRequestNotificationHip("HIP_001") {{
                                                                name = "Max Healthcare (Optional)";
                                                            }};, "+91-9999999999") {{
                                                deeplinkUrl = "https://link.to.health.records/ (Optional)";
                                                receiverName = "Ramesh Singh (Optional)";
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-12-04T19:10:00.340Z"));, "explicabo");            

            PostV05PatientsSmsNotifyJsonResponse res = sdk.hipFacing.postV05PatientsSmsNotifyJson(req);

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

            PostV05PatientsSmsNotifyRawRequest req = new PostV05PatientsSmsNotifyRawRequest("beatae", "aliquid".getBytes(), "modi");            

            PostV05PatientsSmsNotifyRawResponse res = sdk.hipFacing.postV05PatientsSmsNotifyRaw(req);

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

            PostV05UsersAuthConfirmJsonRequest req = new PostV05UsersAuthConfirmJsonRequest("optio",                 new PatientAuthConfirmRequest(                new PatientAuthConfirmRequestCredential() {{
                                                authCode = "voluptatibus";
                                                demographic = new PatientDemographic("1972-02-29", PatientGenderEnum.O, "janki das") {{
                                                    identifier = new AuthConfirmIdentifier(AuthConfirmIdentifierTypeEnum.MOBILE, "+919800083232");;
                                                }};;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-07-16T18:01:27.840Z"), "totam");, "sequi");            

            PostV05UsersAuthConfirmJsonResponse res = sdk.hipFacing.postV05UsersAuthConfirmJson(req);

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

            PostV05UsersAuthConfirmRawRequest req = new PostV05UsersAuthConfirmRawRequest("aliquid", "ea".getBytes(), "impedit");            

            PostV05UsersAuthConfirmRawResponse res = sdk.hipFacing.postV05UsersAuthConfirmRaw(req);

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

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("ducimus",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.LINK,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIP););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2020-01-04T06:43:39.012Z"));, "nulla");            

            PostV05UsersAuthFetchModesJsonResponse res = sdk.hipFacing.postV05UsersAuthFetchModesJson(req);

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

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("laborum", "natus".getBytes(), "accusamus");            

            PostV05UsersAuthFetchModesRawResponse res = sdk.hipFacing.postV05UsersAuthFetchModesRaw(req);

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

            PostV05UsersAuthInitJsonRequest req = new PostV05UsersAuthInitJsonRequest("doloremque",                 new PatientAuthInitRequest(                new PatientAuthInitRequestQuery("hinapatel@ndhm", PatientAuthPurposeEnum.KYC,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIU);) {{
                                                authMode = AuthenticationModeEnum.AADHAAR_OTP;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-03-31T11:14:55.160Z"));, "rem");            

            PostV05UsersAuthInitJsonResponse res = sdk.hipFacing.postV05UsersAuthInitJson(req);

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

            PostV05UsersAuthInitRawRequest req = new PostV05UsersAuthInitRawRequest("quia", "ullam".getBytes(), "quisquam");            

            PostV05UsersAuthInitRawResponse res = sdk.hipFacing.postV05UsersAuthInitRaw(req);

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

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("dicta",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("fc0e115c-80bf-4f91-8544-ec42defcce8f");, OffsetDateTime.parse("2022-06-05T16:37:51.499Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "esse";
                                }};;
                            }};, "iure");            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.hipFacing.postV05UsersAuthOnNotifyJson(req);

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

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("odio", "nesciunt".getBytes(), "debitis");            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.hipFacing.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
