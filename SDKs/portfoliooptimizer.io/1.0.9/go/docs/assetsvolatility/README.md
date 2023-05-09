# AssetsVolatility

### Available Operations

* [PostAssetsVolatility](#postassetsvolatility) - Volatility

## PostAssetsVolatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset variance(s)

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)


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
    res, err := s.AssetsVolatility.PostAssetsVolatility(ctx, operations.PostAssetsVolatilityRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsVolatility200ApplicationJSONObject != nil {
        // handle response
    }
}
```
