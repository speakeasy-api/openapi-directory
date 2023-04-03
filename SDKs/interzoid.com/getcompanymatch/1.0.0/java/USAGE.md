<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcompanymatchRequest;
import org.openapis.openapi.models.operations.GetcompanymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcompanymatchRequest req = new GetcompanymatchRequest() {{
                company = "Medhurst - Rau";
                license = "quibusdam";
            }}            

            GetcompanymatchResponse res = sdk.companyNameSimilarityKey.getcompanymatch(req);

            if (res.getcompanymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->