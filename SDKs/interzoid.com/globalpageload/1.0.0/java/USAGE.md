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

            GlobalpageloadRequest req = new GlobalpageloadRequest() {{
                queryParams = new GlobalpageloadQueryParams() {{
                    license = "sit";
                    origin = "voluptas";
                    url = "culpa";
                }};
            }};

            GlobalpageloadResponse res = sdk.pageLoadPerformanceTime.globalpageload(req);

            if (res.globalpageload200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->