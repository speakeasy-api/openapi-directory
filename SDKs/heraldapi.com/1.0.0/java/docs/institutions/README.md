# institutions

### Available Operations

* [getInstitutions](#getinstitutions) - /institutions

## getInstitutions

### Get institutions

Get a list of available institutions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstitutionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetInstitutionsResponse res = sdk.institutions.getInstitutions();

            if (res.getInstitutions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
