# AssetsCorrelationMatrix

### Available Operations

* [PostAssetsCorrelationMatrix](#postassetscorrelationmatrix) - Correlation Matrix
* [PostAssetsCorrelationMatrixBounds](#postassetscorrelationmatrixbounds) - Correlation Matrix Bounds
* [PostAssetsCorrelationMatrixDenoised](#postassetscorrelationmatrixdenoised) - Denoised Correlation Matrix
* [PostAssetsCorrelationMatrixDistance](#postassetscorrelationmatrixdistance) - Correlation Matrix Distance
* [PostAssetsCorrelationMatrixEffectiveRank](#postassetscorrelationmatrixeffectiverank) - Correlation Matrix Effective Rank
* [PostAssetsCorrelationMatrixInformativeness](#postassetscorrelationmatrixinformativeness) - Correlation Matrix Informativeness
* [PostAssetsCorrelationMatrixNearest](#postassetscorrelationmatrixnearest) - Nearest Correlation Matrix
* [PostAssetsCorrelationMatrixRandom](#postassetscorrelationmatrixrandom) - Random Correlation Matrix
* [PostAssetsCorrelationMatrixShrinkage](#postassetscorrelationmatrixshrinkage) - Correlation Matrix Shrinkage
* [PostAssetsCorrelationMatrixTheoryImplied](#postassetscorrelationmatrixtheoryimplied) - Theory-Implied Correlation Matrix
* [PostAssetsCorrelationMatrixValidation](#postassetscorrelationmatrixvalidation) - Correlation Matrix Validation

## PostAssetsCorrelationMatrix

Compute the Pearson asset correlation matrix from either:  
* The asset returns
* The asset covariance matrix

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrix(ctx, operations.PostAssetsCorrelationMatrixRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrix200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixBounds

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
 
 References
 * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixBounds(ctx, operations.PostAssetsCorrelationMatrixBoundsRequestBody{
        Assets: 105907,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                2645.55,
                1863.32,
            },
            []float64{
                7369.18,
                4561.5,
                2165.5,
                5684.34,
            },
        },
        AssetsGroup: []int64{
            18789,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixBounds200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixDenoised

Compute a denoised asset correlation matrix, using one of the following methods:
 * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
 
 References
 * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixDenoised(ctx, operations.PostAssetsCorrelationMatrixDenoisedRequestBody{
        Assets: 324141,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                6120.96,
            },
            []float64{
                6169.34,
            },
            []float64{
                9437.49,
                9025.99,
            },
        },
        AssetsCorrelationMatrixAspectRatio: 6818.2,
        DenoisingMethod: operations.PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnumEigenvaluesClipping.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixDenoised200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixDistance

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the second reference

 References
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixDistance(ctx, operations.PostAssetsCorrelationMatrixDistanceRequestBody{
        Assets: 449950,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                4370.32,
                9023.49,
                6976.31,
            },
            []float64{
                602.25,
            },
        },
        DistanceMetric: operations.PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnumBures.ToPointer(),
        ReferenceCorrelationMatrix: [][]float64{
            []float64{
                6706.38,
                1709.09,
                2103.82,
            },
            []float64{
                1289.26,
                7506.86,
            },
            []float64{
                6078.31,
                3637.11,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixDistance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixEffectiveRank

Compute the effective rank of an asset correlation matrix.

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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixEffectiveRank(ctx, operations.PostAssetsCorrelationMatrixEffectiveRankRequestBody{
        Assets: 325047,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                4386.01,
            },
            []float64{
                9883.74,
                9589.5,
                1020.44,
            },
            []float64{
                2088.76,
                6350.59,
                1613.09,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixEffectiveRank200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixInformativeness

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the third reference

 References
 * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixInformativeness(ctx, operations.PostAssetsCorrelationMatrixInformativenessRequestBody{
        Assets: 995300,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                2532.91,
                4143.69,
                4663.11,
            },
            []float64{
                2444.25,
                6235.1,
            },
            []float64{
                3380.07,
            },
        },
        DistanceMetric: operations.PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnumEuclidean.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixInformativeness200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixNearest

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.

References
* [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixNearest(ctx, operations.PostAssetsCorrelationMatrixNearestRequestBody{
        Assets: 674752,
        AssetsApproximateCorrelationMatrix: [][]float64{
            []float64{
                1381.83,
                7783.46,
            },
            []float64{
                9495.72,
            },
            []float64{
                6625.27,
                8209.94,
            },
        },
        AssetsFixedCorrelations: [][]int64{
            []int64{
                622846,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixNearest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixRandom

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.

References
* [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixRandom(ctx, operations.PostAssetsCorrelationMatrixRandomRequestBody{
        Assets: 837945,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixRandom200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixShrinkage

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:  
 * An equicorrelation matrix made of 1
 * An equicorrelation matrix made of 0
 * An equicorrelation matrix made of -1/(n-1), with n the number of assets
 * A provided correlation matrix
 
 References
 * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixShrinkage(ctx, operations.PostAssetsCorrelationMatrixShrinkageRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixShrinkage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixTheoryImplied

Compute the theory-implied asset correlation matrix associated with:
* A hierarchical classification of a universe of assets
* An asset correlation matrix

References
* [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixTheoryImplied(ctx, operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBody{
        Assets: []PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets{
            operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets{
                AssetHierarchicalClassification: []PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                },
            },
            operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets{
                AssetHierarchicalClassification: []PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                },
            },
            operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets{
                AssetHierarchicalClassification: []PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                    operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssetsAssetHierarchicalClassification{},
                },
            },
        },
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                5096.24,
                9767.62,
            },
            []float64{
                6048.46,
            },
            []float64{
                7392.64,
                199.87,
            },
            []float64{
                4417.11,
            },
        },
        ClusteringMethod: operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnumAverageLinkage.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixTheoryImplied200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsCorrelationMatrixValidation

Validate whether a matrix is an asset correlation matrix.

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


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
    res, err := s.AssetsCorrelationMatrix.PostAssetsCorrelationMatrixValidation(ctx, operations.PostAssetsCorrelationMatrixValidationRequestBody{
        Assets: 979587,
        AssetsCorrelationMatrix: [][]float64{
            []float64{
                2961.4,
                4808.94,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsCorrelationMatrixValidation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
