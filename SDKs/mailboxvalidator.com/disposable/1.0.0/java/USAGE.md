<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetV1EmailDisposableFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailDisposableQueryParams;
import org.openapis.openapi.models.operations.GetV1EmailDisposableRequest;
import org.openapis.openapi.models.operations.GetV1EmailDisposableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailDisposableRequest req = new GetV1EmailDisposableRequest() {{
                queryParams = new GetV1EmailDisposableQueryParams() {{
                    email = "Larue_Rau85@yahoo.com";
                    format = "xml";
                    key = "illum";
                }};
            }};            

            GetV1EmailDisposableResponse res = sdk.getV1EmailDisposable(req);

            if (res.getV1EmailDisposable200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->