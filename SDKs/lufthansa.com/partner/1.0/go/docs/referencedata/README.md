# ReferenceData

### Available Operations

* [SeatDetails](#seatdetails) - Seat Details

## SeatDetails

A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.

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
    res, err := s.ReferenceData.SeatDetails(ctx, operations.SeatDetailsRequest{
        Accept: "quasi",
        AircraftCode: "error",
        CabinCode: "temporibus",
        Lang: sdk.String("laborum"),
    }, operations.SeatDetailsSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeatDetails200ApplicationJSONString != nil {
        // handle response
    }
}
```
