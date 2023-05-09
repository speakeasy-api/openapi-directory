# PicoChargingHistory

### Available Operations

* [PicoChargingHistoryGet](#picocharginghistoryget) - Gets the last charging history for a pico station

## PicoChargingHistoryGet

Gets the last charging history for a pico station

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
    res, err := s.PicoChargingHistory.PicoChargingHistoryGet(ctx, operations.PicoChargingHistoryGetRequest{
        ID: "0ce187f8-6bc1-473d-a89e-ee9526f8d986",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PicoChargingHistoryData != nil {
        // handle response
    }
}
```
