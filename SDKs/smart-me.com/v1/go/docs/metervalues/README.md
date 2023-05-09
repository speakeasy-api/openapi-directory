# MeterValues

### Available Operations

* [MeterValuesGet](#metervaluesget) - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

## MeterValuesGet

Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

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
    res, err := s.MeterValues.MeterValuesGet(ctx, operations.MeterValuesGetRequest{
        Date: types.MustTimeFromString("2022-04-27T14:41:34.966Z"),
        ID: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceInPast != nil {
        // handle response
    }
}
```
