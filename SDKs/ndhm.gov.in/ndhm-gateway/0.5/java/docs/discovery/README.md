# discovery

### Available Operations

* [postV05CareContextsDiscoverJson](#postv05carecontextsdiscoverjson) - Discover patient's accounts
* [postV05CareContextsDiscoverRaw](#postv05carecontextsdiscoverraw) - Discover patient's accounts
* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

## postV05CareContextsDiscoverJson

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverJsonRequest req = new PostV05CareContextsDiscoverJsonRequest("fuga",                 new PatientDiscoveryRequest(                new PatientDiscoveryRequestPatient(PatientGenderEnum.F, "<patient-id>@<consent-manager-id>", "chandler bing",                 new org.openapis.openapi.models.shared.Identifier[]{{
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.HEALTH_ID;
                                                                    value = "+919800083232";
                                                                }}),
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.HEALTH_ID;
                                                                    value = "+919800083232";
                                                                }}),
                                                                add(new Identifier() {{
                                                                    type = IdentifierTypeEnum.NDHM_HEALTH_NUMBER;
                                                                    value = "+919800083232";
                                                                }}),
                                                            }}, 2000L) {{
                                                unverifiedIdentifiers = new org.openapis.openapi.models.shared.Identifier[]{{
                                                    add(new Identifier() {{
                                                        type = IdentifierTypeEnum.MOBILE;
                                                        value = "+919800083232";
                                                    }}),
                                                    add(new Identifier() {{
                                                        type = IdentifierTypeEnum.HEALTH_ID;
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
                                            }};, "499a5a4a-7dda-4f20-9b67-e24589627061", OffsetDateTime.parse("2022-12-15T11:44:44.229Z"), "75779291-77de-4ac6-86ec-b573409e3eb1");, "earum");            

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

Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
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
import org.openapis.openapi.models.shared.PatientGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV05CareContextsDiscoverRawRequest req = new PostV05CareContextsDiscoverRawRequest("veniam", "animi".getBytes(), "dolores");            

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

            PostV05CareContextsOnDiscoverJsonRequest req = new PostV05CareContextsOnDiscoverJsonRequest("nam",                 new PatientDiscoveryResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("12eb07f1-16db-4995-85fc-95fa88970e18");, OffsetDateTime.parse("2021-05-07T09:23:04.849Z"), "bb30fcb3-3ea0-455b-997c-d44e2f52d82d") {{
                                error = new Error() {{
                                    code = ErrorCodeEnum.ONE_THOUSAND;
                                    message = "exercitationem";
                                }};;
                                patient = new PatientRepresentation("ab", "velit") {{
                                    careContexts = new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                        add(new CareContextRepresentation("voluptatibus", "quaerat") {{
                                            display = "tempore";
                                            referenceNumber = "nisi";
                                        }}),
                                        add(new CareContextRepresentation("nisi", "quis") {{
                                            display = "blanditiis";
                                            referenceNumber = "distinctio";
                                        }}),
                                        add(new CareContextRepresentation("minus", "facere") {{
                                            display = "nisi";
                                            referenceNumber = "libero";
                                        }}),
                                    }};
                                    matchedBy = new org.openapis.openapi.models.shared.IdentifierTypeEnum[]{{
                                        add(IdentifierTypeEnum.MOBILE),
                                        add(IdentifierTypeEnum.MR),
                                        add(IdentifierTypeEnum.HEALTH_ID),
                                    }};
                                }};;
                            }};, "voluptatibus");            

            PostV05CareContextsOnDiscoverJsonResponse res = sdk.discovery.postV05CareContextsOnDiscoverJson(req);

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

            PostV05CareContextsOnDiscoverRawRequest req = new PostV05CareContextsOnDiscoverRawRequest("consequuntur", "debitis".getBytes(), "labore");            

            PostV05CareContextsOnDiscoverRawResponse res = sdk.discovery.postV05CareContextsOnDiscoverRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
