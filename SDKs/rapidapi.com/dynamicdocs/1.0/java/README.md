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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pdfGeneration

* `compile` - Compile New Document PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
