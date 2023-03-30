# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/portfoliooptimizer.io/1.0.9/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.PostAssetsAnalysisAbsorptionRatioRequest{
        Request: operations.PostAssetsAnalysisAbsorptionRatioRequestBody{
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
                EigenvectorsRetained: 891773,
            },
        },
    }

    ctx := context.Background()
    res, err := s.AssetsAnalysis.PostAssetsAnalysisAbsorptionRatio(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAssetsAnalysisAbsorptionRatio200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### AssetsAnalysis

* `PostAssetsAnalysisAbsorptionRatio` - Absorption Ratio
* `PostAssetsAnalysisTurbulenceIndex` - Turbulence Index

### AssetsCorrelationMatrix

* `PostAssetsCorrelationMatrix` - Correlation Matrix
* `PostAssetsCorrelationMatrixBounds` - Correlation Matrix Bounds
* `PostAssetsCorrelationMatrixDenoised` - Denoised Correlation Matrix
* `PostAssetsCorrelationMatrixDistance` - Correlation Matrix Distance
* `PostAssetsCorrelationMatrixEffectiveRank` - Correlation Matrix Effective Rank
* `PostAssetsCorrelationMatrixInformativeness` - Correlation Matrix Informativeness
* `PostAssetsCorrelationMatrixNearest` - Nearest Correlation Matrix
* `PostAssetsCorrelationMatrixRandom` - Random Correlation Matrix
* `PostAssetsCorrelationMatrixShrinkage` - Correlation Matrix Shrinkage
* `PostAssetsCorrelationMatrixTheoryImplied` - Theory-Implied Correlation Matrix
* `PostAssetsCorrelationMatrixValidation` - Correlation Matrix Validation

### AssetsCovarianceMatrix

* `PostAssetsCovarianceMatrix` - Covariance Matrix
* `PostAssetsCovarianceMatrixEffectiveRank` - Covariance Matrix Effective Rank
* `PostAssetsCovarianceMatrixExponentiallyWeighted` - Exponentially Weighted Covariance Matrix
* `PostAssetsCovarianceMatrixValidation` - Covariance Matrix Validation

### AssetsKurtosis

* `PostAssetsKurtosis` - Kurtosis

### AssetsPrices

* `PostAssetsPricesAdjusted` - Adjusted Prices
* `PostAssetsPricesAdjustedForward` - Forward-Adjusted Prices

### AssetsReturns

* `PostAssetsReturns` - Arithmetic Returns
* `PostAssetsReturnsAverage` - Arithmetic Average Return

### AssetsReturnsSimulation

* `PostAssetsReturnsSimulationBootstrap` - Bootstrap

### AssetsSkewness

* `PostAssetsSkewness` - Skewness

### AssetsVariance

* `PostAssetsVariance` - Variance

### AssetsVolatility

* `PostAssetsVolatility` - Volatility

### Factors

* `PostFactorsResidualization` - Residualization

### PortfolioAnalysis

* `PostPortfolioAnalysisAlpha` - Alpha
* `PostPortfolioAnalysisBeta` - Beta
* `PostPortfolioAnalysisConditionalValueAtRisk` - Conditional Value At Risk
* `PostPortfolioAnalysisContributionsReturn` - Return Contributions
* `PostPortfolioAnalysisContributionsRisk` - Risk Contributions
* `PostPortfolioAnalysisCorrelationSpectrum` - Correlation Spectrum
* `PostPortfolioAnalysisDiversificationRatio` - Diversification Ratio
* `PostPortfolioAnalysisDrawdowns` - Drawdowns
* `PostPortfolioAnalysisEffectiveNumberOfBets` - Effective Number of Bets
* `PostPortfolioAnalysisFactorsExposures` - Factor Exposures
* `PostPortfolioAnalysisMeanVarianceEfficientFrontier` - Mean-Variance Efficient Frontier
* `PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier` - Mean-Variance Minimum Variance Frontier
* `PostPortfolioAnalysisReturn` - Arithmetic Return
* `PostPortfolioAnalysisReturnsAverage` - Arithmetic Average Return
* `PostPortfolioAnalysisTrackingError` - Tracking Error
* `PostPortfolioAnalysisUlcerIndex` - Ulcer Index
* `PostPortfolioAnalysisUlcerPerformanceIndex` - Ulcer Performance Index
* `PostPortfolioAnalysisValueAtRisk` - Value At Risk
* `PostPortfolioAnalysisVolatility` - Volatility

### PortfolioAnalysisSharpeRatio

* `PostPortfolioAnalysisSharpeRatio` - Sharpe Ratio
* `PostPortfolioAnalysisSharpeRatioBiasAdjusted` - Bias-Adjusted Sharpe Ratio
* `PostPortfolioAnalysisSharpeRatioConfidenceInterval` - Sharpe Ratio Confidence Interval
* `PostPortfolioAnalysisSharpeRatioProbabilistic` - Probabilistic Sharpe Ratio
* `PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength` - Minimum Track Record Length

### PortfolioConstruction

* `PostPortfolioConstructionInvestable` - Investable Portfolio
* `PostPortfolioConstructionMimicking` - Mimicking Portfolio
* `PostPortfolioConstructionRandom` - Random Portfolio

### PortfolioOptimization

* `PostPortfolioOptimizationEqualRiskContributions` - Equal Risk Contributions Portfolio
* `PostPortfolioOptimizationEqualSharpeRatioContributions` - Equal Sharpe Ratio Contributions Portfolio
* `PostPortfolioOptimizationEqualVolatilityWeighted` - Equal Volatility Weighted Portfolio
* `PostPortfolioOptimizationEqualWeighted` - Equal Weighted Portfolio
* `PostPortfolioOptimizationHierarchicalRiskParity` - Hierarchical Risk Parity Portfolio
* `PostPortfolioOptimizationHierarchicalRiskParityClusteringBased` - Hierarchical Clustering-Based Risk Parity Portfolio
* `PostPortfolioOptimizationInverseVarianceWeighted` - Inverse Variance Weighted Portfolio
* `PostPortfolioOptimizationInverseVolatilityWeighted` - Inverse Volatility Weighted Portfolio
* `PostPortfolioOptimizationMarketCapitalizationWeighted` - Market Capitalization Weighted Portfolio
* `PostPortfolioOptimizationMaximumDecorrelation` - Maximum Decorrelation Portfolio
* `PostPortfolioOptimizationMaximumUlcerPerformanceIndex` - Maximum Ulcer Performance Index Portfolio
* `PostPortfolioOptimizationMinimumCorrelation` - Minimum Correlation Portfolio
* `PostPortfolioOptimizationMinimumUlcerIndex` - Minimum Ulcer Index Portfolio
* `PostPortfolioOptimizationMostDiversified` - Most Diversified Portfolio

### PortfolioOptimizationMeanVariance

* `PostPortfolioOptimizationMaximumReturn` - Maximum Return Portfolio
* `PostPortfolioOptimizationMaximumReturnDiversified` - Diversified Maximum Return Portfolio
* `PostPortfolioOptimizationMaximumReturnSubsetResamplingBased` - Subset Resampling-Based Maximum Return Portfolio
* `PostPortfolioOptimizationMaximumSharpeRatio` - Maximum Sharpe Ratio Portfolio
* `PostPortfolioOptimizationMaximumSharpeRatioDiversified` - Diversified Maximum Sharpe Ratio Portfolio
* `PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased` - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* `PostPortfolioOptimizationMeanVarianceEfficient` - Mean-Variance Efficient Portfolio
* `PostPortfolioOptimizationMeanVarianceEfficientDiversified` - Diversified Mean-Variance Efficient Portfolio
* `PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased` - Subset Resampling-Based Mean-Variance Efficient Portfolio
* `PostPortfolioOptimizationMinimumVariance` - Minimum Variance Portfolio
* `PostPortfolioOptimizationMinimumVarianceDiversified` - Diversified Minimum Variance Portfolio
* `PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased` - Subset Resampling-Based Minimum Variance Portfolio

### PortfolioSimulation

* `PostPortfolioSimulationRebalancingDriftWeight` - Drift-weight Portfolio Rebalancing
* `PostPortfolioSimulationRebalancingFixedWeight` - Fixed-weight Portfolio Rebalancing
* `PostPortfolioSimulationRebalancingRandomWeight` - Random-weight Portfolio Rebalancing
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
