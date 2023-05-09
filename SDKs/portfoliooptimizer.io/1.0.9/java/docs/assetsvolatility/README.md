# assetsVolatility

### Available Operations

* [postAssetsVolatility](#postassetsvolatility) - Volatility

## postAssetsVolatility

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset variance(s)

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody1;
import org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody1Assets;
import org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody2;
import org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody3;
import org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody3Assets;
import org.openapis.openapi.models.operations.PostAssetsVolatilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new PostAssetsVolatilityRequestBody1(                new org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody1Assets[]{{
                                add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                                    add(984.78),
                                                    add(8694.89),
                                                    add(920.27),
                                                    add(4541.62),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6091.78),
                                    }};
                                }}),
                                add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                                    add(2327.44),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(3267.01),
                                    }};
                                }}),
                                add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                                    add(330.74),
                                                    add(5223.71),
                                                    add(156.06),
                                                    add(5130.75),
                                                }}) {{
                                    assetReturns = new Double[]{{
                                        add(6144.65),
                                    }};
                                }}),
                            }}) {{
                assets = new org.openapis.openapi.models.operations.PostAssetsVolatilityRequestBody1Assets[]{{
                    add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                        add(3553.69),
                                    }}) {{
                        assetReturns = new Double[]{{
                            add(7422.38),
                            add(333.04),
                            add(3069.86),
                            add(9589.83),
                        }};
                    }}),
                    add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                        add(5318.49),
                                    }}) {{
                        assetReturns = new Double[]{{
                            add(3567.07),
                            add(3917.74),
                        }};
                    }}),
                    add(new PostAssetsVolatilityRequestBody1Assets(                new Double[]{{
                                        add(5362.75),
                                        add(9292.92),
                                    }}) {{
                        assetReturns = new Double[]{{
                            add(8453.58),
                        }};
                    }}),
                }};
            }}            

            PostAssetsVolatilityResponse res = sdk.assetsVolatility.postAssetsVolatility(req);

            if (res.postAssetsVolatility200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
