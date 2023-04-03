# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### assetsAnalysis

* `postAssetsAnalysisAbsorptionRatio` - Absorption Ratio
* `postAssetsAnalysisTurbulenceIndex` - Turbulence Index

### assetsCorrelationMatrix

* `postAssetsCorrelationMatrix` - Correlation Matrix
* `postAssetsCorrelationMatrixBounds` - Correlation Matrix Bounds
* `postAssetsCorrelationMatrixDenoised` - Denoised Correlation Matrix
* `postAssetsCorrelationMatrixDistance` - Correlation Matrix Distance
* `postAssetsCorrelationMatrixEffectiveRank` - Correlation Matrix Effective Rank
* `postAssetsCorrelationMatrixInformativeness` - Correlation Matrix Informativeness
* `postAssetsCorrelationMatrixNearest` - Nearest Correlation Matrix
* `postAssetsCorrelationMatrixRandom` - Random Correlation Matrix
* `postAssetsCorrelationMatrixShrinkage` - Correlation Matrix Shrinkage
* `postAssetsCorrelationMatrixTheoryImplied` - Theory-Implied Correlation Matrix
* `postAssetsCorrelationMatrixValidation` - Correlation Matrix Validation

### assetsCovarianceMatrix

* `postAssetsCovarianceMatrix` - Covariance Matrix
* `postAssetsCovarianceMatrixEffectiveRank` - Covariance Matrix Effective Rank
* `postAssetsCovarianceMatrixExponentiallyWeighted` - Exponentially Weighted Covariance Matrix
* `postAssetsCovarianceMatrixValidation` - Covariance Matrix Validation

### assetsKurtosis

* `postAssetsKurtosis` - Kurtosis

### assetsPrices

* `postAssetsPricesAdjusted` - Adjusted Prices
* `postAssetsPricesAdjustedForward` - Forward-Adjusted Prices

### assetsReturns

* `postAssetsReturns` - Arithmetic Returns
* `postAssetsReturnsAverage` - Arithmetic Average Return

### assetsReturnsSimulation

* `postAssetsReturnsSimulationBootstrap` - Bootstrap

### assetsSkewness

* `postAssetsSkewness` - Skewness

### assetsVariance

* `postAssetsVariance` - Variance

### assetsVolatility

* `postAssetsVolatility` - Volatility

### factors

* `postFactorsResidualization` - Residualization

### portfolioAnalysis

* `postPortfolioAnalysisAlpha` - Alpha
* `postPortfolioAnalysisBeta` - Beta
* `postPortfolioAnalysisConditionalValueAtRisk` - Conditional Value At Risk
* `postPortfolioAnalysisContributionsReturn` - Return Contributions
* `postPortfolioAnalysisContributionsRisk` - Risk Contributions
* `postPortfolioAnalysisCorrelationSpectrum` - Correlation Spectrum
* `postPortfolioAnalysisDiversificationRatio` - Diversification Ratio
* `postPortfolioAnalysisDrawdowns` - Drawdowns
* `postPortfolioAnalysisEffectiveNumberOfBets` - Effective Number of Bets
* `postPortfolioAnalysisFactorsExposures` - Factor Exposures
* `postPortfolioAnalysisMeanVarianceEfficientFrontier` - Mean-Variance Efficient Frontier
* `postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier` - Mean-Variance Minimum Variance Frontier
* `postPortfolioAnalysisReturn` - Arithmetic Return
* `postPortfolioAnalysisReturnsAverage` - Arithmetic Average Return
* `postPortfolioAnalysisTrackingError` - Tracking Error
* `postPortfolioAnalysisUlcerIndex` - Ulcer Index
* `postPortfolioAnalysisUlcerPerformanceIndex` - Ulcer Performance Index
* `postPortfolioAnalysisValueAtRisk` - Value At Risk
* `postPortfolioAnalysisVolatility` - Volatility

### portfolioAnalysisSharpeRatio

* `postPortfolioAnalysisSharpeRatio` - Sharpe Ratio
* `postPortfolioAnalysisSharpeRatioBiasAdjusted` - Bias-Adjusted Sharpe Ratio
* `postPortfolioAnalysisSharpeRatioConfidenceInterval` - Sharpe Ratio Confidence Interval
* `postPortfolioAnalysisSharpeRatioProbabilistic` - Probabilistic Sharpe Ratio
* `postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength` - Minimum Track Record Length

### portfolioConstruction

* `postPortfolioConstructionInvestable` - Investable Portfolio
* `postPortfolioConstructionMimicking` - Mimicking Portfolio
* `postPortfolioConstructionRandom` - Random Portfolio

### portfolioOptimization

* `postPortfolioOptimizationEqualRiskContributions` - Equal Risk Contributions Portfolio
* `postPortfolioOptimizationEqualSharpeRatioContributions` - Equal Sharpe Ratio Contributions Portfolio
* `postPortfolioOptimizationEqualVolatilityWeighted` - Equal Volatility Weighted Portfolio
* `postPortfolioOptimizationEqualWeighted` - Equal Weighted Portfolio
* `postPortfolioOptimizationHierarchicalRiskParity` - Hierarchical Risk Parity Portfolio
* `postPortfolioOptimizationHierarchicalRiskParityClusteringBased` - Hierarchical Clustering-Based Risk Parity Portfolio
* `postPortfolioOptimizationInverseVarianceWeighted` - Inverse Variance Weighted Portfolio
* `postPortfolioOptimizationInverseVolatilityWeighted` - Inverse Volatility Weighted Portfolio
* `postPortfolioOptimizationMarketCapitalizationWeighted` - Market Capitalization Weighted Portfolio
* `postPortfolioOptimizationMaximumDecorrelation` - Maximum Decorrelation Portfolio
* `postPortfolioOptimizationMaximumUlcerPerformanceIndex` - Maximum Ulcer Performance Index Portfolio
* `postPortfolioOptimizationMinimumCorrelation` - Minimum Correlation Portfolio
* `postPortfolioOptimizationMinimumUlcerIndex` - Minimum Ulcer Index Portfolio
* `postPortfolioOptimizationMostDiversified` - Most Diversified Portfolio

### portfolioOptimizationMeanVariance

* `postPortfolioOptimizationMaximumReturn` - Maximum Return Portfolio
* `postPortfolioOptimizationMaximumReturnDiversified` - Diversified Maximum Return Portfolio
* `postPortfolioOptimizationMaximumReturnSubsetResamplingBased` - Subset Resampling-Based Maximum Return Portfolio
* `postPortfolioOptimizationMaximumSharpeRatio` - Maximum Sharpe Ratio Portfolio
* `postPortfolioOptimizationMaximumSharpeRatioDiversified` - Diversified Maximum Sharpe Ratio Portfolio
* `postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased` - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* `postPortfolioOptimizationMeanVarianceEfficient` - Mean-Variance Efficient Portfolio
* `postPortfolioOptimizationMeanVarianceEfficientDiversified` - Diversified Mean-Variance Efficient Portfolio
* `postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased` - Subset Resampling-Based Mean-Variance Efficient Portfolio
* `postPortfolioOptimizationMinimumVariance` - Minimum Variance Portfolio
* `postPortfolioOptimizationMinimumVarianceDiversified` - Diversified Minimum Variance Portfolio
* `postPortfolioOptimizationMinimumVarianceSubsetResamplingBased` - Subset Resampling-Based Minimum Variance Portfolio

### portfolioSimulation

* `postPortfolioSimulationRebalancingDriftWeight` - Drift-weight Portfolio Rebalancing
* `postPortfolioSimulationRebalancingFixedWeight` - Fixed-weight Portfolio Rebalancing
* `postPortfolioSimulationRebalancingRandomWeight` - Random-weight Portfolio Rebalancing
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
