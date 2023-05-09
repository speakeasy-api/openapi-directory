# link

### Available Operations

* [postV05LinksLinkAddContextsJson](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [postV05LinksLinkConfirmJson](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [postV05LinksLinkInitJson](#postv05linkslinkinitjson) - Link patient's care contexts
* [postV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [postV05LinksLinkOnAddContextsJson](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [postV05LinksLinkOnConfirmJson](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [postV05LinksLinkOnInitJson](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [postV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request

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

            PostV05LinksLinkAddContextsJsonRequest req = new PostV05LinksLinkAddContextsJsonRequest("vel",                 new PatientCareContextLinkRequest(                new PatientCareContextLink("sapiente",                 new PatientCareContextLinkPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                                                add(new CareContextRepresentation("aperiam", "non") {{
                                                                                    display = "quae";
                                                                                    referenceNumber = "quos";
                                                                                }}),
                                                                                add(new CareContextRepresentation("aliquam", "quisquam") {{
                                                                                    display = "voluptates";
                                                                                    referenceNumber = "ad";
                                                                                }}),
                                                                                add(new CareContextRepresentation("maiores", "inventore") {{
                                                                                    display = "quas";
                                                                                    referenceNumber = "consequuntur";
                                                                                }}),
                                                                            }}, "aliquid", "TMH-PUID-001"););, "5f7a535d-a3fd-416b-b069-c97d021fbacd", OffsetDateTime.parse("2021-09-01T21:55:58.891Z"));, "dolor");            

            PostV05LinksLinkAddContextsJsonResponse res = sdk.link.postV05LinksLinkAddContextsJson(req);

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

            PostV05LinksLinkAddContextsRawRequest req = new PostV05LinksLinkAddContextsRawRequest("aliquid", "consectetur".getBytes(), "cumque");            

            PostV05LinksLinkAddContextsRawResponse res = sdk.link.postV05LinksLinkAddContextsRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            PostV05LinksLinkConfirmJsonRequest req = new PostV05LinksLinkConfirmJsonRequest("rem",                 new LinkConfirmationRequest(                new LinkConfirmationRequestConfirmation("voluptatum", "ducimus");, "3e484380-b1f6-4b8c-a275-a60a04c495cc", OffsetDateTime.parse("2022-06-04T04:18:38.456Z"));, "unde");            

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

            PostV05LinksLinkConfirmRawRequest req = new PostV05LinksLinkConfirmRawRequest("illo", "nihil".getBytes(), "inventore");            

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

Request from CM to links care contexts associated with only one patient
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

            PostV05LinksLinkInitJsonRequest req = new PostV05LinksLinkInitJsonRequest("libero",                 new PatientLinkReferenceRequest(                new PatientLinkReferenceRequestPatient(                new org.openapis.openapi.models.shared.CareContext[]{{
                                                                add(new CareContext("cumque") {{
                                                                    referenceNumber = "quasi";
                                                                }}),
                                                                add(new CareContext("harum") {{
                                                                    referenceNumber = "dicta";
                                                                }}),
                                                            }}, "hinapatel79@ndhm", "TMH-PUID-001");, "db1cf4b8-88eb-4dfc-8ccc-a99bc7fc0b2d", OffsetDateTime.parse("2020-03-21T09:34:05.399Z"), "10873e42-b006-4d67-8878-ba8581a58208");, "placeat");            

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

Request from CM to links care contexts associated with only one patient
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

            PostV05LinksLinkInitRawRequest req = new PostV05LinksLinkInitRawRequest("enim", "labore".getBytes(), "sapiente");            

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

            PostV05LinksLinkOnAddContextsJsonRequest req = new PostV05LinksLinkOnAddContextsJsonRequest("saepe",                 new PatientCareContextLinkResponse("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("fa9c95f2-eac5-4565-9307-cfee81206e28");, OffsetDateTime.parse("2022-10-19T22:20:11.046Z")) {{
                                acknowledgement = new PatientCareContextLinkResponseAcknowledgement(PatientCareContextLinkResponseAcknowledgementStatusEnum.SUCCESS);;
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "laborum";
                                }};;
                            }};, "aliquam");            

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

            PostV05LinksLinkOnAddContextsRawRequest req = new PostV05LinksLinkOnAddContextsRawRequest("deserunt", "modi".getBytes(), "sunt");            

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

            PostV05LinksLinkOnConfirmJsonRequest req = new PostV05LinksLinkOnConfirmJsonRequest("impedit",                 new PatientLinkResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("480d3f21-32af-4031-82d5-14f4cc6f18bf");, OffsetDateTime.parse("2022-03-17T11:23:26.153Z")) {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "beatae";
                                }};;
                                patient = new PatientLinkResultPatient(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                    add(new CareContextRepresentation("dolore", "tenetur") {{
                                                        display = "ea";
                                                        referenceNumber = "animi";
                                                    }}),
                                                    add(new CareContextRepresentation("animi", "laudantium") {{
                                                        display = "dignissimos";
                                                        referenceNumber = "esse";
                                                    }}),
                                                    add(new CareContextRepresentation("earum", "velit") {{
                                                        display = "esse";
                                                        referenceNumber = "eveniet";
                                                    }}),
                                                }}, "officiis", "eius");;
                            }};, "rerum");            

            PostV05LinksLinkOnConfirmJsonResponse res = sdk.link.postV05LinksLinkOnConfirmJson(req);

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

            PostV05LinksLinkOnConfirmRawRequest req = new PostV05LinksLinkOnConfirmRawRequest("itaque", "dignissimos".getBytes(), "ipsam");            

            PostV05LinksLinkOnConfirmRawResponse res = sdk.link.postV05LinksLinkOnConfirmRaw(req);

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

            PostV05LinksLinkOnInitJsonRequest req = new PostV05LinksLinkOnInitJsonRequest("explicabo",                 new PatientLinkReferenceResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("c65b3441-8e3b-4b91-88d9-75e0e8419d8f");, OffsetDateTime.parse("2022-06-21T13:56:00.357Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d") {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.TEN_THOUSAND_AND_ONE;
                                    message = "architecto";
                                }};;
                                link = new PatientLinkReferenceResultLink(PatientLinkReferenceResultLinkAuthenticationTypeEnum.DIRECT, "labore") {{
                                    meta = new Meta() {{
                                        communicationExpiry = "2019-12-30T12:01:55Z";
                                        communicationHint = "maiores";
                                        communicationMedium = MetaCommunicationMediumEnum.MOBILE;
                                    }};;
                                }};;
                            }};, "saepe");            

            PostV05LinksLinkOnInitJsonResponse res = sdk.link.postV05LinksLinkOnInitJson(req);

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

            PostV05LinksLinkOnInitRawRequest req = new PostV05LinksLinkOnInitRawRequest("consequatur", "esse".getBytes(), "debitis");            

            PostV05LinksLinkOnInitRawResponse res = sdk.link.postV05LinksLinkOnInitRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
