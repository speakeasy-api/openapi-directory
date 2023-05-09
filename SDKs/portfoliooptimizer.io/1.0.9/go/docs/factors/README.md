# Factors

### Available Operations

* [PostFactorsResidualization](#postfactorsresidualization) - Residualization

## PostFactorsResidualization

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.

References
* [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
* [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)


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
    res, err := s.Factors.PostFactorsResidualization(ctx, operations.PostFactorsResidualizationRequestBody{
        Factors: []PostFactorsResidualizationRequestBodyFactors{
            operations.PostFactorsResidualizationRequestBodyFactors{
                FactorReturns: []float64{
                    5695.74,
                    7395.51,
                    4521.09,
                    4904.59,
                },
            },
        },
        ResidualizedFactor: 970237,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostFactorsResidualization200ApplicationJSONObject != nil {
        // handle response
    }
}
```
