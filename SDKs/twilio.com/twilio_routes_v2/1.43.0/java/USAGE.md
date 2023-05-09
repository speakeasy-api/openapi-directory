<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("corrupti");            

            FetchPhoneNumberResponse res = sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.routesV2PhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->