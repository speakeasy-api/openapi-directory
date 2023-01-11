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

            GetAccessTokensAccessTokensRequest req = new GetAccessTokensAccessTokensRequest() {{
                pathParams = new GetAccessTokensAccessTokensPathParams() {{
                    accessTokens = "sit";
                }};
                queryParams = new GetAccessTokensAccessTokensQueryParams() {{
                    callback = "voluptas";
                    filter = "culpa";
                    page = 501233450539197794;
                    pagesize = 3390393562759376202;
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