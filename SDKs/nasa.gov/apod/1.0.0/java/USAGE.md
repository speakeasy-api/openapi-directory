<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApodRequest;
import org.openapis.openapi.models.operations.GetApodResponse;
import org.openapis.openapi.models.operations.GetApodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApodRequest req = new GetApodRequest() {{
                date = "corrupti";
                hd = false;
            }};            

            GetApodResponse res = sdk.requestTag.getApod(req, new GetApodSecurity("provident") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApod200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->