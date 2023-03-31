<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetareacodeQueryParams;
import org.openapis.openapi.models.operations.GetareacodeRequest;
import org.openapis.openapi.models.operations.GetareacodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetareacodeRequest req = new GetareacodeRequest() {{
                queryParams = new GetareacodeQueryParams() {{
                    areacode = "corrupti";
                    license = "provident";
                }};
            }};            

            GetareacodeResponse res = sdk.areaCodeInformation.getareacode(req);

            if (res.getareacode200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->