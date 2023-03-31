<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RegisterDomainSecurity;
import org.openapis.openapi.models.operations.RegisterDomainRequest;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.shared.RegisterDomainRequest;
import org.openapis.openapi.models.shared.SchemeOauth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegisterDomainRequest req = new RegisterDomainRequest() {{
                security = new RegisterDomainSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new RegisterDomainRequest() {{
                    domainName = "corrupti";
                }};
            }};            

            RegisterDomainResponse res = sdk.applePay.registerDomain(req);

            if (res.registerDomainResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->