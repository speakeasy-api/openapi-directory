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
    res, err := s.WeatherByZipCode.Getweatherzipcode(ctx, operations.GetweatherzipcodeRequest{
        License: "corrupti",
        Zip: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweatherzipcode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->