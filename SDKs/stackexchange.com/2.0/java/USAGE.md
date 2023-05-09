<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensRequest;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccessTokensAccessTokensRequest req = new GetAccessTokensAccessTokensRequest("corrupti") {{
                callback = "provident";
                filter = "distinctio";
                page = 844266L;
                pagesize = 602763L;
            }};            

            GetAccessTokensAccessTokensResponse res = sdk.getAccessTokensAccessTokens(req);

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