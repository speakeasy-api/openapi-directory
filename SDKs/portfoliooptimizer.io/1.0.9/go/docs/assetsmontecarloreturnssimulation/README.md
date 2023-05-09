# AssetsMonteCarloReturnsSimulation

### Available Operations

* [PostAssetsReturnsSimulationMonteCarloCornishFisher](#postassetsreturnssimulationmontecarlocornishfisher) - Cornish-Fisher Distribution
* [PostAssetsReturnsSimulationMonteCarloCornishFisherCorrected](#postassetsreturnssimulationmontecarlocornishfishercorrected) - Corrected Cornish-Fisher Distribution
* [PostAssetsReturnsSimulationMonteCarloGaussian](#postassetsreturnssimulationmontecarlogaussian) - Gaussian Distribution

## PostAssetsReturnsSimulationMonteCarloCornishFisher

Simulate the return(s) of one asset for one or several time period(s) using a Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–Fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


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
    res, err := s.AssetsMonteCarloReturnsSimulation.PostAssetsReturnsSimulationMonteCarloCornishFisher(ctx, operations.PostAssetsReturnsSimulationMonteCarloCornishFisherRequestBody{
        AssetAverageReturnParameter: 3698.08,
        AssetKurtosisParameter: 46.95,
        AssetSkewnessParameter: 1464.41,
        AssetVolatilityParameter: 6778.17,
        Simulations: sdk.Int64(569618),
        SimulationsLength: sdk.Int64(270008),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsSimulationMonteCarloCornishFisher200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsReturnsSimulationMonteCarloCornishFisherCorrected

Simulate the return(s) of one asset for one or several time period(s) using a corrected Cornish-Fisher distribution.

References
* [Maillard, Didier, A User’s Guide to the Cornish Fisher Expansion](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1997178)
* [Lamb, John D., Maura E. Monville, and Kai-Hong Tee. Making Cornish–fisher Fit for Risk Measurement, Journal of Risk, Volume 21, Number 5, p. 53-81](http://doi.org/10.21314/JOR.2019.408)


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
    res, err := s.AssetsMonteCarloReturnsSimulation.PostAssetsReturnsSimulationMonteCarloCornishFisherCorrected(ctx, operations.PostAssetsReturnsSimulationMonteCarloCornishFisherCorrectedRequestBody{
        AssetAverageReturn: 7037.37,
        AssetKurtosis: 7351.94,
        AssetSkewness: 2884.76,
        AssetVolatility: 9621.89,
        Simulations: sdk.Int64(433288),
        SimulationsLength: sdk.Int64(248753),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsSimulationMonteCarloCornishFisherCorrected200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAssetsReturnsSimulationMonteCarloGaussian

Simulate the return(s) of one asset for one or several time period(s) using a Gaussian distribution.

References
* [Wikipedia, Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution)


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
    res, err := s.AssetsMonteCarloReturnsSimulation.PostAssetsReturnsSimulationMonteCarloGaussian(ctx, operations.PostAssetsReturnsSimulationMonteCarloGaussianRequestBody{
        AssetAverageReturn: 7561.07,
        AssetVolatility: 5761.57,
        Simulations: sdk.Int64(396098),
        SimulationsLength: sdk.Int64(592042),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsReturnsSimulationMonteCarloGaussian200ApplicationJSONObject != nil {
        // handle response
    }
}
```
