# AssetsSkewness

### Available Operations

* [PostAssetsSkewness](#postassetsskewness) - Skewness

## PostAssetsSkewness

Compute the skewness of one or several asset(s), from the asset returns.

References
* [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)


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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssetsSkewness.PostAssetsSkewness(ctx, operations.PostAssetsSkewnessRequestBody{
        Assets: []PostAssetsSkewnessRequestBodyAssets{
            operations.PostAssetsSkewnessRequestBodyAssets{
                AssetReturns: []float64{
                    3982.21,
                    2123.9,
                    2098.43,
                },
            },
            operations.PostAssetsSkewnessRequestBodyAssets{
                AssetReturns: []float64{
                    1861.93,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsSkewness200ApplicationJSONObject != nil {
        // handle response
    }
}
```
