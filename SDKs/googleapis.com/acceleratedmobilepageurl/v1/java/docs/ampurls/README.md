# ampUrls

### Available Operations

* [acceleratedmobilepageurlAmpUrlsBatchGet](#acceleratedmobilepageurlampurlsbatchget) - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

## acceleratedmobilepageurlAmpUrlsBatchGet

Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest;
import org.openapis.openapi.models.operations.AcceleratedmobilepageurlAmpUrlsBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchGetAmpUrlsRequest;
import org.openapis.openapi.models.shared.BatchGetAmpUrlsRequestLookupStrategyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcceleratedmobilepageurlAmpUrlsBatchGetRequest req = new AcceleratedmobilepageurlAmpUrlsBatchGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                batchGetAmpUrlsRequest = new BatchGetAmpUrlsRequest() {{
                    lookupStrategy = BatchGetAmpUrlsRequestLookupStrategyEnum.IN_INDEX_DOC;
                    urls = new String[]{{
                        add("suscipit"),
                        add("molestiae"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }};            

            AcceleratedmobilepageurlAmpUrlsBatchGetResponse res = sdk.ampUrls.acceleratedmobilepageurlAmpUrlsBatchGet(req);

            if (res.batchGetAmpUrlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
