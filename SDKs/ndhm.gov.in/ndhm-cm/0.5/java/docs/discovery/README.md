# discovery

### Available Operations

* [postV05CareContextsOnDiscoverJson](#postv05carecontextsondiscoverjson) - Response to patient's account discovery request
* [postV05CareContextsOnDiscoverRaw](#postv05carecontextsondiscoverraw) - Response to patient's account discovery request

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

            PostV05CareContextsOnDiscoverJsonRequest req = new PostV05CareContextsOnDiscoverJsonRequest("amet",                 new PatientDiscoveryResult("5f7a535d-a3fd-416b-b069-c97d021fbacd",                 new RequestReference("a6699707-4ba4-4469-b6e2-141959890afa");, OffsetDateTime.parse("2022-07-27T12:46:27.682Z"), "3e2516fe-4c8b-4711-a5b7-fd2ed028921c") {{
                                error = new Error(ErrorCodeEnum.TEN_THOUSAND_AND_ONE, "pariatur");;
                                patient = new PatientRepresentation(                new org.openapis.openapi.models.shared.CareContextRepresentation[]{{
                                                    add(new CareContextRepresentation("odit", "ea") {{
                                                        display = "ea";
                                                        referenceNumber = "excepturi";
                                                    }}),
                                                    add(new CareContextRepresentation("maiores", "quidem") {{
                                                        display = "accusantium";
                                                        referenceNumber = "ab";
                                                    }}),
                                                    add(new CareContextRepresentation("autem", "nam") {{
                                                        display = "ipsam";
                                                        referenceNumber = "voluptate";
                                                    }}),
                                                    add(new CareContextRepresentation("nemo", "voluptatibus") {{
                                                        display = "eaque";
                                                        referenceNumber = "pariatur";
                                                    }}),
                                                }}, "perferendis", "fugiat") {{
                                    matchedBy = new org.openapis.openapi.models.shared.IdentifierTypeEnum[]{{
                                        add(IdentifierTypeEnum.MOBILE),
                                    }};
                                }};;
                            }};);            

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

            PostV05CareContextsOnDiscoverRawRequest req = new PostV05CareContextsOnDiscoverRawRequest("cumque", "corporis".getBytes());            

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
