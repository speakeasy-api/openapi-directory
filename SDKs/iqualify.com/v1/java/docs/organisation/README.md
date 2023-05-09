# organisation

### Available Operations

* [getOrg](#getorg) - Gets the current organisation

## getOrg

Returns the current organisation info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrgResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrgResponse res = sdk.organisation.getOrg();

            if (res.orgResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
