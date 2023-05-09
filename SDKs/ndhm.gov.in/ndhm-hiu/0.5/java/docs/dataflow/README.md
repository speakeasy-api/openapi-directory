# dataFlow

### Available Operations

* [postV05HealthInformationHiuOnRequestJson](#postv05healthinformationhiuonrequestjson) - Health information data request
* [postV05HealthInformationHiuOnRequestRaw](#postv05healthinformationhiuonrequestraw) - Health information data request
* [postV05HealthInformationTransferJson](#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## postV05HealthInformationHiuOnRequestJson

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHiuOnRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHiuOnRequestJsonResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHiuOnRequestJsonRequest req = new PostV05HealthInformationHiuOnRequestJsonRequest("ea",                 new HIUHealthInformationRequestResponse("a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",                 new RequestReference("c3e250fb-008c-442e-941a-ac366c8dd6b1");, OffsetDateTime.parse("2022-09-29T12:13:01.368Z")) {{
                                error = new Error(ErrorCodeEnum.ONE_THOUSAND, "provident");;
                                hiRequest = new HIUHealthInformationRequestResponseHiRequest(HIUHealthInformationRequestResponseHiRequestSessionStatusEnum.REQUESTED, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");;
                            }};, "molestiae");            

            PostV05HealthInformationHiuOnRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationHiuOnRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHiuOnRequestRaw

Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
  1. **Invalid consent artefact id**
  2. **Consent has expired**
  3. **Date ranges are invalid**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHiuOnRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHiuOnRequestRawResponse;
import org.openapis.openapi.models.shared.Error;
import org.openapis.openapi.models.shared.ErrorCodeEnum;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponse;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequest;
import org.openapis.openapi.models.shared.HIUHealthInformationRequestResponseHiRequestSessionStatusEnum;
import org.openapis.openapi.models.shared.RequestReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHiuOnRequestRawRequest req = new PostV05HealthInformationHiuOnRequestRawRequest("magnam", "odio".getBytes(), "eius");            

            PostV05HealthInformationHiuOnRequestRawResponse res = sdk.dataFlow.postV05HealthInformationHiuOnRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationTransferJson

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationTransferJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationTransferJsonResponse;
import org.openapis.openapi.models.shared.DataNotification;
import org.openapis.openapi.models.shared.EntryContent;
import org.openapis.openapi.models.shared.EntryContentMediaEnum;
import org.openapis.openapi.models.shared.EntryLink;
import org.openapis.openapi.models.shared.EntryLinkMediaEnum;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationTransferJsonRequest req = new PostV05HealthInformationTransferJsonRequest("esse",                 new DataNotification(                new Object[]{{
                                                add(new EntryLink("NCC1701", "reprehenderit", "https://data-from.net/sa2321afaf12e13", EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "NCC1701";
                                                    checksum = "fuga";
                                                    link = "https://data-from.net/sa2321afaf12e13";
                                                    media = EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                                add(new EntryLink("NCC1701", "ut", "https://data-from.net/sa2321afaf12e13", EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "NCC1701";
                                                    checksum = "fugiat";
                                                    link = "https://data-from.net/sa2321afaf12e13";
                                                    media = EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                            }},                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-08-15T07:50:23.042Z"), "assumenda", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6");, 181151L, 509342L, "c10ab3cd-ca42-4519-84e5-23c7e0bc7178"););            

            PostV05HealthInformationTransferJsonResponse res = sdk.dataFlow.postV05HealthInformationTransferJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationTransferRaw

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationTransferRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationTransferRawResponse;
import org.openapis.openapi.models.shared.DataNotification;
import org.openapis.openapi.models.shared.EntryContent;
import org.openapis.openapi.models.shared.EntryContentMediaEnum;
import org.openapis.openapi.models.shared.EntryLink;
import org.openapis.openapi.models.shared.EntryLinkMediaEnum;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationTransferRawRequest req = new PostV05HealthInformationTransferRawRequest("accusamus", "aliquam".getBytes());            

            PostV05HealthInformationTransferRawResponse res = sdk.dataFlow.postV05HealthInformationTransferRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
