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
            APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.GetMappingValuesKey(ctx, operations.GetMappingValuesKeyRequest{
        Key: operations.GetMappingValuesKeyKeyEnumCurrency,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMappingValuesKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->