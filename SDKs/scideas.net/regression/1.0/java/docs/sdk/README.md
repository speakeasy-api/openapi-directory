# SDK

## Overview

This data processing api uses regression analysis to allow you to find out which contributing variables have the most effect on an outcome. For example does buyer location or price most effect sales ?

<https://services.scideas.net/regression>
### Available Operations

* [postRegressionApi](#postregressionapi) - Returns regression analysis.

## postRegressionApi

Returns regression analysis.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRegressionApiResponse;
import org.openapis.openapi.models.shared.RegressionApiBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegressionApiBody req = new RegressionApiBody(                new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsam", "repellendus");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quo", "odit");
                                    put("at", "at");
                                    put("maiores", "molestiae");
                                    put("quod", "quod");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }}),
                            }}, "abc123", "sales") {{
                convertDateTo = "month";
                ignoreVariables = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                        put("optio", "totam");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("commodi", "molestiae");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("qui", "impedit");
                        put("cum", "esse");
                    }}),
                }};
            }};            

            PostRegressionApiResponse res = sdk.sdk.postRegressionApi(req);

            if (res.inlineResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
