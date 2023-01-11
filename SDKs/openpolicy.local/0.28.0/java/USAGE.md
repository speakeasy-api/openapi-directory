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
                    explain = "sit";
                    instrument = false;
                    metrics = true;
                    pretty = false;
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("dolor", "expedita");
                    put("voluptas", "fugit");
                    put("et", "nihil");
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