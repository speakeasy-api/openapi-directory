# AssetsKurtosis

### Available Operations

* [PostAssetsKurtosis](#postassetskurtosis) - Kurtosis

## PostAssetsKurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.

References
* [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)


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
    res, err := s.AssetsKurtosis.PostAssetsKurtosis(ctx, operations.PostAssetsKurtosisRequestBody{
        Assets: []PostAssetsKurtosisRequestBodyAssets{
            operations.PostAssetsKurtosisRequestBodyAssets{
                AssetReturns: []float64{
                    8289.4,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsKurtosis200ApplicationJSONObject != nil {
        // handle response
    }
}
```
