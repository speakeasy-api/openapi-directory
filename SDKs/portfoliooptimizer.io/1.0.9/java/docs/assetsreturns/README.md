# assetsReturns

### Available Operations

* [postAssetsReturns](#postassetsreturns) - Arithmetic Returns
* [postAssetsReturnsAverage](#postassetsreturnsaverage) - Arithmetic Average Return
* [postAssetsReturnsLogarithmic](#postassetsreturnslogarithmic) - Logarithmic Returns
* [postAssetsReturnsTurbulencePartitioned](#postassetsreturnsturbulencepartitioned) - Turbulence-partitioned Asset Returns

## postAssetsReturns

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsReturnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsRequestBody req = new PostAssetsReturnsRequestBody(                new org.openapis.openapi.models.operations.PostAssetsReturnsRequestBodyAssets[]{{
                                add(new PostAssetsReturnsRequestBodyAssets(                new Double[]{{
                                                    add(4764.77),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(5919.35),
                                    }};
                                }}),
                                add(new PostAssetsReturnsRequestBodyAssets(                new Double[]{{
                                                    add(4561.41),
                                                    add(5245.93),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(4879.35),
                                        add(2621.18),
                                    }};
                                }}),
                            }});            

            PostAssetsReturnsResponse res = sdk.assetsReturns.postAssetsReturns(req);

            if (res.postAssetsReturns200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsReturnsAverage

Compute the arithmetic average of the return(s) of one or several asset(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsAverageRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsAverageRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsReturnsAverageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsAverageRequestBody req = new PostAssetsReturnsAverageRequestBody(                new org.openapis.openapi.models.operations.PostAssetsReturnsAverageRequestBodyAssets[]{{
                                add(new PostAssetsReturnsAverageRequestBodyAssets(                new Double[]{{
                                                    add(8268.71),
                                                    add(1811.51),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(8526.35),
                                        add(2835.19),
                                        add(4334.39),
                                    }};
                                }}),
                                add(new PostAssetsReturnsAverageRequestBodyAssets(                new Double[]{{
                                                    add(6969.97),
                                                    add(2065.94),
                                                    add(7786.96),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(7885.46),
                                        add(863.77),
                                        add(568.48),
                                    }};
                                }}),
                            }});            

            PostAssetsReturnsAverageResponse res = sdk.assetsReturns.postAssetsReturnsAverage(req);

            if (res.postAssetsReturnsAverage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsReturnsLogarithmic

Compute the logarithmic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Logarithmic or continuously compounded return](https://en.wikipedia.org/wiki/Rate_of_return#Logarithmic_or_continuously_compounded_return)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsLogarithmicRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsLogarithmicRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsReturnsLogarithmicResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsLogarithmicRequestBody req = new PostAssetsReturnsLogarithmicRequestBody(                new org.openapis.openapi.models.operations.PostAssetsReturnsLogarithmicRequestBodyAssets[]{{
                                add(new PostAssetsReturnsLogarithmicRequestBodyAssets(                new Double[]{{
                                                    add(5876),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2594.22),
                                        add(1783.67),
                                        add(3738.13),
                                    }};
                                }}),
                                add(new PostAssetsReturnsLogarithmicRequestBodyAssets(                new Double[]{{
                                                    add(3708.53),
                                                    add(1334.65),
                                                    add(1970.54),
                                                    add(7791.92),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(2728.22),
                                    }};
                                }}),
                                add(new PostAssetsReturnsLogarithmicRequestBodyAssets(                new Double[]{{
                                                    add(7997.96),
                                                    add(4908.19),
                                                    add(769.56),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(9251.64),
                                        add(446.12),
                                    }};
                                }}),
                                add(new PostAssetsReturnsLogarithmicRequestBodyAssets(                new Double[]{{
                                                    add(4884.1),
                                                    add(5775.43),
                                                }}) {{
                                    assetPrices = new Double[]{{
                                        add(5188.35),
                                        add(8827.1),
                                    }};
                                }}),
                            }});            

            PostAssetsReturnsLogarithmicResponse res = sdk.assetsReturns.postAssetsReturnsLogarithmic(req);

            if (res.postAssetsReturnsLogarithmic200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsReturnsTurbulencePartitioned

Partition asset returns into several subsets based on their turbulence index.

References
* [George Chow, Jacquier, E., Kritzman, M., & Kenneth Lowry. (1999). Optimal Portfolios in Good Times and Bad. Financial Analysts Journal, 55(3), 65–73.](https://www.jstor.org/stable/4480169)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsReturnsTurbulencePartitionedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsReturnsTurbulencePartitionedRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsReturnsTurbulencePartitionedRequestBodyTurbulenceThresholdsConversionMethodEnum;
import org.openapis.openapi.models.operations.PostAssetsReturnsTurbulencePartitionedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsReturnsTurbulencePartitionedRequestBody req = new PostAssetsReturnsTurbulencePartitionedRequestBody(                new org.openapis.openapi.models.operations.PostAssetsReturnsTurbulencePartitionedRequestBodyAssets[]{{
                                add(new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(                new Double[]{{
                                                    add(353.62),
                                                    add(7836.48),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6455.7),
                                    }};
                                }}),
                                add(new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(                new Double[]{{
                                                    add(5361.78),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(5564.29),
                                        add(5100.17),
                                    }};
                                }}),
                                add(new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(                new Double[]{{
                                                    add(2775.96),
                                                    add(5392.24),
                                                    add(1288.6),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6813.93),
                                    }};
                                }}),
                                add(new PostAssetsReturnsTurbulencePartitionedRequestBodyAssets(                new Double[]{{
                                                    add(1598.7),
                                                    add(1871.31),
                                                    add(1294.12),
                                                    add(9039.84),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(3926.76),
                                        add(1470.14),
                                    }};
                                }}),
                            }},                 new Double[]{{
                                add(5438.06),
                                add(922.6),
                                add(4569.11),
                            }}) {{
                turbulenceThresholdsConversionMethod = PostAssetsReturnsTurbulencePartitionedRequestBodyTurbulenceThresholdsConversionMethodEnum.CHISQUARE_INVERSE_DISTRIBUTION;
            }};            

            PostAssetsReturnsTurbulencePartitionedResponse res = sdk.assetsReturns.postAssetsReturnsTurbulencePartitioned(req);

            if (res.postAssetsReturnsTurbulencePartitioned200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
