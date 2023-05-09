# timeMachineHistoricalWeather

### Available Operations

* [timeMachineTimeMachineGet](#timemachinetimemachineget) - Returns weather data for a single location and given day in the past

## timeMachineTimeMachineGet

## Actual weather data for a single location and day in the past

The output contains actual weather data for each day up to 20 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.

### Location specification
The location of the weather data must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TimeMachineTimeMachineGetRequest;
import org.openapis.openapi.models.operations.TimeMachineTimeMachineGetResponse;
import org.openapis.openapi.models.operations.TimeMachineTimeMachineGetSecurity;
import org.openapis.openapi.models.operations.TimeMachineTimeMachineGetUnitsUnitsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TimeMachineTimeMachineGetRequest req = new TimeMachineTimeMachineGetRequest(LocalDate.parse("2022-08-19")) {{
                key = "repellendus";
                lat = "sapiente";
                lon = "quo";
                placeId = "odit";
                timezone = "at";
                units = TimeMachineTimeMachineGetUnitsUnitsEnum.CA;
            }};            

            TimeMachineTimeMachineGetResponse res = sdk.timeMachineHistoricalWeather.timeMachineTimeMachineGet(req, new TimeMachineTimeMachineGetSecurity("maiores") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.timeMachineTimeMachine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
