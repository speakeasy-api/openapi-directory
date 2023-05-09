# assetsSkewness

### Available Operations

* [postAssetsSkewness](#postassetsskewness) - Skewness

## postAssetsSkewness

Compute the skewness of one or several asset(s), from the asset returns.

References
* [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsSkewnessRequestBody;
import org.openapis.openapi.models.operations.PostAssetsSkewnessRequestBodyAssets;
import org.openapis.openapi.models.operations.PostAssetsSkewnessResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostAssetsSkewnessRequestBody req = new PostAssetsSkewnessRequestBody(                new org.openapis.openapi.models.operations.PostAssetsSkewnessRequestBodyAssets[]{{
                                add(new PostAssetsSkewnessRequestBodyAssets(                new Double[]{{
                                                    add(2400.2),
                                                    add(7669.64),
                                                    add(1605.38),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6360.61),
                                    }};
                                }}),
                                add(new PostAssetsSkewnessRequestBodyAssets(                new Double[]{{
                                                    add(9591.67),
                                                    add(2328.65),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(7963.92),
                                    }};
                                }}),
                                add(new PostAssetsSkewnessRequestBodyAssets(                new Double[]{{
                                                    add(8577.23),
                                                    add(5578.11),
                                                    add(4572.23),
                                                    add(974.68),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(5034.27),
                                        add(5909.84),
                                    }};
                                }}),
                                add(new PostAssetsSkewnessRequestBodyAssets(                new Double[]{{
                                                    add(9088.44),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6216.79),
                                        add(5757.51),
                                        add(8630.23),
                                        add(8207.67),
                                    }};
                                }}),
                            }});            

            PostAssetsSkewnessResponse res = sdk.assetsSkewness.postAssetsSkewness(req);

            if (res.postAssetsSkewness200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
