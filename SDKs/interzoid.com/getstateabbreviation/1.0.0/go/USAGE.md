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
    res, err := s.StateDataStandardization.Getstateabbreviation(ctx, operations.GetstateabbreviationRequest{
        License: "corrupti",
        State: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getstateabbreviation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->