<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    advSecurityToken = new SchemeAdvSecurityToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CompileRequest req = new CompileRequest() {{
                pathParams = new CompilePathParams() {{
                    templateToken = "sit";
                }};
                queryParams = new CompileQueryParams() {{
                    docFileName = "voluptas";
                    docUrlExpiresIn = 6050128673802995827;
                    latexCompiler = "pdflatex";
                    latexRuns = 3390393562759376202;
                    mainFileName = "dolor";
                }};
                headers = new CompileHeaders() {{
                    contentType = "expedita";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("fugit", "et");
                    put("nihil", "rerum");
                    put("dicta", "debitis");
                }};
            }};

            CompileResponse res = sdk.pdfGeneration.compile(req);

            if (res.compile200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->