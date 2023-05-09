# whatsApp

### Available Operations

* [getWAAccount](#getwaaccount) - Retrieve a Whatsapp account

## getWAAccount

Retrieve a Whatsapp account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWAAccountRequest;
import org.openapis.openapi.models.operations.GetWAAccountResponse;
import org.openapis.openapi.models.operations.GetWAAccountSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWAAccountRequest req = new GetWAAccountRequest("repellendus");            

            GetWAAccountResponse res = sdk.whatsApp.getWAAccount(req, new GetWAAccountSecurity() {{
                basicAuth = new SchemeBasicAuth("sapiente", "quo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.waAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
