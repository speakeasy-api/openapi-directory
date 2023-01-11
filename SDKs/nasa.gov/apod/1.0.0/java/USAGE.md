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

            GetApodRequest req = new GetApodRequest() {{
                security = new GetApodSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetApodQueryParams() {{
                    date = "sit";
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