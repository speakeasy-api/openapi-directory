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
                    accessTokens = "delectus";
                }};
                queryParams = new GetAccessTokensAccessTokensQueryParams() {{
                    callback = "rerum";
                    filter = "dolore";
                    page = 7274936573655343394;
                    pagesize = 7796777083842162182;
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