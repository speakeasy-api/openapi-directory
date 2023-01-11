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
                        add("voluptas"),
                    }};
                    classificationName = new Object[]() {{
                        add("expedita"),
                        add("consequuntur"),
                    }};
                    id = "dolor";
                    includeLicensedContent = " no";
                    includeSpellcheck = " no";
                    includeTest = "yes";
                    keyword = "et";
                    locale = "nihil";
                    page = "rerum";
                    size = "dicta";
                    sort = "debitis";
                    source = "ticketmaster";
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