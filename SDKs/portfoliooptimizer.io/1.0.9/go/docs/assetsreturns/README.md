# AssetsReturns

### Available Operations

* [PostAssetsReturns](#postassetsreturns) - Arithmetic Returns
* [PostAssetsReturnsAverage](#postassetsreturnsaverage) - Arithmetic Average Return
* [PostAssetsReturnsLogarithmic](#postassetsreturnslogarithmic) - Logarithmic Returns
* [PostAssetsReturnsTurbulencePartitioned](#postassetsreturnsturbulencepartitioned) - Turbulence-partitioned Asset Returns

## PostAssetsReturns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)


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
    res, err := s.AssetsReturns.PostAssetsReturns(ctx, operations.PostAssetsReturnsRequestBody{
        Assets: []PostAssetsReturnsRequestBodyAssets{
            operations.PostAssetsReturnsRequestBodyAssets{
                AssetPrices: []float64{
                    1399.72,
                    4071.83,
                    332.22,
                },
            },
            operations.PostAssetsReturnsRequestBodyAssets{
                AssetPrices: []float64{
                    9825.75,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsReturnsAverage

Compute the arithmetic average of the return(s) of one or several asset(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


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
    res, err := s.AssetsReturns.PostAssetsReturnsAverage(ctx, operations.PostAssetsReturnsAverageRequestBody{
        Assets: []PostAssetsReturnsAverageRequestBodyAssets{
            operations.PostAssetsReturnsAverageRequestBodyAssets{
                AssetReturns: []float64{
                    4535.43,
                    4200.75,
                },
            },
            operations.PostAssetsReturnsAverageRequestBodyAssets{
                AssetReturns: []float64{
                    505.88,
                    8663.83,
                    3654.96,
                },
            },
            operations.PostAssetsReturnsAverageRequestBodyAssets{
                AssetReturns: []float64{
                    166.27,
                    8558.04,
                    2307.42,
                    117.14,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsAverage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsReturnsLogarithmic

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return)


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
    res, err := s.AssetsReturns.PostAssetsReturnsLogarithmic(ctx, operations.PostAssetsReturnsLogarithmicRequestBody{
        Assets: []PostAssetsReturnsLogarithmicRequestBodyAssets{
            operations.PostAssetsReturnsLogarithmicRequestBodyAssets{
                AssetPrices: []float64{
                    9441.24,
                    7299.91,
                },
            },
            operations.PostAssetsReturnsLogarithmicRequestBodyAssets{
                AssetPrices: []float64{
                    1716.29,
                    3394.04,
                    5210.37,
                },
            },
            operations.PostAssetsReturnsLogarithmicRequestBodyAssets{
                AssetPrices: []float64{
                    543.38,
                    3389.85,
                },
            },
            operations.PostAssetsReturnsLogarithmicRequestBodyAssets{
                AssetPrices: []float64{
                    1794.9,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsLogarithmic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsReturnsTurbulencePartitioned

Partition asset returns into several subsets based on their turbulence index.

References
* [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169)


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
    res, err := s.AssetsReturns.PostAssetsReturnsTurbulencePartitioned(ctx, operations.PostAssetsReturnsTurbulencePartitionedRequestBody{
        Assets: []PostAssetsReturnsTurbulencePartitionedRequestBodyAssets{
            operations.PostAssetsReturnsTurbulencePartitionedRequestBodyAssets{
                AssetReturns: []float64{
                    7936.98,
                },
            },
        },
        TurbulenceThresholds: []float64{
            2239.24,
            8745.73,
        },
        TurbulenceThresholdsConversionMethod: operations.PostAssetsReturnsTurbulencePartitionedRequestBodyTurbulenceThresholdsConversionMethodEnumEmpiricalQuantileDistribution.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsTurbulencePartitioned200ApplicationJSONObject != nil {
        // handle response
    }
}
```
