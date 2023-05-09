# link

### Available Operations

* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context

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

            PostV05LinksLinkConfirmJsonRequest req = new PostV05LinksLinkConfirmJsonRequest("eum",                 new LinkConfirmationRequest(                new LinkConfirmationRequestConfirmation("suscipit", "assumenda");, "28c10ab3-cdca-4425-9904-e523c7e0bc71", OffsetDateTime.parse("2022-06-25T15:00:14.304Z"));, "accusamus");            

            PostV05LinksLinkConfirmJsonResponse res = sdk.link.postV05LinksLinkConfirmJson(req);

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

            PostV05LinksLinkConfirmRawRequest req = new PostV05LinksLinkConfirmRawRequest("aliquam", "odio".getBytes(), "occaecati");            

            PostV05LinksLinkConfirmRawResponse res = sdk.link.postV05LinksLinkConfirmRaw(req);

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

Request from Gateway to links care contexts associated with only one patient
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

            PostV05LinksLinkInitJsonRequest req = new PostV05LinksLinkInitJsonRequest("commodi",                 new PatientLinkReferenceRequest(                new PatientLinkReferenceRequestPatient(                new org.openapis.openapi.models.shared.CareContext[]{{
                                                                add(new CareContext("deserunt") {{
                                                                    referenceNumber = "dolores";
                                                                }}),
                                                                add(new CareContext("accusantium") {{
                                                                    referenceNumber = "molestiae";
                                                                }}),
                                                                add(new CareContext("eum") {{
                                                                    referenceNumber = "porro";
                                                                }}),
                                                                add(new CareContext("praesentium") {{
                                                                    referenceNumber = "quas";
                                                                }}),
                                                            }}, "hinapatel79@ndhm", "TMH-PUID-001");, "282aa482-562f-4222-a981-7ee17cbe61e6", OffsetDateTime.parse("2022-01-20T13:10:25.426Z"), "b95bc0ab-3c20-4c4f-b789-fd871f99dd2e");, "asperiores");            

            PostV05LinksLinkInitJsonResponse res = sdk.link.postV05LinksLinkInitJson(req);

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

Request from Gateway to links care contexts associated with only one patient
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

            PostV05LinksLinkInitRawRequest req = new PostV05LinksLinkInitRawRequest("facere", "veritatis".getBytes(), "consequuntur");            

            PostV05LinksLinkInitRawResponse res = sdk.link.postV05LinksLinkInitRaw(req);

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

            PostV05LinksLinkOnAddContextsJsonRequest req = new PostV05LinksLinkOnAddContextsJsonRequest("quasi",                 new PatientCareContextLinkResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("aa6f1e67-4bdb-404f-9575-6082d68ea19f");, OffsetDateTime.parse("2022-02-17T15:16:49.489Z")) {{
                                acknowledgement = new PatientCareContextLinkResponseAcknowledgement(PatientCareContextLinkResponseAcknowledgementStatusEnum.SUCCESS);;
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "voluptate");;
                            }};, "ipsa");            

            PostV05LinksLinkOnAddContextsJsonResponse res = sdk.link.postV05LinksLinkOnAddContextsJson(req);

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

            PostV05LinksLinkOnAddContextsRawRequest req = new PostV05LinksLinkOnAddContextsRawRequest("minima", "veritatis".getBytes(), "consectetur");            

            PostV05LinksLinkOnAddContextsRawResponse res = sdk.link.postV05LinksLinkOnAddContextsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
