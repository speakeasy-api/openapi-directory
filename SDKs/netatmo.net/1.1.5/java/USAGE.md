<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DevicelistSecurity;
import org.openapis.openapi.models.operations.DevicelistAppTypeEnum;
import org.openapis.openapi.models.operations.DevicelistQueryParams;
import org.openapis.openapi.models.operations.DevicelistRequest;
import org.openapis.openapi.models.operations.DevicelistResponse;
import org.openapis.openapi.models.shared.SchemeCodeOauth;
import org.openapis.openapi.models.shared.SchemePasswordOauth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicelistRequest req = new DevicelistRequest() {{
                security = new DevicelistSecurity() {{
                    codeOauth = new SchemeCodeOauth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new DevicelistQueryParams() {{
                    appType = "app_station";
                    deviceId = "provident";
                    getFavorites = false;
                }};
            }};            

            DevicelistResponse res = sdk.deprecated.devicelist(req);

            if (res.naDeviceListResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->