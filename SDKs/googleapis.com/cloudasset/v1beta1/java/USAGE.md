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

            CloudassetProjectsBatchGetAssetsHistoryRequest req = new CloudassetProjectsBatchGetAssetsHistoryRequest() {{
                security = new CloudassetProjectsBatchGetAssetsHistorySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetProjectsBatchGetAssetsHistoryPathParams() {{
                    parent = "sit";
                }};
                queryParams = new CloudassetProjectsBatchGetAssetsHistoryQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    assetNames = new String[]() {{
                        add("dolor"),
                        add("expedita"),
                        add("voluptas"),
                    }};
                    callback = "fugit";
                    contentType = "CONTENT_TYPE_UNSPECIFIED";
                    fields = "nihil";
                    key = "rerum";
                    oauthToken = "dicta";
                    prettyPrint = true;
                    quotaUser = "voluptatum";
                    readTimeWindowEndTime = "et";
                    readTimeWindowStartTime = "ut";
                    uploadType = "dolorem";
                    uploadProtocol = "et";
                }};
            }};

            CloudassetProjectsBatchGetAssetsHistoryResponse res = sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req);

            if (res.batchGetAssetsHistoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->