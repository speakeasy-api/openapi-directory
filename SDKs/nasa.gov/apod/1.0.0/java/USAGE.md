<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApodSecurity;
import org.openapis.openapi.models.operations.GetApodQueryParams;
import org.openapis.openapi.models.operations.GetApodRequest;
import org.openapis.openapi.models.operations.GetApodResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApodRequest req = new GetApodRequest() {{
                security = new GetApodSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetApodQueryParams() {{
                    date = "corrupti";
                    hd = false;
                }};
            }};            

            GetApodResponse res = sdk.requestTag.getApod(req);

            if (res.getApod200ApplicationJSONAnies.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->