<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1EmailDisposableFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailDisposableRequest;
import org.openapis.openapi.models.operations.GetV1EmailDisposableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailDisposableRequest req = new GetV1EmailDisposableRequest("corrupti", "provident") {{
                format = GetV1EmailDisposableFormatEnum.XML;
            }};            

            GetV1EmailDisposableResponse res = sdk.getV1EmailDisposable(req);

            if (res.getV1EmailDisposable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->