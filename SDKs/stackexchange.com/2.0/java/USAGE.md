<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensPathParams;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensQueryParams;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensRequest;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccessTokensAccessTokensRequest req = new GetAccessTokensAccessTokensRequest() {{
                pathParams = new GetAccessTokensAccessTokensPathParams() {{
                    accessTokens = "corrupti";
                }};
                queryParams = new GetAccessTokensAccessTokensQueryParams() {{
                    callback = "provident";
                    filter = "distinctio";
                    page = 844266;
                    pagesize = 602763;
                }};
            }};            

            GetAccessTokensAccessTokensResponse res = sdk.getAccessTokensAccessTokens(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->