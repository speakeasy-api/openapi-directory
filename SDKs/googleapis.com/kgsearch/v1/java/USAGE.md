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

            KgsearchEntitiesSearchRequest req = new KgsearchEntitiesSearchRequest() {{
                queryParams = new KgsearchEntitiesSearchQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    ids = new String[]() {{
                        add("expedita"),
                        add("voluptas"),
                    }};
                    indent = true;
                    key = "et";
                    languages = new String[]() {{
                        add("rerum"),
                    }};
                    limit = 7837839688282259259;
                    oauthToken = "debitis";
                    prefix = true;
                    prettyPrint = false;
                    query = "ut";
                    quotaUser = "dolorem";
                    types = new String[]() {{
                        add("voluptate"),
                        add("iste"),
                    }};
                    uploadType = "vitae";
                    uploadProtocol = "totam";
                }};
            }};

            KgsearchEntitiesSearchResponse res = sdk.entities.kgsearchEntitiesSearch(req);

            if (res.searchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->