<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest() {{
                security = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity() {{
                    auth = new SchemeAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams() {{
                    destination = "sit";
                    fromDate = "voluptas";
                    origin = "culpa";
                    productCode = "FUN";
                }};
                headers = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders() {{
                    accept = "consequuntur";
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