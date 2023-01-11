<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            FindRequest req = new FindRequest() {{
                queryParams = new FindQueryParams() {{
                    classificationId = new Object[]() {{
                        add("eos"),
                        add("et"),
                    }};
                    classificationName = new Object[]() {{
                        add("aspernatur"),
                        add("praesentium"),
                        add("porro"),
                    }};
                    id = "nihil";
                    includeLicensedContent = "yes";
                    includeSpellcheck = " no";
                    includeTest = " only";
                    keyword = "accusantium";
                    locale = "atque";
                    page = "amet";
                    size = "nisi";
                    sort = "quidem";
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