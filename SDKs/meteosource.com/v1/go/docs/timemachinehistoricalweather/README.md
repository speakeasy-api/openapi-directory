# TimeMachineHistoricalWeather

### Available Operations

* [TimeMachineTimeMachineGet](#timemachinetimemachineget) - Returns weather data for a single location and given day in the past

## TimeMachineTimeMachineGet

## Actual weather data for a single location and day in the past

The output contains actual weather data for each day up to 20 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.

### Location specification
The location of the weather data must be specified. There are two ways to do this:
1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).

*Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TimeMachineHistoricalWeather.TimeMachineTimeMachineGet(ctx, operations.TimeMachineTimeMachineGetRequest{
        Date: types.MustDateFromString("2020-06-29"),
        Key: sdk.String("ab"),
        Lat: sdk.String("quis"),
        Lon: sdk.String("veritatis"),
        PlaceID: sdk.String("deserunt"),
        Timezone: sdk.String("perferendis"),
        Units: operations.TimeMachineTimeMachineGetUnitsUnitsEnumMetric.ToPointer(),
    }, operations.TimeMachineTimeMachineGetSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimeMachineTimeMachine != nil {
        // handle response
    }
}
```
