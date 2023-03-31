<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompilePathParams;
import org.openapis.openapi.models.operations.CompileLatexCompilerEnum;
import org.openapis.openapi.models.operations.CompileQueryParams;
import org.openapis.openapi.models.operations.CompileHeaders;
import org.openapis.openapi.models.operations.CompileRequest;
import org.openapis.openapi.models.operations.CompileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    advSecurityToken = new SchemeAdvSecurityToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CompileRequest req = new CompileRequest() {{
                pathParams = new CompilePathParams() {{
                    templateToken = "7a582350acb835ed";
                }};
                queryParams = new CompileQueryParams() {{
                    docFileName = "brilliantDocument";
                    docUrlExpiresIn = 3600;
                    latexCompiler = "lualatex";
                    latexRuns = 592845;
                    mainFileName = "inputFile.tex";
                }};
                headers = new CompileHeaders() {{
                    contentType = "application/json";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
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