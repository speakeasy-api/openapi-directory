# WeatherByZipCode

### Available Operations

* [Getweatherzipcode](#getweatherzipcode) - Gets current weather information for a US zip code

## Getweatherzipcode

Use a US zip code to retrieve current weather information

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
    res, err := s.WeatherByZipCode.Getweatherzipcode(ctx, operations.GetweatherzipcodeRequest{
        License: "distinctio",
        Zip: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweatherzipcode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
