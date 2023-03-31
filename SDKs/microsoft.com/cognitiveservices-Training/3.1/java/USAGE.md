<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetDomainPathParams;
import org.openapis.openapi.models.operations.GetDomainHeaders;
import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainRequest req = new GetDomainRequest() {{
                pathParams = new GetDomainPathParams() {{
                    domainId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                headers = new GetDomainHeaders() {{
                    trainingKey = "deserunt";
                }};
            }};            

            GetDomainResponse res = sdk.domainsApi.getDomain(req);

            if (res.domain.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->