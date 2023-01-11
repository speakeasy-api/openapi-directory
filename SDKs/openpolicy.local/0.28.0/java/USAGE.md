<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostCompileRequest req = new PostCompileRequest() {{
                queryParams = new PostCompileQueryParams() {{
                    explain = "aut";
                    instrument = false;
                    metrics = false;
                    pretty = true;
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("consequatur", "consequatur");
                    put("ea", "deserunt");
                }};
            }};

            PostCompileResponse res = sdk.compileAPI.postCompile(req);

            if (res.postCompile200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->