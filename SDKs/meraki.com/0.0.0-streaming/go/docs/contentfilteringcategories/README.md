# ContentFilteringCategories

### Available Operations

* [GetNetworkContentFilteringCategories](#getnetworkcontentfilteringcategories) - List all available content filtering categories for an MX network

## GetNetworkContentFilteringCategories

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
    res, err := s.ContentFilteringCategories.GetNetworkContentFilteringCategories(ctx, operations.GetNetworkContentFilteringCategoriesRequest{
        NetworkID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkContentFilteringCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```
