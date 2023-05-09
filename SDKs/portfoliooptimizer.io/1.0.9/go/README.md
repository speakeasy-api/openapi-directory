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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AssetsAnalysis](docs/assetsanalysis/README.md)

* [PostAssetsAnalysisAbsorptionRatio](docs/assetsanalysis/README.md#postassetsanalysisabsorptionratio) - Absorption Ratio
* [PostAssetsAnalysisTurbulenceIndex](docs/assetsanalysis/README.md#postassetsanalysisturbulenceindex) - Turbulence Index

### [AssetsCorrelationMatrix](docs/assetscorrelationmatrix/README.md)

* [PostAssetsCorrelationMatrix](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrix) - Correlation Matrix
* [PostAssetsCorrelationMatrixBounds](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixbounds) - Correlation Matrix Bounds
* [PostAssetsCorrelationMatrixDenoised](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixdenoised) - Denoised Correlation Matrix
* [PostAssetsCorrelationMatrixDistance](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixdistance) - Correlation Matrix Distance
* [PostAssetsCorrelationMatrixEffectiveRank](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixeffectiverank) - Correlation Matrix Effective Rank
* [PostAssetsCorrelationMatrixInformativeness](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixinformativeness) - Correlation Matrix Informativeness
* [PostAssetsCorrelationMatrixNearest](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixnearest) - Nearest Correlation Matrix
* [PostAssetsCorrelationMatrixRandom](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixrandom) - Random Correlation Matrix
* [PostAssetsCorrelationMatrixShrinkage](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixshrinkage) - Correlation Matrix Shrinkage
* [PostAssetsCorrelationMatrixTheoryImplied](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixtheoryimplied) - Theory-Implied Correlation Matrix
* [PostAssetsCorrelationMatrixValidation](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixvalidation) - Correlation Matrix Validation

### [AssetsCovarianceMatrix](docs/assetscovariancematrix/README.md)

* [PostAssetsCovarianceMatrix](docs/assetscovariancematrix/README.md#postassetscovariancematrix) - Covariance Matrix
* [PostAssetsCovarianceMatrixEffectiveRank](docs/assetscovariancematrix/README.md#postassetscovariancematrixeffectiverank) - Covariance Matrix Effective Rank
* [PostAssetsCovarianceMatrixExponentiallyWeighted](docs/assetscovariancematrix/README.md#postassetscovariancematrixexponentiallyweighted) - Exponentially Weighted Covariance Matrix
* [PostAssetsCovarianceMatrixValidation](docs/assetscovariancematrix/README.md#postassetscovariancematrixvalidation) - Covariance Matrix Validation

### [AssetsKurtosis](docs/assetskurtosis/README.md)

* [PostAssetsKurtosis](docs/assetskurtosis/README.md#postassetskurtosis) - Kurtosis

### [AssetsMonteCarloReturnsSimulation](docs/assetsmontecarloreturnssimulation/README.md)

* [PostAssetsReturnsSimulationMonteCarloCornishFisher](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlocornishfisher) - Cornish-Fisher Distribution
* [PostAssetsReturnsSimulationMonteCarloCornishFisherCorrected](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlocornishfishercorrected) - Corrected Cornish-Fisher Distribution
* [PostAssetsReturnsSimulationMonteCarloGaussian](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlogaussian) - Gaussian Distribution

### [AssetsPrices](docs/assetsprices/README.md)

* [PostAssetsPricesAdjusted](docs/assetsprices/README.md#postassetspricesadjusted) - Adjusted Prices
* [PostAssetsPricesAdjustedForward](docs/assetsprices/README.md#postassetspricesadjustedforward) - Forward-Adjusted Prices

### [AssetsReturns](docs/assetsreturns/README.md)

* [PostAssetsReturns](docs/assetsreturns/README.md#postassetsreturns) - Arithmetic Returns
* [PostAssetsReturnsAverage](docs/assetsreturns/README.md#postassetsreturnsaverage) - Arithmetic Average Return
* [PostAssetsReturnsLogarithmic](docs/assetsreturns/README.md#postassetsreturnslogarithmic) - Logarithmic Returns
* [PostAssetsReturnsTurbulencePartitioned](docs/assetsreturns/README.md#postassetsreturnsturbulencepartitioned) - Turbulence-partitioned Asset Returns

### [AssetsReturnsSimulation](docs/assetsreturnssimulation/README.md)

* [PostAssetsReturnsSimulationBootstrap](docs/assetsreturnssimulation/README.md#postassetsreturnssimulationbootstrap) - Bootstrap

### [AssetsSkewness](docs/assetsskewness/README.md)

* [PostAssetsSkewness](docs/assetsskewness/README.md#postassetsskewness) - Skewness

### [AssetsVariance](docs/assetsvariance/README.md)

* [PostAssetsVariance](docs/assetsvariance/README.md#postassetsvariance) - Variance

### [AssetsVolatility](docs/assetsvolatility/README.md)

* [PostAssetsVolatility](docs/assetsvolatility/README.md#postassetsvolatility) - Volatility

### [Factors](docs/factors/README.md)

* [PostFactorsResidualization](docs/factors/README.md#postfactorsresidualization) - Residualization

### [PortfolioAnalysis](docs/portfolioanalysis/README.md)

* [PostPortfolioAnalysisAlpha](docs/portfolioanalysis/README.md#postportfolioanalysisalpha) - Alpha
* [PostPortfolioAnalysisBeta](docs/portfolioanalysis/README.md#postportfolioanalysisbeta) - Beta
* [PostPortfolioAnalysisContributionsReturn](docs/portfolioanalysis/README.md#postportfolioanalysiscontributionsreturn) - Return Contributions
* [PostPortfolioAnalysisContributionsRisk](docs/portfolioanalysis/README.md#postportfolioanalysiscontributionsrisk) - Risk Contributions
* [PostPortfolioAnalysisCorrelationSpectrum](docs/portfolioanalysis/README.md#postportfolioanalysiscorrelationspectrum) - Correlation Spectrum
* [PostPortfolioAnalysisDiversificationRatio](docs/portfolioanalysis/README.md#postportfolioanalysisdiversificationratio) - Diversification Ratio
* [PostPortfolioAnalysisDrawdowns](docs/portfolioanalysis/README.md#postportfolioanalysisdrawdowns) - Drawdowns
* [PostPortfolioAnalysisEffectiveNumberOfBets](docs/portfolioanalysis/README.md#postportfolioanalysiseffectivenumberofbets) - Effective Number of Bets
* [PostPortfolioAnalysisFactorsExposures](docs/portfolioanalysis/README.md#postportfolioanalysisfactorsexposures) - Factor Exposures
* [PostPortfolioAnalysisMeanVarianceEfficientFrontier](docs/portfolioanalysis/README.md#postportfolioanalysismeanvarianceefficientfrontier) - Mean-Variance Efficient Frontier
* [PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier](docs/portfolioanalysis/README.md#postportfolioanalysismeanvarianceminimumvariancefrontier) - Mean-Variance Minimum Variance Frontier
* [PostPortfolioAnalysisReturn](docs/portfolioanalysis/README.md#postportfolioanalysisreturn) - Arithmetic Return
* [PostPortfolioAnalysisReturnsAverage](docs/portfolioanalysis/README.md#postportfolioanalysisreturnsaverage) - Arithmetic Average Return
* [PostPortfolioAnalysisTrackingError](docs/portfolioanalysis/README.md#postportfolioanalysistrackingerror) - Tracking Error
* [PostPortfolioAnalysisUlcerIndex](docs/portfolioanalysis/README.md#postportfolioanalysisulcerindex) - Ulcer Index
* [PostPortfolioAnalysisUlcerPerformanceIndex](docs/portfolioanalysis/README.md#postportfolioanalysisulcerperformanceindex) - Ulcer Performance Index
* [PostPortfolioAnalysisVolatility](docs/portfolioanalysis/README.md#postportfolioanalysisvolatility) - Volatility

### [PortfolioAnalysisConditionalValueAtRisk](docs/portfolioanalysisconditionalvalueatrisk/README.md)

* [PostPortfolioAnalysisValueAtRiskConditionalCornishFisher](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalcornishfisher) - Cornish-Fisher Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalcornishfishercorrected) - Corrected Cornish-Fisher Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalGaussian](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalgaussian) - Gaussian Conditional Value At Risk
* [PostPortfolioAnalysisValueAtRiskConditionalHistorical](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalhistorical) - Historical Conditional Value At Risk

### [PortfolioAnalysisSharpeRatio](docs/portfolioanalysissharperatio/README.md)

* [PostPortfolioAnalysisSharpeRatio](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatio) - Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioBiasAdjusted](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatiobiasadjusted) - Bias-Adjusted Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioConfidenceInterval](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioconfidenceinterval) - Sharpe Ratio Confidence Interval
* [PostPortfolioAnalysisSharpeRatioProbabilistic](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioprobabilistic) - Probabilistic Sharpe Ratio
* [PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioprobabilisticminimumtrackrecordlength) - Minimum Track Record Length

### [PortfolioAnalysisValueAtRisk](docs/portfolioanalysisvalueatrisk/README.md)

* [PostPortfolioAnalysisValueAtRiskCornishFisher](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskcornishfisher) - Cornish-Fisher Value At Risk
* [PostPortfolioAnalysisValueAtRiskCornishFisherCorrected](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskcornishfishercorrected) - Corrected Cornish-Fisher Value At Risk
* [PostPortfolioAnalysisValueAtRiskGaussian](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskgaussian) - Gaussian Value At Risk
* [PostPortfolioAnalysisValueAtRiskHistorical](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskhistorical) - Historical Value At Risk

### [PortfolioConstruction](docs/portfolioconstruction/README.md)

* [PostPortfolioConstructionInvestable](docs/portfolioconstruction/README.md#postportfolioconstructioninvestable) - Investable Portfolio
* [PostPortfolioConstructionMimicking](docs/portfolioconstruction/README.md#postportfolioconstructionmimicking) - Mimicking Portfolio
* [PostPortfolioConstructionRandom](docs/portfolioconstruction/README.md#postportfolioconstructionrandom) - Random Portfolio

### [PortfolioOptimization](docs/portfoliooptimization/README.md)

* [PostPortfolioOptimizationEqualRiskContributions](docs/portfoliooptimization/README.md#postportfoliooptimizationequalriskcontributions) - Equal Risk Contributions Portfolio
* [PostPortfolioOptimizationEqualSharpeRatioContributions](docs/portfoliooptimization/README.md#postportfoliooptimizationequalsharperatiocontributions) - Equal Sharpe Ratio Contributions Portfolio
* [PostPortfolioOptimizationEqualVolatilityWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationequalvolatilityweighted) - Equal Volatility Weighted Portfolio
* [PostPortfolioOptimizationEqualWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationequalweighted) - Equal Weighted Portfolio
* [PostPortfolioOptimizationHierarchicalRiskParity](docs/portfoliooptimization/README.md#postportfoliooptimizationhierarchicalriskparity) - Hierarchical Risk Parity Portfolio
* [PostPortfolioOptimizationHierarchicalRiskParityClusteringBased](docs/portfoliooptimization/README.md#postportfoliooptimizationhierarchicalriskparityclusteringbased) - Hierarchical Clustering-Based Risk Parity Portfolio
* [PostPortfolioOptimizationInverseVarianceWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationinversevarianceweighted) - Inverse Variance Weighted Portfolio
* [PostPortfolioOptimizationInverseVolatilityWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationinversevolatilityweighted) - Inverse Volatility Weighted Portfolio
* [PostPortfolioOptimizationMarketCapitalizationWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationmarketcapitalizationweighted) - Market Capitalization Weighted Portfolio
* [PostPortfolioOptimizationMaximumDecorrelation](docs/portfoliooptimization/README.md#postportfoliooptimizationmaximumdecorrelation) - Maximum Decorrelation Portfolio
* [PostPortfolioOptimizationMaximumUlcerPerformanceIndex](docs/portfoliooptimization/README.md#postportfoliooptimizationmaximumulcerperformanceindex) - Maximum Ulcer Performance Index Portfolio
* [PostPortfolioOptimizationMinimumCorrelation](docs/portfoliooptimization/README.md#postportfoliooptimizationminimumcorrelation) - Minimum Correlation Portfolio
* [PostPortfolioOptimizationMinimumUlcerIndex](docs/portfoliooptimization/README.md#postportfoliooptimizationminimumulcerindex) - Minimum Ulcer Index Portfolio
* [PostPortfolioOptimizationMostDiversified](docs/portfoliooptimization/README.md#postportfoliooptimizationmostdiversified) - Most Diversified Portfolio

### [PortfolioOptimizationMeanVariance](docs/portfoliooptimizationmeanvariance/README.md)

* [PostPortfolioOptimizationMaximumReturn](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturn) - Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumReturnDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturndiversified) - Diversified Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumReturnSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturnsubsetresamplingbased) - Subset Resampling-Based Maximum Return Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatio](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatio) - Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatioDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatiodiversified) - Diversified Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatiosubsetresamplingbased) - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficient](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficient) - Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficientDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficientdiversified) - Diversified Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficientsubsetresamplingbased) - Subset Resampling-Based Mean-Variance Efficient Portfolio
* [PostPortfolioOptimizationMinimumVariance](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariance) - Minimum Variance Portfolio
* [PostPortfolioOptimizationMinimumVarianceDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariancediversified) - Diversified Minimum Variance Portfolio
* [PostPortfolioOptimizationMinimumVarianceSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariancesubsetresamplingbased) - Subset Resampling-Based Minimum Variance Portfolio

### [PortfolioSimulation](docs/portfoliosimulation/README.md)

* [PostPortfolioSimulationRebalancingDriftWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingdriftweight) - Drift-weight Portfolio Rebalancing
* [PostPortfolioSimulationRebalancingFixedWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingfixedweight) - Fixed-weight Portfolio Rebalancing
* [PostPortfolioSimulationRebalancingRandomWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingrandomweight) - Random-weight Portfolio Rebalancing
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
