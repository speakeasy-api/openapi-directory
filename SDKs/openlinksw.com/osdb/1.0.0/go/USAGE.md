<!-- Start SDK Example Usage -->
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
    res, err := s.Osdb.ActionHelp(ctx, operations.ActionHelpRequest{
        ActionID: "corrupti",
        ServiceID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionHelpResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->