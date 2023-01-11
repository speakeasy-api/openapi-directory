<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetV1ValidationSingleRequest req = new GetV1ValidationSingleRequest() {{
                queryParams = new GetV1ValidationSingleQueryParams() {{
                    email = "sit";
                    format = "json";
                    key = "culpa";
                }};
            }};

            GetV1ValidationSingleResponse res = sdk.getV1ValidationSingle(req);

            if (res.getV1ValidationSingle200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->