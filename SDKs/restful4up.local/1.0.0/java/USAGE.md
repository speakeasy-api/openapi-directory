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