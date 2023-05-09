# ContentFilteringRules

### Available Operations

* [GetNetworkContentFiltering](#getnetworkcontentfiltering) - Return the content filtering settings for an MX network
* [UpdateNetworkContentFiltering](#updatenetworkcontentfiltering) - Update the content filtering settings for an MX network

## GetNetworkContentFiltering

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
    res, err := s.ContentFilteringRules.GetNetworkContentFiltering(ctx, operations.GetNetworkContentFilteringRequest{
        NetworkID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkContentFiltering

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
    res, err := s.ContentFilteringRules.UpdateNetworkContentFiltering(ctx, operations.UpdateNetworkContentFilteringRequest{
        RequestBody: &operations.UpdateNetworkContentFilteringRequestBody{
            AllowedURLPatterns: []string{
                "dolorum",
            },
            BlockedURLCategories: []string{
                "placeat",
                "velit",
                "eum",
            },
            BlockedURLPatterns: []string{
                "nobis",
                "quas",
            },
            URLCategoryListSize: operations.UpdateNetworkContentFilteringRequestBodyURLCategoryListSizeEnumTopSites.ToPointer(),
        },
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkContentFiltering200ApplicationJSONObject != nil {
        // handle response
    }
}
```
