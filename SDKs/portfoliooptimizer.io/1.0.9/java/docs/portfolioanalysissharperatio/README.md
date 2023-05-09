# portfolioAnalysisSharpeRatio

### Available Operations

* [postPortfolioAnalysisSharpeRatio](#postportfolioanalysissharperatio) - Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioBiasAdjusted](#postportfolioanalysissharperatiobiasadjusted) - Bias-Adjusted Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioConfidenceInterval](#postportfolioanalysissharperatioconfidenceinterval) - Sharpe Ratio Confidence Interval
* [postPortfolioAnalysisSharpeRatioProbabilistic](#postportfolioanalysissharperatioprobabilistic) - Probabilistic Sharpe Ratio
* [postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength](#postportfolioanalysissharperatioprobabilisticminimumtrackrecordlength) - Minimum Track Record Length

## postPortfolioAnalysisSharpeRatio

Compute the Sharpe ratio of one or several portfolio(s) from either:
* Portfolio assets arithmetic returns and assets covariance matrix
* Portfolio values

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisSharpeRatioRequestBody2(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(                new Double[]{{
                                                    add(5269.07),
                                                    add(6780.6),
                                                    add(4876.76),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(4030.26),
                                        add(3676.26),
                                        add(7452.33),
                                    }};
                                }}),
                            }}, 1446.91) {{
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(                new Double[]{{
                                        add(7699.67),
                                        add(3730.4),
                                        add(3574.25),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(4555.79),
                            add(3519.36),
                            add(6001.93),
                            add(8975.43),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(                new Double[]{{
                                        add(8744),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(6216.66),
                            add(4568.85),
                            add(2885.7),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioRequestBody2Portfolios(                new Double[]{{
                                        add(2124.34),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(1124.27),
                        }};
                    }}),
                }};
                riskFreeRate = 3220.17;
            }}            

            PostPortfolioAnalysisSharpeRatioResponse res = sdk.portfolioAnalysisSharpeRatio.postPortfolioAnalysisSharpeRatio(req);

            if (res.postPortfolioAnalysisSharpeRatio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisSharpeRatioBiasAdjusted

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.

References
* [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody req = new PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBodyPortfolios(                new Double[]{{
                                                    add(2082.53),
                                                    add(3483.57),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(644.35),
                                        add(635.53),
                                    }};
                                }}),
                            }}, 9323.94);            

            PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse res = sdk.portfolioAnalysisSharpeRatio.postPortfolioAnalysisSharpeRatioBiasAdjusted(req);

            if (res.postPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisSharpeRatioConfidenceInterval

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody req = new PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody(                new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios[]{{
                                add(new PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios(                new Double[]{{
                                                    add(1591.46),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(8583.38),
                                        add(7143.76),
                                        add(8028.94),
                                    }};
                                }}),
                            }}, 3421.37) {{
                confidenceIntervalType = PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum.LOWER_ONE_SIDED;
                confidenceLevel = 7272.5;
            }};            

            PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse res = sdk.portfolioAnalysisSharpeRatio.postPortfolioAnalysisSharpeRatioConfidenceInterval(req);

            if (res.postPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisSharpeRatioProbabilistic

Compute the probabilistic Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2(                new Double[]{{
                                add(5750.78),
                                add(4097.26),
                                add(4218.19),
                            }},                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios[]{{
                                add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                                    add(7372.79),
                                                    add(8723.03),
                                                    add(51.52),
                                                    add(1566.53),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(5156.38),
                                        add(3572.07),
                                        add(8890.6),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                                    add(8852.08),
                                                    add(1770.05),
                                                    add(8448.54),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(6841.26),
                                        add(9195.08),
                                        add(340.7),
                                    }};
                                }}),
                            }}, 4835.18) {{
                benchmarkValues = new Double[]{{
                    add(8544.6),
                    add(6374.62),
                    add(5546.03),
                }};
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios[]{{
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                        add(9148.64),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(4793.85),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                        add(2928.88),
                                        add(7551.06),
                                        add(7150.53),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(493.48),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                        add(1729.51),
                                        add(8247.98),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(4181.09),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticRequestBody2Portfolios(                new Double[]{{
                                        add(5459.18),
                                        add(4731.43),
                                        add(5888.12),
                                        add(8822.84),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(6686.06),
                        }};
                    }}),
                }};
                riskFreeRate = 8964.8;
            }}            

            PostPortfolioAnalysisSharpeRatioProbabilisticResponse res = sdk.portfolioAnalysisSharpeRatio.postPortfolioAnalysisSharpeRatioProbabilistic(req);

            if (res.postPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength

Compute the minimum track record length of one or several portfolio(s).

References
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody2;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody2Portfolios;
import org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1(1855.18,                 new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios[]{{
                                add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                                    add(2040.72),
                                                    add(4468.77),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(5873.75),
                                        add(3262.69),
                                        add(8095.94),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                                    add(9781.73),
                                                    add(7317.44),
                                                    add(460.13),
                                                    add(7275.47),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(4330.77),
                                        add(2664.08),
                                        add(3573.47),
                                        add(2982.64),
                                    }};
                                }}),
                                add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                                    add(5777.09),
                                                    add(3759.94),
                                                    add(7791.8),
                                                }}) {{
                                    portfolioValues = new Double[]{{
                                        add(2899.13),
                                    }};
                                }}),
                            }}, 2420.99) {{
                benchmarkSharpeRatio = 1276.88;
                confidenceLevel = 3589.95;
                portfolios = new org.openapis.openapi.models.operations.PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios[]{{
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                        add(3396.31),
                                        add(1062.55),
                                        add(6002.13),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(2393.37),
                            add(9233.06),
                            add(6308.71),
                            add(2828.37),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                        add(2536.25),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(9631.98),
                            add(5855.93),
                        }};
                    }}),
                    add(new PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRequestBody1Portfolios(                new Double[]{{
                                        add(4918.92),
                                        add(7607.44),
                                        add(8989.61),
                                    }}) {{
                        portfolioValues = new Double[]{{
                            add(2010.1),
                            add(8735.57),
                        }};
                    }}),
                }};
                riskFreeRate = 3591.11;
            }}            

            PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse res = sdk.portfolioAnalysisSharpeRatio.postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength(req);

            if (res.postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
