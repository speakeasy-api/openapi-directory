# emailValidation

### Available Operations

* [emailValidation](#emailvalidation) - Email Validation

## emailValidation

Email Validation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailValidationRequest;
import org.openapis.openapi.models.operations.EmailValidationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EmailValidationRequest req = new EmailValidationRequest("example@example.com", "asd24#sdfs322#");            

            EmailValidationResponse res = sdk.emailValidation.emailValidation(req);

            if (res.emailValidation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
