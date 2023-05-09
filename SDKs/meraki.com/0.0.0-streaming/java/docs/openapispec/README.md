# openAPISpec

### Available Operations

* [getOrganizationOpenapiSpec](#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

## getOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationOpenapiSpecRequest;
import org.openapis.openapi.models.operations.GetOrganizationOpenapiSpecResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationOpenapiSpecRequest req = new GetOrganizationOpenapiSpecRequest("officia");            

            GetOrganizationOpenapiSpecResponse res = sdk.openAPISpec.getOrganizationOpenapiSpec(req);

            if (res.getOrganizationOpenapiSpec200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
