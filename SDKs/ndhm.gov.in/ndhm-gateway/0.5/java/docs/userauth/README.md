# userAuth

### Available Operations

* [postV05UsersAuthConfirmJson](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [postV05UsersAuthFetchModesJson](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [postV05UsersAuthInitJson](#postv05usersauthinitjson) - Initialize authentication from HIP
* [postV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnNotifyJson](#postv05usersauthonnotifyjson) - callback API by HIU/HIPs as acknowledgement of auth notification
* [postV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API by HIU/HIPs as acknowledgement of auth notification

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

            PostV05UsersAuthConfirmJsonRequest req = new PostV05UsersAuthConfirmJsonRequest("tenetur",                 new PatientAuthConfirmRequest(                new PatientAuthConfirmRequestCredential() {{
                                                authCode = "assumenda";
                                                demographic = new PatientDemographic("1972-02-29", PatientGenderEnum.F, "janki das") {{
                                                    identifier = new AuthConfirmIdentifier(AuthConfirmIdentifierTypeEnum.MOBILE, "+919800083232");;
                                                }};;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-08-24T19:47:59.278Z"), "perspiciatis");, "alias");            

            PostV05UsersAuthConfirmJsonResponse res = sdk.userAuth.postV05UsersAuthConfirmJson(req);

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

            PostV05UsersAuthConfirmRawRequest req = new PostV05UsersAuthConfirmRawRequest("ex", "quibusdam".getBytes(), "dicta");            

            PostV05UsersAuthConfirmRawResponse res = sdk.userAuth.postV05UsersAuthConfirmRaw(req);

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

            PostV05UsersAuthFetchModesJsonRequest req = new PostV05UsersAuthFetchModesJsonRequest("quia",                 new PatientAuthModeQueryRequest(                new PatientAuthModeQueryRequestQuery("hinapatel79@ndhm", PatientAuthPurposeEnum.KYC,                 new PatientAuthModeQueryRequestQueryRequester("100005", PatientAuthModeQueryRequestQueryRequesterTypeEnum.HIP););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2022-03-27T11:38:54.081Z"));, "rem");            

            PostV05UsersAuthFetchModesJsonResponse res = sdk.userAuth.postV05UsersAuthFetchModesJson(req);

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

            PostV05UsersAuthFetchModesRawRequest req = new PostV05UsersAuthFetchModesRawRequest("officiis", "omnis".getBytes(), "neque");            

            PostV05UsersAuthFetchModesRawResponse res = sdk.userAuth.postV05UsersAuthFetchModesRaw(req);

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

            PostV05UsersAuthInitJsonRequest req = new PostV05UsersAuthInitJsonRequest("corporis",                 new PatientAuthInitRequest(                new PatientAuthInitRequestQuery("hinapatel@ndhm", PatientAuthPurposeEnum.KYC_AND_LINK,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIP);) {{
                                                authMode = AuthenticationModeEnum.AADHAAR_OTP;
                                            }};, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-02-23T06:35:58.710Z"));, "quos");            

            PostV05UsersAuthInitJsonResponse res = sdk.userAuth.postV05UsersAuthInitJson(req);

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

            PostV05UsersAuthInitRawRequest req = new PostV05UsersAuthInitRawRequest("dicta", "sapiente".getBytes(), "ipsum");            

            PostV05UsersAuthInitRawResponse res = sdk.userAuth.postV05UsersAuthInitRaw(req);

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

            PostV05UsersAuthNotifyJsonRequest req = new PostV05UsersAuthNotifyJsonRequest("consequatur",                 new PatientAuthNotification("5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-03-16T08:19:39.086Z")) {{
                                auth = new PatientAuthNotificationAuth(PatientAuthNotificationAuthStatusEnum.GRANTED, "recusandae") {{
                                    accessToken = "labore";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.M, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "magni";
                                            line = "aperiam";
                                            pincode = "dolores";
                                            state = "illum";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MOBILE;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MOBILE;
                                                value = "+919800083232";
                                            }}),
                                        }};
                                    }};;
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2022-09-05T13:55:43.105Z"), 1L, PatientAuthPurposeEnum.KYC,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIP););;
                                }};;
                            }};, "minima", "sit");            

            PostV05UsersAuthNotifyJsonResponse res = sdk.userAuth.postV05UsersAuthNotifyJson(req);

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

            PostV05UsersAuthNotifyRawRequest req = new PostV05UsersAuthNotifyRawRequest("vel", "laboriosam".getBytes(), "quaerat", "quasi");            

            PostV05UsersAuthNotifyRawResponse res = sdk.userAuth.postV05UsersAuthNotifyRaw(req);

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

            PostV05UsersAuthOnConfirmJsonRequest req = new PostV05UsersAuthOnConfirmJsonRequest("rem",                 new PatientAuthConfirmResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("70d9d21f-9ad0-430c-8ecc-11a083642906");, OffsetDateTime.parse("2021-08-05T12:18:31.502Z")) {{
                                auth = new PatientAuthConfirmResponseAuth() {{
                                    accessToken = "laudantium";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.F, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "aut";
                                            line = "quia";
                                            pincode = "officia";
                                            state = "quaerat";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.HEALTH_ID;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MR;
                                                value = "+919800083232";
                                            }}),
                                        }};
                                    }};;
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2021-08-16T07:12:25.575Z"), 1L, PatientAuthPurposeEnum.LINK,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIU););;
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "praesentium";
                                }};;
                            }};, "tempora", "ipsam");            

            PostV05UsersAuthOnConfirmJsonResponse res = sdk.userAuth.postV05UsersAuthOnConfirmJson(req);

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

            PostV05UsersAuthOnConfirmRawRequest req = new PostV05UsersAuthOnConfirmRawRequest("officiis", "sequi".getBytes(), "magni", "voluptatem");            

            PostV05UsersAuthOnConfirmRawResponse res = sdk.userAuth.postV05UsersAuthOnConfirmRaw(req);

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

            PostV05UsersAuthOnFetchModesJsonRequest req = new PostV05UsersAuthOnFetchModesJsonRequest("est",                 new PatientAuthModeQueryResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("319f4bad-f947-4c9a-867b-c42426665816");, OffsetDateTime.parse("2020-06-08T05:53:12.101Z")) {{
                                auth = new PatientAuthModeQueryResponseAuth(                new org.openapis.openapi.models.shared.AuthenticationModeEnum[]{{
                                                    add(AuthenticationModeEnum.DEMOGRAPHICS),
                                                    add(AuthenticationModeEnum.DEMOGRAPHICS),
                                                    add(AuthenticationModeEnum.AADHAAR_OTP),
                                                    add(AuthenticationModeEnum.AADHAAR_OTP),
                                                }}, PatientAuthPurposeEnum.KYC);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "doloribus";
                                }};;
                            }};, "cumque", "expedita");            

            PostV05UsersAuthOnFetchModesJsonResponse res = sdk.userAuth.postV05UsersAuthOnFetchModesJson(req);

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

            PostV05UsersAuthOnFetchModesRawRequest req = new PostV05UsersAuthOnFetchModesRawRequest("modi", "cumque".getBytes(), "ipsam", "occaecati");            

            PostV05UsersAuthOnFetchModesRawResponse res = sdk.userAuth.postV05UsersAuthOnFetchModesRaw(req);

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

            PostV05UsersAuthOnInitJsonRequest req = new PostV05UsersAuthOnInitJsonRequest("ipsum",                 new PatientAuthInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("ec12cdaa-d0ec-47af-adbd-80df448a47f9");, OffsetDateTime.parse("2022-06-02T22:16:37.572Z")) {{
                                auth = new PatientAuthInitResponseAuth(AuthenticationModeEnum.MOBILE_OTP, "impedit") {{
                                    meta = new AuthMeta() {{
                                        expiry = "2019-12-30T12:01:55Z";
                                        hint = "minima";
                                    }};;
                                }};;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "blanditiis";
                                }};;
                            }};, "quas", "voluptatem");            

            PostV05UsersAuthOnInitJsonResponse res = sdk.userAuth.postV05UsersAuthOnInitJson(req);

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

            PostV05UsersAuthOnInitRawRequest req = new PostV05UsersAuthOnInitRawRequest("provident", "quas".getBytes(), "ipsum", "vero");            

            PostV05UsersAuthOnInitRawResponse res = sdk.userAuth.postV05UsersAuthOnInitRaw(req);

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

            PostV05UsersAuthOnNotifyJsonRequest req = new PostV05UsersAuthOnNotifyJsonRequest("fuga",                 new PatientAuthNotificationAcknowledgement("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("bf9ef3ff-dd9f-47f0-b9af-4d35724cdb0f");, OffsetDateTime.parse("2022-02-15T16:22:51.183Z")) {{
                                acknowledgement = new PatientAuthNotificationAcknowledgementAcknowledgement(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum.OK);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "quas";
                                }};;
                            }};, "quasi");            

            PostV05UsersAuthOnNotifyJsonResponse res = sdk.userAuth.postV05UsersAuthOnNotifyJson(req);

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

            PostV05UsersAuthOnNotifyRawRequest req = new PostV05UsersAuthOnNotifyRawRequest("architecto", "praesentium".getBytes(), "iusto");            

            PostV05UsersAuthOnNotifyRawResponse res = sdk.userAuth.postV05UsersAuthOnNotifyRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
