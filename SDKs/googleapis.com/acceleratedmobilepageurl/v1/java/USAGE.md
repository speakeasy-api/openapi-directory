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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new BatchGetAmpUrlsRequest() {{
                    lookupStrategy = "IN_INDEX_DOC";
                    urls = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
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