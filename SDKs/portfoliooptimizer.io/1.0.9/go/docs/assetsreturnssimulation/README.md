# AssetsReturnsSimulation

### Available Operations

* [PostAssetsReturnsSimulationBootstrap](#postassetsreturnssimulationbootstrap) - Bootstrap

## PostAssetsReturnsSimulationBootstrap

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.

References
* [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)
* [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)
* [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)


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
    res, err := s.AssetsReturnsSimulation.PostAssetsReturnsSimulationBootstrap(ctx, operations.PostAssetsReturnsSimulationBootstrapRequestBody{
        Assets: []PostAssetsReturnsSimulationBootstrapRequestBodyAssets{
            operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets{
                AssetReturns: []float64{
                    6082.53,
                    7044.15,
                    5966.56,
                    318.38,
                },
            },
            operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets{
                AssetReturns: []float64{
                    1646.94,
                    5000.26,
                    6214.79,
                    503.7,
                },
            },
            operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets{
                AssetReturns: []float64{
                    6990.98,
                    2378.93,
                    9923.97,
                },
            },
            operations.PostAssetsReturnsSimulationBootstrapRequestBodyAssets{
                AssetReturns: []float64{
                    2672.62,
                    6139.66,
                    6790.91,
                    5356.33,
                },
            },
        },
        BootstrapAverageBlockLength: sdk.Float64(8642.82),
        BootstrapBlockLength: sdk.Int64(589910),
        BootstrapMethod: operations.PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnumStationaryBlock.ToPointer(),
        Simulations: sdk.Int64(730122),
        SimulationsLength: sdk.Int64(964490),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsSimulationBootstrap200ApplicationJSONObject != nil {
        // handle response
    }
}
```
