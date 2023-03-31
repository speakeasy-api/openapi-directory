<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.FindIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.FindIncludeTestEnum;
import org.openapis.openapi.models.operations.FindSourceEnum;
import org.openapis.openapi.models.operations.FindQueryParams;
import org.openapis.openapi.models.operations.FindRequest;
import org.openapis.openapi.models.operations.FindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindRequest req = new FindRequest() {{
                queryParams = new FindQueryParams() {{
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
                    id = "vel";
                    includeLicensedContent = " no";
                    includeSpellcheck = " no";
                    includeTest = " no";
                    keyword = "iure";
                    locale = "magnam";
                    page = "debitis";
                    size = "ipsa";
                    sort = "delectus";
                    source = " universe";
                }};
            }};            

            FindResponse res = sdk.find(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->