<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CompileLatexCompilerEnum;
import org.openapis.openapi.models.operations.CompileRequest;
import org.openapis.openapi.models.operations.CompileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    advSecurityToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompileRequest req = new CompileRequest() {{
                contentType = "application/json";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                docFileName = "brilliantDocument";
                docUrlExpiresIn = 3600;
                latexCompiler = "lualatex";
                latexRuns = 423655;
                mainFileName = "inputFile.tex";
                templateToken = "7a582350acb835ed";
            }}            

            CompileResponse res = sdk.pdfGeneration.compile(req);

            if (res.compile200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->