# AssetsCovarianceMatrix

### Available Operations

* [PostAssetsCovarianceMatrix](#postassetscovariancematrix) - Covariance Matrix
* [PostAssetsCovarianceMatrixEffectiveRank](#postassetscovariancematrixeffectiverank) - Covariance Matrix Effective Rank
* [PostAssetsCovarianceMatrixExponentiallyWeighted](#postassetscovariancematrixexponentiallyweighted) - Exponentially Weighted Covariance Matrix
* [PostAssetsCovarianceMatrixValidation](#postassetscovariancematrixvalidation) - Covariance Matrix Validation

## PostAssetsCovarianceMatrix

Compute the covariance matrix of assets from either:  
* The asset correlation matrix and their volatilities (i.e., standard deviations)
* The asset correlation matrix and their variances
* The asset returns

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


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
    res, err := s.AssetsCovarianceMatrix.PostAssetsCovarianceMatrix(ctx, operations.PostAssetsCovarianceMatrixRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCovarianceMatrix200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCovarianceMatrixEffectiveRank

Compute the effective rank of an asset covariance matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


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
    res, err := s.AssetsCovarianceMatrix.PostAssetsCovarianceMatrixEffectiveRank(ctx, operations.PostAssetsCovarianceMatrixEffectiveRankRequestBody{
        Assets: 118727,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                8804.76,
                4142.63,
            },
            []float64{
                641.47,
                2168.22,
                6924.72,
                5651.89,
            },
            []float64{
                8651.03,
                2653.89,
                5089.69,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCovarianceMatrixEffectiveRank200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCovarianceMatrixExponentiallyWeighted

Compute an exponentially weighted covariance matrix of assets returns.

References
* [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)


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
    res, err := s.AssetsCovarianceMatrix.PostAssetsCovarianceMatrixExponentiallyWeighted(ctx, operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody{
        Assets: []PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets{
            operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets{
                AssetReturns: []float64{
                    939.4,
                    9211.58,
                    5759.47,
                    831.12,
                },
            },
            operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets{
                AssetReturns: []float64{
                    2777.18,
                    3185.69,
                    93.56,
                    6674.11,
                },
            },
            operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets{
                AssetReturns: []float64{
                    1317.97,
                    6471.74,
                    7163.27,
                    8413.86,
                },
            },
        },
        DecayFactor: sdk.Float64(2894.06),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCovarianceMatrixValidation

Validate whether a matrix is a covariance matrix.

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


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
    res, err := s.AssetsCovarianceMatrix.PostAssetsCovarianceMatrixValidation(ctx, operations.PostAssetsCovarianceMatrixValidationRequestBody{
        Assets: 264730,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                5865.13,
                5528.22,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCovarianceMatrixValidation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
