<!-- Start SDK Example Usage -->
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
        City: "Laruecester",
        License: "quibusdam",
        State: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweather200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->