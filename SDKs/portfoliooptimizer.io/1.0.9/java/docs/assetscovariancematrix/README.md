# assetsCovarianceMatrix

### Available Operations

* [postAssetsCovarianceMatrix](#postassetscovariancematrix) - Covariance Matrix
* [postAssetsCovarianceMatrixEffectiveRank](#postassetscovariancematrixeffectiverank) - Covariance Matrix Effective Rank
* [postAssetsCovarianceMatrixExponentiallyWeighted](#postassetscovariancematrixexponentiallyweighted) - Exponentially Weighted Covariance Matrix
* [postAssetsCovarianceMatrixValidation](#postassetscovariancematrixvalidation) - Covariance Matrix Validation

## postAssetsCovarianceMatrix

Compute the covariance matrix of assets from either:  
* The asset correlation matrix and their volatilities (i.e., standard deviations)
* The asset correlation matrix and their variances
* The asset returns

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixRequestBody1;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixRequestBody1Assets;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixRequestBody2;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixRequestBody3;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostAssetsCovarianceMatrixRequestBody3(896547L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(972.6),
                                    add(4358.65),
                                }}),
                            }},                 new Double[]{{
                                add(8919.24),
                                add(2603.41),
                                add(8061.94),
                                add(5370.23),
                            }}) {{
                assets = 428769L;
                assetsCorrelationMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(1028.63),
                    }}),
                    add(new Double[]{{
                        add(923.73),
                        add(5699.65),
                    }}),
                    add(new Double[]{{
                        add(5908.73),
                        add(5518.16),
                    }}),
                    add(new Double[]{{
                        add(336.25),
                        add(6532.01),
                        add(9689.62),
                    }}),
                }};
                assetsVolatilities = new Double[]{{
                    add(3209.97),
                    add(4314.18),
                    add(2212.62),
                }};
            }}            

            PostAssetsCovarianceMatrixResponse res = sdk.assetsCovarianceMatrix.postAssetsCovarianceMatrix(req);

            if (res.postAssetsCovarianceMatrix200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCovarianceMatrixEffectiveRank

Compute the effective rank of an asset covariance matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixEffectiveRankRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixEffectiveRankResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCovarianceMatrixEffectiveRankRequestBody req = new PostAssetsCovarianceMatrixEffectiveRankRequestBody(447926L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(9194.83),
                                }}),
                            }});            

            PostAssetsCovarianceMatrixEffectiveRankResponse res = sdk.assetsCovarianceMatrix.postAssetsCovarianceMatrixEffectiveRank(req);

            if (res.postAssetsCovarianceMatrixEffectiveRank200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCovarianceMatrixExponentiallyWeighted

Compute an exponentially weighted covariance matrix of assets returns.

References
* [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixExponentiallyWeightedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody req = new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBody(                new org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets[]{{
                                add(new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(                new Double[]{{
                                                    add(9046.48),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(9988.48),
                                        add(8411.4),
                                    }};
                                }}),
                                add(new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(                new Double[]{{
                                                    add(1238.2),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(375.59),
                                        add(1624.93),
                                        add(5083.15),
                                        add(6155.6),
                                    }};
                                }}),
                                add(new PostAssetsCovarianceMatrixExponentiallyWeightedRequestBodyAssets(                new Double[]{{
                                                    add(1399.72),
                                                    add(4071.83),
                                                    add(332.22),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(8480.09),
                                        add(8649.34),
                                        add(8073.19),
                                        add(4113.97),
                                    }};
                                }}),
                            }}) {{
                decayFactor = 691.67;
            }};            

            PostAssetsCovarianceMatrixExponentiallyWeightedResponse res = sdk.assetsCovarianceMatrix.postAssetsCovarianceMatrixExponentiallyWeighted(req);

            if (res.postAssetsCovarianceMatrixExponentiallyWeighted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCovarianceMatrixValidation

Validate whether a matrix is a covariance matrix.

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixValidationRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCovarianceMatrixValidationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCovarianceMatrixValidationRequestBody req = new PostAssetsCovarianceMatrixValidationRequestBody(697429L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(4200.75),
                                    add(7220.56),
                                }}),
                                add(new Double[]{{
                                    add(8663.83),
                                }}),
                            }});            

            PostAssetsCovarianceMatrixValidationResponse res = sdk.assetsCovarianceMatrix.postAssetsCovarianceMatrixValidation(req);

            if (res.postAssetsCovarianceMatrixValidation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
