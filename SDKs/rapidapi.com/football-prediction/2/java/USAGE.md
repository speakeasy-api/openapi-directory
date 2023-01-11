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

            GetApiV2ListFederationsRequest req = new GetApiV2ListFederationsRequest() {{
                headers = new GetApiV2ListFederationsHeaders() {{
                    xRapidApiKey = "aut";
                }};
            }};

            GetApiV2ListFederationsResponse res = sdk.getApiV2ListFederations(req);

            if (res.getApiV2ListFederations200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->