# pdfGeneration

### Available Operations

* [compile](#compile) - Compile New Document PDF

## compile

Compile a PDF document from a specific template

### Example Usage

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
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
                docFileName = "brilliantDocument";
                docUrlExpiresIn = 3600L;
                latexCompiler = CompileLatexCompilerEnum.LUALATEX;
                latexRuns = 272656L;
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
