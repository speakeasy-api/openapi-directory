<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest() {{
                accept = "corrupti";
                destination = "provident";
                fromDate = "distinctio";
                origin = "quibusdam";
                productCode = "YNB";
            }}            

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req, new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity() {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->