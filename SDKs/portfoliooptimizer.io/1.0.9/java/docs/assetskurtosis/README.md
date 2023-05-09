# assetsKurtosis

### Available Operations

* [postAssetsKurtosis](#postassetskurtosis) - Kurtosis

## postAssetsKurtosis

Compute the kurtosis of one or several asset(s), from the asset returns.

References
* [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsKurtosisRequestBody;
import org.openapis.openapi.models.operations.PostAssetsKurtosisRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsKurtosisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsKurtosisRequestBody req = new PostAssetsKurtosisRequestBody(                new org.openapis.openapi.models.operations.PostAssetsKurtosisRequestBodyAssets[]{{
                                add(new PostAssetsKurtosisRequestBodyAssets(                new Double[]{{
                                                    add(117.14),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(8558.04),
                                    }};
                                }}),
                                add(new PostAssetsKurtosisRequestBodyAssets(                new Double[]{{
                                                    add(3394.04),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(3599.78),
                                        add(9441.24),
                                        add(7299.91),
                                        add(7499.99),
                                    }};
                                }}),
                                add(new PostAssetsKurtosisRequestBodyAssets(                new Double[]{{
                                                    add(1794.9),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(4895.49),
                                        add(543.38),
                                        add(3389.85),
                                    }};
                                }}),
                                add(new PostAssetsKurtosisRequestBodyAssets(                new Double[]{{
                                                    add(4634.51),
                                                    add(2239.24),
                                                    add(8745.73),
                                                    add(3453.52),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(1709.86),
                                    }};
                                }}),
                            }});            

            PostAssetsKurtosisResponse res = sdk.assetsKurtosis.postAssetsKurtosis(req);

            if (res.postAssetsKurtosis200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
