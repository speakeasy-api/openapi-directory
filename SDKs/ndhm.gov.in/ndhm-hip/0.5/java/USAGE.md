<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetV05WellKnownOpenidConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05WellKnownOpenidConfigurationResponse res = sdk.gateway.getV05WellKnownOpenidConfiguration();

            if (res.openIdConfiguration.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->