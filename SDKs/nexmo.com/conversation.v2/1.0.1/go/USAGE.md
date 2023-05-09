<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetUsers(ctx, operations.GetUsersRequest{
        Cursor: sdk.String("corrupti"),
        Order: shared.OrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->