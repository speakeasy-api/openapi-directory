# cargo

### Available Operations

* [cargoGetRouteFromDateProductCodeByOriginAndDestinationGet](#cargogetroutefromdateproductcodebyoriginanddestinationget) - Retrieve all flights
* [cargoShipmentTrackingByAWBPrefixAndAWBNumberGet](#cargoshipmenttrackingbyawbprefixandawbnumberget) - Shipment Tracking

## cargoGetRouteFromDateProductCodeByOriginAndDestinationGet

Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.

### Example Usage

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

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest("corrupti", "illum", "vel", "error", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum.YNB);            

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req, new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity("suscipit") {{
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

## cargoShipmentTrackingByAWBPrefixAndAWBNumberGet

With this tracking service you can easily retrieve your shipment or flight status information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest;
import org.openapis.openapi.models.operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetResponse;
import org.openapis.openapi.models.operations.CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest req = new CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest("iure", "magnam", "debitis");            

            CargoShipmentTrackingByAWBPrefixAndAWBNumberGetResponse res = sdk.cargo.cargoShipmentTrackingByAWBPrefixAndAWBNumberGet(req, new CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity("ipsa") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
