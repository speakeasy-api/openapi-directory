# phoneValidation

### Available Operations

* [phoneValidation](#phonevalidation) - Phone Validation

## phoneValidation

Phone Validation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhoneValidationRequest;
import org.openapis.openapi.models.operations.PhoneValidationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PhoneValidationRequest req = new PhoneValidationRequest("18007132618", "asd24#sdfs322#") {{
                country = "UK";
            }};            

            PhoneValidationResponse res = sdk.phoneValidation.phoneValidation(req);

            if (res.phoneValidation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
