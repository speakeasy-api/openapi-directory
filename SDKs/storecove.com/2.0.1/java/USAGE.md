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
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAdministrationRequest req = new CreateAdministrationRequest() {{
                pathParams = new CreateAdministrationPathParams() {{
                    legalEntityId = 8230160685758639177;
                }};
                request = "sunt";
            }};

            CreateAdministrationResponse res = sdk.administrations.createAdministration(req);

            if (res.administration.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->