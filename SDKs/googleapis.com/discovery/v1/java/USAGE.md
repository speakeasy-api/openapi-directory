<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DiscoveryApisGetRestPathParams;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestQueryParams;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestRequest;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryApisGetRestRequest req = new DiscoveryApisGetRestRequest() {{
                pathParams = new DiscoveryApisGetRestPathParams() {{
                    api = "corrupti";
                    version = "provident";
                }};
                queryParams = new DiscoveryApisGetRestQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            DiscoveryApisGetRestResponse res = sdk.apis.discoveryApisGetRest(req);

            if (res.restDescription.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->