# ValuesInPastMultiple

### Available Operations

* [ValuesInPastMultipleGet](#valuesinpastmultipleget) - Gets multiple values of a device. This call needs a smart-me professional licence.

## ValuesInPastMultipleGet

Gets multiple values of a device. This call needs a smart-me professional licence.

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
    res, err := s.ValuesInPastMultiple.ValuesInPastMultipleGet(ctx, operations.ValuesInPastMultipleGetRequest{
        EndDate: types.MustTimeFromString("2022-02-10T15:43:41.658Z"),
        ID: "cb573409-e3eb-41e5-a2b1-2eb07f116db9",
        Interval: 578210,
        StartDate: types.MustTimeFromString("2022-09-11T04:05:16.062Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValuesData != nil {
        // handle response
    }
}
```
