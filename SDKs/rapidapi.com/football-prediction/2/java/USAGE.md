<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiV2ListFederationsHeaders;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsRequest;
import org.openapis.openapi.models.operations.GetApiV2ListFederationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV2ListFederationsRequest req = new GetApiV2ListFederationsRequest() {{
                headers = new GetApiV2ListFederationsHeaders() {{
                    xRapidApiKey = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
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