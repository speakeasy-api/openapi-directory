# assetsCorrelationMatrix

### Available Operations

* [postAssetsCorrelationMatrix](#postassetscorrelationmatrix) - Correlation Matrix
* [postAssetsCorrelationMatrixBounds](#postassetscorrelationmatrixbounds) - Correlation Matrix Bounds
* [postAssetsCorrelationMatrixDenoised](#postassetscorrelationmatrixdenoised) - Denoised Correlation Matrix
* [postAssetsCorrelationMatrixDistance](#postassetscorrelationmatrixdistance) - Correlation Matrix Distance
* [postAssetsCorrelationMatrixEffectiveRank](#postassetscorrelationmatrixeffectiverank) - Correlation Matrix Effective Rank
* [postAssetsCorrelationMatrixInformativeness](#postassetscorrelationmatrixinformativeness) - Correlation Matrix Informativeness
* [postAssetsCorrelationMatrixNearest](#postassetscorrelationmatrixnearest) - Nearest Correlation Matrix
* [postAssetsCorrelationMatrixRandom](#postassetscorrelationmatrixrandom) - Random Correlation Matrix
* [postAssetsCorrelationMatrixShrinkage](#postassetscorrelationmatrixshrinkage) - Correlation Matrix Shrinkage
* [postAssetsCorrelationMatrixTheoryImplied](#postassetscorrelationmatrixtheoryimplied) - Theory-Implied Correlation Matrix
* [postAssetsCorrelationMatrixValidation](#postassetscorrelationmatrixvalidation) - Correlation Matrix Validation

## postAssetsCorrelationMatrix

Compute the Pearson asset correlation matrix from either:  
* The asset returns
* The asset covariance matrix

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixRequestBody1;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixRequestBody1Assets;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixRequestBody2;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostAssetsCorrelationMatrixRequestBody2(537373L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(5218.48),
                                    add(1059.07),
                                    add(4146.62),
                                    add(4736),
                                }}),
                                add(new Double[]{{
                                    add(1863.32),
                                    add(7742.34),
                                }}),
                                add(new Double[]{{
                                    add(4561.5),
                                    add(2165.5),
                                    add(5684.34),
                                }}),
                                add(new Double[]{{
                                    add(187.89),
                                }}),
                            }}) {{
                assets = 800911L;
                assetsCovarianceMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(7805.29),
                        add(6788.8),
                        add(1182.74),
                    }}),
                    add(new Double[]{{
                        add(6399.21),
                        add(5820.2),
                        add(1433.53),
                    }}),
                }};
            }}            

            PostAssetsCorrelationMatrixResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrix(req);

            if (res.postAssetsCorrelationMatrix200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixBounds

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
 
 References
 * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixBoundsRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixBoundsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixBoundsRequestBody req = new PostAssetsCorrelationMatrixBoundsRequestBody(617636L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2223.21),
                                    add(6169.34),
                                    add(3864.89),
                                }}),
                            }},                 new Long[]{{
                                add(902599L),
                                add(681820L),
                                add(449950L),
                                add(359508L),
                            }});            

            PostAssetsCorrelationMatrixBoundsResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixBounds(req);

            if (res.postAssetsCorrelationMatrixBounds200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixDenoised

Compute a denoised asset correlation matrix, using one of the following methods:
 * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
 
 References
 * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDenoisedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDenoisedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixDenoisedRequestBody req = new PostAssetsCorrelationMatrixDenoisedRequestBody(437032L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(992.8),
                                    add(602.25),
                                    add(9698.1),
                                }}),
                                add(new Double[]{{
                                    add(6531.4),
                                    add(6706.38),
                                    add(1709.09),
                                }}),
                                add(new Double[]{{
                                    add(3581.52),
                                }}),
                                add(new Double[]{{
                                    add(7506.86),
                                }}),
                            }}, 3154.28) {{
                denoisingMethod = PostAssetsCorrelationMatrixDenoisedRequestBodyDenoisingMethodEnum.EIGENVALUES_CLIPPING;
            }};            

            PostAssetsCorrelationMatrixDenoisedResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixDenoised(req);

            if (res.postAssetsCorrelationMatrixDenoised200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixDistance

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the second reference

 References
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDistanceRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixDistanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixDistanceRequestBody req = new PostAssetsCorrelationMatrixDistanceRequestBody(363711L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(384.25),
                                    add(4386.01),
                                    add(6342.74),
                                }}),
                                add(new Double[]{{
                                    add(9589.5),
                                    add(1020.44),
                                    add(6527.9),
                                    add(2088.76),
                                }}),
                            }},                 new Double[][]{{
                                add(new Double[]{{
                                    add(9953),
                                }}),
                                add(new Double[]{{
                                    add(5818.5),
                                    add(2532.91),
                                    add(4143.69),
                                }}),
                                add(new Double[]{{
                                    add(4746.97),
                                    add(2444.25),
                                }}),
                            }}) {{
                distanceMetric = PostAssetsCorrelationMatrixDistanceRequestBodyDistanceMetricEnum.CORRELATION_MATRIX;
            }};            

            PostAssetsCorrelationMatrixDistanceResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixDistance(req);

            if (res.postAssetsCorrelationMatrixDistance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixEffectiveRank

Compute the effective rank of an asset correlation matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixEffectiveRankRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixEffectiveRankResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixEffectiveRankRequestBody req = new PostAssetsCorrelationMatrixEffectiveRankRequestBody(338007L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(6563.3),
                                    add(3172.02),
                                    add(1381.83),
                                }}),
                            }});            

            PostAssetsCorrelationMatrixEffectiveRankResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixEffectiveRank(req);

            if (res.postAssetsCorrelationMatrixEffectiveRank200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixInformativeness

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the third reference

 References
 * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixInformativenessRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixInformativenessResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixInformativenessRequestBody req = new PostAssetsCorrelationMatrixInformativenessRequestBody(196582L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(6625.27),
                                    add(8209.94),
                                }}),
                                add(new Double[]{{
                                    add(971.01),
                                }}),
                                add(new Double[]{{
                                    add(8379.45),
                                    add(6736.6),
                                    add(960.98),
                                }}),
                                add(new Double[]{{
                                    add(9764.6),
                                    add(8781.94),
                                    add(4686.51),
                                    add(5096.24),
                                }}),
                            }}) {{
                distanceMetric = PostAssetsCorrelationMatrixInformativenessRequestBodyDistanceMetricEnum.BURES;
            }};            

            PostAssetsCorrelationMatrixInformativenessResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixInformativeness(req);

            if (res.postAssetsCorrelationMatrixInformativeness200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixNearest

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.

References
* [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixNearestRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixNearestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixNearestRequestBody req = new PostAssetsCorrelationMatrixNearestRequestBody(604846L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(199.87),
                                    add(391.87),
                                    add(4417.11),
                                }}),
                                add(new Double[]{{
                                    add(9795.87),
                                    add(1201.96),
                                }}),
                            }}) {{
                assetsFixedCorrelations = new Long[][]{{
                    add(new Long[]{{
                        add(480894L),
                        add(118727L),
                    }}),
                    add(new Long[]{{
                        add(317983L),
                        add(880476L),
                        add(414263L),
                    }}),
                }};
            }};            

            PostAssetsCorrelationMatrixNearestResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixNearest(req);

            if (res.postAssetsCorrelationMatrixNearest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixRandom

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.

References
* [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixRandomRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixRandomResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixRandomRequestBody req = new PostAssetsCorrelationMatrixRandomRequestBody(64147L);            

            PostAssetsCorrelationMatrixRandomResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixRandom(req);

            if (res.postAssetsCorrelationMatrixRandom200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixShrinkage

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:  
 * An equicorrelation matrix made of 1
 * An equicorrelation matrix made of 0
 * An equicorrelation matrix made of -1/(n-1), with n the number of assets
 * A provided correlation matrix
 
 References
 * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixShrinkageRequestBody1;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixShrinkageRequestBody1TargetEquicorrelationMatrixEnum;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixShrinkageRequestBody2;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixShrinkageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostAssetsCorrelationMatrixShrinkageRequestBody2(716327L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(2647.3),
                                    add(1831.91),
                                }}),
                                add(new Double[]{{
                                    add(5865.13),
                                    add(5528.22),
                                }}),
                                add(new Double[]{{
                                    add(1649.4),
                                }}),
                                add(new Double[]{{
                                    add(3698.08),
                                    add(46.95),
                                    add(1464.41),
                                    add(6778.17),
                                }}),
                            }}, 5696.18,                 new Double[][]{{
                                add(new Double[]{{
                                    add(7351.94),
                                    add(2884.76),
                                    add(9621.89),
                                }}),
                                add(new Double[]{{
                                    add(2487.53),
                                    add(7561.07),
                                }}),
                            }}) {{
                assets = 565189L;
                assetsCorrelationMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(2653.89),
                        add(5089.69),
                        add(5232.48),
                        add(9167.23),
                    }}),
                    add(new Double[]{{
                        add(9211.58),
                    }}),
                    add(new Double[]{{
                        add(831.12),
                        add(9292.97),
                        add(2777.18),
                    }}),
                }};
                shrinkageFactor = 3185.69;
                targetCorrelationMatrix = new Double[][]{{
                    add(new Double[]{{
                        add(8423.42),
                        add(1317.97),
                        add(6471.74),
                    }}),
                }};
            }}            

            PostAssetsCorrelationMatrixShrinkageResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixShrinkage(req);

            if (res.postAssetsCorrelationMatrixShrinkage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixTheoryImplied

Compute the theory-implied asset correlation matrix associated with:
* A hierarchical classification of a universe of assets
* An asset correlation matrix

References
* [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixTheoryImpliedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixTheoryImpliedRequestBody req = new PostAssetsCorrelationMatrixTheoryImpliedRequestBody(                new org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets[]{{
                                add(new PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets(                new Object[]{{
                                                    add("in"),
                                                    add(978571L),
                                                    add(116202L),
                                                }}) {{
                                    assetHierarchicalClassification = new Object[]{{
                                        add(572252L),
                                        add(223081L),
                                        add(952749L),
                                    }};
                                }}),
                                add(new PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets(                new Object[]{{
                                                    add(249796L),
                                                    add(313218L),
                                                    add(965417L),
                                                }}) {{
                                    assetHierarchicalClassification = new Object[]{{
                                        add(813798L),
                                        add("aliquid"),
                                    }};
                                }}),
                            }},                 new Double[][]{{
                                add(new Double[]{{
                                    add(7252.55),
                                    add(6596.69),
                                    add(5013.24),
                                }}),
                                add(new Double[]{{
                                    add(9560.84),
                                    add(2305.33),
                                    add(6439.9),
                                }}),
                                add(new Double[]{{
                                    add(4238.55),
                                    add(6188.09),
                                }}),
                            }}) {{
                clusteringMethod = PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum.COMPLETE_LINKAGE;
            }};            

            PostAssetsCorrelationMatrixTheoryImpliedResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixTheoryImplied(req);

            if (res.postAssetsCorrelationMatrixTheoryImplied200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsCorrelationMatrixValidation

Validate whether a matrix is an asset correlation matrix.

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixValidationRequestBody;
import org.openapis.openapi.models.operations.PostAssetsCorrelationMatrixValidationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsCorrelationMatrixValidationRequestBody req = new PostAssetsCorrelationMatrixValidationRequestBody(19193L,                 new Double[][]{{
                                add(new Double[]{{
                                    add(7160.75),
                                    add(6601.74),
                                }}),
                                add(new Double[]{{
                                    add(2900.77),
                                    add(3834.62),
                                }}),
                            }});            

            PostAssetsCorrelationMatrixValidationResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrixValidation(req);

            if (res.postAssetsCorrelationMatrixValidation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
