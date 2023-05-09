# DeactivationReason

### Available Operations

* [GetDeactivationReasonList](#getdeactivationreasonlist) - List all deactivation reasons

## GetDeactivationReasonList

List all deactivation reasons

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
    res, err := s.DeactivationReason.GetDeactivationReasonList(ctx, operations.GetDeactivationReasonListRequest{
        WorkgroupID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
