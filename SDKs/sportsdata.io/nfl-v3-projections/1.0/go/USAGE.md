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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.DfsSlateOwnershipProjectionsBySlateid(ctx, operations.DfsSlateOwnershipProjectionsBySlateidRequest{
        Format: operations.DfsSlateOwnershipProjectionsBySlateidFormatEnumJSON,
        SlateID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlateWithOwnershipProjection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->