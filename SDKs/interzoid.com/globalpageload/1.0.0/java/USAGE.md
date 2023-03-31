<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GlobalpageloadQueryParams;
import org.openapis.openapi.models.operations.GlobalpageloadRequest;
import org.openapis.openapi.models.operations.GlobalpageloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GlobalpageloadRequest req = new GlobalpageloadRequest() {{
                queryParams = new GlobalpageloadQueryParams() {{
                    license = "corrupti";
                    origin = "provident";
                    url = "distinctio";
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