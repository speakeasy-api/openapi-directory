<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams;
import org.openapis.openapi.models.operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest;
import org.openapis.openapi.models.operations.AcceleratedmobilepageurlAmpUrlsBatchGetResponse;
import org.openapis.openapi.models.shared.BatchGetAmpUrlsRequestLookupStrategyEnum;
import org.openapis.openapi.models.shared.BatchGetAmpUrlsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcceleratedmobilepageurlAmpUrlsBatchGetRequest req = new AcceleratedmobilepageurlAmpUrlsBatchGetRequest() {{
                queryParams = new AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new BatchGetAmpUrlsRequest() {{
                    lookupStrategy = "IN_INDEX_DOC";
                    urls = new String[]{{
                        add("iure"),
                        add("magnam"),
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