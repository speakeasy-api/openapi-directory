# areaCodeInformation

### Available Operations

* [getareacodefromnumber](#getareacodefromnumber) - Gets area code information from a telephone number

## getareacodefromnumber

The area code will be parsed out of a telephone number and used to retrieve information about the area code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetareacodefromnumberRequest;
import org.openapis.openapi.models.operations.GetareacodefromnumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetareacodefromnumberRequest req = new GetareacodefromnumberRequest("distinctio", "quibusdam");            

            GetareacodefromnumberResponse res = sdk.areaCodeInformation.getareacodefromnumber(req);

            if (res.getareacodefromnumber200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
