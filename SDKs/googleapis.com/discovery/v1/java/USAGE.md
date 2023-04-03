<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DiscoveryApisGetRestRequest;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryApisGetRestRequest req = new DiscoveryApisGetRestRequest() {{
                alt = "json";
                api = "corrupti";
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
                version = "corrupti";
            }}            

            DiscoveryApisGetRestResponse res = sdk.apis.discoveryApisGetRest(req);

            if (res.restDescription.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->