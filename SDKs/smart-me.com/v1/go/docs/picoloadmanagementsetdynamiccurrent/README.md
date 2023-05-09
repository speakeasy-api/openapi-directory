# PicoLoadmanagementSetDynamicCurrent

### Available Operations

* [PicoLoadmanagementSetDynamicCurrentPost](#picoloadmanagementsetdynamiccurrentpost) - Sets the dynamic current of a load management group or a single station.

## PicoLoadmanagementSetDynamicCurrentPost

Sets the dynamic current of a load management group or a single station.

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
    res, err := s.PicoLoadmanagementSetDynamicCurrent.PicoLoadmanagementSetDynamicCurrentPost(ctx, operations.PicoLoadmanagementSetDynamicCurrentPostRequest{
        Current: 362189,
        Serial: 597303,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
