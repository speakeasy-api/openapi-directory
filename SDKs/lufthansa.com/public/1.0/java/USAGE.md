<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
import org.openapis.openapi.models.shared.SchemeAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest() {{
                security = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity() {{
                    auth = new SchemeAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams() {{
                    destination = "corrupti";
                    fromDate = "provident";
                    origin = "distinctio";
                    productCode = "ZXB";
                }};
                headers = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders() {{
                    accept = "unde";
                }};
            }};            

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req);

            if (res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->