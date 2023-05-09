<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicelistAppTypeEnum;
import org.openapis.openapi.models.operations.DevicelistRequest;
import org.openapis.openapi.models.operations.DevicelistResponse;
import org.openapis.openapi.models.operations.DevicelistSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicelistRequest req = new DevicelistRequest() {{
                appType = DevicelistAppTypeEnum.APP_STATION;
                deviceId = "provident";
                getFavorites = false;
            }};            

            DevicelistResponse res = sdk.deprecated.devicelist(req, new DevicelistSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naDeviceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->