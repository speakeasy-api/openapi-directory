# dataFlow

### Available Operations

* [postV05HealthInformationHipRequestJson](#postv05healthinformationhiprequestjson) - Health information data request
* [postV05HealthInformationHipRequestRaw](#postv05healthinformationhiprequestraw) - Health information data request

## postV05HealthInformationHipRequestJson

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestJsonResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHealthInformationRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestJsonRequest req = new PostV05HealthInformationHipRequestJsonRequest("quis",                 new HIPHealthInformationRequest(                new HIPHealthInformationRequestHiRequest(                new Consent("ipsum");, "delectus",                 new DateRange(OffsetDateTime.parse("2022-10-08T10:17:36.770Z"), OffsetDateTime.parse("2020-02-26T11:54:04.858Z"));,                 new KeyMaterial("ECDH", "Curve25519",                 new KeyObject(OffsetDateTime.parse("2022-01-22T09:31:52.637Z"), "distinctio", "Curve25519/32byte random key");, "3fa85f64-5717-4562-b3fc-2c963f66afa6"););, "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d", OffsetDateTime.parse("2021-07-17T15:43:35.984Z"), "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d");, "similique");            

            PostV05HealthInformationHipRequestJsonResponse res = sdk.dataFlow.postV05HealthInformationHipRequestJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05HealthInformationHipRequestRaw

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawRequest;
import org.openapis.openapi.models.operations.PostV05HealthInformationHipRequestRawResponse;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.HIPHealthInformationRequest;
import org.openapis.openapi.models.shared.HIPHealthInformationRequestHiRequest;
import org.openapis.openapi.models.shared.KeyMaterial;
import org.openapis.openapi.models.shared.KeyObject;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05HealthInformationHipRequestRawRequest req = new PostV05HealthInformationHipRequestRawRequest("facilis", "vero".getBytes(), "ducimus");            

            PostV05HealthInformationHipRequestRawResponse res = sdk.dataFlow.postV05HealthInformationHipRequestRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
