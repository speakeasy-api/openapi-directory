# WeatherByCityAndState

### Available Operations

* [Getweather](#getweather) - Gets current weather information for a US city and state

## Getweather

Use city and state to retrieve current US weather information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.WeatherByCityAndState.Getweather(ctx, operations.GetweatherRequest{
        City: "Meridian",
        License: "illum",
        State: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweather200ApplicationJSONObject != nil {
        // handle response
    }
}
```
