# assetsPrices

### Available Operations

* [postAssetsPricesAdjusted](#postassetspricesadjusted) - Adjusted Prices
* [postAssetsPricesAdjustedForward](#postassetspricesadjustedforward) - Forward-Adjusted Prices

## postAssetsPricesAdjusted

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
* The price on the last date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBody;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsPricesAdjustedRequestBody req = new PostAssetsPricesAdjustedRequestBody(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssets[]{{
                                add(new PostAssetsPricesAdjustedRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(6793.93, "iusto") {{
                                                        close = 672.49;
                                                        date = "soluta";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(5365.79, "omnis") {{
                                                        close = 4536.97;
                                                        date = "dolorum";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(9903.39, "nihil") {{
                                                        close = 8966.72;
                                                        date = "distinctio";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(6630.78, "saepe") {{
                                                        close = 2168.97;
                                                        date = "voluptate";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(9644.9, "quaerat") {{
                                            amount = 7508.44;
                                            date = "libero";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(2123.9, "dolorem") {{
                                            amount = 5542.42;
                                            date = "aliquid";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(2187.49, "hic") {{
                                            amount = 2224.43;
                                            date = "qui";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(4904.59, "reiciendis") {{
                                            close = 7395.51;
                                            date = "voluptate";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(2543.56, "veritatis") {{
                                            close = 2274.14;
                                            date = "dolorum";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(4344.17, "odio") {{
                                            close = 580.29;
                                            date = "ipsa";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("voluptatibus", 3777.52) {{
                                            date = "accusamus";
                                            factor = 6963.44;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("atque", 246.78) {{
                                            date = "natus";
                                            factor = 1796.03;
                                        }}),
                                    }};
                                }}),
                                add(new PostAssetsPricesAdjustedRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(9473.71, "amet") {{
                                                        close = 2155.07;
                                                        date = "quisquam";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(2539.41, "enim") {{
                                                        close = 7308.56;
                                                        date = "accusamus";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(2292.19, "optio") {{
                                            amount = 1372.2;
                                            date = "perferendis";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(9044.25, "suscipit") {{
                                            amount = 8815.86;
                                            date = "ad";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(8310.49, "totam") {{
                                            close = 5883.17;
                                            date = "minima";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(8726.51, "quaerat") {{
                                            close = 6289.82;
                                            date = "alias";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(7980.47, "officiis") {{
                                            close = 2735.42;
                                            date = "vel";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("esse", 6874.88) {{
                                            date = "dolorum";
                                            factor = 9527.92;
                                        }}),
                                    }};
                                }}),
                                add(new PostAssetsPricesAdjustedRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(3556.13, "nam") {{
                                                        close = 4880.56;
                                                        date = "sunt";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(4717.52, "sit") {{
                                            amount = 9574.51;
                                            date = "totam";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(4246.85, "libero") {{
                                            close = 2074.7;
                                            date = "sed";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(4635.75, "ipsum") {{
                                            close = 3741.7;
                                            date = "deserunt";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(5867.84, "maxime") {{
                                            close = 2776.28;
                                            date = "qui";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("laborum", 5173.79) {{
                                            date = "soluta";
                                            factor = 1175.31;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("dolores", 7168.6) {{
                                            date = "incidunt";
                                            factor = 1320.68;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("quam", 5654.21) {{
                                            date = "facilis";
                                            factor = 3960.6;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("neque", 1448.47) {{
                                            date = "temporibus";
                                            factor = 1832.8;
                                        }}),
                                    }};
                                }}),
                                add(new PostAssetsPricesAdjustedRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(3381.59, "ipsum") {{
                                                        close = 8765.06;
                                                        date = "omnis";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(2317.01, "vero") {{
                                                        close = 9615.71;
                                                        date = "voluptate";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(9413.78, "distinctio") {{
                                                        close = 9493.19;
                                                        date = "dignissimos";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(6304.48, "facilis") {{
                                                        close = 7992.03;
                                                        date = "odio";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(7469.94, "nobis") {{
                                            amount = 304.52;
                                            date = "cumque";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(2174.5, "veritatis") {{
                                            amount = 925.96;
                                            date = "saepe";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(7316.94, "cupiditate") {{
                                            amount = 7492.55;
                                            date = "quos";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends(2091.57, "dolore") {{
                                            amount = 456.14;
                                            date = "delectus";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(1002.94, "quae") {{
                                            close = 2408.29;
                                            date = "dolorum";
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices(9295.3, "consequatur") {{
                                            close = 164.29;
                                            date = "quas";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("doloribus", 2817.3) {{
                                            date = "repellendus";
                                            factor = 7851.53;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("qui", 639.55) {{
                                            date = "facilis";
                                            factor = 5864.1;
                                        }}),
                                        add(new PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits("occaecati", 9774.96) {{
                                            date = "laudantium";
                                            factor = 4856.28;
                                        }}),
                                    }};
                                }}),
                            }});            

            PostAssetsPricesAdjustedResponse res = sdk.assetsPrices.postAssetsPricesAdjusted(req);

            if (res.postAssetsPricesAdjusted200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssetsPricesAdjustedForward

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
* The price on the first date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBody;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits;
import org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsPricesAdjustedForwardRequestBody req = new PostAssetsPricesAdjustedForwardRequestBody(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssets[]{{
                                add(new PostAssetsPricesAdjustedForwardRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(8621.92, "excepturi") {{
                                                        close = 978.44;
                                                        date = "ex";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(9608.35, "quisquam") {{
                                                        close = 9729.2;
                                                        date = "nostrum";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(7740.48, "corporis") {{
                                                        close = 9065.56;
                                                        date = "ea";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(811.01, "magnam") {{
                                                        close = 3331.45;
                                                        date = "aliquid";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends(1943.42, "natus") {{
                                            amount = 8445.5;
                                            date = "illum";
                                        }}),
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends(9742.59, "exercitationem") {{
                                            amount = 7733.26;
                                            date = "aut";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(9818.3, "doloribus") {{
                                            close = 1481.41;
                                            date = "porro";
                                        }}),
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(4973.91, "alias") {{
                                            close = 4783.7;
                                            date = "eligendi";
                                        }}),
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(3685.84, "ea") {{
                                            close = 6394.73;
                                            date = "tempora";
                                        }}),
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(8221.18, "magnam") {{
                                            close = 1369;
                                            date = "vel";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits("dicta", 2243.17) {{
                                            date = "ex";
                                            factor = 5113.19;
                                        }}),
                                    }};
                                }}),
                                add(new PostAssetsPricesAdjustedForwardRequestBodyAssets(                new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices[]{{
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(2453.67, "eum") {{
                                                        close = 6720.48;
                                                        date = "placeat";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(5573.69, "assumenda") {{
                                                        close = 4205.39;
                                                        date = "nobis";
                                                    }}),
                                                    add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(7270.44, "quasi") {{
                                                        close = 8605.52;
                                                        date = "voluptas";
                                                    }}),
                                                }}) {{
                                    assetDividends = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends(9262.13, "aspernatur") {{
                                            amount = 7752.2;
                                            date = "consectetur";
                                        }}),
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends(9528.71, "libero") {{
                                            amount = 3253.1;
                                            date = "eaque";
                                        }}),
                                    }};
                                    assetPrices = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices(7705.81, "aliquam") {{
                                            close = 114.27;
                                            date = "deleniti";
                                        }}),
                                    }};
                                    assetSplits = new org.openapis.openapi.models.operations.PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits[]{{
                                        add(new PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits("non", 896.03) {{
                                            date = "accusamus";
                                            factor = 795.22;
                                        }}),
                                    }};
                                }}),
                            }});            

            PostAssetsPricesAdjustedForwardResponse res = sdk.assetsPrices.postAssetsPricesAdjustedForward(req);

            if (res.postAssetsPricesAdjustedForward200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
