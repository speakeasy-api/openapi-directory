# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                                    put("distinctio", "quibusdam");
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }}),
                            }}, "abc123", "sales") {{
                convertDateTo = "month";
                ignoreVariables = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }}),
                }};
            }};            

            PostRegressionApiResponse res = sdk.postRegressionApi(req);

            if (res.inlineResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [postRegressionApi](docs/sdk/README.md#postregressionapi) - Returns regression analysis.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
