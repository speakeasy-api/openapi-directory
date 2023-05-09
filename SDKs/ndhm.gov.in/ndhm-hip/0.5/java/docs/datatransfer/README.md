# dataTransfer

### Available Operations

* [postV05HealthInformationTransferJson](#postv05healthinformationtransferjson) - health information transfer API
* [postV05HealthInformationTransferRaw](#postv05healthinformationtransferraw) - health information transfer API

## postV05HealthInformationTransferJson

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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

            PostV05HealthInformationTransferJsonRequest req = new PostV05HealthInformationTransferJsonRequest("dolore",                 new DataNotification(                new Object[]{{
                                                add(new EntryLink("NCC1701", "natus", "https://data-from.net/sa2321afaf12e13", EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "NCC1701";
                                                    checksum = "sequi";
                                                    link = "https://data-from.net/sa2321afaf12e13";
                                                    media = EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                                add(new EntryLink("NCC1701", "voluptatibus", "https://data-from.net/sa2321afaf12e13", EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "NCC1701";
                                                    checksum = "aut";
                                                    link = "https://data-from.net/sa2321afaf12e13";
                                                    media = EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                                add(new EntryContent("RVH1008", "fugit", "Encrypted content of data packaged in FHIR bundle", EntryContentMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "RVH1008";
                                                    checksum = "nulla";
                                                    content = "Encrypted content of data packaged in FHIR bundle";
                                                    media = EntryContentMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                                add(new EntryLink("NCC1701", "doloribus", "https://data-from.net/sa2321afaf12e13", EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON) {{
                                                    careContextReference = "NCC1701";
                                                    checksum = "maiores";
                                                    link = "https://data-from.net/sa2321afaf12e13";
                                                    media = EntryLinkMediaEnum.APPLICATION_FHIR_PLUS_JSON;
                                                }}),
                                            }},                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-03-31T22:43:48.703Z"), "ducimus", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6");, 4048L, 639473L, "45626d43-6813-4f16-99f5-fce6c556146c"););            

            PostV05HealthInformationTransferJsonResponse res = sdk.dataTransfer.postV05HealthInformationTransferJson(req);

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
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


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

            PostV05HealthInformationTransferRawRequest req = new PostV05HealthInformationTransferRawRequest("consectetur", "recusandae".getBytes());            

            PostV05HealthInformationTransferRawResponse res = sdk.dataTransfer.postV05HealthInformationTransferRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
