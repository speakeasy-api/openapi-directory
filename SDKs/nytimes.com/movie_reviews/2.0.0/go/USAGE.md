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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetCriticsResourceTypeJSON(ctx, operations.GetCriticsResourceTypeJSONRequest{
        ResourceType: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCriticsResourceTypeJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->