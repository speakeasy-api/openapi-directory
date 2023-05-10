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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsAnalysisAbsorptionRatioRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAssetsAnalysisAbsorptionRatioRequestBody();
    $request->assets = 548814;
    $request->assetsCovarianceMatrix = [
        [
            8442.66,
            6027.63,
            8579.46,
        ],
        [
            8472.52,
            4236.55,
            6235.64,
        ],
        [
            3843.82,
            4375.87,
            2975.34,
        ],
    ];
    $request->assetsCovarianceMatrixEigenvectors = new PostAssetsAnalysisAbsorptionRatioRequestBodyAssetsCovarianceMatrixEigenvectors();
    $request->assetsCovarianceMatrixEigenvectors->eigenvectorsRetained = 891773;

    $response = $sdk->assetsAnalysis->postAssetsAnalysisAbsorptionRatio($request);

    if ($response->postAssetsAnalysisAbsorptionRatio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [assetsAnalysis](docs/assetsanalysis/README.md)

* [postAssetsAnalysisAbsorptionRatio](docs/assetsanalysis/README.md#postassetsanalysisabsorptionratio) - Absorption Ratio
* [postAssetsAnalysisTurbulenceIndex](docs/assetsanalysis/README.md#postassetsanalysisturbulenceindex) - Turbulence Index

### [assetsCorrelationMatrix](docs/assetscorrelationmatrix/README.md)

* [postAssetsCorrelationMatrix](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrix) - Correlation Matrix
* [postAssetsCorrelationMatrixBounds](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixbounds) - Correlation Matrix Bounds
* [postAssetsCorrelationMatrixDenoised](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixdenoised) - Denoised Correlation Matrix
* [postAssetsCorrelationMatrixDistance](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixdistance) - Correlation Matrix Distance
* [postAssetsCorrelationMatrixEffectiveRank](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixeffectiverank) - Correlation Matrix Effective Rank
* [postAssetsCorrelationMatrixInformativeness](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixinformativeness) - Correlation Matrix Informativeness
* [postAssetsCorrelationMatrixNearest](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixnearest) - Nearest Correlation Matrix
* [postAssetsCorrelationMatrixRandom](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixrandom) - Random Correlation Matrix
* [postAssetsCorrelationMatrixShrinkage](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixshrinkage) - Correlation Matrix Shrinkage
* [postAssetsCorrelationMatrixTheoryImplied](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixtheoryimplied) - Theory-Implied Correlation Matrix
* [postAssetsCorrelationMatrixValidation](docs/assetscorrelationmatrix/README.md#postassetscorrelationmatrixvalidation) - Correlation Matrix Validation

### [assetsCovarianceMatrix](docs/assetscovariancematrix/README.md)

* [postAssetsCovarianceMatrix](docs/assetscovariancematrix/README.md#postassetscovariancematrix) - Covariance Matrix
* [postAssetsCovarianceMatrixEffectiveRank](docs/assetscovariancematrix/README.md#postassetscovariancematrixeffectiverank) - Covariance Matrix Effective Rank
* [postAssetsCovarianceMatrixExponentiallyWeighted](docs/assetscovariancematrix/README.md#postassetscovariancematrixexponentiallyweighted) - Exponentially Weighted Covariance Matrix
* [postAssetsCovarianceMatrixValidation](docs/assetscovariancematrix/README.md#postassetscovariancematrixvalidation) - Covariance Matrix Validation

### [assetsKurtosis](docs/assetskurtosis/README.md)

* [postAssetsKurtosis](docs/assetskurtosis/README.md#postassetskurtosis) - Kurtosis

### [assetsMonteCarloReturnsSimulation](docs/assetsmontecarloreturnssimulation/README.md)

* [postAssetsReturnsSimulationMonteCarloCornishFisher](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlocornishfisher) - Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloCornishFisherCorrected](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlocornishfishercorrected) - Corrected Cornish-Fisher Distribution
* [postAssetsReturnsSimulationMonteCarloGaussian](docs/assetsmontecarloreturnssimulation/README.md#postassetsreturnssimulationmontecarlogaussian) - Gaussian Distribution

### [assetsPrices](docs/assetsprices/README.md)

* [postAssetsPricesAdjusted](docs/assetsprices/README.md#postassetspricesadjusted) - Adjusted Prices
* [postAssetsPricesAdjustedForward](docs/assetsprices/README.md#postassetspricesadjustedforward) - Forward-Adjusted Prices

### [assetsReturns](docs/assetsreturns/README.md)

* [postAssetsReturns](docs/assetsreturns/README.md#postassetsreturns) - Arithmetic Returns
* [postAssetsReturnsAverage](docs/assetsreturns/README.md#postassetsreturnsaverage) - Arithmetic Average Return
* [postAssetsReturnsLogarithmic](docs/assetsreturns/README.md#postassetsreturnslogarithmic) - Logarithmic Returns
* [postAssetsReturnsTurbulencePartitioned](docs/assetsreturns/README.md#postassetsreturnsturbulencepartitioned) - Turbulence-partitioned Asset Returns

### [assetsReturnsSimulation](docs/assetsreturnssimulation/README.md)

* [postAssetsReturnsSimulationBootstrap](docs/assetsreturnssimulation/README.md#postassetsreturnssimulationbootstrap) - Bootstrap

### [assetsSkewness](docs/assetsskewness/README.md)

* [postAssetsSkewness](docs/assetsskewness/README.md#postassetsskewness) - Skewness

### [assetsVariance](docs/assetsvariance/README.md)

* [postAssetsVariance](docs/assetsvariance/README.md#postassetsvariance) - Variance

### [assetsVolatility](docs/assetsvolatility/README.md)

* [postAssetsVolatility](docs/assetsvolatility/README.md#postassetsvolatility) - Volatility

### [factors](docs/factors/README.md)

* [postFactorsResidualization](docs/factors/README.md#postfactorsresidualization) - Residualization

### [portfolioAnalysis](docs/portfolioanalysis/README.md)

* [postPortfolioAnalysisAlpha](docs/portfolioanalysis/README.md#postportfolioanalysisalpha) - Alpha
* [postPortfolioAnalysisBeta](docs/portfolioanalysis/README.md#postportfolioanalysisbeta) - Beta
* [postPortfolioAnalysisContributionsReturn](docs/portfolioanalysis/README.md#postportfolioanalysiscontributionsreturn) - Return Contributions
* [postPortfolioAnalysisContributionsRisk](docs/portfolioanalysis/README.md#postportfolioanalysiscontributionsrisk) - Risk Contributions
* [postPortfolioAnalysisCorrelationSpectrum](docs/portfolioanalysis/README.md#postportfolioanalysiscorrelationspectrum) - Correlation Spectrum
* [postPortfolioAnalysisDiversificationRatio](docs/portfolioanalysis/README.md#postportfolioanalysisdiversificationratio) - Diversification Ratio
* [postPortfolioAnalysisDrawdowns](docs/portfolioanalysis/README.md#postportfolioanalysisdrawdowns) - Drawdowns
* [postPortfolioAnalysisEffectiveNumberOfBets](docs/portfolioanalysis/README.md#postportfolioanalysiseffectivenumberofbets) - Effective Number of Bets
* [postPortfolioAnalysisFactorsExposures](docs/portfolioanalysis/README.md#postportfolioanalysisfactorsexposures) - Factor Exposures
* [postPortfolioAnalysisMeanVarianceEfficientFrontier](docs/portfolioanalysis/README.md#postportfolioanalysismeanvarianceefficientfrontier) - Mean-Variance Efficient Frontier
* [postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier](docs/portfolioanalysis/README.md#postportfolioanalysismeanvarianceminimumvariancefrontier) - Mean-Variance Minimum Variance Frontier
* [postPortfolioAnalysisReturn](docs/portfolioanalysis/README.md#postportfolioanalysisreturn) - Arithmetic Return
* [postPortfolioAnalysisReturnsAverage](docs/portfolioanalysis/README.md#postportfolioanalysisreturnsaverage) - Arithmetic Average Return
* [postPortfolioAnalysisTrackingError](docs/portfolioanalysis/README.md#postportfolioanalysistrackingerror) - Tracking Error
* [postPortfolioAnalysisUlcerIndex](docs/portfolioanalysis/README.md#postportfolioanalysisulcerindex) - Ulcer Index
* [postPortfolioAnalysisUlcerPerformanceIndex](docs/portfolioanalysis/README.md#postportfolioanalysisulcerperformanceindex) - Ulcer Performance Index
* [postPortfolioAnalysisVolatility](docs/portfolioanalysis/README.md#postportfolioanalysisvolatility) - Volatility

### [portfolioAnalysisConditionalValueAtRisk](docs/portfolioanalysisconditionalvalueatrisk/README.md)

* [postPortfolioAnalysisValueAtRiskConditionalCornishFisher](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalcornishfisher) - Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalCornishFisherCorrected](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalcornishfishercorrected) - Corrected Cornish-Fisher Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalGaussian](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalgaussian) - Gaussian Conditional Value At Risk
* [postPortfolioAnalysisValueAtRiskConditionalHistorical](docs/portfolioanalysisconditionalvalueatrisk/README.md#postportfolioanalysisvalueatriskconditionalhistorical) - Historical Conditional Value At Risk

### [portfolioAnalysisSharpeRatio](docs/portfolioanalysissharperatio/README.md)

* [postPortfolioAnalysisSharpeRatio](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatio) - Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioBiasAdjusted](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatiobiasadjusted) - Bias-Adjusted Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioConfidenceInterval](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioconfidenceinterval) - Sharpe Ratio Confidence Interval
* [postPortfolioAnalysisSharpeRatioProbabilistic](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioprobabilistic) - Probabilistic Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength](docs/portfolioanalysissharperatio/README.md#postportfolioanalysissharperatioprobabilisticminimumtrackrecordlength) - Minimum Track Record Length

### [portfolioAnalysisValueAtRisk](docs/portfolioanalysisvalueatrisk/README.md)

* [postPortfolioAnalysisValueAtRiskCornishFisher](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskcornishfisher) - Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskCornishFisherCorrected](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskcornishfishercorrected) - Corrected Cornish-Fisher Value At Risk
* [postPortfolioAnalysisValueAtRiskGaussian](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskgaussian) - Gaussian Value At Risk
* [postPortfolioAnalysisValueAtRiskHistorical](docs/portfolioanalysisvalueatrisk/README.md#postportfolioanalysisvalueatriskhistorical) - Historical Value At Risk

### [portfolioConstruction](docs/portfolioconstruction/README.md)

* [postPortfolioConstructionInvestable](docs/portfolioconstruction/README.md#postportfolioconstructioninvestable) - Investable Portfolio
* [postPortfolioConstructionMimicking](docs/portfolioconstruction/README.md#postportfolioconstructionmimicking) - Mimicking Portfolio
* [postPortfolioConstructionRandom](docs/portfolioconstruction/README.md#postportfolioconstructionrandom) - Random Portfolio

### [portfolioOptimization](docs/portfoliooptimization/README.md)

* [postPortfolioOptimizationEqualRiskContributions](docs/portfoliooptimization/README.md#postportfoliooptimizationequalriskcontributions) - Equal Risk Contributions Portfolio
* [postPortfolioOptimizationEqualSharpeRatioContributions](docs/portfoliooptimization/README.md#postportfoliooptimizationequalsharperatiocontributions) - Equal Sharpe Ratio Contributions Portfolio
* [postPortfolioOptimizationEqualVolatilityWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationequalvolatilityweighted) - Equal Volatility Weighted Portfolio
* [postPortfolioOptimizationEqualWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationequalweighted) - Equal Weighted Portfolio
* [postPortfolioOptimizationHierarchicalRiskParity](docs/portfoliooptimization/README.md#postportfoliooptimizationhierarchicalriskparity) - Hierarchical Risk Parity Portfolio
* [postPortfolioOptimizationHierarchicalRiskParityClusteringBased](docs/portfoliooptimization/README.md#postportfoliooptimizationhierarchicalriskparityclusteringbased) - Hierarchical Clustering-Based Risk Parity Portfolio
* [postPortfolioOptimizationInverseVarianceWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationinversevarianceweighted) - Inverse Variance Weighted Portfolio
* [postPortfolioOptimizationInverseVolatilityWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationinversevolatilityweighted) - Inverse Volatility Weighted Portfolio
* [postPortfolioOptimizationMarketCapitalizationWeighted](docs/portfoliooptimization/README.md#postportfoliooptimizationmarketcapitalizationweighted) - Market Capitalization Weighted Portfolio
* [postPortfolioOptimizationMaximumDecorrelation](docs/portfoliooptimization/README.md#postportfoliooptimizationmaximumdecorrelation) - Maximum Decorrelation Portfolio
* [postPortfolioOptimizationMaximumUlcerPerformanceIndex](docs/portfoliooptimization/README.md#postportfoliooptimizationmaximumulcerperformanceindex) - Maximum Ulcer Performance Index Portfolio
* [postPortfolioOptimizationMinimumCorrelation](docs/portfoliooptimization/README.md#postportfoliooptimizationminimumcorrelation) - Minimum Correlation Portfolio
* [postPortfolioOptimizationMinimumUlcerIndex](docs/portfoliooptimization/README.md#postportfoliooptimizationminimumulcerindex) - Minimum Ulcer Index Portfolio
* [postPortfolioOptimizationMostDiversified](docs/portfoliooptimization/README.md#postportfoliooptimizationmostdiversified) - Most Diversified Portfolio

### [portfolioOptimizationMeanVariance](docs/portfoliooptimizationmeanvariance/README.md)

* [postPortfolioOptimizationMaximumReturn](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturn) - Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturndiversified) - Diversified Maximum Return Portfolio
* [postPortfolioOptimizationMaximumReturnSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumreturnsubsetresamplingbased) - Subset Resampling-Based Maximum Return Portfolio
* [postPortfolioOptimizationMaximumSharpeRatio](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatio) - Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatiodiversified) - Diversified Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmaximumsharperatiosubsetresamplingbased) - Subset Resampling-Based Maximum Sharpe Ratio Portfolio
* [postPortfolioOptimizationMeanVarianceEfficient](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficient) - Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficientdiversified) - Diversified Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationmeanvarianceefficientsubsetresamplingbased) - Subset Resampling-Based Mean-Variance Efficient Portfolio
* [postPortfolioOptimizationMinimumVariance](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariance) - Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceDiversified](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariancediversified) - Diversified Minimum Variance Portfolio
* [postPortfolioOptimizationMinimumVarianceSubsetResamplingBased](docs/portfoliooptimizationmeanvariance/README.md#postportfoliooptimizationminimumvariancesubsetresamplingbased) - Subset Resampling-Based Minimum Variance Portfolio

### [portfolioSimulation](docs/portfoliosimulation/README.md)

* [postPortfolioSimulationRebalancingDriftWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingdriftweight) - Drift-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingFixedWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingfixedweight) - Fixed-weight Portfolio Rebalancing
* [postPortfolioSimulationRebalancingRandomWeight](docs/portfoliosimulation/README.md#postportfoliosimulationrebalancingrandomweight) - Random-weight Portfolio Rebalancing
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
