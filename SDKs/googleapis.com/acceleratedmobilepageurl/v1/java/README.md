# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                batchGetAmpUrlsRequest = new BatchGetAmpUrlsRequest() {{
                    lookupStrategy = BatchGetAmpUrlsRequestLookupStrategyEnum.IN_INDEX_DOC;
                    urls = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ampUrls](docs/ampurls/README.md)

* [acceleratedmobilepageurlAmpUrlsBatchGet](docs/ampurls/README.md#acceleratedmobilepageurlampurlsbatchget) - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
