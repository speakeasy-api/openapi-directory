# emailAddressInformation

### Available Operations

* [getemailinfo](#getemailinfo) - Gets email validation information for an email address

## getemailinfo

Get email validation information and other demographics for an email address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetemailinfoRequest;
import org.openapis.openapi.models.operations.GetemailinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetemailinfoRequest req = new GetemailinfoRequest("distinctio", "quibusdam");            

            GetemailinfoResponse res = sdk.emailAddressInformation.getemailinfo(req);

            if (res.getemailinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
