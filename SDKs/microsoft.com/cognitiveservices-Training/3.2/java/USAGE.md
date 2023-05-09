<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainRequest req = new GetDomainRequest("9bd9d8d6-9a67-44e0-b467-cc8796ed151a");            

            GetDomainResponse res = sdk.domainsApi.getDomain(req);

            if (res.domain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->