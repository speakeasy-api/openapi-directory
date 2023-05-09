# AssetsVariance

### Available Operations

* [PostAssetsVariance](#postassetsvariance) - Variance

## PostAssetsVariance

Compute the variance of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset volatility(ies)

References
* [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        


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
    res, err := s.AssetsVariance.PostAssetsVariance(ctx, operations.PostAssetsVarianceRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsVariance200ApplicationJSONObject != nil {
        // handle response
    }
}
```
