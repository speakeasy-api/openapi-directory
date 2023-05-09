<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest("corrupti", "provident", "distinctio", "quibusdam", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum.YNB);            

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req, new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity("nulla") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->