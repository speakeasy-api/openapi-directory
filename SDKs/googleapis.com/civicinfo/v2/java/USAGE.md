<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CivicinfoDivisionsSearchQueryParams;
import org.openapis.openapi.models.operations.CivicinfoDivisionsSearchRequest;
import org.openapis.openapi.models.operations.CivicinfoDivisionsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CivicinfoDivisionsSearchRequest req = new CivicinfoDivisionsSearchRequest() {{
                queryParams = new CivicinfoDivisionsSearchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    query = "illum";
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            CivicinfoDivisionsSearchResponse res = sdk.divisions.civicinfoDivisionsSearch(req);

            if (res.divisionSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->