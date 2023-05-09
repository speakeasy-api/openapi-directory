# ContentFiltering

### Available Operations

* [GetNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [GetNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [UpdateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network

## GetNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

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
    res, err := s.ContentFiltering.GetNetworkApplianceContentFiltering(ctx, operations.GetNetworkApplianceContentFilteringRequest{
        NetworkID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.ContentFiltering.GetNetworkApplianceContentFilteringCategories(ctx, operations.GetNetworkApplianceContentFilteringCategoriesRequest{
        NetworkID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceContentFilteringCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

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
    res, err := s.ContentFiltering.UpdateNetworkApplianceContentFiltering(ctx, operations.UpdateNetworkApplianceContentFilteringRequest{
        RequestBody: &operations.UpdateNetworkApplianceContentFilteringRequestBody{
            AllowedURLPatterns: []string{
                "exercitationem",
                "recusandae",
            },
            BlockedURLCategories: []string{
                "quo",
                "nemo",
                "minima",
            },
            BlockedURLPatterns: []string{
                "est",
            },
            URLCategoryListSize: operations.UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnumFullList.ToPointer(),
        },
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```
