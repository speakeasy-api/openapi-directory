# Categories

### Available Operations

* [GetNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network

## GetNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.GetNetworkApplianceContentFilteringCategories(ctx, operations.GetNetworkApplianceContentFilteringCategoriesRequest{
        NetworkID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFilteringCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```
