# ValuesInPast

### Available Operations

* [ValuesInPastGet](#valuesinpastget) - Gets all (last) values of a device
            The first Value found before the given Date is returned.

## ValuesInPastGet

Gets the Values for a device at a given Date. The first Value found before the given Date is returned.

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
    res, err := s.ValuesInPast.ValuesInPastGet(ctx, operations.ValuesInPastGetRequest{
        Date: types.MustTimeFromString("2022-03-22T14:23:17.198Z"),
        ID: "3ca5acfb-e2fd-4570-b577-929177deac64",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValuesData != nil {
        // handle response
    }
}
```
