<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1EmailFreeFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailFreeRequest;
import org.openapis.openapi.models.operations.GetV1EmailFreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailFreeRequest req = new GetV1EmailFreeRequest("corrupti", "provident") {{
                format = GetV1EmailFreeFormatEnum.XML;
            }};            

            GetV1EmailFreeResponse res = sdk.getV1EmailFree(req);

            if (res.getV1EmailFree200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->