<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apimKey = new SchemeApimKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetDomainRequest req = new GetDomainRequest() {{
                pathParams = new GetDomainPathParams() {{
                    domainId = "sit";
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