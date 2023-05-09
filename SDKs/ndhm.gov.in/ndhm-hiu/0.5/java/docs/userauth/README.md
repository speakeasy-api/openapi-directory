# userAuth

### Available Operations

* [postV05UsersAuthNotifyJson](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [postV05UsersAuthOnConfirmJson](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [postV05UsersAuthOnFetchModesJson](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [postV05UsersAuthOnInitJson](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [postV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

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

            PostV05UsersAuthNotifyJsonRequest req = new PostV05UsersAuthNotifyJsonRequest("ea",                 new PatientAuthNotification("5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-11-23T23:35:18.899Z")) {{
                                auth = new PatientAuthNotificationAuth(PatientAuthNotificationAuthStatusEnum.DENIED, "tempora") {{
                                    accessToken = "tempora";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.F, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "reiciendis";
                                            line = "ex";
                                            pincode = "sit";
                                            state = "non";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MR;
                                                value = "+919800083232";
                                            }}),
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.MR;
                                                value = "+919800083232";
                                            }}),
                                        }};
                                    }};;
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2022-02-08T08:59:54.184Z"), 1L, PatientAuthPurposeEnum.KYC,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIP););;
                                }};;
                            }};, "nobis", "error");            

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

            PostV05UsersAuthNotifyRawRequest req = new PostV05UsersAuthNotifyRawRequest("veniam", "minima".getBytes(), "recusandae", "reiciendis");            

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

            PostV05UsersAuthOnConfirmJsonRequest req = new PostV05UsersAuthOnConfirmJsonRequest("nulla",                 new PatientAuthConfirmResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("20e457e1-858b-46a8-9fbe-3a5aa8e4824d");, OffsetDateTime.parse("2022-05-14T04:54:08.545Z")) {{
                                auth = new PatientAuthConfirmResponseAuth() {{
                                    accessToken = "expedita";
                                    patient = new PatientDemographicResponse(PatientGenderEnum.F, "<patient-id>@<consent-manager-id>", "Hina Patel", 2000L) {{
                                        address = new PatientAddress() {{
                                            district = "consequatur";
                                            line = "esse";
                                            pincode = "ipsam";
                                            state = "sit";
                                        }};;
                                        identifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                            add(new Identifier() {{
                                                type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                value = "+919800083232";
                                            }}),
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
                                    validity = new AccessTokenValidity(OffsetDateTime.parse("2022-07-01T12:15:51.307Z"), 1L, PatientAuthPurposeEnum.KYC,                 new PatientAuthRequester("100005", PatientAuthRequesterTypeEnum.HIP););;
                                }};;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "vel");;
                            }};, "nostrum", "saepe");            

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

            PostV05UsersAuthOnConfirmRawRequest req = new PostV05UsersAuthOnConfirmRawRequest("error", "consequatur".getBytes(), "incidunt", "reiciendis");            

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

            PostV05UsersAuthOnFetchModesJsonRequest req = new PostV05UsersAuthOnFetchModesJsonRequest("dolorem",                 new PatientAuthModeQueryResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50");, OffsetDateTime.parse("2020-03-30T02:42:49.718Z")) {{
                                auth = new PatientAuthModeQueryResponseAuth(                new org.openapis.openapi.models.shared.AuthenticationModeEnum[]{{
                                                    add(AuthenticationModeEnum.DEMOGRAPHICS),
                                                }}, PatientAuthPurposeEnum.KYC);;
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "totam");;
                            }};, "suscipit", "quidem");            

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

            PostV05UsersAuthOnFetchModesRawRequest req = new PostV05UsersAuthOnFetchModesRawRequest("maxime", "et".getBytes(), "esse", "amet");            

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
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
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

            PostV05UsersAuthOnInitJsonRequest req = new PostV05UsersAuthOnInitJsonRequest("assumenda",                 new PatientAuthInitResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("689eee95-26f8-4d98-ae88-1ead4f0e1012");, OffsetDateTime.parse("2022-08-11T23:10:48.145Z")) {{
                                auth = new PatientAuthInitResponseAuth(AuthenticationModeEnum.MOBILE_OTP, "a") {{
                                    meta = new AuthMeta() {{
                                        expiry = "2019-12-30T12:01:55Z";
                                        hint = "molestias";
                                    }};;
                                }};;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "saepe");;
                            }};, "consequuntur", "occaecati");            

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
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
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

            PostV05UsersAuthOnInitRawRequest req = new PostV05UsersAuthOnInitRawRequest("officiis", "perspiciatis".getBytes(), "in", "adipisci");            

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
