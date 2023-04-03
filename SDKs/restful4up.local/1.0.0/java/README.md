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

import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBodyFile;
import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum;
import org.openapis.openapi.models.operations.ApplyYaraRulesRequestBody;
import org.openapis.openapi.models.operations.ApplyYaraRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApplyYaraRulesRequestBody req = new ApplyYaraRulesRequestBody() {{
                file = new ApplyYaraRulesRequestBodyFile() {{
                    content = "corrupti".getBytes();
                    file = "provident";
                }};
                isUnpackingRequired = "false";
                rules = new String[]{{
                    add("unde"),
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
            }}            

            ApplyYaraRulesResponse res = sdk.applyYaraRules(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `applyYaraRules` - apply given YARA rules to the given executable. (upto 10 rules)
* `clean` - clean up the uploaded files
* `emulationOutput` - try to get the emulation output after unpacking the file
* `generatePartialYaraRule` - generate partial YARA rules for give executable. (Rule without the condition section)
* `unpack` - try to unpack the given file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
