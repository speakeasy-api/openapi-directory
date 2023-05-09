# portfolioAnalysis

### Available Operations

* [postPortfolioAnalysisAlpha](#postportfolioanalysisalpha) - Alpha
* [postPortfolioAnalysisBeta](#postportfolioanalysisbeta) - Beta
* [postPortfolioAnalysisContributionsReturn](#postportfolioanalysiscontributionsreturn) - Return Contributions
* [postPortfolioAnalysisContributionsRisk](#postportfolioanalysiscontributionsrisk) - Risk Contributions
* [postPortfolioAnalysisCorrelationSpectrum](#postportfolioanalysiscorrelationspectrum) - Correlation Spectrum
* [postPortfolioAnalysisDiversificationRatio](#postportfolioanalysisdiversificationratio) - Diversification Ratio
* [postPortfolioAnalysisDrawdowns](#postportfolioanalysisdrawdowns) - Drawdowns
* [postPortfolioAnalysisEffectiveNumberOfBets](#postportfolioanalysiseffectivenumberofbets) - Effective Number of Bets
* [postPortfolioAnalysisFactorsExposures](#postportfolioanalysisfactorsexposures) - Factor Exposures
* [postPortfolioAnalysisMeanVarianceEfficientFrontier](#postportfolioanalysismeanvarianceefficientfrontier) - Mean-Variance Efficient Frontier
* [postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier](#postportfolioanalysismeanvarianceminimumvariancefrontier) - Mean-Variance Minimum Variance Frontier
* [postPortfolioAnalysisReturn](#postportfolioanalysisreturn) - Arithmetic Return
* [postPortfolioAnalysisReturnsAverage](#postportfolioanalysisreturnsaverage) - Arithmetic Average Return
* [postPortfolioAnalysisTrackingError](#postportfolioanalysistrackingerror) - Tracking Error
* [postPortfolioAnalysisUlcerIndex](#postportfolioanalysisulcerindex) - Ulcer Index
* [postPortfolioAnalysisUlcerPerformanceIndex](#postportfolioanalysisulcerperformanceindex) - Ulcer Performance Index
* [postPortfolioAnalysisVolatility](#postportfolioanalysisvolatility) - Volatility

## postPortfolioAnalysisAlpha

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisAlphaRequestBody1(                new Double[]{{
                                add(7065.75),
                                add(7382.27),
                                add(4148.57),
                                add(4471.44),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody1Portfolios[]{{
                                add(new PostPortfolioAnalysisAlphaRequestBody1Portfolios(                new Double[]{{
                                                    add(7386.83),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(8286.57),
                                        add(3631.61),
                                        add(9249.67),
                                        add(3975.33),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisAlphaRequestBody1Portfolios(                new Double[]{{
                                                    add(9372.85),
                                                    add(8149.67),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(4490.83),
                                    }};
                                }}),
                            }}) {{
                benchmarkReturns = new Double[]{{
                    add(1629.54),
                    add(8315.2),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisAlphaRequestBody1Portfolios[]{{
                    add(new PostPortfolioAnalysisAlphaRequestBody1Portfolios(                new Double[]{{
                                        add(3127.53),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(4903.05),
                            add(6400.24),
                            add(9894.1),
                            add(3681.02),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisAlphaRequestBody1Portfolios(                new Double[]{{
                                        add(6625.05),
                                        add(3807.29),
                                        add(2460.63),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(8018.36),
                            add(2883.98),
                            add(704.47),
                            add(2414.18),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisAlphaRequestBody1Portfolios(                new Double[]{{
                                        add(4240.89),
                                        add(4976.78),
                                        add(5546.88),
                                        add(4278.34),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(6658.59),
                            add(9268.8),
                            add(5173.09),
                        }};
                    }}),
                }};
                riskFreeRate = 2870.51;
            }}            

            PostPortfolioAnalysisAlphaResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisAlpha(req);

            if (res.postPortfolioAnalysisAlpha200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisBeta

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisBetaRequestBody2(                new Double[]{{
                                add(5039.34),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                                    add(3518.7),
                                                    add(2377.42),
                                                    add(7383.91),
                                                    add(5023.89),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(3044.68),
                                        add(8859.63),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                                    add(8672.9),
                                                    add(5196.43),
                                                    add(9402.1),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(9425.84),
                                        add(2015.17),
                                        add(6339.98),
                                    }};
                                }}),
                            }}) {{
                benchmarkReturns = new Double[]{{
                    add(9689.72),
                    add(6971.42),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisBetaRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                        add(2282.63),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(2965.56),
                            add(1210.59),
                            add(9920.12),
                            add(2415.45),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                        add(8915.23),
                                        add(2334.2),
                                        add(3581.07),
                                        add(6897.68),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(4895.09),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                        add(1138.16),
                                        add(8817.21),
                                        add(6311.26),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(583.56),
                            add(9167.27),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisBetaRequestBody2Portfolios(                new Double[]{{
                                        add(3742.96),
                                        add(3244.05),
                                    }}) {{
                        portfolioReturns = new Double[]{{
                            add(1328.15),
                            add(3790.57),
                        }};
                    }}),
                }};
                riskFreeReturns = new Double[]{{
                    add(6801.16),
                    add(2378.07),
                    add(7955.35),
                }};
            }}            

            PostPortfolioAnalysisBetaResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisBeta(req);

            if (res.postPortfolioAnalysisBeta200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisContributionsReturn

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsReturnRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsReturnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisContributionsReturnRequestBody req = new PostPortfolioAnalysisContributionsReturnRequestBody(750765L,                 new Double[]{{
                                add(6995.75),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios(                new Double[]{{
                                                    add(708.69),
                                                    add(6117.49),
                                                    add(2927.94),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(1318.52),
                                        add(9944.01),
                                        add(7079.18),
                                        add(4518.22),
                                    }};
                                }}),
                            }}) {{
                assetsGroups = new Long[][]{{
                    add(new Long[]{{
                        add(447516L),
                    }}),
                    add(new Long[]{{
                        add(696077L),
                        add(131289L),
                    }}),
                    add(new Long[]{{
                        add(604118L),
                        add(100032L),
                    }}),
                }};
            }};            

            PostPortfolioAnalysisContributionsReturnResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisContributionsReturn(req);

            if (res.postPortfolioAnalysisContributionsReturn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisContributionsRisk

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsRiskRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsRiskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisContributionsRiskRequestBody req = new PostPortfolioAnalysisContributionsRiskRequestBody(960257L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(9677.95),
                                }}),
                                add(new Double[]{{
                                    add(5468.85),
                                }}),
                                add(new Double[]{{
                                    add(2748.23),
                                    add(1484.78),
                                    add(5922.31),
                                    add(2587.02),
                                }}),
                                add(new Double[]{{
                                    add(2155.29),
                                    add(4067.33),
                                    add(5799.12),
                                    add(5520.78),
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(                new Double[]{{
                                                    add(4017.13),
                                                    add(254.97),
                                                    add(2484.13),
                                                    add(8880.44),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(2730.09),
                                        add(4554.44),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(                new Double[]{{
                                                    add(8948.64),
                                                    add(5249.7),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(7086.09),
                                        add(3103.81),
                                        add(2777.73),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(                new Double[]{{
                                                    add(3335.07),
                                                    add(3295.43),
                                                    add(9241.59),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(7505.95),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios(                new Double[]{{
                                                    add(3299.35),
                                                    add(4461.35),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(8623.19),
                                        add(1685.76),
                                        add(486.9),
                                        add(9014.83),
                                    }};
                                }}),
                            }}) {{
                assetsGroups = new Long[][]{{
                    add(new Long[]{{
                        add(512452L),
                    }}),
                    add(new Long[]{{
                        add(510629L),
                        add(740098L),
                    }}),
                    add(new Long[]{{
                        add(680515L),
                        add(530089L),
                    }}),
                    add(new Long[]{{
                        add(944708L),
                        add(710529L),
                        add(892863L),
                    }}),
                }};
            }};            

            PostPortfolioAnalysisContributionsRiskResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisContributionsRisk(req);

            if (res.postPortfolioAnalysisContributionsRisk200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisCorrelationSpectrum

Compute the correlation spectrum of one or several portfolio(s).

References
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisCorrelationSpectrumRequestBody2(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets[]{{
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets(                new Double[]{{
                                                    add(2097.5),
                                                    add(6908.94),
                                                    add(1157.03),
                                                    add(994.16),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2790.68),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets(                new Double[]{{
                                                    add(7241.48),
                                                    add(9488.61),
                                                    add(3888.67),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2897.76),
                                        add(6952.7),
                                        add(5390.74),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets(                new Double[]{{
                                                    add(4548.6),
                                                    add(6003.92),
                                                    add(9720.83),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2270.84),
                                    }};
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios(                new Double[]{{
                                                    add(4406.66),
                                                    add(8136.79),
                                                    add(6850.92),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(9627.71),
                                        add(9147.91),
                                        add(168.71),
                                        add(6672.85),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios(                new Double[]{{
                                                    add(9195.32),
                                                    add(972.43),
                                                    add(5424.57),
                                                    add(4420.36),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6485.98),
                                        add(3339.65),
                                        add(291),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios(                new Double[]{{
                                                    add(4610.07),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(5199.52),
                                        add(3831.03),
                                        add(6939.57),
                                        add(8066.7),
                                    }};
                                }}),
                            }}) {{
                assets = new org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets[]{{
                    add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets(                new Double[]{{
                                        add(5436.78),
                                        add(1482.68),
                                    }}) {{
                        assetPrices = new Double[]{{
                            add(6762.43),
                            add(5483.61),
                            add(8792.35),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Assets(                new Double[]{{
                                        add(7103.37),
                                        add(2996.43),
                                        add(78.84),
                                    }}) {{
                        assetPrices = new Double[]{{
                            add(8563.03),
                            add(302.35),
                        }};
                    }}),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios(                new Double[]{{
                                        add(9221.12),
                                        add(3611.51),
                                        add(894.94),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(245.27),
                            add(5305.37),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisCorrelationSpectrumRequestBody2Portfolios(                new Double[]{{
                                        add(3426.11),
                                        add(9061.72),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(4059.42),
                            add(1536.27),
                            add(243.13),
                        }};
                    }}),
                }};
            }}            

            PostPortfolioAnalysisCorrelationSpectrumResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisCorrelationSpectrum(req);

            if (res.postPortfolioAnalysisCorrelationSpectrum200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisDiversificationRatio

Compute the diversification ratio of one or several portfolio(s).

References
* [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Assets;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisDiversificationRatioRequestBody2(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Assets[]{{
                                add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                                    add(8863.05),
                                                    add(5979.37),
                                                    add(4463.94),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(3000.29),
                                        add(9063.55),
                                        add(1604.67),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                                    add(1602.3),
                                                    add(1458.7),
                                                    add(6611.18),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(9078.76),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                                    add(3613.06),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(4402.64),
                                        add(6255.28),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                                    add(4341.56),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(9109.94),
                                        add(2473.99),
                                        add(8784.93),
                                    }};
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios(                new Double[]{{
                                                    add(7398.84),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(610.78),
                                        add(4746.68),
                                        add(9077.33),
                                    }};
                                }}),
                            }}) {{
                assets = new org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Assets[]{{
                    add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                        add(6188.26),
                                        add(3283.03),
                                        add(1334.61),
                                        add(4044.25),
                                    }}) {{
                        assetPrices = new Double[]{{
                            add(6232.95),
                            add(8872.65),
                            add(8869.61),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Assets(                new Double[]{{
                                        add(9223.48),
                                        add(5421.29),
                                    }}) {{
                        assetPrices = new Double[]{{
                            add(5446.47),
                            add(8717.86),
                            add(6216.93),
                            add(5027.21),
                        }};
                    }}),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios(                new Double[]{{
                                        add(8298.98),
                                        add(2871.19),
                                        add(9682.87),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(9233.06),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios(                new Double[]{{
                                        add(360.33),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(9197.83),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisDiversificationRatioRequestBody2Portfolios(                new Double[]{{
                                        add(3891.35),
                                        add(2465.35),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(1747.72),
                        }};
                    }}),
                }};
            }}            

            PostPortfolioAnalysisDiversificationRatioResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisDiversificationRatio(req);

            if (res.postPortfolioAnalysisDiversificationRatio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisDrawdowns

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).

References
* [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDrawdownsRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDrawdownsRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisDrawdownsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisDrawdownsRequestBody req = new PostPortfolioAnalysisDrawdownsRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisDrawdownsRequestBodyPortfolios(                new Double[]{{
                                                    add(5289.4),
                                                    add(5230.06),
                                                    add(3044.46),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6725.82),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDrawdownsRequestBodyPortfolios(                new Double[]{{
                                                    add(5973.03),
                                                    add(4706.49),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(9979.63),
                                        add(30.99),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDrawdownsRequestBodyPortfolios(                new Double[]{{
                                                    add(1746.58),
                                                    add(6638.66),
                                                    add(3279.88),
                                                    add(2931.44),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(3782.45),
                                        add(51.89),
                                        add(9795.27),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisDrawdownsRequestBodyPortfolios(                new Double[]{{
                                                    add(3092.51),
                                                    add(4776.46),
                                                    add(4032.18),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2003.64),
                                        add(632.07),
                                        add(9257.03),
                                    }};
                                }}),
                            }});            

            PostPortfolioAnalysisDrawdownsResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisDrawdowns(req);

            if (res.postPortfolioAnalysisDrawdowns200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisEffectiveNumberOfBets

Compute the effective number of bets of one or several portfolio(s).

References
* [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisEffectiveNumberOfBetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody req = new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBody(633062L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(5145.13),
                                    add(4326.06),
                                    add(3679.27),
                                    add(9282.19),
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios(                new Double[]{{
                                                    add(1334.39),
                                                    add(3545.06),
                                                    add(968.04),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(3374.77),
                                        add(4317.85),
                                        add(9704.94),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyPortfolios(                new Double[]{{
                                                    add(6591.77),
                                                    add(4027.67),
                                                    add(3972.57),
                                                    add(375.65),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(3433.92),
                                        add(6523.09),
                                        add(5910.27),
                                    }};
                                }}),
                            }}) {{
                factorsExtractionMethod = PostPortfolioAnalysisEffectiveNumberOfBetsRequestBodyFactorsExtractionMethodEnum.APPROXIMATE_MINIMUM_LINEAR_TORSION;
            }};            

            PostPortfolioAnalysisEffectiveNumberOfBetsResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisEffectiveNumberOfBets(req);

            if (res.postPortfolioAnalysisEffectiveNumberOfBets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisFactorsExposures

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.

References
* [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresRequestBodyFactors;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisFactorsExposuresRequestBody req = new PostPortfolioAnalysisFactorsExposuresRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios(                new Double[]{{
                                                    add(6720.41),
                                                    add(8130.54),
                                                    add(2666.97),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(7214.07),
                                        add(9376.36),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios(                new Double[]{{
                                                    add(6982.49),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(5640.64),
                                        add(8897.94),
                                        add(9569.33),
                                        add(7645.62),
                                    }};
                                }}),
                            }}) {{
                factors = new org.openapis.openapi.models.operations.PostPortfolioAnalysisFactorsExposuresRequestBodyFactors[]{{
                    add(new PostPortfolioAnalysisFactorsExposuresRequestBodyFactors(                new Double[]{{
                                        add(626.36),
                                        add(216.88),
                                        add(2419.01),
                                        add(1372.51),
                                    }}) {{
                        factorReturns = new Double[]{{
                            add(820.57),
                            add(1476.85),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisFactorsExposuresRequestBodyFactors(                new Double[]{{
                                        add(7730.84),
                                        add(1794.1),
                                        add(9587.41),
                                        add(4332.79),
                                    }}) {{
                        factorReturns = new Double[]{{
                            add(2606.28),
                            add(5219.96),
                        }};
                    }}),
                }};
            }};            

            PostPortfolioAnalysisFactorsExposuresResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisFactorsExposures(req);

            if (res.postPortfolioAnalysisFactorsExposures200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisMeanVarianceEfficientFrontier

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody req = new PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody(325118L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(5896.95),
                                    add(9364.69),
                                    add(7453.98),
                                }}),
                            }},                 new Double[]{{
                                add(8481.51),
                                add(525.08),
                                add(9358.33),
                                add(5962.11),
                            }}) {{
                constraints = new PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(399802L),
                            add(780931L),
                            add(380335L),
                            add(211534L),
                        }}),
                        add(new Long[]{{
                            add(764995L),
                        }}),
                        add(new Long[]{{
                            add(189062L),
                            add(656762L),
                            add(898760L),
                        }}),
                        add(new Long[]{{
                            add(8931L),
                            add(97258L),
                            add(90233L),
                            add(497777L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(3824.4),
                            add(2415.57),
                            add(965.62),
                        }}),
                        add(new Double[]{{
                            add(9849.34),
                        }}),
                        add(new Double[]{{
                            add(8965.82),
                            add(585.34),
                            add(2711.13),
                            add(4706.21),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(1158.34),
                        add(4797.54),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(5083.9),
                        add(9799.63),
                    }};
                    maximumPortfolioExposure = 9672.6;
                    minimumAssetsWeights = new Double[]{{
                        add(999.58),
                        add(8571.25),
                    }};
                    minimumPortfolioExposure = 396.5;
                }};;
                portfolios = 117315L;
            }};            

            PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisMeanVarianceEfficientFrontier(req);

            if (res.postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

> This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody req = new PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody(271252L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2352.63),
                                    add(3998.12),
                                }}),
                                add(new Double[]{{
                                    add(6713.84),
                                }}),
                            }},                 new Double[]{{
                                add(3447.18),
                            }}) {{
                constraints = new PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints() {{
                    assetsGroups = new Long[][]{{
                        add(new Long[]{{
                            add(399667L),
                            add(639187L),
                            add(381397L),
                        }}),
                        add(new Long[]{{
                            add(21973L),
                            add(431760L),
                        }}),
                        add(new Long[]{{
                            add(614528L),
                            add(661607L),
                        }}),
                        add(new Long[]{{
                            add(625358L),
                        }}),
                    }};
                    assetsGroupsMatrix = new Double[][]{{
                        add(new Double[]{{
                            add(6534.21),
                            add(6717.94),
                            add(7263.43),
                            add(3240.83),
                        }}),
                        add(new Double[]{{
                            add(3162.2),
                            add(1104.77),
                            add(8333.16),
                        }}),
                        add(new Double[]{{
                            add(7758.03),
                            add(4053.73),
                        }}),
                        add(new Double[]{{
                            add(3210.43),
                            add(7139.27),
                        }}),
                    }};
                    maximumAssetsGroupsWeights = new Double[]{{
                        add(5615.77),
                    }};
                    maximumAssetsWeights = new Double[]{{
                        add(3996.6),
                        add(1097.84),
                        add(5308.6),
                    }};
                    maximumPortfolioExposure = 6063.08;
                    minimumAssetsWeights = new Double[]{{
                        add(7032.18),
                    }};
                    minimumPortfolioExposure = 6656.78;
                }};;
                portfolios = 634786L;
            }};            

            PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(req);

            if (res.postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisReturn

Compute the arithmetic return of one or several portfolio(s) from either:  
* Portfolio assets arithmetic returns
* Portfolio values

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisReturnRequestBody2(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisReturnRequestBody2Portfolios(                new Double[]{{
                                                    add(249.44),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2213.96),
                                        add(86.89),
                                    }};
                                }}),
                            }}) {{
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisReturnRequestBody2Portfolios(                new Double[]{{
                                        add(8913.15),
                                        add(291.9),
                                        add(12.07),
                                        add(5349.17),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(6821.19),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisReturnRequestBody2Portfolios(                new Double[]{{
                                        add(9920.74),
                                        add(1905.67),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(4042.44),
                            add(9583.08),
                            add(5241.84),
                            add(7963.2),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisReturnRequestBody2Portfolios(                new Double[]{{
                                        add(7706.75),
                                        add(8427.77),
                                        add(7205.28),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(191.22),
                            add(8483.41),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisReturnRequestBody2Portfolios(                new Double[]{{
                                        add(805.32),
                                        add(5372.79),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(6334.15),
                            add(2228.64),
                        }};
                    }}),
                }};
            }}            

            PostPortfolioAnalysisReturnResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisReturn(req);

            if (res.postPortfolioAnalysisReturn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisReturnsAverage

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnsAverageRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnsAverageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisReturnsAverageRequestBody req = new PostPortfolioAnalysisReturnsAverageRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios(                new Double[]{{
                                                    add(2226.58),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(5137.6),
                                    }};
                                }}),
                            }});            

            PostPortfolioAnalysisReturnsAverageResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisReturnsAverage(req);

            if (res.postPortfolioAnalysisReturnsAverage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisTrackingError

Compute the tracking error between a benchmark and one or several portfolio(s).

References
* [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisTrackingErrorRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisTrackingErrorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisTrackingErrorRequestBody req = new PostPortfolioAnalysisTrackingErrorRequestBody(                new Double[]{{
                                add(1621.2),
                                add(551.07),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios(                new Double[]{{
                                                    add(3321.91),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(7734.56),
                                        add(8849.52),
                                        add(4564.1),
                                        add(8972.77),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios(                new Double[]{{
                                                    add(4269.43),
                                                    add(5282.34),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(7129.27),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios(                new Double[]{{
                                                    add(4218.44),
                                                    add(7510.22),
                                                    add(3883.19),
                                                    add(9272.12),
                                                }}) {{
                                    portfolioReturns = new Double[]{{
                                        add(3494.4),
                                        add(704.1),
                                    }};
                                }}),
                            }});            

            PostPortfolioAnalysisTrackingErrorResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisTrackingError(req);

            if (res.postPortfolioAnalysisTrackingError200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisUlcerIndex

Compute the Ulcer Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerIndexRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisUlcerIndexRequestBody req = new PostPortfolioAnalysisUlcerIndexRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisUlcerIndexRequestBodyPortfolios(                new Double[]{{
                                                    add(8711.03),
                                                    add(8783.73),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(8956.92),
                                        add(956.19),
                                    }};
                                }}),
                            }}, 6675.93);            

            PostPortfolioAnalysisUlcerIndexResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisUlcerIndex(req);

            if (res.postPortfolioAnalysisUlcerIndex200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisUlcerPerformanceIndex

Compute the Ulcer Performance Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerPerformanceIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisUlcerPerformanceIndexRequestBody req = new PostPortfolioAnalysisUlcerPerformanceIndexRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisUlcerPerformanceIndexRequestBodyPortfolios(                new Double[]{{
                                                    add(5010.63),
                                                    add(6423.52),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(9180.92),
                                        add(7592.83),
                                        add(5796.81),
                                        add(3645.44),
                                    }};
                                }}),
                            }}, 3763.89);            

            PostPortfolioAnalysisUlcerPerformanceIndexResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisUlcerPerformanceIndex(req);

            if (res.postPortfolioAnalysisUlcerPerformanceIndex200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisVolatility

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
* Portfolio assets covariance matrix
* Portfolio values

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisVolatilityRequestBody1(608593L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(5076.36),
                                    add(8026.92),
                                }}),
                                add(new Double[]{{
                                    add(8363.64),
                                    add(5495.01),
                                }}),
                                add(new Double[]{{
                                    add(9308.19),
                                    add(4156.08),
                                }}),
                                add(new Double[]{{
                                    add(9366.18),
                                    add(2672.07),
                                    add(7221.84),
                                }}),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody1Portfolios[]{{
                                add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                                    add(13.83),
                                                    add(938.94),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(3719.19),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                                    add(5752.13),
                                                    add(8587.78),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(9785.48),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                                    add(3361.02),
                                                    add(5718.44),
                                                    add(8806.79),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(4585.03),
                                        add(3644.63),
                                        add(4445.87),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                                    add(8953.46),
                                                    add(9661.48),
                                                }}) {{
                                    assetsWeights = new Double[]{{
                                        add(9450.27),
                                        add(9001.03),
                                        add(9918.91),
                                        add(4043.06),
                                    }};
                                }}),
                            }}) {{
                assets = 551079L;
                assetsCovarianceMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(4959.7),
                    }}),
                    add(new Double[]{{
                        add(6817.4),
                    }}),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisVolatilityRequestBody1Portfolios[]{{
                    add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                        add(1173.8),
                                        add(3955.44),
                                        add(1598.45),
                                        add(2330.78),
                                    }}) {{
                        assetsWeights = new Double[]{{
                            add(974.93),
                            add(5243.8),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                        add(7468.37),
                                        add(38.6),
                                        add(6089.89),
                                        add(1785.8),
                                    }}) {{
                        assetsWeights = new Double[]{{
                            add(5854.32),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisVolatilityRequestBody1Portfolios(                new Double[]{{
                                        add(8818.97),
                                        add(9768.02),
                                        add(7196.2),
                                    }}) {{
                        assetsWeights = new Double[]{{
                            add(6128.67),
                            add(1700.99),
                            add(813.69),
                        }};
                    }}),
                }};
            }}            

            PostPortfolioAnalysisVolatilityResponse res = sdk.portfolioAnalysis.postPortfolioAnalysisVolatility(req);

            if (res.postPortfolioAnalysisVolatility200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
