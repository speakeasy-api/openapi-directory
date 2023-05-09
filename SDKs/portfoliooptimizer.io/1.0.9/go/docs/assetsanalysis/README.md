# AssetsAnalysis

### Available Operations

* [PostAssetsAnalysisAbsorptionRatio](#postassetsanalysisabsorptionratio) - Absorption Ratio
* [PostAssetsAnalysisTurbulenceIndex](#postassetsanalysisturbulenceindex) - Turbulence Index

## PostAssetsAnalysisAbsorptionRatio

Compute the absorption ratio associated to a universe of assets.

References
* [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)


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
    res, err := s.AssetsAnalysis.PostAssetsAnalysisAbsorptionRatio(ctx, operations.PostAssetsAnalysisAbsorptionRatioRequestBody{
        Assets: 56713,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                3834.41,
                4776.65,
            },
            []float64{
                8121.69,
                5288.95,
                4799.77,
                5680.45,
            },
            []float64{
                9255.97,
                8360.79,
            },
            []float64{
                3373.96,
            },
        },
        AssetsCovarianceMatrixEigenvectors: &operations.PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors{
            EigenvectorsRetained: sdk.Int64(87129),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsAnalysisAbsorptionRatio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsAnalysisTurbulenceIndex

Compute the turbulence index associated to a universe of assets.

References
* [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
* [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)


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
    res, err := s.AssetsAnalysis.PostAssetsAnalysisTurbulenceIndex(ctx, operations.PostAssetsAnalysisTurbulenceIndexRequestBody{
        Assets: 648172,
        AssetsAverageReturns: []float64{
            3682.41,
        },
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                7781.57,
                1403.5,
                8700.13,
                8700.88,
            },
            []float64{
                4736.08,
                7991.59,
                8009.11,
                4614.79,
            },
            []float64{
                7805.29,
                6788.8,
                1182.74,
            },
            []float64{
                6399.21,
                5820.2,
                1433.53,
            },
        },
        AssetsReturns: []float64{
            9446.69,
            7586.16,
            5218.48,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsAnalysisTurbulenceIndex200ApplicationJSONObject != nil {
        // handle response
    }
}
```
