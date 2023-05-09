# PicoCharging

### Available Operations

* [PicoChargingGet](#picochargingget) - Gets the active charging data of a pico station

## PicoChargingGet

Gets the active charging data of a pico station

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
    res, err := s.PicoCharging.PicoChargingGet(ctx, operations.PicoChargingGetRequest{
        ID: "3b1194b8-abf6-403a-b9f9-dfe0ab7da8a5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PicoChargingData != nil {
        // handle response
    }
}
```
