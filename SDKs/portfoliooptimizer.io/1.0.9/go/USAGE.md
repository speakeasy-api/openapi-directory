<!-- Start SDK Example Usage -->
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
        Assets: 548814,
        AssetsCovarianceMatrix: [][]float64{
            []float64{
                8442.66,
                6027.63,
                8579.46,
            },
            []float64{
                8472.52,
                4236.55,
                6235.64,
            },
            []float64{
                3843.82,
                4375.87,
                2975.34,
            },
        },
        AssetsCovarianceMatrixEigenvectors: &operations.PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors{
            EigenvectorsRetained: sdk.Int64(891773),
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
<!-- End SDK Example Usage -->