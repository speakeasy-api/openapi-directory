<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostCompileQueryParams;
import org.openapis.openapi.models.operations.PostCompileRequest;
import org.openapis.openapi.models.operations.PostCompileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompileRequest req = new PostCompileRequest() {{
                queryParams = new PostCompileQueryParams() {{
                    explain = "corrupti";
                    instrument = false;
                    metrics = false;
                    pretty = false;
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
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