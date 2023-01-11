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

            AcceleratedmobilepageurlAmpUrlsBatchGetRequest req = new AcceleratedmobilepageurlAmpUrlsBatchGetRequest() {{
                queryParams = new AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "blanditiis";
                    alt = "proto";
                    callback = "nihil";
                    fields = "asperiores";
                    key = "quaerat";
                    oauthToken = "hic";
                    prettyPrint = false;
                    quotaUser = "est";
                    uploadType = "nostrum";
                    uploadProtocol = "pariatur";
                }};
                request = new BatchGetAmpUrlsRequest() {{
                    lookupStrategy = "FETCH_LIVE_DOC";
                    urls = new String[]() {{
                        add("possimus"),
                    }};
                }};
            }};

            AcceleratedmobilepageurlAmpUrlsBatchGetResponse res = sdk.ampUrls.acceleratedmobilepageurlAmpUrlsBatchGet(req);

            if (res.batchGetAmpUrlsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->