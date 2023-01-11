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
                    dollarXgafv = "2";
                    accessToken = "nesciunt";
                    alt = "json";
                    callback = "sunt";
                    fields = "eius";
                    ids = new String[]() {{
                        add("ullam"),
                    }};
                    indent = false;
                    key = "vel";
                    languages = new String[]() {{
                        add("rerum"),
                        add("nemo"),
                    }};
                    limit = 7737765622308491628;
                    oauthToken = "rerum";
                    prefix = true;
                    prettyPrint = true;
                    query = "provident";
                    quotaUser = "eos";
                    types = new String[]() {{
                        add("ipsa"),
                    }};
                    uploadType = "dignissimos";
                    uploadProtocol = "animi";
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