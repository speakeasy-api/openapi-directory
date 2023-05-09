<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.FindIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.FindIncludeTestEnum;
import org.openapis.openapi.models.operations.FindRequest;
import org.openapis.openapi.models.operations.FindResponse;
import org.openapis.openapi.models.operations.FindSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindRequest req = new FindRequest() {{
                classificationId = new Object[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                classificationName = new Object[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                id = "69a674e0-f467-4cc8-b96e-d151a05dfc2d";
                includeLicensedContent = FindIncludeLicensedContentEnum.NO;
                includeSpellcheck = FindIncludeSpellcheckEnum.NO;
                includeTest = FindIncludeTestEnum.NO;
                keyword = "quod";
                locale = "quod";
                page = "esse";
                size = "totam";
                sort = "porro";
                source = FindSourceEnum.FRONTGATE;
            }};            

            FindResponse res = sdk.find(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->