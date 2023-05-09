# assetsVariance

### Available Operations

* [postAssetsVariance](#postassetsvariance) - Variance

## postAssetsVariance

Compute the variance of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset volatility(ies)

References
* [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody1;
import org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody1Assets;
import org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody2;
import org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody3;
import org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody3Assets;
import org.openapis.openapi.models.operations.PostAssetsVarianceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostAssetsVarianceRequestBody3(                new org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody3Assets[]{{
                                add(new PostAssetsVarianceRequestBody3Assets(3984.34) {{
                                    assetVolatility = 6336.08;
                                }}),
                                add(new PostAssetsVarianceRequestBody3Assets(627.13) {{
                                    assetVolatility = 9492.98;
                                }}),
                                add(new PostAssetsVarianceRequestBody3Assets(4240.32) {{
                                    assetVolatility = 9367.47;
                                }}),
                            }}) {{
                assets = new org.openapis.openapi.models.operations.PostAssetsVarianceRequestBody3Assets[]{{
                    add(new PostAssetsVarianceRequestBody3Assets(944.58) {{
                        assetVolatility = 1594.14;
                    }}),
                }};
            }}            

            PostAssetsVarianceResponse res = sdk.assetsVariance.postAssetsVariance(req);

            if (res.postAssetsVariance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
