# discovery

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts

## postV05CareContextsDiscoverJson

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverJsonResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryRequest;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatient;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverJsonRequest req = new PostV05CareContextsDiscoverJsonRequest("aspernatur",                 new PatientDiscoveryRequest(                new PatientDiscoveryRequestPatient(PatientDiscoveryRequestPatientGenderEnum.F, "<patient-id>@<consent-manager-id>", "chandler bing",                 new org.openapis.openapi.models.shared.Identifier[]{{
                                                                add(new Identifier(IdentifierTypeEnum.NDHM_HEALTH_NUMBER, "+919800083232") {{
                                                                    type = IdentifierTypeEnum.HEALTH_ID;
                                                                    value = "+919800083232";
                                                                }}),
                                                            }}, 2000L) {{
                                                unverifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                    add(new Identifier(IdentifierTypeEnum.NDHM_HEALTH_NUMBER, "+919800083232") {{
                                                        type = IdentifierTypeEnum.MOBILE;
                                                        value = "+919800083232";
                                                    }}),
                                                }};
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-02-01T11:35:02.584Z"), "2e141aac-366c-48dd-ab14-42907474778a");, "reprehenderit");            

            PostV05CareContextsDiscoverJsonResponse res = sdk.discovery.postV05CareContextsDiscoverJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05CareContextsDiscoverRaw

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverRawRequest;
import org.openapis.openapi.models.operations.PostV05CareContextsDiscoverRawResponse;
import org.openapis.openapi.models.shared.Identifier;
import org.openapis.openapi.models.shared.IdentifierTypeEnum;
import org.openapis.openapi.models.shared.PatientDiscoveryRequest;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatient;
import org.openapis.openapi.models.shared.PatientDiscoveryRequestPatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverRawRequest req = new PostV05CareContextsDiscoverRawRequest("quidem", "fugiat".getBytes(), "ut");            

            PostV05CareContextsDiscoverRawResponse res = sdk.discovery.postV05CareContextsDiscoverRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
