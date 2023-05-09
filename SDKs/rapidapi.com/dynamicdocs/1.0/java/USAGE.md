<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompileLatexCompilerEnum;
import org.openapis.openapi.models.operations.CompileRequest;
import org.openapis.openapi.models.operations.CompileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    advSecurityToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CompileRequest req = new CompileRequest("application/json", "7a582350acb835ed") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                docFileName = "brilliantDocument";
                docUrlExpiresIn = 3600L;
                latexCompiler = CompileLatexCompilerEnum.LUALATEX;
                latexRuns = 423655L;
                mainFileName = "inputFile.tex";
            }};            

            CompileResponse res = sdk.pdfGeneration.compile(req);

            if (res.compile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->