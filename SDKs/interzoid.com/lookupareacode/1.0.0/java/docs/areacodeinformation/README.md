# areaCodeInformation

### Available Operations

* [getareacode](#getareacode) - Gets telephone area code information

## getareacode

Gets telephone area code information for a given area code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetareacodeRequest;
import org.openapis.openapi.models.operations.GetareacodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetareacodeRequest req = new GetareacodeRequest("distinctio", "quibusdam");            

            GetareacodeResponse res = sdk.areaCodeInformation.getareacode(req);

            if (res.getareacode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
