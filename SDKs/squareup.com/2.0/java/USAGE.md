<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.operations.RegisterDomainSecurity;
import org.openapis.openapi.models.shared.RegisterDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterDomainRequest req = new RegisterDomainRequest("corrupti");            

            RegisterDomainResponse res = sdk.applePay.registerDomain(req, new RegisterDomainSecurity("provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.registerDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->