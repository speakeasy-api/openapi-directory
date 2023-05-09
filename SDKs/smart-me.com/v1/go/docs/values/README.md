# Values

### Available Operations

* [ValuesGet](#valuesget) - Gets all (last) values of a device

## ValuesGet

Gets all (last) values of a device

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
    res, err := s.Values.ValuesGet(ctx, operations.ValuesGetRequest{
        ID: "43da7ce5-2b89-45c5-b7c6-454efb0b3489",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValuesData != nil {
        // handle response
    }
}
```
